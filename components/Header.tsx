
import React from 'react';
import { ViewState } from '../types';

interface HeaderProps {
  currentView: ViewState;
  setView: (view: ViewState, category?: 'Overview' | 'Verbal' | 'Math') => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, setView }) => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 font-sans shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-auto md:h-[72px] py-4 md:py-0 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo Section */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <button 
            onClick={() => setView(ViewState.HOME)}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer group text-left"
          >
            <img 
              src="https://pbs.twimg.com/media/G9_w8N1aUAENd0l?format=jpg&name=large" 
              alt="SAT Drills Logo" 
              className="w-10 h-10 object-cover border border-gray-200 rounded-lg"
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col border-l border-gray-300 pl-3">
              <h1 className="text-lg font-bold text-[#21242c] tracking-tight leading-none group-hover:text-[#dc2323] transition-colors">SAT Drills 2026</h1>
              <span className="text-[11px] text-gray-500 font-medium tracking-wide mt-1">Reading, Writing & Math</span>
            </div>
          </button>
          
          <a 
            href="https://ieltsdrills.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="md:hidden text-xs font-semibold text-[#21242c] bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-full transition-colors"
          >
            IELTS DRILLS ↗
          </a>
        </div>
        
        <div className="flex items-center gap-6 w-full md:w-auto overflow-hidden">
          {/* Navigation Tabs */}
          <nav className="flex gap-1 md:gap-2 w-full md:w-auto overflow-x-auto scrollbar-hide">
            {[
              { id: ViewState.HOME, label: 'Home' },
              { id: ViewState.LEARN, label: 'Theory' },
              { id: ViewState.VOCAB, label: 'Vocab' },
              { id: ViewState.PRACTICE, label: 'Drills' },
              { id: ViewState.RESOURCES, label: 'Resources' },
              { id: ViewState.AI_SOLVER, label: 'AI Solver' }
            ].map(tab => (
              <button 
                key={tab.id}
                onClick={() => setView(tab.id as ViewState)}
                className={`flex-1 md:flex-none px-3 md:px-4 py-2 text-sm font-semibold transition-colors whitespace-nowrap rounded-full ${
                  currentView === tab.id 
                    ? 'bg-[#dc2323] text-white shadow-sm' 
                    : 'text-gray-600 hover:text-[#21242c] hover:bg-gray-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
          
          <a 
            href="https://ieltsdrills.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden xl:flex items-center gap-1 text-sm font-semibold text-[#21242c] pl-6 border-l border-gray-200 hover:text-[#dc2323] transition-colors whitespace-nowrap"
          >
            Luyện IELTS <span className="text-[#dc2323] ml-1">↗</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
