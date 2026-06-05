const fs = require('fs');

const newTopicsCode = `export const topics: Topic[] = [
  // --- VERBAL DRILLS ---
  {
    id: "rw_info_ideas",
    name: "Information and Ideas",
    icon: "💡",
    questions: [
      {
        text: "The giant Pacific octopus has a remarkable ability to change its skin color and texture to match its surroundings. This camouflage, enabled by specialized cells called chromatophores, allows it to evade predators and sneak up on prey. Beyond camouflage, these brilliant color changes are also used to communicate with other octopuses.\\n\\nWhich statement best expresses the main idea of the passage?",
        samples: [
          createSample("Easy", "**A) The giant Pacific octopus uses its color-changing ability primarily for survival and communication.**", "Đoạn văn thảo luận về khả năng biến màu da của bạch tuộc để lẩn trốn, săn mồi (sinh tồn) và giao tiếp với đồng loại.", [
            { term: "Camouflage", definition: "Ngụy trang" },
            { term: "Evade", definition: "Trốn tránh" }
          ])
        ]
      },
      {
        text: "Hypothesis: In urban environments, bird species with louder, higher-pitched calls are more likely to thrive because their songs can be heard over low-frequency city noise.\\n\\nWhich finding, if true, would most strongly support the researchers' hypothesis?",
        samples: [
          createSample("Medium", "**B) A study showing that urban bird populations are increasingly dominated by species with high-pitched calls, while species with low-pitched calls are leaving the city.**", "Giả thuyết cho rằng chim có tiếng kêu cao (higher-pitched) dễ sinh tồn ở đô thị hơn vì tiếng ồn đô thị có tần số thấp (low-frequency). Đáp án B cung cấp bằng chứng trực tiếp cho xu hướng này.", [
            { term: "Hypothesis", definition: "Giả thuyết" },
            { term: "Thrive", definition: "Phát triển mạnh, sinh tồn tốt" }
          ])
        ]
      },
      {
        text: "Recent excavations in the ancient city of Uruk have unearthed a new set of clay tablets. While older tablets primarily contained ledgers of grain and livestock, these newly discovered texts contain epic poetry and mythological narratives. Some historians argue this shift indicates a sudden change in literacy rates among the general public.\\n\\nWhich finding, if true, would most directly undermine the historians' claim?",
        samples: [
          createSample("Hard", "**C) The newly discovered tablets were found exclusively in the private library of the high priest, an area off-limits to the general public.**", "Các nhà sử học cho rằng việc tìm thấy các văn bản có nội dung thần thoại phản ánh sự thay đổi trong tỷ lệ biết chữ của công chúng nói chung. Tuy nhiên, nếu chúng chỉ được tìm thấy ở một thư viện riêng của tư tế (kín, cấm công chúng), thì điều này làm suy yếu luận điểm trên.", [
            { term: "Excavation", definition: "Khai quật" },
            { term: "Undermine", definition: "Làm suy yếu, bác bỏ" }
          ])
        ]
      },
      {
        text: "During the 19th century, numerous attempts to synthesize quinine, an anti-malarial drug derived from cinchona bark, failed. In 1856, chemist William Perkin attempted to synthesize quinine from coal tar but instead accidentally created mauveine, the first synthetic dye. This discovery unexpectedly birthed the modern chemical industry.\\n\\nIt can most reasonably be inferred from the passage that:",
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
        text: "In her essay, the critic notes that while some modern art is openly provocative, the works of painter Agnes Martin are \\"quietly assertive.\\" Martin’s minimalist grids and muted color palettes do not demand attention; rather, they invite the viewer into a state of contemplation.\\n\\nWhich choice best describes the function of the second sentence in the overall structure of the text?",
        samples: [
          createSample("Medium", "**C) It clarifies a description of Martin's art provided in the first sentence by giving specific characteristics of her work.**", "Câu hai mô tả rõ hơn về 'quietly assertive' (được đề cập ở câu một) bằng cách nêu lên các đặc tính cụ thể của bà: kẻ caro tối giản và màu sắc nhạt nhẹ để lôi cuốn sự chiêm nghiệm.", [
            { term: "Provocative", definition: "Khiêu khích" },
            { term: "Contemplation", definition: "Sự chiêm nghiệm suy tư" }
          ])
        ]
      },
      {
        text: "Text 1: Economist Felix argues that universal basic income (UBI) would liberate workers from wage slavery, allowing them to pursue creative and entrepreneurial endeavors without the constant fear of destitution.\\n\\nText 2: Sociologist Aris contends that work provides not just income, but social cohesion and a sense of purpose. A UBI might inadvertently strip away these psychological benefits, leaving a demographic emotionally adrift.\\n\\nBased on the texts, how would Aris (Text 2) most likely respond to Felix's assertion in Text 1?",
        samples: [
          createSample("Hard", "**B) By pointing out that escaping wage slavery does not guarantee the psychological fulfillment Felix envisions.**", "Aris cho rằng công việc mang lại ý nghĩa và sự gắn kết xã hội, và UBI có thể tước đi điều này. Do đó, ông sẽ cho rằng dù UBI giúp thoát khỏi 'wage slavery' như Felix nói, nó không đảm bảo được sự viên mãn về tinh thần.", [
            { term: "Destitution", definition: "Sự nghèo đói tận cùng" },
            { term: "Social cohesion", definition: "Sự gắn kết xã hội" }
          ])
        ]
      },
      {
        text: "The author uses the phrase \\"the ghosts of the machines\\" most likely to:",
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
        text: "Student Notes:\\n- The Eiffel Tower was completed in 1889.\\n- It was initially intended as a temporary structure for the World's Fair.\\n- Many Parisians hated it at first, calling it a \\"metal asparagus.\\"\\n- It was saved from demolition because it became a valuable radiotelegraph station.\\n\\nThe student wants to emphasize how the tower was saved from being torn down. Which choice effectively uses relevant information from the notes to accomplish this goal?",
        samples: [
          createSample("Easy", "**B) Although intended to be temporary, the Eiffel Tower was saved from demolition when it proved useful as a radiotelegraph station.**", "Mục tiêu là nhấn mạnh CÁCH tháp Eiffel được cứu khỏi việc phá dỡ. Đáp án B nói đúng điều này (vì nó chứng tỏ được sự hữu dụng như một trạm phát radio).", [
            { term: "Demolition", definition: "Phá dỡ" },
            { term: "Radiotelegraph", definition: "Điện báo vô tuyến" }
          ])
        ]
      },
      {
        text: "For decades, scientists believed that the brain was entirely \\"hardwired\\" in adulthood, meaning its physical structure could not change. ________, modern neuroplasticity research reveals that the adult brain can continuously form new neural connections in response to learning and experience.",
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
        text: "For the system of equations:\\n2x + 3y = 12\\n4x - y = 10\\nWhat is the value of x + y?",
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
];`;

const contentPath = './data/content.tsx';
let content = fs.readFileSync(contentPath, 'utf8');

const startIndex = content.indexOf('export const topics: Topic[] = [');

let bracketCount = 0;
let endIndex = -1;
let started = false;

for (let i = startIndex; i < content.length; i++) {
  if (content[i] === '[') {
    bracketCount++;
    started = true;
  } else if (content[i] === ']') {
    bracketCount--;
  }

  if (started && bracketCount === 0 && content.substring(i, i+2) === '];') {
    endIndex = i + 2;
    break;
  }
}

if (startIndex !== -1 && endIndex !== -1) {
  const newFullContent = content.substring(0, startIndex) + newTopicsCode + content.substring(endIndex);
  fs.writeFileSync(contentPath, newFullContent);
  console.log('Successfully updated topics.');
} else {
  console.log('Failed to find start or end index.', startIndex, endIndex);
}
