import React, { forwardRef } from 'react';
import { VocabCard } from '../types';

interface FlashcardTemplateProps {
  card: VocabCard;
  index: number;
}

const FlashcardTemplate = forwardRef<HTMLDivElement, FlashcardTemplateProps>(({ card, index }, ref) => {
  const isConcept = card.type === 'concept';
  
  // Dynamic font sizing based on length - upgraded sizes!
  const termLength = card.term.length;
  const termSize = termLength > 20 
    ? 'text-[62px]' 
    : termLength > 12 
      ? 'text-[76px]' 
      : 'text-[92px]';
  
  const defLength = card.definition.length;
  // Upgraded definition text sizes
  const defSize = defLength > 150 
    ? 'text-[28px] leading-[1.4]' 
    : defLength > 80 
      ? 'text-[34px] leading-[1.4]' 
      : 'text-[42px] leading-[1.3]';
  
  return (
    <div 
      ref={ref}
      className="relative w-[1080px] h-[1350px] bg-[#f5f7fc] overflow-hidden font-sans select-none"
    >
      {/* Top Bar - Scaled to match smaller yellow border */}
      <div className="absolute top-8 left-8 right-8 flex justify-between items-center z-10 gap-4">
        <div className="bg-[#1e1e1e] border border-[#d9d9d9] rounded-cb-md px-8 py-6 w-full text-center shadow-cb">
          <h2 className="text-3xl font-display font-bold uppercase tracking-widest text-white whitespace-nowrap truncate">
            {isConcept ? "MATH CONCEPTS • GENIUS" : "DIGITAL SAT • VOCAB GENIUS"}
          </h2>
        </div>
      </div>

      {/* Main Content Card - with crimson radial glow & high-tech grid layout */}
      <div 
        className="absolute top-[160px] left-8 right-8 bottom-8 bg-white border border-[#d9d9d9] rounded-cb-lg shadow-cb flex flex-col"
      >
        <div className="relative z-10 pt-[75px] pb-10 px-12 flex-1 flex flex-col h-full justify-between">
          
          {/* Header Row */}
          <div className="flex justify-between items-start gap-6 shrink-0">
            <div className="flex-1 pr-2">
              <h3 className="text-[#324dc7] text-2xl font-bold tracking-[0.2em] mb-4 uppercase">
                {isConcept ? "MATH CONCEPT" : "VOCABULARY"}
              </h3>
              <h1 className={`text-[#1e1e1e] font-display font-extrabold leading-tight mb-6 break-words tracking-tight ${termSize}`}>
                {card.term}
              </h1>
              
              <div className="flex flex-wrap gap-4 mt-6 items-center max-w-full">
                {card.synonym && (
                  <div className="flex items-center gap-3 max-w-full">
                    <span className="text-gray-500 text-[20px] font-bold uppercase tracking-wider whitespace-nowrap shrink-0">Synonym</span>
                    <div className="text-[#1e1e1e] text-[24px] font-bold tracking-wide bg-[#ffe36d] inline-block px-5 py-2.5 rounded-cb-xs border border-[#d9d9d9] shadow-sm break-words">
                      {card.synonym}
                    </div>
                  </div>
                )}
                {card.antonym && (
                  <div className="flex items-center gap-3 max-w-full">
                    <span className="text-gray-500 text-[20px] font-bold uppercase tracking-wider whitespace-nowrap shrink-0">Antonym</span>
                    <div className="text-white text-[24px] font-bold tracking-wide bg-[#1e1e1e] inline-block px-5 py-2.5 rounded-cb-xs border border-[#1e1e1e] shadow-sm break-words">
                      {card.antonym}
                    </div>
                  </div>
                )}
              </div>

              {card.topic && (
                <div className="mt-8 flex items-center gap-4 max-w-full">
                  <span className="text-gray-500 text-[22px] font-extrabold tracking-wider uppercase whitespace-nowrap shrink-0">Subject</span>
                  <div className="flex flex-wrap gap-3">
                    {Array.isArray(card.topic) ? (
                      card.topic.map((t) => (
                        <div key={t} className="text-[22px] font-bold tracking-wider uppercase bg-[#dc2323] text-white border border-[#dc2323] px-6 py-3 rounded-cb-xs inline-flex items-center justify-center shadow-sm whitespace-nowrap leading-none w-fit">
                           {t}
                        </div>
                      ))
                    ) : (
                      <div className="text-[20px] font-black tracking-wider uppercase bg-[#dc2323] text-white border-4 border-black px-6 py-3 rounded-full inline-flex items-center justify-center shadow-[6px_6px_0px_0px_#000000] whitespace-nowrap leading-none w-fit">
                         {card.topic}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {card.note && (
                <div className="text-gray-400 text-xl font-mono mt-3">
                  //{card.note}//
                </div>
              )}
            </div>
            
            {/* Expanded elegant floating icon with NO background pill container */}
            <div className={`w-[230px] h-[230px] shrink-0 flex flex-wrap items-center justify-center select-none leading-none rotate-[15deg] pt-4 animate-bounce-slow text-center ${
              [...(card.icon || "📖")].length >= 3 ? "text-[95px] gap-2" : [...(card.icon || "📖")].length === 2 ? "text-[115px] gap-3" : "text-[175px]"
            }`}>
              {card.icon || "📖"}
            </div>
          </div>

          {/* Central content - meaning and examples */}
          <div className="flex-grow flex flex-col justify-center gap-6 my-4">
            
            {/* Meaning Container */}
            <div className="bg-[#f5f7fc] border border-[#324dc7] p-8 rounded-cb-md shadow-sm relative overflow-hidden flex-shrink-0">
               <div className="relative z-10 w-full overflow-hidden">
                 <div className="inline-block bg-[#1e1e1e] text-white text-sm font-bold tracking-widest px-4 py-1.5 rounded-cb-xs mb-4 uppercase whitespace-nowrap truncate max-w-[100%] overflow-hidden">
                    DEFINITION • ĐỊNH NGHĨA
                 </div>
                 <p className={`text-[#1e1e1e] font-display font-extrabold tracking-tight break-words max-w-full ${defSize}`}>
                   {card.definition}
                 </p>
               </div>
            </div>

            {/* Example Container if exists */}
            {card.example && (
              <div className="bg-[#fffdf0] border border-[#ffe36d] rounded-cb-md p-8 relative overflow-hidden shadow-sm flex-shrink-0">
                {/* Ambient dynamic accent indicator */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#ffe36d] border-l border-b border-[#ffe36d] rounded-bl-cb-sm flex items-center justify-center text-[48px] font-bold select-none text-black">
                  📖
                </div>
                
                <h3 className="text-[#dc2323] text-[24px] font-bold tracking-[0.1em] mb-4 uppercase">
                  EXAMPLE IN CONTEXT
                </h3>
                <p className="text-[#1e1e1e] text-[42px] font-serif italic leading-[1.4] pr-[80px] break-words max-w-full">
                  "{card.example}"
                </p>
              </div>
            )}
          </div>

          {/* Bottom Tags */}
          <div className="flex gap-4 z-20 mt-auto shrink-0 w-full">
             <div className="bg-[#ffe36d] border border-[#d9d9d9] rounded-full h-[60px] text-sm font-bold tracking-widest text-[#1e1e1e] shadow-sm flex items-center justify-center min-w-[145px] px-5 text-center uppercase leading-none whitespace-nowrap truncate">
               {isConcept ? "MATH DRILLS" : "VOCAB DRILLS"}
             </div>
             <div className="bg-[#dc2323] border border-[#dc2323] rounded-full h-[60px] font-bold text-xl text-white shadow-sm flex-1 flex items-center justify-center px-8 text-center truncate leading-none">
               @SAT_DRILLS
             </div>
             <div className="bg-white border border-[#d9d9d9] rounded-full h-[60px] font-bold text-xl text-[#1e1e1e] shadow-sm flex items-center justify-center min-w-[125px] px-8 text-center leading-none whitespace-nowrap truncate">
               2026
             </div>
          </div>
        </div>
      </div>
    </div>
  );
});

FlashcardTemplate.displayName = 'FlashcardTemplate';

export default FlashcardTemplate;
