
import React, { useState, useEffect } from 'react';
import { ViewState } from './types';
import Header from './components/Header';
import HomeView from './components/HomeView';
import TheoryView from './components/TheoryView';
import VocabView from './components/VocabView';
import PracticeView from './components/PracticeView';
import ResourcesView from './components/ResourcesView';
import DesmosWidget from './components/DesmosWidget';
import AIDrillSolverView from './components/AIDrillSolverView';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.HOME);
  const [theoryCategory, setTheoryCategory] = useState<'Overview' | 'Verbal' | 'Math'>('Overview');
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize state from URL on first mount
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tab = urlParams.get('tab');
    const category = urlParams.get('category');
    
    if (tab) {
      const match = Object.values(ViewState).find(v => v.toLowerCase() === tab.toLowerCase());
      if (match) {
        setCurrentView(match as ViewState);
      }
    }
    
    if (category) {
      const validCategories = ['Overview', 'Verbal', 'Math'];
      const match = validCategories.find(c => c.toLowerCase() === category.toLowerCase());
      if (match) {
        setTheoryCategory(match as 'Overview' | 'Verbal' | 'Math');
      }
    }
    setIsInitialized(true);
  }, []);

  // Sync state to URL when values change
  useEffect(() => {
    if (!isInitialized) return;
    
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('tab', currentView.toLowerCase());
    
    if (currentView === ViewState.LEARN) {
      urlParams.set('category', theoryCategory.toLowerCase());
    } else {
      urlParams.delete('category');
    }
    
    const newUrl = `${window.location.pathname}?${urlParams.toString()}`;
    window.history.replaceState({}, '', newUrl);
  }, [currentView, theoryCategory, isInitialized]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  const handleSetViewAndCategory = (view: ViewState, category?: 'Overview' | 'Verbal' | 'Math') => {
    setCurrentView(view);
    if (category) {
      setTheoryCategory(category);
    }
  };

  const renderView = () => {
    switch (currentView) {
      case ViewState.HOME:
        return <HomeView setView={handleSetViewAndCategory} />;
      case ViewState.LEARN:
        return (
          <TheoryView 
            initialCategory={theoryCategory} 
            onCategoryChange={(cat) => setTheoryCategory(cat)} 
          />
        );
      case ViewState.VOCAB:
        return <VocabView />;
      case ViewState.PRACTICE:
        return <PracticeView />;
      case ViewState.RESOURCES:
        return <ResourcesView />;
      case ViewState.AI_SOLVER:
        return <AIDrillSolverView />;
      default:
        return <HomeView setView={handleSetViewAndCategory} />;
    }
  };

  return (
    <div className={`bg-[#f7f7f7] text-[#21242c] font-sans flex flex-col selection:bg-brand-yellow selection:text-brand-black ${currentView === ViewState.VOCAB ? 'h-screen w-full overflow-hidden' : 'min-h-screen'}`}>
      <Header currentView={currentView} setView={handleSetViewAndCategory} />

      {/* Main Content */}
      <main className={`flex-1 w-full mx-auto flex flex-col ${currentView === ViewState.VOCAB ? 'max-w-7xl px-4 py-2 overflow-hidden h-full justify-between' : 'max-w-6xl px-4 py-8 md:py-12'}`}>
        {/* Intro / Header Text for the current page */}
        {currentView !== ViewState.HOME && currentView !== ViewState.VOCAB && (
          <div className="mb-8 md:mb-12 text-center max-w-3xl mx-auto animate-fade-in">
             <h2 className="text-3xl md:text-4xl font-display font-bold text-[#21242c] mb-4 tracking-tight">
               {currentView === ViewState.LEARN && <span>Kiến thức nền tảng <span className="text-brand-red font-light mx-2">|</span> Math & English</span>}
               {currentView === ViewState.VOCAB && <span>Từ vựng trọng tâm <span className="text-brand-red font-light mx-2">|</span> Công thức & Thuật ngữ</span>}
               {currentView === ViewState.PRACTICE && <span>Luyện tập <span className="text-brand-red font-light mx-2">|</span> Ngân hàng câu hỏi</span>}
               {currentView === ViewState.RESOURCES && <span>Tài liệu tham khảo <span className="text-brand-red font-light mx-2">|</span> Resources</span>}
               {currentView === ViewState.AI_SOLVER && <span>AI Giải đề <span className="text-brand-red font-light mx-2">|</span> Chữa bài chi tiết</span>}
             </h2>
             <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto font-medium">
               {currentView === ViewState.LEARN && "Nắm vững 4 dạng bài Reading & Writing và các công thức Toán học cốt lõi."}
               {currentView === ViewState.VOCAB && "Học các từ vựng học thuật (Academic Words) và khái niệm Toán học."}
               {currentView === ViewState.PRACTICE && "Áp dụng kiến thức vào bài tập thực tế chuẩn format SAT."}
               {currentView === ViewState.RESOURCES && "Tổng hợp các trang web, khóa học, và công cụ hữu ích cho kỳ thi SAT."}
               {currentView === ViewState.AI_SOLVER && "Nhập văn bản, URL hoặc tải lên ảnh câu hỏi để AI phân tích chi tiết."}
             </p>
          </div>
        )}

        {renderView()}
      </main>

      {/* Footer */}
      <footer className={`bg-[#1e1e1e] text-white border-t-4 border-[#dc2323] font-sans select-none ${currentView === ViewState.VOCAB ? 'py-4 text-xs w-full' : 'py-12 mt-auto'}`}>
        <div className={`max-w-6xl mx-auto px-4 flex ${currentView === ViewState.VOCAB ? 'flex-row justify-between items-center w-full gap-4' : 'flex-col md:flex-row justify-between items-center gap-8'}`}>
          <div className={`flex ${currentView === ViewState.VOCAB ? 'flex-row items-center gap-4 text-left' : 'flex-col items-center md:items-start text-center md:text-left'}`}>
             <button onClick={() => setCurrentView(ViewState.HOME)} className={`flex items-center gap-2 hover:opacity-80 transition-opacity ${currentView === ViewState.VOCAB ? 'mb-0' : 'mb-4'}`}>
                 <img 
                   src="https://pbs.twimg.com/media/G9_w8N1aUAENd0l?format=jpg&name=large" 
                   alt="SAT Drills Logo" 
                   className={`object-cover border border-gray-600 rounded-lg p-0.5 bg-white ${currentView === ViewState.VOCAB ? 'w-6 h-6' : 'w-10 h-10'}`}
                   referrerPolicy="no-referrer"
                 />
                 <span className={`font-bold tracking-tight text-white font-display ${currentView === ViewState.VOCAB ? 'text-sm' : 'text-xl'}`}>SAT DRILLS</span>
               </button>
               
               <div className={`font-semibold flex items-center gap-1 text-gray-300 ${currentView === ViewState.VOCAB ? 'text-[11px]' : 'text-sm'}`}>
                 <span className={currentView === ViewState.VOCAB ? 'hidden sm:inline' : ''}>Website:</span>
                 <a href="https://ieltsdrills.com/sat_drills" target="_blank" rel="noopener noreferrer" className="text-[#ffe36d] hover:underline font-extrabold">
                   ieltsdrills.com/sat_drills
                 </a>
               </div>
            </div>

            <div className={`flex items-center text-center md:text-right ${currentView === ViewState.VOCAB ? 'flex-row gap-3' : 'flex-col items-center md:items-end gap-4'}`}>
              <a 
                href="https://ieltsdrills.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`bg-[#dc2323] hover:bg-[#b01c1c] text-white font-bold uppercase tracking-wider rounded-cb-md inline-block transition-all whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#dc2323] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1e1e1e] ${currentView === ViewState.VOCAB ? 'text-[10px] px-3 py-1.5' : 'text-xs px-6 py-3 shadow-sm'}`}
              >
                Luyện IELTS
              </a>
              
              <div className={`text-gray-400 uppercase tracking-wider font-mono ${currentView === ViewState.VOCAB ? 'text-[9px] hidden md:inline-block' : 'text-xs mt-1'}`}>
                Khan Academy / College Board
              </div>

              {currentView === ViewState.VOCAB && (
                <div className="text-[10px] text-gray-500 hidden sm:inline-block">
                  © 2026 SAT DRILLS
                </div>
              )}
            </div>
          </div>
          {currentView !== ViewState.VOCAB && (
            <div className="text-center mt-12 pt-8 border-t border-slate-800 text-sm text-gray-500">
              © 2026 SAT DRILLS. All rights reserved.
            </div>
          )}
        </footer>
      
      {/* Global Widgets */}
      <DesmosWidget />

      {/* Fullscreen Toggle Button */}
      <button
        onClick={toggleFullscreen}
        className="fixed bottom-24 left-6 z-50 bg-[#1e1e1e] text-white w-12 h-12 flex items-center justify-center rounded-cb-md shadow-sm border border-[#d9d9d9] hover:bg-black hover:scale-105 active:scale-95 transition-all duration-300 print:hidden group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#324dc7] focus-visible:ring-offset-2"
        title="Toàn màn hình"
        aria-label="Toggle Fullscreen"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
        </svg>
      </button>
    </div>
  );
};

export default App;
