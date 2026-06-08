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
      className="relative w-[1080px] h-[1350px] bg-[#ffe36d] overflow-hidden font-sans select-none"
      style={{
        backgroundImage: "radial-gradient(#000000 3px, #ffe36d 3px)",
        backgroundSize: "40px 40px"
      }}
    >
      {/* Top Bar - Scaled to match smaller yellow border */}
      <div className="absolute top-4 left-6 right-6 flex justify-between items-center z-10 gap-4">
        <div className="bg-white border-[5px] border-black rounded-[30px] px-8 py-4 w-full text-center shadow-[8px_8px_0px_0px_#000000]">
          <h2 className="text-2xl font-black uppercase tracking-widest text-black whitespace-nowrap truncate">
            {isConcept ? "MATH CONCEPTS • GENIUS" : "DIGITAL SAT • VOCAB GENIUS"}
          </h2>
        </div>
      </div>

      {/* Main Content Card - with crimson radial glow & high-tech grid layout */}
      <div 
        className="absolute top-[105px] left-6 right-6 bottom-6 bg-[#161a26] border-[5px] border-black rounded-[45px] shadow-[12px_12px_0px_0px_#000000] flex flex-col"
        style={{
          backgroundImage: `
            radial-gradient(ellipse at top right, rgba(220, 35, 35, 0.15), transparent 60%),
            linear-gradient(to right, rgba(255, 255, 255, 0.03) 2px, transparent 2px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 2px, transparent 2px)
          `,
          backgroundSize: '100% 100%, 40px 40px, 40px 40px'
        }}
      >
        {/* Inner dashed border */}
        <div className="absolute inset-5 border-[3px] border-dashed border-gray-650 rounded-[35px] pointer-events-none" />

        <div className="relative z-10 pt-[75px] pb-10 px-10 flex-1 flex flex-col h-full justify-between">
          
          {/* Header Row */}
          <div className="flex justify-between items-start gap-6 shrink-0">
            <div className="flex-1 pr-2">
              <h3 className="text-[#ffe36d] text-xl font-black tracking-[0.2em] mb-2 uppercase">
                {isConcept ? "MATH CONCEPT" : "VOCABULARY"}
              </h3>
              <h1 className={`text-white font-black leading-tight mb-4 break-words tracking-tight ${termSize}`}>
                {card.term}
              </h1>
              
              <div className="flex flex-wrap gap-4 mt-4 items-center max-w-full">
                {card.synonym && (
                  <div className="flex items-center gap-3 max-w-full">
                    <span className="text-slate-300 text-[18px] font-bold uppercase tracking-wider whitespace-nowrap shrink-0">Synonym</span>
                    <div className="text-black text-[22px] font-bold tracking-wide bg-[#ffe36d] inline-block px-5 py-2 rounded-2xl border-2 border-black shadow-[3px_3px_0px_0px_#000000] break-words">
                      {card.synonym}
                    </div>
                  </div>
                )}
                {card.antonym && (
                  <div className="flex items-center gap-3 max-w-full">
                    <span className="text-slate-300 text-[18px] font-bold uppercase tracking-wider whitespace-nowrap shrink-0">Antonym</span>
                    <div className="text-white text-[22px] font-bold tracking-wide bg-gray-800 inline-block px-5 py-2 rounded-2xl border-2 border-gray-700 shadow-[3px_3px_0px_0px_#000000] break-words">
                      {card.antonym}
                    </div>
                  </div>
                )}
              </div>

              {card.topic && (
                <div className="mt-6 flex items-center gap-4 max-w-full">
                  <span className="text-slate-300 text-[20px] font-extrabold tracking-wider uppercase whitespace-nowrap shrink-0">🌍 Subject</span>
                  <div className="text-[20px] font-black tracking-wider uppercase bg-[#dc2323] text-white border-4 border-black px-6 py-3 rounded-full inline-flex items-center justify-center shadow-[6px_6px_0px_0px_#000000] whitespace-nowrap leading-none w-fit">
                     {card.topic}
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
            <div className="bg-gradient-to-r from-[#1c2230] to-[#121622] border-[3px] border-black p-8 rounded-[30px] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden flex-shrink-0">
               {/* Pattern overlay to reduce negative empty space */}
               <div 
                 className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                 style={{
                   backgroundImage: `repeating-linear-gradient(45deg, #ffffff 0, #ffffff 2px, transparent 0, transparent 50%)`,
                   backgroundSize: '12px 12px'
                 }} 
               />

               <div className="relative z-10 w-full overflow-hidden">
                 <div className="inline-block bg-[#dc2323] text-white text-sm font-black tracking-widest px-4 py-1.5 rounded-lg border-2 border-black mb-4 uppercase shadow-[3px_3px_0px_0px_#000000] whitespace-nowrap truncate max-w-[100%] overflow-hidden">
                    DEFINITION • ĐỊNH NGHĨA
                 </div>
                 <p className={`text-white font-extrabold tracking-tight break-words max-w-full ${defSize}`}>
                   {card.definition}
                 </p>
               </div>
            </div>

            {/* Example Container if exists */}
            {card.example && (
              <div className="bg-[#171c2a] border-[3px] border-dashed border-gray-600 rounded-[30px] p-8 relative overflow-hidden shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex-shrink-0">
                {/* Ambient dynamic accent indicator */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#ffe36d] border-l-[3px] border-b-[3px] border-black rounded-bl-[20px] flex items-center justify-center text-[48px] font-bold select-none text-black">
                  📖
                </div>
                
                <h3 className="text-[#ffe36d] text-[24px] font-black tracking-[0.1em] mb-4 uppercase">
                  EXAMPLE IN CONTEXT
                </h3>
                <p className="text-gray-100 text-[42px] font-serif italic leading-[1.4] pr-[80px] break-words max-w-full">
                  "{card.example}"
                </p>
              </div>
            )}
          </div>

          {/* Bottom Tags */}
          <div className="flex gap-4 z-20 mt-auto shrink-0 w-full">
             <div className="bg-[#ffe36d] border-[4px] border-black rounded-full h-[60px] text-xs font-black tracking-widest text-black shadow-[6px_6px_0px_0px_#000000] flex items-center justify-center min-w-[145px] px-5 text-center uppercase leading-none whitespace-nowrap truncate">
               {isConcept ? "MATH DRILLS" : "VOCAB DRILLS"}
             </div>
             <div className="bg-[#dc2323] border-[4px] border-black rounded-full h-[60px] font-black text-lg text-white shadow-[6px_6px_0px_0px_#000000] flex-1 flex items-center justify-center px-8 text-center truncate leading-none">
               @SAT_DRILLS
             </div>
             <div className="bg-white border-[4px] border-black rounded-full h-[60px] font-black text-lg shadow-[6px_6px_0px_0px_#000000] flex items-center justify-center min-w-[125px] px-8 text-center leading-none whitespace-nowrap truncate">
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
