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
          className="flex items-center gap-1.5 bg-[#ffe36d] hover:bg-[#ebd056] text-black text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-cb-xs shadow-sm transition-all border border-[#ffe36d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#324dc7]"
          title="Tải danh sách tài liệu dạng ảnh PNG có đầy đủ header/footer"
        >
          <Download className="w-3.5 h-3.5" />
          Download PNG
        </button>
        <button
          onClick={handleDownloadHtml}
          className="flex items-center gap-1.5 bg-[#1e1e1e] hover:bg-black text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-cb-xs shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#324dc7]"
          title="Tải danh sách tài liệu dạng file HTML giữ nguyên giao diện"
        >
          <FileCode className="w-3.5 h-3.5" />
          Download HTML
        </button>
      </div>

      <div id="resources-export-container" className="w-full bg-transparent flex flex-col gap-8">
        
        {/* Main Content Box */}
        <div className="bg-white border border-[#d9d9d9] shadow-cb rounded-cb-lg p-8 md:p-10 relative overflow-hidden">
          <h3 className="text-2xl md:text-3xl font-display font-bold border-b border-[#d9d9d9] pb-5 mb-8 text-[#1e1e1e] uppercase flex justify-between items-center flex-wrap gap-4 tracking-tight">
            <span>
              SAT - Vocab Focus <span className="text-[#dc2323] ml-2">(Verbal Section)</span>
            </span>
            <span className="text-xs bg-[#f5f7fc] text-[#dc2323] border border-[#d9d9d9] px-3 py-1.5 rounded-cb-xs uppercase font-medium tracking-widest select-none inline-flex items-center justify-center leading-none h-fit">
              RESOURCE DECK
            </span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-base">
            {/* Section 1 */}
            <div className="bg-white p-6 rounded-cb-md border border-[#d9d9d9] shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#f5f7fc] p-2.5 rounded-cb-sm border border-[#d9d9d9]">
                  <BookOpen className="w-5 h-5 text-[#324dc7]" />
                </div>
                <h4 className="font-bold text-[#1e1e1e] text-lg uppercase tracking-wide">1. Theory</h4>
              </div>
              <ul className="space-y-3">
                <li>
                  <a href="https://www.khanacademy.org/test-prep/sat-reading-and-writing/x0d47bcec73eb6c4b:advanced-craft-and-structure/x0d47bcec73eb6c4b:words-in-context-3/a/words-in-context-lesson" target="_blank" rel="noopener noreferrer" className="group flex items-start gap-2 hover:text-[#dc2323] transition-colors font-medium text-[#1e1e1e]">
                    <Link2 className="w-4 h-4 text-gray-400 group-hover:text-[#dc2323] mt-0.5 shrink-0" />
                    <span className="leading-tight border-b border-transparent group-hover:border-[#dc2323]">Khan Academy - Words in Context Lesson</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Section 2 */}
            <div className="bg-white p-6 rounded-cb-md border border-[#d9d9d9] shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#f5f7fc] p-2.5 rounded-cb-sm border border-[#d9d9d9]">
                  <ScrollText className="w-5 h-5 text-[#324dc7]" />
                </div>
                <h4 className="font-bold text-[#1e1e1e] text-lg uppercase tracking-wide">2. High Frequency Vocab</h4>
              </div>
              <ul className="space-y-3">
                <li>
                  <a href="https://quizlet.com/join/Gv8UmnH4b?i=1u2w5s&x=1bqt" target="_blank" rel="noopener noreferrer" className="group flex items-start gap-2 hover:text-[#dc2323] transition-colors font-medium text-[#1e1e1e]">
                    <Link2 className="w-4 h-4 text-gray-400 group-hover:text-[#dc2323] mt-0.5 shrink-0" />
                    <span className="leading-tight border-b border-transparent group-hover:border-[#dc2323]">500 KEY WORDS FOR THE SAT (Quizlet Deck)</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="bg-white p-6 rounded-cb-md border border-[#d9d9d9] shadow-sm hover:shadow-md transition-shadow md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#f5f7fc] p-2.5 rounded-cb-sm border border-[#d9d9d9]">
                  <Feather className="w-5 h-5 text-[#324dc7]" />
                </div>
                <h4 className="font-bold text-[#1e1e1e] text-lg uppercase tracking-wide">3. Practice Craft and Structure</h4>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h5 className="font-bold text-[#1e1e1e] text-base mb-3 flex items-center gap-2 relative pl-3 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1.5 before:h-4 before:bg-[#324dc7] before:rounded-full">Vocab Practice</h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <a href="https://test-ninjas.com/sat-vocabulary-practice" target="_blank" rel="noopener noreferrer" className="p-4 rounded-cb-sm border border-[#d9d9d9] bg-white shadow-sm hover:border-[#324dc7] hover:shadow-md transition-all group">
                      <p className="font-bold text-[#1e1e1e] group-hover:text-[#324dc7] transition-colors line-clamp-2 mb-2">Test Ninjas Vocab Practice Hub</p>
                      <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider group-hover:text-[#324dc7] inline-flex items-center gap-1">Practice <ArrowUpRight className="w-3 h-3" /></span>
                    </a>
                    <a href="https://www.cracksat.net/digital/reading-writing/test9.html" target="_blank" rel="noopener noreferrer" className="p-4 rounded-cb-sm border border-[#d9d9d9] bg-white shadow-sm hover:border-[#324dc7] hover:shadow-md transition-all group">
                      <p className="font-bold text-[#1e1e1e] group-hover:text-[#324dc7] transition-colors line-clamp-2 mb-2">Reading and Writing Practice Test 9</p>
                      <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider group-hover:text-[#324dc7] inline-flex items-center gap-1">CRACKSAT <ArrowUpRight className="w-3 h-3" /></span>
                    </a>
                    <a href="https://www.cracksat.net/digital/reading-writing/test10.html" target="_blank" rel="noopener noreferrer" className="p-4 rounded-cb-sm border border-[#d9d9d9] bg-white shadow-sm hover:border-[#324dc7] hover:shadow-md transition-all group">
                      <p className="font-bold text-[#1e1e1e] group-hover:text-[#324dc7] transition-colors line-clamp-2 mb-2">Reading and Writing Practice Test 10</p>
                      <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider group-hover:text-[#324dc7] inline-flex items-center gap-1">CRACKSAT <ArrowUpRight className="w-3 h-3" /></span>
                    </a>
                  </div>
                </div>

                <div>
                  <h5 className="font-bold text-[#1e1e1e] text-base mb-3 flex items-center gap-2 relative pl-3 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1.5 before:h-4 before:bg-[#324dc7] before:rounded-full">Poetry Practice</h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                    <a href="https://www.cracksat.net/digital/reading-writing/test151.html" target="_blank" rel="noopener noreferrer" className="p-4 rounded-cb-sm border border-[#d9d9d9] bg-white shadow-sm hover:border-[#324dc7] hover:shadow-md transition-all group">
                      <p className="font-bold text-[#1e1e1e] group-hover:text-[#324dc7] transition-colors line-clamp-2 mb-2">Practice Test 151</p>
                      <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider group-hover:text-[#324dc7] inline-flex items-center gap-1">CRACKSAT <ArrowUpRight className="w-3 h-3" /></span>
                    </a>
                    <a href="https://www.cracksat.net/digital/reading-writing/test152.html" target="_blank" rel="noopener noreferrer" className="p-4 rounded-cb-sm border border-[#d9d9d9] bg-white shadow-sm hover:border-[#324dc7] hover:shadow-md transition-all group">
                      <p className="font-bold text-[#1e1e1e] group-hover:text-[#324dc7] transition-colors line-clamp-2 mb-2">Practice Test 152</p>
                      <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider group-hover:text-[#324dc7] inline-flex items-center gap-1">CRACKSAT <ArrowUpRight className="w-3 h-3" /></span>
                    </a>
                    <a href="https://www.cracksat.net/digital/reading-writing/test153.html" target="_blank" rel="noopener noreferrer" className="p-4 rounded-cb-sm border border-[#d9d9d9] bg-white shadow-sm hover:border-[#324dc7] hover:shadow-md transition-all group">
                      <p className="font-bold text-[#1e1e1e] group-hover:text-[#324dc7] transition-colors line-clamp-2 mb-2">Practice Test 153</p>
                      <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider group-hover:text-[#324dc7] inline-flex items-center gap-1">CRACKSAT <ArrowUpRight className="w-3 h-3" /></span>
                    </a>
                    <a href="https://www.cracksat.net/digital/reading-writing/test154.html" target="_blank" rel="noopener noreferrer" className="p-4 rounded-cb-sm border border-[#d9d9d9] bg-white shadow-sm hover:border-[#324dc7] hover:shadow-md transition-all group">
                      <p className="font-bold text-[#1e1e1e] group-hover:text-[#324dc7] transition-colors line-clamp-2 mb-2">Practice Test 154</p>
                      <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider group-hover:text-[#324dc7] inline-flex items-center gap-1">CRACKSAT <ArrowUpRight className="w-3 h-3" /></span>
                    </a>
                    <a href="https://www.cracksat.net/digital/reading-writing/test155.html" target="_blank" rel="noopener noreferrer" className="p-4 rounded-cb-sm border border-[#d9d9d9] bg-white shadow-sm hover:border-[#324dc7] hover:shadow-md transition-all group">
                      <p className="font-bold text-[#1e1e1e] group-hover:text-[#324dc7] transition-colors line-clamp-2 mb-2">Practice Test 155</p>
                      <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider group-hover:text-[#324dc7] inline-flex items-center gap-1">CRACKSAT <ArrowUpRight className="w-3 h-3" /></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
                       {/* Section 4 */}
            <div className="bg-white p-6 rounded-cb-md border border-[#d9d9d9] shadow-sm hover:shadow-md transition-shadow md:col-span-2">
              <div className="flex items-center gap-3 mb-5">
                <div className="bg-[#f5f7fc] p-2.5 rounded-cb-sm border border-[#d9d9d9]">
                  <MonitorPlay className="w-5 h-5 text-[#324dc7]" />
                </div>
                <h4 className="font-bold text-[#1e1e1e] text-lg uppercase tracking-wide">4. Youtube Videos</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <li className="flex flex-col gap-3">
                  <a href="https://youtube.com/playlist?list=PLYZACiD6j3Vuj2shy5qrZv0f497INANIE&si=M7UFUiPdnzSDtsot" target="_blank" rel="noopener noreferrer" className="hover:text-[#dc2323] transition-colors font-medium text-[#1e1e1e] inline-flex items-center gap-2 group">
                    <span className="bg-[#f5f7fc] text-gray-600 px-2.5 py-1 rounded-cb-xs inline-flex font-mono text-[10px] font-bold border border-[#d9d9d9]">4.1</span> <span className="border-b border-transparent group-hover:border-[#dc2323]">GRE Vocab Word of the Day | Manhattan Prep</span>
                  </a>
                  {/* YouTube Placeholder / Frame Centered */}
                  <div className="w-full flex justify-center">
                    <div className="relative w-full max-w-2xl aspect-video rounded-cb-sm overflow-hidden border border-[#d9d9d9] mt-2">
                      <iframe className="absolute top-0 left-0 w-full h-full" src="https://www.youtube.com/embed/videoseries?si=z-NHOmZPOsBjh1XP&amp;list=PLYZACiD6j3Vuj2shy5qrZv0f497INANIE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                  </div>
                </li>
                <li className="flex flex-col gap-3">
                  <a href="https://youtube.com/playlist?list=PLYZACiD6j3VvvIZtz4ZZ5eH99mrr5-oN9&si=63W3OXJhsE0cs9jf" target="_blank" rel="noopener noreferrer" className="hover:text-[#dc2323] transition-colors font-medium text-[#1e1e1e] inline-flex items-center gap-2 group">
                    <span className="bg-[#f5f7fc] text-gray-600 px-2.5 py-1 rounded-cb-xs inline-flex font-mono text-[10px] font-bold border border-[#d9d9d9]">4.2</span> <span className="border-b border-transparent group-hover:border-[#dc2323]">GRE Vocab Word of the Day 2020 | Manhattan Prep</span>
                  </a>
                  {/* YouTube Placeholder / Frame Centered */}
                  <div className="w-full flex justify-center">
                    <div className="relative w-full max-w-2xl aspect-video rounded-cb-sm overflow-hidden border border-[#d9d9d9] mt-2">
                      <iframe className="absolute top-0 left-0 w-full h-full" src="https://www.youtube.com/embed/videoseries?si=ziUm5rG5zsDjm2S_&amp;list=PLYZACiD6j3VvvIZtz4ZZ5eH99mrr5-oN9" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                  </div>
                </li>
              </div>
            </div>

            {/* Section 5 */}
            <div className="bg-white p-6 rounded-cb-md border border-[#d9d9d9] shadow-sm hover:shadow-md transition-shadow md:col-span-2">
              <div className="flex items-center gap-3 mb-5">
                <div className="bg-[#f5f7fc] p-2.5 rounded-cb-sm border border-[#d9d9d9]">
                  <Gamepad2 className="w-5 h-5 text-[#324dc7]" />
                </div>
                <h4 className="font-bold text-[#1e1e1e] text-lg uppercase tracking-wide">5. SAT Vocab Games</h4>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="flex flex-col gap-3">
                  <a href="https://www.tyrannosaurusprep.com/sat.html" target="_blank" rel="noopener noreferrer" className="hover:text-[#324dc7] transition-colors font-medium text-[#1e1e1e] flex items-center gap-2 group">
                    <span className="bg-[#f5f7fc] text-gray-600 px-2.5 py-1 rounded-cb-xs text-[10px] font-mono font-bold border border-[#d9d9d9]">5.1</span> <span className="border-b border-transparent group-hover:border-[#324dc7]">Tyrannosaurus Prep</span>
                  </a>
                  <div className="mt-1 flex justify-center w-full">
                    <a href="https://www.tyrannosaurusprep.com/sat.html" target="_blank" rel="noopener noreferrer" className="inline-block hover:shadow-md transition-shadow w-full border border-[#d9d9d9] rounded-cb-sm overflow-hidden mt-1 relative group">
                      <img src="https://drills.vn/wp-content/uploads/2025/07/Screenshot-2025-07-08-at-08.49.51.png" alt="Tyrannosaurus Prep" className="w-full aspect-[4/3] object-cover object-top" referrerPolicy="no-referrer" />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors"></div>
                    </a>
                  </div>
                </div>
                
                <div className="flex flex-col gap-3">
                  <a href="https://vocab-prodigy.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-[#324dc7] transition-colors font-medium text-[#1e1e1e] flex items-center gap-2 group">
                    <span className="bg-[#f5f7fc] text-gray-600 px-2.5 py-1 rounded-cb-xs text-[10px] font-mono font-bold border border-[#d9d9d9]">5.2</span> <span className="border-b border-transparent group-hover:border-[#324dc7]">Vocab Prodigy (SAT Words)</span>
                  </a>
                  <div className="mt-1 flex justify-center w-full">
                    <a href="https://vocab-prodigy.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-block hover:shadow-md transition-shadow w-full border border-[#d9d9d9] rounded-cb-sm overflow-hidden mt-1 relative group">
                      <img src="https://drills.vn/wp-content/uploads/2025/12/Screenshot-2025-12-25-at-09.40.46.png" alt="Vocab Prodigy" className="w-full aspect-[4/3] object-cover object-top" referrerPolicy="no-referrer" />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors"></div>
                    </a>
                  </div>
                </div>
                
                <div className="flex flex-col gap-3">
                  <a href="https://vocab-joy.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-[#324dc7] transition-colors font-medium text-[#1e1e1e] flex items-center gap-2 group">
                    <span className="bg-[#f5f7fc] text-gray-600 px-2.5 py-1 rounded-cb-xs text-[10px] font-mono font-bold border border-[#d9d9d9]">5.3</span> <span className="border-b border-transparent group-hover:border-[#324dc7]">Vocab Joy</span>
                  </a>
                  <div className="mt-1 flex justify-center w-full">
                    <a href="https://vocab-joy.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-block hover:shadow-md transition-shadow w-full border border-[#d9d9d9] rounded-cb-sm overflow-hidden mt-1 relative group">
                      <img src="https://pbs.twimg.com/media/HKSHNOja0AAxQ_B?format=jpg&name=medium" alt="Vocab Joy" className="w-full aspect-[4/3] object-cover object-top" referrerPolicy="no-referrer" />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors"></div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 6 */}
            <div className="bg-white p-6 rounded-cb-md border border-[#d9d9d9] shadow-sm hover:shadow-md transition-shadow md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#f5f7fc] p-2.5 rounded-cb-sm border border-[#d9d9d9]">
                  <BookOpen className="w-5 h-5 text-[#324dc7]" />
                </div>
                <h4 className="font-bold text-[#1e1e1e] text-lg uppercase tracking-wide">6. Archaic Pronouns (Shakespearean)</h4>
              </div>
              <p className="text-gray-600 font-medium mb-5 text-sm leading-relaxed">
                ‘Archaism’ (sử dụng từ cổ) là một đặc trưng trong văn phong của Shakespeare. Việc hiểu rõ các đại từ nhân xưng cổ như <strong>Thou, thee, thy, thine</strong> và <strong>ye</strong> sẽ giúp việc đọc hiểu các tác phẩm văn học cổ trở nên dễ dàng và thú vị hơn. Mặc dù ngày nay chúng ta dùng chung một từ "you", trong thời của Shakespeare, các đại từ này phân chia rõ ràng về ngôi, vị trí (subject/object), và mức độ lịch sự.
              </p>
              
              <div className="space-y-4">
                <div className="bg-white p-5 rounded-cb-sm border border-[#d9d9d9] shadow-sm">
                  <h5 className="font-bold text-[#1e1e1e] text-base mb-2">1. Thou (Subjective)</h5>
                  <p className="text-sm text-gray-600 font-medium mb-3">
                    <strong>Thou</strong> là đại từ nhân xưng ngôi thứ hai số ít, làm <strong>chủ ngữ (subjective case)</strong> trong câu. Tương đương với "you" khi làm chủ ngữ, hoặc có thể hiểu như cách dùng "I" và "he" trong tiếng Anh hiện đại.
                  </p>
                  <blockquote className="border-l-4 border-[#324dc7] pl-4 py-1 italic text-gray-600 text-sm bg-gray-50 rounded-r-md">
                    "Blow, blow, <strong>thou</strong> winter wind! <strong>Thou</strong> art not so unkind as man’s ingratitude" <br/><span className="text-gray-500 font-bold text-xs mt-1 block">– As You Like It, Act II, Scene VII</span>
                  </blockquote>
                </div>

                <div className="bg-white p-5 rounded-cb-sm border border-[#d9d9d9] shadow-sm">
                  <h5 className="font-bold text-[#1e1e1e] text-base mb-2">2. Thee (Objective)</h5>
                  <p className="text-sm text-gray-600 font-medium mb-3">
                    <strong>Thee</strong> là đại từ nhân xưng ngôi thứ hai số ít, làm <strong>tân ngữ (objective case)</strong> trong câu. Tương đương với "you" khi bị tác động bởi hành động (đứng sau động từ hoặc giới từ).
                  </p>
                  <blockquote className="border-l-4 border-[#324dc7] pl-4 py-1 italic text-gray-600 text-sm bg-gray-50 rounded-r-md">
                    "Shall I compare <strong>thee</strong> to a summer’s day? <br/>
                    Thou art more lovely and more temperate..." <br/><span className="text-gray-500 font-bold text-xs mt-1 block">– Sonnet 18</span>
                  </blockquote>
                </div>

                <div className="bg-white p-5 rounded-cb-sm border border-[#d9d9d9] shadow-sm">
                  <h5 className="font-bold text-[#1e1e1e] text-base mb-2">3. Thy và Thine (Possessive)</h5>
                  <p className="text-sm text-gray-600 font-medium mb-3">
                    Cả hai đều là tính/đại từ sở hữu, tương đương với <strong>your</strong> và <strong>yours</strong> ngày nay. Điểm khác biệt là: <strong>Thy</strong> dùng trước danh từ bắt đầu bằng phụ âm, trong khi <strong>Thine</strong> thường dùng trước danh từ bắt đầu bằng nguyên âm (giống quy tắc a/an).
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <blockquote className="border-l-4 border-[#324dc7] pl-4 py-2 italic text-gray-600 text-sm bg-gray-50 rounded-r-md">
                      "In <strong>thy</strong> face I see the map of honour, truth and loyalty." <br/><span className="text-gray-500 font-bold text-xs mt-1 block">― Henry VI</span>
                    </blockquote>
                    <blockquote className="border-l-4 border-[#324dc7] pl-4 py-2 italic text-gray-600 text-sm bg-gray-50 rounded-r-md">
                      "This above all: to <strong>thine</strong> own self be true" <br/><span className="text-gray-500 font-bold text-xs mt-1 block">– Hamlet, Act I, Scene III</span>
                    </blockquote>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-cb-sm border border-[#d9d9d9] shadow-sm">
                  <h5 className="font-bold text-[#1e1e1e] text-base mb-2">4. Ye (Subject/Plural)</h5>
                  <p className="text-sm text-gray-600 font-medium mb-0">
                    <strong>Ye</strong> đóng vai trò dạng số ít lẫn số nhiều của "you", và chuyên được dùng làm <strong>chủ ngữ (nominative pronoun)</strong> của câu. Trong tiếng Anh thế kỷ 17, "ye" và "you" mang sắc thái lịch sự khác nhau, trong đó "you" có lúc trang trọng và lịch thiệp hơn.
                  </p>
                </div>

                <div className="bg-[#f5f7fc] p-5 rounded-cb-sm border border-[#d9d9d9] mt-2 shadow-sm">
                  <h5 className="font-bold text-[#dc2323] text-sm mb-2 flex items-center gap-2 uppercase tracking-tight">
                    <ShieldAlert className="w-5 h-5" />
                    Bối cảnh xã hội (Cultural Context)
                  </h5>
                  <p className="text-sm text-gray-700 font-medium leading-relaxed">
                    Theo David Crystal, vào thời Shakespeare, <strong>"you"</strong> được dùng bởi người có địa vị thấp gọi người có địa vị cao (người thường gọi quý tộc, con cái gọi cha mẹ, người hầu gọi chủ), và là tiêu chuẩn giao tiếp giữa các tầng lớp thượng lưu với nhau. 
                    Ngược lại, <strong>"thou/thee"</strong> được dùng bởi người địa vị cao gọi người cấp thấp hơn, người tầng lớp thấp gọi nhau; đồng thời dành riêng cho văn thơ trang trọng, khi xưng hô với Chúa trời hoặc thế lực siêu nhiên.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 7 */}
            <div className="bg-white p-6 rounded-cb-md border border-[#d9d9d9] shadow-sm hover:shadow-md transition-shadow md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#f5f7fc] p-2.5 rounded-cb-sm border border-[#d9d9d9]">
                  <Feather className="w-5 h-5 text-[#324dc7]" />
                </div>
                <h4 className="font-bold text-[#1e1e1e] text-lg uppercase tracking-wide">7. Poems</h4>
              </div>
              <p className="text-gray-600 font-medium mb-5 text-sm leading-relaxed">
                Các bài thơ trong phần thi Đọc hiểu - Viết (Reading and Writing) của kỳ thi Digital SAT thường được trích từ kho tàng văn học Anh - Mỹ trong 200 năm qua. Đoạn thơ thường dài từ 25 đến 150 chữ, lấy từ các tạp chí, báo, tiểu thuyết, hoặc các tuyển tập thơ xuất bản tại Mỹ.
              </p>
              
              <div className="space-y-4">
                <div className="bg-white p-5 rounded-cb-sm border border-[#d9d9d9] shadow-sm">
                  <h5 className="font-bold text-[#1e1e1e] text-base mb-2">Tác giả phổ biến</h5>
                  <p className="text-sm text-gray-600 font-medium mb-0">
                    Đề thi thường sử dụng các trích đoạn của các nhà thơ kinh điển như William Shakespeare, Walt Whitman, Robert Frost, Emily Dickinson, hay Langston Hughes.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-cb-sm border border-[#d9d9d9] shadow-sm">
                  <h5 className="font-bold text-[#1e1e1e] text-base mb-2">Chủ đề thường gặp</h5>
                  <p className="text-sm text-gray-600 font-medium mb-0">
                    Tình yêu, sự cô đơn, thế giới tự nhiên, hoặc sự thay đổi của thời gian và cuộc sống.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-cb-sm border border-[#d9d9d9] shadow-sm">
                  <h5 className="font-bold text-[#1e1e1e] text-base mb-2">Bản chất câu hỏi</h5>
                  <p className="text-sm text-gray-600 font-medium mb-0">
                    Dù có tên gọi là "câu hỏi thơ", College Board chỉ kiểm tra khả năng đọc hiểu logic của thí sinh (như chức năng của một từ/cụm từ trong ngữ cảnh, ý chính, hoặc cấu trúc đoạn). Bạn <strong>không cần</strong> phải có kiến thức nền tảng về văn học để trả lời.
                  </p>
                </div>

                <div className="bg-[#fffdf0] p-6 rounded-cb-sm border border-[#ffe36d] mt-2 shadow-sm">
                  <h5 className="font-bold text-[#dc2323] text-sm mb-2 flex items-center gap-2 uppercase tracking-wide">
                    <Lightbulb className="w-5 h-5" />
                    Cách luyện tập
                  </h5>
                  <p className="text-sm text-gray-700 font-medium leading-relaxed">
                    Bạn có thể tham khảo chuyên mục thơ của Poetry Foundation hoặc các đề thi mẫu trên College Board để làm quen với phong cách hành văn.
                  </p>
                  <a
                    href="https://www.poetryfoundation.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-3 text-sm font-bold text-[#324dc7] hover:text-[#dc2323] transition-colors"
                  >
                    Truy cập Poetry Foundation <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
        
        {/* Recommended Prep Hubs Card */}
        <div className="bg-white border border-[#d9d9d9] rounded-cb-lg p-8 md:p-10 mb-12 shadow-cb relative overflow-hidden">
          <h3 className="text-2xl md:text-3xl font-display font-bold border-b border-[#d9d9d9] pb-5 mb-8 text-[#1e1e1e] uppercase flex justify-between items-center gap-4 flex-wrap tracking-tight">
            SAT Test Prep Websites
            <span className="bg-[#dc2323] text-white text-[10px] sm:text-xs px-3 py-1.5 rounded-cb-xs border border-[#dc2323] font-mono shadow-sm inline-flex items-center justify-center leading-none h-fit tracking-widest font-bold uppercase">
              RECOMMENDED
            </span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
             <a href="https://www.oneprep.co/" target="_blank" rel="noopener noreferrer" className="bg-white p-5 border border-[#d9d9d9] hover:border-[#324dc7] shadow-sm hover:shadow-md transition-all rounded-cb-sm flex items-center justify-between group">
               <span className="font-bold text-[#1e1e1e] group-hover:text-[#324dc7] transition-colors">One Prep</span>
               <span className="text-gray-400 group-hover:text-[#324dc7] group-hover:translate-x-1 transition-all">↗</span>
             </a>
             <a href="https://exam.satpanda.com/" target="_blank" rel="noopener noreferrer" className="bg-white p-5 border border-[#d9d9d9] hover:border-[#324dc7] shadow-sm hover:shadow-md transition-all rounded-cb-sm flex items-center justify-between group">
               <span className="font-bold text-[#1e1e1e] group-hover:text-[#324dc7] transition-colors">SAT Panda</span>
               <span className="text-gray-400 group-hover:text-[#324dc7] group-hover:translate-x-1 transition-all">↗</span>
             </a>
             <a href="https://opensat.vn/" target="_blank" rel="noopener noreferrer" className="bg-white p-5 border border-[#d9d9d9] hover:border-[#324dc7] shadow-sm hover:shadow-md transition-all rounded-cb-sm flex items-center justify-between group">
               <span className="font-bold text-[#1e1e1e] group-hover:text-[#324dc7] transition-colors">OpenSAT</span>
               <span className="text-gray-400 group-hover:text-[#324dc7] group-hover:translate-x-1 transition-all">↗</span>
             </a>
             <a href="https://satsuiteeducatorquestionbank.collegeboard.org/" target="_blank" rel="noopener noreferrer" className="bg-white p-5 border border-[#d9d9d9] hover:border-[#324dc7] shadow-sm hover:shadow-md transition-all rounded-cb-sm flex items-center justify-between group">
               <span className="font-bold text-[#1e1e1e] group-hover:text-[#324dc7] transition-colors text-sm">Question Bank</span>
               <span className="text-gray-400 group-hover:text-[#324dc7] group-hover:translate-x-1 transition-all">↗</span>
             </a>
             <a href="https://www.cracksat.net/digital/index.html" target="_blank" rel="noopener noreferrer" className="bg-white p-5 border border-[#d9d9d9] hover:border-[#324dc7] shadow-sm hover:shadow-md transition-all rounded-cb-sm flex items-center justify-between group">
               <span className="font-bold text-[#1e1e1e] group-hover:text-[#324dc7] transition-colors">CrackSAT</span>
               <span className="text-gray-400 group-hover:text-[#324dc7] group-hover:translate-x-1 transition-all">↗</span>
             </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ResourcesView;
