
import React, { useState, useMemo } from 'react';
import { theorySections } from '../data/content';
import { FileText, Book, Calculator, Lightbulb, Download, FileCode, Search } from 'lucide-react';
import GrammarLecturesInteractive from './GrammarLecturesInteractive';
import { exportToPng, exportToHtml } from '../utils/exportHelper';

interface TheoryViewProps {
  initialCategory?: 'Overview' | 'Verbal' | 'Math';
  onCategoryChange?: (category: 'Overview' | 'Verbal' | 'Math') => void;
}

const TheoryView: React.FC<TheoryViewProps> = ({ initialCategory = 'Overview', onCategoryChange }) => {
  const [activeCategory, setActiveCategory] = useState<'Overview' | 'Verbal' | 'Math'>(initialCategory);
  const [isHelpOpen, setIsHelpOpen] = useState(false);

  // Sync state if prop changes
  React.useEffect(() => {
    setActiveCategory(initialCategory);
  }, [initialCategory]);

  const handleCategoryChange = (category: 'Overview' | 'Verbal' | 'Math') => {
    setActiveCategory(category);
    if (onCategoryChange) {
      onCategoryChange(category);
    }
  };
  
  const [searchQuery, setSearchQuery] = useState('');

  // Filter sections based on category and search query
  const filteredSections = useMemo(() => {
    let sections = theorySections.filter(s => s.category === activeCategory);
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      sections = sections.filter(s => s.title.toLowerCase().includes(q));
    }
    return sections;
  }, [activeCategory, searchQuery]);

  const [activeSectionId, setActiveSectionId] = useState<string>(filteredSections[0]?.id || '');

  // Reset active section when category changes
  React.useEffect(() => {
    if (filteredSections.length > 0) {
      setActiveSectionId(filteredSections[0].id);
    }
  }, [activeCategory, filteredSections]);

  const activeSection = theorySections.find(s => s.id === activeSectionId);

  return (
      <div className="flex flex-col gap-6 items-start animate-fade-in font-sans w-full content-wrapper">
      {/* Top Navigation */}
      <div className="w-full bg-white border border-[#d9d9d9] shadow-cb rounded-cb-md p-4 lg:sticky lg:top-20 z-10">
        <div className="flex flex-col md:flex-row gap-4 justify-between md:items-center">
          
          {/* Category Toggle */}
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <div className="flex gap-2 flex-shrink-0 bg-[#f5f7fc] p-1 rounded-cb-sm border border-[#d9d9d9]">
              <button
                onClick={() => handleCategoryChange('Overview')}
                className={`px-4 py-2 text-sm font-medium rounded-cb-xs transition-all flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#324dc7] ${
                  activeCategory === 'Overview'
                    ? 'bg-white text-[#dc2323] shadow-sm border border-[#d9d9d9]'
                    : 'text-gray-600 hover:text-[#1e1e1e]'
                }`}
              >
                <FileText className="w-4 h-4" />
                Tổng Quan
              </button>
              <button
                onClick={() => handleCategoryChange('Verbal')}
                className={`px-4 py-2 text-sm font-medium rounded-cb-xs transition-all flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#324dc7] ${
                  activeCategory === 'Verbal'
                    ? 'bg-white text-[#dc2323] shadow-sm border border-[#d9d9d9]'
                    : 'text-gray-600 hover:text-[#1e1e1e]'
                }`}
              >
                <Book className="w-4 h-4" />
                Verbal
              </button>
              <button
                onClick={() => handleCategoryChange('Math')}
                className={`px-4 py-2 text-sm font-medium rounded-cb-xs transition-all flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#324dc7] ${
                  activeCategory === 'Math'
                    ? 'bg-white text-[#dc2323] shadow-sm border border-[#d9d9d9]'
                    : 'text-gray-600 hover:text-[#1e1e1e]'
                }`}
              >
                <Calculator className="w-4 h-4" />
                Math
              </button>
            </div>
          </div>

          {/* Module Navigation (Horizontal) */}
          <div className="flex-1 w-full overflow-x-auto hide-scrollbar">
            <nav className="flex gap-2 min-w-max pr-2">
              {filteredSections.map(section => (
                <button
                  key={section.id}
                  onClick={() => setActiveSectionId(section.id)}
                  className={`whitespace-nowrap px-4 py-2.5 text-sm font-medium flex items-center gap-2 rounded-cb-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#324dc7] ${
                    activeSectionId === section.id 
                      ? 'bg-[#1e1e1e] text-white shadow-sm' 
                      : 'bg-white text-gray-700 hover:bg-[#f5f7fc] border border-[#d9d9d9]'
                  }`}
                >
                  <span className={`flex-shrink-0 w-1.5 h-1.5 rounded-full ${activeSectionId === section.id ? 'bg-[#ffe36d]' : 'bg-gray-400'}`}></span>
                  {section.title}
                </button>
              ))}
            </nav>
          </div>

        </div>
      </div>

      {/* Search Bar */}
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Tìm kiếm lý thuyết..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="block w-full pl-11 pr-4 py-3.5 border border-[#d9d9d9] rounded-cb-md bg-white text-base placeholder-gray-500 focus:outline-none focus:border-[#324dc7] focus:ring-1 focus:ring-[#324dc7] transition-all shadow-sm font-medium"
        />
      </div>

      {/* Global Help Toggle (Moved here from App) */}
      <div className="w-full border border-[#d9d9d9] bg-white shadow-sm rounded-cb-md overflow-hidden">
        <button 
          onClick={() => setIsHelpOpen(!isHelpOpen)}
          className="w-full flex items-center justify-between p-5 bg-white hover:bg-[#f5f7fc] transition-colors text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#324dc7] focus-visible:ring-inset"
        >
          <h3 className="text-base md:text-lg font-bold text-[#1e1e1e] flex items-center">
            <span className="bg-[#1e1e1e] text-white text-xs px-3 py-1.5 mr-3 rounded-cb-xs font-bold uppercase tracking-wider">HƯỚNG DẪN</span>
            Cách sử dụng App
          </h3>
          <span className="text-2xl font-light text-gray-400 w-8 h-8 flex items-center justify-center">
            {isHelpOpen ? '−' : '+'}
          </span>
        </button>
        
        {isHelpOpen && (
          <div className="p-6 border-t border-[#d9d9d9] bg-[#f5f7fc] animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 border border-[#d9d9d9] shadow-sm rounded-cb-sm">
                <div className="text-3xl mb-4">📍</div>
                <h4 className="font-bold text-[#324dc7] mb-2 text-base">1. Lý thuyết (Theory)</h4>
                <p className="text-sm text-[#1e1e1e] leading-relaxed font-medium">
                  Đọc kỹ các quy tắc Ngữ pháp và Công thức Toán (Đại số, Hình học).
                </p>
              </div>
              <div className="bg-white p-6 border border-[#d9d9d9] shadow-sm rounded-cb-sm">
                <div className="text-3xl mb-4">🧐</div>
                <h4 className="font-bold text-[#324dc7] mb-2 text-base">2. Từ vựng (Vocab)</h4>
                <p className="text-sm text-[#1e1e1e] leading-relaxed font-medium">
                  Ghi nhớ từ vựng học thuật thường gặp và các thuật ngữ Toán tiếng Anh.
                </p>
              </div>
              <div className="bg-white p-6 border border-[#d9d9d9] shadow-sm rounded-cb-sm">
                <div className="text-3xl mb-4">🧠</div>
                <h4 className="font-bold text-[#324dc7] mb-2 text-base">3. Luyện tập (Drills)</h4>
                <p className="text-sm text-[#1e1e1e] leading-relaxed font-medium">
                  Làm bài tập ngắn và xem giải thích chi tiết để hiểu lỗi sai.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Main Content Area */}
      <div className="w-full">
        <div className="bg-white border border-[#d9d9d9] shadow-cb rounded-cb-md min-h-[500px] flex flex-col overflow-hidden">
          {!activeSection ? (
            <div className="flex-1 flex flex-col items-center justify-center p-12 text-gray-500">
              <Search className="w-12 h-12 mb-4 text-gray-300" />
              <h3 className="text-xl font-bold text-[#1e1e1e] mb-2">Không tìm thấy kết quả</h3>
              <p>Thử tìm kiếm với một từ khóa khác.</p>
            </div>
          ) : (
            <>
              {/* Content Header */}
              <div className="bg-white border-b border-[#d9d9d9] p-6 md:p-8 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="bg-[#f5f7fc] p-3 rounded-cb-sm text-[#dc2323] border border-[#d9d9d9]">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                     <h2 className="text-2xl md:text-3xl font-bold text-[#1e1e1e]">
                      {activeSection?.title}
                    </h2>
                    <span className="text-sm text-gray-500 font-medium tracking-wide uppercase mt-1 block">
                      {activeCategory} Domain
                    </span>
                  </div>
                </div>
              </div>
    
              {/* Content Body */}
              <div className="p-6 md:p-10 text-[#1e1e1e] leading-relaxed">
                {activeSectionId === 'v_grammar_bytes' ? (
                  <GrammarLecturesInteractive />
                ) : (
                  <div id="theory-export-content" className="flex flex-col gap-6">
                    <div className="flex justify-end gap-2 export-button-hide">
                      <button
                        onClick={() => exportToPng('theory-export-content', `Theory: ${activeSection?.title}`, `SAT_THEORY_${activeSectionId}`)}
                        className="flex items-center gap-1.5 bg-[#ffe36d] hover:bg-[#ebd056] text-black text-xs font-bold px-3 py-2 rounded-cb-xs shadow-sm transition-colors border border-[#ffe36d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#324dc7]"
                        title="Tải nội dung lý thuyết hiện tại dạng ảnh PNG"
                      >
                        <Download className="w-3.5 h-3.5" />
                        Download PNG
                      </button>
                      <button
                        onClick={() => exportToHtml('theory-export-content', `Theory: ${activeSection?.title}`, `SAT_THEORY_${activeSectionId}`)}
                        className="flex items-center gap-1.5 bg-[#1e1e1e] hover:bg-black text-white text-xs font-bold px-3 py-2 rounded-cb-xs shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#324dc7]"
                        title="Tải nội dung lý thuyết hiện tại dạng tập tin HTML"
                      >
                        <FileCode className="w-3.5 h-3.5" />
                        Download HTML
                      </button>
                    </div>
                    <div className="text-[#1e1e1e] leading-relaxed prose prose-slate max-w-none">
                      {activeSection?.content}
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TheoryView;
