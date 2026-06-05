import { GoogleGenAI } from "@google/genai";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config();

import { extraVocabList } from "./data/extraVocab";

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  console.error("No API key");
  process.exit(1);
}

const ai = new GoogleGenAI({ apiKey });

async function main() {
  // Find cards with fallback definitions
  const fallbacks = extraVocabList.filter(
    (c) => c.definition.includes("Từ vựng học thuật") || c.definition === "Từ học thuật SAT chuẩn."
  );

  console.log(`Found ${fallbacks.length} words needing detailed translations.`);
  if (fallbacks.length === 0) {
    console.log("All words are already fully translated!");
    process.exit(0);
  }

  // Process a batch of up to 150 words in a single run
  const batchSize = Math.min(150, fallbacks.length);
  const wordsToProcess = fallbacks.slice(0, batchSize);
  console.log(`Translating a batch of ${wordsToProcess.length} words...`);

  // Split into 3 parallel requests of ~50 words each (safe for rate limits and block size)
  const NUM_CHUNKS = 3;
  const chunks: any[][] = Array.from({ length: NUM_CHUNKS }, () => []);
  wordsToProcess.forEach((word, idx) => {
    chunks[idx % NUM_CHUNKS].push(word);
  });

  const promises = chunks.map(async (chunk, index) => {
    if (chunk.length === 0) return [];
    
    const wordNames = chunk.map(c => c.term);
    console.log(`Requesting translations for chunk ${index + 1} (${chunk.length} words)...`);

    const prompt = `Bạn là một từ điển học thuật luyện thi SAT/GRE chất lượng cao. Hãy dịch và phân tích danh sách từ vựng dưới đây sang đúng định dạng JSON Array chứa các thuộc tính:
    - "term": Tên từ tiếng Anh (e.g. "${wordNames[0] || "abrupt"}")
    - "definition": Định nghĩa tiếng Việt súc tích, chi tiết và chính xác (e.g. "Đột ngột, bất ngờ, ngoài mong đợi (thường gây khó chịu)")
    - "synonym": Một hoặc hai từ đồng nghĩa tiếng Anh đơn giản (e.g. "sudden")
    - "antonym": Một hoặc hai từ trái nghĩa tiếng Anh phù hợp (e.g. "gradual")
    - "topic": Chọn 1 chủ đề: "Arts & Lit", "Science & Tech", "Business & Law", "History & Social", "Logic & Essay", "General Academic"
    - "example": Một câu ví dụ tiếng Anh ngắn gọn chuẩn SAT/GRE
    - "icon": Một emoji thể hiện ý nghĩa của từ

Danh sách từ: ${wordNames.join(", ")}
    `;

    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3.5-flash',
        contents: prompt,
        config: {
          temperature: 0.1,
          responseMimeType: "application/json"
        }
      });
      return JSON.parse(response.text || "[]");
    } catch (err: any) {
      console.error(`Chunk ${index+1} failed:`, err.message || err);
      return [];
    }
  });

  const results = await Promise.all(promises);
  const flatResults = results.flat();

  // Create a map of updated values
  const updateMap = new Map();
  flatResults.forEach((item: any) => {
    if (item && item.term) {
      updateMap.set(item.term.toLowerCase().trim(), item);
    }
  });

  // Apply updates to the original list
  let updatedCount = 0;
  const newVocabList = extraVocabList.map((card) => {
    const updated = updateMap.get(card.term.toLowerCase().trim());
    if (updated) {
      updatedCount++;
      return {
        ...card,
        definition: updated.definition || card.definition,
        synonym: updated.synonym || card.synonym,
        antonym: updated.antonym || card.antonym,
        topic: updated.topic || card.topic,
        example: updated.example || card.example,
        icon: updated.icon || card.icon
      };
    }
    return card;
  });

  console.log(`Successfully updated ${updatedCount} words!`);

  const fileContent = `import { VocabCard } from '../types';

export const extraVocabList: VocabCard[] = ${JSON.stringify(newVocabList, null, 2)};
`;

  fs.writeFileSync('data/extraVocab.ts', fileContent);
  console.log(`Saved changes to data/extraVocab.ts. ${fallbacks.length - updatedCount} words remaining.`);
}

main();
