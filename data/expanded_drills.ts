import { Topic, Question, SampleResponse } from "../types";

const createSample = (
  difficulty: "Easy" | "Medium" | "Hard" | "College Board Standard",
  answer: string,
  analysis: string,
  vocab: { term: string; definition: string }[] = [],
): SampleResponse => ({
  difficulty,
  answer,
  structureAnalysis: analysis,
  keyVocabulary: vocab,
});

export const expandedTopics: Topic[] = [
  // ================= VERBAL =================
  {
    id: "v_info",
    name: "Verbal: Information & Ideas",
    icon: "📖",
    questions: [
      {
        text: "[Central Ideas and Details] Many historians view the French Revolution not merely as a political upheaval, but as a profound cultural shift that permanently altered the way individuals saw their relationship with the state. While prior conflicts often resulted in new monarchs, this revolution envisioned a society where sovereignty resided inherently within the citizenry itself.\n\nWhich choice best describes the main idea of the text?\nA) The French Revolution was uniquely bloody compared to previous conflicts.\nB) The French Revolution fundamentally changed the concept of citizen sovereignty.\nC) Historians disagree on the primary causes of the French Revolution.\nD) The French Revolution was primarily an economic restructuring.",
        samples: [
          createSample(
            "Easy",
            "**B) The French Revolution fundamentally changed the concept of citizen sovereignty.**",
            "Đoạn văn nhấn mạnh cuộc cách mạng không chỉ là biến động chính trị mà là một sự thay đổi văn hóa sâu sắc, định hình lại việc chủ quyền nằm ở công dân (sovereignty resided inherently within the citizenry itself).",
            [
              { term: "Sovereignty", definition: "Chủ quyền" },
              { term: "Upheaval", definition: "Sự biến động" }
            ]
          )
        ]
      },
      {
        text: "[Command of Evidence] Researcher Dr. Aris claims that the introduction of a non-native algae species in Lake Orion has actively contributed to the rapid decline of the native trout population by depleting oxygen levels during summer months.\n\nWhich finding, if true, would most directly support Dr. Aris's claim?\nA) Oxygen levels in Lake Orion drop significantly during winter months when the algae is dormant.\nB) Native trout populations in neighboring lakes without the algae have remained stable over the same period.\nC) During summer months, areas of Lake Orion with high concentrations of the algae show nearly undetectable levels of oxygen, coinciding with massive trout die-offs.\nD) The non-native algae species was introduced to Lake Orion by recreational boaters.",
        samples: [
          createSample(
            "Medium",
            "**C) During summer months, areas of Lake Orion with high concentrations of the algae show nearly undetectable levels of oxygen, coinciding with massive trout die-offs.**",
            "Giả thuyết yêu cầu chứng minh: tảo ngoại lai làm giảm oxy vào mùa hè và dẫn đến sự suy giảm của cá hồi. Lựa chọn C kết nối trực tiếp mật độ tảo cao với tình trạng cạn kiệt oxy và cá chết hàng loạt trong mùa hè.",
            [
              { term: "Depleting", definition: "Làm cạn kiệt" },
              { term: "Coinciding", definition: "Trùng hợp" }
            ]
          )
        ]
      },
      {
        text: "[Inferences] Though titanium is incredibly strong and resistant to corrosion, its high reactivity with oxygen at elevated temperatures makes it exceedingly difficult to weld using traditional open-air methods. Therefore, specialized welding environments must be utilized.\n\nBased on the text, what can be reasonably inferred about welding titanium?\nA) It is impossible to weld titanium under any circumstances.\nB) Welding titanium requires an environment where oxygen is restricted or absent.\nC) Titanium becomes weak and brittle after it has been welded.\nD) Traditional open-air welding is the most cost-effective way to weld metals.",
        samples: [
          createSample(
            "Hard",
            "**B) Welding titanium requires an environment where oxygen is restricted or absent.**",
            "Đoạn văn nêu rõ titanium phản ứng cao với oxy ở nhiệt độ cao nên khó hàn ngoài trời (open-air). Suy luận logic: môi trường hàn chuyên dụng (specialized welding environments) phải là nơi hạn chế hoặc không có oxy.",
            [
              { term: "Reactivity", definition: "Khả năng phản ứng" },
              { term: "Elevated", definition: "Được nâng cao" }
            ]
          )
        ]
      },
      {
        text: "[College Board Standard] In a study of urban microclimates, researchers found that neighborhoods with extensive tree canopies experience daytime temperatures up to 5 degrees Celsius lower than adjacent neighborhoods with minimal vegetation. However, the cooling effect is highly localized, dissipating entirely within 50 meters of the nearest group of trees.\n\nBased on the text, which statement is most accurate regarding the cooling effect of the tree canopies?\nA) It completely eliminates the need for air conditioning in urban areas.\nB) It has a substantial impact on overall global temperatures.\nC) It provides significant temperature reduction, but only in the immediate vicinity of the trees.\nD) It is most pronounced during the winter months.",
        samples: [
          createSample(
            "College Board Standard",
            "**C) It provides significant temperature reduction, but only in the immediate vicinity of the trees.**",
            "Đoạn văn cho biết bóng cây giảm nhiệt độ đáng kể (5 degrees Celsius lower) nhưng hiệu ứng này cực kỳ cục bộ (highly localized) và tan biến trong phạm vi 50 mét.",
            [
              { term: "Canopy", definition: "Tán cây" },
              { term: "Dissipating", definition: "Tan biến" }
            ]
          )
        ]
      }
    ]
  },
  {
    id: "v_craft",
    name: "Verbal: Craft & Structure",
    icon: "🏗️",
    questions: [
      {
        text: "[Words in Context] Despite the overwhelming evidence presented by the prosecuting attorney, the witness remained completely ________, maintaining a calm and unreadable expression throughout the tense cross-examination.\n\nWhich choice completes the text with the most logical and precise word?\nA) ostentatious\nB) impassive\nC) euphoric\nD) volatile",
        samples: [
          createSample(
            "Easy",
            "**B) impassive**",
            "Từ khóa 'calm and unreadable expression' (biểu cảm bình tĩnh và không thể đoán được) đòi hỏi một từ có nghĩa là không biểu lộ cảm xúc. 'Impassive' chính xác mang nghĩa này.",
            [
              { term: "Impassive", definition: "Bình thản, không biểu lộ cảm xúc" },
              { term: "Volatile", definition: "Dễ bay hơi, dễ thay đổi (tính khí)" }
            ]
          )
        ]
      },
      {
        text: "[Text Structure and Purpose] The invention of the printing press by Johannes Gutenberg in the 15th century is often heralded as a turning point in history. Prior to this, books were painstakingly copied by hand, making them rare and expensive. With the advent of the press, knowledge could be disseminated widely and rapidly, laying the groundwork for the Renaissance and the Scientific Revolution. \n\nWhich choice best states the main purpose of the text?\nA) To compare Gutenberg's printing press with modern digital publishing.\nB) To argue that hand-copied books were superior in artistic quality.\nC) To explain the mechanism of the 15th-century printing press.\nD) To highlight the transformational historical impact of the printing press.",
        samples: [
          createSample(
            "Medium",
            "**D) To highlight the transformational historical impact of the printing press.**",
            "Đoạn văn mô tả việc phát minh ra máy in là bước ngoặt (turning point) và việc phổ biến kiến thức đã tạo nền tảng cho Phục hưng và Cách mạng khoa học. Mục đích chính là nhấn mạnh tác động lịch sử to lớn.",
            [
              { term: "Heralded", definition: "Được ca ngợi, báo trước" },
              { term: "Disseminated", definition: "Được phổ biến, gieo rắc" }
            ]
          )
        ]
      },
      {
        text: "[Cross-Text Connections] Text 1: Many architects advocate for the use of raw concrete (Brutalism) to express honesty in materials. They argue that covering up structural elements hides the truth of a building's creation.\n\nText 2: While the philosophical appeal of 'honest' materials is understandable, brutalist buildings often feel oppressive and hostile to the people who actually have to live and work in them. Architecture must prioritize human comfort over philosophical purity.\n\nBased on the texts, how would the author of Text 2 most likely respond to the primary argument of Text 1?\nA) By suggesting that raw concrete is mathematically unstable.\nB) By arguing that prioritizing philosophical 'honesty' neglects the real-world emotional impact on building occupants.\nC) By agreeing entirely that hiding structural elements is deceitful.\nD) By proposing that wood is a more honest material than concrete.",
        samples: [
          createSample(
            "Hard",
            "**B) By arguing that prioritizing philosophical 'honesty' neglects the real-world emotional impact on building occupants.**",
            "Text 1 ủng hộ việc dùng bê tông thô để thể hiện sự trung thực. Text 2 hiểu điểm triết học này nhưng phản bác rằng nó tạo cảm giác áp bức và không ưu tiên sự thoải mái của con người. Lựa chọn B phản ánh chính xác sự phản biện này.",
            [
              { term: "Oppressive", definition: "Đè nén, áp bức" },
              { term: "Philosophical purity", definition: "Sự thuần khiết triết học" }
            ]
          )
        ]
      },
      {
        text: "[College Board Standard] In her poem 'The Echoing Green,' William Blake portrays a vibrant, joyful scene of children playing before nightfall. The imagery shifts subtly towards the end: 'The sun does descend, / And our sports have an end.' \n\nWhich choice best describes the function of these final lines within the poem as a whole?\nA) They introduce a sudden, terrifying conflict into an otherwise peaceful setting.\nB) They logically resolve a narrative mystery set up in the first stanza.\nC) They signal a natural and inevitable transition from the energy of day to the quiet rest of night.\nD) They express the author's deep regret over the passing of childhood.",
        samples: [
          createSample(
            "College Board Standard",
            "**C) They signal a natural and inevitable transition from the energy of day to the quiet rest of night.**",
            "Các dòng thơ cuối cho thấy mặt trời lặn và trò chơi kết thúc. Vai trò của đoạn này là chuyển từ nhịp điệu sinh động của ban ngày sang sự nghỉ ngơi yên tĩnh của ban đêm một cách tự nhiên (không mang tính xung đột kinh hoàng hay giải quyết bí ẩn).",
            [
              { term: "Subtly", definition: "Một cách tinh tế" },
              { term: "Inevitable", definition: "Không thể tránh khỏi" }
            ]
          )
        ]
      }
    ]
  },
  {
    id: "v_expression",
    name: "Verbal: Expression of Ideas",
    icon: "🗣️",
    questions: [
      {
        text: "[Transitions] Studying ancient ice cores allows scientists to track historical climate changes with remarkable precision. __________, modern satellite data continues to provide vital real-time monitoring of current ice cap melting.\n\nWhich choice completes the text with the most logical transition?\nA) Fortunately\nB) For example\nC) By contrast\nD) Similarly",
        samples: [
          createSample(
            "Easy",
            "**D) Similarly**",
            "Câu 1 nói về việc nghiên cứu lõi băng để theo dõi khí hậu lịch sử. Câu 2 nói về vệ tinh dùng để theo dõi băng tan hiện tại. Hai ý này cung cấp thông tin tương đồng, bổ sung (đều dùng công nghệ/kỹ thuật để đo lường khí hậu/băng). 'Similarly' là hợp lý nhất.",
            [
              { term: "Ice cores", definition: "Lõi băng" },
              { term: "Precision", definition: "Độ chính xác" }
            ]
          )
        ]
      },
      {
        text: "[Rhetorical Synthesis] A student is writing a paper about the composer Johann Sebastian Bach.\n- Bach was a German composer of the Baroque period.\n- He wrote over 1,000 known compositions.\n- His work 'The Well-Tempered Clavier' is considered a masterpiece of Western music.\n- The student wants to emphasize Bach's productivity.\n\nWhich choice most effectively uses relevant information from the notes to accomplish this goal?\nA) Johann Sebastian Bach, a German composer of the Baroque period, wrote 'The Well-Tempered Clavier.'\nB) Recognized for the masterpiece 'The Well-Tempered Clavier,' Bach was a prominent Baroque composer.\nC) Demonstrating his remarkable prolificacy, Johann Sebastian Bach wrote over 1,000 known compositions during his lifetime.\nD) 'The Well-Tempered Clavier' is just one of many important pieces in Western music history.",
        samples: [
          createSample(
            "Medium",
            "**C) Demonstrating his remarkable prolificacy, Johann Sebastian Bach wrote over 1,000 known compositions during his lifetime.**",
            "Mục tiêu là nhấn mạnh sự năng suất (productivity). Lựa chọn C dùng từ 'prolificacy' (năng suất / phong phú) và số liệu 'over 1,000' để đáp ứng chính xác mục tiêu này.",
            [
              { term: "Productivity", definition: "Năng suất" },
              { term: "Prolificacy", definition: "Sự sáng tác nhiều" }
            ]
          )
        ]
      },
      {
        text: "[Transitions] Initially, the city council planned to convert the abandoned warehouse into a public park to increase green space. ________, soil tests revealed severe industrial contamination, forcing them to pivot to building a sealed solar energy farm instead.\n\nWhich choice completes the text with the most logical transition?\nA) Therefore\nB) Indeed\nC) Furthermore\nD) However",
        samples: [
          createSample(
            "Hard",
            "**D) However**",
            "Có sự chuyển đổi tương phản giữa kế hoạch ban đầu (làm công viên xanh) và hậu quả sau đó (phát hiện ô nhiễm, phải làm trang trại năng lượng mặt trời kín). 'However' thể hiện sự tương phản này chuẩn xác.",
            [
              { term: "Contamination", definition: "Sự ô nhiễm" },
              { term: "Pivot", definition: "Xoay trục, đổi hướng" }
            ]
          )
        ]
      },
      {
        text: "[College Board Standard] To create a truly representative sample, the pollsters ensured that demographics regarding age and income matched the national census data. __________, they weighted the responses to account for regional population disparities before publishing the ultimate election forecast.\n\nWhich choice completes the text with the most logical transition?\nA) Additionally\nB) Conversely\nC) In retrospect\nD) For instance",
        samples: [
          createSample(
            "College Board Standard",
            "**A) Additionally**",
            "Câu trước nói về các thao tác cân đối theo tuổi và thu nhập. Câu sau tiếp tục bổ sung thêm thao tác hiệu chỉnh (weighting the responses) cho chênh lệch vùng miền. Đây là sự bổ sung nên 'Additionally' là tốt nhất.",
            [
              { term: "Demographics", definition: "Nhân khẩu học" },
              { term: "Disparities", definition: "Sự chênh lệch" }
            ]
          )
        ]
      }
    ]
  },
  {
    id: "v_conventions",
    name: "Verbal: Standard English Conventions",
    icon: "✍️",
    questions: [
      {
        text: "[Boundaries] The new software update aims to fix several major issues ______ improved battery life, smoother animations, and enhanced security protocols.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?\nA) issues: improved\nB) issues; improved\nC) issues, improved\nD) issues improved",
        samples: [
          createSample(
            "Easy",
            "**A) issues: improved**",
            "Trước chỗ trống là một mệnh đề độc lập trọn vẹn (The new software update aims to fix several major issues). Sau chỗ trống là một danh sách các liệt kê làm rõ các 'issues/features' đó. Dấu hai chấm (colon) được dùng chuẩn xác để giới thiệu danh sách hoặc giải thích thêm.",
            [
              { term: "Conventions", definition: "Nguyên tắc chuẩn mực" },
              { term: "Protocols", definition: "Giao thức" }
            ]
          )
        ]
      },
      {
        text: "[Form, Structure, and Sense] By the time the architectural committee finalizes their review of the submitted designs, the deadline for the major city grant _________.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?\nA) passes\nB) passed\nC) will have passed\nD) is passing",
        samples: [
          createSample(
            "Medium",
            "**C) will have passed**",
            "Cụm 'By the time + hiện tại đơn (finalizes)' chỉ một mốc thời gian trong tương lai. Sự việc hoàn thành trước một thời điểm trong tương lai phải sử dụng thì Tương lai hoàn thành (will have + V3/ed).",
            [
              { term: "Finalizes", definition: "Hoàn thiện, chốt lại" },
              { term: "Grant", definition: "Khoản tài trợ" }
            ]
          )
        ]
      },
      {
        text: "[Boundaries - Comma Splice] The cheetah is famously known as the fastest land animal on Earth ______ it can accelerate from 0 to 60 miles per hour in just three seconds.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?\nA) Earth it\nB) Earth, it\nC) Earth, because it\nD) Earth; it",
        samples: [
          createSample(
            "Hard",
            "**D) Earth; it**",
            "Cả hai vế đều là mệnh đề độc lập. Nếu nối bằng dấu phẩy (B) sẽ tạo lỗi comma splice. Phải dùng dấu chấm phẩy (semicolon) hoặc dấu chấm để ngăn cách hai mệnh đề độc lập.",
            [
              { term: "Accelerate", definition: "Tăng tốc" },
              { term: "Comma Splice", definition: "Lỗi nối hai mệnh đề độc lập bằng dấu phẩy" }
            ]
          )
        ]
      },
      {
        text: "[College Board Standard] In 1859, a massive solar flare caused global disruptions to telegraph networks. This event, now known as the Carrington Event, demonstrated ______ vulnerability to geomagnetic storms.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?\nA) humanities\nB) humanities'\nC) humanity's\nD) humanitys",
        samples: [
          createSample(
            "College Board Standard",
            "**C) humanity's**",
            "Cần một dạng sở hữu cách số ít của từ 'humanity' (nhân loại) để chỉ sự dễ bị tổn thương (vulnerability) của nhân loại. Dạng đúng là 'humanity\\'s'. Khái niệm 'humanity' thường không dùng số nhiều 'humanities' khi nói đến nhân loại nói chung.",
            [
              { term: "Vulnerability", definition: "Sự dễ bị tổn thương" },
              { term: "Geomagnetic", definition: "Thuộc về địa từ" }
            ]
          )
        ]
      }
    ]
  },
  
  // ================= MATH =================
  {
    id: "m_algebra",
    name: "Math: Algebra",
    icon: "➗",
    questions: [
      {
        text: "[Linear Equations] If 4(x - 2) + 3 = 19, what is the value of 3x?\nA) 12\nB) 15\nC) 18\nD) 21",
        samples: [
          createSample(
            "Easy",
            "**C) 18**",
            "Giải phương trình: 4(x - 2) + 3 = 19 -> 4(x - 2) = 16 -> x - 2 = 4 -> x = 6. Suy ra 3x = 18.",
            [
              { term: "Linear Equation", definition: "Phương trình tuyến tính (bậc 1)" }
            ]
          )
        ]
      },
      {
        text: "[System of Linear Equations] A vendor sells hot dogs for $3 and pretzels for $2. In one day, they sell a total of 150 items and make $380. How many hot dogs did they sell?\nA) 60\nB) 70\nC) 80\nD) 100",
        samples: [
          createSample(
            "Medium",
            "**C) 80**",
            "Hệ phương trình:\nh + p = 150\n3h + 2p = 380\nTừ PT(1) có p = 150 - h. Thay vào PT(2): 3h + 2(150 - h) = 380 -> 3h + 300 - 2h = 380 -> h = 80.",
            [
              { term: "Substitution", definition: "Phương pháp thế" }
            ]
          )
        ]
      },
      {
        text: "[Linear Inequalities] The total cost C of manufacturing n units is C = 50n + 1200. If the manufacturer wants to keep the total cost strictly under $8000, what is the maximum whole number of units they can produce?\nA) 135\nB) 136\nC) 137\nD) 138",
        samples: [
          createSample(
            "Hard",
            "**A) 135**",
            "50n + 1200 < 8000 -> 50n < 6800 -> n < 136. Vì n phải là số nguyên nên lượng lớn nhất stricly under 136 là 135.",
            [
              { term: "Strictly under", definition: "Nhỏ hơn một cách nghiêm ngặt (<)" }
            ]
          )
        ]
      },
      {
        text: "[College Board Standard] The equation 3x + 4y = 24 and cx + 8y = 48 represent the same line. What is the value of c?\nA) 3\nB) 6\nC) 8\nD) 12",
        samples: [
          createSample(
            "College Board Standard",
            "**B) 6**",
            "Nếu hai phương trình biểu diễn cùng một đường (infinitely many solutions/same line) thì các tỉ số hệ số phai bằng nhau: 3/c = 4/8 = 24/48. -> 3/c = 1/2 -> c = 6.",
            [
              { term: "Same line", definition: "Cùng một đường thẳng (vô số nghiệm)" }
            ]
          )
        ]
      }
    ]
  },
  {
    id: "m_advanced",
    name: "Math: Advanced Math",
    icon: "📈",
    questions: [
      {
        text: "[Equivalent Expressions] Which of the following is equivalent to (x^2 - 4) / (x + 2) for all x \u2260 -2?\nA) x + 2\nB) x - 2\nC) x^2\nD) x",
        samples: [
          createSample(
            "Easy",
            "**B) x - 2**",
            "Hằng đẳng thức x^2 - 4 = (x - 2)(x + 2). Nên (x^2 - 4)/(x+2) = (x - 2)(x + 2)/(x+2) = x - 2.",
            [
              { term: "Difference of squares", definition: "Hiệu hai bình phương (Hằng đẳng thức đáng nhớ)" }
            ]
          )
        ]
      },
      {
        text: "[Nonlinear Equations - Quadratic] The function f(x) = x^2 - 6x + c has exactly one real root. What is the value of c?\nA) -9\nB) 0\nC) 6\nD) 9",
        samples: [
          createSample(
            "Medium",
            "**D) 9**",
            "Để phương trình bậc 2 có đúng một nghiệm (nghiệm kép), Delta (discriminant) phải bằng 0. b^2 - 4ac = (-6)^2 - 4(1)(c) = 36 - 4c = 0 -> c = 9.",
            [
              { term: "Discriminant", definition: "Biệt thức (Delta)" }
            ]
          )
        ]
      },
      {
        text: "[Nonlinear Equations - Exponential] A population of bacteria initially consists of 500 cells and doubles every 3 hours. Which equation models the population P after t hours?\nA) P(t) = 500(2)^t\nB) P(t) = 500(2)^(3t)\nC) P(t) = 500(2)^(t/3)\nD) P(t) = 500(3)^(t/2)",
        samples: [
          createSample(
            "Hard",
            "**C) P(t) = 500(2)^(t/3)**",
            "Công thức chuẩn lũy thừa: P = P_0 * r^(t/k). Ban đầu P_0 = 500. Tốc độ nhân đôi (r = 2). Chu kỳ nhân đôi là k = 3 giờ. Vậy là 500(2)^(t/3).",
            [
              { term: "Exponential growth", definition: "Tăng trưởng theo hàm mũ" }
            ]
          )
        ]
      },
      {
        text: "[College Board Standard] What is the sum of the solutions to the equation |2x - 5| = 13?\nA) 5\nB) 8\nC) 10\nD) 13",
        samples: [
          createSample(
            "College Board Standard",
            "**A) 5**",
            "Hàm trị tuyệt đối có hai trường hợp: 2x - 5 = 13 (x = 9) và 2x - 5 = -13 (2x = -8 -> x = -4). Tổng của 9 và -4 là 5. \n(Tip: Sum of roots for |ax + b| = c is always -2b/a).",
            [
              { term: "Absolute value", definition: "Giá trị tuyệt đối" }
            ]
          )
        ]
      }
    ]
  },
  {
    id: "m_problem_solving",
    name: "Math: Problem Solving & Data Analysis",
    icon: "📊",
    questions: [
      {
        text: "[Percentages] A store is having a 20% off sale. If the discounted price of a jacket is $48, what was its original price?\nA) $57.60\nB) $60\nC) $68\nD) $80",
        samples: [
          createSample(
            "Easy",
            "**B) $60**",
            "Giảm giá 20% tức là bán với giá 80% giá gốc. 0.8 * Original = 48 -> Original = 48 / 0.8 = 60.",
            [
              { term: "Discounted price", definition: "Giá sau giảm" }
            ]
          )
        ]
      },
      {
        text: "[Ratios and Proportions] In a certain map, 3 centimeters represents an actual distance of 50 miles. If two cities are 12 centimeters apart on the map, what is the actual distance between them in miles?\nA) 150\nB) 200\nC) 250\nD) 600",
        samples: [
          createSample(
            "Medium",
            "**B) 200**",
            "Theo tỉ lệ thuận: (3 cm / 50 miles) = (12 cm / x miles) -> x = (12 * 50) / 3 = 600 / 3 = 200.",
            [
              { term: "Proportion", definition: "Tỉ lệ thuận" }
            ]
          )
        ]
      },
      {
        text: "[Statistics - Inference] A random sample of 200 voters in a district finds that 120 support a new infrastructure bill. If the district has a total of 15,000 voters, estimating from the sample, how many voters in the entire district are expected to support the bill?\nA) 6,000\nB) 8,000\nC) 9,000\nD) 12,000",
        samples: [
          createSample(
            "Hard",
            "**C) 9,000**",
            "Tỷ lệ ủng hộ trong mẫu: 120/200 = 60%. Áp dụng tỷ lệ này cho toàn khu vực: 0.6 * 15,000 = 9,000.",
            [
              { term: "Random sample", definition: "Mẫu ngẫu nhiên" }
            ]
          )
        ]
      },
      {
        text: "[College Board Standard] The mean of a data set containing 10 numbers is 25. If the number 70 is added to the set, what is the new mean of the 11 numbers?\nA) 25\nB) 29.09\nC) 47.5\nD) 35",
        samples: [
          createSample(
            "College Board Standard",
            "**B) 29.09**",
            "Tổng của 10 số ban đầu = 10 * 25 = 250. Tổng mới = 250 + 70 = 320. Mean mới = 320 / 11 ≈ 29.09.",
            [
              { term: "Mean", definition: "Trung bình cộng" }
            ]
          )
        ]
      }
    ]
  },
  {
    id: "m_geometry",
    name: "Math: Geometry & Trigonometry",
    icon: "📐",
    questions: [
      {
        text: "[Area and Volume] A rectangular box has a length of 5, a width of w, and a height of 4. If the volume of the box is 120, what is the value of w?\nA) 5\nB) 6\nC) 8\nD) 12",
        samples: [
          createSample(
            "Easy",
            "**B) 6**",
            "Công thức thể tích hộp hình chữ nhật: V = length * width * height. Suy ra 120 = 5 * w * 4 -> 120 = 20w -> w = 6.",
            [
              { term: "Volume", definition: "Thể tích" },
              { term: "Rectangular box", definition: "Hộp hình chữ nhật" }
            ]
          )
        ]
      },
      {
        text: "[Angles and Triangles] In triangle ABC, the measure of angle A is 40° and the measure of angle B is 70°. What type of triangle is ABC?\nA) Scalene\nB) Right\nC) Isosceles\nD) Equilateral",
        samples: [
          createSample(
            "Medium",
            "**C) Isosceles**",
            "Tổng ba góc trong tam giác là 180°. Góc C = 180° - 40° - 70° = 70°. Tam giác có 2 góc bằng nhau (B = C = 70°) là tam giác cân (Isosceles).",
            [
              { term: "Isosceles", definition: "Tam giác cân" },
              { term: "Scalene", definition: "Tam giác thường (các cạnh khác nhau)" }
            ]
          )
        ]
      },
      {
        text: "[Trigonometry] In a right triangle, the acute angles are X and Y. If sin(X) = 4/5, what is the value of cos(Y)?\nA) 3/5\nB) 4/5\nC) 5/4\nD) 5/3",
        samples: [
          createSample(
            "Hard",
            "**B) 4/5**",
            "Trong một tam giác vuông, sin của một góc nhọn bằng cos của góc nhọn phụ (Bổ đề sin(X) = cos(90 - X)). Do X và Y là 2 góc phụ nhau, sin(X) = cos(Y) = 4/5.",
            [
              { term: "Acute angle", definition: "Góc nhọn" },
              { term: "Complementary angles", definition: "Góc phụ nhau (có tổng là 90 độ)" }
            ]
          )
        ]
      },
      {
        text: "[College Board Standard] A circle in the xy-plane has the equation x^2 + y^2 - 6x + 8y = 11. What is the radius of the circle?\nA) 4\nB) 6\nC) 11\nD) 36",
        samples: [
          createSample(
            "College Board Standard",
            "**B) 6**",
            "Hoàn thành bình phương: (x^2 - 6x + 9) + (y^2 + 8y + 16) = 11 + 9 + 16\n(x - 3)^2 + (y + 4)^2 = 36. Cấu trúc chuẩn r^2 = 36, nên bán kính r = 6.",
            [
              { term: "Completing the square", definition: "Hoàn thành hình bình phương" }
            ]
          )
        ]
      }
    ]
  }
];
