import { SampleResponse, Question } from '../types';

/**
 * Simulates an API call by picking a random pre-defined answer
 * with a small artificial delay.
 */
export const getLocalSampleAnswer = async (question: Question): Promise<SampleResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Pick a random sample from the provided list
      const randomIndex = Math.floor(Math.random() * question.samples.length);
      const selectedSample = question.samples[randomIndex];
      resolve(selectedSample);
    }, 800); // 800ms simulated delay for effect
  });
};
