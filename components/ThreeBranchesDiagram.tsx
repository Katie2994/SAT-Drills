import React, { useState } from 'react';
import { ZoomIn, ZoomOut, RotateCcw, X, ExternalLink, Maximize2 } from 'lucide-react';

const ThreeBranchesDiagram: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.25, 0.75));
  };

  const handleReset = () => {
    setZoomLevel(1);
  };

  return (
    <div className="w-full">
      {/* Thumbnail Card */}
      <div className="group relative bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 max-w-2xl mx-auto">
        <div className="p-4 bg-gray-50 border-b border-gray-200 flex justify-between items-center">
          <div>
            <h5 className="font-bold text-lg text-gray-900 font-sans tracking-tight">Sơ đồ 3 nhánh (Tam quyền phân lập)</h5>
            <p className="text-xs text-gray-500 font-sans mt-0.5">Mô hình Checks & Balances giữa Lập pháp, Hành pháp và Tư pháp</p>
          </div>
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-1 bg-black hover:bg-gray-800 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors shadow-sm focus:outline-none"
            title="Phóng to sơ đồ"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span>Phóng to</span>
          </button>
        </div>

        {/* Image Container with Hover Overlay */}
        <div 
          onClick={() => setIsOpen(true)}
          className="relative aspect-[4/3] max-h-[380px] bg-white p-6 flex items-center justify-center cursor-pointer overflow-hidden group/img"
        >
          <img 
            src="https://images.ndla.no/bf0JONgl.svg" 
            alt="Sơ đồ 3 nhánh (Tam quyền phân lập)" 
            className="w-full h-full object-contain transition-transform duration-500 group-hover/img:scale-102"
          />
          
          {/* Subtle Hover Action Backdrop */}
          <div className="absolute inset-0 bg-black/5 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="bg-white/90 backdrop-blur-xs text-black border border-gray-200 font-semibold text-sm px-4 py-2 rounded-full shadow-lg flex items-center gap-2 transform translate-y-2 group-hover/img:translate-y-0 transition-transform duration-300">
              <ZoomIn className="w-4 h-4 text-gray-700" />
              Click để xem toàn màn hình
            </span>
          </div>
        </div>

        <div className="px-5 py-3.5 bg-gray-50 border-t border-gray-100 text-sm text-gray-600 font-sans leading-relaxed">
          💡 <strong>Cách nhớ nhanh:</strong> Nhánh <strong>Legislative</strong> (Quốc hội) thảo ra luật, <strong>Executive</strong> (Tổng thống) thi hành luật, và <strong>Judicial</strong> (Tòa án tối cao) phán xét tính hợp hiến của luật đó.
        </div>
      </div>

      {/* Lightbox Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex flex-col justify-between bg-black/95 backdrop-blur-md animate-fade-in">
          {/* Header */}
          <div className="p-4 md:p-6 bg-black/60 border-b border-white/10 flex justify-between items-center text-white backdrop-blur-xs">
            <div>
              <h4 className="text-xl font-bold font-sans tracking-tight">Sơ đồ 3 nhánh: Tam quyền phân lập</h4>
              <p className="text-xs md:text-sm text-gray-400 mt-1 font-sans">Sử dụng các nút điều khiển hoặc cuộn để phóng to, thu nhỏ chi tiết sơ đồ.</p>
            </div>
            
            <div className="flex items-center gap-3">
              <a
                href="https://images.ndla.no/bf0JONgl.svg"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center gap-1 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold px-3 py-2 rounded-lg transition-colors border border-white/10"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Mở ảnh gốc
              </a>
              <button
                onClick={() => {
                  setIsOpen(false);
                  setZoomLevel(1);
                }}
                className="p-2.5 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors border border-white/10 focus:outline-none"
                aria-label="Đóng"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Interactive Zoomable Image Area */}
          <div className="flex-1 w-full overflow-auto flex items-center justify-center p-4 bg-[#111] relative select-none">
            <div 
              className="transition-transform duration-200 ease-out flex items-center justify-center max-w-full max-h-full"
              style={{ transform: `scale(${zoomLevel})` }}
            >
              <img 
                src="https://images.ndla.no/bf0JONgl.svg" 
                alt="Sơ đồ 3 nhánh (Tam quyền phân lập) Phóng to" 
                className="max-w-[90vw] max-h-[70vh] object-contain rounded-lg shadow-2xl bg-white p-4 md:p-8"
                draggable={false}
              />
            </div>

            {/* Bottom Status Indicator */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-xs text-white font-mono">
              Zoom: {Math.round(zoomLevel * 100)}%
            </div>
          </div>

          {/* Zoom / Action Controls Bar */}
          <div className="p-4 md:p-6 bg-black/60 border-t border-white/10 flex justify-center items-center gap-4 backdrop-blur-xs">
            <div className="flex items-center gap-2 bg-white/10 p-1.5 rounded-xl border border-white/10">
              <button
                onClick={handleZoomOut}
                disabled={zoomLevel <= 0.75}
                className="p-2 text-white hover:bg-white/15 rounded-lg disabled:opacity-40 transition-colors focus:outline-none"
                title="Thu nhỏ"
              >
                <ZoomOut className="w-5 h-5" />
              </button>
              
              <button
                onClick={handleReset}
                className="px-3.5 py-2 text-white hover:bg-white/15 rounded-lg transition-colors font-semibold text-xs flex items-center gap-1.5 focus:outline-none border border-white/5"
                title="Đặt lại zoom ban đầu"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Đặt lại</span>
              </button>
              
              <button
                onClick={handleZoomIn}
                disabled={zoomLevel >= 3}
                className="p-2 text-white hover:bg-white/15 rounded-lg disabled:opacity-40 transition-colors focus:outline-none"
                title="Phóng to"
              >
                <ZoomIn className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ThreeBranchesDiagram;
