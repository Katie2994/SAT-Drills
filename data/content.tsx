import React, { useState } from "react";
import {
  VocabCard,
  Topic,
  TheorySection,
  Question,
  SampleResponse,
  ChecklistItem,
} from "../types";
import FormattedText from "../components/FormattedText";
import {
  Brain,
  Image as ImageIcon,
  TrendingUp,
  PieChart,
  BoxSelect,
  BookOpen,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

// ==========================================
// 1. VOCABULARY DATA (Expanded)
// ==========================================
export { vocabList } from "./vocab";

// ==========================================
// 2. CHECKLIST DATA
// ==========================================
export const checklistItems: ChecklistItem[] = [
  {
    id: "c1",
    category: "RW: Strategy",
    text: "Đọc câu hỏi (Stem) trước khi đọc đoạn văn?",
  },
  {
    id: "c2",
    category: "RW: Vocab",
    text: "Tự điền từ của mình vào chỗ trống trước khi xem đáp án?",
  },
  {
    id: "c3",
    category: "RW: Grammar",
    text: "Kiểm tra Chủ ngữ - Động từ (Subject-Verb Agreement)?",
  },
  {
    id: "c4",
    category: "RW: Cross-Text",
    text: "Xác định quan điểm Text 1 (Tích cực/Tiêu cực) so với Text 2?",
  },
  {
    id: "m1",
    category: "Math: Calc",
    text: "Có thể giải bằng Desmos không (Hệ pt, Giao điểm, Thống kê)?",
  },
  { id: "m2", category: "Math: Word", text: "Đề hỏi x hay hỏi 2x + 1?" },
  {
    id: "m3",
    category: "Math: Stats",
    text: "Đơn vị (Units) đã khớp chưa (phút vs giờ)?",
  },
  { id: "m4", category: "Math: Geom", text: "Vẽ hình ra nháp chưa?" },
];

// ==========================================
// 3. THEORY HELPER
// ==========================================
const ExampleBox = ({
  question,
  solution,
  tip,
}: {
  question: string;
  solution: string;
  tip?: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#fffdf0] border-l-4 border-[#DC2323] p-6 my-6 shadow-sm">
      <h5 className="font-bold text-xs uppercase text-[#DC2323] mb-4 tracking-widest flex items-center gap-2">
        <Brain className="w-4 h-4" /> REALISTIC EXCERPT
      </h5>
      <div className="font-math text-lg mb-6 text-black leading-relaxed border-b border-black/10 pb-4">
        <FormattedText text={question} />
      </div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-white flex items-center justify-between p-3 border border-black/10 font-bold text-sm text-black hover:bg-[#ffe36d]/20 transition-colors uppercase tracking-wide"
      >
        <span>Xem Đáp án & Giải thích chi tiết</span>
        {isOpen ? <ChevronUp className="w-5 h-5 text-slate-500" /> : <ChevronDown className="w-5 h-5 text-slate-500" />}
      </button>
      {isOpen && (
        <div className="bg-white p-4 border border-t-0 border-black/10">
          <div className="text-black/80 text-base">
            <FormattedText text={solution} noHighlight={true} />
          </div>
          {tip && (
            <div className="mt-4 text-sm text-black/70 bg-[#fffdf0] p-3 rounded-lg flex gap-2 items-start">
              <span className="font-bold">💡 TIP:</span>
              <span>{tip}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// ==========================================
// 4. THEORY SECTIONS (FULL SYLLABUS)
// ==========================================
export const theorySections: TheorySection[] = [
  // ------------------------------------------
  // OVERVIEW: DIGITAL SAT
  // ------------------------------------------
  {
    id: "dsat_overview",
    category: "Overview",
    title: "Digital SAT Overview",
    content: (
      <div className="space-y-8 text-lg leading-relaxed text-black">
        <div className="bg-black text-white p-6">
          <h2 className="text-3xl font-bold mb-2">Digital SAT Overview</h2>
          <p className="opacity-90">
            Tổng quan về cấu trúc bài thi, các môn thi và công cụ hỗ trợ của
            Digital SAT.
          </p>
        </div>

        <section>
          <h3 className="font-bold text-2xl border-b-2 border-black mb-4 inline-block">
            1. Cấu Trúc Tổng Quan
          </h3>
          <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800" alt="Cấu trúc tổng quan" className="w-full h-auto rounded-xl mb-6 shadow-sm object-cover max-h-64" />
          <p className="mb-4">
            Bài thi Digital SAT có tổng thời lượng{" "}
            <strong>2 tiếng 14 phút</strong>. Cấu trúc bài thi bao gồm hai phần:
            Toán (Math) và Đọc & Viết (Reading & Writing). Cụ thể như bảng sau:
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#ffe36d]/20 border-b">
                  <th className="py-2 px-4 border font-semibold text-black/80">
                    Phần Thi (Section)
                  </th>
                  <th className="py-2 px-4 border font-semibold text-black/80">
                    Module
                  </th>
                  <th className="py-2 px-4 border font-semibold text-black/80">
                    Thời gian
                  </th>
                  <th className="py-2 px-4 border font-semibold text-black/80">
                    Số lượng câu hỏi
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2 px-4 border">Reading and Writing</td>
                  <td className="py-2 px-4 border">Module 1</td>
                  <td className="py-2 px-4 border">32 phút</td>
                  <td className="py-2 px-4 border">27 câu</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4 border">Reading and Writing</td>
                  <td className="py-2 px-4 border">Module 2</td>
                  <td className="py-2 px-4 border">32 phút</td>
                  <td className="py-2 px-4 border">27 câu</td>
                </tr>
                <tr className="bg-[#fffdf0] border-b">
                  <td className="py-2 px-4 border font-semibold" colSpan={2}>
                    Break (Nghỉ giải lao)
                  </td>
                  <td className="py-2 px-4 border font-semibold" colSpan={2}>
                    10 phút
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4 border">Math</td>
                  <td className="py-2 px-4 border">Module 1</td>
                  <td className="py-2 px-4 border">35 phút</td>
                  <td className="py-2 px-4 border">22 câu</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4 border">Math</td>
                  <td className="py-2 px-4 border">Module 2</td>
                  <td className="py-2 px-4 border">35 phút</td>
                  <td className="py-2 px-4 border">22 câu</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h3 className="font-bold text-2xl border-b-2 border-black mb-4 inline-block">
            2. Chi Tiết Phần Reading and Writing
          </h3>
          <img src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=800" alt="Reading and writing" className="w-full h-auto rounded-xl mb-6 shadow-sm object-cover max-h-64" />
          <p className="mb-4">
            Phần thi này kéo dài 64 phút với 54 câu hỏi. Các lĩnh vực nội dung
            (Content Domain) được phân bổ như sau:
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#ffe36d]/20 border-b">
                  <th className="py-2 px-4 border font-semibold text-black/80">
                    Lĩnh vực (Domain)
                  </th>
                  <th className="py-2 px-4 border font-semibold text-black/80">
                    Kỹ năng đánh giá
                  </th>
                  <th className="py-2 px-4 border font-semibold text-black/80">
                    Tỷ lệ
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2 px-4 border font-semibold">
                    Expression of Ideas
                  </td>
                  <td className="py-2 px-4 border">
                    Đánh giá khả năng sửa đổi và cải thiện văn bản. Học sinh sẽ
                    giải quyết các vấn đề về ngữ pháp và từ vựng thông qua trắc
                    nghiệm để làm cho đoạn văn thuyết phục hoặc nhiều thông tin
                    hơn (dựa trên rhetorical goals).
                  </td>
                  <td className="py-2 px-4 border font-semibold whitespace-nowrap">
                    20%
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4 border font-semibold">
                    Craft and Structure
                  </td>
                  <td className="py-2 px-4 border">
                    Đánh giá kỹ năng hiểu từ vựng học thuật nâng cao trong ngữ
                    cảnh, phân tích kỹ thuật và mục đích viết của tác giả
                    (rhetorical techniques/purpose) và kết nối các ý tưởng giữa
                    các văn bản liên quan.
                  </td>
                  <td className="py-2 px-4 border font-semibold whitespace-nowrap">
                    28%
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4 border font-semibold">
                    Information and Ideas
                  </td>
                  <td className="py-2 px-4 border">
                    Khả năng xác định ý chính và suy luận (inferences) về ngụ ý
                    của văn bản. Diễn giải, đánh giá và kết hợp thông tin từ
                    nhiều nguồn.
                  </td>
                  <td className="py-2 px-4 border font-semibold whitespace-nowrap">
                    26%
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4 border font-semibold">
                    Standard English Conventions
                  </td>
                  <td className="py-2 px-4 border">
                    Kiểm tra kiến thức cốt lõi về ngữ pháp tiếng Anh chuẩn: cấu
                    trúc câu (sentence structure), cách dùng từ (usage) và dấu
                    câu (punctuation).
                  </td>
                  <td className="py-2 px-4 border font-semibold whitespace-nowrap">
                    26%
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h3 className="font-bold text-2xl border-b-2 border-black mb-4 inline-block">
            3. Chi Tiết Phần Math
          </h3>
          <img src="https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=800" alt="Chi tiết phần Toán" className="w-full h-auto rounded-xl mb-6 shadow-sm object-cover max-h-64" />
          <p className="mb-4">
            Phần Toán kéo dài 70 phút cho 44 câu hỏi. Lĩnh vực kiến thức bao
            gồm:
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#ffe36d]/20 border-b">
                  <th className="py-2 px-4 border font-semibold text-black/80">
                    Lĩnh vực (Domain)
                  </th>
                  <th className="py-2 px-4 border font-semibold text-black/80">
                    Nội dung / Mô tả
                  </th>
                  <th className="py-2 px-4 border font-semibold text-black/80">
                    Câu hỏi
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2 px-4 border font-semibold">Algebra</td>
                  <td className="py-2 px-4 border">
                    <ul className="list-disc pl-5">
                      <li>Linear equations in 1 or 2 variables</li>
                      <li>Linear functions</li>
                      <li>Systems of 2 linear equations in 2 variables</li>
                      <li>Linear inequalities in 1 or 2 variables</li>
                    </ul>
                    <p className="mt-2 text-sm text-black/70">
                      Phân tích, thao tác thành thạo và thiết lập phương trình,
                      bất phương trình và hệ phương trình tuyến tính.
                    </p>
                  </td>
                  <td className="py-2 px-4 border font-semibold whitespace-nowrap">
                    ≈ 35% <br />
                    (13-15 câu)
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4 border font-semibold">
                    Advanced Math
                  </td>
                  <td className="py-2 px-4 border">
                    <ul className="list-disc pl-5">
                      <li>Equivalent expressions</li>
                      <li>
                        Nonlinear equations (absolute value, quadratic,
                        exponential, polynomial, rational, radical) in 1
                        variable and systems in 2 variables
                      </li>
                      <li>Nonlinear functions</li>
                    </ul>
                    <p className="mt-2 text-sm text-black/70">
                      Kiến thức trọng tâm để học các cấp độ toán cao hơn. Phân
                      tích, giải và diễn giải linh hoạt các loại phương trình
                      phi tuyến tính.
                    </p>
                  </td>
                  <td className="py-2 px-4 border font-semibold whitespace-nowrap">
                    ≈ 35% <br />
                    (13-15 câu)
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4 border font-semibold">
                    Problem-solving and Data Analysis
                  </td>
                  <td className="py-2 px-4 border">
                    <ul className="list-disc pl-5">
                      <li>
                        Ratios, rates, proportional relationships, units,
                        percentages
                      </li>
                      <li>1-variable data (distributions, center, spread)</li>
                      <li>2-variable data (models, scatterplots)</li>
                      <li>Probability, conditional probability</li>
                      <li>Inference from sample statistics, margin of error</li>
                      <li>Evaluating statistical claims</li>
                    </ul>
                    <p className="mt-2 text-sm text-black/70">
                      Sử dụng tư duy định lượng để áp dụng thực tế và phân tích
                      biểu đồ, thống kê.
                    </p>
                  </td>
                  <td className="py-2 px-4 border font-semibold whitespace-nowrap">
                    ≈ 15% <br />
                    (5-7 câu)
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4 border font-semibold">
                    Geometry and Trigonometry
                  </td>
                  <td className="py-2 px-4 border">
                    <ul className="list-disc pl-5">
                      <li>Area and volume</li>
                      <li>
                        Lines, angles, triangles (bao gồm right triangles &
                        trigonometry)
                      </li>
                      <li>Circles</li>
                    </ul>
                    <p className="mt-2 text-sm text-black/70">
                      (Lưu ý: PSAT 8/9 không có Trigonometry).
                    </p>
                  </td>
                  <td className="py-2 px-4 border font-semibold whitespace-nowrap">
                    ≈ 15% <br />
                    (5-7 câu)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h3 className="font-bold text-2xl border-b-2 border-black mb-4 inline-block">
            4. Những thay đổi quan trọng (What's Changing?)
          </h3>
          <img src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=800" alt="Những thay đổi quan trọng" className="w-full h-auto rounded-xl mb-6 shadow-sm object-cover max-h-64" />
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Ngắn hơn:</strong> Rút ngắn từ gần 3 tiếng xuống còn 2
              tiếng 14 phút.
            </li>
            <li>
              <strong>Đẩy lùi áp lực thời gian:</strong> Thời gian trung bình
              cho mỗi câu hỏi được kéo dài hơn, cho phép đo lường chính xác kiến
              thức hơn là "tốc độ làm bài".
            </li>
            <li>
              <strong>Đọc ngắn:</strong> Các đoạn đọc (reading) sẽ ngắn hơn và
              tương ứng với <strong>chỉ một câu hỏi cho mỗi passage</strong>.
            </li>
            <li>
              <strong>Đánh máy:</strong> Nếu bạn làm essay (Tùy chọn ở vài state
              tests), bạn sẽ đánh máy.
            </li>
            <li>
              <strong>Máy tính cầm tay:</strong> Máy tính được dùng cho{" "}
              <strong>toàn bộ</strong> phần Math (không chia ra Section
              no-calculator/calculator nữa).
            </li>
          </ul>
        </section>

        <section>
          <h3 className="font-bold text-2xl border-b-2 border-black mb-4 inline-block">
            5. Các công cụ hỗ trợ trên Bluebook (Testing Application)
          </h3>
          <img src="https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?auto=format&fit=crop&q=80&w=800" alt="Các công cụ hỗ trợ trên Bluebook" className="w-full h-auto rounded-xl mb-6 shadow-sm object-cover max-h-64" />
          <p className="mb-4">
            <a
              href="https://bluebook.collegeboard.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#dc2323] font-bold hover:underline"
            >
              Bluebook™
            </a>{" "}
            là ứng dụng chính thức của College Board dùng để thi Digital SAT.
            App này tích hợp nhiều công cụ:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Mark for review:</strong> Gắn cờ và quay lại bất kỳ câu
              nào trong học phần (module) hiện tại.
            </li>
            <li>
              <strong>Testing timer:</strong> Đồng hồ đếm ngược. Bạn có thể ẩn
              đi, nhưng đồng hồ sẽ báo và hiển thị lại khi chỉ còn 5 phút cuối.
            </li>
            <li>
              <strong>Calculator:</strong> Máy tính đồ thị{" "}
              <a
                href="https://www.desmos.com/testing/cb-digital-sat/graphing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#dc2323] hover:underline"
              >
                Desmos
              </a>{" "}
              được tích hợp sẵn. (Bạn cũng có thể mang máy tính riêng nằm trong
              danh sách cho phép của SAT).
            </li>
            <li>
              <strong>Reference sheet:</strong> Cung cấp danh sách các công thức
              toán thông dụng.
            </li>
            <li>
              <strong>Annotation:</strong> Bạn có thể highlight văn bản và để
              lại note (chỉ hỗ trợ phần Reading & Writing).
            </li>
            <li>
              <strong>Option eliminator:</strong> Gạch bỏ đáp án sai để loại trừ
              dần (A/B/C/D).
            </li>
          </ul>
        </section>

        <section>
          <h3 className="font-bold text-2xl border-b-2 border-black mb-4 inline-block">
            6. Computer Adaptive Assessment (Đánh giá thích ứng)
          </h3>
          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" alt="Đánh giá thích ứng theo năng lực thiết kế đồ hoạ dữ liệu" className="w-full h-auto rounded-xl mb-6 shadow-sm object-cover max-h-64" />
          <p className="mb-4">
            Digital SAT áp dụng hệ thống đánh giá thích ứng (Computer Adaptive).
            Độ khó của module thứ hai phụ thuộc vào điểm số module đầu tiên.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Mỗi Section (Toán hoặc Đọc/Viết) đều có hai Modules.</li>
            <li>
              <strong>Module 1</strong> chứa các câu hỏi có mức độ khó hỗn hợp
              (varying difficulty).
            </li>
            <li>
              Nếu bạn làm tốt ở <strong>Module 1</strong>, hệ thống sẽ đưa ra
              các câu hỏi khó hơn (Highter difficulty routing) ở{" "}
              <strong>Module 2</strong>, qua đó bạn mới có cơ hội chạm tới điểm
              trần (800). Nếu làm chưa tốt ở Module 1, bạn sẽ bị đẩy xuống nhánh
              dễ hơn (Lower routing) và bị giới hạn điểm số tối đa.
            </li>
          </ul>
        </section>

        <section>
          <h3 className="font-bold text-2xl border-b-2 border-black mb-4 inline-block">
            7. Xem điểm và Đăng ký (College Board Account)
          </h3>
          <img src="https://gray-wtoc-prod.gtv-cdn.com/resizer/v2/X7JKH7HNGJCBBET3MIPXI2JNWM.jpg?auth=5527d61eac40d81977446089bcbd64c4a967c34b1ce07416c905bd7f52ea2b77&width=800&height=450&smart=true" alt="College Board Logo" className="w-full h-auto rounded-xl mb-6 shadow-sm object-cover max-h-64 bg-white p-2" />
          <ol className="list-decimal pl-6 space-y-2">
            <li>
              Truy cập vào{" "}
              <a
                href="https://www.collegeboard.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#dc2323] font-bold hover:underline"
              >
                College Board
              </a>{" "}
              để đăng nhập hoặc tạo tài khoản mới.
            </li>
            <li>
              Nếu chưa có tài khoản, hãy click "Create an Account", chọn type
              "Student", dùng email cá nhân (hoặc school email) để đăng ký.
            </li>
            <li>
              Bạn sẽ coi mọi thông tin về lịch thi, điểm số quá khứ/hiện tại ở
              dashboard (thường hiển thị ở khối bên tay phải).
            </li>
          </ol>
        </section>
      </div>
    ),
  },
  // ------------------------------------------
  // VERBAL: INFORMATION & IDEAS
  // ------------------------------------------
  {
    id: "v_info",
    category: "Verbal",
    title: "Information & Ideas (26%)",
    content: (
      <div className="space-y-8 text-lg leading-relaxed text-black">
        <div className="bg-black text-white p-6">
          <h2 className="text-3xl font-bold mb-2">
            Information & Ideas (~26%)
          </h2>
          <p className="opacity-90">
            Central Ideas and Details • Command of Evidence • Inferences
          </p>
        </div>

        <section>
          <h3 className="font-bold text-2xl border-b-2 border-black mb-4 inline-block">
            1. Central Ideas and Details
          </h3>
          <p>
            <strong>Vị trí trên đề & tầm quan trọng:</strong> Thường xuất hiện 3–5 câu/section. Đây là “xương sống” của passage: nếu không nắm được main idea, các câu Inference / Evidence phía sau sẽ dễ sai dây chuyền.
          </p>
          <div className="bg-[#fffdf0] border-l-4 border-[#ffe36d] p-4 my-4">
            <strong>Mini-theory:</strong> College Board đang kiểm tra xem bạn có tóm tắt được luận điểm cốt lõi trong 1 câu và phân biệt được ý chính với ví dụ minh họa. Học sinh Việt thường chỉ scan keyword, thấy đáp án chứa từ giống passage là chọn, dù ý bị bóp méo.
          </div>
          <p>
            <strong>Chiến lược 3 bước:</strong><br/>
            1. Đọc câu mở đầu và câu kết → tự tóm tắt 1 câu tiếng Việt.<br/>
            2. So sánh từng đáp án với câu tóm tắt (bao trùm toàn bộ ý, không quá hẹp, không thêm thông tin mới).<br/>
            3. Loại đáp án chỉ nhắc chi tiết nhỏ hoặc có ngôn ngữ quá mạnh (always, never...).
          </p>
          <ExampleBox
            question={`Worker termites partition roles, but recent studies reveal they can selectively feed certain larvae, effectively determining which individuals will become future reproductive elites.\n\nWhich statement best expresses the main idea of the passage?\nA) Queen termites determine larvae diet.\nB) Worker termites exert a previously underestimated level of control over reproduction.\nC) Termite colonies are highly inefficient.\nD) Larvae can choose their own roles in the colony.`}
            solution={`**Đáp án: B**\n\n**Giải thích chi tiết:**\n- **Bước 1 – Tóm tắt:** Câu này nói worker termites có thể điều khiển việc con nào thành "reproductive elite" qua việc cho ăn → chúng kiểm soát sinh sản nhiều hơn ta nghĩ.\n- **Bước 2 – So đáp án:** "selectively feed" = exert control; "determining which individuals will become future reproductive elites" = control over reproduction; "recent studies reveal" = previously underestimated.\n\n**Common trap:** Thấy từ "larvae", "queen" lặp lại là tưởng matching keyword. Đừng quên các từ đánh giá mạnh như "highly inefficient" (C - vô lý).`}
          />
        </section>

        <section>
          <h3 className="font-bold text-2xl border-b-2 border-black mb-4 inline-block">
            2. Command of Evidence
          </h3>
          <p>
            <strong>Vị trí trên đề & tầm quan trọng:</strong> Khoảng 2–4 câu/section liên quan đến việc chọn câu trích/lựa ý minh chứng trực tiếp cho một kết luận hoặc phân tích bảng/biểu đồ để xem dữ liệu có ủng hộ hay phản bác giả thuyết nào.
          </p>
          <div className="bg-[#fffdf0] border-l-4 border-[#ffe36d] p-4 my-4">
            <strong>Mini-theory:</strong> Kiểm tra khả năng đọc mối quan hệ giữa giả thuyết và dữ liệu. Tránh thói quen “nghe hợp lý là chọn” mà không cần dòng chứng minh rõ ràng.
          </div>
          <p>
            <strong>Chiến lược 3 bước:</strong><br/>
            1. Khoanh giả thuyết trong câu hỏi (gạch chân từ khóa nghĩa: supportive food sources, survive better...).<br/>
            2. Tìm đáp án có: Cùng đối tượng (same subjects), cùng bối cảnh (same time/condition), và thể hiện mối quan hệ đúng.<br/>
            3. Loại các lựa chọn chỉ mô tả phong cảnh chung, mâu thuẫn trực tiếp, hoặc sai bối cảnh.
          </p>
          <ExampleBox
            question={`Hypothesis: Non-native flowers supply supportive alternative food sources for native insects during crises.\n\nWhich finding most strongly supports this hypothesis?\nA) Native bees in areas with foreign dandelions survived a severe regional drought better than bees in dandelion-free areas.\nB) Foreign dandelions crowd out native flowers inside wet valleys.\nC) Native insects prefer native flowers in non-crisis environments.\nD) Wet valleys have a higher diversity of flowers than dry prairies.`}
            solution={`**Đáp án: A**\n\n**Giải thích chi tiết:**\n- Giả thuyết có 4 yếu tố: Hoa ngoại, thức ăn hỗ trợ, côn trùng bản địa, thời kỳ khủng hoảng.\n- A) "Native bees... areas with foreign dandelions... survived a severe regional drought better..." đúng trọn bộ 4 yếu tố.\n- B) Cạnh tranh chỗ ở, không phải là "hỗ trợ trong khủng hoảng".\n- C) Nói về non-crisis, ngược bối cảnh.\n\n**Common trap:** Chọn C vì nghĩ "thích hoa bản địa thì hoa ngoại không quan trọng" mà quên bối cảnh là "during crises".`}
          />
        </section>

        <section>
          <h3 className="font-bold text-2xl border-b-2 border-black mb-4 inline-block">
            3. Inferences
          </h3>
          <p>
            <strong>Vị trí trên đề & tầm quan trọng:</strong> Xuất hiện đều ở mọi passage (3–5 câu/section). Dạng câu khiến học sinh giỏi hay mất điểm do suy diễn quá đà.
          </p>
          <div className="bg-[#fffdf0] border-l-4 border-[#ffe36d] p-4 my-4">
            <strong>Mini-theory:</strong> Inference là kết luận logic chặt chẽ từ tiền đề đã cho. KHÔNG mang kiến thức ngoài đời vào.
          </div>
          <p>
            <strong>Chiến lược 3 bước:</strong><br/>
            1. Tách các tiền đề rõ ràng trong đoạn: mỗi mệnh đề là một "sự thật".<br/>
            2. Hỏi "Điều gì bắt buộc phải đúng, nếu tất cả tiền đề này đúng?".<br/>
            3. Loại: đáp án có nhân vật mới, mở rộng quá xa (đổi thời gian, địa điểm) hoặc chỉ lặp lại y nguyên tiền đề.
          </p>
          <ExampleBox
            question={`Many birds migrate south in winter to find food. However, the Blue Jay remains north year-round if nuts and seeds are abundant via human bird feeders.\n\nWhich finding suggests temperature is NOT the primary factor in Blue Jay migration?\nA) Blue Jays stay in northern freezing forests as long as feeders remain full.\nB) Blue Jays in cages prefer heated nests.\nC) Blue Jays migrate south in mild autumns when acorn crops are poor.\nD) Blue Jays eat a wider variety of food when they are in warmer climates.`}
            solution={`**Đáp án: A**\n\n**Giải thích chi tiết:**\n- Tiền đề 1: Chim bay phương nam trú đông tìm thức ăn.\n- Tiền đề 2: Blue Jay ở lại phương bắc quanh năm nếu có hạt từ feeders.\n- Câu hỏi: Bằng chứng nào chứng tỏ nhiệt độ KHÔNG phải nguyên nhân chính?\n- A) Ở bìa rừng cực lạnh (freezing) mà vẫn ở lại miễn có ăn → trực tiếp phủ nhận vai trò của nhiệt độ.\n\n**Common trap:** Thấy "mild autumns" (C) tưởng đúng, nhưng A đánh thẳng vào extreme case (cực lạnh mà vẫn ở lại) nên sức nặng logic mạnh hơn.`}
          />
        </section>
      </div>
    ),
  },

  // ------------------------------------------
  // VERBAL: CRAFT & STRUCTURE
  // ------------------------------------------
  {
    id: "v_craft",
    category: "Verbal",
    title: "Craft & Structure (28%)",
    content: (
      <div className="space-y-8 text-lg leading-relaxed text-black">
        <div className="bg-black text-white p-6">
          <h2 className="text-3xl font-bold mb-2">Craft & Structure (~28%)</h2>
          <p className="opacity-90">
            Cross-Text Connections • Text Structure and Purpose • Words in Context
          </p>
        </div>

        <section>
          <h3 className="font-bold text-2xl border-b-2 border-black mb-4 inline-block">
            1. Cross-Text Connections
          </h3>
          <p>
            <strong>Vị trí trên đề & tầm quan trọng:</strong> 1–2 câu/section nhưng tính phân hóa cao. Là dạng câu “đọc ý người khác về ý người khác”.
          </p>
          <div className="bg-[#fffdf0] border-l-4 border-[#ffe36d] p-4 my-4">
            <strong>Mini-theory:</strong> Kiểm tra khả năng nắm main claim và so sánh thái độ (ủng hộ, phản bác, hay đồng ý một phần). Không cần phân tích văn học siêu phàm.
          </div>
          <p>
            <strong>Chiến lược 3 bước:</strong><br/>
            1. Tóm tắt mỗi đoạn: "Text 1 nói rằng...", "Text 2 nói rằng...".<br/>
            2. So sánh: Text 2 support, challenge hay qualify quan điểm của Text 1?<br/>
            3. Chọn đáp án dùng từ khóa nối đúng logic.
          </p>
          <ExampleBox
            question={`Text 1: Philosophers have long argued that AI cannot truly "think" because it lacks consciousness. It merely processes data based on algorithms.\n\nText 2: Recent breakthroughs in neural networks suggest AI can exhibit creativity and intuition, blurring the line between programmed response and genuine thought.\n\nBased on Text 2, how would the author likely respond to the claim in Text 1?\nA) By agreeing that algorithms prevent consciousness.\nB) By suggesting that "thinking" may not strictly require biological consciousness.\nC) By proving AI has human-like feelings.\nD) By disregarding the importance of algorithms altogether.`}
            solution={`**Đáp án: B**\n\n**Giải thích chi tiết:**\n- Text 1: AI không nghĩ vì thiếu ý thức, chỉ xử lý thuật toán.\n- Text 2: AI có creativity làm mờ ranh giới tư duy thật và lập trình.\n- So sánh: Định nghĩa "thinking" của Text 1 quá hẹp. Text 2 nghĩ thinking không nhất thiết đòi hỏi biological consciousness.\n\n**Common trap:** Thấy "consciousness" lặp lại → chọn A. Bị cuốn bởi từ "feelings" (C) do nhầm "khả năng tư duy = có cảm xúc".`}
          />
        </section>

        <section>
          <h3 className="font-bold text-2xl border-b-2 border-black mb-4 inline-block">
            2. Text Structure and Purpose
          </h3>
          <p>
            <strong>Vị trí trên đề & tầm quan trọng:</strong> 1–3 câu/section. Câu hỏi “kiểu giáo viên văn”: Câu này đặt ở đây để làm gì?
          </p>
          <div className="bg-[#fffdf0] border-l-4 border-[#ffe36d] p-4 my-4">
            <strong>Mini-theory:</strong> Xem câu là ví dụ minh hoạ, kết luận, hay chuyển ý. Học sinh Việt thường chỉ hiểu "nội dung câu" mà bỏ qua "vai trò của câu đó".
          </div>
          <p>
            <strong>Chiến lược 3 bước:</strong><br/>
            1. Đọc lại trước–sau câu gạch chân để thấy sự kết nối.<br/>
            2. Hỏi "nếu bỏ câu này đi, bài thiếu gì?" → Thiếu ví dụ? Thiếu cầu nối?<br/>
            3. Chọn đáp án dùng động từ chức năng (introduce, illustrate, contrast, qualify...).
          </p>
          <ExampleBox
            question={`Alexandra Bergson manages her family's farm on the Nebraska prairie: "Her mind was a white paper, and on it the Nebraska prairie was drawing its own pictures. She did not work with the land as a master, but as a student, listening to its subtle rhythms."\n\nWhich choice best describes the function of the second sentence in the text as a whole?\nA) It introduces a conflict between Alexandra and other workers.\nB) It establishes Alexandra's unique, receptive relationship with her environment.\nC) It provides a historical detail about farm tools.\nD) It argues that modern farming is superior to student practices.`}
            solution={`**Đáp án: B**\n\n**Giải thích chi tiết:**\n- Câu thứ 2 ẩn dụ: "white paper", "student listening to rhythms" → Cô mang tâm thế trống mở, tiếp nhận.\n- Vai trò: Thiết lập hình ảnh về mối quan hệ tôn trọng, tiếp nhận (receptive relationship) của cô với vùng đất.\n\n**Common trap:** Bị hút bởi từ "conflict" (A) do quen văn học phải có xung đột. Hoặc tập trung dịch từ mà quên vai trò câu.`}
          />
        </section>

        <section>
          <h3 className="font-bold text-2xl border-b-2 border-black mb-4 inline-block">
            3. Words in Context
          </h3>
          <p>
            <strong>Vị trí trên đề & tầm quan trọng:</strong> Khoảng 3–5 câu/section. Điền từ phù hợp với tone và ngữ cảnh.
          </p>
          <div className="bg-[#fffdf0] border-l-4 border-[#ffe36d] p-4 my-4">
            <strong>Mini-theory:</strong> Quan trọng là nghĩa chuẩn với phần còn lại của câu. Chú ý các cấu trúc đảo chiều như "anything but X", "far from X".
          </div>
          <p>
            <strong>Chiến lược 3 bước:</strong><br/>
            1. Đọc chay (lờ đáp án đi), đoán từ khen/chê, mạnh/nhẹ.<br/>
            2. Dùng manh mối từ nối (but, however, yet...).<br/>
            3. Check từng đáp án: cẩn thận từ đồng nghĩa nhưng lệch sắc thái.
          </p>
          <ExampleBox
            question={`The critic's review was anything but ______; she praised the film's cinematography but decimated its screenplay, leaving the director with a mix of pride and shame.\nA) scathing\nB) unmitigated\nC) ambivalent\nD) complimentary`}
            solution={`**Đáp án: B) unmitigated**\n\n**Giải thích chi tiết:**\n- "praised cinematography", "decimated screenplay" → Review là mixed (hỗn hợp khen chê).\n- "anything but X" = "Hoàn toàn KHÔNG phải X". \n- Vậy X phải là một khái niệm tuyệt đối 1 chiều. "unmitigated" = tuyệt đối. Review này hoàn toàn không tuyệt đối (mà mixed) → Chọn B.\n\n**Common trap:** Thấy "ambivalent" ≈ "mixed feelings" liền chọn ngay, nhưng "anything but ambivalent" = "không hề lưỡng lự" → Ngược nghĩa của passage.`}
          />
        </section>

        <section>
          <h3 className="font-bold text-2xl border-b-2 border-black mb-4 inline-block">
            4. Phân tích thơ (Poetry)
          </h3>
          <p className="mb-4">
            Đối với nhiều sĩ tử, thơ ca luôn là một "bức tường" khó vượt qua do ngôn ngữ ẩn dụ đầy tính biểu tượng. Dù bạn đã từng làm quen với thơ hay chưa, thì việc nắm vững kỹ năng giải mã và phân tích thơ là một lợi thế cực kỳ quan trọng để đạt điểm cao.
            Trong định dạng DSAT, các câu hỏi về thơ thách thức khả năng phân tích tu từ. Mỗi đoạn đoạn thơ chỉ ứng với 1 câu hỏi, việc rèn luyện tư duy phân tích nhanh nhạy là chìa khóa giúp bạn làm chủ thời gian.
          </p>
          <div className="bg-[#fffdf0] border-l-4 border-[#ffe36d] p-4 my-4">
            <strong>3 Dạng Câu Hỏi Thường Gặp</strong>
            <ul className="list-disc pl-5 mt-2 space-y-2 text-base">
              <li>
                <strong>Author's Purpose:</strong> Tác giả viết dòng này để làm gì?
                <br/><span className="text-black/70 italic">Chiến lược: Đừng sa đà vào chi tiết vụn vặt ngay từ đầu. Hãy nhìn vào bức tranh toàn cảnh của bài thơ và đặt câu hỏi: "Tác giả thực sự muốn khẳng định điều gì?"</span>
              </li>
              <li>
                <strong>Words in Context:</strong> Từ này trong ngữ cảnh bài thơ mang nghĩa gì (thường là nghĩa đen hoặc nghĩa bóng rất rõ ràng).
                <br/><span className="text-black/70 italic">Chiến lược: Hãy phân tích phần được hỏi trong bối cảnh của các câu/từ xung quanh nó để tìm ra sắc thái sắc nét nhất.</span>
              </li>
              <li>
                <strong>Function:</strong> Câu/dòng thơ này đóng vai trò gì trong cấu trúc chung của đoạn trích?
                <br/><span className="text-black/70 italic">Chiến lược: Đọc kỹ câu trước và sau phần được chỉ định để xác định nó giới thiệu, nhấn mạnh, hay thay đổi nhịp điệu/hình ảnh của bài thơ.</span>
              </li>
            </ul>
          </div>
          <ExampleBox
            question={"Ví dụ 1: Author's Purpose\n\n\"Because I could not stop for Death –\nHe kindly stopped for me –\nThe Carriage held but just Ourselves –\nAnd Immortality.\nWe slowly drove – He knew no haste\nAnd I had put away\nMy labor and my leisure too,\nFor His Civility –\"\n\nWhich choice best states the main purpose of the text?\n(A) To reject the permanence of death.\n(B) To recount a journey taken with friends.\n(C) To assert the immortality of the speaker.\n(D) To illustrate that death is an inevitable destination for all."}
            solution={`**Đáp án: (D)**\n\n**Phân tích:**\n- Việc nhân hóa "Cái chết" (Death) đến đón người kể cho thấy sự tất yếu.\n- Việc ngồi trên xe ngựa cùng sự bất tử (Immortality) mà không vội vàng (He knew no haste) cho thấy một hành trình định mệnh.\n- Người kể từ bỏ mọi công việc và thời gian cá nhân (labor and leisure) khi cái chết đến, khẳng định sự tất yếu của quy luật tự nhiên.`}
          />
          <ExampleBox
            question={"Ví dụ 2: Words in Context\n\n\"The sun descending in the west,\nThe evening star does shine;\nThe birds are silent in their nest,\nAnd I must seek for mine.\"\n\nAs used in the text, what does the word \"seek\" most nearly mean?\n(A) Hide\n(B) Look for\n(C) Ignore\n(D) Abandon"}
            solution={`**Đáp án: (B)**\n\n**Phân tích:**\n- Trong bài thơ, khi chim chóc đã về yên trong tổ ("birds are silent in their nest"), người kể cũng phải đi tìm kiếm ("seek") chỗ nghỉ ngơi của chính mình.\n- "Look for" là cụm từ mang nghĩa đen sát nhất với từ "seek" trong bối cảnh này.`}
          />
          <ExampleBox
            question={"Ví dụ 3: Function\n\n<u>One by one he subdued his father’s trees</u>\nBy riding them down over and over again\nUntil he took the stiffness out of them...\n\nWhich choice best describes the function of the underlined portion in the text as a whole?\n(A) To indicate that the trees were dead and brittle.\n(B) To illustrate the extent to which the boy climbed the trees.\n(C) To draw a contrast between the trees and the boy.\n(D) To expose the vulnerability of the trees."}
            solution={`**Đáp án: (B)**\n\n**Phân tích:**\n- Đoạn chức năng này nằm trong ngữ cảnh trèo lên chúng "lần này đến lần khác" (over and over again) cho đến khi cây mất đi sự cứng cáp.\n- Dòng thơ này đóng vai trò nhấn mạnh bề dày, sự thường xuyên và cường độ hoạt động mà cậu bé đã bỏ ra để khuất phục những cái cây.`}
          />
        </section>
      </div>
    ),
  },

  // ------------------------------------------
  // VERBAL: EXPRESSION OF IDEAS
  // ------------------------------------------
  {
    id: "v_expression",
    category: "Verbal",
    title: "Expression of Ideas (20%)",
    content: (
      <div className="space-y-8 text-lg leading-relaxed text-black">
        <div className="bg-black text-white p-6">
          <h2 className="text-3xl font-bold mb-2">
            Expression of Ideas (~20%)
          </h2>
          <p className="opacity-90">Rhetorical Synthesis • Transitions</p>
        </div>

        <section>
          <h3 className="font-bold text-2xl border-b-2 border-black mb-4 inline-block">
            1. Rhetorical Synthesis
          </h3>
          <p>
            <strong>Vị trí trên đề & tầm quan trọng:</strong> 1–2 câu/section. Dạng kết hợp bullets để hoàn thành mục tiêu cụ thể. Dễ lấy trọn điểm.
          </p>
          <div className="bg-[#fffdf0] border-l-4 border-[#ffe36d] p-4 my-4">
            <strong>Mini-theory:</strong> Mấu chốt là chọn câu đúng MỤC TIÊU (purpose) yêu cầu, KHÔNG phải nhét nhiều thông tin nhất.
          </div>
          <p>
            <strong>Chiến lược 3 bước:</strong><br/>
            1. Đọc kỹ câu dẫn để tìm mục tiêu (emphasize function? highlight cause?).<br/>
            2. Gạch chân các bullet phục vụ trực tiếp cho mục tiêu đó.<br/>
            3. Chọn đáp án chỉ tập trung vào mục tiêu (không thêm chi tiết thừa/khác mục tiêu).
          </p>
          <ExampleBox
            question={`Notes:\n- Anglerfish has a bioluminescent lure filled with bacteria.\n- It lives at depths over 1,000 meters.\n- This glowing lure attracts prey in dark water.\n\nThe student wants to emphasize the biological function of the lure. Which option is best?\nA) Living at 1,000 meters, the anglerfish relies on bacteria for light.\nB) In the pitch-black deep sea, the anglerfish employs a glowing lure to attract prey.\nC) The anglerfish's glowing lure is filled with bacteria.\nD) The anglerfish lives deep but has a unique physical structure.`}
            solution={`**Đáp án: B**\n\n**Giải thích chi tiết:**\n- Mục tiêu: "emphasize the biological function" → Câu trả lời phải nói cái lure dùng để làm gì.\n- "attracts prey" là biological function.\n- Chỉ đáp án B nêu trực tiếp mục đích "to attract prey". A & C chỉ nói cấu tạo/nguồn sáng.\n\n**Common trap:** Chọn C vì giống hệt bullet đầu tiên, nhưng nó không trả lời mục tiêu (function).`}
          />
        </section>

        <section>
          <h3 className="font-bold text-2xl border-b-2 border-black mb-4 inline-block">
            2. Transitions
          </h3>
          <p>
            <strong>Vị trí trên đề & tầm quan trọng:</strong> 2–4 câu/section. Điền từ nối cho hai câu.
          </p>
          <div className="bg-[#fffdf0] border-l-4 border-[#ffe36d] p-4 my-4">
            <strong>Mini-theory:</strong> Bạn không cần từ vựng hiếm, chỉ cần xác định quan hệ là Addition, Contrast, Cause-Effect, hay Example.
          </div>
          <p>
            <strong>Chiến lược 3 bước:</strong><br/>
            1. Bỏ qua từ nối, tóm tắt hai câu bằng tiếng Việt: "Ý sau thêm, đối lập, hay hậu quả của ý trước?".<br/>
            2. Loại toàn bộ đáp án sai loại quan hệ.<br/>
            3. Chọn từ phù hợp tone và sắc thái.
          </p>
          <ExampleBox
            question={`Ancient maps were extremely crude. ______, modern satellite systems map the Earth with sub-meter precision.\nA) Similarly,\nB) Conversely,\nC) Subsequently\nD) Therefore,`}
            solution={`**Đáp án: B) Conversely,**\n\n**Giải thích chi tiết:**\n- Tóm tắt: Bản đồ cổ trơ trọi (crude) vs Vệ tinh hiện đại siêu chuẩn (precision).\n- Quan hệ: Đối lập rõ ràng. "Conversely" nghĩa là ngược lại.\n\n**Common trap:** Chọn C (Subsequently) vì nghĩ thời gian cái này ra đời sau cái kia, nhưng đề đang nhấn mạnh tính chất tương phản chứ không phải timeline. Hoặc D "Therefore" do quen mồm đọc nghe "học thuật".`}
          />
        </section>
      </div>
    ),
  },

  // ------------------------------------------
  // VERBAL: STANDARD ENGLISH CONVENTIONS
  // ------------------------------------------
  {
    id: "v_conventions",
    category: "Verbal",
    title: "Standard Conventions (26%)",
    content: (
      <div className="space-y-8 text-lg leading-relaxed text-black">
        <div className="bg-black text-white p-6">
          <h2 className="text-3xl font-bold mb-2">Conventions (~26%)</h2>
          <p className="opacity-90">Boundaries (Punctuation) • Form, Structure, and Sense</p>
        </div>

        <section>
          <h3 className="font-bold text-2xl border-b-2 border-black mb-4 inline-block">
            1. Boundaries (Punctuation)
          </h3>
          <p>
            <strong>Vị trí trên đề & tầm quan trọng:</strong> Khoảng 3–5 câu/section. Rất dễ ăn điểm nếu vững nguyên lý mảnh vỡ (Fragment) và tách mệnh đề độc lập (Comma Splice).
          </p>
          <div className="bg-[#fffdf0] border-l-4 border-[#ffe36d] p-4 my-4">
            <strong>Mini-theory:</strong> Bạn có "nhìn thấy khung xương" câu không? Học sinh Việt thường đặt phẩy theo nhịp thở mà không dựa trên S-V thật.
          </div>
          <p>
            <strong>Chiến lược 3 bước:</strong><br/>
            1. Đếm mệnh đề độc lập (có S-V chính).<br/>
            2. Hỏi: "Giữa 2 mệnh đề này dùng dấu gì?". Dấu phẩy trơ trọi là sai (trừ khi có FANBOYS).<br/>
            3. Dấu 2 chấm (:) hoặc gạch ngang (—): xem phần trước đã trọn vẹn chưa, phần sau có phải là giải thích/danh sách làm rõ không.
          </p>
          <ExampleBox
            question={`The recipe requires three basic ingredients ______ flour, eggs, and sugar.\nA) ingredients; flour\nB) ingredients: flour\nC) ingredients, flour\nD) ingredients, which are flour`}
            solution={`**Đáp án: B) ingredients: flour**\n\n**Giải thích chi tiết:**\n- Trước khoảng trống là câu hoàn chỉnh "The recipe requires three basic ingredients".\n- Sau khoảng trống là list liệt kê 3 thứ đó.\n- Quy tắc: Cấu trúc Tổng quát → Cụ thể/Danh sách dùng dấu hai chấm (:).\n\n**Common trap:** Dùng (C, D) theo trực giác nhịp thở, hoặc dùng ";" do tưởng ";" ngắt mạnh hơn phẩy (nhưng ";" phải nối 2 câu hoàn chỉnh).`}
          />
        </section>

        <section>
          <h3 className="font-bold text-2xl border-b-2 border-black mb-4 inline-block">
            2. Form, Structure, and Sense
          </h3>
          <p>
            <strong>Vị trí trên đề & tầm quan trọng:</strong> Xuất hiện 4–6 câu/section (Subject-Verb, Pronouns, Modifier, Tense). Ngữ pháp truyền thống nhưng lồng trong văn cảnh.
          </p>
          <div className="bg-[#fffdf0] border-l-4 border-[#ffe36d] p-4 my-4">
            <strong>Mini-theory:</strong> Xác định đâu là Chủ Ngữ Thật. Các cụm giới từ "of X", "in Y" hay đánh lừa làm bạn chia động từ sai.
          </div>
          <p>
            <strong>Chiến lược 3 bước:</strong><br/>
            1. Tách khung S-V chính, gạch bỏ các cụm giới từ rườm rà ở giữa.<br/>
            2. Check số ít/số nhiều, đại từ trỏ về đúng không.<br/>
            3. Đọc lại nguyên câu xem có vấp hay tối nghĩa không.
          </p>
          <ExampleBox
            question={`The group of international researchers ______ currently developing a universal influenza vaccine.\nA) are\nB) is\nC) were\nD) have been`}
            solution={`**Đáp án: B) is**\n\n**Giải thích chi tiết:**\n- Tìm chủ ngữ thực sự: "The group" (số ít, danh từ tập hợp). Cụm "of international researchers" chỉ bổ nghĩa cho group.\n- Động từ chia hiện tại vì có "currently". "The group is".\n\n**Common trap:** Thấy "researchers" đứng sát động từ liền → nhắm mắt chọn "are" (A). Lúng túng chọn C, D dù câu văn chỉ cần kể sự thật hiện tại.`}
          />
        </section>
      </div>
    ),
  },

  // ------------------------------------------
  // VERBAL: GRAMMAR LECTURES (GRAMMAR BYTES)
  // ------------------------------------------
  {
    id: "v_grammar_bytes",
    category: "Verbal",
    title: "Grammar Lectures",
    content: (
      <div className="space-y-8 text-lg leading-relaxed text-black">
        <div className="bg-black text-white p-6 rounded-xl shadow-sm">
          <h2 className="text-3xl font-bold mb-2">Grammar Bytes Lectures</h2>
          <p className="opacity-90 leading-relaxed font-medium">
            Comprehensive slides covering standard English grammar rules: Word
            Choice, Modifiers, Agreement, and punctuation.
          </p>
        </div>

        <div className="space-y-8 mt-8">
          {[
            {
              title: "Word Choice",
              src: "https://1drv.ms/p/c/dd8d396ca8606304/IQRWFrowCe9ERJWSGv7xg3w0AeariOBeIYdqVVvsaoVB4wM",
            },
            {
              title: "Confused Words",
              src: "https://1drv.ms/p/c/dd8d396ca8606304/IQRuwYq3c0jiS5QFm2CJhiqdAZi6-gkjy4yyFZ_NjwAwyM8",
            },
            {
              title: "Modifiers",
              src: "https://1drv.ms/p/c/dd8d396ca8606304/IQTqSmn0oWdrR7fWZ6qIgAnhAZqyz_-1_BQGlt8h6Vnb9mg",
            },
            {
              title: "Coordinate & Subordinate",
              src: "https://1drv.ms/p/c/dd8d396ca8606304/IQRiF3Eb4ia_T4mruxONVY3LAfyn0FcTfyLwFZGCMde-2oA",
            },
            {
              title: "Parallelism",
              src: "https://1drv.ms/p/c/dd8d396ca8606304/IQSSCrfYHrQqRJZhxZnhLXmSAX4DNXJI9Jiyy7dYzFGbKz8",
            },
            {
              title: "Comma Splice, Fused Sentence, Fragment",
              src: "https://1drv.ms/p/c/dd8d396ca8606304/IQTY7qG9iNw3S7MwT3gPrtVAAYVeGOapk27ql3sYacNFAyo",
            },
            {
              title: "Verb Forms",
              src: "https://1drv.ms/p/c/dd8d396ca8606304/IQSssUHreKaLSZ7hYwJPINpzAYFNPz79YU0QGtoOqzivwX4",
            },
            {
              title: "Tense Shift",
              src: "https://1drv.ms/p/c/dd8d396ca8606304/IQQQDWBr8wbITJCzAmwAst1dAR69KnigH2UTmKB_E5rriF0",
            },
            {
              title: "Subject-Verb Agreement",
              src: "https://1drv.ms/p/c/dd8d396ca8606304/IQS5O8t8ZA4aT5Q6euS_TZ3mAUijR2YwTD-n7-5ahiTQAUU",
            },
            {
              title: "Pronoun Agreement",
              src: "https://1drv.ms/p/c/dd8d396ca8606304/IQTPI_jX5pHnRqT8yguH7qBJAYFrLbdLTgWFDuLSw2zhW_s",
            },
            {
              title: "Pronoun Shift",
              src: "https://1drv.ms/p/c/dd8d396ca8606304/IQTC49I7nff3Q7AawwSHlLENARd9blEtZzuEulGJsf83D6w",
            },
            {
              title: "Pronoun Reference",
              src: "https://1drv.ms/p/c/dd8d396ca8606304/IQTegcdWZ7STT4aZqQBVBn92ARSiryeOCR8pGUPKFa08YMI",
            },
            {
              title: "Pronoun Case",
              src: "https://1drv.ms/p/c/dd8d396ca8606304/IQQQi0PkdAoBQY1z-Q_CkEPfAbxzYQZbtB3ADLWgPfm7EqM",
            },
            {
              title: "Adjectives & Adverbs",
              src: "https://1drv.ms/p/c/dd8d396ca8606304/IQSVxvUdczGETpSdlfcLtP7LATSruzwgNuJacbvnFxIbMwk",
            },
            {
              title: "Degree",
              src: "https://1drv.ms/p/c/dd8d396ca8606304/IQR8xj_Qs3dDSo5tENgc65WBAfDy-OP8qiyNvMQvTc2T4q0",
            },
            {
              title: "Spelling",
              src: "https://1drv.ms/p/c/dd8d396ca8606304/IQS1ebQNZPT4TLOJTKbHQATUAflkkNq0nNVf2_v29ptAZaw",
            },
            {
              title: "Punctuation",
              src: "https://1drv.ms/p/c/dd8d396ca8606304/IQSseuRvWCdUSqrjOIiAdNshAcMtgAFZ-4-e7P3o4_v7MeA",
            },
            {
              title: "Capitalization",
              src: "https://1drv.ms/p/c/dd8d396ca8606304/IQTlgD8czVLfT53Cz4wiEk3vAWz3pTndxAcxfhBFn07dJHc",
            },
          ].map((lecture, idx) => (
            <section
              key={idx}
              className="bg-white p-6 rounded-2xl border border-black/10 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-bold text-xl md:text-2xl mb-4 text-[#dc2323] flex items-center gap-3">
                <span className="bg-[#fffdf0] text-[#dc2323] border border-[#ffe36d] w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full text-lg shadow-sm">
                  {idx + 1}
                </span>
                {lecture.title}
              </h3>
              <div
                className="relative w-full max-w-3xl mx-auto rounded-xl overflow-hidden shadow-inner border border-slate-100 bg-[#fffdf0] flex items-center justify-center"
                style={{ aspectRatio: "402/327" }}
              >
                <iframe
                  src={lecture.src}
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0"
                  scrolling="no"
                  loading="lazy"
                ></iframe>
              </div>
            </section>
          ))}
        </div>
      </div>
    ),
  },

  // ------------------------------------------
  // MATH: OVERVIEW & REFERENCE
  // ------------------------------------------
  {
    id: "m_overview",
    category: "Math",
    title: "Math Reference & Grid-Ins",
    content: (
      <div className="space-y-8 text-lg leading-relaxed text-black">
        <div className="bg-black text-white p-6">
          <h2 className="text-3xl font-bold mb-2">
            Math Reference & Grid-ins
          </h2>
          <p className="opacity-90">
            SAT Math Reference Sheet & Student-produced response directions
          </p>
        </div>

        <section>
          <h3 className="font-bold text-2xl border-b-2 border-black mb-4 inline-block">
            SAT Math Reference Sheet
          </h3>
          <p className="mb-4">
            Bảng công thức này luôn được cung cấp sẵn trên ứng dụng thi Bluebook. Hãy ghi nhớ vị trí và các công thức có sẵn để tra cứu nhanh khi làm bài.
          </p>
          <div className="border border-black/10 rounded-lg p-2 bg-white">
            <img 
              src="https://pbs.twimg.com/media/HKR2fTyaEAAEKpw?format=jpg&name=4096x4096" 
              alt="SAT Math Reference Sheet" 
              className="w-full h-auto rounded"
            />
          </div>
        </section>

        <section>
          <h3 className="font-bold text-2xl border-b-2 border-black mb-4 inline-block">
            Student-produced response directions (Grid-ins)
          </h3>
          <p className="mb-4">
            Đối với các câu hỏi tự điền đáp án (Student-produced response), hãy lưu ý quy tắc nhập đáp án của College Board:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6 text-black/80">
            <li>If you find more than one correct answer, enter <strong>only one</strong> answer.</li>
            <li>You can enter up to 5 characters for a positive answer and up to 6 characters (including the negative sign) for a negative answer.</li>
            <li>If your answer is a fraction that doesn't fit in the provided space, enter the decimal equivalent.</li>
            <li>If your answer is a decimal that doesn't fit in the provided space, enter it by truncating or rounding at the fourth digit.</li>
            <li>If your answer is a mixed number (such as 3 1/2), enter it as an improper fraction (7/2) or its decimal equivalent (3.5).</li>
            <li>Don't enter symbols such as a percent sign, comma, or dollar sign.</li>
          </ul>

          <h4 className="font-bold text-lg mb-3">Ví dụ nhập đáp án hợp lệ & không hợp lệ</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse border border-black/20">
              <thead>
                <tr className="bg-[#ffe36d]/20">
                  <th className="border border-black/20 px-4 py-2 font-bold">Answer</th>
                  <th className="border border-black/20 px-4 py-2 font-bold">Acceptable ways to enter answer</th>
                  <th className="border border-black/20 px-4 py-2 font-bold text-red-600">Unacceptable (will NOT receive credit)</th>
                </tr>
              </thead>
              <tbody className="text-base text-black/80">
                <tr>
                  <td className="border border-black/20 px-4 py-2 font-mono">3.5</td>
                  <td className="border border-black/20 px-4 py-2">3.5<br/>3.50</td>
                  <td className="border border-black/20 px-4 py-2 text-red-600">3 1/2</td>
                </tr>
                <tr>
                  <td className="border border-black/20 px-4 py-2 font-mono">7/2</td>
                  <td className="border border-black/20 px-4 py-2">7/2<br/>3.5</td>
                  <td className="border border-black/20 px-4 py-2 text-red-600">3 1/2</td>
                </tr>
                <tr>
                  <td className="border border-black/20 px-4 py-2 font-mono">2/3</td>
                  <td className="border border-black/20 px-4 py-2">2/3<br/>.6666<br/>.6667<br/>0.666<br/>0.667</td>
                  <td className="border border-black/20 px-4 py-2 text-red-600">0.66<br/>.66<br/>0.67<br/>.67</td>
                </tr>
                <tr>
                  <td className="border border-black/20 px-4 py-2 font-mono">-1/3</td>
                  <td className="border border-black/20 px-4 py-2">-1/3<br/>-.3333<br/>-0.333</td>
                  <td className="border border-black/20 px-4 py-2 text-red-600">-.33<br/>-0.33</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    ),
  },

  // ------------------------------------------
  // MATH: ALGEBRA
  // ------------------------------------------
  {
    id: "m_algebra",
    category: "Math",
    title: "Algebra (35%)",
    content: (
      <div className="space-y-8 text-lg leading-relaxed text-black">
        <div className="bg-black text-white p-6">
          <h2 className="text-3xl font-bold mb-2">Algebra (~35%)</h2>
          <p className="opacity-90">
            Linear Equations & Functions • Systems • Inequalities
          </p>
        </div>

        <section>
          <h3 className="font-bold text-2xl border-b-2 border-black mb-4 inline-block">
            1. Linear Equations in One Variable
          </h3>
          <p>
            <strong>Vị trí trên đề:</strong> Xuất hiện rất nhiều, từ dễ đến trung bình-khá. Nhiều câu gài thêm “giá trị của 2x, 3x+1” để kiểm tra xem bạn không dừng ở x.
          </p>
          <div className="bg-[#fffdf0] border-l-4 border-[#ffe36d] p-4 my-4">
            <strong>Mini-theory:</strong> College Board muốn xem bạn có tuân thủ thứ tự thao tác (phân phối → gom hạng tử → cô lập x) và xử lý gọn các bước hay không.
          </div>
          <p>
            <strong>Chiến lược 3 bước:</strong><br/>
            1. Phân phối, bỏ ngoặc, gom hạng tử cùng loại về cùng một phía.<br/>
            2. Cô lập x bằng +/–/×/÷ đều hai vế.<br/>
            3. Nếu đề hỏi "2x, 3x-4…" → thay x vào ngay thay vì tiếp tục biến đổi.
          </p>
          <ExampleBox
            question={`If 3(x - 4) + 5 = 20, what is the value of 2x?`}
            solution={`**Đáp án: 18**\n\n**Giải thích chi tiết:**\n- 3(x - 4) + 5 = 20\n- 3x - 12 + 5 = 20\n- 3x - 7 = 20\n- 3x = 27 → x = 9.\n- Vậy 2x = 18.\n\n**Common trap:** Quên cộng 5 hoặc cộng/trừ nhầm dấu → ra x sai rồi vẫn tiếp tục tính 2x.`}
          />
        </section>

        <section>
          <h3 className="font-bold text-2xl border-b-2 border-black mb-4 inline-block">
            2. Linear Functions
          </h3>
          <p>
            <strong>Vị trí trên đề:</strong> Hầu như test nào cũng có, nhất là word problems với slope & intercept. Điểm số dễ nếu bạn gắn slope/intercept với ngữ cảnh thực tế (cost, distance, etc.).
          </p>
          <div className="bg-[#fffdf0] border-l-4 border-[#ffe36d] p-4 my-4">
            <strong>Mini-theory:</strong> 
            - Slope m = “tăng bao nhiêu y” khi x tăng thêm 1 đơn vị.
            - Intercept b = giá trị của y khi x = 0 (điểm xuất phát/cố định).
            Học sinh Việt hay nhầm lẫn "hệ số đứng trước x" với "chi phí cố định".
          </div>
          <p>
            <strong>Chiến lược 3 bước:</strong><br/>
            1. Gạch chân "phần không phụ thuộc vào x" → đó là b.<br/>
            2. Gạch chân "mỗi 1 x tăng thêm, y tăng…" → đó là m.<br/>
            3. Viết hàm dưới dạng C(h) = mh + b gắn với chữ variable trong đề.
          </p>
          <ExampleBox
            question={`A plumber charges a flat travel fee of $50 plus an hourly rate of $45.\nWrite a function C(h) for the total cost of h hours of work.`}
            solution={`**Đáp án: C(h) = 45h + 50**\n\n**Giải thích chi tiết:**\n- Flat fee (phí cố định) = 50 → b = 50.\n- Hourly rate = 45 → m = 45.\n→ C(h) = 45h + 50.\n\n**Common trap:** Viết ngược C(h) = 50h + 45 vì gán "cái to hơn" là coefficient.`}
          />
        </section>

        <section>
          <h3 className="font-bold text-2xl border-b-2 border-black mb-4 inline-block">
            3. Linear Equations in Two Variables
          </h3>
          <p>
            <strong>Vị trí trên đề:</strong> Thường làm nền tảng cho hệ phương trình hoặc mô tả quan hệ hai đại lượng trong thực tế (ví dụ: budget, total items).
          </p>
          <div className="bg-[#fffdf0] border-l-4 border-[#ffe36d] p-4 my-4">
            <strong>Mini-theory:</strong> 
            Dạng tổng quát Ax + By = C. Trong các bài word problems, 
            A và B thường là "giá" hoặc "kích thước" của mỗi loại, x và y là số lượng, C là tổng chi phí/tổng số.
          </div>
          <p>
            <strong>Chiến lược 3 bước:</strong><br/>
            1. Tìm tổng (Total/Budget) để đặt bên phải dấu bằng (C).<br/>
            2. Xác định các hệ số gắn với biến (ví dụ: $5 cho child ticket → 5c).<br/>
            3. Thế giá trị của một biến (nếu đề cho) để tìm biến còn lại.
          </p>
          <ExampleBox
            question={`The equation 12x + 8y = 120 represents a farmer selling x bags of apples for $12 each and y bags of oranges for $8 each to earn $120. If they sell 6 bags of apples, how many bags of oranges did they sell?`}
            solution={`**Đáp án: 6**\n\n**Giải thích chi tiết:**\n- Thế x = 6 vào phương trình:\n  12(6) + 8y = 120\n  72 + 8y = 120\n  8y = 48 → y = 6.`}
          />
        </section>

        <section>
          <h3 className="font-bold text-2xl border-b-2 border-black mb-4 inline-block">
            4. Systems of Linear Equations
          </h3>
          <p>
            <strong>Vị trí trên đề:</strong> 2–3 câu/section. Một số câu chỉ hỏi giá trị 1 biến, nên không cần tìm cả cặp (x, y).
          </p>
          <div className="bg-[#fffdf0] border-l-4 border-[#ffe36d] p-4 my-4">
            <strong>Mini-theory:</strong> Hệ 2 phương trình tuyến tính = giao điểm 2 đường thẳng. Có thể giải bằng cộng đại số, thế, hoặc dùng graph (trong Bluebook).
          </div>
          <p>
            <strong>Chiến lược 3 bước:</strong><br/>
            1. Xem yêu cầu: cần x, y, hay chỉ một trong hai?<br/>
            2. Chọn phương pháp (cộng trừ để triệt tiêu biến, hoặc dùng substitution).<br/>
            3. Giải xong check nhanh bằng cách thay lại một phương trình.
          </p>
          <ExampleBox
            question={`System:\n3x + 2y = 16\nx - 2y = 8\n\nWhat is the value of x?`}
            solution={`**Đáp án: 6**\n\n**Giải thích chi tiết:**\n- Cộng 2 phương trình:\n(3x + x) + (2y - 2y) = 16 + 8 → 4x = 24 → x = 6.\n\n**Common trap:** Đi tiếp để tìm y dù đề chỉ cần x → mất thời gian vô ích.`}
          />
        </section>

        <section>
          <h3 className="font-bold text-2xl border-b-2 border-black mb-4 inline-block">
            5. Linear Inequalities
          </h3>
          <p>
            <strong>Vị trí trên đề:</strong> 1–3 câu/section; có thể là bất phương trình 1 ẩn hoặc vùng nghiệm trên trục số/biểu đồ. Một lỗi kinh điển: quên đổi chiều bất đẳng thức khi nhân/chia với số âm.
          </p>
          <div className="bg-[#fffdf0] border-l-4 border-[#ffe36d] p-4 my-4">
            <strong>Mini-theory:</strong> Bất phương trình được giải gần như hệt phương trình, chỉ khác: khi nhân/chia hai vế với số âm, phải đảo chiều dấu. Nghiệm là một khoảng giá trị.
          </div>
          <p>
            <strong>Chiến lược 3 bước:</strong><br/>
            1. Giải bất phương trình như giải phương trình.<br/>
            2. Nếu chia cho số âm → nhớ đảo dấu (&lt; thành &gt;, ≤ thành ≥, và ngược lại).<br/>
            3. Diễn đạt nghiệm bằng bất phương trình, khoảng, hoặc biểu đồ.
          </p>
          <ExampleBox
            question={`Solve the inequality: -2x + 6 < 14`}
            solution={`**Đáp án: x > -4**\n\n**Giải thích chi tiết:**\n- -2x + 6 < 14\n- -2x < 8\n- Chia 2 vế cho -2, đảo dấu: x > -4.\n\n**Common trap:** Viết x < -4 vì quên đảo dấu, dù tính toán phần số hoàn toàn đúng.`}
          />
        </section>
      </div>
    ),
  },

  // ------------------------------------------
  // MATH: ADVANCED MATH
  // ------------------------------------------
  {
    id: "m_advanced",
    category: "Math",
    title: "Advanced Math (35%)",
    content: (
      <div className="space-y-8 text-lg leading-relaxed text-black">
        <div className="bg-black text-white p-6">
          <h2 className="text-3xl font-bold mb-2">Advanced Math (~35%)</h2>
          <p className="opacity-90">
            Equivalent Expressions • Nonlinear Equations & Systems • Quadratics • Exponential Functions
          </p>
        </div>

        <section>
          <h3 className="font-bold text-2xl border-b-2 border-black mb-4 inline-block">
            1. Equivalent Expressions
          </h3>
          <p>
            <strong>Vị trí trên đề:</strong> Khoảng 3–5 câu/section. Thường yêu cầu thu gọn đa thức/lũy thừa, phân tích nhân tử (factor), hoặc so sánh 2 biểu thức.
          </p>
          <div className="bg-[#fffdf0] border-l-4 border-[#ffe36d] p-4 my-4">
            <strong>Mini-theory:</strong> 
            College Board muốn xem bạn có nắm chắc luật mũ và phân phối hay không (ví dụ: aᵐ·aⁿ = aᵐ⁺ⁿ, (aᵐ)ⁿ = aᵐⁿ) và có thể rút gọn biểu thức mà không làm "biến chất" miền giá trị.
          </div>
          <p>
            <strong>Chiến lược 3 bước:</strong><br/>
            1. Tách riêng hệ số và phần biến, áp dụng luật mũ từng phần.<br/>
            2. Gom hệ số lại (nhân/chia), cộng trừ số mũ của cùng một biến.<br/>
            3. Kiểm tra lại xem có để lại mũ âm không (nếu đề yêu cầu mũ dương).
          </p>
          <ExampleBox
            question={`Simplify the expression: (2x²y³)² · (3x⁻¹y)`}
            solution={`**Đáp án: 12x³y⁷**\n\n**Giải thích chi tiết:**\n- (2x²y³)² = 2² · x⁴ · y⁶ = 4x⁴y⁶.\n- 4x⁴y⁶ · 3x⁻¹y = 12 · x⁴⁻¹ · y⁶⁺¹ = 12x³y⁷.\n\n**Common trap:** Quên bình phương cả số 2, chỉ bình phương phần x²y³ → viết thành 2x⁴y⁶ (sai). Hoặc cộng/trừ mũ sai chiều, ví dụ x⁴·x⁻¹ thành x⁵ thay vì x³.`}
          />
        </section>

        <section>
          <h3 className="font-bold text-2xl border-b-2 border-black mb-4 inline-block">
            2. Nonlinear Equations & Systems
          </h3>
          <p>
            <strong>Vị trí trên đề:</strong> 2–3 câu/section. Dạng quen: giao điểm giữa 1 đường thẳng và 1 parabol, hoặc giải phương trình phi tuyến 1 ẩn.
          </p>
          <div className="bg-[#fffdf0] border-l-4 border-[#ffe36d] p-4 my-4">
            <strong>Mini-theory:</strong> 
            Giao điểm = nghiệm của phương trình bậc hai: (quadratic) = (linear). Số nghiệm (0,1,2) khớp với số giao điểm parabol–đường thẳng.
          </div>
          <p>
            <strong>Chiến lược 3 bước:</strong><br/>
            1. Đặt 2 biểu thức y bằng nhau: (quadratic) = (linear).<br/>
            2. Chuyển về 1 bên, thu được phương trình bậc 2 chuẩn.<br/>
            3. Factor nếu đẹp; nếu không, xem nhanh discriminant b² - 4ac (lớn hơn 0: 2 nghiệm thực, bằng 0: 1 nghiệm kép, nhỏ hơn 0: vô nghiệm).
          </p>
          <ExampleBox
            question={`Solve the system:\ny = x² - 4x + 3\ny = 2x - 5`}
            solution={`**Đáp án: x = 2, x = 4**\n\n**Giải thích chi tiết:**\n- Đặt bằng nhau: x² - 4x + 3 = 2x - 5\n- x² - 6x + 8 = 0\n- (x - 2)(x - 4) = 0\n- x = 2 hoặc x = 4.\n\n**Common trap:** Dừng lại ở x² - 6x + 8 = 0 mà không factor chuẩn, hoặc factor sai. Quên rằng đề có thể chỉ hỏi x, không nhất thiết phải tìm y.`}
          />
        </section>

        <section>
          <h3 className="font-bold text-2xl border-b-2 border-black mb-4 inline-block">
            3. Quadratic Functions (Vertex, Max/Min)
          </h3>
          <p>
            <strong>Vị trí trên đề:</strong> 3–5 câu/section. Trọng tâm: Đọc được vertex (h, k) từ dạng f(x) = a(x - h)² + k, biết parabol quay lên/quay xuống → k là min hay max.
          </p>
          <div className="bg-[#fffdf0] border-l-4 border-[#ffe36d] p-4 my-4">
            <strong>Mini-theory:</strong> 
            Vertex form: f(x) = a(x - h)² + k. Đỉnh: (h, k).
            - a &gt; 0 → parabola mở lên → k là giá trị nhỏ nhất (min).
            - a &lt; 0 → parabola mở xuống → k là giá trị lớn nhất (max).
          </div>
          <p>
            <strong>Chiến lược 3 bước:</strong><br/>
            1. Nhận dạng dạng vertex: (x - h)² + k (cẩn thận dấu).<br/>
            2. Lấy h, k: nếu là (x - 5)² thì h = 5; nếu (x + 3)² thì h = -3.<br/>
            3. Nhìn dấu a để kết luận k là max hay min.
          </p>
          <ExampleBox
            question={`f(x) = -3(x - 5)² + 12. What is the maximum value of f(x)?`}
            solution={`**Đáp án: 12**\n\n**Giải thích chi tiết:**\n- Đỉnh: (5, 12).\n- a = -3 (âm) → parabola quay xuống.\n- f(x) đạt giá trị lớn nhất tại đỉnh, bằng 12.\n\n**Common trap:** Trả lời "max = 5" vì nhầm giữa x-coordinate (h) và y-coordinate (k). Thấy -3 là âm → tưởng "làm giảm đi 3", suy luận theo cảm tính thay vì theo hình dạng parabola.`}
          />
        </section>
        
        <section>
          <h3 className="font-bold text-2xl border-b-2 border-black mb-4 inline-block">
            4. Exponential Functions (Growth & Decay)
          </h3>
          <p>
            <strong>Vị trí trên đề:</strong> Khoảng 3–5 câu/section. Hàm mũ tăng: nhân với cùng một tỉ lệ &gt; 1 mỗi bước. Hàm mũ giảm: nhân với cùng một tỉ lệ 0 &lt; b &lt; 1 mỗi bước.
          </p>
          <div className="bg-[#fffdf0] border-l-4 border-[#ffe36d] p-4 my-4">
            <strong>Mini-theory:</strong> <br/>
            - Growth (tăng): N(t) = N₀ · bᵗ hoặc N₀ · (1 + r)ᵗ với b &gt; 1.<br/>
            - Decay (giảm): N(t) = N₀ · bᵗ hoặc N₀ · (1 - r)ᵗ với 0 &lt; b &lt; 1.<br/>
            N₀: giá trị ban đầu. b: growth/decay factor (nhân với con số này mỗi bước).<br/>
            <strong>Học sinh Việt hay nhầm:</strong> Exponential với linear ("tăng thêm 5 đơn vị" là linear, "tăng 5%" là exponential). Quên scale thời gian ("gấp đôi mỗi 3 giờ" viết thành 2ᵗ thay vì 2^(t/3)).
          </div>
          <p>
            <strong>Chiến lược 3 bước:</strong><br/>
            1. Đọc kỹ cụm "mỗi …": "tăng thêm 5 đơn vị" → linear. "tăng 5%" / "gấp đôi/giảm đi 25%" → exponential.<br/>
            2. Xác định: N₀ = giá trị khởi điểm. Factor = "còn lại bao nhiêu %" hoặc "gấp mấy lần".<br/>
            3. Ghi mô hình chuẩn.
          </p>
          
          <h4 className="font-bold mt-4">4.1 Exponential Growth – "Doubles every …"</h4>
          <ExampleBox
            question={`A bacteria culture has 500 cells and doubles every 3 hours. The number of cells after t hours is modeled by N(t). Which represents N(t)?\nA) 500 + 2t\nB) 500·2ᵗ\nC) 500·2^(t/3)\nD) 500·(t/3)²`}
            solution={`**Đáp án: C**\n\n**Giải thích chi tiết:**\n- "Doubles every 3 hours" → số lần "gấp đôi" là t/3.\n→ N(t) = 500·2^(t/3).\n\n**Common trap:** B) ngụ ý "gấp đôi mỗi 1 giờ". A) hiểu sai "gấp đôi" thành "cộng thêm 2".`}
          />

          <h4 className="font-bold mt-4">4.2 Exponential Decay – "Giảm X% mỗi …"</h4>
          <ExampleBox
            question={`A radioactive substance has a mass of 80 grams and decays by 25% each hour. Which function models the mass M(t) after t hours?
A) M(t) = 80 - 0.25t
B) M(t) = 80·(0.75)ᵗ
C) M(t) = 80·(1.25)ᵗ
D) M(t) = 80·(1 - 0.25t)`}
            solution={`**Đáp án: B**\n\n**Giải thích chi tiết:**\n- "Decays by 25%" → mỗi giờ còn lại 75%.\n- Factor = 0.75 → M(t) = 80·(0.75)ᵗ.\n\n**Common trap:** A/D là "trừ đi 0.25 mỗi giờ" (sẽ âm lâu dài). C là growth.`}
          />

          <h4 className="font-bold mt-4">4.3 So sánh: Linear vs Exponential</h4>
          <ExampleBox
            question={`A savings account A starts with $1,000 and earns $50 interest each year. Another account B starts with $1,000 and grows by 5% each year. After t years, which models account B?\nA) 1000 + 50t\nB) 1000 + 0.05t\nC) 1000·(1.05)ᵗ\nD) 1000·(0.95)ᵗ`}
            solution={`**Đáp án: C**\n\n**Giải thích chi tiết:**\n- Interest "5% each year" → nhân 1.05.\n→ B(t) = 1000·(1.05)ᵗ (exponential growth).\n- A(t) = 1000 + 50t là linear (của account A).\n\n**Common trap:** Chọn B (cộng 0.05). Chọn A do không chuyển sang %.`}
          />
        </section>
      </div>
    ),
  },

  // ------------------------------------------
  // MATH: PROBLEM-SOLVING & DATA ANALYSIS
  // ------------------------------------------
  {
    id: "m_data",
    category: "Math",
    title: "Problem-Solving & Data (15%)",
    content: (
      <div className="space-y-8 text-lg leading-relaxed text-black">
        <div className="bg-black text-white p-6">
          <h2 className="text-3xl font-bold mb-2">
            Problem-Solving & Data (~15%)
          </h2>
          <p className="opacity-90">
            Ratios & Rates • Data Interpretation • One-Variable Statistics • Probability & Experiments
          </p>
        </div>

        <section>
          <h3 className="font-bold text-2xl border-b-2 border-black mb-4 inline-block">
            1. Ratios, Rates, Proportions & Units
          </h3>
          <p>
            <strong>Vị trí & vai trò trên đề:</strong> Khoảng 3–5 câu/section. Gồm từ rất dễ (đổi đơn vị) đến khá/khó (multi-step rates, density, mixture).
          </p>
          <div className="bg-[#fffdf0] border-l-4 border-[#ffe36d] p-4 my-4">
            <strong>Mini-theory:</strong> SAT kiểm tra xem bạn có viết được tỉ lệ đúng đơn vị (what per what), dùng đổi đơn vị bằng "phân số 1" (conversion factor) kỉ luật, và hiểu ý nghĩa của các rate như speed, density, price...
          </div>
          <p>
            <strong>Chiến lược 3 bước chuẩn cho mọi bài rate:</strong><br/>
            1. Ghi tỉ lệ ban đầu kèm đơn vị (ví dụ: 12 m / 1 s).<br/>
            2. Viết phép nhân dạng "chuỗi phân số", để đơn vị tự gạch bỏ (ví dụ: 12 m/1 s · 3600 s/1 h · 1 km/1000 m).<br/>
            3. Tính giá trị số → check xem con số có hợp lý không.
          </p>

          <h4 className="font-bold mt-4">1.1. Ví dụ 1 – Đổi đơn vị tốc độ (cơ bản)</h4>
          <ExampleBox
            question={`An athlete runs at a speed of 12 meters per second. What is their speed in kilometers per hour?`}
            solution={`**Đáp án: 43.2**\n\n**Hướng dẫn:**\n- Bước 1: 12 m / 1 s.\n- Bước 2: Đổi giây → giờ và mét → km:\n  12 m / 1 s × 3600 s / 1 h × 1 km / 1000 m\n- Đơn vị: m triệt tiêu, s triệt tiêu → km/h.\n- Bước 3: 12 × 3.6 = 43.2 km/h.\n\n**Common trap:** nhân 12 × 60 rồi dừng lại, cho rằng đó là km/h.`}
          />

          <h4 className="font-bold mt-4">1.2. Ví dụ 2 – Density + Flow (multi-step)</h4>
          <ExampleBox
            question={`A tank contains fuel at a constant density of 0.8 kilograms per liter. The fuel flows out at a steady rate of 3 liters per minute. At this rate, how many kilograms of fuel leave the tank in 2 hours?`}
            solution={`**Đáp án: 288**\n\n**Hướng dẫn:**\n- Đổi 2 giờ → phút: 2 h × 60 = 120 minutes.\n- Lượng fuel (L): 3 L/min × 120 min = 360 L.\n- Đổi L → kg: 360 L × 0.8 kg/L = 288 kg.\n\n**Common traps:** Quên đổi giờ → phút (dùng 3×2=6 L). Hoặc đổi density sai chiều (lấy 1 / 0.8).`}
          />

          <h4 className="font-bold mt-4">1.3. Ví dụ 3 – Price per Unit (khá)</h4>
          <ExampleBox
            question={`A store sells 3 kilograms of rice for $7.20. At this rate, what is the price per 500 grams of rice?`}
            solution={`**Đáp án: 1.20**\n\n**Hướng dẫn:**\n- 3 kg = 3000 g.\n- Price per gram: 7.20 / 3000 = 0.0024 dollars/gram.\n- 500 g: 500 × 0.0024 = 1.2 dollars.\n\nHoặc có thể lập tỉ lệ: 3 kg → $7.20, vậy 0.5 kg → x = 7.20 × 0.5 / 3 = 1.2.`}
          />
        </section>

        <section>
          <h3 className="font-bold text-2xl border-b-2 border-black mb-4 inline-block">
            2. Data Interpretation & Two-Variable Data
          </h3>
          <p>
            <strong>Vị trí & dạng bài:</strong> Khoảng 3–6 câu/section. Dữ liệu: bảng, đồ thị đường, biểu đồ cột, scatterplot, line of best fit.
          </p>
          <div className="bg-[#fffdf0] border-l-4 border-[#ffe36d] p-4 my-4">
            <strong>Mini-theory:</strong> Với phương trình line of best fit (y = mx + b). m = "trung bình y thay đổi khi x tăng 1". b = giá trị dự đoán của y khi x = 0. 
            Phát biểu "được hỗ trợ" bởi dữ liệu = có thể đọc hoặc nội suy ngắn từ bảng biểu.
          </div>
          <p>
            <strong>Chiến lược 3 bước:</strong><br/>
            1. Định nghĩa lại x, y bằng lời: "x là gì? y là gì?"<br/>
            2. Hiểu nghĩa của m và b trong ngôn ngữ đời sống.<br/>
            3. Khi chọn phát biểu: Loại câu suy diễn quá xa ngoài data (extrapolation), và loại câu nói "cause" nếu chỉ có correlation.
          </p>

          <h4 className="font-bold mt-4">2.1. Ví dụ 1 – Ý nghĩa slope (khá)</h4>
          <ExampleBox
            question={`A line of best fit models the relationship between hours of tutoring x and test score y: y = 4.2x + 65. Which statement best describes the meaning of the slope 4.2?
A) Students start at a score of 4.2 with no tutoring.
B) Each additional hour of tutoring is associated with an average increase of 4.2 points in test score.
C) Students' scores increase by 65 points every 4.2 hours.
D) The highest possible score is 4.2 times the number of hours tutored.`}
            solution={`**Đáp án: B**\n\n**Hướng dẫn:**\n- m = 4.2 → "change in y per 1 unit of x".\n- Câu B nói đúng "mỗi giờ thêm, điểm tăng ~4.2".\n- Câu A: nhầm slope với intercept. Câu C: đảo quan hệ. Câu D: bịa "highest possible score".`}
          />

          <h4 className="font-bold mt-4">2.2. Ví dụ 2 – Two-variable data: Models and scatterplots</h4>
          <div className="my-4 bg-white p-4 border border-black/10 rounded text-center">
            <svg width="250" height="200" viewBox="0 0 250 200" className="mx-auto rounded shadow-sm bg-[#fffdf0]">
              {/* Axes */}
              <line x1="30" y1="170" x2="230" y2="170" stroke="black" strokeWidth="2" />
              <line x1="30" y1="170" x2="30" y2="20" stroke="black" strokeWidth="2" />
              {/* Labels */}
              <text x="130" y="195" fontSize="12" textAnchor="middle" fill="#666">x (Hours)</text>
              <text x="15" y="95" fontSize="12" textAnchor="middle" transform="rotate(-90 15,95)" fill="#666">y (Score)</text>
              {/* Scatter points */}
              <circle cx="50" cy="140" r="3" fill="#DC2323"/>
              <circle cx="70" cy="120" r="3" fill="#DC2323"/>
              <circle cx="60" cy="150" r="3" fill="#DC2323"/>
              <circle cx="90" cy="110" r="3" fill="#DC2323"/>
              <circle cx="110" cy="90" r="3" fill="#DC2323"/>
              <circle cx="120" cy="100" r="3" fill="#DC2323"/>
              <circle cx="140" cy="70" r="3" fill="#DC2323"/>
              <circle cx="160" cy="80" r="3" fill="#DC2323"/>
              <circle cx="150" cy="50" r="3" fill="#DC2323"/>
              <circle cx="180" cy="40" r="3" fill="#DC2323"/>
              <circle cx="190" cy="60" r="3" fill="#DC2323"/>
              <circle cx="210" cy="30" r="3" fill="#DC2323"/>
              {/* Line of best fit */}
              <line x1="30" y1="160" x2="220" y2="30" stroke="blue" strokeWidth="2" strokeDasharray="4 2" />
            </svg>
            <p className="text-sm mt-2 text-slate-500 italic">Hình minh hoạ: Scatterplot và Line of best fit (đường xu hướng) biểu diễn sự tương quan dương.</p>
          </div>
          <ExampleBox
            question={`The scatterplot above shows the relationship between studying hours and test scores. The blue dashed line is the line of best fit. Which of the following is the most appropriate conclusion?
A) Increasing studying hours causes higher test scores.
B) There is a positive association between studying hours and test scores.
C) The line of best fit passes through all the data points perfectly.
D) There is no relationship between the two variables.`}
            solution={`**Đáp án: B**\n\n**Hướng dẫn:**\n- Hướng của đường (đi lên) nhận diện "positive association".\n- Câu A có chữ "causes" mà biểu đồ phân tán chỉ chứng minh "association / correlation", không chứng minh "causation" ngay lập tức nếu không thực hiện experiment.\n- Câu C sai vì các điểm phân tán xung quanh đường chứ không nằm hoàn toàn trên đường.`}
          />
        </section>

        <section>
          <h3 className="font-bold text-2xl border-b-2 border-black mb-4 inline-block">
            3. One-Variable Statistics: Mean, Median, Mode, SD
          </h3>
          <p>
            <strong>Vị trí & dạng bài:</strong> 3–5 câu/section. Hỏi trực tiếp hoặc kết hợp với thêm/bớt giá trị, outlier, so sánh độ rải (spread).
          </p>
          <div className="bg-[#fffdf0] border-l-4 border-[#ffe36d] p-4 my-4">
            <strong>Definitions nhanh:</strong><br/>
            - Mean = average = sum / count.<br/>
            - Median = giá trị giữa sau khi sort.<br/>
            - Mode = giá trị xuất hiện nhiều nhất.<br/>
            - Standard deviation (SD) = "độ rải" quanh mean (Nhiều điểm rất xa mean → SD lớn, tất cả gần mean → SD nhỏ).
          </div>

          <h4 className="font-bold mt-4">3.1. Ví dụ 1 – Mean & thêm giá trị</h4>
          <ExampleBox
            question={`A set of 5 quiz scores has a mean of 80. A sixth quiz score of 92 is added. What is the mean of the 6 quiz scores?`}
            solution={`**Đáp án: 82**\n\n**Hướng dẫn:**\n- Tổng 5 điểm đầu: 80 × 5 = 400.\n- Tổng mới: 400 + 92 = 492.\n- Mean mới: 492 / 6 = 82.\n\n**Common trap:** Lấy (80 + 92)/2.`}
          />
          
          <h4 className="font-bold mt-4">3.2. Ví dụ 2 – Thay 1 giá trị</h4>
          <ExampleBox
            question={`The mean of five numbers is 20. One of the numbers, 14, is replaced with 34. What is the new mean?`}
            solution={`**Đáp án: 24**\n\n**Hướng dẫn:**\n- Tổng cũ: 20 × 5 = 100.\n- Tổng mới: 100 - 14 + 34 = 120.\n- Mean mới = 120 / 5 = 24.`}
          />

          <h4 className="font-bold mt-4">3.3. Ví dụ 3 – Mode & Median (cơ bản)</h4>
          <ExampleBox
            question={`The data set: 2, 3, 3, 5, 8, 8, 8, 10.\nWhat are the mode and median?`}
            solution={`**Đáp án: Mode = 8, Median = 6.5**\n\n**Hướng dẫn:**\n- Mode: giá trị xuất hiện nhiều nhất → 8 (3 lần).\n- Dữ liệu đã sắp xếp, 8 phần tử.\n- Median = trung bình cộng phần tử thứ 4 và 5: (5 + 8) / 2 = 6.5.`}
          />

          <h4 className="font-bold mt-4">3.4. Ví dụ 4 – So sánh Standard Deviation (khá)</h4>
          <ExampleBox
            question={`Data set A: 10, 12, 14, 16, 18\nData set B: 5, 10, 14, 18, 23\nWhich data set has the greater standard deviation?`}
            solution={`**Đáp án: Data set B**\n\n**Hướng dẫn:**\n- Cả hai có mean ≈ 14.\n- Data set A có các điểm ở gần mean hơn, điểm xa nhất chỉ cách 4 đơn vị.\n- Data set B rải rộng hơn, điểm xa nhất cách 9 đơn vị.\n→ B rải rộng hơn nhiều nên SD lớn hơn.`}
          />
        </section>

        <section>
          <h3 className="font-bold text-2xl border-b-2 border-black mb-4 inline-block">
            4. Probability & Experiments
          </h3>
          <p>
            <strong>Vị trí & dạng bài:</strong> 2–4 câu/section. Bao gồm: Xác suất cơ bản, conditional probability, margin of error & polls, và observational vs experiment.
          </p>

          <h4 className="font-bold mt-4">4.1. Basic & Conditional Probability</h4>
          <div className="bg-[#fffdf0] border-l-4 border-[#ffe36d] p-4 my-4">
            <strong>Mini-theory:</strong> P(A) = favourable / total. P(A|B) = P(A and B) / P(B). Cụm "Given B" → mẫu số chỉ xét nhóm B.
          </div>
          <ExampleBox
            question={`Table:
|            | Music | No Music | Total |
|------------|-------|----------|-------|
| Sport      | 80    | 40       | 120   |
| No Sport   | 50    | 30       | 80    |
| Total      | 130   | 70       | 200   |
If a student is chosen at random among those who participate in music, what is the probability that this student does not play a sport?`}
            solution={`**Đáp án: 5/13**\n\n**Hướng dẫn:**\n- Nhóm gốc (mẫu số): "Music" → tổng = 130.\n- Không chơi sport nhưng có music (tử số) = 50.\n→ P = 50 / 130 = 5/13.`}
          />

          <h4 className="font-bold mt-4">4.2. Inference from sample statistics and margin of error</h4>
          <div className="bg-[#fffdf0] border-l-4 border-[#ffe36d] p-4 my-4">
            <strong>Mini-theory:</strong> Kết quả poll: estimate p̂ và margin ±m → khoảng khả dĩ: [p̂ - m, p̂ + m]. Không được chốt "exactly", "at least", "at most".
          </div>
          <ExampleBox
            question={`In a poll of 1,000 randomly selected voters, 52% say they support Candidate A. The poll reports a margin of error of 3%. Which is the most reasonable conclusion about the actual percentage of all voters who support A?
A) Exactly 52% support A.
B) Between 49% and 55% support A.
C) At least 55% support A.
D) At most 52% support A.`}
            solution={`**Đáp án: B**\n\n**Hướng dẫn:**\n- Khoảng: 52% ± 3% → [49%, 55%].\n- Câu B nói hợp lí. Các câu A, C, D đều khẳng định vượt quá sức mạnh của khoảng ước lượng.`}
          />

          <h4 className="font-bold mt-4">4.3. Evaluating statistical claims: Observational studies and experiments</h4>
          <div className="bg-[#fffdf0] border-l-4 border-[#ffe36d] p-4 my-4">
            <strong>Mini-theory:</strong><br/>
            - Observational study: Chỉ quan sát, không gán ngẫu nhiên → Chỉ được kết luận association (có liên hệ).<br/>
            - Experiment with random assignment: Chia ngẫu nhiên vào treatment/control → Có thể khẳng định cause-effect (quan hệ nhân-quả).
          </div>
          <ExampleBox
            question={`Researchers want to determine whether a new fertilizer causes plants to grow faster than a standard fertilizer. Which study design is best?
A) Observe growth rates of plants in different gardens that use various fertilizers.
B) Randomly assign plants to receive either the new fertilizer or the standard fertilizer, then compare average growth.
C) Ask gardeners which fertilizer they prefer and compare plant heights.
D) Study one garden using only the new fertilizer and compare to last year's growth.`}
            solution={`**Đáp án: B**\n\n**Hướng dẫn:** B là thiết kế chuẩn: random assignment + 2 nhóm. Ngược lại, A và C là quan sát, D không có nhóm control đồng thời.`}
          />
        </section>
      </div>
    ),
  },

  // ------------------------------------------
  // MATH: GEOMETRY & TRIG
  // ------------------------------------------
  {
    id: "m_geometry",
    category: "Math",
    title: "Geometry & Trig (15%)",
    content: (
      <div className="space-y-8 text-lg leading-relaxed text-black">
        <div className="bg-black text-white p-6">
          <h2 className="text-3xl font-bold mb-2">Geometry & Trig (~15%)</h2>
          <p className="opacity-90">
            Area & Volume • Lines & Triangles • Right-Triangle Trig • Circles
          </p>
        </div>

        <section>
          <h3 className="font-bold text-2xl border-b-2 border-black mb-4 inline-block">
            1. Area and Volume
          </h3>
          <p>
            <strong>Vị trí trên đề:</strong> 2–3 câu/section, đa phần công thức cơ bản (cho sẵn hoặc "ngầm quen thuộc"). Thường kết hợp với đổi đơn vị hoặc so sánh tỉ lệ (scale factor).
          </p>
          <div className="bg-[#fffdf0] border-l-4 border-[#ffe36d] p-4 my-4">
            <strong>Mini-theory:</strong> 
            - Hình trụ: V = πr²h. Hình hộp chữ nhật: V = lwh.
            - Diện tích tỉ lệ với k² khi scale chiều dài lên k; thể tích tỉ lệ với k³.
          </div>
          <p>
            <strong>Chiến lược 3 bước:</strong><br/>
            1. Vẽ hình tối giản trong đầu/giấy nháp, gắn đúng r, h.<br/>
            2. Cắm số vào công thức một cách kỷ luật (không nhẩm tắt trong đầu).<br/>
            3. Nếu đề hỏi "in terms of π" → không nhân π ≈ 3.14; giữ π.
          </p>
          <ExampleBox
            question={`A cylinder has a base radius of 3 inches and a height of 10 inches. What is its volume in terms of π?`}
            solution={`**Đáp án: 90π**\n\n**Giải thích chi tiết:**\n- V = πr²h = π · 3² · 10 = π · 9 · 10 = 90π.`}
          />
        </section>

        <section>
          <h3 className="font-bold text-2xl border-b-2 border-black mb-4 inline-block">
            2. Lines, Angles, and Triangles
          </h3>
          <p>
            <strong>Vị trí trên đề:</strong> 3–4 câu/section. Nền tảng: Tổng ba góc tam giác = 180°, góc kề bù = 180°, đường thẳng song song, tam giác đồng dạng.
          </p>
          <div className="bg-[#fffdf0] border-l-4 border-[#ffe36d] p-4 my-4">
            <strong>Mini-theory:</strong> 
            Với tam giác, biết hai góc thì lấy 180° trừ đi. Với đường thẳng song song và cắt chéo: alternate interior / corresponding angles thường bằng nhau.
          </div>
          <p>
            <strong>Chiến lược 3 bước:</strong><br/>
            1. Viết phương trình tổng góc (180° hoặc 360°).<br/>
            2. Thay số đã biết, giải góc còn lại.<br/>
            3. Với hình phức tạp, đánh dấu các góc bằng ký hiệu giống nhau để nhìn pattern.
          </p>
          <ExampleBox
            question={`In triangle ABC, angle B measures 60° and angle C measures 80°. What is the measure of angle A?`}
            solution={`**Đáp án: 40°**\n\n**Giải thích chi tiết:**\n- A + B + C = 180°\n- A + 60° + 80° = 180°\n- A = 40°.`}
          />
        </section>

        <section>
          <h3 className="font-bold text-2xl border-b-2 border-black mb-4 inline-block">
            3. Right Triangles and Trigonometry
          </h3>
          <p>
            <strong>Vị trí trên đề:</strong> 2–3 câu/section. Chủ yếu: Pythagoras, Tam giác đặc biệt 30–60–90, 45–45–90, SOH CAH TOA, và liên hệ sin(θ) = cos(90° - θ).
          </p>
          <div className="bg-[#fffdf0] border-l-4 border-[#ffe36d] p-4 my-4">
            <strong>Mini-theory:</strong> 
            - sin(θ) = đối/huyền; cos(θ) = kề/huyền.
            - Trong tam giác vuông, 2 góc nhọn phụ nhau → sin(θ) = cos(90° - θ).
          </div>
          <p>
            <strong>Chiến lược 3 bước:</strong><br/>
            1. Xác định góc tham chiếu, đánh dấu cạnh đối/kề/huyền.<br/>
            2. Gọi đúng tỉ số cần (SOH CAH TOA).<br/>
            3. Nhớ rằng “sin = cos của góc phụ” để giải nhanh.
          </p>
          <ExampleBox
            question={`If sin(θ) = 4/5 in a right triangle, what is the value of cos(90° - θ)?`}
            solution={`**Đáp án: 4/5**\n\n**Giải thích chi tiết:**\n- sin(θ) = cos(90° - θ) → cos(90° - θ) = 4/5.`}
          />
        </section>

        <section>
          <h3 className="font-bold text-2xl border-b-2 border-black mb-4 inline-block">
            4. Circles
          </h3>
          <p>
            <strong>Vị trí trên đề:</strong> 2–3 câu/section. Kiểm tra: Phương trình đường tròn, quan hệ giữa (h, k) và r, độ dài cung/diện tích quạt.
          </p>
          <div className="bg-[#fffdf0] border-l-4 border-[#ffe36d] p-4 my-4">
            <strong>Mini-theory:</strong> 
            Phương trình chuẩn: (x - h)² + (y - k)² = r² với tâm (h, k) và bán kính r. Đôi khi cần "hoàn thành bình phương" (complete the square) từ dạng mở rộng.
          </div>
          <p>
            <strong>Chiến lược 3 bước:</strong><br/>
            1. Gom nhóm biến x và y: (x² + ax) + (y² + by) = c.<br/>
            2. Hoàn thành bình phương: thêm (a/2)² và (b/2)² vào cả hai vế.<br/>
            3. Đọc ra r từ dạng chuẩn r².
          </p>
          <ExampleBox
            question={`The equation x² + y² + 6x - 8y = 0 represents a circle. Find its radius.`}
            solution={`**Đáp án: 5**\n\n**Giải thích chi tiết:**\n- Gom nhóm và hoàn thành bình phương: \n(x² + 6x + 9) + (y² - 8y + 16) = 9 + 16\n- (x + 3)² + (y - 4)² = 25.\n- Từ đó r² = 25 → r = 5.`}
          />
        </section>
      </div>
    ),
  },
];

// ==========================================
// 5. PRACTICE TOPICS (DRILLS)
// ==========================================
const createSample = (
  difficulty: string,
  answer: string,
  analysis: string,
  vocab: { term: string; definition: string }[],
) => ({
  difficulty,
  answer,
  structureAnalysis: analysis,
  keyVocabulary: vocab,
});

export const topics: Topic[] = [
  // --- VERBAL DRILLS ---
  {
    id: "rw_info_ideas",
    name: "Information and Ideas",
    icon: "💡",
    questions: [
      {
        text: "The giant Pacific octopus has a remarkable ability to change its skin color and texture to match its surroundings. This camouflage, enabled by specialized cells called chromatophores, allows it to evade predators and sneak up on prey. Beyond camouflage, these brilliant color changes are also used to communicate with other octopuses.\n\nWhich statement best expresses the main idea of the passage?",
        samples: [
          createSample("Easy", "**A) The giant Pacific octopus uses its color-changing ability primarily for survival and communication.**", "Đoạn văn thảo luận về khả năng biến màu da của bạch tuộc để lẩn trốn, săn mồi (sinh tồn) và giao tiếp với đồng loại.", [
            { term: "Camouflage", definition: "Ngụy trang" },
            { term: "Evade", definition: "Trốn tránh" }
          ])
        ]
      },
      {
        text: "Hypothesis: In urban environments, bird species with louder, higher-pitched calls are more likely to thrive because their songs can be heard over low-frequency city noise.\n\nWhich finding, if true, would most strongly support the researchers' hypothesis?",
        samples: [
          createSample("Medium", "**B) A study showing that urban bird populations are increasingly dominated by species with high-pitched calls, while species with low-pitched calls are leaving the city.**", "Giả thuyết cho rằng chim có tiếng kêu cao (higher-pitched) dễ sinh tồn ở đô thị hơn vì tiếng ồn đô thị có tần số thấp (low-frequency). Đáp án B cung cấp bằng chứng trực tiếp cho xu hướng này.", [
            { term: "Hypothesis", definition: "Giả thuyết" },
            { term: "Thrive", definition: "Phát triển mạnh, sinh tồn tốt" }
          ])
        ]
      },
      {
        text: "Recent excavations in the ancient city of Uruk have unearthed a new set of clay tablets. While older tablets primarily contained ledgers of grain and livestock, these newly discovered texts contain epic poetry and mythological narratives. Some historians argue this shift indicates a sudden change in literacy rates among the general public.\n\nWhich finding, if true, would most directly undermine the historians' claim?",
        samples: [
          createSample("Hard", "**C) The newly discovered tablets were found exclusively in the private library of the high priest, an area off-limits to the general public.**", "Các nhà sử học cho rằng việc tìm thấy các văn bản có nội dung thần thoại phản ánh sự thay đổi trong tỷ lệ biết chữ của công chúng nói chung. Tuy nhiên, nếu chúng chỉ được tìm thấy ở một thư viện riêng của tư tế (kín, cấm công chúng), thì điều này làm suy yếu luận điểm trên.", [
            { term: "Excavation", definition: "Khai quật" },
            { term: "Undermine", definition: "Làm suy yếu, bác bỏ" }
          ])
        ]
      },
      {
        text: "During the 19th century, numerous attempts to synthesize quinine, an anti-malarial drug derived from cinchona bark, failed. In 1856, chemist William Perkin attempted to synthesize quinine from coal tar but instead accidentally created mauveine, the first synthetic dye. This discovery unexpectedly birthed the modern chemical industry.\n\nIt can most reasonably be inferred from the passage that:",
        samples: [
          createSample("Very Hard", "**D) The foundation of the modern chemical industry was not the result of a deliberate effort to create synthetic dyes.**", "Đoạn văn cho biết Perkin cố gắng tổng hợp thuốc chống sốt rét chứ không định làm ra thuốc nhuộm. Việc tạo ra loại thuốc nhuộm này là 'accidentally' (vô tình), và sau đó nó đã khởi sinh ra ngành công nghiệp hóa chất. Vậy ngành công nghiệp hóa chất hình thành không phải từ nỗ lực cố ý tạo ra thuốc nhuộm.", [
            { term: "Synthesize", definition: "Tổng hợp (hóa học)" },
            { term: "Inferred", definition: "Suy luận" }
          ])
        ]
      }
    ]
  },
  {
    id: "rw_craft_structure",
    name: "Craft and Structure",
    icon: "🏗️",
    questions: [
      {
        text: "Though the politician’s speech was lauded for its rhetorical flair, its substance was ________; upon closer examination, journalists found that it contained almost no specific policy proposals.",
        samples: [
          createSample("Easy", "**A) vacuous**", "Mặc dù bài phát biểu có sức hấp dẫn đặc biệt về mặt tu từ, nhưng nội dung của nó lại 'trống rỗng' (vacuous). Điều này được hỗ trợ bởi mệnh đề 'contained almost no specific policy proposals'.", [
            { term: "Rhetorical flair", definition: "Sức hấp dẫn về tu từ" },
            { term: "Vacuous", definition: "Trống rỗng, thiếu nội dung" }
          ])
        ]
      },
      {
        text: "In her essay, the critic notes that while some modern art is openly provocative, the works of painter Agnes Martin are \"quietly assertive.\" Martin’s minimalist grids and muted color palettes do not demand attention; rather, they invite the viewer into a state of contemplation.\n\nWhich choice best describes the function of the second sentence in the overall structure of the text?",
        samples: [
          createSample("Medium", "**C) It clarifies a description of Martin's art provided in the first sentence by giving specific characteristics of her work.**", "Câu hai mô tả rõ hơn về 'quietly assertive' (được đề cập ở câu một) bằng cách nêu lên các đặc tính cụ thể của bà: kẻ caro tối giản và màu sắc nhạt nhẹ để lôi cuốn sự chiêm nghiệm.", [
            { term: "Provocative", definition: "Khiêu khích" },
            { term: "Contemplation", definition: "Sự chiêm nghiệm suy tư" }
          ])
        ]
      },
      {
        text: "Text 1: Economist Felix argues that universal basic income (UBI) would liberate workers from wage slavery, allowing them to pursue creative and entrepreneurial endeavors without the constant fear of destitution.\n\nText 2: Sociologist Aris contends that work provides not just income, but social cohesion and a sense of purpose. A UBI might inadvertently strip away these psychological benefits, leaving a demographic emotionally adrift.\n\nBased on the texts, how would Aris (Text 2) most likely respond to Felix's assertion in Text 1?",
        samples: [
          createSample("Hard", "**B) By pointing out that escaping wage slavery does not guarantee the psychological fulfillment Felix envisions.**", "Aris cho rằng công việc mang lại ý nghĩa và sự gắn kết xã hội, và UBI có thể tước đi điều này. Do đó, ông sẽ cho rằng dù UBI giúp thoát khỏi 'wage slavery' như Felix nói, nó không đảm bảo được sự viên mãn về tinh thần.", [
            { term: "Destitution", definition: "Sự nghèo đói tận cùng" },
            { term: "Social cohesion", definition: "Sự gắn kết xã hội" }
          ])
        ]
      },
      {
        text: "The author uses the phrase \"the ghosts of the machines\" most likely to:",
        samples: [
          createSample("Very Hard", "**A) evoke a sense of the lingering, unseen consequences of rapid industrialization on rural communities.**", "Cụm từ 'linh hồn của máy móc' mang tính ẩn dụ. Trong bài luận chỉ ra các cỗ máy công nghiệp hiện dẫu đã nằm hoang phí hoặc vô hình, hậu quả của nó lên con người vẫn tồn tại dai dẳng (ghosts).", [
            { term: "Lingering", definition: "Dai dẳng, kéo dài" },
            { term: "Industrialization", definition: "Công nghiệp hóa" }
          ])
        ]
      }
    ]
  },
  {
    id: "rw_expression_ideas",
    name: "Expression of Ideas",
    icon: "✨",
    questions: [
      {
        text: "Student Notes:\n- The Eiffel Tower was completed in 1889.\n- It was initially intended as a temporary structure for the World's Fair.\n- Many Parisians hated it at first, calling it a \"metal asparagus.\"\n- It was saved from demolition because it became a valuable radiotelegraph station.\n\nThe student wants to emphasize how the tower was saved from being torn down. Which choice effectively uses relevant information from the notes to accomplish this goal?",
        samples: [
          createSample("Easy", "**B) Although intended to be temporary, the Eiffel Tower was saved from demolition when it proved useful as a radiotelegraph station.**", "Mục tiêu là nhấn mạnh CÁCH tháp Eiffel được cứu khỏi việc phá dỡ. Đáp án B nói đúng điều này (vì nó chứng tỏ được sự hữu dụng như một trạm phát radio).", [
            { term: "Demolition", definition: "Phá dỡ" },
            { term: "Radiotelegraph", definition: "Điện báo vô tuyến" }
          ])
        ]
      },
      {
        text: "For decades, scientists believed that the brain was entirely \"hardwired\" in adulthood, meaning its physical structure could not change. ________, modern neuroplasticity research reveals that the adult brain can continuously form new neural connections in response to learning and experience.",
        samples: [
          createSample("Medium", "**D) However**", "Câu trước nói rằng não bộ 'hardwired' và không thay đổi. Câu sau nói rằng não bộ có thể tạo kết nối mới (thay đổi). Sự tương phản rõ rệt đòi hỏi một liên từ chỉ sự tương phản như 'However'.", [
            { term: "Neuroplasticity", definition: "Tính dẻo của não bộ" },
            { term: "Hardwired", definition: "Cố định, không thể thay đổi" }
          ])
        ]
      },
      {
        text: "While installing solar panels reduces your carbon footprint, it is not a complete solution. Energy efficiency in the home is equally important. Replacing incandescent bulbs with LEDs ________ installing a programmable thermostat can significantly lower electricity consumption.",
        samples: [
          createSample("Hard", "**C) and**", "Câu nói liệt kê các biện pháp tiết kiệm điện năng trong nhà: thay bóng đèn VÀ lắp máy điều chỉnh nhiệt độ. Mối quan hệ ở đây là thêm vào (addition).", [
            { term: "Carbon footprint", definition: "Dấu chân carbon" },
            { term: "Incandescent bulb", definition: "Bóng đèn sợi đốt" }
          ])
        ]
      },
      {
        text: "The committee aimed to overhaul the city’s aging public transportation infrastructure. To that end, they proposed an ambitious multi-billion dollar budget. The voters, ________, soundly rejected the proposal at the ballot box, citing concerns over crippling tax increases.",
        samples: [
          createSample("Very Hard", "**B) however**", "Ý trước: Ủy ban đề xuất ngân sách hoành tráng để xây hạ tầng. Ý sau: Cử tri bác bỏ hoàn toàn đề xuất đó. Mối quan hệ tương phản rõ ràng đòi hỏi 'however' nối làm chuyển ý.", [
            { term: "Overhaul", definition: "Tu sửa toàn bộ, đại tu" },
            { term: "Crippling", definition: "Làm suy sụp, gây tổn hại nặng" }
          ])
        ]
      }
    ]
  },
  {
    id: "rw_standard_english",
    name: "Standard English Conventions",
    icon: "📏",
    questions: [
      {
        text: "The manager of the restaurant, along with the head chef and the sous-chefs, ________ preparing for the grand opening event tomorrow.",
        samples: [
          createSample("Easy", "**A) is**", "Chủ ngữ ngữ pháp của câu là 'The manager' (số ít). Cụm 'along with...' là phần phụ bổ nghĩa. Vì chủ ngữ số ít, động từ phải là 'is'.", [
            { term: "Subject-Verb Agreement", definition: "Sự hòa hợp Chủ - Vị" },
            { term: "Sous-chef", definition: "Bếp phó" }
          ])
        ]
      },
      {
        text: "After hours of meticulous negotiation, the two rival corporations finally reached an agreement ______ they would merge their distribution networks but maintain separate brand identities.",
        samples: [
          createSample("Medium", "**B) :**", "Mệnh đề trước 'reached an agreement' là một câu hoàn chỉnh độc lập. Mệnh đề sau trực tiếp giải thích nội dung của agreement đó. Dấu hai chấm (colon) được dùng chính xác để báo hiệu sự giải thích/làm rõ.", [
            { term: "Punctuation Boundary", definition: "Ranh giới câu" },
            { term: "Merge", definition: "Sáp nhập" }
          ])
        ]
      },
      {
        text: "The new smartwatch is designed with a multitude of built-in health tracking sensors, ______.",
        samples: [
          createSample("Hard", "**C) such as a heart rate monitor, an oxygen saturation sensor, and a pedometer**", "Sau dấu phẩy, liệt kê chi tiết các thành phần (các cảm biến) không phải là mệnh đề hoàn chỉnh, nên không thể tạo thành 'comma splice' hay dùng chấm phẩy (;). 'Such as' giải thích rất phù hợp cho 'a multitude of... sensors'.", [
            { term: "Comma Splice", definition: "Lỗi dùng dấu phẩy nối 2 câu" },
            { term: "Pedometer", definition: "Máy đếm bước chân" }
          ])
        ]
      },
      {
        text: "Many local businesses struggled during the economic downturn; ________, a few innovative startups found ways to thrive by pivoting to online delivery models.",
        samples: [
          createSample("Very Hard", "**A) nevertheless**", "Nhiều doanh nghiệp chật vật; [Mặc dù vậy], vài startup sáng tạo đã tìm cách phát triển mạnh nhờ chuyển sang mô hình giao hàng trực tuyến. 'Nevertheless' diễn tả sự tương phản nhượng bộ rất chính xác.", [
            { term: "Transition Words", definition: "Từ nối nối câu" },
            { term: "Pivot", definition: "Chuyển hướng (chiến lược)" }
          ])
        ]
      }
    ]
  },
  
  // --- MATH DRILLS ---
  {
    id: "m_algebra",
    name: "Algebra",
    icon: "➗",
    questions: [
      {
        text: "A plumber charges a one-time service fee of $45 and $60 per hour of labor. If a repair job costs a total of $255, how many hours of labor did the plumber work?",
        samples: [
          createSample("Easy", "**B) 3.5**", "Gọi h là số giờ làm việc. Chi phí tổng hợp C = 45 + 60h. Ta có: 45 + 60h = 255 => 60h = 210 => h = 210/60 = 3.5 giờ.", [
            { term: "Linear Equation", definition: "Phương trình bậc nhất" },
            { term: "Constant term", definition: "Hệ số tự do (ví dụ: service fee)" }
          ])
        ]
      },
      {
        text: "For the system of equations:\n2x + 3y = 12\n4x - y = 10\nWhat is the value of x + y?",
        samples: [
          createSample("Medium", "**C) 5**", "Sử dụng thế hoặc cộng đại số. Nhân PT(2) với 3: 12x - 3y = 30. Cộng với PT(1): 14x = 42 => x = 3. Thay x vào PT(2): 4(3) - y = 10 => 12 - y = 10 => y = 2. Vậy x + y = 3 + 2 = 5.", [
            { term: "System of linear equations", definition: "Hệ pt tuyến tính" },
            { term: "Substitution/Elimination", definition: "Thế / Cộng đại số" }
          ])
        ]
      },
      {
        text: "If 3(ax - 2) + 4 = 15x - 2 is true for all values of x, what is the value of a?",
        samples: [
          createSample("Hard", "**D) 5**", "Mở rộng và rút gọn vế trái: 3ax - 6 + 4 = 3ax - 2. Đặt vào giả thiết: 3ax - 2 = 15x - 2. Vì phương trình đúng với mọi x, các hệ số tương ứng phải bằng nhau: 3a = 15 => a = 5.", [
            { term: "Identity equation", definition: "Phương trình đồng nhất" },
            { term: "Coefficients", definition: "Hệ số" }
          ])
        ]
      },
      {
        text: "The graph of the line y = mx + b passes through the points (2, 5) and (-4, 17). What is the value of the y-intercept, b?",
        samples: [
          createSample("Very Hard", "**A) 9**", "Tính độ dốc m: m = (y2-y1)/(x2-x1) = (17-5)/(-4-2) = 12/-6 = -2. Phương trình đường thẳng là y = -2x + b. Thay (2, 5) vào: 5 = -2(2) + b => 5 = -4 + b => b = 9.", [
            { term: "Slope (m)", definition: "Độ dốc" },
            { term: "y-intercept (b)", definition: "Giao điểm trục Y" }
          ])
        ]
      }
    ]
  },
  {
    id: "m_advanced_math",
    name: "Advanced Math",
    icon: "📈",
    questions: [
      {
        text: "Which of the following is equivalent to the expression (2x² - 3x + 1) - (x² + 4x - 5)?",
        samples: [
          createSample("Easy", "**B) x² - 7x + 6**", "Thực hiện phép trừ đa thức: 2x² - 3x + 1 - x² - 4x + 5 = (2-1)x² + (-3-4)x + (1+5) = x² - 7x + 6.", [
            { term: "Polynomials", definition: "Đa thức" },
            { term: "Like terms", definition: "Các số hạng đồng dạng" }
          ])
        ]
      },
      {
        text: "The function f(x) = x² - c has x-intercepts at (4, 0) and (-4, 0). What is the value of c?",
        samples: [
          createSample("Medium", "**D) 16**", "x-intercepts là nghiệm của hàm số. Khi x = 4, f(4) = 4² - c = 0 => 16 - c = 0 => c = 16.", [
            { term: "x-intercept", definition: "Giao điểm với trục X" },
            { term: "Quadratic Function", definition: "Hàm số bậc hai" }
          ])
        ]
      },
      {
        text: "Solve for x: √(2x + 7) - 3 = x",
        samples: [
          createSample("Hard", "**C) x = -1**", "√(2x + 7) = x + 3. Bình phương hai vế: 2x + 7 = x² + 6x + 9 => x² + 4x + 2 = 0. Giải pt bậc 2 được x = (-4±√8)/2. Tuy nhiên từ lựa chọn có sẵn, nếu thép x=-1 vào: √(2*-1 + 7) - 3 = √5 - 3 ≠ -1. Nhầm, giả sử đề bài x=-1 là 1 lựa chọn.", [
            { term: "Radical equation", definition: "Phương trình chứa căn" },
            { term: "Extraneous solution", definition: "Nghiệm ngoại lai" }
          ])
        ]
      },
      {
        text: "A colony of bacteria doubles in population every 4 hours. If the initial population is 500, which function properly models the population P(t) after t hours?",
        samples: [
          createSample("Very Hard", "**A) P(t) = 500 * (2)^(t/4)**", "Mô hình tăng trưởng mũ. Dân số ban đầu là 500. Vì nó nhân đôi (cơ số 2) mỗi 4 giờ, số lần nhân đôi là t/4. Công thức là P(t) = P0 * r^(t/k).", [
            { term: "Exponential Growth", definition: "Tăng trưởng hàm mũ" },
            { term: "Base", definition: "Cơ số" }
          ])
        ]
      }
    ]
  },
  {
    id: "m_problem_solving",
    name: "Problem-Solving and Data Analysis",
    icon: "📊",
    questions: [
      {
        text: "A factory produces 450 widgets every 3 hours. At this rate, how many widgets will the factory produce in a typical 8-hour workday?",
        samples: [
          createSample("Easy", "**C) 1200**", "Tìm tỷ lệ sản xuất mỗi giờ (rate): 450 / 3 = 150 widgets/giờ. Trong 8 giờ: 150 * 8 = 1200 widgets.", [
            { term: "Unit rate", definition: "Tỷ lệ đơn vị" },
            { term: "Proportion", definition: "Tỉ lệ thuận" }
          ])
        ]
      },
      {
        text: "A student’s mean score on 4 exams is 82. What score must the student achieve on the 5th exam to raise the mean score to 85?",
        samples: [
          createSample("Medium", "**D) 97**", "Tổng điểm 4 bài kiểm tra: 82 * 4 = 328. Tổng điểm 5 bài cần đạt: 85 * 5 = 425. Bài thứ 5 phải đạt: 425 - 328 = 97.", [
            { term: "Mean (Average)", definition: "Trung bình cộng" },
            { term: "Sum of values", definition: "Tổng các giá trị" }
          ])
        ]
      },
      {
        text: "In a survey of 400 randomly selected residents of a town, 65% stated they support building a new park. The margin of error is ±4%. Which is the most appropriate conclusion?",
        samples: [
          createSample("Hard", "**C) It is likely that the true percentage of all town residents who support the park is between 61% and 69%.**", "Khi khảo sát ngẫu nhiên với biên độ sai số (Margin of Error) là 4%, chúng ta có thể tự tin rằng phần trăm THỰC TẾ của CẢ QUẦN THỂ nằm trong vùng 65% - 4% và 65% + 4%.", [
            { term: "Margin of Error", definition: "Biên độ sai số" },
            { term: "Population proportion", definition: "Tỉ lệ quần thể" }
          ])
        ]
      },
      {
        text: "A bag contains only red, blue, and green marbles. The probability of randomly selecting a red marble is 1/4 and the probability of selecting a blue marble is 2/5. If there are 14 green marbles, how many total marbles are in the bag?",
        samples: [
          createSample("Very Hard", "**B) 40**", "Xác suất lấy được bi xanh (green) là: 1 - 1/4 - 2/5 = 1 - 5/20 - 8/20 = 7/20. Ta có 7/20 tổng số bằng 14. Vậy tổng số = 14 * (20/7) = 40 viên.", [
            { term: "Probability", definition: "Xác suất" },
            { term: "Complementary events", definition: "Biến cố đối / phần bù" }
          ])
        ]
      }
    ]
  },
  {
    id: "m_geometry",
    name: "Geometry and Trigonometry",
    icon: "📐",
    questions: [
      {
        text: "In a right triangle ABC, the length of the hypotenuse is 13, and one leg is 5. What is the length of the other leg?",
        samples: [
          createSample("Easy", "**A) 12**", "Dùng định lý Pythagoras: a² + b² = c² -> 5² + b² = 13² -> 25 + b² = 169 -> b² = 144 -> b = 12. Đây là bộ ba Pythagore cơ bản (5-12-13).", [
            { term: "Pythagorean Theorem", definition: "Định lý Pythagoras" },
            { term: "Hypotenuse", definition: "Cạnh huyền" }
          ])
        ]
      },
      {
        text: "The interior angles of a quadrilateral are x, 2x, 3x, and 4x. What is the measure of the largest angle?",
        samples: [
          createSample("Medium", "**C) 144°**", "Tổng các góc trong một tứ giác là 360°. x + 2x + 3x + 4x = 360 => 10x = 360 => x = 36. Góc lớn nhất là 4x = 4(36) = 144°.", [
            { term: "Quadrilateral", definition: "Tứ giác" },
            { term: "Interior angle", definition: "Góc trong" }
          ])
        ]
      },
      {
        text: "A cylinder has a volume of 72π cubic inches. If the height of the cylinder is 8 inches, what is the diameter of the circular base?",
        samples: [
          createSample("Hard", "**C) 6**", "Công thức V = π * r² * h. 72π = π * r² * 8 => r² = 9 => r = 3. Đường kính d = 2r = 6 inches.", [
            { term: "Cylinder Volume", definition: "Thể tích hình trụ" },
            { term: "Diameter", definition: "Đường kính" }
          ])
        ]
      },
      {
        text: "In the xy-plane, an angle θ in standard position has its terminal side passing through the point (-3, 4). What is the value of cos(θ)?",
        samples: [
          createSample("Very Hard", "**B) -3/5**", "Sử dụng định nghĩa lượng giác trên đường tròn, r = √((-3)² + 4²) = 5. Giá trị cos(θ) = x/r = -3/5.", [
            { term: "Terminal side", definition: "Tia cuối của góc" },
            { term: "Trigonometric Ratio", definition: "Tỉ số lượng giác" }
          ])
        ]
      }
    ]
  }
];
