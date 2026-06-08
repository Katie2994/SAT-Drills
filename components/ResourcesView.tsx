import React from 'react';
import { Download, FileCode, ShieldAlert, ExternalLink, Lightbulb, BookOpen, Link2, MonitorPlay, Gamepad2, Feather, ScrollText, ArrowUpRight } from 'lucide-react';
import { exportToPng, exportToHtml } from '../utils/exportHelper';

const ResourcesView: React.FC = () => {
  const handleDownloadPng = () => {
    exportToPng('resources-export-container', 'SAT Study Syllabus & Resources', 'SAT_Syllabus_Resources');
  };

  const handleDownloadHtml = () => {
    exportToHtml('resources-export-container', 'SAT Study Syllabus & Resources', 'SAT_Syllabus_Resources');
  };

  return (
    <div className="animate-fade-in font-sans max-w-5xl mx-auto">
      {/* Export Controls Row */}
      <div className="flex justify-end gap-2 mb-4 export-button-hide">
        <button
          onClick={handleDownloadPng}
          className="flex items-center gap-1.5 bg-[#ffe36d] hover:bg-[#ebd056] text-black text-xs font-bold px-3 py-2 rounded-lg shadow-sm transition-all border border-yellow-400"
          title="Tải danh sách tài liệu dạng ảnh PNG có đầy đủ header/footer"
        >
          <Download className="w-3.5 h-3.5" />
          Download PNG
        </button>
        <button
          onClick={handleDownloadHtml}
          className="flex items-center gap-1.5 bg-gray-700 hover:bg-gray-600 text-white text-xs font-bold px-3 py-2 rounded-lg shadow-sm transition-all"
          title="Tải danh sách tài liệu dạng file HTML giữ nguyên giao diện"
        >
          <FileCode className="w-3.5 h-3.5" />
          Download HTML
        </button>
      </div>

      <div id="resources-export-container" className="w-full bg-transparent flex flex-col gap-8">
        
        {/* Main Content Box */}
        <div className="bg-white border border-gray-200 shadow-sm rounded-2xl p-8 md:p-10">
          <h3 className="text-2xl md:text-3xl font-bold border-b border-gray-100 pb-5 mb-8 text-[#21242c] flex justify-between items-center flex-wrap gap-4">
            <span>
              SAT - Vocab Focus <span className="text-[#dc2323] font-medium ml-2">(Verbal Section)</span>
            </span>
            <span className="text-xs bg-[#fffdf0] text-[#dc2323] border border-[#ffe36d] px-3 py-1 rounded-full uppercase font-mono font-bold tracking-wider select-none inline-flex items-center justify-center leading-none h-fit">
              RESOURCE DECK
            </span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-base">
            {/* Section 1 */}
            <div className="bg-gradient-to-br from-[#fffdf0] to-white p-6 rounded-2xl border border-[#ffe36d] shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#ffe36d] p-2.5 rounded-xl border border-yellow-400/50">
                  <BookOpen className="w-5 h-5 text-yellow-900" />
                </div>
                <h4 className="font-bold text-[#dc2323] text-lg">1. Theory</h4>
              </div>
              <ul className="space-y-3">
                <li>
                  <a href="https://www.khanacademy.org/test-prep/sat-reading-and-writing/x0d47bcec73eb6c4b:advanced-craft-and-structure/x0d47bcec73eb6c4b:words-in-context-3/a/words-in-context-lesson" target="_blank" rel="noopener noreferrer" className="group flex items-start gap-2 hover:text-[#dc2323] transition-colors font-medium">
                    <Link2 className="w-4 h-4 text-gray-400 group-hover:text-[#dc2323] mt-0.5 shrink-0" />
                    <span className="leading-tight">Khan Academy - Words in Context Lesson</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Section 2 */}
            <div className="bg-gradient-to-br from-indigo-50 to-white p-6 rounded-2xl border border-indigo-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-indigo-100 p-2.5 rounded-xl border border-indigo-200">
                  <ScrollText className="w-5 h-5 text-indigo-700" />
                </div>
                <h4 className="font-bold text-indigo-900 text-lg">2. High Frequency Vocab</h4>
              </div>
              <ul className="space-y-3">
                <li>
                  <a href="https://quizlet.com/join/Gv8UmnH4b?i=1u2w5s&x=1bqt" target="_blank" rel="noopener noreferrer" className="group flex items-start gap-2 hover:text-indigo-600 transition-colors font-medium text-indigo-950">
                    <Link2 className="w-4 h-4 text-indigo-400 group-hover:text-indigo-600 mt-0.5 shrink-0" />
                    <span className="leading-tight">500 KEY WORDS FOR THE SAT (Quizlet Deck)</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-100 p-2.5 rounded-xl border border-blue-200">
                  <Feather className="w-5 h-5 text-blue-700" />
                </div>
                <h4 className="font-bold text-blue-900 text-lg">3. Practice Vocab</h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <a href="https://test-ninjas.com/sat-vocabulary-practice" target="_blank" rel="noopener noreferrer" className="p-4 rounded-xl border border-blue-100 bg-white hover:border-blue-300 hover:shadow-sm hover:-translate-y-0.5 transition-all group">
                  <p className="font-medium text-blue-950 group-hover:text-blue-700 transition-colors line-clamp-2 mb-2">Test Ninjas Vocab Practice Hub</p>
                  <span className="text-xs font-bold text-blue-400 uppercase tracking-wider group-hover:text-blue-600 inline-flex items-center gap-1">Practice <ArrowUpRight className="w-3 h-3" /></span>
                </a>
                <a href="https://www.cracksat.net/digital/reading-writing/test9.html" target="_blank" rel="noopener noreferrer" className="p-4 rounded-xl border border-blue-100 bg-white hover:border-blue-300 hover:shadow-sm hover:-translate-y-0.5 transition-all group">
                  <p className="font-medium text-blue-950 group-hover:text-blue-700 transition-colors line-clamp-2 mb-2">Reading and Writing Practice Test 9</p>
                  <span className="text-xs font-bold text-blue-400 uppercase tracking-wider group-hover:text-blue-600 inline-flex items-center gap-1">CRACKSAT <ArrowUpRight className="w-3 h-3" /></span>
                </a>
                <a href="https://www.cracksat.net/digital/reading-writing/test10.html" target="_blank" rel="noopener noreferrer" className="p-4 rounded-xl border border-blue-100 bg-white hover:border-blue-300 hover:shadow-sm hover:-translate-y-0.5 transition-all group">
                  <p className="font-medium text-blue-950 group-hover:text-blue-700 transition-colors line-clamp-2 mb-2">Reading and Writing Practice Test 10</p>
                  <span className="text-xs font-bold text-blue-400 uppercase tracking-wider group-hover:text-blue-600 inline-flex items-center gap-1">CRACKSAT <ArrowUpRight className="w-3 h-3" /></span>
                </a>
              </div>
            </div>

            {/* Section 4 */}
            <div className="bg-gradient-to-br from-red-50 to-white p-6 rounded-2xl border border-red-100 shadow-sm hover:shadow-md transition-shadow md:col-span-2">
              <div className="flex items-center gap-3 mb-5">
                <div className="bg-red-100 p-2.5 rounded-xl border border-red-200">
                  <MonitorPlay className="w-5 h-5 text-red-700" />
                </div>
                <h4 className="font-bold text-red-950 text-lg">4. Youtube Videos</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <li className="flex flex-col gap-3">
                  <a href="https://youtube.com/playlist?list=PLYZACiD6j3Vuj2shy5qrZv0f497INANIE&si=M7UFUiPdnzSDtsot" target="_blank" rel="noopener noreferrer" className="hover:text-[#dc2323] hover:underline transition-colors font-bold text-[#21242c] inline-flex items-center gap-2">
                    <span className="bg-[#fffdf0] text-[#dc2323] px-2 py-1 rounded text-xs font-bold border border-[#ffe36d]">4.1</span> GRE Vocab Word of the Day | Manhattan Prep
                  </a>
                  {/* YouTube Placeholder / Frame Centered */}
                  <div className="w-full flex justify-center">
                    <div className="relative w-full max-w-2xl aspect-video rounded-xl overflow-hidden bg-gray-100 shadow-sm border border-gray-200">
                      <iframe className="absolute top-0 left-0 w-full h-full" src="https://www.youtube.com/embed/videoseries?si=z-NHOmZPOsBjh1XP&amp;list=PLYZACiD6j3Vuj2shy5qrZv0f497INANIE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                  </div>
                </li>
                <li className="flex flex-col gap-3">
                  <a href="https://youtube.com/playlist?list=PLYZACiD6j3VvvIZtz4ZZ5eH99mrr5-oN9&si=63W3OXJhsE0cs9jf" target="_blank" rel="noopener noreferrer" className="hover:text-[#dc2323] hover:underline transition-colors font-bold text-[#21242c] inline-flex items-center gap-2">
                    <span className="bg-[#fffdf0] text-[#dc2323] px-2 py-1 rounded text-xs font-bold border border-[#ffe36d]">4.2</span> GRE Vocab Word of the Day 2020 | Manhattan Prep
                  </a>
                  {/* YouTube Placeholder / Frame Centered */}
                  <div className="w-full flex justify-center">
                    <div className="relative w-full max-w-2xl aspect-video rounded-xl overflow-hidden bg-gray-100 shadow-sm border border-gray-200">
                      <iframe className="absolute top-0 left-0 w-full h-full" src="https://www.youtube.com/embed/videoseries?si=ziUm5rG5zsDjm2S_&amp;list=PLYZACiD6j3VvvIZtz4ZZ5eH99mrr5-oN9" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                  </div>
                </li>
              </div>
            </div>

            {/* Section 5 */}
            <div className="bg-gradient-to-br from-emerald-50 to-white p-6 rounded-2xl border border-emerald-100 shadow-sm hover:shadow-md transition-shadow md:col-span-2">
              <div className="flex items-center gap-3 mb-5">
                <div className="bg-emerald-100 p-2.5 rounded-xl border border-emerald-200">
                  <Gamepad2 className="w-5 h-5 text-emerald-700" />
                </div>
                <h4 className="font-bold text-emerald-950 text-lg">5. SAT Vocab Games</h4>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="flex flex-col gap-3">
                  <a href="https://www.tyrannosaurusprep.com/sat.html" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700 transition-colors font-bold text-emerald-900 flex items-center gap-2 group">
                    <span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded text-xs font-bold border border-emerald-200 group-hover:bg-emerald-200 transition-colors">5.1</span> Tyrannosaurus Prep
                  </a>
                  <div className="mt-1 flex justify-center w-full">
                    <a href="https://www.tyrannosaurusprep.com/sat.html" target="_blank" rel="noopener noreferrer" className="inline-block hover:opacity-90 transition-opacity w-full">
                      <img src="https://drills.vn/wp-content/uploads/2025/07/Screenshot-2025-07-08-at-08.49.51.png" alt="Tyrannosaurus Prep" className="w-full aspect-[4/3] object-cover object-top rounded-xl border border-gray-200 shadow-sm" referrerPolicy="no-referrer" />
                    </a>
                  </div>
                </div>
                
                <div className="flex flex-col gap-3">
                  <a href="https://vocab-prodigy.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700 transition-colors font-bold text-emerald-900 flex items-center gap-2 group">
                    <span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded text-xs font-bold border border-emerald-200 group-hover:bg-emerald-200 transition-colors">5.2</span> Vocab Prodigy (SAT Words)
                  </a>
                  <div className="mt-1 flex justify-center w-full">
                    <a href="https://vocab-prodigy.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-block hover:opacity-90 transition-opacity w-full">
                      <img src="https://drills.vn/wp-content/uploads/2025/12/Screenshot-2025-12-25-at-09.40.46.png" alt="Vocab Prodigy" className="w-full aspect-[4/3] object-cover object-top rounded-xl border border-gray-200 shadow-sm" referrerPolicy="no-referrer" />
                    </a>
                  </div>
                </div>
                
                <div className="flex flex-col gap-3">
                  <a href="https://vocab-joy.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700 transition-colors font-bold text-emerald-900 flex items-center gap-2 group">
                    <span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded text-xs font-bold border border-emerald-200 group-hover:bg-emerald-200 transition-colors">5.3</span> Vocab Joy
                  </a>
                  <div className="mt-1 flex justify-center w-full">
                    <a href="https://vocab-joy.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-block hover:opacity-90 transition-opacity w-full">
                      <img src="https://pbs.twimg.com/media/HKSHNOja0AAxQ_B?format=jpg&name=medium" alt="Vocab Joy" className="w-full aspect-[4/3] object-cover object-top rounded-xl border border-gray-200 shadow-sm" referrerPolicy="no-referrer" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 6 */}
            <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-2xl border border-purple-100 shadow-sm md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-purple-100 p-2.5 rounded-xl border border-purple-200">
                  <BookOpen className="w-5 h-5 text-purple-700" />
                </div>
                <h4 className="font-bold text-purple-950 text-lg">6. Archaic Pronouns (Shakespearean)</h4>
              </div>
              <p className="text-gray-700 mb-5 text-sm leading-relaxed">
                ‘Archaism’ (sử dụng từ cổ) là một đặc trưng trong văn phong của Shakespeare. Việc hiểu rõ các đại từ nhân xưng cổ như <strong>Thou, thee, thy, thine</strong> và <strong>ye</strong> sẽ giúp việc đọc hiểu các tác phẩm văn học cổ trở nên dễ dàng và thú vị hơn. Mặc dù ngày nay chúng ta dùng chung một từ "you", trong thời của Shakespeare, các đại từ này phân chia rõ ràng về ngôi, vị trí (subject/object), và mức độ lịch sự.
              </p>
              
              <div className="space-y-4">
                <div className="bg-white p-5 rounded-xl border border-purple-100 shadow-sm">
                  <h5 className="font-bold text-purple-800 text-base mb-2">1. Thou (Subjective)</h5>
                  <p className="text-sm text-gray-700 mb-3">
                    <strong>Thou</strong> là đại từ nhân xưng ngôi thứ hai số ít, làm <strong>chủ ngữ (subjective case)</strong> trong câu. Tương đương với "you" khi làm chủ ngữ, hoặc có thể hiểu như cách dùng "I" và "he" trong tiếng Anh hiện đại.
                  </p>
                  <blockquote className="border-l-4 border-gray-300 pl-4 py-1 italic text-gray-600 text-sm bg-white rounded-r-lg shadow-sm">
                    "Blow, blow, <strong>thou</strong> winter wind! <strong>Thou</strong> art not so unkind as man’s ingratitude" <br/><span className="text-gray-400 font-semibold text-xs mt-1 block">– As You Like It, Act II, Scene VII</span>
                  </blockquote>
                </div>

                <div className="bg-white p-5 rounded-xl border border-purple-100 shadow-sm">
                  <h5 className="font-bold text-purple-800 text-base mb-2">2. Thee (Objective)</h5>
                  <p className="text-sm text-gray-700 mb-3">
                    <strong>Thee</strong> là đại từ nhân xưng ngôi thứ hai số ít, làm <strong>tân ngữ (objective case)</strong> trong câu. Tương đương với "you" khi bị tác động bởi hành động (đứng sau động từ hoặc giới từ).
                  </p>
                  <blockquote className="border-l-4 border-gray-300 pl-4 py-1 italic text-gray-600 text-sm bg-white rounded-r-lg shadow-sm">
                    "Shall I compare <strong>thee</strong> to a summer’s day? <br/>
                    Thou art more lovely and more temperate..." <br/><span className="text-gray-400 font-semibold text-xs mt-1 block">– Sonnet 18</span>
                  </blockquote>
                </div>

                <div className="bg-white p-5 rounded-xl border border-purple-100 shadow-sm">
                  <h5 className="font-bold text-purple-800 text-base mb-2">3. Thy và Thine (Possessive)</h5>
                  <p className="text-sm text-gray-700 mb-3">
                    Cả hai đều là tính/đại từ sở hữu, tương đương với <strong>your</strong> và <strong>yours</strong> ngày nay. Điểm khác biệt là: <strong>Thy</strong> dùng trước danh từ bắt đầu bằng phụ âm, trong khi <strong>Thine</strong> thường dùng trước danh từ bắt đầu bằng nguyên âm (giống quy tắc a/an).
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <blockquote className="border-l-4 border-gray-300 pl-4 py-2 italic text-gray-600 text-sm bg-white rounded-r-lg shadow-sm">
                      "In <strong>thy</strong> face I see the map of honour, truth and loyalty." <br/><span className="text-gray-400 font-semibold text-xs mt-1 block">― Henry VI</span>
                    </blockquote>
                    <blockquote className="border-l-4 border-gray-300 pl-4 py-2 italic text-gray-600 text-sm bg-white rounded-r-lg shadow-sm">
                      "This above all: to <strong>thine</strong> own self be true" <br/><span className="text-gray-400 font-semibold text-xs mt-1 block">– Hamlet, Act I, Scene III</span>
                    </blockquote>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-xl border border-purple-100 shadow-sm">
                  <h5 className="font-bold text-purple-800 text-base mb-2">4. Ye (Subject/Plural)</h5>
                  <p className="text-sm text-gray-700 mb-0">
                    <strong>Ye</strong> đóng vai trò dạng số ít lẫn số nhiều của "you", và chuyên được dùng làm <strong>chủ ngữ (nominative pronoun)</strong> của câu. Trong tiếng Anh thế kỷ 17, "ye" và "you" mang sắc thái lịch sự khác nhau, trong đó "you" có lúc trang trọng và lịch thiệp hơn.
                  </p>
                </div>

                <div className="bg-red-50 p-5 rounded-xl border border-red-100 mt-2">
                  <h5 className="font-bold text-[#b91c1c] text-sm mb-2 flex items-center gap-2 uppercase tracking-wide">
                    <ShieldAlert className="w-4 h-4" />
                    Bối cảnh xã hội (Cultural & Social Context)
                  </h5>
                  <p className="text-sm text-[#991b1b] leading-relaxed">
                    Theo David Crystal, vào thời Shakespeare, <strong>"you"</strong> được dùng bởi người có địa vị thấp gọi người có địa vị cao (người thường gọi quý tộc, con cái gọi cha mẹ, người hầu gọi chủ), và là tiêu chuẩn giao tiếp giữa các tầng lớp thượng lưu với nhau. 
                    Ngược lại, <strong>"thou/thee"</strong> được dùng bởi người địa vị cao gọi người cấp thấp hơn, người tầng lớp thấp gọi nhau; đồng thời dành riêng cho văn thơ trang trọng, khi xưng hô với Chúa trời hoặc thế lực siêu nhiên.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 7 */}
            <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-2xl border border-orange-100 shadow-sm md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-orange-100 p-2.5 rounded-xl border border-orange-200">
                  <Feather className="w-5 h-5 text-orange-700" />
                </div>
                <h4 className="font-bold text-orange-950 text-lg">7. Poems</h4>
              </div>
              <p className="text-gray-700 mb-5 text-sm leading-relaxed">
                Các bài thơ trong phần thi Đọc hiểu - Viết (Reading and Writing) của kỳ thi Digital SAT thường được trích từ kho tàng văn học Anh - Mỹ trong 200 năm qua. Đoạn thơ thường dài từ 25 đến 150 chữ, lấy từ các tạp chí, báo, tiểu thuyết, hoặc các tuyển tập thơ xuất bản tại Mỹ.
              </p>
              
              <div className="space-y-4">
                <div className="bg-white p-5 rounded-xl border border-orange-100 shadow-sm">
                  <h5 className="font-bold text-orange-800 text-base mb-2">Tác giả phổ biến</h5>
                  <p className="text-sm text-gray-700 mb-0">
                    Đề thi thường sử dụng các trích đoạn của các nhà thơ kinh điển như William Shakespeare, Walt Whitman, Robert Frost, Emily Dickinson, hay Langston Hughes.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-xl border border-orange-100 shadow-sm">
                  <h5 className="font-bold text-orange-800 text-base mb-2">Chủ đề thường gặp</h5>
                  <p className="text-sm text-gray-700 mb-0">
                    Tình yêu, sự cô đơn, thế giới tự nhiên, hoặc sự thay đổi của thời gian và cuộc sống.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-xl border border-orange-100 shadow-sm">
                  <h5 className="font-bold text-orange-800 text-base mb-2">Bản chất câu hỏi</h5>
                  <p className="text-sm text-gray-700 mb-0">
                    Dù có tên gọi là "câu hỏi thơ", College Board chỉ kiểm tra khả năng đọc hiểu logic của thí sinh (như chức năng của một từ/cụm từ trong ngữ cảnh, ý chính, hoặc cấu trúc đoạn). Bạn <strong>không cần</strong> phải có kiến thức nền tảng về văn học để trả lời.
                  </p>
                </div>

                <div className="bg-orange-50 p-6 rounded-xl border border-orange-200 mt-2">
                  <h5 className="font-bold text-orange-800 text-sm mb-2 flex items-center gap-2 uppercase tracking-wide">
                    <Lightbulb className="w-4 h-4" />
                    Cách luyện tập
                  </h5>
                  <p className="text-sm text-orange-900 leading-relaxed">
                    Bạn có thể tham khảo chuyên mục thơ của Poetry Foundation hoặc các đề thi mẫu trên College Board để làm quen với phong cách hành văn.
                  </p>
                  <a
                    href="https://www.poetryfoundation.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-3 text-sm font-bold text-orange-800 hover:text-orange-900 border-b border-orange-400 hover:border-orange-700 transition-colors"
                  >
                    Truy cập Poetry Foundation <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
        
        {/* Recommended Prep Hubs Card */}
        <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 md:p-10 mb-12 shadow-sm">
          <h3 className="text-xl md:text-2xl font-bold border-b border-gray-200 pb-5 mb-6 text-[#21242c] flex items-center gap-3">
            SAT Test Prep Websites <span className="bg-[#dc2323] text-white text-[10px] sm:text-xs px-3 py-1 rounded-full shadow-sm inline-flex items-center justify-center leading-none h-fit tracking-widest font-bold">RECOMMENDED</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
             <a href="https://www.oneprep.co/" target="_blank" rel="noopener noreferrer" className="bg-white p-5 border border-gray-200 hover:border-[#dc2323] shadow-sm hover:shadow-md transition-all rounded-xl flex items-center justify-between group">
               <span className="font-semibold text-[#21242c] group-hover:text-[#dc2323] transition-colors font-semibold">One Prep</span>
               <span className="text-[#dc2323] opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
             </a>
             <a href="https://exam.satpanda.com/" target="_blank" rel="noopener noreferrer" className="bg-white p-5 border border-gray-200 hover:border-[#dc2323] shadow-sm hover:shadow-md transition-all rounded-xl flex items-center justify-between group">
               <span className="font-semibold text-[#21242c] group-hover:text-[#dc2323] transition-colors font-semibold">SAT Panda</span>
               <span className="text-[#dc2323] opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
             </a>
             <a href="https://opensat.vn/" target="_blank" rel="noopener noreferrer" className="bg-white p-5 border border-gray-200 hover:border-[#dc2323] shadow-sm hover:shadow-md transition-all rounded-xl flex items-center justify-between group">
               <span className="font-semibold text-[#21242c] group-hover:text-[#dc2323] transition-colors font-semibold">OpenSAT</span>
               <span className="text-[#dc2323] opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
             </a>
             <a href="https://satsuiteeducatorquestionbank.collegeboard.org/" target="_blank" rel="noopener noreferrer" className="bg-white p-5 border border-gray-200 hover:border-[#dc2323] shadow-sm hover:shadow-md transition-all rounded-xl flex items-center justify-between group">
               <span className="font-semibold text-[#21242c] group-hover:text-[#dc2323] transition-colors text-sm font-semibold">College Board - Question Bank</span>
               <span className="text-[#dc2323] opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
             </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ResourcesView;
