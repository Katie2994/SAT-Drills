import { VocabCard } from '../../types';
import { vocabList } from './vocabularyList';
import { mathVocabList } from './mathVocab';
import { extraVocabList } from './extraVocab';
import { offlineSATDictionary } from './offlineTranslator';
import { defaultMeanings } from './defaultMeanings';

// Export raw components for specific use cases (like Quizzes or custom scripts)
export { vocabList } from './vocabularyList';
export { mathVocabList } from './mathVocab';
export { extraVocabList } from './extraVocab';
export { offlineSATDictionary } from './offlineTranslator';
export { defaultMeanings } from './defaultMeanings';

// Map each extra vocab word to ensure standard, robust definitions
const enrichedExtraVocabList = extraVocabList.map(card => {
  const lowerTerm = card.term.toLowerCase().trim();
  const dictMatch = offlineSATDictionary[lowerTerm];
  if (dictMatch && (card.definition.includes("Từ vựng học thuật") || card.definition === "Từ học thuật SAT chuẩn.")) {
    return {
      ...card,
      definition: dictMatch.definition,
      synonym: dictMatch.synonym,
      antonym: dictMatch.antonym,
      topic: dictMatch.topic,
      example: dictMatch.example,
      icon: dictMatch.icon
    };
  }
  const fallbackVal = defaultMeanings[lowerTerm];
  if (fallbackVal && (card.definition.includes("Từ vựng học thuật") || card.definition === "Từ học thuật SAT chuẩn.")) {
    return {
      ...card,
      definition: fallbackVal.definition,
      synonym: fallbackVal.synonym,
      antonym: fallbackVal.antonym,
      topic: fallbackVal.topic,
      example: fallbackVal.example,
      icon: fallbackVal.icon
    };
  }
  
  // Clean default fallback placeholder
  if (card.definition.includes("Từ vựng học thuật") || card.definition === "Từ học thuật SAT chuẩn.") {
    return {
      ...card,
      definition: `Từ vựng học thuật quan trọng, thường thấy trong các bài đọc hiểu SAT/GRE.`,
      synonym: "academic, scholastic",
      antonym: "vernacular, informal",
      topic: "General Academic",
      example: `Getting familiar with the word "${card.term}" is highly recommended for the SAT test.`,
      icon: "📚"
    };
  }
  return card;
});

// Precompute combined list
export const combinedVocabList: VocabCard[] = [...vocabList, ...mathVocabList, ...enrichedExtraVocabList].map(card => {
  if (card.type === 'concept') {
    let subTopic = "Algebra";
    if (card.id >= 1036 && card.id <= 1080) {
      subTopic = "Advanced Math";
    } else if (card.id >= 1081 && card.id <= 1125) {
      subTopic = "Problem Solving & Data";
    } else if (card.id >= 1126) {
      subTopic = "Geometry & Trig";
    }
    return { ...card, topic: subTopic };
  }
  return card;
});
