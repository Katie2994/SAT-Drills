import React, { useState } from 'react';
import { Volume2, ExternalLink, Download, FileCode, Presentation, ListChecks } from 'lucide-react';
import { exportToPng, exportToHtml } from '../utils/exportHelper';

// Detailed description / introduction for each grammar subject to make the printed sheet feel substantive and premium
const LECTURE_DEFS: Record<number, string> = {
  1: "Cách chọn từ vựng chính xác dựa trên ngữ cảnh học thuật và sắc thái nghĩa. Tránh bẫy từ đồng nghĩa không phù hợp trong đề thi SAT.",
  2: "Phân biệt các cặp từ viết gần giống nhau hoặc dễ nhầm lẫn phổ biến như effect/affect, principal/principle, than/then.",
  3: "Quy tắc định vị và hòa hợp Modifier (bổ ngữ), cách sửa lỗi dangling modifier (bổ ngữ lửng lơ) và misplaced modifier (bổ ngữ sai vị trí).",
  4: "Liên từ kết hợp (Coordinate) và liên từ phụ thuộc (Subordinate). Cách thiết lập mối quan hệ nhân quả, trái ngược trong câu phức ghép.",
  5: "Cấu trúc song hành (Parallelism). Đảm bảo danh từ, động từ, cụm từ trong một danh sách có chung định dạng ngữ pháp.",
  6: "Lỗi Comma Splice (gộp câu bằng dấu phẩy), Fused Sentence (gộp hai mệnh đề độc lập mà không có liên từ) và Fragment (câu thiếu vị ngữ/chủ ngữ).",
  7: "Các thì của động từ và dạng phân từ (past participles, gerunds). Nắm chắc cấu trúc động từ học thuật trong văn bản khoa học.",
  8: "Lỗi chuyển thì không nhất quán (Tense Shift) trong mạch văn logic. Đảm bảo tính liên kết thời gian giữa các mệnh đề liên tiếp.",
  9: "Sự hòa hợp giữa Chủ ngữ và Động từ (Subject-Verb Agreement), đặc biệt khi có các trạng từ, giới từ chen ngang làm nhiễu.",
  10: "Sự hòa hợp giữa Đại từ và Danh từ thay thế (Pronoun-Antecedent Agreement) về mặt số ít, số nhiều và giới tính.",
  11: "Lỗi chuyển đổi ngôi đại từ đột ngột (Pronoun Shift), ví dụ đang dùng ngôi 'we' lại chuyển sang ngôi 'you' một cách vô lý.",
  12: "Lỗi đại từ không rõ nghĩa đại diện (Pronoun Reference Error). Sửa các chỗ mập mờ khi một câu có nhiều chủ thể có thể đại diện.",
  13: "Biến cách đại từ (Pronoun Cases): Phân biệt chính xác giữa vị trí Làm Chủ ngữ (Nominative: I, they) và Làm Tân ngữ (Objective: me, them).",
  14: "Tính từ và Trạng từ (Adjectives vs. Adverbs). Cách bổ nghĩa chính xác cho danh từ so với động từ, tính từ hoặc trạng từ khác.",
  15: "Cấp độ so sánh (Degree of Comparison): So sánh hơn (comparative) và so sánh nhất (superlative). Cách tránh so sánh khập khiễng.",
  16: "Quy tắc chính tả học thuật (Spelling guidelines). Tránh các lỗi bẫy cấu trúc từ vựng tiếng Anh trong bài thi viết SAT.",
  17: "Quy chuẩn Punctuation (Dấu câu): Dấu phẩy, dấu hai chấm, dấu gạch ngang, dấu chấm phẩy, nhằm liên kết ý rõ ràng mạch lạc.",
  18: "Quy chuẩn viết hoa (Capitalization Rules) cho các chức danh, môn học, địa danh đúng chuẩn phong cách học thuật College Board."
};

const GRAMMAR_LECTURES = [
  { title: "Word Choice", src: "https://1drv.ms/p/c/dd8d396ca8606304/IQRWFrowCe9ERJWSGv7xg3w0AeariOBeIYdqVVvsaoVB4wM" },
  { title: "Confused Words", src: "https://1drv.ms/p/c/dd8d396ca8606304/IQRuwYq3c0jiS5QFm2CJhiqdAZi6-gkjy4yyFZ_NjwAwyM8" },
  { title: "Modifiers", src: "https://1drv.ms/p/c/dd8d396ca8606304/IQTqSmn0oWdrR7fWZ6qIgAnhAZqyz_-1_BQGlt8h6Vnb9mg" },
  { title: "Coordinate & Subordinate", src: "https://1drv.ms/p/c/dd8d396ca8606304/IQRiF3Eb4ia_T4mruxONVY3LAfyn0FcTfyLwFZGCMde-2oA" },
  { title: "Parallelism", src: "https://1drv.ms/p/c/dd8d396ca8606304/IQSSCrfYHrQqRJZhxZnhLXmSAX4DNXJI9Jiyy7dYzFGbKz8" },
  { title: "Comma Splice, Fused Sentence, Fragment", src: "https://1drv.ms/p/c/dd8d396ca8606304/IQTY7qG9iNw3S7MwT3gPrtVAAYVeGOapk27ql3sYacNFAyo" },
  { title: "Verb Forms", src: "https://1drv.ms/p/c/dd8d396ca8606304/IQSssUHreKaLSZ7hYwJPINpzAYFNPz79YU0QGtoOqzivwX4" },
  { title: "Tense Shift", src: "https://1drv.ms/p/c/dd8d396ca8606304/IQQQDWBr8wbITJCzAmwAst1dAR69KnigH2UTmKB_E5rriF0" },
  { title: "Subject-Verb Agreement", src: "https://1drv.ms/p/c/dd8d396ca8606304/IQS5O8t8ZA4aT5Q6euS_TZ3mAUijR2YwTD-n7-5ahiTQAUU" },
  { title: "Pronoun Agreement", src: "https://1drv.ms/p/c/dd8d396ca8606304/IQTPI_jX5pHnRqT8yguH7qBJAYFrLbdLTgWFDuLSw2zhW_s" },
  { title: "Pronoun Shift", src: "https://1drv.ms/p/c/dd8d396ca8606304/IQTC49I7nff3Q7AawwSHlLENARd9blEtZzuEulGJsf83D6w" },
  { title: "Pronoun Reference", src: "https://1drv.ms/p/c/dd8d396ca8606304/IQTegcdWZ7STT4aZqQBVBn92ARSiryeOCR8pGUPKFa08YMI" },
  { title: "Pronoun Case", src: "https://1drv.ms/p/c/dd8d396ca8606304/IQQQi0PkdAoBQY1z-Q_CkEPfAbxzYQZbtB3ADLWgPfm7EqM" },
  { title: "Adjectives & Adverbs", src: "https://1drv.ms/p/c/dd8d396ca8606304/IQSVxvUdczGETpSdlfcLtP7LATSruzwgNuJacbvnFxIbMwk" },
  { title: "Degree", src: "https://1drv.ms/p/c/dd8d396ca8606304/IQR8xj_Qs3dDSo5tENgc65WBAfDy-OP8qiyNvMQvTc2T4q0" },
  { title: "Spelling", src: "https://1drv.ms/p/c/dd8d396ca8606304/IQS1ebQNZPT4TLOJTKbHQATUAflkkNq0nNVf2_v29ptAZaw" },
  { title: "Punctuation", src: "https://1drv.ms/p/c/dd8d396ca8606304/IQSseuRvWCdUSqrjOIiAdNshAcMtgAFZ-4-e7P3o4_v7MeA" },
  { title: "Capitalization", src: "https://1drv.ms/p/c/dd8d396ca8606304/IQTlgD8czVLfT53Cz4wiEk3vAWz3pTndxAcxfhBFn07dJHc" }
];

const GrammarLecturesInteractive: React.FC = () => {
  const [activeLectureIdx, setActiveLectureIdx] = useState(0);
  const currentLecture = GRAMMAR_LECTURES[activeLectureIdx];

  const handleDownloadPng = () => {
    exportToPng(
      'active-lecture-container',
      `Bài giảng Grammar ${activeLectureIdx + 1}: ${currentLecture.title}`,
      `SAT_LECTURE_${activeLectureIdx + 1}_${currentLecture.title.replace(/[^a-zA-Z0-9]/g, '_').toLowerCase()}`
    );
  };

  const handleDownloadHtml = () => {
    exportToHtml(
      'active-lecture-container',
      `Bài giảng Grammar ${activeLectureIdx + 1}: ${currentLecture.title}`,
      `SAT_LECTURE_${activeLectureIdx + 1}_${currentLecture.title.replace(/[^a-zA-Z0-9]/g, '_').toLowerCase()}`
    );
  };

  return (
    <div className="space-y-6 text-[#1e1e1e] font-sans">
      
      {/* Upper overview card */}
      <div className="bg-[#1e1e1e] text-white p-6 rounded-cb-md shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4 border border-[#324dc7]">
        <div>
          <h2 className="text-3xl font-extrabold flex items-center gap-2 tracking-tight font-display">
            <Presentation className="text-[#ffe36d] w-8 h-8" />
            Grammar Bytes Lectures
          </h2>
          <p className="opacity-95 text-sm mt-1 max-w-xl font-medium leading-relaxed">
            Học phần ôn thi Ngữ pháp chuyên sâu Digital SAT. Hệ thống hóa toàn bộ lý thuyết và quy tắc viết tiếng Anh học thuật chuẩn College Board.
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={handleDownloadPng}
            className="export-button-hide flex items-center gap-1.5 bg-[#ffe36d] hover:bg-[#ebd056] text-black text-xs font-bold uppercase tracking-wider px-3 py-2 rounded-cb-xs shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffe36d] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1e1e1e]"
            title="Tải bài học hiện tại dạng ảnh PNG chất lượng cao có header & footer"
          >
            <Download className="w-3.5 h-3.5" />
            Download PNG
          </button>
          <button
            onClick={handleDownloadHtml}
            className="export-button-hide flex items-center gap-1.5 bg-gray-700 hover:bg-gray-600 text-white text-xs font-bold uppercase tracking-wider px-3 py-2 rounded-cb-xs shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffe36d] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1e1e1e]"
            title="Tải bài học hiện tại dạng tập tin HTML độc lập giữ nguyên giao diện"
          >
            <FileCode className="w-3.5 h-3.5" />
            Download HTML
          </button>
        </div>
      </div>

      {/* Grid selector / Navigation bar of 18 lessons */}
      <div className="bg-white p-4 rounded-cb-md border border-[#d9d9d9] shadow-sm">
        <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3 flex items-center gap-1.5">
          <ListChecks className="w-4 h-4 text-[#dc2323]" />
          Chọn chủ đề bài giảng (18 Modules):
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-6 gap-1.5">
          {GRAMMAR_LECTURES.map((lecture, idx) => (
            <button
              key={idx}
              onClick={() => setActiveLectureIdx(idx)}
              className={`text-xs p-2 rounded-cb-xs font-bold transition-all text-left truncate flex items-center gap-1 border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#324dc7] ${
                activeLectureIdx === idx
                  ? 'bg-[#324dc7] border-[#324dc7] text-white shadow-sm'
                  : 'bg-white border-[#d9d9d9] text-[#1e1e1e] hover:border-[#324dc7] hover:bg-[#f5f7fc]'
              }`}
              title={`${idx + 1}. ${lecture.title}`}
            >
              <span className={`w-4 h-4 rounded-full text-[10px] flex items-center justify-center font-bold flex-shrink-0 ${activeLectureIdx === idx ? 'bg-white text-[#324dc7]' : 'bg-[#f5f7fc] text-gray-500'}`}>
                {idx + 1}
              </span>
              <span className="truncate">{lecture.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main viewport with the selected lecture detail wrapper */}
      <div id="active-lecture-container" className="bg-white p-6 rounded-cb-lg border border-[#d9d9d9] shadow-cb flex flex-col gap-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#d9d9d9]">
          <div>
            <span className="bg-[#f5f7fc] text-[#324dc7] border border-[#d9d9d9] text-xs font-bold px-3 py-1 rounded-cb-xs uppercase tracking-wider inline-flex items-center">
              Lecture Module {activeLectureIdx + 1} of {GRAMMAR_LECTURES.length}
            </span>
            <h3 className="font-extrabold text-xl md:text-2xl text-[#1e1e1e] mt-3 tracking-tight font-display">
              {currentLecture.title}
            </h3>
          </div>
          
          <div className="flex items-center gap-2">
            {/* Fallback direct slide URL launcher */}
            <a
              href={currentLecture.src}
              target="_blank"
              rel="noopener noreferrer"
              className="export-button-hide inline-flex items-center gap-1.5 text-xs font-bold text-[#324dc7] bg-white border border-[#324dc7] px-4 py-2 rounded-cb-xs hover:bg-[#f5f7fc] hover:shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#324dc7]"
              title="Nhấn vào đây để xem trực tiếp trang slide PowerPoint OneDrive nếu iframe bị chặn hoặc không hiển thị."
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Mở trực tiếp bài giảng (Open in New Tab) ↗
            </a>
          </div>
        </div>

        {/* Informative summary bullet points or overview text */}
        <p className="text-sm text-gray-700 bg-[#f5f7fc] p-4 rounded-cb-sm border border-[#d9d9d9] leading-relaxed font-medium">
          <strong className="text-[#1e1e1e] uppercase tracking-wide text-xs mb-1 block">Tóm tắt nội dung:</strong> {LECTURE_DEFS[activeLectureIdx + 1] || "Bài học ngữ pháp tiếng Anh quan trọng giúp trang bị kiến thức giải đề thi viết/đọc thử thách."}
        </p>

        {/* PPT Slide Iframe Viewer Container */}
        <div className="relative w-full max-w-4xl mx-auto rounded-cb-md overflow-hidden bg-[#f5f7fc] border border-[#d9d9d9] shadow-sm flex items-center justify-center" style={{ aspectRatio: '16/10' }}>
          <iframe 
            src={currentLecture.src} 
            className="absolute top-0 left-0 w-full h-full" 
            frameBorder="0" 
            scrolling="no" 
            loading="lazy"
            title={`${currentLecture.title} slide show presentation`}
            allowFullScreen
          ></iframe>
        </div>

        {/* Friendly instruction tag for users */}
        <div className="text-center text-xs text-gray-500 font-medium italic select-none">
          Mẹo: Slide trình bày trực quan chứa bài học lí thuyết ngữ pháp, bấm vào các nút điều khiển của OneDrive bên trong slide để chuyển trang.
        </div>
      </div>

    </div>
  );
};

export default GrammarLecturesInteractive;
