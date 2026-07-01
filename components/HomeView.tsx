import React, { useState, useEffect } from "react";
import { ViewState } from "../types";
import {
  BookOpen,
  Zap,
  Target,
  Search,
  ArrowRight,
  Award,
  GraduationCap,
  Sparkles,
  Calculator,
  BookOpenText,
  Flame,
  HelpCircle,
} from "lucide-react";

interface HomeViewProps {
  setView: (view: ViewState, category?: "Overview" | "Verbal" | "Math") => void;
}

const HomeView: React.FC<HomeViewProps> = ({ setView }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentTipIndex, setCurrentTipIndex] = useState(0);

  const [targetExamDate, setTargetExamDate] = useState<string>(() => {
    return localStorage.getItem("satTargetDate") || "2026-10-10";
  });
  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    const calculateDays = () => {
      const target = new Date(targetExamDate);
      target.setHours(0, 0, 0, 0);
      const now = new Date();
      now.setHours(0, 0, 0, 0);
      const diffTime = target.getTime() - now.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setDaysLeft(diffDays);
    };
    calculateDays();
    // Rotate tips in intervals
    const interval = setInterval(() => {
      setCurrentTipIndex((prev) => (prev + 1) % interactiveTips.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [targetExamDate]);

  const interactiveTips = [
    "Mẹo thi: Hãy luôn đọc câu hỏi trước khi đọc đoạn văn ở phần Reading.",
    "Mẹo Desmos: Nhập phương trình trực tiếp vào ô tìm nghiệm mà không cần chuyển vế.",
    "Từ vựng ôn tập: Từ 'mitigate' nghĩa là giảm nhẹ, thường có trong dạng bài Vocabulary-in-Context.",
    "Tính chất tam giác: Tam giác vàng 30-60-90 luôn có tỉ lệ các cạnh là x : x√3 : 2x.",
  ];

  // Local state or static suggestions for search query
  const suggestions = [
    {
      text: "Academic Vocab Decks & Drills",
      view: ViewState.VOCAB,
      cat: "Vocab",
    },
    {
      text: "Reading & Writing Grammar rules",
      view: ViewState.LEARN,
      cat: "Syllabus",
      detail: "Verbal",
    },
    {
      text: "Core Math formulas & Algebra rules",
      view: ViewState.LEARN,
      cat: "Syllabus",
      detail: "Math",
    },
    {
      text: "SAT Math practice drills with instant scores",
      view: ViewState.PRACTICE,
      cat: "Mock exam",
    },
    {
      text: "Smart AI Explainer & OCR Snapshot solver",
      view: ViewState.AI_SOLVER,
      cat: "AI Assist",
    },
  ];

  const filteredSuggestions =
    searchQuery.trim() === ""
      ? []
      : suggestions.filter(
          (s) =>
            s.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
            s.cat.toLowerCase().includes(searchQuery.toLowerCase()) ||
            s.detail?.toLowerCase().includes(searchQuery.toLowerCase()),
        );

  return (
    <div className="max-w-6xl mx-auto animate-fade-in font-sans pb-16">
      {/* 1. Header Grid Area: Title & Stats Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-center">
        {/* Brand Banner Block */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 bg-[#dc2323] text-white rounded-cb-xs px-3 py-1 font-mono text-xs font-bold uppercase tracking-widest shadow-sm w-fit mb-4">
            <Flame className="w-4 h-4 text-[#ffe36d] fill-[#ffe36d] animate-bounce" />
            OFFICIAL SYLLABUS 2026/2027
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 tracking-tight leading-tight mb-4 select-none">
            DIGITAL{" "}
            <span className="text-[#dc2323] underline decoration-[#ffe36d] decoration-4 underline-offset-4">
              SAT
            </span>{" "}
            PREP
          </h1>

          <p className="text-base md:text-lg text-gray-600 font-normal leading-relaxed max-w-xl">
            Học thông minh, đột phá điểm số với kho tàng bài giải chi tiết,
            flashcards từ vựng bám sát format thực tế, hệ thống thi thử chuẩn
            hóa, và trợ lý AI thông minh giải thích cặn kẽ mọi câu hỏi Toán -
            Văn.
          </p>

          {/* Quick interactive search input */}
          <div className="mt-8 relative max-w-lg">
            <div className="relative">
              <input
                type="text"
                placeholder="Tìm công thức, từ vựng hoặc chủ đề ôn thi..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-[#d9d9d9] rounded-cb-xs px-6 py-4 pl-14 text-sm font-medium shadow-cb focus:outline-none focus:border-[#324dc7] focus:ring-1 focus:ring-[#324dc7] transition-all placeholder-gray-400"
              />
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black font-medium text-xs bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-md transition-colors"
                >
                  Xóa
                </button>
              )}
            </div>

            {/* Live dropdown matching clean theme */}
            {filteredSuggestions.length > 0 && (
              <div className="absolute left-0 right-0 mt-2 bg-white border border-[#d9d9d9] rounded-cb-xs shadow-lg z-30 overflow-hidden divide-y divide-[#f5f7fc]">
                {filteredSuggestions.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setView(item.view, item.detail as any);
                      setSearchQuery("");
                    }}
                    className="w-full p-4 text-left hover:bg-[#f5f7fc] flex justify-between items-center transition-colors group cursor-pointer focus-visible:bg-[#f5f7fc]"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-[#ffe36d] text-black px-2 py-1 rounded-md">
                        {item.cat}
                      </span>
                      <span className="font-medium text-slate-900 group-hover:text-[#dc2323] text-sm transition-colors">
                        {item.text}
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#dc2323] group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Dynamic Countdown & Student Hub (Right hand panel) */}
        <div className="lg:col-span-5 bg-white border border-[#d9d9d9] rounded-[24px] p-8 shadow-cb relative overflow-hidden flex flex-col justify-between min-h-[300px]">
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#dc2323] text-white flex flex-col justify-center items-center font-bold rotate-12 translate-x-8 -translate-y-4 shadow-sm">
            <span className="text-white text-xs tracking-wider uppercase font-mono font-bold">
              ACTIVE
            </span>
          </div>

          <div>
            <div className="flex items-center gap-2 text-slate-800 font-mono text-xs font-bold uppercase mb-4">
              <Award className="w-5 h-5 text-[#ffe36d] fill-[#ffe36d]" />
              <span>HỒ SƠ THÍ SINH</span>
            </div>

            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-display font-bold text-slate-900">
                APPRENTICE RANK
              </span>
              <span className="text-xl">🏆</span>
            </div>

            {/* Countdown Row */}
            <div className="mt-6 flex gap-4 items-center bg-[#f5f7fc] border border-[#d9d9d9] p-4 rounded-cb-xs shadow-sm">
              <div className="bg-[#dc2323] text-white font-mono font-bold text-2xl px-3 py-2 rounded-cb-xs text-center">
                {daysLeft >= 0 ? daysLeft : 0}
              </div>
              <div className="flex-1">
                <p className="text-xs font-bold text-[#dc2323] uppercase tracking-wide flex justify-between items-center">
                  <span>
                    {daysLeft >= 0 ? "DAYS UNTIL NEXT EXAM" : "EXAM PASSED"}
                  </span>
                  <input
                    type="date"
                    value={targetExamDate}
                    onChange={(e) => {
                      setTargetExamDate(e.target.value);
                      localStorage.setItem("satTargetDate", e.target.value);
                    }}
                    className="text-xs font-mono ml-2 border border-[#d9d9d9] rounded px-1.5 py-0.5 text-black cursor-pointer bg-white"
                  />
                </p>
                <p className="text-xs font-medium text-gray-500 mt-1">
                  Kỳ thi Digital SAT của bạn
                </p>
              </div>
            </div>
          </div>

          {/* Rotating Tip Indicator */}
          <div className="mt-6 pt-4 border-t border-[#d9d9d9]">
            <div className="flex gap-2 items-start text-xs text-slate-700 bg-[#fff8e1] rounded-cb-xs p-2.5 border border-[#ffe36d]">
              <Sparkles className="w-4 h-4 text-[#dc2323] shrink-0 mt-0.5" />
              <div className="font-medium leading-normal">
                {interactiveTips[currentTipIndex]}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Core Three Level Course Navigation Map */}
      <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-950 tracking-tight mb-6 mt-16 flex items-center gap-3">
        <span>Lộ trình 3 bước đạt 1500+</span>
        <div className="h-[2px] bg-[#ffe36d] flex-grow" />
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {/* LEVEL 1 CARD */}
        <div className="bg-white border border-[#d9d9d9] rounded-[24px] overflow-hidden flex flex-col justify-between shadow-cb hover:shadow-lg transition-all duration-300 relative group">
          <div className="absolute top-5 right-5 bg-[#ffe36d] rounded-md px-2.5 py-1 font-mono font-bold text-[10px] uppercase tracking-widest text-black">
            LEVEL 1
          </div>

          <div className="p-8 flex-grow flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#f5f7fc] border border-[#d9d9d9] flex items-center justify-center mb-6 transition-transform">
                <BookOpenText className="w-6 h-6 text-[#1e1e1e]" />
              </div>

              <h3 className="text-xl font-display font-bold text-slate-900 tracking-tight mb-2">
                NỀN TẢNG THI
              </h3>

              <p className="text-sm text-gray-500 font-normal leading-relaxed mb-6">
                Chinh phục lý thuyết Ngữ pháp và công thức Toán core. Thấu hiểu
                4 nhóm dạng câu hỏi chuẩn của College Board.
              </p>
            </div>

            {/* Dual Actions with exact Redirections */}
            <div className="flex flex-col gap-3 mt-4">
              <button
                onClick={() => setView(ViewState.LEARN, "Overview")}
                className="w-full bg-[#f5f7fc] hover:bg-gray-100 border border-[#d9d9d9] p-3 rounded-full flex items-center justify-between text-left font-medium text-sm text-[#1e1e1e] transition-colors group cursor-pointer"
              >
                <span>Digital SAT Overview</span>
                <ArrowRight className="w-4 h-4 text-[#1e1e1e] group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => setView(ViewState.LEARN, "Verbal")}
                className="w-full bg-white hover:bg-gray-50 border border-[#d9d9d9] p-3 rounded-full flex items-center justify-between text-left font-medium text-sm text-[#1e1e1e] transition-colors group cursor-pointer"
              >
                <span>Syllabus Reading & Writing</span>
                <ArrowRight className="w-4 h-4 text-[#1e1e1e] group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => setView(ViewState.LEARN, "Math")}
                className="w-full bg-[#ffe36d] hover:bg-[#ebd056] p-3 rounded-full flex items-center justify-between text-left font-medium text-sm text-[#1e1e1e] transition-colors group cursor-pointer"
              >
                <span>Học Lý Thuyết Math (Tab Toán)</span>
                <ArrowRight className="w-4 h-4 text-[#1e1e1e] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* LEVEL 2 CARD */}
        <div className="bg-[#1e1e1e] text-white rounded-[24px] overflow-hidden flex flex-col justify-between shadow-cb hover:shadow-lg transition-all duration-300 relative group">
          <div className="absolute top-5 right-5 bg-[#dc2323] rounded-md px-2.5 py-1 font-mono font-bold text-[10px] uppercase tracking-widest text-white">
            LEVEL 2
          </div>

          <div className="p-8 flex-grow flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-gray-800 border border-gray-700 flex items-center justify-center mb-6 transition-transform">
                <Zap className="w-6 h-6 text-[#ffe36d]" />
              </div>

              <h3 className="text-xl font-display font-bold text-white tracking-tight mb-2">
                BẪY ĐỀ & TỪ VỰNG
              </h3>

              <p className="text-sm text-gray-400 font-normal leading-relaxed mb-6">
                Rèn luyện thói quen làm bài tránh bẫy, tích lũy từ vựng học
                thuật cao cấp thông qua kho Deck thông minh tương tác.
              </p>
            </div>

            <div className="flex flex-col gap-3 mt-4">
              <button
                onClick={() => setView(ViewState.VOCAB)}
                className="w-full bg-gray-800 hover:bg-gray-700 border border-gray-700 p-4 rounded-full flex items-center justify-between text-left font-medium text-base text-white transition-colors group"
              >
                <span>Từ Vựng Flashcards Siêu Thiết Yếu</span>
                <ArrowRight className="w-5 h-5 text-[#ffe36d] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* LEVEL 3 CARD */}
        <div className="bg-[#dc2323] text-white rounded-[24px] overflow-hidden flex flex-col justify-between shadow-cb hover:shadow-lg transition-all duration-300 relative group">
          <div className="absolute top-5 right-5 bg-white rounded-md px-2.5 py-1 font-mono font-bold text-[10px] uppercase tracking-widest text-[#dc2323]">
            LEVEL 3
          </div>

          <div className="p-8 flex-grow flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-6 transition-transform">
                <Target className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-xl font-display font-bold text-white tracking-tight mb-2">
                THỰC CHIẾN ĐỀ
              </h3>

              <p className="text-sm text-red-100 font-normal leading-relaxed mb-6">
                Chinh phục ngân hàng câu hỏi phân ban chuẩn cấu trúc Digital SAT
                thực tế kèm kiểm tra nhanh tính thời gian áp lực.
              </p>
            </div>

            <div className="flex flex-col gap-3 mt-4">
              <button
                onClick={() => setView(ViewState.PRACTICE)}
                className="w-full bg-white hover:bg-gray-50 text-[#1e1e1e] p-4 rounded-full flex items-center justify-between text-left font-medium text-base transition-colors group"
              >
                <span>Ngân Hàng Drills Tổng Hợp</span>
                <ArrowRight className="w-5 h-5 text-[#dc2323] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Deep Integrations */}
      <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-950 tracking-tight mb-6 mt-16 flex items-center gap-3">
        <span>TÍCH HỢP ĐỘC QUYỀN</span>
        <div className="h-[2px] bg-[#dc2323] flex-grow" />
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Desmos Graphing Calculator */}
        <div className="lg:col-span-5 bg-white border border-[#d9d9d9] rounded-[24px] p-8 shadow-cb flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3 bg-[#f5f7fc] border border-[#d9d9d9] rounded-md px-2.5 py-1 w-fit font-mono text-[10px] font-bold text-[#dc2323]">
              <Calculator className="w-3.5 h-3.5" />
              DESMOS CALCULATOR INTEGRATION
            </div>

            <h4 className="text-xl font-display font-bold text-black mb-3">
              MÁY TÍNH ĐỒ THỊ CHUẨN THI
            </h4>

            <p className="text-sm text-gray-600 font-normal leading-normal">
              Sở hữu hệ thống máy tính Desmos Graphing chuẩn format Bluebook
              trực tiếp trên ứng dụng. Hãy click vào góc màn hình hoặc học phần
              Toán dưới đây để cùng làm chủ Desmos giải quyết 20+ câu hỏi Toán
              nhanh chóng.
            </p>
          </div>

          <button
            onClick={() => setView(ViewState.LEARN, "Math")}
            className="mt-6 w-full bg-[#f5f7fc] hover:bg-gray-100 border border-[#d9d9d9] p-3.5 rounded-full flex items-center justify-center gap-2 font-medium text-sm text-[#1e1e1e] transition-all"
          >
            <Calculator className="w-4 h-4" />
            <span>MỞ LÝ THUYẾT & DESMOS HƯỚNG DẪN</span>
          </button>
        </div>

        {/* AI Snap-Solver Highlight Card */}
        <div className="lg:col-span-7 bg-[#fffdf0] border border-[#ffe36d] rounded-[24px] p-8 shadow-cb relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 p-3 bg-[#ffe36d] text-black font-mono text-[10px] font-bold uppercase rounded-bl-cb-xs">
            AI CORE
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-10 h-10 rounded-2xl bg-[#dc2323] text-white flex items-center justify-center">
                <Sparkles className="w-5 h-5 fill-white" />
              </div>
              <h4 className="text-xl font-display font-bold text-slate-900">
                AI GIẢI ĐỀ THI & CHỮA CHI TIẾT
              </h4>
            </div>

            <p className="text-sm text-gray-700 font-normal leading-relaxed mb-6 max-w-xl">
              Gặp bài tập khó hoặc không giải thích được đáp án chính xác? Hãy
              sao chép văn bản, nhập liên kết đề thi hoặc chụp lại ảnh màn hình
              câu hỏi để động cơ AI phân tích từng bước, bóc tách lỗi sai, gợi ý
              kiến thức nền tảng tương ứng ngay lập tức.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <button
              onClick={() => setView(ViewState.AI_SOLVER)}
              className="w-full sm:w-auto bg-[#1e1e1e] hover:bg-black text-[#ffe36d] px-6 py-3 rounded-full font-mono font-bold text-sm text-center transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-[#ffe36d] fill-[#ffe36d]" />
              TIẾN HÀNH GIẢI ĐỀ BẰNG AI
            </button>

            <button
              onClick={() => setView(ViewState.RESOURCES)}
              className="w-full sm:w-auto bg-white hover:bg-gray-50 text-[#1e1e1e] border border-[#d9d9d9] px-6 py-3 rounded-full font-medium text-sm text-center transition-all cursor-pointer"
            >
              Xem Kho Tài Nguyên Chính Thức
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeView;
