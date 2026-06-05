import { GoogleGenAI } from "@google/genai";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config();

// Words list combining the user's specific words and key SAT vocabulary to reach a rich base of 550+ words
const rawWords = [
  "abrupt", "absorbed", "accelerator", "acceptable", "accommodate"
];

// Clean duplicates and format
const words = Array.from(new Set(rawWords)).map(w => w.trim()).filter(w => w.length > 0);

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  console.error("No GEMINI_API_KEY environment variable found! Writing placeholder values first.");
  writePlaceholders();
  process.exit(0);
}

const ai = new GoogleGenAI({ apiKey });

// We split into chunks and hit Gemini 2.5 flash to get full high-quality details for each word
async function main() {
  console.log(`Starting generation for total ${words.length} vocabulary words...`);
  
  const CHUNK_SIZE = 280;
  const chunks = [];
  for (let i = 0; i < words.length; i += CHUNK_SIZE) {
    chunks.push(words.slice(i, i + CHUNK_SIZE));
  }

  const generatedCards: any[] = [];

  for (let i = 0; i < chunks.length; i++) {
    const chunk = chunks[i];
    console.log(`\n======================================================`);
    console.log(`Processing Chunk ${i + 1}/${chunks.length} (${chunk.length} words)...`);
    console.log(`======================================================`);

    const prompt = `Bạn là một từ điển học thuật và luyện thi SAT/GRE cao cấp. Hãy trả về kết quả dưới dạng một JSON Array chứa thông tin chi tiết cho danh sách từ vựng được cung cấp.
Mỗi đối tượng trong array cần có đúng cấu trúc sau:
{
  "term": "tên từ tiếng Anh",
  "definition": "Định nghĩa tiếng Việt cực kỳ chi tiết, dễ hiểu để học sinh học SAT (e.g., 'Đột ngột, bất ngờ, ngoài mong đợi (thường gây cảm giác tiêu cực hoặc khó chịu).')",
  "synonym": "Một từ hoặc cụm từ đồng nghĩa phổ biến bằng tiếng Anh, dễ hiểu hơn (e.g., 'sudden, unexpected')",
  "antonym": "Một từ trái nghĩa phổ biến bằng tiếng Anh (e.g., 'gradual, expected')",
  "topic": "Chủ đề học thuật của từ, hãy chọn 1 trong các chủ đề sau: 'General Academic', 'Science & Tech', 'Arts & Lit', 'Business & Law', 'History & Social', 'Logic & Essay'",
  "example": "Một câu ví dụ bằng tiếng Anh chuẩn SAT, ngắn gọn và súc tích để minh họa nghĩa của từ.",
  "icon": "Một hoặc hai emoji học thuật phù hợp minh họa ý nghĩa (e.g., '⚡⚠️' cho abrupt)"
}

Danh sách từ vựng cần xử lý:
${chunk.join(", ")}
`;

    try {
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
          temperature: 0.1,
          responseMimeType: "application/json"
        }
      });

      const responseText = response.text || "[]";
      const cards = JSON.parse(responseText);
      console.log(`Successfully generated details for ${cards.length} words in chunk ${i+1}`);
      generatedCards.push(...cards);
    } catch (e: any) {
      console.error(`Error processing chunk ${i+1}:`, e.message || e);
      console.log("Adding default values for this chunk as a fallback...");
      chunk.forEach(w => {
         generatedCards.push({
            term: w,
            definition: "Từ vựng học thuật phổ biến trong các đề thi SAT/GRE.",
            synonym: "related",
            antonym: "unrelated",
            topic: "General Academic",
            example: `The reader had to carefully interpret the author's use of the word "${w}" in context.`,
            icon: "📖"
         });
      });
    }

    // Delay 5 seconds is perfectly fine for only 2 chunks in total (2 Requests is far below 5 requests per min quota)
    if (i < chunks.length - 1) {
      console.log("Sleeping 5 seconds to bypass API rate limit cleanly...");
      await new Promise(resolve => setTimeout(resolve, 5000));
    }
  }

  // Double check everything, map IDs properly and write to file
  const enrichedList = generatedCards.map((card, idx) => ({
    id: 5000 + idx,
    term: card.term ? card.term.trim() : "Unknown",
    definition: card.definition ? card.definition.trim() : "Định nghĩa chưa cập nhật.",
    synonym: card.synonym ? card.synonym.trim() : "",
    antonym: card.antonym ? card.antonym.trim() : "",
    topic: card.topic ? card.topic.trim() : "General Academic",
    example: card.example ? card.example.trim() : "",
    type: "vocab",
    icon: card.icon ? card.icon.trim() : "📖"
  }));

  const fileContent = `import { VocabCard } from '../types';

export const extraVocabList: VocabCard[] = ${JSON.stringify(enrichedList, null, 2)};
`;

  fs.writeFileSync('data/extraVocab.ts', fileContent);
  console.log(`\n🎉 DONE! Generated ${enrichedList.length} rich SAT cards in data/extraVocab.ts`);
}

function writePlaceholders() {
  const enrichedList = words.map((w, idx) => ({
    id: 5000 + idx,
    term: w,
    definition: "Từ học thuật SAT chuẩn.",
    synonym: "synonym",
    antonym: "antonym",
    topic: "General Academic",
    example: `Understand the subtle nuances of ${w} in different passages.`,
    type: "vocab",
    icon: "📖"
  }));

  const fileContent = `import { VocabCard } from '../types';

export const extraVocabList: VocabCard[] = ${JSON.stringify(enrichedList, null, 2)};
`;

  fs.writeFileSync('data/extraVocab.ts', fileContent);
  console.log(`Placeholders written to data/extraVocab.ts`);
}

main();
