import { VocabCard } from '../../types';

export const vocabList: VocabCard[] = [
  // --- HIGH UTILITY ACADEMIC WORDS ---
  {
    id: 1,
    term: "Corroborate",
    definition: "Làm chứng, xác thực hoặc củng cố một quan điểm/lý thuyết.",
    type: "vocab",
    icon: "✅🔍",
    note: "Command of Evidence",
    example: "Recent data corroborates the scientist's theory."
  },
  {
    id: 2,
    term: "Disparage",
    definition: "Xem thường, miệt thị hoặc chỉ trích.",
    type: "vocab",
    icon: "👎🗣️",
    example: "He never missed an opportunity to disparage his competitors."
  },
  {
    id: 3,
    term: "Pragmatic",
    definition: "Thực dụng, thực tế, giải quyết vấn đề dựa trên thực tiễn.",
    type: "vocab",
    icon: "🧠🛠️",
    example: "We need a pragmatic solution, not a theoretical one."
  },
  {
    id: 4,
    term: "Ambivalent",
    definition: "Có cảm xúc lẫn lộn, mâu thuẫn (vừa thích vừa ghét).",
    type: "vocab",
    icon: "🤷‍♂️⚖️",
    note: "Tone/Attitude questions",
    example: "She remained ambivalent about the move."
  },
  {
    id: 5,
    term: "Empirical",
    definition: "Dựa trên thực nghiệm/quan sát thay vì lý thuyết.",
    type: "vocab",
    icon: "🧪📊",
    example: "Empirical evidence suggests the drug is effective."
  },
  {
    id: 6,
    term: "Substantiate",
    definition: "Chứng minh, cung cấp bằng chứng cụ thể.",
    type: "vocab",
    icon: "🏗️📄",
    example: "The lawyer could not substantiate the allegations."
  },
  {
    id: 7,
    term: "Anomalous",
    definition: "Bất thường, dị biệt, không theo quy luật.",
    type: "vocab",
    icon: "👽📉",
    example: "The result was anomalous compared to the trend."
  },
  {
    id: 8,
    term: "Plausible",
    definition: "Hợp lý, đáng tin cậy (dù chưa chắc chắn đúng).",
    type: "vocab",
    icon: "🤔✅",
    example: "A plausible explanation for the sudden drop in sales."
  },

  // --- MATH CONCEPTS ---
  {
    id: 101,
    term: "Slope-Intercept Form",
    definition: "y = mx + b. Phương trình đường thẳng dạng hệ số góc và điểm cắt y.",
    type: "concept",
    icon: "📈",
    note: "m=Slope, b=Y-intercept",
    example: "y = 2x + 5 (Slope = 2, cắt y tại 5)."
  },
  {
    id: 102,
    term: "Discriminant",
    definition: "Δ = b² - 4ac. Biệt thức xác định số nghiệm thực của phương trình bậc 2.",
    type: "concept",
    icon: "✨",
    note: "Δ > 0: 2 nghiệm, Δ = 0: 1 nghiệm kép, Δ < 0: vô nghiệm thực",
    example: "x² + 4x + 4 có Δ = 4² - 4(1)(4) = 0 => 1 nghiệm thực duy nhất."
  },
  {
    id: 103,
    term: "SOH CAH TOA",
    definition: "Tỉ số lượng giác trong tam giác vuông: Sin=Opp/Hyp, Cos=Adj/Hyp, Tan=Opp/Adj.",
    type: "concept",
    icon: "📐",
    note: "Trig ratios for right triangles",
    example: "Với góc 45°: Sin(45°) = √2/2, Cos(45°) = √2/2, Tan(45°) = 1."
  },
  {
    id: 104,
    term: "Vertex Form",
    definition: "y = a(x - h)² + k. Phương trình parabol dạng đỉnh, với Đỉnh (Vertex) là (h, k).",
    type: "concept",
    icon: "🥣",
    note: "Cực tiểu khi a > 0, cực đại khi a < 0",
    example: "y = -2(x - 3)² + 7 => Đỉnh (3, 7) là điểm cực đại."
  },
  {
    id: 105,
    term: "Margin of Error",
    definition: "Biên độ sai số biểu thị độ tin cậy của khảo sát dân số dựa trên mẫu.",
    type: "concept",
    icon: "📊",
    note: "Kích thước mẫu (sample size) tăng → Biên độ sai số giảm",
    example: "52% ủng hộ ứng viên A với biên sai số 4% tức khoảng ủng hộ thực tế là 48% - 56%."
  },
  {
    id: 106,
    term: "System of Linear Equations",
    definition: "Hệ phương trình tuyến tính hai ẩn. Nghiệm là điểm giao nhau của hai đường thẳng.",
    type: "concept",
    icon: "🤝",
    note: "Giải bằng phương pháp thế, cộng đại số hoặc dò đồ thị trên Desmos",
    example: "Hệ x+y=5 và x-y=1 có nghiệm giao tại điểm (3,2)."
  },
  {
    id: 107,
    term: "Linear Inequality",
    definition: "Bất phương trình tuyến tính. Lưu ý: Đảo ngược dấu bất đẳng thức khi nhân/chia hai vế cho số âm.",
    type: "concept",
    icon: "⚠️",
    note: "Đảo chiều dấu khi nhân hoặc chia với số âm!",
    example: "-3x < 9 => x > -3."
  },
  {
    id: 108,
    term: "Equivalent Expressions",
    definition: "Các biểu thức tương đương. Biến đổi rút gọn đa thức, phân thức mà không thay đổi giá trị gốc.",
    type: "concept",
    icon: "🔄",
    note: "Mẹo SAT: Thế số nhỏ ngẫu nhiên (như x=2) vào đề và đáp án để so kết quả",
    example: "(x - 3)(x + 2) tương đương với x² - x - 6."
  },
  {
    id: 109,
    term: "Exponential Growth & Decay",
    definition: "Hàm mũ tăng trưởng/suy giảm: y = a(1 ± r)^t. Trong đó r là tỷ lệ phần trăm thay đổi.",
    type: "concept",
    icon: "📈📉",
    note: "Hệ số (1+r) > 1 → Tăng trưởng, (1-r) < 1 → Suy giảm",
    example: "y = 100(1.05)^t đại diện tăng trưởng 5% mỗi chu kỳ t."
  },
  {
    id: 110,
    term: "Standard Deviation",
    definition: "Độ lệch chuẩn. Đo lường mức độ phân tán hoặc biến thiên của một tập dữ liệu so với số trung bình.",
    type: "concept",
    icon: "🧬",
    note: "Dữ liệu càng dàn trải xa số trung bình → Độ lệch chuẩn càng lớn",
    example: "Tập {1, 10, 20} có độ lệch chuẩn lớn hơn tập {9, 10, 11}."
  },
  {
    id: 111,
    term: "Mean, Median, Mode, Range",
    definition: "Trung bình cộng, trung vị (số đứng giữa), mốt (số lặp lại nhiều nhất), khoảng biến thiên (Max - Min).",
    type: "concept",
    icon: "🔢",
    note: "Nếu có giá trị ngoại lai (outliers) quá lớn hoặc quá bé: Median ổn định hơn Mean",
    example: "Tập {3, 5, 5, 8, 9} => Mean = 6, Median = 5, Mode = 5, Range = 6 (9-3)."
  },
  {
    id: 112,
    term: "Line of Best Fit",
    definition: "Đường xu hướng vẽ xuyên qua biểu đồ điểm phân tán (scatterplot) để dự báo xu thế.",
    type: "concept",
    icon: "📏",
    note: "Hệ số góc (slope) là tỉ lệ thay đổi ước tính, y-intercept là giá trị ban đầu",
    example: "y = 3x + 10 chỉ ra mỗi đơn vị x tăng làm y tăng 3 đơn vị; y ban đầu là 10."
  },
  {
    id: 113,
    term: "Conditional Probability",
    definition: "Xác suất có điều kiện. Tính xác suất của biến cố A khi biết biến cố B đã xảy ra. Thu hẹp mẫu khảo sát.",
    type: "concept",
    icon: "🎯❌",
    note: "Mẫu số không phải là toàn bộ bảng mà là nhóm điều kiện đã cho!",
    example: "Chọn trong nhóm nam sinh: Xác suất nam sinh học Sinh học = (Nam học Sinh) / (Tổng số Nam)."
  },
  {
    id: 114,
    term: "Observational Study vs. Experiment",
    definition: "Nghiên cứu quan sát (không can thiệp) đối lập với Thí nghiệm (có can thiệp tác nhân và đối chứng nhóm).",
    type: "concept",
    icon: "🔬",
    note: "Chỉ Thí nghiệm lâm sàng (Experiment) mới chứng minh được quan hệ nhân quả (Cause-and-effect)",
    example: "Khảo sát thói quen uống trà (Observational) vs Bắt buộc nhóm A uống trà và nhóm B uống nước lọc (Experiment)."
  },
  {
    id: 115,
    term: "Random Assignment",
    definition: "Phân bổ ngẫu nhiên các đối tượng thí nghiệm vào nhóm thử nghiệm hoặc nhóm đối chứng.",
    type: "concept",
    icon: "🎲",
    note: "Giảm thiểu sai số do các yếu tố nhiễu ẩn bên ngoài gây ra",
    example: "Bốc thăm ngẫu nhiên để chia bệnh nhân dùng thuốc mới hoặc giả dược."
  },
  {
    id: 116,
    term: "Similar Triangles",
    definition: "Hai tam giác đồng dạng. Có các góc bằng nhau tỉ lệ tương ứng và các cạnh tỉ lệ nghịch đảo/thuận.",
    type: "concept",
    icon: "🔺🔺",
    note: "Tỉ số các cạnh tương ứng luôn bằng nhau",
    example: "Tam giác ABC đồng dạng DEF => AB/DE = BC/EF = AC/DF."
  },
  {
    id: 117,
    term: "Circle Equation",
    definition: "(x - h)² + (y - k)² = r². Phương trình đường tròn có tâm tại (h, k) và bán kính là r.",
    type: "concept",
    icon: "⚪",
    note: "Lưu ý bán kính ở hai vế: Vế phải là r², không phải r",
    example: "(x - 1)² + (y + 2)² = 16 => Tâm tại (1, -2), bán kính r = 4."
  },
  {
    id: 118,
    term: "Complementary Angles Identity",
    definition: "Đồng nhất thức góc phụ nhau lượng giác: sin(x) = cos(90° - x) hoặc sin(x) = cos(π/2 - x).",
    type: "concept",
    icon: "🧮",
    note: "Áp dụng khi hai góc nhọn trong tam giác vuông cộng nhau bằng 90°",
    example: "Nếu sin(a) = 0.6 => cos(90° - a) = 0.6."
  },
  {
    id: 119,
    term: "Arc Length",
    definition: "Độ dài cung tròn: S = (θ / 360°) * 2πr (góc độ) hoặc S = rθ (góc radian).",
    type: "concept",
    icon: "🍰",
    note: "θ là góc ở tâm chắn cung tương ứng",
    example: "Góc 90° chắn cung có độ dài bằng 1/4 chu vi hình tròn: (90/360) * 2πr = πr/2."
  },
  {
    id: 120,
    term: "Sector Area",
    definition: "Diện tích hình quạt tròn: A = (θ / 360°) * πr² (góc độ) hoặc A = 0.5 * r² * θ (góc radian).",
    type: "concept",
    icon: "🍕",
    note: "Tỉ lệ diện tích quạt tương đương tỉ lệ góc ở tâm so với toàn bộ hình tròn",
    example: "Quạt tròn góc ở tâm 60° có diện tích bằng 1/6 (60/360) diện tích hình tròn gốc."
  }
];
