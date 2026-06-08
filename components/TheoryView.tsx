
import React, { useState, useMemo } from 'react';
import { theorySections } from '../data/content';
import { FileText, Book, Calculator, Lightbulb, Download, FileCode } from 'lucide-react';
import GrammarLecturesInteractive from './GrammarLecturesInteractive';
import { exportToPng, exportToHtml } from '../utils/exportHelper';

interface TheoryViewProps {
  initialCategory?: 'Overview' | 'Verbal' | 'Math';
  onCategoryChange?: (category: 'Overview' | 'Verbal' | 'Math') => void;
}

const TheoryView: React.FC<TheoryViewProps> = ({ initialCategory = 'Overview', onCategoryChange }) => {
  const [activeCategory, setActiveCategory] = useState<'Overview' | 'Verbal' | 'Math'>(initialCategory);

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
  
  // Filter sections based on category
  const filteredSections = useMemo(() => 
    theorySections.filter(s => s.category === activeCategory), 
  [activeCategory]);

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
      <div className="w-full bg-white border border-gray-200 shadow-sm rounded-xl p-4 lg:sticky lg:top-20 z-10">
        <div className="flex flex-col md:flex-row gap-4 justify-between md:items-center">
          
          {/* Category Toggle */}
          <div className="flex gap-2 flex-shrink-0 bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => handleCategoryChange('Overview')}
              className={`px-4 py-2.5 text-sm font-semibold rounded-md transition-all flex items-center gap-2 ${
                activeCategory === 'Overview'
                  ? 'bg-white text-[#dc2323] shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <FileText className="w-4 h-4" />
              Tổng Quan
            </button>
            <button
              onClick={() => handleCategoryChange('Verbal')}
              className={`px-4 py-2.5 text-sm font-semibold rounded-md transition-all flex items-center gap-2 ${
                activeCategory === 'Verbal'
                  ? 'bg-white text-[#dc2323] shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Book className="w-4 h-4" />
              Verbal
            </button>
            <button
              onClick={() => handleCategoryChange('Math')}
              className={`px-4 py-2.5 text-sm font-semibold rounded-md transition-all flex items-center gap-2 ${
                activeCategory === 'Math'
                  ? 'bg-white text-[#dc2323] shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Calculator className="w-4 h-4" />
              Math
            </button>
          </div>

          {/* Module Navigation (Horizontal) */}
          <div className="flex-1 w-full overflow-x-auto hide-scrollbar">
            <nav className="flex gap-2 min-w-max pr-2">
              {filteredSections.map(section => (
                <button
                  key={section.id}
                  onClick={() => setActiveSectionId(section.id)}
                  className={`whitespace-nowrap px-4 py-2.5 text-sm font-semibold flex items-center gap-2 rounded-lg transition-all ${
                    activeSectionId === section.id 
                      ? 'bg-[#dc2323] text-white shadow-sm' 
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border border-transparent hover:border-gray-200'
                  }`}
                >
                  <span className={`flex-shrink-0 w-1.5 h-1.5 rounded-full ${activeSectionId === section.id ? 'bg-white' : 'bg-gray-400'}`}></span>
                  {section.title}
                </button>
              ))}
            </nav>
          </div>

        </div>
      </div>

      {/* Main Content Area */}
      <div className="w-full">
        <div className="bg-white border border-gray-200 shadow-sm rounded-2xl min-h-[500px] flex flex-col overflow-hidden">
          {/* Content Header */}
          <div className="bg-white border-b border-gray-100 p-6 md:p-8 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-[#fffaf0] p-3 rounded-xl text-[#dc2323]">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                 <h2 className="text-2xl md:text-3xl font-bold text-[#21242c]">
                  {activeSection?.title}
                </h2>
                <span className="text-sm text-gray-500 font-semibold tracking-wide uppercase mt-1 block">
                  {activeCategory} Domain
                </span>
              </div>
            </div>
          </div>

          {/* Content Body */}
          <div className="p-6 md:p-10 text-[#21242c] leading-relaxed">
            {activeSectionId === 'v_grammar_bytes' ? (
              <GrammarLecturesInteractive />
            ) : (
              <div id="theory-export-content" className="flex flex-col gap-6">
                <div className="flex justify-end gap-2 export-button-hide">
                  <button
                    onClick={() => exportToPng('theory-export-content', `Theory: ${activeSection?.title}`, `SAT_THEORY_${activeSectionId}`)}
                    className="flex items-center gap-1.5 bg-[#ffe36d] hover:bg-[#ebd056] text-black text-xs font-bold px-3 py-2 rounded-lg shadow transition-colors"
                    title="Tải nội dung lý thuyết hiện tại dạng ảnh PNG"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Download PNG
                  </button>
                  <button
                    onClick={() => exportToHtml('theory-export-content', `Theory: ${activeSection?.title}`, `SAT_THEORY_${activeSectionId}`)}
                    className="flex items-center gap-1.5 bg-gray-700 hover:bg-gray-600 text-white text-xs font-bold px-3 py-2 rounded-lg shadow transition-colors"
                    title="Tải nội dung lý thuyết hiện tại dạng tập tin HTML"
                  >
                    <FileCode className="w-3.5 h-3.5" />
                    Download HTML
                  </button>
                </div>
                <div className="text-[#21242c] leading-relaxed">
                  {activeSection?.content}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheoryView;
