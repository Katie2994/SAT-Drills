import React from 'react';

// Extend Window interface for external libraries
declare global {
  interface Window {
    katex: any;
    Desmos: any;
  }
}

export enum ViewState {
  HOME = 'HOME',
  LEARN = 'LEARN',
  VOCAB = 'VOCAB',
  PRACTICE = 'PRACTICE',
  QUIZ = 'QUIZ',
  CHECKLIST = 'CHECKLIST',
  RESOURCES = 'RESOURCES',
  AI_SOLVER = 'AI_SOLVER'
}

export interface VocabCard {
  id: number;
  term: string;
  definition: string;
  type: 'vocab' | 'transition' | 'concept';
  icon?: string;
  example?: string;
  note?: string;
  synonym?: string;
  antonym?: string;
  topic?: string;
}

export interface TheorySection {
  id: string;
  category: 'Overview' | 'Verbal' | 'Math';
  title: string;
  content: React.ReactNode;
}

export interface KeyVocabItem {
  term: string;
  definition: string;
}

export interface SampleResponse {
  difficulty: string; // e.g. "Easy", "Medium", "Hard"
  answer: string; // The correct option/explanation
  structureAnalysis: string; // Explanation of why it's correct
  keyVocabulary: KeyVocabItem[];
}

export interface Question {
  text: string; // The Passage + Question Stem
  samples: SampleResponse[]; // In SAT mode, this usually holds the Solution
}

export interface Topic {
  id: string;
  name: string;
  icon?: string;
  questions: Question[];
}

export interface ChecklistItem {
  id: string;
  category: string;
  text: string;
}