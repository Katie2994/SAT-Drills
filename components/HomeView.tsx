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
          <div className="inline-flex items-center gap-2 bg-[#dc2323] text-white border-2 border-black rounded-lg px-3 py-1 font-mono text-xs font-black uppercase tracking-widest shadow-hard-sm w-fit mb-4">
            <Flame className="w-4.5 h-4.5 text-[#ffe36d] fill-[#ffe36d] animate-bounce" />
            OFFICIAL SYLLABUS 2026/2027
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-black text-slate-950 uppercase tracking-tight leading-none mb-4 select-none">
            DIGITAL{" "}
            <span className="text-[#dc2323] underline decoration-[#ffe36d] decoration-wavy decoration-8 underline-offset-8">
              SAT
            </span>{" "}
            PREP
          </h1>

          <p className="text-base md:text-lg text-gray-700 font-semibold leading-relaxed max-w-xl">
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
                className="w-full bg-white border-[4px] border-black rounded-2xl px-6 py-4 pl-14 text-sm font-bold shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus:ring-0 focus:border-[#dc2323] transition-all placeholder-gray-400"
              />
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600 stroke-[3px]" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black font-extrabold text-xs bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-lg border border-gray-300"
                >
                  Xóa
                </button>
              )}
            </div>

            {/* Live dropdown matching neo-brutalist theme */}
            {filteredSuggestions.length > 0 && (
              <div className="absolute left-0 right-0 mt-3 bg-white border-[4px] border-black rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] z-30 overflow-hidden divide-y-2 divide-black">
                {filteredSuggestions.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setView(item.view, item.detail as any);
                      setSearchQuery("");
                    }}
                    className="w-full p-4 text-left hover:bg-[#fffdf0] flex justify-between items-center transition-colors group cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-black uppercase tracking-wider bg-[#ffe36d] text-black px-2.5 py-1 rounded-md border border-black shadow-hard-sm">
                        {item.cat}
                      </span>
                      <span className="font-bold text-slate-900 group-hover:text-[#dc2323] text-xs transition-colors">
                        {item.text}
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform stroke-[2.5px]" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Dynamic Countdown & Student Hub (Right hand panel) */}
        <div className="lg:col-span-5 bg-[#fffdf0] border-[4px] border-black rounded-[32px] p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden flex flex-col justify-between min-h-[300px]">
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#dc2323] border-b-4 border-l-4 border-black text-black flex flex-col justify-center items-center font-black rotate-12 translate-x-8 -translate-y-4 shadow-md">
            <span className="text-white text-xs tracking-wider uppercase font-mono font-black">
              ACTIVE
            </span>
          </div>

          <div>
            <div className="flex items-center gap-2 text-slate-800 font-mono text-xs font-black uppercase mb-4">
              <Award className="w-5 h-5 text-[#ffe36d] fill-[#ffe36d] stroke-[2px]" />
              <span>HỒ SƠ THÍ SINH</span>
            </div>

            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-display font-black text-slate-900">
                APPRENTICE RANK
              </span>
              <span className="text-xl">🏆</span>
            </div>

            {/* Countdown Row */}
            <div className="mt-6 flex gap-4 items-center bg-white border-2 border-black p-4 rounded-xl shadow-hard-sm">
              <div className="bg-[#dc2323] text-white font-mono font-black text-2xl px-3 py-2 rounded-lg border-2 border-black min-w-[50px] text-center">
                {daysLeft >= 0 ? daysLeft : 0}
              </div>
              <div className="flex-1">
                <p className="text-xs font-extrabold text-[#dc2323] uppercase tracking-wide flex justify-between items-center">
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
                    className="text-xs font-mono ml-2 border border-black rounded px-1.5 py-0.5 text-black cursor-pointer bg-slate-50 border-2"
                  />
                </p>
                <p className="text-xs font-bold text-gray-500 mt-1">
                  Kỳ thi Digital SAT của bạn
                </p>
              </div>
            </div>
          </div>

          {/* Rotating Tip Indicator */}
          <div className="mt-6 pt-4 border-t-2 border-dashed border-black/20">
            <div className="flex gap-2 items-start text-xs text-slate-700 bg-amber-50 rounded-lg p-2.5 border border-amber-200">
              <Sparkles className="w-4 h-4 text-[#dc2323] shrink-0 mt-0.5" />
              <div className="font-semibold leading-normal">
                {interactiveTips[currentTipIndex]}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Core Three Level Course Navigation Map */}
      <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-950 uppercase tracking-tight mb-6 mt-16 flex items-center gap-3">
        <span>LỘ TRÌNH 3 BƯỚC ĐẠT 1500+</span>
        <div className="h-[4px] bg-[#ffe36d] flex-grow rounded-full border-2 border-black" />
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {/* LEVEL 1 CARD (FOUNDATION - Bright Yellow Top Accent) */}
        <div className="bg-white border-[4px] border-black rounded-[32px] overflow-hidden flex flex-col justify-between shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1.5 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 relative group">
          <div className="absolute top-5 right-5 bg-[#ffe36d] border-2 border-black rounded-lg px-2.5 py-1 font-mono font-black text-[10px] uppercase tracking-widest text-black shadow-hard-sm">
            LEVEL 1
          </div>

          <div className="p-8 flex-grow flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-cyan-100 border-[3px] border-black flex items-center justify-center mb-6 shadow-hard-sm group-hover:rotate-6 transition-transform">
                <BookOpenText className="w-6 h-6 text-cyan-600 stroke-[2.5px]" />
              </div>

              <h3 className="text-2xl font-display font-black text-slate-900 uppercase tracking-tight mb-2">
                NỀN TẢNG THI
              </h3>

              <p className="text-xs text-gray-500 font-bold leading-relaxed mb-6">
                Chinh phục lý thuyết Ngữ pháp và công thức Toán core. Thấu hiểu
                4 nhóm dạng câu hỏi chuẩn của College Board.
              </p>
            </div>

            {/* Dual Actions with exact Redirections */}
            <div className="flex flex-col gap-3 mt-4">
              <button
                onClick={() => setView(ViewState.LEARN, "Overview")}
                className="w-full bg-[#e0f2fe] hover:bg-[#bae6fd] border-2 border-black p-3.5 rounded-xl flex items-center justify-between text-left font-black text-xs text-black transition-colors group cursor-pointer shadow-hard-sm"
              >
                <span>Digital SAT Overview</span>
                <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform stroke-[3px]" />
              </button>

              <button
                onClick={() => setView(ViewState.LEARN, "Verbal")}
                className="w-full bg-slate-50 hover:bg-slate-100 border-2 border-black p-3.5 rounded-xl flex items-center justify-between text-left font-extrabold text-xs text-slate-800 transition-colors group cursor-pointer"
              >
                <span>Syllabus Reading & Writing</span>
                <ArrowRight className="w-4 h-4 text-slate-800 group-hover:translate-x-1 transition-transform stroke-[2.5px]" />
              </button>

              <button
                onClick={() => setView(ViewState.LEARN, "Math")}
                className="w-full bg-[#ffe36d] hover:bg-[#ebd056] border-2 border-black p-3.5 rounded-xl flex items-center justify-between text-left font-black text-xs text-black transition-colors group cursor-pointer shadow-hard-sm"
              >
                <span>Học Lý Thuyết Math (Tab Toán)</span>
                <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform stroke-[3px]" />
              </button>
            </div>
          </div>
        </div>

        {/* LEVEL 2 CARD (TECHNIQUE - Dynamic Dark Blue theme) */}
        <div className="bg-[#161a26] text-white border-[4px] border-black rounded-[32px] overflow-hidden flex flex-col justify-between shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1.5 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 relative group">
          <div className="absolute top-5 right-5 bg-[#dc2323] border-2 border-black rounded-lg px-2.5 py-1 font-mono font-black text-[10px] uppercase tracking-widest text-white shadow-hard-sm">
            LEVEL 2
          </div>

          <div className="p-8 flex-grow flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-amber-950 border-[3px] border-black flex items-center justify-center mb-6 shadow-hard-sm group-hover:rotate-6 transition-transform">
                <Zap className="w-6 h-6 text-[#ffe36d] stroke-[2.5px]" />
              </div>

              <h3 className="text-2xl font-display font-black text-white uppercase tracking-tight mb-2">
                BẪY ĐỀ & TỪ VỰNG
              </h3>

              <p className="text-xs text-gray-400 font-bold leading-relaxed mb-6">
                Rèn luyện thói quen làm bài tránh bẫy, tích lũy từ vựng học
                thuật cao cấp thông qua kho Deck thông minh tương tác.
              </p>
            </div>

            {/* Quick action section */}
            <div className="flex flex-col gap-3 mt-4">
              <button
                onClick={() => setView(ViewState.VOCAB)}
                className="w-full bg-[#20273a] hover:bg-[#2c3650] border-2 border-black p-5 md:p-6 rounded-xl flex items-center justify-between text-left font-black text-base md:text-lg text-white transition-colors group"
              >
                <span>Từ Vựng Flashcards Siêu Thiết Yếu</span>
                <ArrowRight className="w-6 h-6 text-[#ffe36d] group-hover:translate-x-1 transition-transform stroke-[3px]" />
              </button>
            </div>
          </div>
        </div>

        {/* LEVEL 3 CARD (MASTERY - Bright Brand Red Theme) */}
        <div className="bg-[#dc2323] text-white border-[4px] border-black rounded-[32px] overflow-hidden flex flex-col justify-between shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1.5 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 relative group">
          <div className="absolute top-5 right-5 bg-white border-2 border-black rounded-lg px-2.5 py-1 font-mono font-black text-[10px] uppercase tracking-widest text-[#dc2323] shadow-hard-sm">
            LEVEL 3
          </div>

          <div className="p-8 flex-grow flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-white border-[3px] border-black flex items-center justify-center mb-6 shadow-hard-sm group-hover:rotate-6 transition-transform">
                <Target className="w-6 h-6 text-[#dc2323] stroke-[2.5px]" />
              </div>

              <h3 className="text-2xl font-display font-black text-white uppercase tracking-tight mb-2">
                THỰC CHIẾN ĐỀ
              </h3>

              <p className="text-xs text-red-100 font-bold leading-relaxed mb-6">
                Chinh phục ngân hàng câu hỏi phân ban chuẩn cấu trúc Digital SAT
                thực tế kèm kiểm tra nhanh tính thời gian áp lực.
              </p>
            </div>

            {/* Quick practice triggers */}
            <div className="flex flex-col gap-3 mt-4">
              <button
                onClick={() => setView(ViewState.PRACTICE)}
                className="w-full bg-white hover:bg-[#fffdf0] text-black border-2 border-black p-5 md:p-6 rounded-xl flex items-center justify-between text-left font-black text-base md:text-lg transition-colors group"
              >
                <span>Ngân Hàng Drills Tổng Hợp</span>
                <ArrowRight className="w-6 h-6 text-[#dc2323] group-hover:translate-x-1 transition-transform stroke-[3px]" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Deep Integrations: AI OCR Explainer & Graphing Calculator Bento Grid */}
      <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-950 uppercase tracking-tight mb-6 mt-16 flex items-center gap-3">
        <span>TÍCH HỢP ĐỘC QUYỀN</span>
        <div className="h-[4px] bg-[#dc2323] flex-grow rounded-full border-2 border-black" />
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Desmos Graphing Calculator Highlight Banner (5 Cols) */}
        <div className="lg:col-span-5 bg-[#fffdf0] border-[4px] border-black rounded-[28px] p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3 bg-white border border-black rounded-lg px-2.5 py-1 w-fit font-mono text-[10px] font-bold text-[#dc2323] shadow-hard-sm">
              <Calculator className="w-3.5 h-3.5" />
              DESMOS CALCULATOR INTEGRATION
            </div>

            <h4 className="text-2xl font-display font-black text-black uppercase mb-3">
              MÁY TÍNH ĐỒ THỊ CHUẨN THI
            </h4>

            <p className="text-xs text-slate-700 font-bold leading-normal">
              Sở hữu hệ thống máy tính Desmos Graphing chuẩn format Bluebook
              trực tiếp trên ứng dụng. Hãy click vào góc màn hình hoặc học phần
              Toán dưới đây để cùng làm chủ Desmos giải quyết 20+ câu hỏi Toán
              nhanh chóng.
            </p>
          </div>

          <button
            onClick={() => setView(ViewState.LEARN, "Math")}
            className="mt-6 w-full bg-white hover:bg-slate-50 border-2 border-black p-3.5 rounded-xl flex items-center justify-center gap-2 font-black text-xs text-black transition-all shadow-hard-sm"
          >
            <Calculator className="w-4 h-4" />
            <span>MỞ LÝ THUYẾT & DESMOS HƯỚNG DẪN</span>
          </button>
        </div>

        {/* AI Snap-Solver Highlight Card (7 Cols) */}
        <div className="lg:col-span-7 bg-[#fffdf0] border-[4px] border-black rounded-[28px] p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 p-3 bg-yellow-100 border-b-2 border-l-2 border-black font-mono text-[9px] font-black uppercase text-amber-800">
            AI CORE
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-10 h-10 rounded-lg bg-[#dc2323] text-white flex items-center justify-center border-2 border-black shadow-hard-sm">
                <Sparkles className="w-5 h-5 fill-white" />
              </div>
              <h4 className="text-2xl font-display font-black text-slate-900 uppercase">
                AI GIẢI ĐỀ THI & CHỮA CHI TIẾT
              </h4>
            </div>

            <p className="text-xs text-gray-700 font-bold leading-relaxed mb-6 max-w-xl">
              Gặp bài tập khó hoặc không giải thích được đáp án chính xác? Hãy
              sao chép văn bản, nhập liên kết đề thi hoặc chụp lại ảnh màn hình
              câu hỏi để động cơ AI phân tích từng bước, bóc tách lỗi sai, gợi ý
              kiến thức nền tảng tương ứng ngay lập tức.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <button
              onClick={() => setView(ViewState.AI_SOLVER)}
              className="w-full sm:w-auto bg-black hover:bg-slate-900 text-[#ffe36d] border-[3px] border-black px-6 py-3.5 rounded-xl font-mono font-black text-xs uppercase tracking-wider text-center shadow-hard-sm active:translate-y-0.5 active:shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#ffe36d] fill-[#ffe36d]" />
              TIẾN HÀNH GIẢI ĐỀ BẰNG AI
            </button>

            <button
              onClick={() => setView(ViewState.RESOURCES)}
              className="w-full sm:w-auto bg-white hover:bg-slate-50 text-black border-2 border-black px-6 py-3 rounded-xl font-bold text-xs uppercase text-center transition-all cursor-pointer"
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
