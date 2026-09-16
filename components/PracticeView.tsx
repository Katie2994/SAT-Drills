import React from 'react';
import { ExternalLink, Target, Sparkles, BookOpen, Clock, Calendar } from 'lucide-react';

const PracticeView: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto animate-fade-in font-sans">
      <div className="bg-white border border-[#d9d9d9] shadow-cb rounded-cb-lg p-8 md:p-12 relative overflow-hidden">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#f5f7fc] border border-[#324dc7] rounded-full mb-6 shadow-sm">
            <Target className="w-8 h-8 text-[#324dc7]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-[#1e1e1e] uppercase tracking-tight mb-4">
            Hệ Thống Luyện Đề SAT
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Bộ đề thi thử Digital SAT tổng hợp, bám sát cấu trúc đề thi thật của College Board và bao gồm các bộ đề dự đoán mới nhất.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-[#fffdf0] border border-[#ffe36d] p-5 rounded-cb-sm">
            <h4 className="font-bold text-[#dc2323] text-base mb-2 flex items-center gap-2">
              <Calendar className="w-5 h-5" /> Đề Dự Đoán Cập Nhật
            </h4>
            <p className="text-sm text-gray-700">Các bộ đề được tổng hợp và dự đoán sát với xu hướng ra đề mới nhất của Digital SAT (2025-2026).</p>
          </div>
          
          <div className="bg-[#f5f7fc] border border-[#324dc7] p-5 rounded-cb-sm">
            <h4 className="font-bold text-[#324dc7] text-base mb-2 flex items-center gap-2">
              <Sparkles className="w-5 h-5" /> Chuẩn Format Bluebook
            </h4>
            <p className="text-sm text-gray-700">Trải nghiệm giao diện và cấu trúc bài thi giống hệt với phần mềm thi chính thức của College Board.</p>
          </div>
        </div>

        {/* Action Button */}
        <div className="flex flex-col items-center">
          <a 
            href="https://satdrills.theclaracare.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-3 bg-[#dc2323] hover:bg-[#b01c1c] text-white font-bold text-lg px-8 py-4 rounded-cb-md shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#dc2323] focus-visible:ring-offset-2"
          >
            <span>Truy Cập Nền Tảng Luyện Đề Ngay</span>
            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="text-sm text-gray-500 mt-4 italic">
            * Hệ thống sẽ mở ra trong một tab mới
          </p>
        </div>
      </div>
    </div>
  );
};

export default PracticeView;
