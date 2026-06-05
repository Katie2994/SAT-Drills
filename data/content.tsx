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
    <div className="bg-gray-50 border-l-4 border-[#DC2323] p-6 my-6 shadow-sm">
      <h5 className="font-bold text-xs uppercase text-[#DC2323] mb-4 tracking-widest flex items-center gap-2">
        <Brain className="w-4 h-4" /> REALISTIC EXCERPT
      </h5>
      <div className="font-serif text-lg mb-6 text-gray-800 leading-relaxed border-b border-gray-200 pb-4">
        <FormattedText text={question} />
      </div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-white flex items-center justify-between p-3 border border-gray-200 font-bold text-sm text-gray-800 hover:bg-gray-100 transition-colors uppercase tracking-wide"
      >
        <span>Xem Đáp án & Giải thích chi tiết</span>
        {isOpen ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
      </button>
      {isOpen && (
        <div className="bg-white p-4 border border-t-0 border-gray-200">
          <div className="text-gray-700 text-base">
            <FormattedText text={solution} noHighlight={true} />
          </div>
          {tip && (
            <div className="mt-4 text-sm text-gray-600 bg-blue-50 p-3 rounded-lg flex gap-2 items-start">
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
      <div className="space-y-8 text-lg leading-relaxed text-gray-800">
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
          <p className="mb-4">
            Bài thi Digital SAT có tổng thời lượng{" "}
            <strong>2 tiếng 14 phút</strong>. Cấu trúc bài thi bao gồm hai phần:
            Toán (Math) và Đọc & Viết (Reading & Writing). Cụ thể như bảng sau:
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-100 border-b">
                  <th className="py-2 px-4 border font-semibold text-gray-700">
                    Phần Thi (Section)
                  </th>
                  <th className="py-2 px-4 border font-semibold text-gray-700">
                    Module
                  </th>
                  <th className="py-2 px-4 border font-semibold text-gray-700">
                    Thời gian
                  </th>
                  <th className="py-2 px-4 border font-semibold text-gray-700">
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
                <tr className="bg-gray-50 border-b">
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
          <p className="mb-4">
            Phần thi này kéo dài 64 phút với 54 câu hỏi. Các lĩnh vực nội dung
            (Content Domain) được phân bổ như sau:
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-100 border-b">
                  <th className="py-2 px-4 border font-semibold text-gray-700">
                    Lĩnh vực (Domain)
                  </th>
                  <th className="py-2 px-4 border font-semibold text-gray-700">
                    Kỹ năng đánh giá
                  </th>
                  <th className="py-2 px-4 border font-semibold text-gray-700">
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
          <p className="mb-4">
            Phần Toán kéo dài 70 phút cho 44 câu hỏi. Lĩnh vực kiến thức bao
            gồm:
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-100 border-b">
                  <th className="py-2 px-4 border font-semibold text-gray-700">
                    Lĩnh vực (Domain)
                  </th>
                  <th className="py-2 px-4 border font-semibold text-gray-700">
                    Nội dung / Mô tả
                  </th>
                  <th className="py-2 px-4 border font-semibold text-gray-700">
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
                    <p className="mt-2 text-sm text-gray-600">
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
                    <p className="mt-2 text-sm text-gray-600">
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
                    <p className="mt-2 text-sm text-gray-600">
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
                    <p className="mt-2 text-sm text-gray-600">
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
          <p className="mb-4">
            <a
              href="https://bluebook.collegeboard.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-bold hover:underline"
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
                className="text-blue-600 hover:underline"
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
          <ol className="list-decimal pl-6 space-y-2">
            <li>
              Truy cập vào{" "}
              <a
                href="https://www.collegeboard.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-bold hover:underline"
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
      <div className="space-y-8 text-lg leading-relaxed text-gray-800">
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
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
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
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
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
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
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
      <div className="space-y-8 text-lg leading-relaxed text-gray-800">
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
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
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
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
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
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
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
      <div className="space-y-8 text-lg leading-relaxed text-gray-800">
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
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
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
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
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
      <div className="space-y-8 text-lg leading-relaxed text-gray-800">
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
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
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
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
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
      <div className="space-y-8 text-lg leading-relaxed text-gray-800">
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
              className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-bold text-xl md:text-2xl mb-4 text-[#dc2323] flex items-center gap-3">
                <span className="bg-[#fffdf0] text-[#dc2323] border border-[#ffe36d] w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full text-lg shadow-sm">
                  {idx + 1}
                </span>
                {lecture.title}
              </h3>
              <div
                className="relative w-full max-w-3xl mx-auto rounded-xl overflow-hidden shadow-inner border border-gray-100 bg-gray-50 flex items-center justify-center"
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
      <div className="space-y-8 text-lg leading-relaxed text-gray-800">
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
          <div className="border border-gray-200 rounded-lg p-2 bg-white">
            <img 
              src="/mathreference.png" 
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
          <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
            <li>If you find more than one correct answer, enter <strong>only one</strong> answer.</li>
            <li>You can enter up to 5 characters for a positive answer and up to 6 characters (including the negative sign) for a negative answer.</li>
            <li>If your answer is a fraction that doesn't fit in the provided space, enter the decimal equivalent.</li>
            <li>If your answer is a decimal that doesn't fit in the provided space, enter it by truncating or rounding at the fourth digit.</li>
            <li>If your answer is a mixed number (such as 3 1/2), enter it as an improper fraction (7/2) or its decimal equivalent (3.5).</li>
            <li>Don't enter symbols such as a percent sign, comma, or dollar sign.</li>
          </ul>

          <h4 className="font-bold text-lg mb-3">Ví dụ nhập đáp án hợp lệ & không hợp lệ</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 font-bold">Answer</th>
                  <th className="border border-gray-300 px-4 py-2 font-bold">Acceptable ways to enter answer</th>
                  <th className="border border-gray-300 px-4 py-2 font-bold text-red-600">Unacceptable (will NOT receive credit)</th>
                </tr>
              </thead>
              <tbody className="text-base text-gray-700">
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-mono">3.5</td>
                  <td className="border border-gray-300 px-4 py-2">3.5<br/>3.50</td>
                  <td className="border border-gray-300 px-4 py-2 text-red-600">3 1/2</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-mono">7/2</td>
                  <td className="border border-gray-300 px-4 py-2">7/2<br/>3.5</td>
                  <td className="border border-gray-300 px-4 py-2 text-red-600">3 1/2</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-mono">2/3</td>
                  <td className="border border-gray-300 px-4 py-2">2/3<br/>.6666<br/>.6667<br/>0.666<br/>0.667</td>
                  <td className="border border-gray-300 px-4 py-2 text-red-600">0.66<br/>.66<br/>0.67<br/>.67</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-mono">-1/3</td>
                  <td className="border border-gray-300 px-4 py-2">-1/3<br/>-.3333<br/>-0.333</td>
                  <td className="border border-gray-300 px-4 py-2 text-red-600">-.33<br/>-0.33</td>
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
      <div className="space-y-8 text-lg leading-relaxed text-gray-800">
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
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
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
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
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
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
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
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
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
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
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
      <div className="space-y-8 text-lg leading-relaxed text-gray-800">
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
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
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
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
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
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
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
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
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
      <div className="space-y-8 text-lg leading-relaxed text-gray-800">
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
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
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
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
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
          <div className="my-4 bg-white p-4 border border-gray-200 rounded text-center">
            <svg width="250" height="200" viewBox="0 0 250 200" className="mx-auto rounded shadow-sm bg-gray-50">
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
            <p className="text-sm mt-2 text-gray-500 italic">Hình minh hoạ: Scatterplot và Line of best fit (đường xu hướng) biểu diễn sự tương quan dương.</p>
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
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
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
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
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
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
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
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
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
      <div className="space-y-8 text-lg leading-relaxed text-gray-800">
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
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
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
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
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
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
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
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
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
  // --- MATH DRILLS ---
  {
    id: "math_algebra",
    name: "Algebra: Linear Systems & Eq",
    icon: "➗",
    questions: [
      {
        text: "If 3(x - 4) + 5 = 20, what is the value of 2x?\nA) 9\nB) 10\nC) 18\nD) 27",
        samples: [
          createSample(
            "Easy",
            "**C) 18**",
            "Giải phương trình:\n3(x - 4) + 5 = 20\n3x - 12 + 5 = 20\n3x - 7 = 20\n3x = 27\nx = 9\nDo đó, 2x = 2 * 9 = 18.",
            [
              { term: "Isolation", definition: "Cô lập ẩn số" },
              { term: "Distribution", definition: "Phân phối hệ số" },
            ],
          ),
        ],
      },
      {
        text: "A plumber charges a flat travel fee of $50 plus an hourly rate of $45. Which of the following functions C(h) represents the total cost, in dollars, for h hours of work?\nA) C(h) = 50h + 45\nB) C(h) = 45h + 50\nC) C(h) = 95h\nD) C(h) = 45h",
        samples: [
          createSample(
            "Easy",
            "**B) C(h) = 45h + 50**",
            "Phí cố định (y-intercept) là $50. Chi phí tăng thêm trên mỗi giờ (slope) là $45. Do đó phương trình có dạng C(h) = 45h + 50.",
            [
              {
                term: "y-intercept",
                definition: "Điểm cắt trục y, giá trị khởi điểm",
              },
              { term: "Slope", definition: "Hệ số góc, tốc độ thay đổi" },
            ],
          ),
        ],
      },
      {
        text: "The equation 12x + 8y = 120 represents a farmer selling x bags of apples for $12 each and y bags of oranges for $8 each to earn $120. If they sell 6 bags of apples, how many bags of oranges did they sell?\nA) 3\nB) 4\nC) 6\nD) 8",
        samples: [
          createSample(
            "Easy",
            "**C) 6**",
            "Thế x = 6 vào phương trình:\n12(6) + 8y = 120\n72 + 8y = 120\n8y = 48\ny = 6.",
            [{ term: "Substitution", definition: "Phép thế" }],
          ),
        ],
      },
      {
        text: "The system of equations below has how many real solutions?\ny = 2x + 3\n2y - 4x = 6\nA) Zero\nB) Exactly one\nC) Exactly two\nD) Infinitely many",
        samples: [
          createSample(
            "Medium",
            "**D) Infinitely many**",
            "Chia cả hai vế của phương trình thứ hai cho 2:\ny - 2x = 3 => y = 2x + 3.\nHai phương trình thực chất trùng nhau hoàn toàn, do đó hệ phương trình có vô số nghiệm.",
            [
              { term: "System of Equations", definition: "Hệ phương trình" },
              {
                term: "Infinite Solutions",
                definition: "Vô số nghiệm, hai đường thẳng trùng nhau",
              },
            ],
          ),
        ],
      },
      {
        text: "Which of the following is the solution to the inequality: -2x + 6 < 14?\nA) x > -4\nB) x < -4\nC) x > 4\nD) x < 4",
        samples: [
          createSample(
            "Medium",
            "**A) x > -4**",
            "Trừ hai vế cho 6:\n-2x < 8\nChia hai vế cho -2 (lưu ý: phải đổi chiều bất đẳng thức khi chia cho số âm):\nx > -4.",
            [
              { term: "Inequality", definition: "Bất phương trình" },
              { term: "Reverse sign", definition: "Đổi chiều dấu" },
            ],
          ),
        ],
      },
    ],
  },
  {
    id: "math_advanced",
    name: "Adv Math: Quadratics",
    icon: "🚀",
    questions: [
      {
        text: "Which of the following expressions is equivalent to (x³ * x⁴) / (x⁻²)? (Assume x is non-zero)\nA) x⁵\nB) x⁶\nC) x⁹\nD) x¹⁴",
        samples: [
          createSample(
            "Medium",
            "**C) x⁹**",
            "Áp dụng các quy tắc số mũ:\n- Nhân hai lũy thừa cùng cơ số: x³ * x⁴ = x^(3+4) = x⁷\n- Chia hai lũy thừa cùng cơ số: x⁷ / x⁻² = x^(7 - (-2)) = x⁹.",
            [
              { term: "Exponent Rules", definition: "Quy tắc lũy thừa" },
              {
                term: "Equivalent Expression",
                definition: "Biểu thức tương đương",
              },
            ],
          ),
        ],
      },
      {
        text: "Solve the system of equations:\ny = x² - 4x + 3\ny = 2x - 5\nWhich of the following is a valid solution for x?\nA) x = 2\nB) x = 3\nC) x = 5\nD) x = 8",
        samples: [
          createSample(
            "Hard",
            "**A) x = 2**",
            "Thiết lập phương trình hoành độ giao điểm (thế y):\nx² - 4x + 3 = 2x - 5\nx² - 6x + 8 = 0\nPhân tích thành nhân tử: (x - 2)(x - 4) = 0\nNghiệm là x = 2 hoặc x = 4. Trong các lựa chọn đáp án, chỉ có A (x=2) là khớp.",
            [
              {
                term: "Nonlinear System",
                definition: "Hệ phương trình phi tuyến",
              },
              { term: "Factoring", definition: "Phân tích thành nhân tử" },
            ],
          ),
        ],
      },
      {
        text: "A quadratic function is defined as f(x) = x² - 6x + 8. At which of the following x-values does the function reach its minimum value?\nA) x = 2\nB) x = 3\nC) x = 4\nD) x = 8",
        samples: [
          createSample(
            "Medium",
            "**B) x = 3**",
            "Sử dụng công thức tọa độ x của đỉnh Parabol:\nx_vertex = -b / (2a) = -(-6) / (2 * 1) = 3.\nHoặc viết lại dưới dạng đỉnh (Vertex Form): f(x) = (x - 3)² - 1. Đỉnh là (3, -1), vì hệ số a=1 > 0 nên parabol hướng lên, đạt cực tiểu tại x = 3.",
            [
              { term: "Vertex of Parabol", definition: "Đỉnh Parabol" },
              { term: "Minimum Value", definition: "Giá trị cực tiểu" },
            ],
          ),
        ],
      },
    ],
  },
  {
    id: "math_data",
    name: "Data: Ratios & Stats",
    icon: "📊",
    questions: [
      {
        text: "At a local bakery, the ratio of cupcakes sold to croissants sold is 3 to 5. If the bakery sold 120 cupcakes on Tuesday, how many croissants were sold?\nA) 72\nB) 100\nC) 200\nD) 360",
        samples: [
          createSample(
            "Easy",
            "**C) 200**",
            "Tỷ số Cupcakes / Croissant = 3 / 5.\nLập tỉ lể thức: 120 / x = 3 / 5 => 3x = 120 * 5 = 600 => x = 200.",
            [
              { term: "Ratio", definition: "Tỉ số, tỉ lệ" },
              { term: "Proportion", definition: "Tỉ lệ thức" },
            ],
          ),
        ],
      },
      {
        text: "A computer's price is reduced by 20% to a sale price of $800. What was its original price?\nA) $960\nB) $1000\nC) $1200\nD) $1250",
        samples: [
          createSample(
            "Medium",
            "**B) $1000**",
            "Gọi giá gốc là x. Sau khi giảm 20%, giá bán bằng 80% giá gốc => 0.8x = 800.\n=> x = 800 / 0.8 = 1000.",
            [{ term: "Percentage decrease", definition: "Giảm phần trăm" }],
          ),
        ],
      },
      {
        text: "The score table of a history quiz:\nScore | Frequency\n70    | 3\n80    | 5\n90    | 4\n100   | 2\nWhat is the median quiz score for reference?\nA) 80\nB) 85\nC) 90\nD) 95",
        samples: [
          createSample(
            "Medium",
            "**A) 80**",
            "Tổng số học sinh tham gia là 14. Trung vị nằm ở trung bình cộng của số hạng thứ 7 và thứ 8.\n- Phân bố điểm số theo thứ tự tăng dần:\n  - 3 số hạng đầu tiên là 70\n  - 5 số hạng tiếp theo (từ thứ 4 đến thứ 8) là 80\n- Vì vậy, số hạng thứ 7 và thứ 8 đều là 80. Trung vị (Median) là 80.",
            [
              { term: "Median", definition: "Trung vị" },
              { term: "Frequency", definition: "Tần số xuất hiện" },
            ],
          ),
        ],
      },
      {
        text: "The line of best fit for a scatterplot relating study hours x to exam score y is y = 5.5x + 40. What does the y-intercept represent?\nA) The estimated exam score for a student who studied 0 hours.\nB) The number of hours needed to score 40 points.\nC) The increase in exam score for each additional hour of study.\nD) The maximum possible exam score.",
        samples: [
          createSample(
            "Medium",
            "**A) The estimated exam score for a student who studied 0 hours.**",
            "Giao điểm y-intercept là giá trị của y khi x = 0. Trong ngữ cảnh này, x là số giờ học, y là điểm số. Vậy y-intercept (40) chính là dự đoán điểm thi nếu học sinh không học giờ nào.",
            [
              {
                term: "Line of best fit",
                definition: "Đường thẳng hồi quy / Đường xu hướng",
              },
              { term: "y-intercept", definition: "Giao điểm với trục y" },
            ],
          ),
        ],
      },
      {
        text: "Table: \n- Male: 15 Biology, 10 Physics\n- Female: 20 Biology, 5 Physics\nIf a biology student is chosen at random, what is the probability they are male?\nA) 3/7\nB) 1/2\nC) 3/10\nD) 4/7",
        samples: [
          createSample(
            "Medium",
            "**A) 3/7**",
            "Không gian mẫu giới hạn chỉ xét sinh viên Biology là 35 người (15 nam + 20 nữ). Số nam trong nhóm này là 15. Xác suất là 15 / 35 = 3 / 7.",
            [
              {
                term: "Conditional Probability",
                definition: "Xác suất có điều kiện",
              },
            ],
          ),
        ],
      },
      {
        text: "A survey of 1,000 randomly selected voters shows 52% support Candidate A with a margin of error of 3%. What is the most reasonable conclusion?\nA) Exactly 52% of all voters support Candidate A.\nB) Candidate A will definitely win the election.\nC) The true percentage of all voters who support Candidate A is likely between 49% and 55%.\nD) The survey size of 1,000 is too small to draw any conclusions.",
        samples: [
          createSample(
            "Hard",
            "**C) The true percentage of all voters who support Candidate A is likely between 49% and 55%.**",
            "Biên độ sai số (Margin of Error) cộng và trừ vào ước lượng điểm (52%) tạo thành khoảng tin cậy. Vậy có khả năng lớn là sự ủng hộ thực tế của CẢ QUẦN THỂ nằm trong dải 49% đến 55%.",
            [
              { term: "Margin of Error", definition: "Biên độ sai số" },
              { term: "Population parameter", definition: "Tham số quần thể" },
            ],
          ),
        ],
      },
      {
        text: "To establish that a new fertilizer causes plants to grow faster than standard ones, which study methodology is required?\nA) An observational study counting wild plants.\nB) An experiment with plants randomly assigned to use either the new or old fertilizer.\nC) A survey asking farmers their opinions on the fertilizer.\nD) Measuring the growth of plants that naturally receive more sunlight.",
        samples: [
          createSample(
            "Medium",
            "**B) An experiment with plants randomly assigned to use either the new or old fertilizer.**",
            "Để chứng minh mối quan hệ nhân-quả (cause and effect), phương pháp duy nhất được chấp nhận là một thử nghiệm ngẫu nhiên có kiểm soát (randomized experiment), nơi các đối tượng được gán ngẫu nhiên vào các nhóm treat/control.",
            [
              { term: "Experiment", definition: "Thí nghiệm khoa học" },
              { term: "Random assignment", definition: "Chỉ định ngẫu nhiên" },
            ],
          ),
        ],
      },
    ],
  },
  {
    id: "math_geom",
    name: "Geom: Circles & Trig",
    icon: "📐",
    questions: [
      {
        text: "A right triangle has a hypotenuse of length 15 and one leg of length 9. What is the length of the other leg?\nA) 6\nB) 8\nC) 12\nD) 14",
        samples: [
          createSample(
            "Easy",
            "**C) 12**",
            "Áp dụng định lý Pythagoras trong tam giác vuông: a² + b² = c²\n=> 9² + b² = 15² => 81 + b² = 225 => b² = 144 => b = 12.",
            [
              { term: "Pythagorean Theorem", definition: "Định lý Pythagore" },
              {
                term: "Hypotenuse",
                definition: "Cạnh huyền (cạnh dài nhất đối diện góc vuông)",
              },
            ],
          ),
        ],
      },
      {
        text: "In a right triangle ABC, sin(A) = 5/13. What is the value of cos(90° - A)?\nA) 5/13\nB) 12/13\nC) 8/13\nD) 13/5",
        samples: [
          createSample(
            "Medium",
            "**A) 5/13**",
            "Sử dụng tính chất lượng giác của hai góc phụ nhau (Complementary Angles):\nsin(θ) = cos(90° - θ).\nVì vậy, cos(90° - A) = sin(A) = 5/13.",
            [
              {
                term: "Complementary Angles",
                definition: "Góc phụ nhau (tổng bằng 90 độ)",
              },
              {
                term: "Trigonometric Identity",
                definition: "Hệ thức lượng giác, hằng đẳng thức",
              },
            ],
          ),
        ],
      },
      {
        text: "A cylinder has a base radius of 3 inches and a height of 10 inches. What is its volume in terms of π?\nA) 30π\nB) 60π\nC) 90π\nD) 120π",
        samples: [
          createSample(
            "Medium",
            "**C) 90π**",
            "Công thức thể tích hình trụ: V = πr²h\n=> V = π * (3)² * 10 = π * 9 * 10 = 90π cubic inches.",
            [{ term: "Volume of Cylinder", definition: "Thể tích khối trụ" }],
          ),
        ],
      },
      {
        text: "The equation x² + y² + 6x - 8y = 0 represents a circle in the xy-plane. What is its radius?\nA) 5\nB) 10\nC) 16\nD) 25",
        samples: [
          createSample(
            "Hard",
            "**A) 5**",
            "Đưa về dạng phương trình chuẩn bằng cách hoàn thành bình phương:\n(x² + 6x + 9) + (y² - 8y + 16) = 9 + 16\n(x + 3)² + (y - 4)² = 25\nBởi vì vế phải bằng r², ta có r² = 25 => r = 5.",
            [
              {
                term: "Circle Equation",
                definition: "Phương trình đường tròn",
              },
              {
                term: "Completing the square",
                definition: "Hoàn chỉnh bình phương",
              },
            ],
          ),
        ],
      },
    ],
  },

  // --- VERBAL DRILLS ---
  {
    id: "rw_craft",
    name: "Craft: Words & Structure",
    icon: "📝",
    questions: [
      {
        text: "Critics often describe the author's writing style as anything but ______; while her narratives boast elaborate, highly descriptive language, they often avoid the complex and dense jargon typical of contemporary academic prose.\nA) simple\nB) florid\nC) simplistic\nD) inaccessible",
        samples: [
          createSample(
            "Medium",
            "**D) inaccessible**",
            "Cụm từ 'anything but' mang nghĩa ngược lại hoàn toàn (không đời nào, không hề). \nNgữ cảnh chỉ ra câu văn của cô ấy rất tỉ mỉ, đầy tính mô tả (boast elaborate) nhưng lại hoàn toàn tránh những ngôn từ phức tạp học thuật (avoid jargon). Điều này hàm ý rằng văn của cô ấy rất dễ tiếp cận và dễ hiểu.\nVậy nó 'không hề khó tiếp cận / inaccessible'.",
            [
              {
                term: "Anything but",
                definition: "Không đời nào, hoàn toàn ngược lại",
              },
              { term: "Inaccessible", definition: "Khó tiếp cận, khó hiểu" },
            ],
          ),
        ],
      },
      {
        text: "The play's adaptation is remarkably true to the original text. While some directors insist on updating historical settings to modern-day environments, she made the ______ decision to retain the authentic 19th-century backdrop, keeping the aesthetic coherent.\nA) radical\nB) conservative\nC) erratic\nD) subverted",
        samples: [
          createSample(
            "Medium",
            "**B) conservative**",
            "Việc kiên quyết giữ nguyên bối cảnh lịch sử nguyên bản thế kỷ 19 thay vì chuyển đổi sang hiện đại thể hiện sự lựa chọn truyền thống, gìn giữ phong cách nguyên gốc.\nTừ 'conservative' (bảo tồn, truyền thống, cẩn trọng) phản ánh chính xác nhất quyết định giữ lại backdrop này.",
            [
              { term: "Retain", definition: "Gìn giữ, duy trì cái cũ" },
              {
                term: "Conservative",
                definition: "Truyền thống, mang tính bảo tồn",
              },
            ],
          ),
        ],
      },
      {
        text: 'Text 1: Philosophers have long argued that AI cannot truly "think" because it lacks consciousness. It merely processes data based on algorithms.\n\nText 2: Recent breakthroughs in neural networks suggest AI can exhibit creativity and intuition, blurring the line between programmed response and genuine thought.\n\nBased on Text 2, how would the author likely respond to the claim in Text 1?\nA) By agreeing that algorithms prevent consciousness.\nB) By suggesting that "thinking" may not strictly require biological consciousness.\nC) By asserting that AI already possesses human-like feelings.\nD) By disregarding the importance of algorithms altogether.',
        samples: [
          createSample(
            "Hard",
            '**B) By suggesting that "thinking" may not strictly require biological consciousness.**',
            "Text 2 cho rằng khả năng của AI đang làm mờ ranh giới tư duy (blurring the line). Tác giả Text 2 sẽ chỉ ra định nghĩa về suy nghĩ của Text 1 là quá hẹp.",
            [
              { term: "Consciousness", definition: "Ý thức" },
              { term: "Blurring the line", definition: "Làm mờ ranh giới" },
            ],
          ),
        ],
      },
    ],
  },
  {
    id: "rw_info",
    name: "Info: Evidence & Inference",
    icon: "🔎",
    questions: [
      {
        text: "Worker termites partition roles, but recent studies reveal they can selectively feed certain larvae, effectively determining which individuals will become future reproductive elites.\nWhich statement best expresses the main idea of the passage?\nA) Queen termites determine larvae diet.\nB) Worker termites exert a significant level of control over colony reproduction.\nC) Termite colonies are highly inefficient.\nD) Larvae independently choose their roles to become elites.",
        samples: [
          createSample(
            "Medium",
            "**B) Worker termites exert a significant level of control over colony reproduction.**",
            "Bài viết chỉ ra ong thợ (workers) có quyền quyết định một con non (larvae) sẽ trở thành tầng lớp sinh sản (reproductive elites) thông qua chế độ dinh dưỡng, điều mà trước đây ta không nghĩ tới.",
            [
              { term: "Partition roles", definition: "Phân chia vai trò" },
              {
                term: "Reproductive elites",
                definition: "Tầng lớp sinh sản ưu tú",
              },
            ],
          ),
        ],
      },
      {
        text: "Many bird species migrate south for the winter to seek richer food supplies. However, studies show that Blue Jays inside cold northern forests will stay year-round if they have continuous access to human-provided bird feeders containing seeds and nuts.\nWhich finding, if true, would most strongly support the hypothesis that food availability, rather than temperature, is the primary driver of Blue Jay migration?\nA) Blue Jays in captivity survive freezing temperatures with artificial heating.\nB) Blue Jays remain in freezing forests during extreme winter months as long as feeders are full.\nC) Blue Jays migrate south in mild autumns when local acorn crops fail.\nD) Blue Jays migrating south consume a wider variety of seeds than those staying north.",
        samples: [
          createSample(
            "Hard",
            "**B) Blue Jays remain in freezing forests during extreme winter months as long as feeders are full.**",
            "Giả thuyết cần hỗ trợ là: Sự dồi dào thức ăn (Food availability) chức không phải nhiệt độ (temperature) mới là nhân tố quyết định việc di cư.\n- Khớp với dữ kiện: Blue Jays vẫn ở lại những khu rừng lạnh giá khắc nghiệt miễn là máng thức ăn của con người đầy hạt. Điều này chứng minh nhiệt độ không ép buộc chúng di cư, miễn là có ăn.",
            [
              { term: "Driver", definition: "Nhân tố thúc đẩy" },
              {
                term: "Hypothesis support",
                definition: "Củng cố giả thuyết khoa học",
              },
            ],
          ),
        ],
      },
      {
        text: "Ecologists argue that non-native flowering plants can inadvertently benefit native insect populations by providing crucial alternative foraging resources during late-summer drought crises.\nWhich of the following findings, if true, would most directly support the ecologists' claim?\nA) Native bees in drought-affected prairies with non-native dandelions exhibited 40% higher survival rates than bees in prairies without dandelions.\nB) Non-native dandelions compete with native flowers for water and soil nutrients in wet valleys.\nC) Native insects generally prefer foraging on native wildflower species when both are available.\nD) Late-summer drought causes a severe decline in both native and non-native flower populations.",
        samples: [
          createSample(
            "Hard",
            "**A) Native bees in drought-affected prairies with non-native dandelions exhibited 40% higher survival rates than bees in prairies without dandelions.**",
            "Ý kiến cần chứng minh: Cây hoa ngoại lai (non-native) giúp ích không ngờ cho côn trùng bản địa bằng cách làm nguồn thức ăn bổ trợ trong khủng hoảng khô hạn (drought).\n- Phương án A chỉ ra mối liên quan trực tiếp: tỉ lệ sống của ong bản xứ cao hơn tới 40% ở nơi có loài hoa ngoại lai (non-native dandelions) xuất hiện khi gặp hạn hán.",
            [
              {
                term: "Inadvertently",
                definition: "Vô tình, không chú ý nhưng có lợi",
              },
              {
                term: "Foraging resources",
                definition: "Nguồn thức ăn tự nhiên",
              },
            ],
          ),
        ],
      },
    ],
  },
  {
    id: "rw_expression",
    name: "Expr: Transitions & Synthes",
    icon: "🔗",
    questions: [
      {
        text: "Ancient mapmaking was notoriously subjective, relying heavily on folklore and unverified traveler tales. ______, modern cartography relies on high-resolution satellite imagery and geographic information systems (GIS) to achieve millimeter-level accuracy.\nA) Similarly,\nB) For instance,\nC) Consequently,\nD) Conversely,",
        samples: [
          createSample(
            "Easy",
            "**D) Conversely,**",
            "Câu thứ nhất nói về bản đồ thời cổ đại lập ra một cách chủ quan, thiếu kiểm chứng (subjective, unverified).\nCâu thứ hai nói về kỹ thuật làm bản đồ hiện đại cực kỳ chính xác nhờ vệ tinh địa lý (high-resolution satellite, millimeter accuracy).\nMối quan hệ giữa cổ đại và hiện đại ở đây là đối lập trực tiếp. Liên từ thể hiện sự tương phản phù hợp nhất là 'Conversely' (Ngược lại).",
            [
              { term: "Cartography", definition: "Bản đồ học" },
              { term: "Conversely", definition: "Trái lại, ngược lại" },
            ],
          ),
        ],
      },
      {
        text: "While researching a topic, a student has taken the following notes:\n- Anglerfish have a bioluminescent lure filled with symbiotic bacteria.\n- They live in deepocean waters over 1,000 meters below the surface.\n- This glowing lure attracts unsuspecting prey in the pitch-black water.\nThe student wants to emphasize the biological function of the anglerfish's lure. Which choice most effectively uses relevant information from the notes to accomplish this goal?\nA) Living over 1,000 meters deep, the anglerfish relies on bacteria for light.\nB) Filled with bacteria, the anglerfish's glowing lure is a main feature of the species.\nC) In the pitch-black deep sea, the anglerfish employs its glowing lure to attract prey.\nD) At depths over 1,000 meters, anglerfish have lights that are bioluminescent.",
        samples: [
          createSample(
            "Medium",
            "**C) In the pitch-black deep sea, the anglerfish employs its glowing lure to attract prey.**",
            "Đọc kỹ yêu cầu đề: nhấn mạnh chức năng sinh học (biological function) của bộ phận bẫy mồi (lure).\n- Câu C ghi rõ chức năng sinh học: dùng bẫy phát sáng để dụ con mồi (to attract prey). Các câu còn lại chỉ mô tả cấu tạo hoặc độ sâu phân bố đơn thuần.",
            [
              { term: "Bioluminescent", definition: "Phát quang sinh học" },
              { term: "Attract prey", definition: "Thu hút dụ dỗ con mồi" },
            ],
          ),
        ],
      },
    ],
  },
  {
    id: "rw_conventions",
    name: "Grammar: Boundaries & Form",
    icon: "✍️",
    questions: [
      {
        text: "The research team gathered extensive soil samples from three primary locations ______ surveys, deep core drillings, and riverbed sediments.\nA) locations, these were:\nB) locations:\nC) locations;\nD) locations, including:",
        samples: [
          createSample(
            "Medium",
            "**B) locations:**",
            "Ta sử dụng dấu hai chấm (:) để giới thiệu một danh sách liệt kê danh từ ở mệnh đề độc lập đứng đằng trước. Việc dùng thêm từ như 'these were:' hay 'including:' sau dấu hai chấm hoặc dấu phẩy là dư thừa cấu trúc.",
            [
              { term: "Punctuation Rules", definition: "Quy tắc dấu câu" },
              {
                term: "Colon Usage",
                definition: "Quy tắc dùng dấu hai chấm để liệt kê",
              },
            ],
          ),
        ],
      },
      {
        text: "The committee of international environmental policy researchers ______ currently preparing a comprehensive guide for global carbon reduction.\nA) is\nB) are\nC) were\nD) have been",
        samples: [
          createSample(
            "Medium",
            "**A) is**",
            "Cần xác định đúng chủ ngữ thực của câu. Cụm danh từ 'The committee of international environmental policy researchers' có danh từ cốt lõi đứng trước 'of' là 'The committee' (Ủy ban) - đây là danh từ số ít chỉ tập hợp. Do đó động từ phải ở dạng số ít là 'is'.",
            [
              {
                term: "Subject-Verb Agreement",
                definition: "Sự hòa hợp giữa chủ ngữ và động từ",
              },
              { term: "Collective Noun", definition: "Danh từ tập hợp" },
            ],
          ),
        ],
      },
    ],
  },
];
