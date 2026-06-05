
import React, { useState } from 'react';
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
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [theoryCategory, setTheoryCategory] = useState<'Overview' | 'Verbal' | 'Math'>('Overview');

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
    <div className="min-h-screen bg-[#f7f7f7] text-[#21242c] font-sans flex flex-col selection:bg-brand-yellow selection:text-brand-black">
      <Header currentView={currentView} setView={handleSetViewAndCategory} />

      {/* Main Content */}
      <main className="flex-grow w-full max-w-6xl mx-auto px-4 py-8 md:py-12">
        {/* Intro / Header Text for the current page */}
        {currentView !== ViewState.HOME && (
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

        {/* Global Help Toggle */}
        {currentView === ViewState.LEARN && (
          <div className="mb-8 border border-gray-200 bg-white shadow-sm rounded-xl overflow-hidden">
            <button 
              onClick={() => setIsHelpOpen(!isHelpOpen)}
              className="w-full flex items-center justify-between p-5 bg-white hover:bg-gray-50 transition-colors text-left"
            >
              <h3 className="text-base md:text-lg font-bold text-[#21242c] flex items-center">
                <span className="bg-[#dc2323] text-white text-xs px-3 py-1 mr-3 rounded-full font-semibold">HƯỚNG DẪN</span>
                Cách sử dụng App
              </h3>
              <span className="text-2xl font-light text-gray-400 w-8 h-8 flex items-center justify-center">
                {isHelpOpen ? '−' : '+'}
              </span>
            </button>
            
            {isHelpOpen && (
              <div className="p-6 border-t border-gray-100 bg-gray-50/50 animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 border border-gray-200 shadow-sm rounded-xl">
                    <div className="text-3xl mb-4">📍</div>
                    <h4 className="font-bold text-[#dc2323] mb-2 text-base">1. Lý thuyết (Theory)</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Đọc kỹ các quy tắc Ngữ pháp và Công thức Toán (Đại số, Hình học).
                    </p>
                  </div>
                  <div className="bg-white p-6 border border-gray-200 shadow-sm rounded-xl">
                    <div className="text-3xl mb-4">🧐</div>
                    <h4 className="font-bold text-[#dc2323] mb-2 text-base">2. Từ vựng (Vocab)</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Ghi nhớ từ vựng học thuật thường gặp và các thuật ngữ Toán tiếng Anh.
                    </p>
                  </div>
                  <div className="bg-white p-6 border border-gray-200 shadow-sm rounded-xl">
                    <div className="text-3xl mb-4">🧠</div>
                    <h4 className="font-bold text-[#dc2323] mb-2 text-base">3. Luyện tập (Drills)</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Làm bài tập ngắn và xem giải thích chi tiết để hiểu lỗi sai.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {renderView()}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 border-t-[5px] border-black font-sans mt-auto select-none">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
             <button onClick={() => setCurrentView(ViewState.HOME)} className="flex items-center gap-3 mb-4 hover:opacity-80 transition-opacity">
               <img 
                 src="https://pbs.twimg.com/media/G9_w8N1aUAENd0l?format=jpg&name=large" 
                 alt="SAT Drills Logo" 
                 className="w-10 h-10 object-cover border border-gray-600 rounded-lg p-0.5 bg-white"
                 referrerPolicy="no-referrer"
               />
               <span className="font-bold text-xl tracking-tight text-white font-display">SAT DRILLS 2026</span>
             </button>
             
             <div className="text-sm font-semibold flex items-center gap-2 text-gray-300">
               <span>Website:</span>
               <a href="https://ieltsdrills.com/sat_drills" target="_blank" rel="noopener noreferrer" className="text-[#ffe36d] hover:underline font-extrabold">
                 ieltsdrills.com/sat_drills
               </a>
             </div>
          </div>

          <div className="flex flex-col items-center md:items-end text-sm text-center md:text-right gap-4">
            <a 
              href="https://ieltsdrills.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#dc2323] hover:bg-[#b01c1c] text-white text-xs font-black uppercase tracking-wider px-6 py-3 rounded-full border-2 border-black inline-block shadow-[4px_4px_0px_0px_#ffffff] transition-all whitespace-nowrap"
            >
              Luyện IELTS ở IELTS Drills
            </a>
            
            <div className="text-xs text-gray-400 mt-1 uppercase tracking-wider font-mono">
              Khan Academy / College Board Standard Syllabus
            </div>
          </div>
        </div>
        <div className="text-center mt-12 pt-8 border-t border-slate-800 text-sm text-gray-500">
          © 2026 SAT DRILLS. All rights reserved.
        </div>
      </footer>
      
      {/* Global Widgets */}
      <DesmosWidget />

      {/* Fullscreen Toggle Button */}
      <button
        onClick={toggleFullscreen}
        className="fixed bottom-6 left-6 z-50 bg-black text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:bg-gray-800 hover:scale-105 active:scale-95 transition-all duration-300 print:hidden group"
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
