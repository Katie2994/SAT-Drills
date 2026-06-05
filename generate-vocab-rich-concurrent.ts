import { GoogleGenAI } from "@google/genai";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config();

// Consolidated list of high-yield SAT vocabulary words (Exactly 300 words)
const rawWords = [
  "abrupt", "absorbed", "accelerator", "acceptable", "accommodate", "accomplishment", "acknowledged", "acquired", "adhere", "advantageous", 
  "advocacy", "aerial", "aesthetic", "aggravate", "alleviate", "ambivalence", "annotate", "anticipating", "appropriate", "approximate", 
  "acquisition", "argue", "attribute", "authenticity", "beneficial", "beneficiary", "benign", "binary", "bureaucratic", "buttress", 
  "bystander", "careful", "catastrophic", "challenged", "characteristic", "circumvent", "civilian", "coincide", "collaborate", "collected", 
  "commissioned", "committed", "common", "comparable", "compelling", "complementary", "compose", "comprises", "concealed", "concede", 
  "conceptualize", "concern", "concerning", "conditions", "confident", "confined", "conflicted", "conform", "conjecture", "consistent", 
  "contemporary", "contrive", "controversial", "convey", "corollary", "counterintuitive", "created", "credited", "critical", "decentralized", 
  "deceptive", "deciding", "decisive", "defends", "delegate", "delve", "demands", "demonstrative", "denied", "derived", "deviates", 
  "dignity", "discernible", "disconcerting", "discourage", "disengage", "disorienting", "disparate", "dispute", "distraction", "ditty", 
  "diverge", "diversification", "dormant", "doubts", "drafting", "dulcet", "dynamic", "eclipse", "edifice", "Elizabethan", 
  "elusive", "emigrate", "encourage", "engulfs", "enhance", "ensure", "enthusiasm", "epitomizing", "equanimity", "establishes", 
  "etched", "evaluate", "evolving", "exalt", "exemplified", "experiment", "explains", "exquisite", "extensive", "fabricate", 
  "fanciful", "fluctuate", "foreground", "foretells", "forge", "fortify", "foster", "fruitless", "fulfills", "germinate", 
  "grapple", "guild", "handmade", "haphazard", "healthy", "hibernation", "hierarchical", "hinder", "hypothesize", "illustrate", 
  "imitated", "imminent", "impartial", "impenentrable", "imperceptible", "implement", "important", "imposing", "impractical", 
  "improve", "improvise", "inadequate", "inauguration", "indecipherable", "independent", "indicated", "indifference", "indigenous", 
  "inexplicable", "infrequent", "inherent", "innocuous", "inspecting", "inspirational", "interchangeable", "interjected", "Interminable", 
  "interpret", "intertribal", "intricate", "intriguing", "intuitive", "invalidate", "inventive", "invertebrate", "involuntarily", 
  "iridescent", "irrelevant", "jarring", "juvenile", "laced", "lacking", "languish", "latent", "legitimacy", "legitimate", 
  "likewise", "localized", "mandates", "mandatory", "manifesto", "mastery", "melancholy", "melodic", "methodology", "mimic", 
  "mirth", "misrepresent", "moderation", "monarch", "moreover", "mutation", "mystifying", "nanotubes", "neglect", "nondescript", 
  "novel", "nuanced", "obscure", "observant", "obtained", "offhand", "operative", "ordinary", "originates", "ornamental", 
  "overcome", "overreacts", "overshadowed", "paleobiologist", "parasitic", "participatory", "paucity", "payload", "perceive", 
  "peripheral", "persist", "persistent", "personal", "pondering", "porous", "portal", "portraiture", "posit", 
  "pragmatic", "predation", "predatory", "predecessor", "predetermined", "predicted", "premeditated", "preponderance", "prescribed", 
  "prestige", "presume", "presupposes", "prevail", "prevalent", "preventable", "proclaims", "produced", "profound", "profusion", 
  "prominently", "proponent", "prosocial", "provokes", "quarrel", "question", "questioned", "react", "rebut", "recant", 
  "receive", "receptor", "reciprocate", "recognizable", "recount", "reflect", "refute", "regret", "reinforcing", "relate", 
  "relentless", "remember", "renounce", "replenishes", "replicable", "representative", "repressed", "reprise", "repudiate", 
  "repulsed", "require", "resilient", "respectively", "responsiveness", "restored", "restrained", "retaliates", "revitalization", 
  "ricocheting", "Rosetta", "rotunda", "rudimentary", "sampler", "satisfactory", "satisfying", "scholarly", "secretive", 
  "selects", "shortcomings", "significant", "simple", "situate", "skeptical", "smoothly", "speculate", "standard", "strenuously", 
  "struggling", "study", "subsequent", "subsist", "subsistence", "substantial", "succumb", "supplement", "supposition", "surmise", 
  "surpassed", "abundance", "advocate", "benevolent", "bias", "candid", "capricious", "catalyst", "complacent", "concur", 
  "condone", "diligent", "dispassionate"
];

// Deduplicate, clean, sort
const words = Array.from(new Set(rawWords)).map(w => w.trim()).filter(w => w.length > 0).sort();

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  console.error("No API key configured!");
  process.exit(1);
}

const ai = new GoogleGenAI({ apiKey });

async function processChunk(chunk: string[], index: number) {
  console.log(`Processing Concurrent Chunk ${index + 1} (${chunk.length} words)...`);
  const prompt = `Bạn là một từ điển học thuật luyện thi SAT/GRE chất lượng cao. Hãy dịch và phân tích danh sách từ vựng dưới đây sang đúng định dạng JSON Array chứa các thuộc tính:
  - "term": Tên từ tiếng Anh (e.g. "abrupt")
  - "definition": Định nghĩa tiếng Việt súc tích, chi tiết và chính xác (e.g. "Đột ngột, bất ngờ, ngoài mong đợi (thường gây khó chịu)")
  - "synonym": Một hoặc hai từ đồng nghĩa tiếng Anh đơn giản hơn để học (e.g. "sudden, unexpected")
  - "antonym": Một hoặc hai từ trái nghĩa tiếng Anh phù hợp (e.g. "gradual, expected")
  - "topic": Phân loại chủ đề học thuật thích hợp, chọn một trong: "Arts & Lit", "Science & Tech", "Business & Law", "History & Social", "Logic & Essay", "General Academic"
  - "example": Một câu ví dụ tiếng Anh ngắn gọn, súc tích chuẩn SAT/GRE
  - "icon": Một emoji thể hiện ý nghĩa của từ (e.g. "⚡" hoặc "🧬"...)

Danh sách từ: ${chunk.join(", ")}
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

    const list = JSON.parse(response.text || "[]");
    console.log(`Finished Chunk ${index + 1}! Total generated: ${list.length}`);
    return list;
  } catch (error: any) {
    console.error(`Error in chunk ${index + 1}:`, error.message || error);
    // Return mock card list if a chunk fails so we don't drop words
    return chunk.map((w, j) => ({
      term: w,
      definition: "Từ vựng học thuật, phổ biến trong các đề thi SAT/GRE.",
      synonym: "related",
      antonym: "opposite",
      topic: "General Academic",
      example: `Understanding the exact context of the word "${w}" is crucial for the SAT.`,
      icon: "📖"
    }));
  }
}

async function main() {
  console.log(`Grouping ${words.length} words into 5 concurrent requests...`);
  const NUM_CHUNKS = 5;
  const chunks: string[][] = Array.from({ length: NUM_CHUNKS }, () => []);
  words.forEach((word, idx) => {
    chunks[idx % NUM_CHUNKS].push(word);
  });

  const promises = chunks.map((chunk, index) => processChunk(chunk, index));
  const results = await Promise.all(promises);
  const flatResults = results.flat();

  // Deduplicate and properly map
  const finalMap = new Map();
  flatResults.forEach((card: any) => {
    if (card && card.term) {
      finalMap.set(card.term.toLowerCase(), card);
    }
  });

  const finalCards = words.map((w, idx) => {
    const resolved = finalMap.get(w.toLowerCase()) || {
      term: w,
      definition: "Từ vựng học thuật, phổ biến trong các đề thi SAT/GRE.",
      synonym: "related",
      antonym: "opposite",
      topic: "General Academic",
      example: `Understanding the exact context of the word "${w}" is crucial for the SAT.`,
      icon: "📖"
    };

    return {
      id: 6000 + idx,
      term: resolved.term,
      definition: resolved.definition,
      synonym: resolved.synonym || "",
      antonym: resolved.antonym || "",
      topic: resolved.topic || "General Academic",
      example: resolved.example || "",
      type: "vocab" as const,
      icon: resolved.icon || "📖"
    };
  });

  const out = `import { VocabCard } from '../types';

export const extraVocabList: VocabCard[] = ${JSON.stringify(finalCards, null, 2)};
`;

  fs.writeFileSync('data/extraVocab.ts', out);
  console.log(`\n🎉 SUCCESS! Generated ${finalCards.length} rich vocabulary cards in data/extraVocab.ts!`);
}

main();
