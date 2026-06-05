export interface DictItem {
  definition: string;
  synonym: string;
  antonym: string;
  topic: string;
  example: string;
  icon: string;
}

export const offlineSATDictionary: Record<string, DictItem> = {
  "elusive": {
    "definition": "Khó nắm bắt, khó tìm thấy, khó định nghĩa lách tránh được sự chú ý.",
    "synonym": "evasive, slippery",
    "antonym": "attainable, accessible",
    "topic": "General Academic",
    "example": "Success remained elusive for the young artist despite her immense talent.",
    "icon": "🌬️🔍"
  },
  "aesthetic": {
    "definition": "Thuộc về thẩm mỹ, tính nghệ thuật, nhạy cảm trước cái đẹp.",
    "synonym": "artistic, visual",
    "antonym": "unattractive, ugly",
    "topic": "Arts & Lit",
    "example": "The design of the new gallery emphasizes clean lines and a minimalist aesthetic.",
    "icon": "🎨👁️"
  },
  "alleviate": {
    "definition": "Làm dịu đi, xoa dịu, giảm bớt khó khăn chồng chất hoặc đau đớn.",
    "synonym": "relieve, ease, soothe",
    "antonym": "aggravate, intensify",
    "topic": "Science & Tech",
    "example": "A series of measures were taken to alleviate traffic congestion in the city.",
    "icon": "🩹🌸"
  },
  "ambivalence": {
    "definition": "Trạng thái mâu thuẫn trong tư tưởng, có cả cảm xúc yêu lẫn ghét.",
    "synonym": "hesitation, doubt",
    "antonym": "certainty, conviction",
    "topic": "Logic & Essay",
    "example": "Her ambivalence about accepting the promotion stems from the fear of longer hours.",
    "icon": "🤷‍♀️❓"
  },
  "anachronism": {
    "definition": "Sự lỗi thời, đặt sai thời đại lịch sử của một vật hay khái niệm.",
    "synonym": "chronological error, misplacement",
    "antonym": "synchronism",
    "topic": "History & Social",
    "example": "The appearance of a modern wrist watch in the Shakespearean play was a prominent anachronism.",
    "icon": "⏳🕰️"
  },
  "bolster": {
    "definition": "Củng cố, nâng đỡ, ủng hộ mạnh mẽ để làm tăng độ vững chắc.",
    "synonym": "strengthen, support, reinforce",
    "antonym": "undermine, weaken",
    "topic": "Logic & Essay",
    "example": "The defense attorney presented new key documents to bolster the client's alibi.",
    "icon": "🧱🛡️"
  },
  "bureaucratic": {
    "definition": "Mang tính quan liêu, hành chính rườm rà phiền phức nhiều giấy tờ.",
    "synonym": "official, administrative, red-tape",
    "antonym": "streamlined, direct",
    "topic": "Business & Law",
    "example": "He faced many bureaucratic hurdles in getting a license for his business.",
    "icon": "📂🏢"
  },
  "catastrophic": {
    "definition": "Mang tính thảm họa, thảm khốc, gây thiệt hại nghiêm trọng không thể khắc phục.",
    "synonym": "disastrous, devastating",
    "antonym": "beneficial, fortunate",
    "topic": "Science & Tech",
    "example": "The failure of the dam had catastrophic effects on the downstream villages.",
    "icon": "🌋⚠️"
  },
  "circumvent": {
    "definition": "Lách luật, đi vòng qua né tránh khéo léo chướng ngại vật.",
    "synonym": "bypass, evade, sidestep",
    "antonym": "confront, face",
    "topic": "Business & Law",
    "example": "Experienced tax accountants found a way to circumvent the complex new regulation.",
    "icon": "🔄🛡️"
  },
  "collaborate": {
    "definition": "Hợp tác, đồng hành cùng người khác tạo giá trị.",
    "synonym": "cooperate, unite, team up",
    "antonym": "oppose, compete",
    "topic": "General Academic",
    "example": "Scientists from five separate nations agreed to collaborate on the vaccine project.",
    "icon": "🤝🧪"
  },
  "compelling": {
    "definition": "Mang tính thuyết phục mãnh liệt, lôi cuốn khó mà chối cãi được.",
    "synonym": "convincing, gripping, irresistible",
    "antonym": "unconvincing, boring",
    "topic": "Logic & Essay",
    "example": "The prosecutor presented a compelling argument that convinced the entire jury.",
    "icon": "🔥🧠"
  },
  "concede": {
    "definition": "Thừa nhận điều gì đó là đúng (thường một cách miễn cưỡng) trong tranh luận.",
    "synonym": "admit, acknowledge, yield",
    "antonym": "deny, dispute",
    "topic": "Logic & Essay",
    "example": "He had to concede that his opponent's point was valid.",
    "icon": "🏳️💡"
  },
  "conjecture": {
    "definition": "Lời phỏng đoán, sự phỏng đoán dựa trên bằng chứng thiếu sót.",
    "synonym": "speculation, guess",
    "antonym": "fact, certainty",
    "topic": "Logic & Essay",
    "example": "Their conclusions are based on mere conjecture rather than solid research data.",
    "icon": "🔮💭"
  },
  "counterintuitive": {
    "definition": "Trái ngược với trực giác thông thường, có vẻ phản lý tính nhưng lại đúng.",
    "synonym": "paradoxical, unexpected",
    "antonym": "intuitive, logical",
    "topic": "Science & Tech",
    "example": "It is counterintuitive that cooling an object can sometimes absorb energy.",
    "icon": "🌀💡"
  },
  "deceptive": {
    "definition": "Dễ gây nhầm lẫn, lừa dối, đánh lạc hướng thị giác hay nhận thức.",
    "synonym": "misleading, fraudulent",
    "antonym": "honest, transparent",
    "topic": "General Academic",
    "example": "The serene appearance of the pool was deceptive; the currents underneath were lethal.",
    "icon": "🎭👁️"
  },
  "discernible": {
    "definition": "Có thể nhận thức rõ, phân biệt được bằng mắt hoặc tư duy nhạy bén.",
    "synonym": "noticeable, perceivable, visible",
    "antonym": "imperceptible, invisible",
    "topic": "Science & Tech",
    "example": "There is a discernible difference between original oil paint and its print.",
    "icon": "🔍👀"
  },
  "disparate": {
    "definition": "Khác biệt hoàn toàn, không thể so sánh được vì không cùng bản chất.",
    "synonym": "different, diverse, dissimilar",
    "antonym": "similar, homogeneous",
    "topic": "General Academic",
    "example": "The committee comprised of people from highly disparate backgrounds.",
    "icon": "🌗🧬"
  },
  "diverge": {
    "definition": "Chuyển dịch sang hướng khác nhau, phân kỳ, rẽ lối.",
    "synonym": "deviate, branch out",
    "antonym": "converge, join",
    "topic": "Science & Tech",
    "example": "The paths of the two brothers began to diverge after high school.",
    "icon": "🔱🔀"
  },
  "dormant": {
    "definition": "Ẩn nấp, ngủ đông, tạm ngừng hoạt động nhưng có thể bừng tỉnh sau này.",
    "synonym": "inactive, sleeping, latent",
    "antonym": "active, awake",
    "topic": "Science & Tech",
    "example": "Mount Vesuvius was dormant for centuries before erupting violently.",
    "icon": "🌋💤"
  },
  "empirical": {
    "definition": "Dựa trên thực nghiệm, quan sát thực tế thay vì suy luận lý thuyết suông.",
    "synonym": "observational, experimental",
    "antonym": "theoretical, speculative",
    "topic": "Science & Tech",
    "example": "Our research provides empirical evidence supporting the new diet plan.",
    "icon": "📊🧪"
  },
  "enhance": {
    "definition": "Cải thiện, gia tăng chất lượng, vẻ đẹp, sức mạnh hay giá trị.",
    "synonym": "improve, upgrade, boost",
    "antonym": "diminish, damage",
    "topic": "General Academic",
    "example": "You can use spice to enhance the flavor of this soup.",
    "icon": "✨📈"
  },
  "epitomizing": {
    "definition": "Khái quát tiêu biểu hóa, là ví dụ điển hình hoàn mỹ nhất.",
    "synonym": "exemplifying, embodying",
    "antonym": "misrepresenting",
    "topic": "Arts & Lit",
    "example": "His speech was outstanding, epitomizing the values of our community.",
    "icon": "🏆💎"
  },
  "equanimity": {
    "definition": "Sự điềm tĩnh, sự thản nhiên ôn hòa, đặc biệt là trong tình cảnh khắc nghiệt.",
    "synonym": "calmness, composure",
    "antonym": "panic, anxiety",
    "topic": "General Academic",
    "example": "The captain handled the state of emergency with absolute equanimity.",
    "icon": "🧘‍♂️🌊"
  },
  "evolving": {
    "definition": "Đang tiến triển dần dần, phát triển mang tính tiến hóa.",
    "synonym": "developing, changing",
    "antonym": "static, unchanging",
    "topic": "Science & Tech",
    "example": "The internet is a rapidly evolving landscape with new tools every day.",
    "icon": "🦎♻️"
  },
  "exalt": {
    "definition": "Tôn vinh, ca tụng hết lời, đưa lên vị thế cao quý.",
    "synonym": "praise, glorify, elevate",
    "antonym": "disparage, humiliate",
    "topic": "Arts & Lit",
    "example": "The artist's exhibition was designed to exalt human connection over technology.",
    "icon": "👑🙌"
  },
  "fabricate": {
    "definition": "Bịa đặt, ngụy tạo bằng chứng, dựng lên chuyện sai sự thật.",
    "synonym": "invent, forge, fake",
    "antonym": "reveal, authenticate",
    "topic": "Business & Law",
    "example": "They tried to fabricate a story to excuse their absence.",
    "icon": "🛠️🤥"
  },
  "fluctuate": {
    "definition": "Dao động liên tục, thay đổi thất thường lên xuống.",
    "synonym": "vary, vacillate, waver",
    "antonym": "stabilize, remain static",
    "topic": "Business & Law",
    "example": "Oil prices fluctuation creates huge uncertainty in global trade.",
    "icon": "📈📉"
  },
  "foster": {
    "definition": "Khuyến khích, nuôi dưỡng, thúc đẩy sự phát triển của điều gì tốt đẹp.",
    "synonym": "nurture, encourage, promote",
    "antonym": "suppress, hinder",
    "topic": "General Academic",
    "example": "The mentor worked tirelessly to foster a sense of curiosity in his apprentices.",
    "icon": "🌱🪴"
  },
  "germinate": {
    "definition": "Nảy mầm (hạt giống), hoặc bắt đầu hình thành phát triển (ở ý tưởng).",
    "synonym": "sprout, bud, develop",
    "antonym": "wither, decay",
    "topic": "Science & Tech",
    "example": "The seeds of conflict began to germinate during the early talks.",
    "icon": "🌱🍂"
  },
  "haphazard": {
    "definition": "Bừa bãi, ngẫu nhiên thiếu kế hoạch tổ chức, tùy tiện.",
    "synonym": "random, disorganized",
    "antonym": "systematic, orderly",
    "topic": "General Academic",
    "example": "The papers were filed in a haphazard manner, making it impossible to search.",
    "icon": "🌀🃏"
  },
  "imminent": {
    "definition": "Cận kề, sắp xảy ra đến nơi (thường chỉ sự cố, mối nguy).",
    "synonym": "impending, approaching",
    "antonym": "distant, far off",
    "topic": "History & Social",
    "example": "Dark storm clouds indicate that heavy rain is imminent.",
    "icon": "🌩️⚠️"
  },
  "impartial": {
    "definition": "Vô tư, khách quan, không thiên vị một phe cánh nào.",
    "synonym": "neutral, unbiased, fair",
    "antonym": "biased, prejudiced",
    "topic": "Logic & Essay",
    "example": "The dispute was referred to an impartial arbitrator for resolution.",
    "icon": "⚖️👁️"
  },
  "impenetrable": {
    "definition": "Bất khả xâm phạm, không thể xuyên qua nổi; hoặc cực kỳ khó hiểu.",
    "synonym": "impervious, dense, incomprehensible",
    "antonym": "permeable, clear, transparent",
    "topic": "Science & Tech",
    "example": "The fortress had impenetrable walls that resisted siege engines.",
    "icon": "🛡️⛰️"
  },
  "implement": {
    "definition": "Triển khai thực hiện, áp dụng một kế hoạch hay điều luật vào thực tế.",
    "synonym": "execute, apply, enact",
    "antonym": "neglect, defer",
    "topic": "Business & Law",
    "example": "The management resolved to implement the new safety rules immediately.",
    "icon": "🛠️⚙️"
  },
  "indecipherable": {
    "definition": "Không thể giải mã, không thể đọc ra ý nghĩa vì quá mờ mờ hoặc rắc rối.",
    "synonym": "unreadable, mysterious",
    "antonym": "clear, legible",
    "topic": "Arts & Lit",
    "example": "Her ancient handwriting is completely indecipherable to anyone but specialists.",
    "icon": "📜🧩"
  },
  "indifference": {
    "definition": "Sự thờ ơ, lạnh nhạt hờ hững không màng quan tâm.",
    "synonym": "apathy, disinterest",
    "antonym": "concern, sympathy",
    "topic": "General Academic",
    "example": "She was shocked by their general indifference to the survival of the species.",
    "icon": "😐🧊"
  },
  "indigenous": {
    "definition": "Bản địa, thuộc về địa phương có nguồn gốc tự nhiên từ xa xưa.",
    "synonym": "native, aboriginal",
    "antonym": "exotic, foreign",
    "topic": "History & Social",
    "example": "The paleobiologists are studying how the indigenous plants adapted to drying.",
    "icon": "🏹🌴"
  },
  "inherent": {
    "definition": "Vốn có, sẵn có theo bản chất không thể tách rời.",
    "synonym": "innate, intrinsic, essential",
    "antonym": "acquired, extrinsic",
    "topic": "Logic & Essay",
    "example": "Every investment strategy carries an inherent element of financial risk.",
    "icon": "🧩💎"
  },
  "innocuous": {
    "definition": "Vô hại, không ác ý, không gây phản cảm xúc phạm.",
    "synonym": "harmless, inoffensive",
    "antonym": "harmful, toxic, offensive",
    "topic": "Science & Tech",
    "example": "His joke was entirely innocuous, though some took it too seriously.",
    "icon": "💧🦄"
  },
  "intricate": {
    "definition": "Phức tạp, tinh xảo, đan cài nhiều chi tiết tỉ mỉ tỉ mẩn.",
    "synonym": "complex, detailed, elaborate",
    "antonym": "simple, basic",
    "topic": "Arts & Lit",
    "example": "The lace was woven with an intricate pattern of floral threads.",
    "icon": "🕸️💎"
  },
  "invalidate": {
    "definition": "Làm mất hiệu lực, bác bỏ tính đúng đắn của một lập luận hay hợp đồng.",
    "synonym": "nullify, void, disprove",
    "antonym": "validate, support",
    "topic": "Logic & Essay",
    "example": "Slight errors in study methodology can completely invalidate the research results.",
    "icon": "❌🚫"
  },
  "latent": {
    "definition": "Tiềm ẩn, tiềm tàng chưa bộc lộ ra ngoài bên dưới lớp bề mặt.",
    "synonym": "hidden, dormant, inactive",
    "antonym": "active, obvious, visible",
    "topic": "Science & Tech",
    "example": "Her latent talent for leadership became apparent during the team crisis.",
    "icon": "🧬🌋"
  },
  "legitimate": {
    "definition": "Hợp pháp, chính đáng, tuân theo luật lệ quy chuẩn chính xác.",
    "synonym": "lawful, valid, genuine",
    "antonym": "illegitimate, invalid",
    "topic": "Business & Law",
    "example": "The concern raised by the shareholders is entirely legitimate.",
    "icon": "⚖️📋"
  },
  "melancholy": {
    "definition": "Sự u sầu, u uất buồn bã trầm mặc đầy chất thơ.",
    "synonym": "sadness, depression, gloom",
    "antonym": "joy, happiness",
    "topic": "Arts & Lit",
    "example": "The rain always put her in a state of quiet melancholy.",
    "icon": "🌧️🎻"
  },
  "novel": {
    "definition": "Mới lạ, độc đáo, chưa từng có tiền lệ.",
    "synonym": "innovative, new, original",
    "antonym": "trite, standard, unoriginal",
    "topic": "Science & Tech",
    "example": "He proposed a novel solution to combat atmospheric carbon levels.",
    "icon": "💡🌌"
  },
  "nuanced": {
    "definition": "Tinh tế, có nhiều sắc thái ý nghĩa sâu kín tỉ mỉ.",
    "synonym": "subtle, detailed",
    "antonym": "simple, black-and-white",
    "topic": "Logic & Essay",
    "example": "A nuanced understanding of the historical document reveals double talk.",
    "icon": "🎭🌗"
  },
  "obscure": {
    "definition": "Mơ hồ khó hiểu, ít người biết đến, bị khuất lấp bóng tối.",
    "synonym": "unclear, little-known, vague",
    "antonym": "clear, famous, obvious",
    "topic": "Arts & Lit",
    "example": "The library holds several obscure poetry samplers of the Elizabethan era.",
    "icon": "🌑🌫️"
  },
  "observant": {
    "definition": "Mắt quan sát nhạy bén, tinh tường; hoặc biết tuân thủ nghiêm ngặt tập tục.",
    "synonym": "watchful, sharp, attentive",
    "antonym": "oblivious, careless",
    "topic": "General Academic",
    "example": "An observant scientist will detect subtle variations in patterns.",
    "icon": "🦉🕵️‍♂️"
  },
  "overreacts": {
    "definition": "Phản ứng thái quá, làm quá vấn đề lên một mức không cần thiết.",
    "synonym": "exaggerate, catastrophize",
    "antonym": "understate, ignore",
    "topic": "General Academic",
    "example": "She always overreacts when there is any minor delay.",
    "icon": "🤯🌋"
  },
  "paucity": {
    "definition": "Sự khan hiếm cực kỳ, sự nghèo nàn thiếu thốn nghiêm trọng.",
    "synonym": "scarcity, shortage, lack",
    "antonym": "abundance, profusion",
    "topic": "Science & Tech",
    "example": "The paucity of water resources is a critical challenge in desert towns.",
    "icon": "🏜️💧"
  },
  "perceive": {
    "definition": "Nhận thức rõ, lĩnh hội được sắc thái ý kiến qua các giác quan hoặc trí tuệ.",
    "synonym": "sense, discern, realize",
    "antonym": "overlook, miss",
    "topic": "General Academic",
    "example": "It is hard to perceive any structural changes in steady objects.",
    "icon": "👁️🧠"
  },
  "peripheral": {
    "definition": "Ngoại vi, ngoài lề, thứ yếu không nằm ở trọng tâm.",
    "synonym": "marginal, outward, nonessential",
    "antonym": "central, primary, essential",
    "topic": "General Academic",
    "example": "Don't focus on peripheral issues; tackle the core source of the error first.",
    "icon": "⭕🫧"
  },
  "persist": {
    "definition": "Kiên trì vượt khó, dai dẳng tiếp tục dù có trở lực lớn.",
    "synonym": "continue, endure, persevere",
    "antonym": "give up, cease, stop",
    "topic": "General Academic",
    "example": "If the symptoms persist for more than three days, see your doctor.",
    "icon": "🧗‍♂️⏳"
  },
  "plausible": {
    "definition": "Hợp lý, có vẻ đáng tin cậy dù chưa được chứng thực đầy đủ.",
    "synonym": "credible, believable, likely",
    "antonym": "implausible, unbelievable",
    "topic": "Logic & Essay",
    "example": "She offered a plausible excuse for leaving the meeting early.",
    "icon": "🤔✅"
  },
  "pragmatic": {
    "definition": "Thực tế, thực dụng, ưu tiên giải pháp có hiệu quả hoạt động hơn lý thuyết.",
    "synonym": "practical, realistic, realistic",
    "antonym": "idealistic, impractical",
    "topic": "Business & Law",
    "example": "The government took a pragmatic path to resolve the economic gridlock.",
    "icon": "🧠⚙️"
  },
  "profound": {
    "definition": "Sâu sắc, thông thái thâm thúy; hoặc tác động cực kỳ to lớn.",
    "synonym": "deep, intellectual, systemic",
    "antonym": "shallow, superficial",
    "topic": "Logic & Essay",
    "example": "The invention of printing press had a profound impact on human literacy.",
    "icon": "🌌💡"
  },
  "proponent": {
    "definition": "Người đề xướng, người ra sức ủng hộ một học thuyết hay hành động.",
    "synonym": "advocate, supporter, champion",
    "antonym": "opponent, critic",
    "topic": "History & Social",
    "example": "She was a leading proponent of green energy research in parliament.",
    "icon": "📢🤝"
  },
  "rebut": {
    "definition": "Bẻ gãy lý thuyết, phản bác lập luận của đối phương bằng dẫn chứng.",
    "synonym": "refute, disprove, deny",
    "antonym": "support, confirm, accept",
    "topic": "Logic & Essay",
    "example": "The debater was ready with precise figures to rebut her adversary's claims.",
    "icon": "⚔️📜"
  },
  "refute": {
    "definition": "Bác bỏ triệt để tính chân thực của một điều bằng lập luận sắc sảo.",
    "synonym": "disprove, debunk",
    "antonym": "prove, substantiate",
    "topic": "Logic & Essay",
    "example": "Further experimental results refute the initial observation completely.",
    "icon": "🛡️🚫"
  },
  "resilient": {
    "definition": "Kiên cường dẻo dai, mau chóng hồi phục sau sóng gió va vấp.",
    "synonym": "elastic, tough, bouncy",
    "antonym": "fragile, easily damaged",
    "topic": "General Academic",
    "example": "Our community is resilient and will build back better after the flood.",
    "icon": "🎋🔋"
  },
  "skeptical": {
    "definition": "Nghi ngờ, hoài nghi không vội vàng tin tưởng khi thiếu bằng chứng.",
    "synonym": "doubtful, suspicious, cynical",
    "antonym": "gullible, credulous",
    "topic": "Logic & Essay",
    "example": "The scientist was skeptical about the claimed cold fusion discovery.",
    "icon": "🧐💬"
  },
  "speculate": {
    "definition": "Suy luận phỏng đoán khi thiếu thông tin; hoặc đầu cơ tích trữ.",
    "synonym": "conjecture, guess, speculate",
    "antonym": "know, verify",
    "topic": "Logic & Essay",
    "example": "We cannot speculate on the budget until audits complete.",
    "icon": "🔭🌌"
  },
  "substantiate": {
    "definition": "Chứng minh bồi đắp bằng chứng pháp lý rõ ràng xác thực.",
    "synonym": "prove, verify, back up",
    "antonym": "refute, disprove",
    "topic": "Logic & Essay",
    "example": "You need to offer precise data to substantiate your essay thesis.",
    "icon": "📄🪵"
  },
  "tenuous": {
    "definition": "Mỏng manh, yếu ớt, lỏng lẻo thiếu căn cứ vững chắc.",
    "synonym": "flimsy, weak, fragile",
    "antonym": "strong, thick, solid",
    "topic": "Logic & Essay",
    "example": "Their grip on the market is tenuous and could easily fall from competition.",
    "icon": "🧵💨"
  },
  "thrive": {
    "definition": "Phát triển mạnh mẽ, hưng thịnh vô song.",
    "synonym": "flourish, prosper",
    "antonym": "wither, fail, struggle",
    "topic": "Science & Tech",
    "example": "These local organic crops thrive under warm and humid climates.",
    "icon": "🌻🌳"
  },
  "unanimity": {
    "definition": "Sự thống nhất hoàn toàn ý kiến, sự đồng lòng vô điều kiện.",
    "synonym": "agreement, consensus, harmony",
    "antonym": "disagreement, division",
    "topic": "History & Social",
    "example": "The committee reached a rare unanimity on selecting the new dean.",
    "icon": "🤝🏛️"
  },
  "validate": {
    "definition": "Phê duyệt hiệu lực, chứng nhận tính hợp pháp đúng đắn.",
    "synonym": "confirm, verify, authorize",
    "antonym": "invalidate, reject",
    "topic": "Logic & Essay",
    "example": "These testing figures perfectly validate our engineering concepts.",
    "icon": "✅🛡️"
  }
};
