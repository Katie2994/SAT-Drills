import React, { useState, useRef, useMemo, useEffect, useCallback } from 'react';
import { combinedVocabList } from '../data/vocab';
import { speakText } from '../services/audioService';
import { ArrowLeft, ArrowRight, RotateCw, Lightbulb, Volume2, Download, Archive, Search, FileCode, Bookmark, BookmarkCheck } from 'lucide-react';
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
  "General Academic",
  "US Politics"
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

const VocabCard = ({ 
  card, 
  savedWords, 
  learningWords,
  knownWords,
  toggleSaveWord, 
  toggleLearningWord,
  toggleKnownWord,
  handleAudioClick, 
  globalFlipped 
}: { 
  card: any; 
  savedWords: string[]; 
  learningWords: string[];
  knownWords: string[];
  toggleSaveWord: (e: React.MouseEvent, term: string) => void; 
  toggleLearningWord: (e: React.MouseEvent, term: string) => void;
  toggleKnownWord: (e: React.MouseEvent, term: string) => void;
  handleAudioClick: (e: React.MouseEvent, text: string) => void;
  globalFlipped: boolean;
}) => {
  const [localFlipped, setLocalFlipped] = useState(false);
  const isFlipped = globalFlipped || localFlipped;

  return (
    <div 
      className="relative w-full h-full cursor-pointer transition-transform duration-500"
      onClick={() => setLocalFlipped(!localFlipped)}
      style={{ transformStyle: 'preserve-3d', transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
    >
      {/* Front */}
      <div 
        className="absolute w-full h-full bg-white border border-[#d9d9d9] rounded-cb-sm shadow-cb flex flex-col items-center justify-center p-4 md:p-6 backface-hidden"
        style={{ backfaceVisibility: 'hidden' }}
      >
        <div className="absolute top-3 left-4 flex gap-1">
          <span className="bg-[#f5f7fc] text-[#dc2323] px-2.5 py-0.5 rounded-cb-xs text-[10px] font-bold uppercase tracking-wider border border-[#d9d9d9]">
            {card.type}
          </span>
          {card.topic && (
            Array.isArray(card.topic) ? (
              card.topic.map((t: string) => (
                <span key={t} className="bg-gray-50 text-gray-700 px-2.5 py-0.5 rounded-cb-xs text-[10px] font-medium border border-[#d9d9d9]">
                  {t}
                </span>
              ))
            ) : (
              <span className="bg-gray-50 text-gray-700 px-2.5 py-0.5 rounded-cb-xs text-[10px] font-medium border border-[#d9d9d9]">
                {card.topic}
              </span>
            )
          )}
        </div>
        
        {/* Audio Button Front */}
        <div className="absolute top-3 right-4 flex items-center gap-2">
          <button 
            onClick={(e) => toggleSaveWord(e, card.term)}
            className={`p-1.5 rounded-full transition-colors border shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#324dc7] ${savedWords.includes(card.term) ? 'bg-[#ffe36d] text-black border-yellow-500' : 'bg-gray-50 text-gray-500 border-[#d9d9d9] hover:bg-[#ffe36d] hover:text-black'}`}
            title={savedWords.includes(card.term) ? "Unsave word" : "Save word"}
          >
            {savedWords.includes(card.term) ? <BookmarkCheck className="w-4 h-4 fill-black" /> : <Bookmark className="w-4 h-4" />}
          </button>
          <button 
            onClick={(e) => handleAudioClick(e, card.term)}
            className="p-1.5 bg-gray-50 rounded-full hover:bg-[#dc2323] hover:text-white transition-colors border border-[#d9d9d9] shadow-sm text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#324dc7]"
            title="Listen to term"
          >
            <Volume2 className="w-4 h-4" />
          </button>
        </div>
        
        {/* ICON Display */}
        {card.icon && (
          <div className="text-3xl md:text-4xl mb-3 filter drop-shadow-sm opacity-90 animate-fade-in">
            {card.icon}
          </div>
        )}
        
        <h3 className="text-xl md:text-3xl font-display font-bold text-[#1e1e1e] text-center tracking-tight leading-tight break-words max-w-full px-2">
          {card.term}
        </h3>
        
        <div className="absolute bottom-3 flex items-center gap-1 text-[#dc2323] font-medium text-[10px] bg-[#f5f7fc] border border-[#d9d9d9] px-2.5 py-1 rounded-cb-xs opacity-60 group-hover:opacity-100 transition-opacity">
          <RotateCw className="w-3.5 h-3.5" /> 
          <span>Click to reveal definition</span>
        </div>
      </div>

      {/* Back description card */}
      <div 
        className="absolute w-full h-full bg-[#1e1e1e] border border-gray-700 rounded-cb-sm shadow-cb flex flex-col items-center justify-center p-4 md:p-6 text-white backface-hidden"
        style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
      >
         {/* Inner badge info */}
         <div className="absolute top-3 left-4 flex gap-1">
           {card.topic && (
             Array.isArray(card.topic) ? (
               card.topic.map((t: string) => (
                 <span key={t} className="text-[9px] bg-red-900/40 text-red-300 px-2.5 py-0.5 rounded-cb-xs border border-red-500/20 font-mono">
                   🎓 {t}
                 </span>
               ))
             ) : (
               <span className="text-[9px] bg-red-900/40 text-red-300 px-2.5 py-0.5 rounded-cb-xs border border-red-500/20 font-mono">
                 🎓 {card.topic}
               </span>
             )
           )}
         </div>

         {/* Bookmark Toggle Back */}
         <div className="absolute top-3 right-4 flex items-center gap-2">
           <button 
             onClick={(e) => toggleSaveWord(e, card.term)}
             className={`p-1.5 rounded-full transition-colors border shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#324dc7] ${savedWords.includes(card.term) ? 'bg-[#ffe36d] text-black border-yellow-500' : 'bg-gray-800 text-gray-400 border-gray-700 hover:bg-[#ffe36d] hover:text-black'}`}
             title={savedWords.includes(card.term) ? "Unsave word" : "Save word"}
           >
             {savedWords.includes(card.term) ? <BookmarkCheck className="w-4 h-4 fill-black" /> : <Bookmark className="w-4 h-4" />}
           </button>
         </div>

         <h4 className="text-sm md:text-base font-bold text-center mt-2 mb-2 leading-relaxed max-w-[95%] text-gray-100">
           {card.definition}
         </h4>
         
         {card.synonym && (
           <p className="text-xs text-gray-400 mb-1 text-center w-full">
             <span className="font-bold text-gray-300">Synonym:</span> {card.synonym}
           </p>
         )}
         {card.antonym && (
           <p className="text-xs text-gray-400 mb-1 text-center w-full">
             <span className="font-bold text-gray-300">Antonym:</span> {card.antonym}
           </p>
         )}

         {/* Learning Status Buttons */}
         <div className="absolute bottom-4 flex gap-2 mx-auto w-full justify-center px-4">
           <button
             onClick={(e) => {
               toggleLearningWord(e, card.term);
             }}
             className={`flex items-center justify-center flex-1 gap-1 py-1.5 text-[10px] font-bold rounded-full border shadow-sm transition-all ${
               learningWords.includes(card.term) 
                 ? 'bg-[#dc2323] text-white border-[#dc2323]' 
                 : 'bg-[#2a2a2a] text-gray-300 border-gray-600 hover:bg-gray-700'
             }`}
           >
             X Cần học
           </button>
           <button
             onClick={(e) => {
               toggleKnownWord(e, card.term);
             }}
             className={`flex items-center justify-center flex-1 gap-1 py-1.5 text-[10px] font-bold rounded-full border shadow-sm transition-all ${
               knownWords.includes(card.term) 
                 ? 'bg-green-600 text-white border-green-600' 
                 : 'bg-[#2a2a2a] text-gray-300 border-gray-600 hover:bg-gray-700'
             }`}
           >
             ✓ Đã biết
           </button>
         </div>
      </div>
    </div>
  );
};

const VocabView: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [filter, setFilter] = useState<'all' | 'vocab' | 'concept' | 'saved'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTopic, setSelectedTopic] = useState<string>("All Areas");
  const [selectedLetter, setSelectedLetter] = useState<string>("All");
  const [isDownloading, setIsDownloading] = useState(false);
  const [gridSize, setGridSize] = useState<1 | 2 | 4 | 6>(1);
  
  const [savedWords, setSavedWords] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('sat_drills_saved_vocab');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  const [knownWords, setKnownWords] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('sat_drills_known_vocab');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  const [learningWords, setLearningWords] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('sat_drills_learning_vocab');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('sat_drills_saved_vocab', JSON.stringify(savedWords));
  }, [savedWords]);

  useEffect(() => {
    localStorage.setItem('sat_drills_known_vocab', JSON.stringify(knownWords));
  }, [knownWords]);

  useEffect(() => {
    localStorage.setItem('sat_drills_learning_vocab', JSON.stringify(learningWords));
  }, [learningWords]);

  const toggleSaveWord = (e: React.MouseEvent, term: string) => {
    e.stopPropagation();
    setSavedWords(prev => 
      prev.includes(term) ? prev.filter(w => w !== term) : [...prev, term]
    );
  };

  const toggleKnownWord = (e: React.MouseEvent, term: string) => {
    e.stopPropagation();
    setKnownWords(prev => {
      const isKnown = prev.includes(term);
      if (isKnown) {
        return prev.filter(w => w !== term);
      } else {
        setLearningWords(l => l.filter(w => w !== term)); // Remove from learning
        return [...prev, term];
      }
    });
  };

  const toggleLearningWord = (e: React.MouseEvent, term: string) => {
    e.stopPropagation();
    setLearningWords(prev => {
      const isLearning = prev.includes(term);
      if (isLearning) {
        return prev.filter(w => w !== term);
      } else {
        setKnownWords(k => k.filter(w => w !== term)); // Remove from known
        return [...prev, term];
      }
    });
  };

  const handleFilterChange = (newFilter: 'all' | 'vocab' | 'concept' | 'saved') => {
    setFilter(newFilter);
    setSelectedTopic("All Areas");
    setSelectedLetter("All");
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  const filteredList = useMemo(() => {
    let list = combinedVocabList.filter(card => {
      // 1. Basic Type Filter
      let matchFilter = true;
      if (filter === 'saved') {
        matchFilter = savedWords.includes(card.term);
      } else if (filter !== 'all') {
        matchFilter = card.type === filter;
      }
      
      // 2. Search Query filter
      const matchSearch = card.term.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          card.definition.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (card.synonym && card.synonym.toLowerCase().includes(searchQuery.toLowerCase())) ||
                          (card.antonym && card.antonym.toLowerCase().includes(searchQuery.toLowerCase()));
      
      // 3. Academic Topic Filter
      const topicToMatch = selectedTopic === "All Areas" ? true : (
        card.topic ? (
          Array.isArray(card.topic) 
            ? card.topic.includes(selectedTopic) 
            : card.topic === selectedTopic
        ) : false
      );
      
      // 4. Alphabet starting letter filter
      const letterToMatch = selectedLetter === "All" ? true : (card.term && card.term.toUpperCase().startsWith(selectedLetter));
      
      return matchFilter && matchSearch && topicToMatch && letterToMatch;
    });

    // Sort alphabetically by default for 'all', 'vocab', and 'saved'
    if (filter === 'all' || filter === 'vocab' || filter === 'saved') {
       list = [...list].sort((a, b) => a.term.localeCompare(b.term));
    }
    return list;
  }, [filter, searchQuery, selectedTopic, selectedLetter, savedWords]);

  const currentCard = filteredList[currentIndex] || filteredList[0];
  const currentCards = useMemo(() => {
    return filteredList.slice(currentIndex, currentIndex + gridSize);
  }, [filteredList, currentIndex, gridSize]);
  const templateRef = useRef<HTMLDivElement>(null);

  const nextCard = useCallback(() => {
    setIsFlipped(false);
    setTimeout(() => {
      if (filteredList.length > 0) {
         setCurrentIndex((prev) => (prev + gridSize) % filteredList.length);
      }
    }, 200);
  }, [filteredList.length, gridSize]);

  const prevCard = useCallback(() => {
    setIsFlipped(false);
    setTimeout(() => {
      if (filteredList.length > 0) {
         setCurrentIndex((prev) => (prev - gridSize + filteredList.length) % filteredList.length);
      }
    }, 200);
  }, [filteredList.length, gridSize]);

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
        backgroundColor: '#ffe36d', // Solid yellow, transparent = 0
        fontEmbedCSS: '',
        styleSheetsFilter: (sheet) => {
          try {
            const rules = sheet.cssRules;
            return true;
          } catch (e) {
            return false;
          }
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
                backgroundColor: '#ffe36d', // Solid yellow, transparent = 0
                fontEmbedCSS: '',
                styleSheetsFilter: (sheet) => {
                  try {
                    const rules = sheet.cssRules;
                    return true;
                  } catch (e) {
                    return false;
                  }
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

  const learnedCount = filteredList.filter(card => knownWords.includes(card.term)).length;
  const progressPercent = filteredList.length > 0 ? Math.round((learnedCount / filteredList.length) * 100) : 0;

  return (
    <div className="w-full mx-auto animate-fade-in font-sans relative flex flex-col h-full justify-between overflow-hidden py-1">
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

      <div className="text-center mb-1 flex items-center justify-between px-2 gap-4 flex-wrap">
        <div className="flex items-center gap-4">
          <h2 className="text-lg md:text-xl font-black text-[#21242c] uppercase tracking-tight">
            Vocabulary Drill
          </h2>
          <div className="flex items-center gap-2">
            <p className="text-xs font-bold text-gray-500 bg-white inline-block px-2.5 py-1 rounded-full border border-gray-200 shadow-sm">
              {filteredList.length > 0 ? `${currentIndex + 1} / ${filteredList.length} items` : '0 items'}
            </p>
            {filteredList.length > 0 && (
              <div className="flex items-center gap-2 bg-white px-2.5 py-1 rounded-full border border-gray-200 shadow-sm">
                <div className="w-16 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 transition-all duration-300" style={{ width: `${progressPercent}%` }} />
                </div>
                <span className="text-[10px] font-bold text-gray-600">{progressPercent}% Đã học</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bento Control Panel */}
      <div className="mt-1 w-full bg-white rounded-xl border border-gray-200/80 p-2 shadow-sm space-y-1.5 text-left text-xs">
        {/* Row 1: Search Input & Type Filter Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-1.5 items-center">
          {/* Search Input (7 cols on md) */}
          <div className="md:col-span-7 relative">
             <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none">
                <Search className="h-3.5 w-3.5 text-gray-400" />
             </div>
             <input
               type="text"
               value={searchQuery}
               onChange={(e) => { setSearchQuery(e.target.value); setCurrentIndex(0); }}
               placeholder="Search terms, definitions..."
               className="block w-full pl-8 pr-3 py-1 border border-gray-200 rounded-lg bg-gray-50/50 hover:bg-gray-50 focus:bg-white focus:ring-1 focus:ring-[#dc2323] focus:border-[#dc2323] focus:outline-none transition-all text-xs"
             />
          </div>

          {/* Segmented Controls (5 cols on md) */}
          <div className="md:col-span-5 flex p-1 bg-gray-100 rounded-lg border border-gray-200">
            <button 
              onClick={() => handleFilterChange('all')} 
              className={`flex-1 text-center py-2 text-[11px] font-bold rounded-md transition-all ${filter === 'all' ? 'bg-[#dc2323] text-white shadow-sm' : 'text-gray-600 hover:text-gray-900'}`}
            >
              All
            </button>
            <button 
              onClick={() => handleFilterChange('vocab')} 
              className={`flex-1 text-center py-2 text-[11px] font-bold rounded-md transition-all ${filter === 'vocab' ? 'bg-[#dc2323] text-white shadow-sm' : 'text-gray-600 hover:text-gray-900'}`}
            >
              Vocab
            </button>
            <button 
              onClick={() => handleFilterChange('concept')} 
              className={`flex-1 text-center py-2 text-[11px] font-bold rounded-md transition-all ${filter === 'concept' ? 'bg-[#dc2323] text-white shadow-sm' : 'text-gray-600 hover:text-gray-900'}`}
            >
              Math
            </button>
            <button 
              onClick={() => handleFilterChange('saved')} 
              className={`flex-1 text-center py-2 text-[11px] font-bold rounded-md transition-all flex items-center justify-center gap-1 ${filter === 'saved' ? 'bg-[#ffe36d] text-[#1e1e1e] shadow-sm ring-1 ring-black/10' : 'text-gray-600 hover:text-gray-900'}`}
            >
              <Bookmark className="w-3 h-3" /> Saved
            </button>
          </div>
        </div>

        {/* Row 2: Selected Categories/Topics */}
        <div className="pt-2 border-t border-gray-100">
          {filter === 'all' && (
            <div className="space-y-2">
              {/* Unified view with side-by-side grids */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div>
                  <div className="flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider text-gray-400 mb-1">
                    <span>📖</span> Vocab Subjects:
                  </div>
                  <div className="flex flex-wrap gap-1">
                    <button
                      onClick={() => { setSelectedTopic("All Areas"); setCurrentIndex(0); }}
                      className={`px-1.5 py-0.5 text-[9px] font-semibold rounded border transition-all ${
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
                        className={`px-1.5 py-0.5 text-[9px] font-semibold rounded border transition-all ${
                          selectedTopic === topic
                            ? "bg-[#dc2323] text-white border-[#dc2323] shadow-xs"
                            : "bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-200"
                        }`}
                      >
                        {topic}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider text-gray-400 mb-1">
                    <span>📐</span> Math / Formulas:
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {MATH_TOPICS.map((topic) => (
                      <button
                        key={topic}
                        onClick={() => { setSelectedTopic(topic); setCurrentIndex(0); }}
                        className={`px-1.5 py-0.5 text-[9px] font-semibold rounded border transition-all ${
                          selectedTopic === topic
                            ? "bg-[#dc2323] text-white border-[#dc2323] shadow-xs"
                            : "bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-200"
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
              <div className="flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider text-gray-400 mb-1">
                <span>📖</span> Academic Vocabulary Subjects:
              </div>
              <div className="flex flex-wrap gap-1">
                <button
                  onClick={() => { setSelectedTopic("All Areas"); setCurrentIndex(0); }}
                  className={`px-1.5 py-0.5 text-[9px] font-bold rounded border transition-all ${
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
                    className={`px-1.5 py-0.5 text-[9px] font-bold rounded border transition-all ${
                      selectedTopic === topic
                        ? "bg-[#dc2323] text-white border-[#dc2323]"
                        : "bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-200"
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
              <div className="flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider text-gray-400 mb-1 font-sans">
                <span>📐</span> Mathematics Sub-Subjects:
              </div>
              <div className="flex flex-wrap gap-1">
                <button
                  onClick={() => { setSelectedTopic("All Areas"); setCurrentIndex(0); }}
                  className={`px-1.5 py-0.5 text-[9px] font-bold rounded border transition-all ${
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
                    className={`px-1.5 py-0.5 text-[9px] font-bold rounded border transition-all ${
                      selectedTopic === topic
                        ? "bg-[#dc2323] text-white border-[#dc2323]"
                        : "bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-200"
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
        <div className="pt-1.5 border-t border-gray-100">
          <div className="flex items-center justify-between text-left mb-0.5">
            <span className="text-[9px] font-bold uppercase tracking-wider text-gray-400">🔤 Alphabet Index:</span>
            {selectedLetter !== "All" && (
              <button 
                onClick={() => { setSelectedLetter("All"); setCurrentIndex(0); }}
                className="text-[9px] text-[#dc2323] font-bold hover:underline"
              >
                Clear Letter
              </button>
            )}
          </div>
          
          <div className="flex gap-1.5 overflow-x-auto select-none py-1.5 w-full scrollbar-none" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <button
              onClick={() => { setSelectedLetter("All"); setCurrentIndex(0); }}
              className={`px-3 py-1.5 text-[11px] font-extrabold rounded-full transition-all flex-shrink-0 ${
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
                className={`w-7 h-7 flex items-center justify-center text-[11px] font-extrabold rounded-full transition-all flex-shrink-0 ${
                  selectedLetter === letter
                    ? "bg-[#ffe36d] text-black ring-1 ring-black/30 font-black shadow-xs"
                    : "bg-gray-50 text-gray-500 hover:bg-gray-200 hover:text-gray-800"
                }`}
              >
                {letter}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center gap-2 my-1.5 flex-wrap">
        <div className="flex items-center gap-1 bg-white border border-gray-200 rounded-lg p-0.5 shadow-sm">
          {[1, 2, 4, 6].map((size) => (
            <button
              key={size}
              onClick={() => setGridSize(size as 1 | 2 | 4 | 6)}
              className={`px-2 py-1 text-[10px] font-bold rounded-md transition-all ${
                gridSize === size ? 'bg-[#1e1e1e] text-white shadow-sm' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              {size === 1 ? 'Single' : `${size} Cards`}
            </button>
          ))}
        </div>
        <div className="flex gap-2">
          <button 
            onClick={downloadCurrentFlashcard}
            disabled={isDownloading || !currentCard}
            className="flex items-center gap-1 bg-[#ffe36d] text-black px-2.5 py-1 rounded-lg text-[10px] font-bold shadow-sm hover:brightness-95 transition-all disabled:opacity-50 border border-yellow-400"
            title="Tải thẻ này dạng ảnh PNG"
          >
            <Download className="w-3.5 h-3.5" />
            {isDownloading ? 'Downloading...' : 'Image'}
          </button>
          <button 
            onClick={downloadCurrentHtml}
            disabled={isDownloading || !currentCard}
            className="flex items-center gap-1 bg-gray-700 text-white px-2.5 py-1 rounded-lg text-[10px] font-bold shadow-sm hover:bg-gray-600 transition-all disabled:opacity-50"
            title="Tải thẻ này dạng file HTML"
          >
            <FileCode className="w-3.5 h-3.5" />
            HTML
          </button>
          <button 
            onClick={downloadAllFlashcards}
            disabled={isDownloading || filteredList.length === 0}
            className="flex items-center gap-1 bg-white text-gray-700 px-2.5 py-1 rounded-lg text-[10px] font-bold border border-gray-200 hover:bg-gray-50 transition-all shadow-sm"
            title="Downloads the first 50 filtered cards inside a zip file."
          >
            <Archive className="w-3.5 h-3.5" />
            Zip (Max 50)
          </button>
        </div>
      </div>

      {filteredList.length > 0 && currentCards.length > 0 ? (
        <div 
          id="vocab-active-card-container-wrap" 
          className="w-full flex-1 flex flex-col mb-2 overflow-y-auto overflow-x-hidden min-h-[300px] p-1"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEndEvent}
        >
          <div className={`grid gap-4 w-full ${
            gridSize === 1 ? 'grid-cols-1 max-w-[min(95vw,600px)] mx-auto' :
            gridSize === 2 ? 'grid-cols-1 sm:grid-cols-2 max-w-4xl mx-auto' :
            gridSize === 4 ? 'grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto' :
            'grid-cols-2 md:grid-cols-3 lg:grid-cols-6 max-w-7xl mx-auto'
          }`}>
            {currentCards.map((card) => (
              <div key={card.term} className={`relative w-full ${gridSize <= 2 ? 'aspect-[17/10]' : 'aspect-[10/17]'} perspective-1000 group animate-fade-in`}>
                <VocabCard 
                  card={card}
                  savedWords={savedWords}
                  learningWords={learningWords}
                  knownWords={knownWords}
                  toggleSaveWord={toggleSaveWord}
                  toggleLearningWord={toggleLearningWord}
                  toggleKnownWord={toggleKnownWord}
                  handleAudioClick={handleAudioClick}
                  globalFlipped={isFlipped}
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex-1 min-h-[180px] w-full flex items-center justify-center bg-gray-50 border border-gray-200 rounded-2xl mb-2 border-dashed">
           <p className="text-gray-500 font-medium text-xs">No results match your selected search or filter criteria.</p>
        </div>
      )}

      {/* Control Buttons */}
      <div className="w-full flex justify-center items-center py-1.5 px-2 border-t border-gray-200 bg-[#f7f7f7] z-30 mt-auto gap-4">
        <button 
          onClick={prevCard}
          disabled={filteredList.length === 0}
          className="flex items-center gap-1.5 bg-white text-gray-750 px-4 py-1.5 text-xs font-bold border border-gray-200 rounded-full hover:bg-gray-50 shadow-sm transition-all disabled:opacity-50"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Prev
        </button>
        
        <button 
          onClick={nextCard}
          disabled={filteredList.length === 0}
          className="flex items-center gap-1.5 bg-[#ffe36d] text-[#21242c] px-4 py-1.5 text-xs font-bold rounded-full hover:brightness-95 shadow-sm transition-all border border-yellow-400 disabled:opacity-50"
        >
          Next <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};

export default VocabView;
