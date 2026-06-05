import { VocabCard } from '../types';

export const mathVocabList: VocabCard[] = [
  // ==========================================
  // 1. ALGEBRA (ID: 1001 - 1035)
  // ==========================================
  {
    id: 1001,
    term: "Variable",
    definition: "Biến số: Đại lượng có thể nhận nhiều giá trị số khác nhau, thường viết dưới dạng chữ cái (x, y, z).",
    type: "concept",
    icon: "🔤",
    example: "In the equation f(x) = 3x - 4, x is the independent variable.",
    note: "Biến độc lập (input) quyết định biến phụ thuộc (output).",
    topic: "Mathematics"
  },
  {
    id: 1002,
    term: "Constant",
    definition: "Hằng số: Một đại lượng có giá trị cố định, không đổi trong suốt bài toán.",
    type: "concept",
    icon: "🔢",
    example: "In the expression 4x + 7, the number 7 is the constant.",
    note: "Hằng số đứng tự do một mình, không nhân kèm biến số.",
    topic: "Mathematics"
  },
  {
    id: 1003,
    term: "Coefficient",
    definition: "Hệ số: Số nhân trực tiếp với biến số hoặc lũy thừa của biến số.",
    type: "concept",
    icon: "📈",
    example: "In the expression -5x², the coefficient of x² is -5.",
    note: "Hệ số âm hay dương ảnh hưởng trực tiếp đến hướng dốc của đồ thị.",
    topic: "Mathematics"
  },
  {
    id: 1004,
    term: "Term",
    definition: "Hạng tử: Một số riêng lẻ, một biến, hoặc tích của số và biến trong biểu thức toán học.",
    type: "concept",
    icon: "🧱",
    example: "The algebraic expression x² - 4x + 9 has exactly three terms.",
    note: "Các hạng tử được phân tách bởi các dấu cộng (+) hoặc trừ (-).",
    topic: "Mathematics"
  },
  {
    id: 1005,
    term: "Expression",
    definition: "Biểu thức: Sự kết hợp của số, biến và dấu phép tính, không có dấu bằng (=).",
    type: "concept",
    icon: "🔄",
    example: "Simplify the following expression: 2(x + 3) - 5.",
    note: "Biểu thức chỉ có rút gọn (simplify) chứ không có 'nghiệm' do không có dấu (=).",
    topic: "Mathematics"
  },
  {
    id: 1006,
    term: "Equation",
    definition: "Phương trình: Đẳng thức thiết lập mối quan hệ bằng nhau giữa hai biểu thức toán học.",
    type: "concept",
    icon: "⚖️",
    example: "Rearrange the equation 5x - 10 = 20 to isolate variable x.",
    note: "Phương trình bắt buộc phải có dấu (=) mới giải được nghiệm x.",
    topic: "Mathematics"
  },
  {
    id: 1007,
    term: "Solution / Root",
    definition: "Nghiệm phương trình: Giá trị của biến số làm cho phương trình trở thành một đẳng thức đúng.",
    type: "concept",
    icon: "✅",
    example: "The equation x² - 4 = 0 has two roots: x = 2 and x = -2.",
    note: "Nghiệm của hàm số f(x) = 0 chính là hoành độ giao điểm với trục hoành Ox.",
    topic: "Mathematics"
  },
  {
    id: 1008,
    term: "Satisfy an equation",
    definition: "Thỏa mãn một phương trình: Khi thế một giá trị số vào biến làm cho phương trình cân bằng hai vế.",
    type: "concept",
    icon: "🤝",
    example: "Does the point (2, 5) satisfy the equation y = 2x + 1?",
    note: "Tọa độ điểm bất kỳ nằm trên đồ thị luôn thỏa mãn phương trình đồ thị đó.",
    topic: "Mathematics"
  },
  {
    id: 1009,
    term: "Linear",
    definition: "Tuyến tính (bậc nhất): Có dạng đường thẳng, biểu diễn tốc độ thay đổi liên tục đồng đều.",
    type: "concept",
    icon: "📏",
    example: "Linear equations must have variables of degree exactly equal to 1.",
    note: "Đặc trưng bởi cụm từ khóa 'constant rate of change' (tỷ lệ thay đổi không đổi).",
    topic: "Mathematics"
  },
  {
    id: 1010,
    term: "Linear equation",
    definition: "Phương trình bậc nhất (phương trình tuyến tính): Phương trình có đồ thị là một đường thẳng.",
    type: "concept",
    icon: "➖",
    example: "ax + b = c là dạng phương trình bậc nhất một ẩn cơ bản nhất.",
    note: "Không bao giờ có chứa biến ở dạng số mũ cao hơn 1 hay nằm dưới mẫu thức.",
    topic: "Mathematics"
  },
  {
    id: 1011,
    term: "Linear function",
    definition: "Hàm số bậc nhất (hàm tuyến tính): Hàm số biểu thị dưới dạng f(x) = mx + b.",
    type: "concept",
    icon: "📈",
    example: "f(x) = -2x + 8 represents a decreasing linear function.",
    note: "m là hệ số góc (slope), b là giao điểm trục tung (y-intercept).",
    topic: "Mathematics"
  },
  {
    id: 1012,
    term: "Slope",
    definition: "Hệ số góc (độ dốc): Tần suất thay đổi tăng/giảm của y trên mỗi đơn vị thay đổi của x.",
    type: "concept",
    icon: "📐",
    example: "The slope m of the line passing through (1,2) and (3,6) is (6-2)/(3-1) = 2.",
    note: "Slope: m = (y₂ - y₁) / (x₂ - x₁). Lớn hơn 0 thì dốc lên, nhỏ hơn 0 dốc xuống.",
    topic: "Mathematics"
  },
  {
    id: 1013,
    term: "Slope–intercept form",
    definition: "Dạng hệ số góc (y = mx + b): Phương trình đường thẳng viết dưới dạng hệ số góc m và giao điểm y-intercept b.",
    type: "concept",
    icon: "📈",
    example: "In the line y = -3x + 5, the slope is -3 and y-intercept is (0,5).",
    note: "Đây là dạng dễ nhập vào Desmos nhất để tìm giao điểm.",
    topic: "Mathematics"
  },
  {
    id: 1014,
    term: "Point–slope form",
    definition: "Dạng điểm - hệ số góc: Phương trình đường thẳng đi qua điểm (x₁, y₁) có hệ số góc m:  y – y₁ = m(x – x₁).",
    type: "concept",
    icon: "🎯",
    example: "Write a line with slope 4 passing through (2, -1): y - (-1) = 4(x - 2).",
    note: "Rất hữu dụng khi biết một điểm cụ thể và hệ số góc m.",
    topic: "Mathematics"
  },
  {
    id: 1015,
    term: "Intercept",
    definition: "Giao điểm với trục: Điểm tại đó đồ thị cắt ngang các trục tọa độ.",
    type: "concept",
    icon: "✖️",
    example: "Find the intercepts of the linear function plotted below.",
    note: "Bao gồm x-intercept (giao Ox, setup y=0) và y-intercept (giao Oy, setup x=0).",
    topic: "Mathematics"
  },
  {
    id: 1016,
    term: "x–intercept",
    definition: "Giao điểm trục hoành (Ox): Giao điểm đồ thị với trục hoành, tại đó y = 0.",
    type: "concept",
    icon: "👉",
    example: "Set y=0 in 3x + 4y = 12 to find the x-intercept at (4, 0).",
    note: "Xem như là nghiệm thực (zero / root) của hàm số.",
    topic: "Mathematics"
  },
  {
    id: 1017,
    term: "y–intercept",
    definition: "Giao điểm trục tung (Oy): Giao điểm đồ thị với trục tung, tại đó x = 0.",
    type: "concept",
    icon: "👆",
    example: "The line y = 4x + 11 has a y-intercept coordinate of (0, 11).",
    note: "Thể hiện giá trị ban đầu (initial state / starting value) khi đầu vào bằng không.",
    topic: "Mathematics"
  },
  {
    id: 1018,
    term: "System of equations",
    definition: "Hệ phương trình: Hai hoặc nhiều phương trình có cùng chung các biến số.",
    type: "concept",
    icon: "🤝",
    example: "Solve the system including equations: x + y = 10 and 2x - y = 8.",
    note: "Dùng Desmos vẽ đồng thời cả 2 phương trình; giao điểm của chúng chính là nghiệm.",
    topic: "Mathematics"
  },
  {
    id: 1019,
    term: "Simultaneous equations",
    definition: "Phương trình đồng thời: Thuật ngữ tương đương hệ phương trình, các phương trình đồng thời có hiệu lực.",
    type: "concept",
    icon: "⏳",
    example: "We can solve these simultaneous equations by elimination or substitution.",
    note: "Giá trị nghiệm tìm ra phải thỏa mãn tất cả các phương trình cùng lúc.",
    topic: "Mathematics"
  },
  {
    id: 1020,
    term: "Consistent system",
    definition: "Hệ phương trình có nghiệm: Hệ chứa ít nhất một tập nghiệm giá trị thực.",
    type: "concept",
    icon: "🔗",
    example: "Two intersecting linear graphs create a consistent system.",
    note: "Hai đường cắt nhau (1 nghiệm) hoặc trùng nhau hoàn toàn (vô số nghiệm).",
    topic: "Mathematics"
  },
  {
    id: 1021,
    term: "Inconsistent system",
    definition: "Hệ phương trình vô nghiệm: Hệ không chứa bất kỳ điểm nghiệm chung nào.",
    type: "concept",
    icon: "🚫",
    example: "Parallel lines with no intersection form an inconsistent system.",
    note: "Đồ thị của hai đường song song (cùng slope m, khác y-intercept b).",
    topic: "Mathematics"
  },
  {
    id: 1022,
    term: "Dependent system",
    definition: "Hệ vô số nghiệm: Các phương trình thực chất chỉ là một đường thẳng viết dưới dạng khác.",
    type: "concept",
    icon: "♾️",
    example: "The system of x + y = 3 and 2x + 2y = 6 is a dependent system.",
    note: "Đồ thị là hai đường đè khít lên nhau (trùng nhau hoàn toàn).",
    topic: "Mathematics"
  },
  {
    id: 1023,
    term: "Inequality",
    definition: "Bất phương trình: So sánh hai biểu thức toán học không bằng nhau sử dụng >, <, ≥ hoặc ≤.",
    type: "concept",
    icon: "⚠️",
    example: "The inequality 2x - 5 > 9 simplifies to x > 7.",
    note: "Lưu ý cực kỳ quan trọng: Phải nghịch đảo dấu bất đẳng thức khi nhân/chia hai vế cho số âm.",
    topic: "Mathematics"
  },
  {
    id: 1024,
    term: "Linear inequality",
    definition: "Bất phương trình bậc nhất: Bất phương trình chứa biến bậc 1, biểu thị miền nghiệm bán phẳng.",
    type: "concept",
    icon: "📉",
    example: "Graph the linear inequality y < 2x - 3 with a dashed boundary.",
    note: "Desmos tự động vẽ ranh giới nét liền (nếu có dấu '=') hoặc nét đứt (nếu chỉ lớn/nhỏ hơn).",
    topic: "Mathematics"
  },
  {
    id: 1025,
    term: "System of inequalities",
    definition: "Hệ bất phương trình: Tổ hợp nhiều bất phương trình, miền nghiệm là giao của các miền đơn lẻ.",
    type: "concept",
    icon: "🎨",
    example: "The solution to a system of inequalities is represented by the shaded overlapping area.",
    note: "Giao điểm của các góc biên thường là điểm tối ưu của bài toán.",
    topic: "Mathematics"
  },
  {
    id: 1026,
    term: "Solution set",
    definition: "Tập nghiệm: Tất cả các giá trị thực của biến thỏa mãn đẳng thức/bất đẳng thức.",
    type: "concept",
    icon: "🧺",
    example: "The solution set of the system is highlighted in the coordinate system.",
    note: "Có thể ghi dưới dạng chỉ số rời rạc hoặc dạng khoảng/đoạn số học.",
    topic: "Mathematics"
  },
  {
    id: 1027,
    term: "Interval",
    definition: "Khoảng / Đoạn: Tập hợp các số nằm giữa hai giới hạn nhất định trên trục số.",
    type: "concept",
    icon: "↔️",
    example: "The variable x is within the interval (2, 5], meaning 2 < x <= 5.",
    note: "Ngoặc tròn ( ) đại diện cho lớn/nhỏ hơn; Ngoặc vuông [ ] đại diện cho lớn/nhỏ hơn hoặc bằng (lấy cả biên).",
    topic: "Mathematics"
  },
  {
    id: 1028,
    term: "Boundary line",
    definition: "Đường biên ranh giới: Đường thẳng ngăn cách phân chia mặt phẳng tọa độ thành các nửa mặt phẳng miền nghiệm.",
    type: "concept",
    icon: "🚧",
    example: "A solid boundary line indicates that points on the line are part of the solution.",
    note: "Solid line (nét liền): ≥ hay ≤. Dashed line (nét đứt): > hay <.",
    topic: "Mathematics"
  },
  {
    id: 1029,
    term: "Feasible region",
    definition: "Miền nghiệm chung (miền khả thi): Toàn bộ không gian tọa độ thỏa mãn tất cả bất phương trình trong hệ.",
    type: "concept",
    icon: "🟩",
    example: "The shaded polygon is the feasible region containing optimal coordinates.",
    note: "Các đỉnh góc của miền này rất hay chứa giá trị tối đa (Max) hoặc tối thiểu (Min).",
    topic: "Mathematics"
  },
  {
    id: 1030,
    term: "Absolute value",
    definition: "Giá trị tuyệt đối: Khoảng cách hình học từ gốc tọa độ 0 đến số đó trên trục số (luôn mang dấu dương).",
    type: "concept",
    icon: "📏",
    example: "|-7| = 7 and |7| = 7.",
    note: "Phương trình |ax + b| = c vô nghiệm nếu c < 0.",
    topic: "Mathematics"
  },
  {
    id: 1031,
    term: "Greatest common factor (GCF)",
    definition: "Ước chung lớn nhất (UCLN): Số nguyên lớn nhất chia hết cho tất cả các số hạng cho trước.",
    type: "concept",
    icon: "🤝",
    example: "The GCF of 12 and 18 is 6.",
    note: "Dùng để đặt nhân tử chung ra ngoài khi rút gọn đa thức.",
    topic: "Mathematics"
  },
  {
    id: 1032,
    term: "Least common multiple (LCM)",
    definition: "Bội chung nhỏ nhất (BCNN): Số thực dương nhỏ nhất chia hết cho cả hai hay nhiều số hạng.",
    type: "concept",
    icon: "📈",
    example: "The LCM of 4 and 6 is 12.",
    note: "Cần thiết khi tìm mẫu số chung thức (common denominator) để cộng hai phân thức.",
    topic: "Mathematics"
  },
  {
    id: 1033,
    term: "Factor",
    definition: "Nhân tử (Ước số hạng): Số hoặc biểu thức khi nhân với nhau sẽ cho ra biểu thức gốc ban đầu.",
    type: "concept",
    icon: "🧬",
    example: "Factors of x² - 5x + 6 are (x - 2) and (x - 3).",
    note: "Nếu r là một nghiệm của đa thức P(x), thì P(r) = 0 và (x - r) là một nhân tử.",
    topic: "Mathematics"
  },
  {
    id: 1034,
    term: "To factor",
    definition: "Phân tích thành nhân tử: Biến đổi đa thức tổng-hiệu thành tích của các đa thức bậc thấp hơn.",
    type: "concept",
    icon: "📐",
    example: "Factor the quadratic equation: x² - 9 = (x - 3)(x + 3).",
    note: "Giúp giải nhanh phương trình mà không cần tính delta.",
    topic: "Mathematics"
  },
  {
    id: 1035,
    term: "Multiple",
    definition: "Bội số: Số chia hết hoàn toàn cho một số lượng khác không có dư.",
    type: "concept",
    icon: "✖️",
    example: "15 is a multiple of 5 because 15 = 5 * 3.",
    note: "Sách đề SAT hay kiểm định nghiệm dựa trên tính chẵn, lẻ hoặc chia hết.",
    topic: "Mathematics"
  },

  // ==========================================
  // 2. ADVANCED MATH (ID: 1036 - 1083)
  // ==========================================
  {
    id: 1036,
    term: "Equivalent expressions",
    definition: "Biểu thức tương đương: Hai biểu thức luôn có tính chất nhận giá trị bằng nhau với mọi biến số.",
    type: "concept",
    icon: "🔄",
    example: "(x + 3)² and x² + 6x + 9 are equivalent expressions.",
    note: "Mẹo SAT: Chọn giá trị x ngẫu nhiên nhỏ (ví dụ x=2) thế vào đề bài và các đáp án để so sánh.",
    topic: "Mathematics"
  },
  {
    id: 1037,
    term: "Identity",
    definition: "Đẳng thức: Phương trình hoặc hệ thức đúng với hoàn toàn mọi giá trị của biến số.",
    type: "concept",
    icon: "🤝",
    example: "sin²(x) + cos²(x) = 1 is a well-known trigonometric identity.",
    note: "Nếu ax + b = cx + d là một đẳng thức, thì a = c và b = d.",
    topic: "Mathematics"
  },
  {
    id: 1038,
    term: "Like terms",
    definition: "Các hạng tử đồng dạng: Các hạng tử có cùng chung phần biến số và số mũ.",
    type: "concept",
    icon: "👥",
    example: "In 3x + 5y - x, the terms 3x and -x are like terms.",
    note: "Chỉ các hạng tử đồng dạng mới có thể thực hiện cộng / trừ gom chung trực tiếp với nhau.",
    topic: "Mathematics"
  },
  {
    id: 1039,
    term: "To simplify",
    definition: "Rút gọn: Biển đổi biểu thức toán học phức tạp thành dạng ngắn gọn dễ hiểu nhất.",
    type: "concept",
    icon: "✂️",
    example: "Simplify: (4x² + 6x) / 2x = 2x + 3.",
    note: "Luôn tìm nhân tử chung lớn nhất để chia rút gọn.",
    topic: "Mathematics"
  },
  {
    id: 1040,
    term: "To expand",
    definition: "Khai triển: Nhân và biến đổi dạng tích các đa thức thành biểu thức dạng đa thức tổng.",
    type: "concept",
    icon: "📂",
    example: "Expand: (x + 2)(x - 5) = x² - 3x - 10.",
    note: "Dùng nguyên lí FOIL (First, Outer, Inner, Last) cho nhân tích nhị thức.",
    topic: "Mathematics"
  },
  {
    id: 1041,
    term: "Distribute / Distribution",
    definition: "Phép nhân phân phối: Phép toán áp dụng nhân thừa số bên ngoài cho tất cả số hạng bên trong.",
    type: "concept",
    icon: "📢",
    example: "Distribute 3 through the brackets: 3(x + y - 4) = 3x + 3y - 12.",
    note: "Cực kỳ lưu ý dấu trừ bẫy đằng trước giống như: - (3 - x) = -3 + x.",
    topic: "Mathematics"
  },
  {
    id: 1042,
    term: "Polynomial",
    definition: "Đa thức: Biểu thức đại số chứa tổng các đơn thức (hạng tử hệ số mũ nguyên dương).",
    type: "concept",
    icon: "🧬",
    example: "f(x) = 5x³ - 2x² + x - 8 is a third-degree polynomial.",
    note: "Số mũ của đa thức bắt buộc phải là số nguyên dương hoặc bằng 0.",
    topic: "Mathematics"
  },
  {
    id: 1043,
    term: "Degree",
    definition: "Bậc (đa thức / phương trình): Đố mũ cao nhất của biến số xuất hiện trong một biểu thức đa thức.",
    type: "concept",
    icon: "🎓",
    example: "The degree of the polynomial 2x⁴ + x³ - 9 is 4.",
    note: "Bậc của đa thức quyết định số lượng nghiệm thực cực đại của hàm số đó.",
    topic: "Mathematics"
  },
  {
    id: 1044,
    term: "Monomial",
    definition: "Đơn thức: Đa thức chỉ chứa một hạng tử duy nhất cấu tạo từ hằng số và biến nhân nhau.",
    type: "concept",
    icon: "🧱",
    example: "3x⁵, -7, and 4xy are monomials.",
    note: "Không bao giờ chứa phép toán cộng hay trừ nằm giữa các chữ đại diện.",
    topic: "Mathematics"
  },
  {
    id: 1045,
    term: "Binomial",
    definition: "Nhị thức: Đa thức có chứa chính xác hai hạng tử kết nối bởi cộng hay trừ.",
    type: "concept",
    icon: "🍒",
    example: "x + 5 and 3x² - y are binomials.",
    note: "Khai triển hằng đẳng thức đáng nhớ áp dụng đầu tiên trên nhị thức.",
    topic: "Mathematics"
  },
  {
    id: 1046,
    term: "Trinomial",
    definition: "Tam thức: Đa thức có chứa chính xác ba hạng tử phân tách bởi toán tử cộng/trừ.",
    type: "concept",
    icon: "☘️",
    example: "x² - 5x + 6 is a quadratic trinomial.",
    note: "Tam thức bậc hai rất hay xuất hiện trong phần bài tính nghiệm parabol.",
    topic: "Mathematics"
  },
  {
    id: 1047,
    term: "Quadratic",
    definition: "Bậc hai: Trạng thái liên quan đến các biểu thức có lũy thừa cực đại là 2 (tấn suất đường parabol).",
    type: "concept",
    icon: "🥣",
    example: "A quadratic model maps paths of projectile motion (vật thể bay).",
    note: "Dạng tổng quát là ax² + bx + c.",
    topic: "Mathematics"
  },
  {
    id: 1048,
    term: "Quadratic equation",
    definition: "Phương trình bậc hai: Phương trình có dạng ax² + bx + c = 0, với hệ số a khác không.",
    type: "concept",
    icon: "✨",
    example: "Solve x² - 6x + 8 = 0.",
    note: "Nghiệm có thể tính nhanh bằng cách phân tích thành nhân tử (factoring) hoặc dùng công thức nghiệm quadratic formula.",
    topic: "Mathematics"
  },
  {
    id: 1049,
    term: "Parabola",
    definition: "Đồ thị Parabol: Đường cong hình chữ U dốc mở hướng lên hoặc úp xuống, đặc trưng cho hàm bậc hai.",
    type: "concept",
    icon: "🥣",
    example: "The quadratic equation y = x² plots as a smooth parabola.",
    note: "Hệ số a > 0 thì quay mặt lên (U), a < 0 thì lật ngược úp xuống (n).",
    topic: "Mathematics"
  },
  {
    id: 1050,
    term: "Vertex",
    definition: "Đỉnh Parabol: Điểm cực tiểu (thấp nhất) hoặc cực đại (cao nhất) của đường parabol.",
    type: "concept",
    icon: "📍",
    example: "The vertex of the parabola y = (x - 3)² + 2 is (3, 2).",
    note: "Tọa độ đỉnh có hoành độ x = -b / (2a); chỉ cần thay x này ngược vào hàm để có tung độ y.",
    topic: "Mathematics"
  },
  {
    id: 1051,
    term: "Axis of symmetry",
    definition: "Trục đối xứng: Đường thẳng phân tách parabol thành hai nửa hoàn toàn đối xứng qua đỉnh.",
    type: "concept",
    icon: "🪞",
    example: "The axis of symmetry is always the vertical line x = h (với h là hoành độ đỉnh).",
    note: "Phương trình trục luôn là x = -b / 2a.",
    topic: "Mathematics"
  },
  {
    id: 1052,
    term: "Roots / Zeros",
    definition: "Nghiệm hàm số (Zeros): Giá trị đầu vào x làm cho đầu ra f(x) = 0.",
    type: "concept",
    icon: "🎯",
    example: "Find the zeros of f(x) = (x - 1)(x + 4).",
    note: "Nghĩa hình học là tọa độ giao điểm với trục hoành Ox.",
    topic: "Mathematics"
  },
  {
    id: 1053,
    term: "Factored form",
    definition: "Dạng tích (dạng nhân tử): Khai triển hàm bậc hai thành f(x) = a(x - x₁)(x - x₂), trong đó x₁ và x₂ là nghiệm.",
    type: "concept",
    icon: "🔑",
    example: "The factored form of y = x² - 5x + 6 is y = (x - 2)(x - 3).",
    note: "Rất tối ưu để xác định ngay lập tức hai giao điểm hoành độ Ox.",
    topic: "Mathematics"
  },
  {
    id: 1054,
    term: "Standard form",
    definition: "Dạng chuẩn tắc (phương trình bậc hai): Cách viết y = ax² + bx + c.",
    type: "concept",
    icon: "📐",
    example: "Convert vertex form to standard form by expanding the squared term.",
    note: "Giao tung y-intercept luôn là điểm có tọa độ (0, c).",
    topic: "Mathematics"
  },
  {
    id: 1055,
    term: "Vertex form",
    definition: "Dạng đỉnh parabol: Cách biểu diễn y = a(x - h)² + k, cho biết ngay đỉnh là (h, k).",
    type: "concept",
    icon: "📍",
    example: "y = -2(x - 1)² + 4 has a vertex at (1, 4), which is its maximum point.",
    note: "Cực tiểu của hàm là k (nếu a > 0), cực đại của hàm là k (nếu a < 0).",
    topic: "Mathematics"
  },
  {
    id: 1056,
    term: "Exponential function",
    definition: "Hàm số mũ: Hàm số tăng/giảm cực nhanh tỉ lệ thuận biến số x ở lũy thừa: f(x) = ab^x.",
    type: "concept",
    icon: "📈",
    example: "y = 100(1.05)^x represents compound interest.",
    note: "Thời gian b bám đuổi biến mũ. f(x) không bao giờ chạm đến tiệm cận ngang y = 0 nếu không dịch chuyển.",
    topic: "Mathematics"
  },
  {
    id: 1057,
    term: "Exponential growth",
    definition: "Tăng trưởng mũ (cấp số nhân): Hàm số mũ tăng mạnh không ngừng với thời gian, có cơ số b > 1.",
    type: "concept",
    icon: "🚀",
    example: "The bacteria population under double exponential growth.",
    note: "Công thức: y = a(1 + r)^t, trong đó r là phần trăm tăng trưởng thực tế.",
    topic: "Mathematics"
  },
  {
    id: 1058,
    term: "Exponential decay",
    definition: "Suy giảm mũ (phóng xạ): Khối lượng hay giá trị giảm nhanh chóng tiệm cận về 0, có cơ số 0 < b < 1.",
    type: "concept",
    icon: "📉",
    example: "Radioactive decay has a multiplier rate of less than 1.",
    note: "Công thức: y = a(1 - r)^t, trong đó r là phần trăm suy hao.",
    topic: "Mathematics"
  },
  {
    id: 1059,
    term: "Base",
    definition: "Cơ số: Số nền tảng chịu lực nâng lũy thừa hoặc số mũ trong biểu thức mũ, lũy thừa.",
    type: "concept",
    icon: "🧱",
    example: "In the expression 2⁵, the base is 2.",
    note: "Cơ số của hàm số mũ đại diện tỉ số thay đổi định kỳ (constant multiplier).",
    topic: "Mathematics"
  },
  {
    id: 1060,
    term: "Power / Exponent",
    definition: "Số mũ / Lũy thừa: Số chỉ định số lần nhân lặp lại của cơ số.",
    type: "concept",
    icon: "⬆️",
    example: "In x³, the exponent is 3.",
    note: "Lưu ý quy tắc mũ âm: x⁻ⁿ = 1 / xⁿ.",
    topic: "Mathematics"
  },
  {
    id: 1061,
    term: "Logarithm",
    definition: "Phép toán Logarit: Phép tính ngược tìm số mũ. log_b(y) = x tương đương b^x = y.",
    type: "concept",
    icon: "📐",
    example: "Because 10² = 100, the log base 10 of 100 is 2.",
    note: "Log thường dùng để giải quyết các phương trình có chứa biến số trực tiếp nằm trên mũ số.",
    topic: "Mathematics"
  },
  {
    id: 1062,
    term: "Logarithmic function",
    definition: "Hàm số logarit: Hàm đảo ngược chiều ngược của hàm số mũ, có dạng f(x) = log_a(x).",
    type: "concept",
    icon: "📈",
    example: "Logarithmic curves rise slowly and have a vertical asymptote at x = 0.",
    note: "Tập xác định luôn yêu cầu đầu vào biến số phải thực sự lớn hơn 0 (x > 0).",
    topic: "Mathematics"
  },
  {
    id: 1063,
    term: "Rational expression",
    definition: "Biểu thức hữu tỉ: Thương/tỷ số toán học của hai biểu thức đa thức dạng phân số P(x) / Q(x).",
    type: "concept",
    icon: "➗",
    example: "(x² - 4)/(x + 2) is a rational expression that simplifies to x - 2 when x != -2.",
    note: "Cần chú ý điều kiện xác định là mẫu thức luôn phải khác 0.",
    topic: "Mathematics"
  },
  {
    id: 1064,
    term: "Rational equation",
    definition: "Phương trình hữu tỉ: Phương trình chứa một hoặc nhiều phân thức hữu tỉ có chứa ẩn ở mẫu.",
    type: "concept",
    icon: "⚖️",
    example: "Solve: 1/x + 2 = 5/x.",
    note: "Luôn tìm nghiệm loại trừ (extraneous solutions) có khả năng làm cho mẫu số bị triệt tiêu bằng 0.",
    topic: "Mathematics"
  },
  {
    id: 1065,
    term: "Rational function",
    definition: "Hàm số hữu tỉ: Hàm số có dạng y = P(x)/Q(x).",
    type: "concept",
    icon: "📈",
    example: "The function y = 1/x has a horizontal asymptote of y = 0 and vertical asymptote of x = 0.",
    note: "Tiệm cận đứng là các nghiệm của mẫu số sau khi phân số đã triệt tiêu hết nhân tử chung.",
    topic: "Mathematics"
  },
  {
    id: 1066,
    term: "Numerator",
    definition: "Tử số: Biểu thức nằm trên cùng dấu gạch ngang phân số.",
    type: "concept",
    icon: "👆",
    example: "In the fraction a/b, a is the numerator.",
    note: "Phân số bằng 0 khi tử số bằng 0 và mẫu số khác không.",
    topic: "Mathematics"
  },
  {
    id: 1067,
    term: "Denominator",
    definition: "Mẫu số: Biểu thức nằm ở dưới cùng dấu gạch ngang phân số.",
    type: "concept",
    icon: "👇",
    example: "In the fraction a/b, b is the denominator.",
    note: "Mẫu số tuyệt đối không được phép bằng 0, nếu bằng 0 biểu thức sẽ không xác định.",
    topic: "Mathematics"
  },
  {
    id: 1068,
    term: "Undefined",
    definition: "Không xác định: Kết quả toán học không thể định nghĩa, như chia cho số 0, căn bậc hai số âm.",
    type: "concept",
    icon: "❌",
    example: "At x = 3, the expression 5/(x - 3) is undefined.",
    note: "Đề bài hay hỏi 'for what value of x is the function undefined' → Cho mẫu số bằng 0 để giải.",
    topic: "Mathematics"
  },
  {
    id: 1069,
    term: "Radical",
    definition: "Căn thức: Ký hiệu toán học dùng để biểu thị phép khai căn (căn bậc n).",
    type: "concept",
    icon: "√",
    example: "The radical expression √x requires x >= 0 to yield a real number.",
    note: "Căn bậc hai viết dưới dạng mũ là lũy thừa số mũ hữu tỉ: x^(1/2).",
    topic: "Mathematics"
  },
  {
    id: 1070,
    term: "Square root",
    definition: "Căn bậc hai: Phép tính ngược của bình phương. √a = x sao cho x² = a (với x, a ≥ 0).",
    type: "concept",
    icon: "√",
    example: "The square root of 25 is 5.",
    note: "Căn bậc hai của số b chỉ cho ra kết quả không âm.",
    topic: "Mathematics"
  },
  {
    id: 1071,
    term: "Cube root",
    definition: "Căn bậc ba: Tìm số x sao cho x³ = a.",
    type: "concept",
    icon: "3√",
    example: "The cube root of -8 is -2.",
    note: "Căn bậc ba có thể lấy giá trị của một số âm thoải mái mà không bị không xác định.",
    topic: "Mathematics"
  },
  {
    id: 1072,
    term: "Radical equation",
    definition: "Phương trình chứa căn: Phương trình có chứa biến nằm sâu phía dưới dấu căn thức.",
    type: "concept",
    icon: "⚖️",
    example: "Solve √(x + 3) = 5 by squaring both sides of the equation.",
    note: "Luôn kiểm tra lại nghiệm nhận được vì việc bình phương hai vế rất dễ tạo ra nghiệm ngoại lai giả (extraneous solution).",
    topic: "Mathematics"
  },
  {
    id: 1073,
    term: "Function",
    definition: "Hàm số: Quy tắc gán cho mỗi giá trị đầu vào x đúng một giá trị đầu ra y.",
    type: "concept",
    icon: "⚙️",
    example: "A vertical line test confirms if a relation is a function.",
    note: "Một x không bao giờ được phép tương tác đẻ ra hai y khác nhau.",
    topic: "Mathematics"
  },
  {
    id: 1074,
    term: "Input",
    definition: "Đầu vào: Giá trị độc lập nạp vào hàm số (thường là biến x từ tập xác định).",
    type: "concept",
    icon: "📥",
    example: "x is the input variable for standard notation f(x).",
    note: "Mỗi input chỉ được phép cho ra chính xác 1 output.",
    topic: "Mathematics"
  },
  {
    id: 1075,
    term: "Output",
    definition: "Đầu ra: Giá trị phụ thuộc ghi nhận được từ kết quả hàm số sau khi nạp input.",
    type: "concept",
    icon: "📤",
    example: "y or f(x) represents the output of the function mapping.",
    note: "Nhiều điểm đầu vào khác nhau hoàn toàn có quyền cùng cho ra chung một đầu ra.",
    topic: "Mathematics"
  },
  {
    id: 1076,
    term: "Domain",
    definition: "Tập xác định: Tập hợp chứa tất cả giá trị đầu vào thực sự khả thi và hợp lệ của biến x.",
    type: "concept",
    icon: "🌐",
    example: "The domain of f(x) = √(x - 2) is x >= 2.",
    note: "Tìm domain: Chú ý mẫu số khác 0 và căn thức bên trong không âm.",
    topic: "Mathematics"
  },
  {
    id: 1077,
    term: "Range",
    definition: "Tập giá trị: Tập hợp chứa tất cả các giá trị đầu ra y có thể có được tương ứng theo tập xác định.",
    type: "concept",
    icon: "🎯",
    example: "The range of y = x² is all non-negative real numbers [0, ∞).",
    note: "Có thể xác định Range trực tiếp và nhanh chóng nhất bằng công cụ vẽ đồ thị Parabol đỉnh của Desmos.",
    topic: "Mathematics"
  },
  {
    id: 1078,
    term: "Function notation",
    definition: "Ký hiệu hàm (f(x)): Cách viết f(x) đọc là 'f of x' thay cho biến số y.",
    type: "concept",
    icon: "🏷️",
    example: "Notation f(5) = 12 means that for input 5, the output is 12.",
    note: "Tạo sự tường minh liên hệ tức thì giữa giá trị đầu vào và đầu ra tương ứng.",
    topic: "Mathematics"
  },
  {
    id: 1079,
    term: "Increasing",
    definition: "Đồng biến (tăng trục tung): Trạng thái đồ thị đi lên từ trái sang phải, giá trị y tăng khi x tăng.",
    type: "concept",
    icon: "📈",
    example: "The function f(x) = 2x is strictly increasing.",
    note: "Hàm tuyến tính y = mx + b đồng biến khi và chỉ khi hệ số m > 0.",
    topic: "Mathematics"
  },
  {
    id: 1080,
    term: "Decreasing",
    definition: "Nghịch biến (giảm trục tung): Trạng thái đồ thị có hướng đi xuống từ trái sang phải, giá trị y giảm khi x tăng.",
    type: "concept",
    icon: "📉",
    example: "Radioactive waste decays over time, decreasing exponentially.",
    note: "Hàm tuyến tính y = mx + b nghịch biến khi và chỉ khi hệ số m < 0.",
    topic: "Mathematics"
  },

  // ==========================================
  // 3. PROBLEM-SOLVING AND DATA ANALYSIS (ID: 1081 - 1140)
  // ==========================================
  {
    id: 1081,
    term: "Ratio",
    definition: "Tỷ số: Sự so sánh toán học biểu diễn mối quan hệ về mặt số lượng kích cỡ giữa hai lượng.",
    type: "concept",
    icon: "📊",
    example: "The ratio of apple juice to orange juice is 3:2.",
    note: "Tỷ số 3:2 có nghĩa tổng số phần chia đều chiếm dụng là 3 + 2 = 5 phần.",
    topic: "Mathematics"
  },
  {
    id: 1082,
    term: "Proportion",
    definition: "Đồng dạng tỷ quy (Tỷ lệ thức): Đẳng thức thiết lập mối liên hệ cân bằng giữa hai phân số tỷ số.",
    type: "concept",
    icon: "⚖️",
    example: "Set up a proportion to solve: a/b = c/d.",
    note: "Giải tỷ lệ thức bằng phương pháp nhân chéo quy về phương trình tuyến tính: a * d = b * c.",
    topic: "Mathematics"
  },
  {
    id: 1083,
    term: "Rate",
    definition: "Tốc độ (tỷ lệ có đơn vị): Tỷ lệ so sánh hai đại lượng mang các đơn vị khác biệt nhau.",
    type: "concept",
    icon: "🏎️",
    example: "The car was traveling at a average rate of 60 miles per hour.",
    note: "Tốc độ thay đổi (Rate of change) của đồ thị thẳng chính là hệ số dốc slope.",
    topic: "Mathematics"
  },
  {
    id: 1084,
    term: "Unit rate",
    definition: "Tốc độ đơn vị: Tỷ lệ quy chiếu tính toán cho chính xác một đơn vị của lượng so mẫu.",
    type: "concept",
    icon: "1️⃣",
    example: "An hourly wage of $15 per hour is a unit rate.",
    note: "Mẫu số của tỷ lệ đơn vị luôn được chuẩn hóa đưa về bằng 1.",
    topic: "Mathematics"
  },
  {
    id: 1085,
    term: "Constant of proportionality",
    definition: "Hằng số tỷ lệ: Tỷ số không đổi k liên kết hai đại lượng trong mối quan hệ biến thiên dạng thẳng y = kx.",
    type: "concept",
    icon: "🎯",
    example: "In direct variation y = kx, k is the constant of proportionality.",
    note: "k luôn bằng giá trị y chia cho x tại mọi điểm.",
    topic: "Mathematics"
  },
  {
    id: 1086,
    term: "Direct variation",
    definition: "Tỷ lệ thuận: Mối quan hệ trong đó hai lượng biến thiên đồng hướng, lượng này nhân k lần lượng kia.",
    type: "concept",
    icon: "📈",
    example: "Distance traveled varies directly with time if speed is constant.",
    note: "Công thức: y = kx. Đồ thị luôn là đường thẳng đi qua gốc tọa độ gốc (0,0).",
    topic: "Mathematics"
  },
  {
    id: 1087,
    term: "Inverse variation",
    definition: "Tỷ lệ nghịch: Mối quan hệ hai lượng biến thiên ngược chiều nhau, tích số của chúng luôn là hằng số.",
    type: "concept",
    icon: "📉",
    example: "The time to complete a task varies inversely with the number of workers.",
    note: "Công thức: y = k / x, hoặc x * y = k.",
    topic: "Mathematics"
  },
  {
    id: 1088,
    term: "Unit",
    definition: "Đơn vị đo lường: Đại lượng tiêu chuẩn dùng để đo lường định lượng vật lý.",
    type: "concept",
    icon: "📏",
    example: "Units of distance include meters, inches, or miles.",
    note: "Luôn kiểm tra xem các đại lượng trong câu hỏi đã cùng một đơn vị chưa trước khi giải.",
    topic: "Mathematics"
  },
  {
    id: 1089,
    term: "Unit conversion",
    definition: "Đổi đơn vị: Quy đổi giá trị số từ một hệ đo lường sang hệ đo lường khác tương đương.",
    type: "concept",
    icon: "🔄",
    example: "Convert 2 hours to minutes by multiplying 2 by 60.",
    note: "Nhân với tỉ số quy đổi sao cho đơn vị cần triệt tiêu nằm lệch phía ngược lại của dòng phân số.",
    topic: "Mathematics"
  },
  {
    id: 1090,
    term: "Dimensional analysis",
    definition: "Phân tích thứ nguyên: Kỹ thuật kiểm soát phép toán thông qua sự triệt tiêu tuần tự của các đơn vị.",
    type: "concept",
    icon: "📐",
    example: "Use dimensional analysis to shift from miles per hour to feet per second.",
    note: "Một công cụ đắc lực giải các câu toán đổi đơn vị phức tạp của Digital SAT.",
    topic: "Mathematics"
  },
  {
    id: 1091,
    term: "Percent",
    definition: "Phần trăm: Tỷ số có mẫu số được định nghĩa chuẩn hóa cố định là 100.",
    type: "concept",
    icon: "%",
    example: "25 percent is equal to 25/100 or 0.25.",
    note: "Khi dịch câu văn thành biểu thức: chữ 'of' biểu thị phép nhân, 'is' biểu thị dấu bằng.",
    topic: "Mathematics"
  },
  {
    id: 1092,
    term: "Percentage",
    definition: "Tỷ lệ phần trăm: Phần hay lượng chiếm dụng tính toán dựa trên mức quy chuẩn 100.",
    type: "concept",
    icon: "%",
    example: "What percentage of 80 is 20? (20 / 80) * 100 = 25%.",
    note: "Tỷ lệ này đại diện mối quan hệ Core-to-Whole.",
    topic: "Mathematics"
  },
  {
    id: 1093,
    term: "Percent increase",
    definition: "Phần trăm tăng: Tỷ lệ phần tăng lên so với giá trị nền tảng ban đầu.",
    type: "concept",
    icon: "📈",
    example: "An increase from 50 to 60 is a (10 / 50) * 100 = 20% increase.",
    note: "Công thức: ((Giá trị mới - Giá trị cũ) / Giá trị cũ) * 100.",
    topic: "Mathematics"
  },
  {
    id: 1094,
    term: "Percent decrease",
    definition: "Phần trăm giảm: Tỷ lệ phần hao hụt so với giá trị nền tảng ban đầu.",
    type: "concept",
    icon: "📉",
    example: "A decrease from 100 to 80 is a 20% decrease.",
    note: "Hệ số multiplier tương ứng sẽ là (1 - r) cho hàm mũ tương ứng.",
    topic: "Mathematics"
  },
  {
    id: 1095,
    term: "Discount",
    definition: "Khấu trừ giảm giá: Số tiền bớt đi trực tiếp từ giá bán gốc niêm yết ban đầu.",
    type: "concept",
    icon: "🏷️",
    example: "A 20% discount on a $50 book saves $10, making the price $40.",
    note: "Giá sau giảm bằng Giá gốc * (1 - r%).",
    topic: "Mathematics"
  },
  {
    id: 1096,
    term: "Markup",
    definition: "Tăng giá biên: Khoản tiền tăng thêm vào chi phí gốc để nâng lên giá bán tạo lợi nhuận.",
    type: "concept",
    icon: "📈",
    example: "The store bought the shirt for $10 and added a 50% markup to sell it at $15.",
    note: "Giá bán cuối cùng bằng chi phí gốc nhân với (1 + r%).",
    topic: "Mathematics"
  },
  {
    id: 1097,
    term: "Tax",
    definition: "Thuế: Số tiền tỷ lệ đóng cho chính phủ cộng thêm vào hóa đơn thanh toán.",
    type: "concept",
    icon: "💸",
    example: "A 10% sales tax on a $100 purchase increases the final total to $110.",
    note: "Thuế được tính bằng phần trăm trên mức giá gốc bán ra trước thuế.",
    topic: "Mathematics"
  },
  {
    id: 1098,
    term: "Tip",
    definition: "Tiền boa (tiền hoa hồng): Số tiền thưởng thêm gửi nhân viên dịch vụ tính theo tỷ lệ hóa đơn.",
    type: "concept",
    icon: "💵",
    example: "Leaving a 15% tip on a food bill of $40 equates to an extra $6.",
    note: "Lượng tiền boa tỷ lệ thuận đồng biến trực tiếp với độ hài lòng và tổng lượng hóa đơn thanh toán.",
    topic: "Mathematics"
  },
  {
    id: 1099,
    term: "Data set",
    definition: "Tập dữ liệu: Tập hợp bao gồm các số liệu thu thập đo đạc ghi nhận được.",
    type: "concept",
    icon: "📊",
    example: "The data set {12, 15, 15, 17, 22} represents final test scores.",
    note: "Thực hiện sắp xếp các giá trị theo thứ tự từ bé đến lớn trước khi tính toán trung vị (Median).",
    topic: "Mathematics"
  },
  {
    id: 1100,
    term: "Variance",
    definition: "Phương sai: Chỉ số trung bình của bình phương các độ lệch từ số trung bình cộng (bình phương độ lệch chuẩn).",
    type: "concept",
    icon: "🧬",
    example: "A low variance signifies that values lie close to the mean.",
    note: "Phương sai bằng bình phương chính xác của độ lệch chuẩn standard deviation.",
    topic: "Mathematics"
  },
  {
    id: 1101,
    term: "Outlier",
    definition: "Giá trị ngoại lai: Điểm dữ liệu dị biệt nằm quá xa tách biệt hẳn so với phần lớn điểm còn lại.",
    type: "concept",
    icon: "👽",
    example: "In {1, 2, 2, 3, 99}, the number 99 is an extreme outlier.",
    note: "Sự xuất hiện của outlier gây nhiễu lớn đến Mean nhưng ảnh hưởng rất ít đến Median.",
    topic: "Mathematics"
  },
  {
    id: 1102,
    term: "Cluster",
    definition: "Cụm điểm: Các điểm dữ liệu tụ lại sát nhau thành một nhóm lớn trên biểu đồ.",
    type: "concept",
    icon: "🍇",
    example: "On the scatter plot, we notice a visible cluster of points near high income ranges.",
    note: "Biểu thị sự hội tụ cao của một tính chất thống kê nhất định.",
    topic: "Mathematics"
  },
  {
    id: 1103,
    term: "Gap",
    definition: "Khoảng trống dữ liệu: Vùng khoảng trắng hoàn toàn không chứa bất kỳ điểm số liệu khảo sát nào.",
    type: "concept",
    icon: "🕳️",
    example: "There is a noticeable gap in the exam score distributions between 50 and 70.",
    note: "Chỉ ra sự đứt đoạn bất thường trong phân bố tổng thể.",
    topic: "Mathematics"
  },
  {
    id: 1104,
    term: "Scatter plot",
    definition: "Biểu đồ phân tán (Scatterplot): Biểu đồ hiển thị các điểm tọa độ rời rạc so khớp mối tương quan hai biến.",
    type: "concept",
    icon: "📊",
    example: "A scatter plot exhibits the relationship between temperature and ice cream sales.",
    note: "Dùng để phán đoán kiểu tương quan (tuyến tính, mũ, hay phi tuyến).",
    topic: "Mathematics"
  },
  {
    id: 1105,
    term: "Trend line / Line of best fit",
    definition: "Đường xu hướng (đường khớp nhất): Đường vẽ xuyên qua vùng phân tán để ước lượng quy luật chung.",
    type: "concept",
    icon: "📏",
    example: "The line of best fit models the average trajectory of the scatter plot data.",
    note: "Phương trình đường này cho phép dự đoán giá trị y cho các giá trị x nằm ngoài khảo sát.",
    topic: "Mathematics"
  },
  {
    id: 1106,
    term: "Correlation",
    definition: "Độ tương quan: Mức độ quan hệ gắn kết xu hướng biến thiên giữa hai biến số lượng.",
    type: "concept",
    icon: "🤝",
    example: "There is a strong correlation between review time and test results.",
    note: "Một bẫy kinh điển: Tương quan không đồng nghĩa với nhân quả (Correlation does not imply causation).",
    topic: "Mathematics"
  },
  {
    id: 1107,
    term: "Positive / negative correlation",
    definition: "Tương quan dương / âm: Tương quan dương (cùng tăng cùng giảm, dốc lên); Tương quan âm (trái chiều, dốc xuống).",
    type: "concept",
    icon: "📈📉",
    example: "Height vs weight is positive, while altitude vs oxygen level is negative correlation.",
    note: "Gắn liền mật thiết với dấu hệ số slope của đường Line of Best Fit.",
    topic: "Mathematics"
  },
  {
    id: 1108,
    term: "Two-way table",
    definition: "Bảng hai chiều (bảng chéo): Bảng phân bố tần số phân loại đồng thời hai mẫu tiêu chí định tính.",
    type: "concept",
    icon: "📊",
    example: "The two-way table lists surveys sorted by gender and preference.",
    note: "Thường dùng để trích thông tin tính tính xác suất có điều kiện (conditional probability).",
    topic: "Mathematics"
  },
  {
    id: 1109,
    term: "Probability",
    definition: "Xác suất: Số đo dao động từ 0 đến 1 biểu thị khả năng xảy ra của một biến cố cụ thể.",
    type: "concept",
    icon: "🎲",
    example: "The probability of rolling an even number on a six-sided die is 3/6 = 0.5.",
    note: "Công thức cơ bản: Số trường hợp mong muốn / Tổng số trường hợp có thể xảy ra.",
    topic: "Mathematics"
  },
  {
    id: 1110,
    term: "Event",
    definition: "Biến cố: Một kết quả hoặc tập gồm nhiều kết quả mong muốn trong không gian mẫu phép thử.",
    type: "concept",
    icon: "🎯",
    example: "An event of pulling a red card out of a standard deck has a chance of 50%.",
    note: "Gồm biến cố đơn hoặc biến cố hợp phức tạp ghép nối.",
    topic: "Mathematics"
  },
  {
    id: 1111,
    term: "Sample space",
    definition: "Không gian mẫu: Tất cả các kết quả tận cùng khả dĩ có thể cấu thành từ phép thử.",
    type: "concept",
    icon: "🌌",
    example: "The sample space when flipping two coins is {HH, HT, TH, TT}.",
    note: "Tổng xác suất của toàn bộ các biến cố trong không gian mẫu sinh ra luôn bằng 1.",
    topic: "Mathematics"
  },
  {
    id: 1112,
    term: "Outcome",
    definition: "Kết quả khả dĩ: Một phần tử kết quả thô ghi nhận được từ tiến trình thử nghiệm ngẫu nhiên.",
    type: "concept",
    icon: "✨",
    example: "One possible outcome of rolling a die is obtaining a score of 4.",
    topic: "Mathematics"
  },
  {
    id: 1113,
    term: "Equally likely",
    definition: "Khả năng đồng đều (đồng khả năng): Trạng thái các kết quả có chung cơ hội xảy ra hoàn toàn ngang nhau.",
    type: "concept",
    icon: "⚖️",
    example: "Flipping a fair coin has two equally likely outcomes: heads or tails.",
    note: "Đây là tiền đề cơ bản để có thể dùng công thức chia xác suất cổ điển lý thuyết.",
    topic: "Mathematics"
  },
  {
    id: 1114,
    term: "Independent events",
    definition: "Biến cố độc lập: Hai biến cố mà việc xảy ra của cái này không tác động làm lệch xác suất cái kia.",
    type: "concept",
    icon: "🧍",
    example: "Rolling a 6 and flipping heads are independent events.",
    note: "Với các biến cố độc lập: P(A and B) = P(A) * P(B).",
    topic: "Mathematics"
  },
  {
    id: 1115,
    term: "Dependent events",
    definition: "Biến cố phụ thuộc: Sự xuất hiện của biến cố trước làm biến đổi xác suất khả năng của biến cố sau.",
    type: "concept",
    icon: "🔗",
    example: "Drawing two aces without replacement is a sequence of dependent events.",
    note: "Không gian mẫu số bị hao hụt bớt sau mỗi lần bốc không hoàn lại.",
    topic: "Mathematics"
  },
  {
    id: 1116,
    term: "Mutually exclusive",
    definition: "Xung khắc hoàn toàn (không tương thích): Hai biến cố không thể nào đồng thời xảy ra cùng một lúc.",
    type: "concept",
    icon: "❌",
    example: "A card cannot be both a Spade and a Heart simultaneously.",
    note: "Công thức: P(A or B) = P(A) + P(B). Không cần trừ đi phần chung P(A and B) vì phần chung bằng 0.",
    topic: "Mathematics"
  },
  {
    id: 1117,
    term: "Sample",
    definition: "Mẫu đại diện: Nhóm đối tượng nhỏ được trích xuất lựa chọn ra từ quần thể lớn để nghiên cứu.",
    type: "concept",
    icon: "🧪",
    example: "A sample of 100 students is chosen from the university.",
    note: "Để cho ra kết luận khách quan, mẫu phải đủ lớn và được lựa chọn ngẫu nhiên tuyệt đối.",
    topic: "Mathematics"
  },
  {
    id: 1118,
    term: "Population",
    definition: "Quần thể (dân số tổng): Tập thể toàn bộ các đối tượng cùng chung tiêu chí cần được tổng kết suy luận.",
    type: "concept",
    icon: "👥",
    example: "The population refers to all eligible voters in the entire state.",
    note: "Thực tế rất khó để khảo sát trực tiếp toàn bộ quần thể mà bắt buộc phải qua khâu lấy mẫu.",
    topic: "Mathematics"
  },
  {
    id: 1119,
    term: "Random sample",
    definition: "Mẫu ngẫu nhiên: Phương pháp thu thập mẫu sao cho mọi cá thể trong quần thể có cơ hội được chọn ngang nhau.",
    type: "concept",
    icon: "🎲",
    example: "Selecting random samples prevent survey biases.",
    note: "Yếu tố then chốt nhất để tổng quát hóa kết quả điều tra từ mẫu ra quần thể lớn.",
    topic: "Mathematics"
  },
  {
    id: 1120,
    term: "Representative",
    definition: "Tính đại diện: Mức độ phản ánh trung thực đầy đủ đặc trưng phân bố của quần thể gốc trong mẫu.",
    type: "concept",
    icon: "🛡️",
    example: "Ensure your selected sample is representative of the whole community.",
    note: "Mẫu lấy từ một cửa hàng đồ hiệu không thể đại diện cho học lực của cả thành phố.",
    topic: "Mathematics"
  },
  {
    id: 1121,
    term: "Estimate",
    definition: "Ước lượng (đánh giá): Dự báo giá trị thống kê gần đúng của quần thể dựa trên dữ liệu mẫu thu thập.",
    type: "concept",
    icon: "🔮",
    example: "We estimate the average score of the school is between 75 and 79.",
    note: "Ước lượng luôn đi kèm với một độ tin cậy và biên sai số nhất định.",
    topic: "Mathematics"
  },
  {
    id: 1122,
    term: "Confidence interval",
    definition: "Khoảng tin cậy: Khoảng giá trị ước tính nhiều khả năng chứa tham số quần thể thực tế nhất.",
    type: "concept",
    icon: "↔️",
    example: "A 95% confidence interval of (51%, 57%) suggests the true value is highly likely within this range.",
    note: "Không có nghĩa là 95% lượng dữ liệu nằm trong đây, mà là quy trình lấy mẫu này tạo ra khoảng tin cậy trúng mục tiêu 95%.",
    topic: "Mathematics"
  },
  {
    id: 1123,
    term: "Survey",
    definition: "Khảo sát điều tra: Thu thập dữ liệu thông qua các mẫu bảng hỏi, phỏng vấn trực tiếp từ xa.",
    type: "concept",
    icon: "📋",
    example: "Conduct a survey to probe consumer interest before launching a gadget.",
    note: "Dễ bị bẫy sai lệch phản hồi tự nguyện (voluntary response bias).",
    topic: "Mathematics"
  },
  {
    id: 1124,
    term: "Sampling bias",
    definition: "Sai lệch chọn mẫu: Lỗi hệ thống trong khâu lấy mẫu khiến mẫu không đại diện được cho toàn bộ quần thể.",
    type: "concept",
    icon: "⚠️",
    example: "Conducting an online poll only captures tech-savvy users, causing sampling bias.",
    note: "Một trong các lỗi nghiêm trọng làm mất đi giá trị pháp lý của kết luận thống kê.",
    topic: "Mathematics"
  },
  {
    id: 1125,
    term: "Statistical claim",
    definition: "Khẳng định thống kê: Tuyên bố kết luận dựa trên kết quả xử lý dữ liệu định lượng.",
    type: "concept",
    icon: "📢",
    example: "The advertisement is a statistical claim stating 9 out of 10 dentists recommend this brand.",
    note: "Cần chú ý bối cảnh phương pháp chọn mẫu trước khi tin tưởng.",
    topic: "Mathematics"
  },

  // ==========================================
  // 4. GEOMETRY AND TRIGONOMETRY (ID: 1126 - 1205)
  // ==========================================
  {
    id: 1126,
    term: "Area",
    definition: "Diện tích: Chỉ số đo độ rộng của bề mặt phẳng hai chiều giới hạn.",
    type: "concept",
    icon: "📐",
    example: "The formula for the area of a circle is A = πr².",
    note: "Cần nhớ công thức diện tích tam giác: 1/2 * base * height.",
    topic: "Mathematics"
  },
  {
    id: 1127,
    term: "Perimeter",
    definition: "Chu vi: Tổng độ dài tất cả các cạnh ranh giới bao quanh hình phẳng.",
    type: "concept",
    icon: "📏",
    example: "The perimeter of a rectangle with length l and width w is P = 2(l + w).",
    note: "Chu vi của đa thức chỉ cần cộng dồn tất cả các đường bao ngoài.",
    topic: "Mathematics"
  },
  {
    id: 1128,
    term: "Circumference",
    definition: "Chu vi đường tròn: Độ dài đường biên bao quanh hình tròn: C = 2πr.",
    type: "concept",
    icon: "⚪",
    example: "Calculate the circumference of a tire with a radius of 14 inches.",
    note: "Bằng tích số của số Pi với đường kính: C = πd.",
    topic: "Mathematics"
  },
  {
    id: 1129,
    term: "Surface area",
    definition: "Diện tích bề mặt (diện tích xung quanh / toàn phần): Tổng diện tích các mặt bên ngoài của hình hộp không gian 3 chiều.",
    type: "concept",
    icon: "📦",
    example: "A cube has a surface area of 6s².",
    note: "Thực hiện bóc tách riêng từng mặt hông tính diện tích rồi cộng dồn lại.",
    topic: "Mathematics"
  },
  {
    id: 1130,
    term: "Volume",
    definition: "Thể tích: Chỉ số đo lượng không gian ba chiều mà vật thể chiếm dụng.",
    type: "concept",
    icon: "📦",
    example: "The volume of a cylinder is V = πr²h.",
    note: "Hầu hết công thức thể tích khó được in sẵn ở trang đầu đề bài thi SAT.",
    topic: "Mathematics"
  },
  {
    id: 1131,
    term: "Rectangle",
    definition: "Hình chữ nhật: Hình bốn cạnh có bốn góc vuông, các cạnh đối diện song song và bằng nhau.",
    type: "concept",
    icon: "⬜",
    example: "Calculate the diagonal (đường chéo) of a rectangle using the Pythagorean theorem.",
    topic: "Mathematics"
  },
  {
    id: 1132,
    term: "Square",
    definition: "Hình vuông: Hình chữ nhật đặc biệt có bốn góc cân và bốn cạnh dài bằng nhau.",
    type: "concept",
    icon: "⬜",
    example: "If a square has side length s, its area is s² and its diagonal length is s√2.",
    note: "Đồ thị đường chéo chia hình vuông thành hai tam giác vuông cân 45-45-90.",
    topic: "Mathematics"
  },
  {
    id: 1133,
    term: "Triangle",
    definition: "Hình tam giác: Đa giác cơ sở có chính xác ba cạnh và ba góc.",
    type: "concept",
    icon: "🔺",
    example: "The interior angles of any triangle always add up to exactly 180 degrees.",
    note: "Bất đẳng thức tam giác: Tổng hai cạnh luôn phải lớn hơn độ dài cạnh còn lại.",
    topic: "Mathematics"
  },
  {
    id: 1134,
    term: "Parallelogram",
    definition: "Hình bình hành: Tứ giác có các cặp cạnh đối diện tuyệt đối song song đồng dạng.",
    type: "concept",
    icon: "▱",
    example: "The area of a parallelogram is base multiplied by perpendicular height.",
    note: "Các góc đối diện bằng nhau, hai góc kề bù một cạnh cộng lại bằng 180°.",
    topic: "Mathematics"
  },
  {
    id: 1135,
    term: "Trapezoid",
    definition: "Hình thang: Tứ giác có chứa chính xác ít nhất một cặp cạnh đối diện song song song trục.",
    type: "concept",
    icon: "⏢",
    example: "Area of a trapezoid = 0.5 * (a + b) * h (với a, b là hai đáy).",
    topic: "Mathematics"
  },
  {
    id: 1136,
    term: "Circle",
    definition: "Hình tròn: Tập hợp tất cả các điểm trên mặt phẳng cách đều một điểm tâm O cho trước một đoạn r.",
    type: "concept",
    icon: "⚪",
    example: "The standard circle equation has a radius r on the right hand side.",
    note: "Góc nội tiếp chắn nửa đường tròn luôn có số đo là một góc vuông 90°.",
    topic: "Mathematics"
  },
  {
    id: 1137,
    term: "Radius",
    definition: "Bán kính: Khoảng cách thẳng nối từ tâm hình tròn đến điểm bất kỳ trên chu vi biên.",
    type: "concept",
    icon: "🎯",
    example: "Double the radius of a circle quadruples (gấp 4) its area.",
    note: "Bán kính r bằng một nửa đường kính d.",
    topic: "Mathematics"
  },
  {
    id: 1138,
    term: "Diameter",
    definition: "Đường kính: Đoạn thẳng qua tâm kết nối hai điểm bất kỳ trên rìa đường tròn: d = 2r.",
    type: "concept",
    icon: "↔️",
    example: "The diameter is the longest possible chord of any circle.",
    topic: "Mathematics"
  },
  {
    id: 1139,
    term: "Chord",
    definition: "Dây cung: Đoạn thẳng đi qua lòng đường tròn kết nối hai điểm bất kỳ trên biên.",
    type: "concept",
    icon: "➖",
    example: "A perpendicular line from the center to a chord bisects (chia đôi) that chord.",
    topic: "Mathematics"
  },
  {
    id: 1140,
    term: "Arc",
    definition: "Cung tròn: Một phần đường cong thuộc chu vi bao ngoài của hình tròn.",
    type: "concept",
    icon: "⌒",
    example: "The measure of a minor arc (cung nhỏ) is equal to its central angle.",
    note: "Tỷ lệ độ dài cung trên chu vi luôn tương đương tỷ số góc ở tâm trên 360°.",
    topic: "Mathematics"
  },
  {
    id: 1141,
    term: "Sector",
    definition: "Hình quạt tròn: Phần diện tích bị giới hạn bởi hai bán kính và một cung tròn của hình tròn.",
    type: "concept",
    icon: "🍕",
    example: "Calculate the area of a sector with a 60-degree central angle.",
    note: "Tương ứng tỷ lệ diện tích quạt trên diện tích tổng bằng góc quạt trên 360°.",
    topic: "Mathematics"
  },
  {
    id: 1142,
    term: "Prism",
    definition: "Lăng trụ: Hình đa diện có 2 đáy hoàn toàn giống nhau nằm trên 2 mặt song song.",
    type: "concept",
    icon: "📦",
    example: "A triangular prism has rectangular side faces.",
    note: "Thể tích lăng trụ luôn bằng diện tích một mặt đáy nhân với chiều cao thẳng đứng.",
    topic: "Mathematics"
  },
  {
    id: 1143,
    term: "Cylinder",
    definition: "Hình trụ tròn: Khối hình có hai mặt đáy tròn đối xứng và mặt hông phẳng cuốn tròn quanh trục.",
    type: "concept",
    icon: "🛢️",
    example: "Volume of a cylinder = Base Area * Height = πr²h.",
    topic: "Mathematics"
  },
  {
    id: 1144,
    term: "Pyramid",
    definition: "Hình chóp: Khối hình có mặt đáy là đa giác và các mặt hông tụ chung về một điểm đỉnh nhọn.",
    type: "concept",
    icon: "📐",
    example: "The volume of a pyramid is only 1/3 of the volume of a prism with equivalent base and height.",
    note: "Thể tích = 1/3 * Diện tích đáy * Chiều cao h.",
    topic: "Mathematics"
  },
  {
    id: 1145,
    term: "Cone",
    definition: "Hình nón: Khối hình tương tự như hình chóp nhưng có đáy tròn đặc thù.",
    type: "concept",
    icon: "🍦",
    example: "A cone's volume is represented by the equation V = (1/3)πr²h.",
    topic: "Mathematics"
  },
  {
    id: 1146,
    term: "Sphere",
    definition: "Hình cầu: Tập hợp tất cả các điểm trong không gian cách một tâm O khoảng bán kính r cố định.",
    type: "concept",
    icon: "🥎",
    example: "The volume of a sphere is V = (4/3)πr³.",
    topic: "Mathematics"
  },
  {
    id: 1147,
    term: "Point",
    definition: "Điểm: Khái niệm cơ bản của hình học chỉ ra một vị trí độc lập không kích thước trong tọa độ.",
    type: "concept",
    icon: "📍",
    example: "Two lines intersect at a single point coordinate.",
    topic: "Mathematics"
  },
  {
    id: 1148,
    term: "Line",
    definition: "Đường thẳng: Tập tuyến tập hợp điểm phẳng thẳng hàng kéo dài vô tận về cả hai phía.",
    type: "concept",
    icon: "➖",
    example: "A straight line represents the shortest distance on a coordinate board.",
    topic: "Mathematics"
  },
  {
    id: 1149,
    term: "Segment",
    definition: "Đoạn thẳng: Đoạn nối thuộc đường thẳng bị giới hạn chặn lại bởi hai đầu mút xác định.",
    type: "concept",
    icon: "➖",
    example: "Find the midpoint of segment AB with endpoints A(1, 4) and B(5, 8).",
    note: "Công thức độ dài: √((x₂ - x₁)² + (y₂ - y₁)²).",
    topic: "Mathematics"
  },
  {
    id: 1150,
    term: "Ray",
    definition: "Tia: Một phần của đường thẳng có một điểm gốc và kéo dài vô tận về hướng còn lại.",
    type: "concept",
    icon: "➡️",
    example: "An angle consists of two rays emanating from a common vertex.",
    topic: "Mathematics"
  },
  {
    id: 1151,
    term: "Angle",
    definition: "Góc: Số đo độ mở khoảng giữa hai tia chung điểm khởi đầu.",
    type: "concept",
    icon: "📐",
    example: "An angle is measured either in degrees or in radians.",
    topic: "Mathematics"
  },
  {
    id: 1152,
    term: "Right angle",
    definition: "Góc vuông: Góc có số đo chính xác là 90 độ (hoặc π/2 radian).",
    type: "concept",
    icon: "📐",
    example: "Perpendicular lines intersect and create exactly four right angles.",
    topic: "Mathematics"
  },
  {
    id: 1153,
    term: "Acute angle",
    definition: "Góc nhọn: Góc có số đo nhỏ hơn 90 độ (lớn hơn 0 độ).",
    type: "concept",
    icon: "📐",
    example: "An equilateral triangle has three identical acute angles measuring 60 degrees each.",
    topic: "Mathematics"
  },
  {
    id: 1154,
    term: "Obtuse angle",
    definition: "Góc tù: Góc có độ lớn dao động lớn hơn 90 độ và nhỏ hơn 180 độ.",
    type: "concept",
    icon: "📐",
    example: "An obtuse triangle has exactly one angle that is greater than 90 degrees.",
    topic: "Mathematics"
  },
  {
    id: 1155,
    term: "Straight angle",
    definition: "Góc bẹt: Góc tạo bởi hai tia ngược nhau, số đo góc là 180 độ.",
    type: "concept",
    icon: "➖",
    example: "A straight line forms a straight angle of 180 degrees.",
    topic: "Mathematics"
  },
  {
    id: 1156,
    term: "Parallel lines",
    definition: "Các đường song song: Hai hay nhiều đường cùng nằm mặt phẳng không bao giờ tự giao nhau.",
    type: "concept",
    icon: "║",
    example: "Parallel lines in a coordinate system have equal slopes.",
    note: "Hai đường thẳng song song có chung hệ số góc (same slope m, m₁ = m₂) và khác giao Oy (b₁ != b₂).",
    topic: "Mathematics"
  },
  {
    id: 1157,
    term: "Perpendicular",
    definition: "Vuông góc: Mối giao cắt ranh giới tạo dập góc 90 độ cân xứng giữa hai đường thẳng.",
    type: "concept",
    icon: "⊥",
    example: "Verify if two lines are perpendicular by checking the product of their slopes.",
    note: "Tích hệ số dốc của hai đường vuông góc bằng -1 (m₁ * m₂ = -1). Độ dốc này là âm đảo ngược của độ dốc kia (negative reciprocal).",
    topic: "Mathematics"
  },
  {
    id: 1158,
    term: "Transversal",
    definition: "Đường cắt (đường ngang): Đường thẳng chạy cắt qua hai hay nhiều đường thẳng song song khác.",
    type: "concept",
    icon: "≠",
    example: "A transversal creates corresponding, alternate interior, and vertical angle pairs.",
    note: "Tạo ra các cặp góc đồng vị, so le trong bằng nhau tuyệt đối.",
    topic: "Mathematics"
  },
  {
    id: 1159,
    term: "Complementary angles",
    definition: "Hai góc phụ nhau: Hai góc có tổng số đo cộng lại vừa khít bằng 90 độ.",
    type: "concept",
    icon: "📐",
    example: "In a right triangle, the two non-right angles are complementary.",
    note: "Dẫn đến hằng đẳng thức lượng giác phụ nhau cực kỳ quan trọng: sin(x) = cos(90 - x).",
    topic: "Mathematics"
  },
  {
    id: 1160,
    term: "Supplementary angles",
    definition: "Hai góc kề bù: Hai góc có tổng số đo cộng lại bằng 180 độ.",
    type: "concept",
    icon: "➖",
    example: "Consecutive angles in a parallelogram are supplementary.",
    topic: "Mathematics"
  },
  {
    id: 1161,
    term: "Vertical angles",
    definition: "Góc đối đỉnh: Các góc đối diện nhau tạo ra khi hai đường thẳng giao nhau (luôn bằng nhau).",
    type: "concept",
    icon: "❌",
    example: "Vertical angles are congruent, meaning they have the same size.",
    topic: "Mathematics"
  },
  {
    id: 1162,
    term: "Adjacent angles",
    definition: "Góc kề nhau: Hai góc chung cạnh biên và điểm đỉnh nhưng không đè lấn lên nhau.",
    type: "concept",
    icon: "📐",
    example: "Adjacent angles share a common ray in between.",
    topic: "Mathematics"
  },
  {
    id: 1163,
    term: "Isosceles triangle",
    definition: "Tam giác cân: Tam giác chứa hai cạnh bằng nhau và đồng thời chứa hai góc ở đáy bằng nhau.",
    type: "concept",
    icon: "🔺",
    example: "An isosceles right triangle has angles of 45, 45, and 90 degrees.",
    note: "Đường cao hạ từ đỉnh đối diện đáy vừa là trung tuyến vừa là đường phân giác.",
    topic: "Mathematics"
  },
  {
    id: 1164,
    term: "Equilateral triangle",
    definition: "Tam giác đều: Tam giác đặc biệt có ba cạnh bằng nhau và ba góc đều bằng 60 độ.",
    type: "concept",
    icon: "🔺",
    example: "The altitude of an equilateral triangle splits it into two 30-60-90 right triangles.",
    note: "Chiều cao tam giác đều cạnh s luôn là: s√3 / 2; diện tích là: s²√3 / 4.",
    topic: "Mathematics"
  },
  {
    id: 1165,
    term: "Right triangle",
    definition: "Tam giác vuông: Tam giác chứa chính xác một góc bằng 90 độ.",
    type: "concept",
    icon: "📐",
    example: "Solve right triangles easily using trig functions or the Pythagorean theorem.",
    topic: "Mathematics"
  },
  {
    id: 1166,
    term: "Hypotenuse",
    definition: "Cạnh huyền: Cạnh dài nhất nằm đối diện trực diện với góc vuông trong tam giác vuông.",
    type: "concept",
    icon: "📐",
    example: "In a 3-4-5 right triangle, the hypotenuse is 5.",
    note: "Luôn là cạnh lớn nhất của tam giác vuông c² = a² + b².",
    topic: "Mathematics"
  },
  {
    id: 1167,
    term: "Leg",
    definition: "Cạnh góc vuông (Legs): Hai cạnh ngắn liên kết trực tiếp để cấu thành góc vuông trong tam giác vuông.",
    type: "concept",
    icon: "📐",
    example: "The legs of the right triangle are perpendicular to each other.",
    topic: "Mathematics"
  },
  {
    id: 1168,
    term: "Congruent",
    definition: "Bằng nhau (Đồng dạng hoàn toàn): Trạng thái các hình hình học có kích thước và hình dáng giống hệt khít nhau.",
    type: "concept",
    icon: "⚖️",
    example: "Two triangles are congruent if all corresponding sides and angles match precisely.",
    note: "Các phương án chứng minh: SSS, SAS, ASA, AAS, HL.",
    topic: "Mathematics"
  },
  {
    id: 1169,
    term: "Similar",
    definition: "Đồng dạng: Trạng thái các hình có cùng hình dạng, tỷ lệ các cạnh tương ứng bằng nhau, các góc tương ứng khớp nhau.",
    type: "concept",
    icon: "🔺🔺",
    example: "Similar triangles have proportional corresponding side lengths.",
    note: "Tỷ số diện tích của hai hình đồng dạng bằng bình phương tỷ số các cạnh tương ứng (k²).",
    topic: "Mathematics"
  },
  {
    id: 1170,
    term: "Trigonometry",
    definition: "Lượng giác: Lĩnh vực toán học nghiên cứu mối tương quan giữa góc và tỷ lệ cạnh của tam giác.",
    type: "concept",
    icon: "📐",
    example: "Trigonometry plays a crucial role in calculating wave patterns and elevations.",
    topic: "Mathematics"
  },
  {
    id: 1171,
    term: "Sine (sin)",
    definition: "Sin: Tỷ số lượng giác bằng độ dài cạnh đối chia độ dài cạnh huyền: Sin = Opp / Hyp.",
    type: "concept",
    icon: "📐",
    example: "In a right triangle with an angle of 30, the sine is exactly 0.5.",
    topic: "Mathematics"
  },
  {
    id: 1172,
    term: "Cosine (cos)",
    definition: "Cos: Tỷ số lượng giác bằng độ dài cạnh kề chia độ dài cạnh huyền: Cos = Adj / Hyp.",
    type: "concept",
    icon: "📐",
    example: "The cosine of a 60-degree angle of a right triangle is 0.5.",
    topic: "Mathematics"
  },
  {
    id: 1173,
    term: "Tangent (tan)",
    definition: "Tan: Tỷ số lượng giác bằng độ dài cạnh đối chia độ dài cạnh kề: Tan = Opp / Adj.",
    type: "concept",
    icon: "📐",
    example: "The tangent of 45 degrees is 1.",
    note: "Công thức liên hệ: tan(x) = sin(x) / cos(x).",
    topic: "Mathematics"
  },
  {
    id: 1174,
    term: "Opposite side",
    definition: "Cạnh đối: Cạnh nằm đối diện trực tiếp trước mặt góc nhọn đang được xét trong tam giác vuông.",
    type: "concept",
    icon: "👁️",
    example: "The opposite side of the references angle x.",
    topic: "Mathematics"
  },
  {
    id: 1175,
    term: "Adjacent side",
    definition: "Cạnh kề: Cạnh nối liền tạo ra góc nhọn đang xét, không phải cạnh huyền.",
    type: "concept",
    icon: "📐",
    example: "Find the adjacent side of the given angle in order to determine its cosine.",
    topic: "Mathematics"
  },
  {
    id: 1176,
    term: "Reference angle",
    definition: "Góc tham chiếu: Góc nhọn dương nhỏ nhất tạo bởi cạnh cuối (terminal side) của một góc xoay với trục hoành Ox.",
    type: "concept",
    icon: "📐",
    example: "An angle of 150 degrees has a reference angle of 180 - 150 = 30 degrees.",
    note: "Tìm lượng giác góc lớn bằng cách quy chiếu về góc nhọn nhỏ tương đương trong góc phần tư tương ứng.",
    topic: "Mathematics"
  },
  {
    id: 1177,
    term: "Pythagorean theorem",
    definition: "Định lý Pytago: Hệ thức trong tam giác vuông: Tổng bình phương hai cạnh góc vuông bằng bình phương cạnh huyền: a² + b² = c².",
    type: "concept",
    icon: "📐",
    example: "Use the Pythagorean theorem to calculate hypotenuse c.",
    topic: "Mathematics"
  },
  {
    id: 1178,
    term: "Pythagorean triple",
    definition: "Bộ ba Pytago: Bộ ba số nguyên dương (a, b, c) thỏa mãn chính xác phương trình Pytago a² + b² = c².",
    type: "concept",
    icon: "🔢",
    example: "Common Pythagorean triples include (3, 4, 5) and (5, 12, 13).",
    note: "Giúp nhẩm cực nhanh độ dài cạnh thứ ba trong tam giác vuông mà không tốn công bấm căn số làm mệt.",
    topic: "Mathematics"
  },
  {
    id: 1179,
    term: "Radian",
    definition: "Radian: Đơn vị đo góc dựa trên chiều dài cung tròn. Một vòng tròn hoàn chỉnh bằng 2π radian.",
    type: "concept",
    icon: "🍰",
    example: "An angle of π radians is equal to exactly 180 degrees.",
    note: "Công thức chuyển hóa: Radian = Độ * (π / 180).",
    topic: "Mathematics"
  },
  {
    id: 1180,
    term: "Degree",
    definition: "Độ: Đơn vị đo góc truyền thống quy chiếu một vòng tròn bằng đúng 360 độ.",
    type: "concept",
    icon: "°",
    example: "A right angle is ninety degrees (90°).",
    topic: "Mathematics"
  },
  {
    id: 1181,
    term: "Angle of elevation",
    definition: "Góc nâng (góc ngước): Góc nghiêng dốc lên tạo bởi tầm nhìn hướng mắt ngước lên so với phương nằm ngang.",
    type: "concept",
    icon: "↗️",
    example: "The surveyor measured the angle of elevation to the peak of the mountain.",
    note: "Luôn vẽ so sánh với phương nằm ngang làm chuẩn, tránh vẽ nhầm với phương thẳng đứng.",
    topic: "Mathematics"
  },
  {
    id: 1182,
    term: "Angle of depression",
    definition: "Góc hạ (góc cúi): Góc nghiêng dốc xuống tạo bởi tầm nhìn hướng mắt cúi xuống so với phương nằm ngang.",
    type: "concept",
    icon: "↘️",
    example: "The lighthouse keeper spotted the boat at a 15-degree angle of depression.",
    note: "Góc hạ luôn bằng góc nâng ở đầu mút đối diện do tính chất so le trong song song phẳng.",
    topic: "Mathematics"
  },
  {
    id: 1183,
    term: "Initial side",
    definition: "Cạnh đầu (cạnh khởi hành): Tia khởi đầu cố định cố hữu của một góc xoay nằm trùng trên phần dương trục Ox.",
    type: "concept",
    icon: "➖",
    example: "The initial side stays fixed while the terminal side rotates.",
    topic: "Mathematics"
  },
  {
    id: 1184,
    term: "Terminal side",
    definition: "Cạnh cuối: Tia góc xoay đạt được sau khi xoay một góc nhất định quanh gốc tọa độ.",
    type: "concept",
    icon: "➡️",
    example: "The position of the terminal side determines which quadrant the angle belongs to.",
    topic: "Mathematics"
  },
  {
    id: 1185,
    term: "Standard position",
    definition: "Vị trí chuẩn: Góc xoay có đỉnh nằm trùng tại tọa độ gốc (0,0) và cạnh đầu nằm trùng khít lên trục Ox dương.",
    type: "concept",
    icon: "📐",
    example: "An angle in standard position can be rotated clockwise or counterclockwise.",
    note: "Xoay ngược chiều kim đồng hồ là góc dương (+), xoay xuôi chiều kim đồng hồ là góc âm (-).",
    topic: "Mathematics"
  },
  {
    id: 1186,
    term: "Quadrant",
    definition: "Góc phần tư: Bốn phân miền vuông của mặt phẳng tọa độ Decartes được đánh ký hiệu I, II, III, IV.",
    type: "concept",
    icon: "◰",
    example: "In Quadrant II, x-coordinates are negative and y-coordinates are positive.",
    note: "Dấu lượng giác: QI (tất cả dương), QII (chỉ sin dương), QIII (chỉ tan/cotan dương), QIV (chỉ cos dương) → 'All Science Teachers Crazy'.",
    topic: "Mathematics"
  },
  {
    id: 1187,
    term: "Trigonometric ratio",
    definition: "Tỉ số lượng giác: Tỉ lệ so sánh các cạnh trong tam giác vuông tạo bởi các hàm sin, cos, tan.",
    type: "concept",
    icon: "📐",
    example: "Determine the trigonometric ratios of the angle theta mapped.",
    topic: "Mathematics"
  },
  {
    id: 1188,
    term: "Right triangle trigonometry",
    definition: "Lượng giác trong tam giác vuông: Phạm vi xem xét lượng giác thuần túy gói gọn trong tam giác vuông 0 - 90 độ.",
    type: "concept",
    icon: "📐",
    example: "Apply right triangle trigonometry to calculate the height of a building.",
    topic: "Mathematics"
  },
  {
    id: 1189,
    term: "Congruent triangles",
    definition: "Các tam giác bằng nhau: Hai tam giác có ba cạnh khớp đều và ba góc bằng thẳng nhau tương ứng.",
    type: "concept",
    icon: "🔺🔺",
    example: "Prove two congruent triangles by matching SAS parts.",
    topic: "Mathematics"
  },
  {
    id: 1190,
    term: "Congruence",
    definition: "Tính bằng nhau (tính tương đương hình học): Khái niệm đồng dạng hoàn mỹ khít nhau.",
    type: "concept",
    icon: "⚖️",
    example: "Congruence of triangles ensures equal perimeters and areas.",
    topic: "Mathematics"
  },
  {
    id: 1191,
    term: "Similar triangles",
    definition: "Các tam giác đồng dạng: Các tam giác có ba góc tương ứng bằng nhau, các cặp cạnh tương ứng tỷ lệ thuận đều.",
    type: "concept",
    icon: "🔺🔺",
    example: "Similar triangles are often used to find hard-to-measure heights using shadow lengths.",
    topic: "Mathematics"
  },
  {
    id: 1192,
    term: "Similarity",
    definition: "Tính đồng dạng: Thuộc tính duy trì tỷ lệ hình dạng bất chấp khác nhau về quy mô kích thước.",
    type: "concept",
    icon: "🔺🔺",
    example: "Similarity in geometries means a scale factor connects corresponding lengths.",
    topic: "Mathematics"
  },
  {
    id: 1193,
    term: "Unit circle",
    definition: "Đường tròn lượng giác: Đường tròn có tâm nằm tại (0,0) và có bán kính chuẩn hóa r = 1.",
    type: "concept",
    icon: "⚪",
    example: "On a unit circle, the coordinates of any point are (cos θ, sin θ).",
    note: "Độ dài hoành độ x chính là cos θ, độ dài tung độ y chính là sin θ.",
    topic: "Mathematics"
  },
  {
    id: 1194,
    term: "Coordinate plane",
    definition: "Mặt phẳng tọa độ (mặt phẳng Descartes): Hệ tọa độ hai chiều dựng bởi hai trục vuông góc nhau x và y.",
    type: "concept",
    icon: "◰",
    example: "Locate points by pairing numbers in the coordinate plane.",
    topic: "Mathematics"
  },
  {
    id: 1195,
    term: "x‑coordinate",
    definition: "Hoành độ: Chỉ số đo khoảng cách nằm ngang song song Ox từ điểm đến trục Oy.",
    type: "concept",
    icon: "👉",
    example: "The point (-3, 4) has an x-coordinate of -3.",
    topic: "Mathematics"
  },
  {
    id: 1196,
    term: "y‑coordinate",
    definition: "Tung độ: Chỉ số đo khoảng cách thẳng đứng song song Oy từ điểm đến trục Ox.",
    type: "concept",
    icon: "👆",
    example: "The point (5, -7) has a y-coordinate of -7.",
    topic: "Mathematics"
  },
  {
    id: 1197,
    term: "Inverse sine (arcsin)",
    definition: "Hàm lượng giác ngược của Sin: Từ tỉ số cạnh tìm góc lượng giác tương ứng. arcsin(y) = θ.",
    type: "concept",
    icon: "📐",
    example: "Inverse sine of 0.5 yields a 30-degree angle.",
    note: "Trên máy tính bỏ túi thường được ký hiệu là sin⁻¹.",
    topic: "Mathematics"
  },
  {
    id: 1198,
    term: "Inverse cosine (arccos)",
    definition: "Hàm lượng giác ngược của Cos: Từ tỉ số cạnh kề/huyền tìm ngược góc lượng giác θ = arccos(x).",
    type: "concept",
    icon: "📐",
    example: "Press arccos(0.5) to get a degree reading of 60°.",
    note: "Vết ký hiệu chuẩn hóa khác là cos⁻¹.",
    topic: "Mathematics"
  },
  {
    id: 1199,
    term: "Inverse tangent (arctan)",
    definition: "Hàm lượng giác ngược của Tan: Nhận tỉ lệ cạnh đối/kề để tính toán quy hồi góc nhọn: θ = arctan(z).",
    type: "concept",
    icon: "📐",
    example: "If tan(θ) = 1, then θ = arctan(1) = 45°.",
    note: "Ký hiệu máy tính bỏ túi quen thuộc: tan⁻¹.",
    topic: "Mathematics"
  },
  {
    id: 1200,
    term: "Trigonometric identity",
    definition: "Đồng nhất thức lượng giác: Đẳng thức lượng giác luôn có hiệu lực cân bằng với tất cả số đo góc θ.",
    type: "concept",
    icon: "🧮",
    example: "Simplify terms using trigonometric identity formulas.",
    topic: "Mathematics"
  },
  {
    id: 1201,
    term: "Pythagorean identity",
    definition: "Hệ thức Pytago lượng giác: Công thức nền tảng: sin²(θ) + cos²(θ) = 1.",
    type: "concept",
    icon: "🧮",
    example: "Applying the Pythagorean identity helps reduce sinusoids to simpler cosine steps.",
    note: "Rất hay áp dụng khi đề thi cho sẵn giá trị sin và yêu cầu tính giá trị cos trong góc phần tư thích hợp.",
    topic: "Mathematics"
  },
  {
    id: 1202,
    term: "Degree measure",
    definition: "Khai độ: Lượng mở của một góc được định lượng bộc lộ trực tiếp qua đơn vị độ (°).",
    type: "concept",
    icon: "°",
    example: "Make sure your calculated results match the desired degree measure request.",
    note: "Nhớ check xem máy tính cầm tay đang để chế độ 'D' (Degree) hay 'R' (Radian).",
    topic: "Mathematics"
  },
  {
    id: 1203,
    term: "Radian measure",
    definition: "Xích đo: Phương thức định giá trị lượng mở góc bằng độ dài cung quy chuẩn trên hệ radian.",
    type: "concept",
    icon: "🍰",
    example: "A right angle is exactly half pi in radian measure.",
    note: "Thực hiện phép chuyển đổi bằng cách lấy số đo độ nhân trực tiếp với hệ số (π/180).",
    topic: "Mathematics"
  },
  {
    id: 1204,
    term: "To convert between degrees and radians",
    definition: "Đổi đơn vị giữa độ và radian: Quy tắc nhân (π / 180) để đổi từ độ sang radian, hoặc nhân (180 / π) để đổi ngược lại.",
    type: "concept",
    icon: "🔄",
    example: "To convert 90° to radians: 90 * (π / 180) = π / 2.",
    note: "Mẹo nhớ: Muốn tìm radian thì để hệ số Pi đè lên trên tử số.",
    topic: "Mathematics"
  },
  {
    id: 1205,
    term: "Altitude (of a triangle)",
    definition: "Đường cao tam giác: Đoạn thẳng hạ vuông góc từ góc đỉnh bất kỳ vuông góc xuống cạnh đáy đối diện.",
    type: "concept",
    icon: "📐",
    example: "The area of a triangle is 0.5 * base * altitude.",
    note: "Ba đường cao của bất kỳ một hình tam giác nào cũng luôn đồng quy gặp nhau tại độc nhất một điểm trực tâm (orthocenter).",
    topic: "Mathematics"
  }
];
