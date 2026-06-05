
import React, { useState } from 'react';
import { topics } from '../data/content';
import { speakText } from '../services/audioService';
import { SampleResponse } from '../types';
import FormattedText from './FormattedText';
import { Sparkles, Eye, PlayCircle, BookOpen, ArrowRight, Volume2, CheckCircle2, Download, FileCode } from 'lucide-react';
import { exportToPng, exportToHtml } from '../utils/exportHelper';

const PracticeView: React.FC = () => {
  const [selectedTopicId, setSelectedTopicId] = useState<string>(topics[0].id);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);
  
  const selectedTopic = topics.find(t => t.id === selectedTopicId) || topics[0];
  const currentQuestion = selectedTopic.questions[currentQuestionIndex];
  // In SAT mode, sample[0] is the correct answer/explanation
  const solution = currentQuestion.samples[0]; 

  const handleNextQuestion = () => {
    setIsRevealed(false);
    if (currentQuestionIndex < selectedTopic.questions.length - 1) {
       setCurrentQuestionIndex((prev) => prev + 1);
    } else {
       setCurrentQuestionIndex(0);
    }
  };

  const handleReveal = () => {
    setIsRevealed(true);
  };

  if (!currentQuestion) {
     return <div className="p-8 text-center">No questions available for this topic yet.</div>;
  }

  return (
    <div className="max-w-6xl mx-auto animate-fade-in font-sans">
      <div className="mb-8 bg-[#fffdf0] border border-[#ffe36d] rounded-xl p-5 shadow-sm">
         <h3 className="text-sm font-bold text-[#b91c1c] flex items-center uppercase tracking-wider mb-2">
            <span className="bg-[#dc2323] text-white text-xs px-3 py-1 mr-3 rounded-full shadow-sm font-semibold">INSTRUCTIONS</span>
            Digital SAT Drill Mode
         </h3>
         <p className="text-sm text-[#b91c1c] leading-relaxed">
            1. Select a skill (Topic). 2. Read the passage and options carefully. 3. Decide on your answer. 4. Click "Reveal Solution" to check your work and read the explanation.
         </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Col: Topic Selection */}
        <div className="lg:col-span-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
          <div className="bg-white border border-gray-200 shadow-sm rounded-xl p-5">
            <h3 className="text-sm font-bold text-gray-500 uppercase mb-4 tracking-wider px-2">
              Select Skill ({topics.length})
            </h3>
            <div className="space-y-1.5">
              {topics.map(topic => (
                <button
                  key={topic.id}
                  onClick={() => {
                    setSelectedTopicId(topic.id);
                    setCurrentQuestionIndex(0);
                    setIsRevealed(false);
                  }}
                  className={`w-full text-left px-4 py-3 text-sm font-semibold rounded-lg transition-all ${
                    selectedTopicId === topic.id
                      ? 'bg-[#dc2323] text-white shadow-sm'
                      : 'bg-transparent text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="truncate">{topic.icon} <span className="ml-2">{topic.name}</span></span>
                    {selectedTopicId === topic.id && <PlayCircle className="w-4 h-4 text-white animate-pulse" />}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Col: Interaction */}
        <div className="lg:col-span-8">
          <div className="flex justify-end gap-2 mb-3 export-button-hide">
            <button
              onClick={() => exportToPng('practice-drill-container', `SAT Drill: ${selectedTopic.name} - Q${currentQuestionIndex + 1}`, `SAT_DRILL_${selectedTopic.id}_Q${currentQuestionIndex + 1}`)}
              className="flex items-center gap-1.5 bg-[#ffe36d] hover:bg-[#ebd056] text-black text-xs font-bold px-3 py-2 rounded-lg shadow-sm transition-all border border-yellow-400"
              title="Tải câu diễn giải luyện tập này dạng ảnh PNG"
            >
              <Download className="w-3.5 h-3.5" />
              Download PNG
            </button>
            <button
              onClick={() => exportToHtml('practice-drill-container', `SAT Drill: ${selectedTopic.name} - Q${currentQuestionIndex + 1}`, `SAT_DRILL_${selectedTopic.id}_Q${currentQuestionIndex + 1}`)}
              className="flex items-center gap-1.5 bg-gray-700 hover:bg-gray-600 text-white text-xs font-bold px-3 py-2 rounded-lg shadow-sm transition-all"
              title="Tải câu diễn giải luyện tập này dạng file HTML"
            >
              <FileCode className="w-3.5 h-3.5" />
              Download HTML
            </button>
          </div>

          <div id="practice-drill-container" className="bg-white border border-gray-200 shadow-sm rounded-xl min-h-[500px] flex flex-col relative overflow-hidden">
            
            {/* Question Header */}
            <div className="bg-white border-b border-gray-100 p-6 md:p-8">
              <div className="flex justify-between items-start mb-6">
                <span className="bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center justify-center leading-none h-fit">
                  Question {currentQuestionIndex + 1} of {selectedTopic.questions.length}
                </span>
                <span className="text-xs text-[#dc2323] bg-[#fffdf0] px-3 py-1 rounded-full uppercase tracking-widest font-bold border border-[#ffe36d] inline-flex items-center justify-center leading-none h-fit">Difficulty: {solution.difficulty}</span>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-lg md:text-xl text-[#21242c] leading-relaxed font-serif flex-grow">
                  <FormattedText text={currentQuestion.text} />
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8 flex-grow flex flex-col items-center justify-center bg-gray-50/30">
              {!isRevealed ? (
                <div className="text-center w-full max-w-md">
                   <div className="mb-8 p-8 border border-dashed border-gray-300 rounded-2xl bg-white text-gray-400">
                     <BookOpen className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                     <p className="text-sm font-medium tracking-wide">Select your answer mentally first.</p>
                   </div>
                   
                   <button
                      onClick={handleReveal}
                      className="w-full flex items-center justify-center px-6 py-4 rounded-full font-bold text-base transition-all bg-[#dc2323] text-white hover:bg-[#b91c1c] shadow-md hover:shadow-lg"
                    >
                      <Eye className="w-5 h-5 mr-3" /> Reveal Solution
                    </button>
                </div>
              ) : (
                <div className="animate-fade-in w-full space-y-6 text-left">
                  
                  {/* The Answer */}
                  <div className="bg-[#f2fbf5] p-6 rounded-xl border border-[#22a04c]/30 relative">
                    <div className="inline-flex items-center gap-2 bg-[#22a04c] text-white px-3 py-1 rounded-full text-xs font-bold uppercase mb-4 shadow-sm">
                       <CheckCircle2 className="w-3.5 h-3.5" />
                       <span>Correct Answer</span>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="text-lg md:text-xl font-bold text-[#1d823f] flex-grow">
                        <FormattedText text={solution.answer} noHighlight={true} />
                      </div>
                      <button 
                        onClick={() => speakText(solution.answer)}
                        className="flex-shrink-0 p-2.5 text-[#1d823f] hover:bg-[#e2f5e8] rounded-full transition-colors"
                      >
                        <Volume2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {/* Analysis Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                      <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#dc2323] rounded-full"></span> Explanation
                      </h4>
                      <div className="text-sm text-gray-700 leading-relaxed font-medium">
                        <FormattedText text={solution.structureAnalysis} noHighlight={true} />
                      </div>
                    </div>
                    <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                      <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 bg-yellow-500 rounded-full"></span> Key Concepts
                      </h4>
                      <div className="flex flex-col gap-3 mt-4">
                        {solution.keyVocabulary.map((item, idx) => (
                          <div key={idx} className="flex flex-col gap-1 pb-3 border-b border-gray-100 last:border-0 last:pb-0">
                            <span className="font-bold text-[#21242c]">{item.term}</span>
                            <span className="text-gray-600 text-sm">{item.definition}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end items-center pt-6 mt-4">
                      <button
                        onClick={handleNextQuestion}
                        className="flex items-center gap-2 px-8 py-3 bg-[#21242c] text-white font-semibold rounded-full hover:bg-[#3a3f4c] shadow-md hover:shadow-lg transition-all"
                      >
                        Next Question <ArrowRight className="w-4 h-4 ml-1" />
                      </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticeView;
