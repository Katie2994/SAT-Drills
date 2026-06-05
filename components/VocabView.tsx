import React, { useState, useRef, useMemo, useEffect, useCallback } from 'react';
import { combinedVocabList } from '../data/vocab';
import { speakText } from '../services/audioService';
import { ArrowLeft, ArrowRight, RotateCw, Lightbulb, Volume2, Download, Archive, Search, FileCode } from 'lucide-react';
import FlashcardTemplate from './FlashcardTemplate';
import { toPng } from 'html-to-image';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { exportToHtml } from '../utils/exportHelper';


// Available domains grouped by category
const VERBAL_TOPICS = [
  "Arts & Lit",
  "Science & Tech",
  "Business & Law",
  "History & Social",
  "Logic & Essay",
  "General Academic"
];

const MATH_TOPICS = [
  "Algebra",
  "Advanced Math",
  "Problem Solving & Data",
  "Geometry & Trig"
];

const ALPHABET = [
  "All", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
];

const VocabView: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [filter, setFilter] = useState<'all' | 'vocab' | 'concept'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTopic, setSelectedTopic] = useState<string>("All Areas");
  const [selectedLetter, setSelectedLetter] = useState<string>("All");
  const [isDownloading, setIsDownloading] = useState(false);

  const handleFilterChange = (newFilter: 'all' | 'vocab' | 'concept') => {
    setFilter(newFilter);
    setSelectedTopic("All Areas");
    setSelectedLetter("All");
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  const filteredList = useMemo(() => {
    let list = combinedVocabList.filter(card => {
      // 1. Basic Type Filter
      const matchFilter = filter === 'all' ? true : card.type === filter;
      
      // 2. Search Query filter
      const matchSearch = card.term.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          card.definition.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (card.synonym && card.synonym.toLowerCase().includes(searchQuery.toLowerCase())) ||
                          (card.antonym && card.antonym.toLowerCase().includes(searchQuery.toLowerCase()));
      
      // 3. Academic Topic Filter
      const topicToMatch = selectedTopic === "All Areas" ? true : (card.topic && card.topic === selectedTopic);
      
      // 4. Alphabet starting letter filter
      const letterToMatch = selectedLetter === "All" ? true : (card.term && card.term.toUpperCase().startsWith(selectedLetter));
      
      return matchFilter && matchSearch && topicToMatch && letterToMatch;
    });

    // Verbal and All should always be sorted alphabetically (ABC...)
    if (filter === 'all' || filter === 'vocab') {
       list = [...list].sort((a, b) => a.term.localeCompare(b.term));
    }
    return list;
  }, [filter, searchQuery, selectedTopic, selectedLetter]);

  const currentCard = filteredList[currentIndex] || filteredList[0];
  const templateRef = useRef<HTMLDivElement>(null);

  const nextCard = useCallback(() => {
    setIsFlipped(false);
    setTimeout(() => {
      if (filteredList.length > 0) {
         setCurrentIndex((prev) => (prev + 1) % filteredList.length);
      }
    }, 200);
  }, [filteredList.length]);

  const prevCard = useCallback(() => {
    setIsFlipped(false);
    setTimeout(() => {
      if (filteredList.length > 0) {
         setCurrentIndex((prev) => (prev - 1 + filteredList.length) % filteredList.length);
      }
    }, 200);
  }, [filteredList.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (document.activeElement?.tagName === 'INPUT' || document.activeElement?.tagName === 'TEXTAREA') return;
      if (e.key === 'ArrowLeft') {
        prevCard();
      } else if (e.key === 'ArrowRight') {
        nextCard();
      } else if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        setIsFlipped((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextCard, prevCard]);

  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEndEvent = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    if (isLeftSwipe) {
      nextCard();
    }
    if (isRightSwipe) {
      prevCard();
    }
  };

  const handleAudioClick = (e: React.MouseEvent, text: string) => {
    e.stopPropagation(); // Avoid flip
    speakText(text);
  };

  const downloadCurrentFlashcard = async () => {
    if (!templateRef.current || !currentCard) return;
    try {
      setIsDownloading(true);
      const dataUrl = await toPng(templateRef.current, {
        cacheBust: true,
        pixelRatio: 2.5,
        backgroundColor: '#ffe36d',
        fontEmbedCSS: '',
        styleSheetsFilter: (sheet) => {
          try { return Boolean(sheet.cssRules); } catch (e) { return false; }
        },
      });
      saveAs(dataUrl, `SAT_DRILLS_${currentCard.term.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.png`);
    } catch (err) {
      console.error('Error downloading:', err);
    } finally {
      setIsDownloading(false);
    }
  };

  const downloadCurrentHtml = () => {
    if (!currentCard) return;
    exportToHtml('vocab-active-card-container-wrap', `Vocabulary: ${currentCard.term}`, `SAT_VOCAB_${currentCard.term.replace(/[^a-z0-9]/gi, '_').toLowerCase()}`);
  };

  const downloadAllFlashcards = async () => {
    if (!templateRef.current) return;
    try {
      setIsDownloading(true);
      const zip = new JSZip();
      
      alert('Bắt đầu tạo file ZIP. Quá trình này có thể mất một lúc tùy số lượng ảnh. Vui lòng chờ...');
      
      const batchContainer = document.getElementById('batch-export-container');
      if (batchContainer) {
          const cards = batchContainer.children;
          const limit = Math.min(cards.length, 50); // safety cap to prevent freeze
          for (let i = 0; i < limit; i++) {
              const el = cards[i] as HTMLElement;
              const term = el.getAttribute('data-term') || `card_${i}`;
              const dataUrl = await toPng(el, {
                cacheBust: true,
                pixelRatio: 2.5,
                backgroundColor: '#ffe36d',
                fontEmbedCSS: '',
                styleSheetsFilter: (sheet) => {
                  try { return Boolean(sheet.cssRules); } catch (e) { return false; }
                },
              });
              const base64Data = dataUrl.replace(/^data:image\/png;base64,/, "");
              zip.file(`SAT_DRILLS_${i+1}_${term.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.png`, base64Data, { base64: true });
          }
      }

      const content = await zip.generateAsync({ type: 'blob' });
      saveAs(content, `SAT_DRILLS_Flashcards.zip`);
      
    } catch (err) {
      console.error('Error batch downloading:', err);
      alert('Có lỗi xảy ra khi tạo file zip. Vui lòng thử lại sau.');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto animate-fade-in font-sans relative">
      {/* Hidden container for image extraction */}
      <div className="absolute top-[-9999px] left-[-9999px]">
        {currentCard && <FlashcardTemplate ref={templateRef} card={currentCard} index={currentIndex + 1} />}
        
        {/* Hidden exporter batch */}
        <div id="batch-export-container">
          {filteredList.slice(0, 50).map((card, i) => (
             <div key={i} data-term={card.term}>
                 <FlashcardTemplate card={card} index={i + 1} />
             </div>
          ))}
        </div>
      </div>

      <div className="text-center mb-6">
        <h2 className="text-3xl font-extrabold text-[#21242c] uppercase tracking-tight">
          Vocabulary Drill
        </h2>
        <p className="text-sm font-semibold text-gray-500 mt-2 bg-white inline-block px-3 py-1 rounded-full border border-gray-200 shadow-sm">
          {filteredList.length > 0 ? `${currentIndex + 1} of ${filteredList.length} items` : '0 items'}
        </p>
        
        {/* Bento Control Panel */}
        <div className="mt-6 max-w-2xl mx-auto bg-white rounded-2xl border border-gray-200/80 p-5 shadow-sm space-y-4 text-left">
          {/* Row 1: Search Input & Type Filter Tabs */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
            {/* Search Input (7 cols on md) */}
            <div className="md:col-span-7 relative">
               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4.5 w-4.5 text-gray-400" />
               </div>
               <input
                 type="text"
                 value={searchQuery}
                 onChange={(e) => { setSearchQuery(e.target.value); setCurrentIndex(0); }}
                 placeholder="Search terms, definitions, examples..."
                 className="block w-full pl-9 pr-3 py-2 border border-gray-200 rounded-xl leading-5 bg-gray-50/50 hover:bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#dc2323] focus:border-[#dc2323] focus:outline-none transition-all sm:text-xs text-sm"
               />
            </div>

            {/* Segmented Controls (5 cols on md) */}
            <div className="md:col-span-5 flex p-0.5 bg-gray-100 rounded-xl border border-gray-250">
              <button 
                onClick={() => handleFilterChange('all')} 
                className={`flex-1 text-center py-1.5 text-xs font-bold rounded-lg transition-all ${filter === 'all' ? 'bg-[#dc2323] text-white shadow-sm' : 'text-gray-600 hover:text-gray-900'}`}
              >
                All
              </button>
              <button 
                onClick={() => handleFilterChange('vocab')} 
                className={`flex-1 text-center py-1.5 text-xs font-bold rounded-lg transition-all ${filter === 'vocab' ? 'bg-[#dc2323] text-white shadow-sm' : 'text-gray-600 hover:text-gray-900'}`}
              >
                Vocab
              </button>
              <button 
                onClick={() => handleFilterChange('concept')} 
                className={`flex-1 text-center py-1.5 text-xs font-bold rounded-lg transition-all ${filter === 'concept' ? 'bg-[#dc2323] text-white shadow-sm' : 'text-gray-600 hover:text-gray-900'}`}
              >
                Math
              </button>
            </div>
          </div>

          {/* Row 2: Selected Categories/Topics */}
          <div className="pt-3 border-t border-gray-100">
            {filter === 'all' && (
              <div className="space-y-4">
                {/* Unified view with side-by-side grids */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <div className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                      <span>📖</span> Vocab Subjects:
                    </div>
                    <div className="flex flex-wrap gap-1">
                      <button
                        onClick={() => { setSelectedTopic("All Areas"); setCurrentIndex(0); }}
                        className={`px-2 py-0.5 text-xxs font-semibold rounded-md border transition-all ${
                          selectedTopic === "All Areas"
                            ? "bg-gray-900 text-white border-black shadow-xs"
                            : "bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100"
                        }`}
                      >
                        All Areas
                      </button>
                      {VERBAL_TOPICS.map((topic) => (
                        <button
                          key={topic}
                          onClick={() => { setSelectedTopic(topic); setCurrentIndex(0); }}
                          className={`px-2 py-0.5 text-xxs font-semibold rounded-md border transition-all ${
                            selectedTopic === topic
                              ? "bg-[#dc2323] text-white border-[#dc2323] shadow-xs"
                              : "bg-gray-55 text-gray-600 border-gray-200 hover:bg-gray-200"
                          }`}
                        >
                          {topic}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                      <span>📐</span> Math & Formulas:
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {MATH_TOPICS.map((topic) => (
                        <button
                          key={topic}
                          onClick={() => { setSelectedTopic(topic); setCurrentIndex(0); }}
                          className={`px-2 py-0.5 text-xxs font-semibold rounded-md border transition-all ${
                            selectedTopic === topic
                              ? "bg-[#dc2323] text-white border-[#dc2323] shadow-xs"
                              : "bg-gray-55 text-gray-600 border-gray-200 hover:bg-gray-200"
                          }`}
                        >
                          {topic}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {filter === 'vocab' && (
              <div>
                <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gray-400 mb-2 mt-1">
                  <span>📖</span> Academic Vocabulary Subjects:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  <button
                    onClick={() => { setSelectedTopic("All Areas"); setCurrentIndex(0); }}
                    className={`px-3 py-1 text-xs font-bold rounded-lg border transition-all ${
                      selectedTopic === "All Areas"
                        ? "bg-gray-900 text-white border-black"
                        : "bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100"
                    }`}
                  >
                    All Areas
                  </button>
                  {VERBAL_TOPICS.map((topic) => (
                    <button
                      key={topic}
                      onClick={() => { setSelectedTopic(topic); setCurrentIndex(0); }}
                      className={`px-3 py-1 text-xs font-bold rounded-lg border transition-all ${
                        selectedTopic === topic
                          ? "bg-[#dc2323] text-white border-[#dc2323]"
                          : "bg-gray-55 text-gray-600 border-gray-200 hover:bg-gray-200"
                      }`}
                    >
                      {topic}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {filter === 'concept' && (
              <div>
                <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gray-400 mb-2 mt-1">
                  <span>📐</span> Mathematics Sub-Subjects:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  <button
                    onClick={() => { setSelectedTopic("All Areas"); setCurrentIndex(0); }}
                    className={`px-3 py-1 text-xs font-bold rounded-lg border transition-all ${
                      selectedTopic === "All Areas"
                        ? "bg-gray-900 text-white border-black"
                        : "bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100"
                    }`}
                  >
                    All Math Areas
                  </button>
                  {MATH_TOPICS.map((topic) => (
                    <button
                      key={topic}
                      onClick={() => { setSelectedTopic(topic); setCurrentIndex(0); }}
                      className={`px-3 py-1 text-xs font-bold rounded-lg border transition-all ${
                        selectedTopic === topic
                          ? "bg-[#dc2323] text-white border-[#dc2323]"
                          : "bg-gray-55 text-gray-600 border-gray-200 hover:bg-gray-200"
                      }`}
                    >
                      {topic}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Row 3: Swipeable Alphabet Ribbon */}
          <div className="pt-3 border-t border-gray-100">
            <div className="flex items-center justify-between text-left mb-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-400">🔤 Alphabet Index (Tra cứu nhanh):</span>
              {selectedLetter !== "All" && (
                <button 
                  onClick={() => { setSelectedLetter("All"); setCurrentIndex(0); }}
                  className="text-xs text-[#dc2323] font-bold hover:underline"
                >
                  Clear Letter
                </button>
              )}
            </div>
            
            {/* Horizontal elegant scrollbar-none belt */}
            <div className="flex gap-1 overflow-x-auto select-none py-1.5 w-full scrollbar-none" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              <button
                onClick={() => { setSelectedLetter("All"); setCurrentIndex(0); }}
                className={`px-2.5 py-1 text-xxs font-extrabold rounded-full transition-all flex-shrink-0 ${
                  selectedLetter === "All"
                    ? "bg-[#ffe36d] text-black ring-1 ring-black/30 shadow-xs"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                A-Z
              </button>
              {ALPHABET.filter(l => l !== "All").map((letter) => (
                <button
                  key={letter}
                  onClick={() => { setSelectedLetter(letter); setCurrentIndex(0); }}
                  className={`w-6 h-6 flex items-center justify-center text-xxs font-extrabold rounded-full transition-all flex-shrink-0 ${
                    selectedLetter === letter
                      ? "bg-[#ffe36d] text-black ring-1 ring-black/30 font-black shadow-xs"
                      : "bg-gray-55 text-gray-500 hover:bg-gray-200 hover:text-gray-800"
                  }`}
                >
                  {letter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-3 mb-4">
        <button 
          onClick={downloadCurrentFlashcard}
          disabled={isDownloading || !currentCard}
          className="flex items-center gap-2 bg-[#ffe36d] text-black px-4 py-2 rounded-lg text-sm font-bold shadow-sm hover:brightness-95 transition-all disabled:opacity-50 border border-yellow-400"
          title="Tải thẻ này dạng ảnh PNG"
        >
          <Download className="w-4 h-4" />
          {isDownloading ? 'Downloading...' : 'Download Image'}
        </button>
        <button 
          onClick={downloadCurrentHtml}
          disabled={isDownloading || !currentCard}
          className="flex items-center gap-2 bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-sm hover:bg-gray-600 transition-all disabled:opacity-50"
          title="Tải thẻ này dạng file HTML"
        >
          <FileCode className="w-4 h-4" />
          Download HTML
        </button>
        <button 
          onClick={downloadAllFlashcards}
          disabled={isDownloading || filteredList.length === 0}
          className="flex items-center gap-2 bg-white text-gray-700 px-4 py-2 rounded-lg text-sm font-bold border border-gray-200 hover:bg-gray-50 transition-all shadow-sm"
          title="Downloads the first 50 filtered cards inside a zip file."
        >
          <Archive className="w-4 h-4" />
          Download Filtered
        </button>
      </div>

      {filteredList.length > 0 && currentCard ? (
        <div id="vocab-active-card-container-wrap" className="w-full">
          <div 
            className="relative min-h-[420px] w-full mb-8 perspective-1000 group"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEndEvent}
          >
          <div 
            className={`relative w-full h-full cursor-pointer transition-transform duration-500 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}
            onClick={() => setIsFlipped(!isFlipped)}
            style={{ transformStyle: 'preserve-3d', transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
          >
            {/* Front */}
            <div 
              className="absolute w-full h-full bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center justify-center p-8 backface-hidden min-h-[420px]"
              style={{ backfaceVisibility: 'hidden' }}
            >
              <div className="absolute top-6 left-6 flex gap-2">
                <span className="bg-red-50 text-[#dc2323] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-red-200">
                  {currentCard.type}
                </span>
                {currentCard.topic && (
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold capitalize border border-gray-200">
                    {currentCard.topic}
                  </span>
                )}
              </div>
              
              {/* Audio Button Front */}
              <div className="absolute top-6 right-6">
                <button 
                  onClick={(e) => handleAudioClick(e, currentCard.term)}
                  className="p-2.5 bg-gray-50 rounded-full hover:bg-[#dc2323] hover:text-white transition-colors border border-gray-200 shadow-sm text-gray-500"
                  title="Listen to term"
                >
                  <Volume2 className="w-5 h-5" />
                </button>
              </div>
              
              {/* ICON Display */}
              {currentCard.icon && (
                <div className="text-6xl mb-6 filter drop-shadow-sm opacity-90 animate-fade-in">
                  {currentCard.icon}
                </div>
              )}
              
              <h3 className="text-2xl md:text-4xl font-black text-[#21242c] text-center tracking-tight leading-tight break-words max-w-full">
                {currentCard.term}
              </h3>
              
              <div className="absolute bottom-6 flex items-center gap-2 text-[#dc2323] font-semibold text-sm bg-red-50 border border-red-200 px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <RotateCw className="w-4 h-4" /> 
                <span>Click to flip and reveal</span>
              </div>
            </div>

            {/* Back description card */}
            <div 
              className="absolute w-full h-full bg-[#1a202c] border-2 border-black rounded-2xl shadow-md flex flex-col items-center justify-center p-8 text-white backface-hidden min-h-[420px]"
              style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
            >
               {/* Inner badge info */}
               <div className="absolute top-4 left-6 flex gap-2">
                 {currentCard.topic && (
                   <span className="text-xs bg-red-650/40 text-red-300 px-3 py-1 rounded-full border border-red-500/20 font-mono">
                     🎓 {currentCard.topic}
                   </span>
                 )}
               </div>

               <h4 className="text-xl md:text-2xl font-bold text-center mt-4 mb-4 leading-relaxed max-w-[95%]">
                 {currentCard.definition}
               </h4>
               
               {/* Synonyms & Antonyms displayed side-by-side */}
               <div className="flex flex-wrap gap-2 justify-center mb-3">
                 {currentCard.synonym && (
                   <div className="bg-yellow-400 text-black px-3 py-1.5 rounded-xl text-xs font-bold shadow-sm">
                     Synonym: {currentCard.synonym}
                   </div>
                 )}
                 {currentCard.antonym && (
                   <div className="bg-gray-700 text-white border border-gray-600 px-3 py-1.5 rounded-xl text-xs font-bold shadow-sm">
                     Antonym: {currentCard.antonym}
                   </div>
                 )}
               </div>

               {currentCard.example && (
                 <div className="bg-black/20 p-4 rounded-xl border border-white/10 w-full max-w-lg relative mt-2 text-center">
                   <p className="text-gray-200 text-sm italic pr-6 leading-relaxed">"{currentCard.example}"</p>
                   <button 
                      onClick={(e) => handleAudioClick(e, currentCard.example || "")}
                      className="absolute top-3 right-3 text-white/40 hover:text-white transition-colors p-1"
                      title="Listen to example"
                   >
                     <Volume2 className="w-4 h-4" />
                   </button>
                 </div>
               )}
               
               {currentCard.note && (
                  <div className="mt-4 flex items-center gap-2 text-[#ffe36d] text-xs bg-black/40 px-3 py-1.5 rounded-full border border-white/10 font-bold">
                    <Lightbulb className="w-3.5 h-3.5" />
                    <span>{currentCard.note}</span>
                  </div>
               )}
            </div>
          </div>
        </div>
       </div>
      ) : (
        <div className="min-h-[400px] w-full flex items-center justify-center bg-gray-50 border border-gray-200 rounded-2xl mb-8 border-dashed">
           <p className="text-gray-500 font-medium">No results match your selected search or filter criteria.</p>
        </div>
      )}

      {/* Control Buttons */}
      <div className="flex justify-between items-center mt-6 px-4">
        <button 
          onClick={prevCard}
          disabled={filteredList.length === 0}
          className="flex items-center gap-2 bg-white text-gray-700 px-5 py-2.5 font-bold border border-gray-200 rounded-full hover:bg-gray-50 shadow-sm transition-all disabled:opacity-50"
        >
          <ArrowLeft className="w-4 h-4" /> Previous
        </button>
        
        <button 
          onClick={nextCard}
          disabled={filteredList.length === 0}
          className="flex items-center gap-2 bg-[#ffe36d] text-[#21242c] px-5 py-2.5 font-bold rounded-full hover:brightness-95 shadow-sm transition-all border border-yellow-400 disabled:opacity-50"
        >
          Next <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default VocabView;
