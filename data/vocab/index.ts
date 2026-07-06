import { VocabCard } from '../../types';
import { vocabList } from './vocabularyList';
import { mathVocabList } from './mathVocab';
import { extraVocabList } from './extraVocab';
import { offlineSATDictionary } from './offlineTranslator';
import { defaultMeanings } from './defaultMeanings';
import { usPoliticsVocab } from './usPoliticsVocab';
import { ideasVocabList } from './ideasVocab';

// Export raw components for specific use cases (like Quizzes or custom scripts)
export { vocabList } from './vocabularyList';
export { mathVocabList } from './mathVocab';
export { extraVocabList } from './extraVocab';
export { offlineSATDictionary } from './offlineTranslator';
export { defaultMeanings } from './defaultMeanings';
export { usPoliticsVocab } from './usPoliticsVocab';
export { ideasVocabList } from './ideasVocab';

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
export const combinedVocabList: VocabCard[] = [...vocabList, ...mathVocabList, ...enrichedExtraVocabList, ...usPoliticsVocab, ...ideasVocabList].map(card => {
  if (card.type === 'concept' && card.id >= 1001 && card.id <= 1999) {
    const topics: string[] = [];
    const id = card.id;

    const addTopic = (t: string) => {
      if (!topics.includes(t)) topics.push(t);
    };

    // 1. Core SAT domain base assignments
    if (id >= 1001 && id <= 1035) {
      addTopic("Algebra");
    } else if (id >= 1036 && id <= 1080) {
      addTopic("Advanced Math");
    } else if (id >= 1081 && id <= 1125) {
      addTopic("Problem Solving & Data");
    } else if (id >= 1126 && id <= 1205) {
      addTopic("Geometry & Trig");
    }

    // 2. Cross-domain / Multi-topic rules
    // Algebraic foundations of functions and equations used in both Algebra and Advanced Math
    if ([1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1018, 1019, 1023, 1026, 1027, 1030].includes(id)) {
      addTopic("Advanced Math");
    }

    // Linear functions & coordinate planes used in Algebra, Advanced Math, and Geometry & Trig
    if ([1011, 1012, 1015, 1016, 1017].includes(id)) {
      addTopic("Advanced Math");
    }
    if ([1012, 1015, 1016, 1017, 1186, 1194, 1195, 1196].includes(id)) {
      addTopic("Geometry & Trig");
    }
    if ([1186, 1194, 1195, 1196].includes(id)) {
      addTopic("Algebra");
      addTopic("Advanced Math");
    }

    // Number properties (GCF, LCM, Factor, To factor, Multiple) belong to Algebra, Advanced Math, and Problem Solving
    if ([1031, 1032, 1033, 1035].includes(id)) {
      addTopic("Problem Solving & Data");
    }
    if ([1033, 1034].includes(id)) {
      addTopic("Advanced Math");
    }

    // Basic expression operations apply to both Algebra and Advanced Math
    if ([1036, 1037, 1038, 1039, 1040, 1041, 1054].includes(id)) {
      addTopic("Algebra");
    }

    // Quadratic features (parabola, vertex, axis of symmetry) are deeply geometric
    if ([1049, 1050, 1051].includes(id)) {
      addTopic("Geometry & Trig");
    }

    // Exponential rates and percentages connect Advanced Math models to Problem Solving/Data
    if ([1056, 1057, 1058, 1093, 1094].includes(id)) {
      addTopic("Problem Solving & Data");
      addTopic("Advanced Math");
    }

    // General functions (domain, range, input, output, notation, behavior)
    if ([1073, 1074, 1075, 1076, 1077, 1078, 1079, 1080].includes(id)) {
      addTopic("Algebra");
    }
    if ([1077, 1079, 1080].includes(id)) {
      addTopic("Problem Solving & Data");
    }

    // Proportions, units, and rates apply to applied algebra word problems
    if ([1082, 1083, 1084, 1085, 1086, 1087, 1105].includes(id)) {
      addTopic("Algebra");
    }
    if ([1088, 1089].includes(id)) {
      addTopic("Geometry & Trig");
    }

    return { ...card, topic: topics.length > 1 ? topics : (topics[0] || "Algebra") };
  }
  return card;
});
