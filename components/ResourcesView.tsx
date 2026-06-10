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
          className="flex items-center gap-1.5 bg-[#ffe36d] hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black text-xs font-black uppercase tracking-wider px-4 py-2 rounded-xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all border-2 border-black"
          title="Tải danh sách tài liệu dạng ảnh PNG có đầy đủ header/footer"
        >
          <Download className="w-3.5 h-3.5 stroke-[3px]" />
          Download PNG
        </button>
        <button
          onClick={handleDownloadHtml}
          className="flex items-center gap-1.5 bg-gray-900 hover:bg-gray-800 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-white text-xs font-black uppercase tracking-wider px-4 py-2 rounded-xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all border-2 border-black"
          title="Tải danh sách tài liệu dạng file HTML giữ nguyên giao diện"
        >
          <FileCode className="w-3.5 h-3.5 stroke-[3px]" />
          Download HTML
        </button>
      </div>

      <div id="resources-export-container" className="w-full bg-transparent flex flex-col gap-8">
        
        {/* Main Content Box */}
        <div className="bg-[#fffdf0] border-[4px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-[32px] p-8 md:p-10 relative overflow-hidden">
          <h3 className="text-2xl md:text-3xl font-display font-black border-b-[4px] border-black pb-5 mb-8 text-slate-950 uppercase flex justify-between items-center flex-wrap gap-4 tracking-tight">
            <span>
              SAT - Vocab Focus <span className="text-[#dc2323] font-black ml-2">(Verbal Section)</span>
            </span>
            <span className="text-xs bg-[#dc2323] text-white border-2 border-black px-3 py-1.5 rounded-lg uppercase font-mono font-black tracking-widest select-none inline-flex items-center justify-center leading-none h-fit shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              RESOURCE DECK
            </span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-base">
            {/* Section 1 */}
            <div className="bg-white p-6 rounded-2xl border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#ffe36d] p-2.5 rounded-xl border-2 border-black">
                  <BookOpen className="w-5 h-5 text-black stroke-[2.5px]" />
                </div>
                <h4 className="font-black text-black text-lg uppercase tracking-wide">1. Theory</h4>
              </div>
              <ul className="space-y-3">
                <li>
                  <a href="https://www.khanacademy.org/test-prep/sat-reading-and-writing/x0d47bcec73eb6c4b:advanced-craft-and-structure/x0d47bcec73eb6c4b:words-in-context-3/a/words-in-context-lesson" target="_blank" rel="noopener noreferrer" className="group flex items-start gap-2 hover:text-[#dc2323] transition-colors font-bold">
                    <Link2 className="w-4 h-4 text-black group-hover:text-[#dc2323] mt-0.5 shrink-0 stroke-[2.5px]" />
                    <span className="leading-tight border-b-2 border-transparent group-hover:border-[#dc2323]">Khan Academy - Words in Context Lesson</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Section 2 */}
            <div className="bg-white p-6 rounded-2xl border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#ffe36d] p-2.5 rounded-xl border-2 border-black">
                  <ScrollText className="w-5 h-5 text-black stroke-[2.5px]" />
                </div>
                <h4 className="font-black text-black text-lg uppercase tracking-wide">2. High Frequency Vocab</h4>
              </div>
              <ul className="space-y-3">
                <li>
                  <a href="https://quizlet.com/join/Gv8UmnH4b?i=1u2w5s&x=1bqt" target="_blank" rel="noopener noreferrer" className="group flex items-start gap-2 hover:text-[#dc2323] transition-colors font-bold text-black">
                    <Link2 className="w-4 h-4 text-black group-hover:text-[#dc2323] mt-0.5 shrink-0 stroke-[2.5px]" />
                    <span className="leading-tight border-b-2 border-transparent group-hover:border-[#dc2323]">500 KEY WORDS FOR THE SAT (Quizlet Deck)</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="bg-white p-6 rounded-2xl border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#4bb2f9] p-2.5 rounded-xl border-2 border-black">
                  <Feather className="w-5 h-5 text-black stroke-[2.5px]" />
                </div>
                <h4 className="font-black text-black text-lg uppercase tracking-wide">3. Practice Craft and Structure</h4>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h5 className="font-bold text-black text-base mb-3 flex items-center gap-2 relative pl-3 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1.5 before:h-4 before:bg-black before:rounded-full">Vocab Practice</h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <a href="https://test-ninjas.com/sat-vocabulary-practice" target="_blank" rel="noopener noreferrer" className="p-4 rounded-xl border-2 border-black bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-[#4bb2f9]/10 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all group">
                      <p className="font-bold text-black group-hover:text-[#4bb2f9] transition-colors line-clamp-2 mb-2">Test Ninjas Vocab Practice Hub</p>
                      <span className="text-[10px] font-black text-slate-500 uppercase tracking-wider group-hover:text-[#4bb2f9] inline-flex items-center gap-1">Practice <ArrowUpRight className="w-3 h-3 stroke-[3px]" /></span>
                    </a>
                    <a href="https://www.cracksat.net/digital/reading-writing/test9.html" target="_blank" rel="noopener noreferrer" className="p-4 rounded-xl border-2 border-black bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-[#4bb2f9]/10 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all group">
                      <p className="font-bold text-black group-hover:text-[#4bb2f9] transition-colors line-clamp-2 mb-2">Reading and Writing Practice Test 9</p>
                      <span className="text-[10px] font-black text-slate-500 uppercase tracking-wider group-hover:text-[#4bb2f9] inline-flex items-center gap-1">CRACKSAT <ArrowUpRight className="w-3 h-3 stroke-[3px]" /></span>
                    </a>
                    <a href="https://www.cracksat.net/digital/reading-writing/test10.html" target="_blank" rel="noopener noreferrer" className="p-4 rounded-xl border-2 border-black bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-[#4bb2f9]/10 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all group">
                      <p className="font-bold text-black group-hover:text-[#4bb2f9] transition-colors line-clamp-2 mb-2">Reading and Writing Practice Test 10</p>
                      <span className="text-[10px] font-black text-slate-500 uppercase tracking-wider group-hover:text-[#4bb2f9] inline-flex items-center gap-1">CRACKSAT <ArrowUpRight className="w-3 h-3 stroke-[3px]" /></span>
                    </a>
                  </div>
                </div>

                <div>
                  <h5 className="font-bold text-black text-base mb-3 flex items-center gap-2 relative pl-3 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1.5 before:h-4 before:bg-black before:rounded-full">Poetry Practice</h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                    <a href="https://www.cracksat.net/digital/reading-writing/test151.html" target="_blank" rel="noopener noreferrer" className="p-4 rounded-xl border-2 border-black bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-[#4bb2f9]/10 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all group">
                      <p className="font-bold text-black group-hover:text-[#4bb2f9] transition-colors line-clamp-2 mb-2">Practice Test 151</p>
                      <span className="text-[10px] font-black text-slate-500 uppercase tracking-wider group-hover:text-[#4bb2f9] inline-flex items-center gap-1">CRACKSAT <ArrowUpRight className="w-3 h-3 stroke-[3px]" /></span>
                    </a>
                    <a href="https://www.cracksat.net/digital/reading-writing/test152.html" target="_blank" rel="noopener noreferrer" className="p-4 rounded-xl border-2 border-black bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-[#4bb2f9]/10 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all group">
                      <p className="font-bold text-black group-hover:text-[#4bb2f9] transition-colors line-clamp-2 mb-2">Practice Test 152</p>
                      <span className="text-[10px] font-black text-slate-500 uppercase tracking-wider group-hover:text-[#4bb2f9] inline-flex items-center gap-1">CRACKSAT <ArrowUpRight className="w-3 h-3 stroke-[3px]" /></span>
                    </a>
                    <a href="https://www.cracksat.net/digital/reading-writing/test153.html" target="_blank" rel="noopener noreferrer" className="p-4 rounded-xl border-2 border-black bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-[#4bb2f9]/10 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all group">
                      <p className="font-bold text-black group-hover:text-[#4bb2f9] transition-colors line-clamp-2 mb-2">Practice Test 153</p>
                      <span className="text-[10px] font-black text-slate-500 uppercase tracking-wider group-hover:text-[#4bb2f9] inline-flex items-center gap-1">CRACKSAT <ArrowUpRight className="w-3 h-3 stroke-[3px]" /></span>
                    </a>
                    <a href="https://www.cracksat.net/digital/reading-writing/test154.html" target="_blank" rel="noopener noreferrer" className="p-4 rounded-xl border-2 border-black bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-[#4bb2f9]/10 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all group">
                      <p className="font-bold text-black group-hover:text-[#4bb2f9] transition-colors line-clamp-2 mb-2">Practice Test 154</p>
                      <span className="text-[10px] font-black text-slate-500 uppercase tracking-wider group-hover:text-[#4bb2f9] inline-flex items-center gap-1">CRACKSAT <ArrowUpRight className="w-3 h-3 stroke-[3px]" /></span>
                    </a>
                    <a href="https://www.cracksat.net/digital/reading-writing/test155.html" target="_blank" rel="noopener noreferrer" className="p-4 rounded-xl border-2 border-black bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-[#4bb2f9]/10 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all group">
                      <p className="font-bold text-black group-hover:text-[#4bb2f9] transition-colors line-clamp-2 mb-2">Practice Test 155</p>
                      <span className="text-[10px] font-black text-slate-500 uppercase tracking-wider group-hover:text-[#4bb2f9] inline-flex items-center gap-1">CRACKSAT <ArrowUpRight className="w-3 h-3 stroke-[3px]" /></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div className="bg-white p-6 rounded-2xl border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all md:col-span-2">
              <div className="flex items-center gap-3 mb-5">
                <div className="bg-[#ff4d4f] p-2.5 rounded-xl border-2 border-black">
                  <MonitorPlay className="w-5 h-5 text-black stroke-[2.5px]" />
                </div>
                <h4 className="font-black text-black text-lg uppercase tracking-wide">4. Youtube Videos</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <li className="flex flex-col gap-3">
                  <a href="https://youtube.com/playlist?list=PLYZACiD6j3Vuj2shy5qrZv0f497INANIE&si=M7UFUiPdnzSDtsot" target="_blank" rel="noopener noreferrer" className="hover:text-[#dc2323] transition-colors font-bold text-black inline-flex items-center gap-2 group">
                    <span className="bg-[#ffe36d] text-black px-2.5 py-1 rounded inline-flex font-mono text-[10px] font-black border-2 border-black shadow-hard-sm">4.1</span> <span className="border-b-2 border-transparent group-hover:border-[#dc2323]">GRE Vocab Word of the Day | Manhattan Prep</span>
                  </a>
                  {/* YouTube Placeholder / Frame Centered */}
                  <div className="w-full flex justify-center">
                    <div className="relative w-full max-w-2xl aspect-video rounded-xl overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-[3px] border-black mt-2">
                      <iframe className="absolute top-0 left-0 w-full h-full" src="https://www.youtube.com/embed/videoseries?si=z-NHOmZPOsBjh1XP&amp;list=PLYZACiD6j3Vuj2shy5qrZv0f497INANIE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                  </div>
                </li>
                <li className="flex flex-col gap-3">
                  <a href="https://youtube.com/playlist?list=PLYZACiD6j3VvvIZtz4ZZ5eH99mrr5-oN9&si=63W3OXJhsE0cs9jf" target="_blank" rel="noopener noreferrer" className="hover:text-[#dc2323] transition-colors font-bold text-black inline-flex items-center gap-2 group">
                    <span className="bg-[#ffe36d] text-black px-2.5 py-1 rounded inline-flex font-mono text-[10px] font-black border-2 border-black shadow-hard-sm">4.2</span> <span className="border-b-2 border-transparent group-hover:border-[#dc2323]">GRE Vocab Word of the Day 2020 | Manhattan Prep</span>
                  </a>
                  {/* YouTube Placeholder / Frame Centered */}
                  <div className="w-full flex justify-center">
                    <div className="relative w-full max-w-2xl aspect-video rounded-xl overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-[3px] border-black mt-2">
                      <iframe className="absolute top-0 left-0 w-full h-full" src="https://www.youtube.com/embed/videoseries?si=ziUm5rG5zsDjm2S_&amp;list=PLYZACiD6j3VvvIZtz4ZZ5eH99mrr5-oN9" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                  </div>
                </li>
              </div>
            </div>

            {/* Section 5 */}
            <div className="bg-white p-6 rounded-2xl border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all md:col-span-2">
              <div className="flex items-center gap-3 mb-5">
                <div className="bg-[#52c41a] p-2.5 rounded-xl border-2 border-black">
                  <Gamepad2 className="w-5 h-5 text-black stroke-[2.5px]" />
                </div>
                <h4 className="font-black text-black text-lg uppercase tracking-wide">5. SAT Vocab Games</h4>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="flex flex-col gap-3">
                  <a href="https://www.tyrannosaurusprep.com/sat.html" target="_blank" rel="noopener noreferrer" className="hover:text-[#52c41a] transition-colors font-bold text-black flex items-center gap-2 group">
                    <span className="bg-[#ffe36d] text-black px-2.5 py-1 rounded text-[10px] font-mono font-black border-2 border-black shadow-hard-sm">5.1</span> <span className="border-b-2 border-transparent group-hover:border-[#52c41a]">Tyrannosaurus Prep</span>
                  </a>
                  <div className="mt-1 flex justify-center w-full">
                    <a href="https://www.tyrannosaurusprep.com/sat.html" target="_blank" rel="noopener noreferrer" className="inline-block hover:-translate-y-1 transition-transform w-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-[3px] border-black rounded-xl overflow-hidden mt-1 relative group">
                      <img src="https://drills.vn/wp-content/uploads/2025/07/Screenshot-2025-07-08-at-08.49.51.png" alt="Tyrannosaurus Prep" className="w-full aspect-[4/3] object-cover object-top" referrerPolicy="no-referrer" />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                    </a>
                  </div>
                </div>
                
                <div className="flex flex-col gap-3">
                  <a href="https://vocab-prodigy.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-[#52c41a] transition-colors font-bold text-black flex items-center gap-2 group">
                    <span className="bg-[#ffe36d] text-black px-2.5 py-1 rounded text-[10px] font-mono font-black border-2 border-black shadow-hard-sm">5.2</span> <span className="border-b-2 border-transparent group-hover:border-[#52c41a]">Vocab Prodigy (SAT Words)</span>
                  </a>
                  <div className="mt-1 flex justify-center w-full">
                    <a href="https://vocab-prodigy.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-block hover:-translate-y-1 transition-transform w-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-[3px] border-black rounded-xl overflow-hidden mt-1 relative group">
                      <img src="https://drills.vn/wp-content/uploads/2025/12/Screenshot-2025-12-25-at-09.40.46.png" alt="Vocab Prodigy" className="w-full aspect-[4/3] object-cover object-top" referrerPolicy="no-referrer" />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                    </a>
                  </div>
                </div>
                
                <div className="flex flex-col gap-3">
                  <a href="https://vocab-joy.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-[#52c41a] transition-colors font-bold text-black flex items-center gap-2 group">
                    <span className="bg-[#ffe36d] text-black px-2.5 py-1 rounded text-[10px] font-mono font-black border-2 border-black shadow-hard-sm">5.3</span> <span className="border-b-2 border-transparent group-hover:border-[#52c41a]">Vocab Joy</span>
                  </a>
                  <div className="mt-1 flex justify-center w-full">
                    <a href="https://vocab-joy.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-block hover:-translate-y-1 transition-transform w-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-[3px] border-black rounded-xl overflow-hidden mt-1 relative group">
                      <img src="https://pbs.twimg.com/media/HKSHNOja0AAxQ_B?format=jpg&name=medium" alt="Vocab Joy" className="w-full aspect-[4/3] object-cover object-top" referrerPolicy="no-referrer" />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 6 */}
            <div className="bg-white p-6 rounded-2xl border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#b37feb] p-2.5 rounded-xl border-2 border-black">
                  <BookOpen className="w-5 h-5 text-black stroke-[2.5px]" />
                </div>
                <h4 className="font-black text-black text-lg uppercase tracking-wide">6. Archaic Pronouns (Shakespearean)</h4>
              </div>
              <p className="text-slate-800 font-medium mb-5 text-sm leading-relaxed">
                ‘Archaism’ (sử dụng từ cổ) là một đặc trưng trong văn phong của Shakespeare. Việc hiểu rõ các đại từ nhân xưng cổ như <strong>Thou, thee, thy, thine</strong> và <strong>ye</strong> sẽ giúp việc đọc hiểu các tác phẩm văn học cổ trở nên dễ dàng và thú vị hơn. Mặc dù ngày nay chúng ta dùng chung một từ "you", trong thời của Shakespeare, các đại từ này phân chia rõ ràng về ngôi, vị trí (subject/object), và mức độ lịch sự.
              </p>
              
              <div className="space-y-4">
                <div className="bg-[#fffdf0] p-5 rounded-xl border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <h5 className="font-black text-black text-base mb-2">1. Thou (Subjective)</h5>
                  <p className="text-sm text-slate-800 font-medium mb-3">
                    <strong>Thou</strong> là đại từ nhân xưng ngôi thứ hai số ít, làm <strong>chủ ngữ (subjective case)</strong> trong câu. Tương đương với "you" khi làm chủ ngữ, hoặc có thể hiểu như cách dùng "I" và "he" trong tiếng Anh hiện đại.
                  </p>
                  <blockquote className="border-l-4 border-[#dc2323] pl-4 py-1 italic text-slate-700 text-sm bg-white rounded-r-lg">
                    "Blow, blow, <strong>thou</strong> winter wind! <strong>Thou</strong> art not so unkind as man’s ingratitude" <br/><span className="text-slate-500 font-bold text-xs mt-1 block">– As You Like It, Act II, Scene VII</span>
                  </blockquote>
                </div>

                <div className="bg-[#fffdf0] p-5 rounded-xl border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <h5 className="font-black text-black text-base mb-2">2. Thee (Objective)</h5>
                  <p className="text-sm text-slate-800 font-medium mb-3">
                    <strong>Thee</strong> là đại từ nhân xưng ngôi thứ hai số ít, làm <strong>tân ngữ (objective case)</strong> trong câu. Tương đương với "you" khi bị tác động bởi hành động (đứng sau động từ hoặc giới từ).
                  </p>
                  <blockquote className="border-l-4 border-[#dc2323] pl-4 py-1 italic text-slate-700 text-sm bg-white rounded-r-lg">
                    "Shall I compare <strong>thee</strong> to a summer’s day? <br/>
                    Thou art more lovely and more temperate..." <br/><span className="text-slate-500 font-bold text-xs mt-1 block">– Sonnet 18</span>
                  </blockquote>
                </div>

                <div className="bg-[#fffdf0] p-5 rounded-xl border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <h5 className="font-black text-black text-base mb-2">3. Thy và Thine (Possessive)</h5>
                  <p className="text-sm text-slate-800 font-medium mb-3">
                    Cả hai đều là tính/đại từ sở hữu, tương đương với <strong>your</strong> và <strong>yours</strong> ngày nay. Điểm khác biệt là: <strong>Thy</strong> dùng trước danh từ bắt đầu bằng phụ âm, trong khi <strong>Thine</strong> thường dùng trước danh từ bắt đầu bằng nguyên âm (giống quy tắc a/an).
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <blockquote className="border-l-4 border-[#dc2323] pl-4 py-2 italic text-slate-700 text-sm bg-white rounded-r-lg">
                      "In <strong>thy</strong> face I see the map of honour, truth and loyalty." <br/><span className="text-slate-500 font-bold text-xs mt-1 block">― Henry VI</span>
                    </blockquote>
                    <blockquote className="border-l-4 border-[#dc2323] pl-4 py-2 italic text-slate-700 text-sm bg-white rounded-r-lg">
                      "This above all: to <strong>thine</strong> own self be true" <br/><span className="text-slate-500 font-bold text-xs mt-1 block">– Hamlet, Act I, Scene III</span>
                    </blockquote>
                  </div>
                </div>

                <div className="bg-[#fffdf0] p-5 rounded-xl border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <h5 className="font-black text-black text-base mb-2">4. Ye (Subject/Plural)</h5>
                  <p className="text-sm text-slate-800 font-medium mb-0">
                    <strong>Ye</strong> đóng vai trò dạng số ít lẫn số nhiều của "you", và chuyên được dùng làm <strong>chủ ngữ (nominative pronoun)</strong> của câu. Trong tiếng Anh thế kỷ 17, "ye" và "you" mang sắc thái lịch sự khác nhau, trong đó "you" có lúc trang trọng và lịch thiệp hơn.
                  </p>
                </div>

                <div className="bg-[#ffe36d]/30 p-5 rounded-xl border-2 border-black mt-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <h5 className="font-black text-[#dc2323] text-sm mb-2 flex items-center gap-2 uppercase tracking-tight">
                    <ShieldAlert className="w-5 h-5 stroke-[2.5px]" />
                    Bối cảnh xã hội (Cultural Context)
                  </h5>
                  <p className="text-sm text-black font-medium leading-relaxed">
                    Theo David Crystal, vào thời Shakespeare, <strong>"you"</strong> được dùng bởi người có địa vị thấp gọi người có địa vị cao (người thường gọi quý tộc, con cái gọi cha mẹ, người hầu gọi chủ), và là tiêu chuẩn giao tiếp giữa các tầng lớp thượng lưu với nhau. 
                    Ngược lại, <strong>"thou/thee"</strong> được dùng bởi người địa vị cao gọi người cấp thấp hơn, người tầng lớp thấp gọi nhau; đồng thời dành riêng cho văn thơ trang trọng, khi xưng hô với Chúa trời hoặc thế lực siêu nhiên.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 7 */}
            <div className="bg-white p-6 rounded-2xl border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#faad14] p-2.5 rounded-xl border-2 border-black">
                  <Feather className="w-5 h-5 text-black stroke-[2.5px]" />
                </div>
                <h4 className="font-black text-black text-lg uppercase tracking-wide">7. Poems</h4>
              </div>
              <p className="text-slate-800 font-medium mb-5 text-sm leading-relaxed">
                Các bài thơ trong phần thi Đọc hiểu - Viết (Reading and Writing) của kỳ thi Digital SAT thường được trích từ kho tàng văn học Anh - Mỹ trong 200 năm qua. Đoạn thơ thường dài từ 25 đến 150 chữ, lấy từ các tạp chí, báo, tiểu thuyết, hoặc các tuyển tập thơ xuất bản tại Mỹ.
              </p>
              
              <div className="space-y-4">
                <div className="bg-[#fffdf0] p-5 rounded-xl border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <h5 className="font-black text-black text-base mb-2">Tác giả phổ biến</h5>
                  <p className="text-sm text-slate-800 font-medium mb-0">
                    Đề thi thường sử dụng các trích đoạn của các nhà thơ kinh điển như William Shakespeare, Walt Whitman, Robert Frost, Emily Dickinson, hay Langston Hughes.
                  </p>
                </div>

                <div className="bg-[#fffdf0] p-5 rounded-xl border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <h5 className="font-black text-black text-base mb-2">Chủ đề thường gặp</h5>
                  <p className="text-sm text-slate-800 font-medium mb-0">
                    Tình yêu, sự cô đơn, thế giới tự nhiên, hoặc sự thay đổi của thời gian và cuộc sống.
                  </p>
                </div>

                <div className="bg-[#fffdf0] p-5 rounded-xl border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <h5 className="font-black text-black text-base mb-2">Bản chất câu hỏi</h5>
                  <p className="text-sm text-slate-800 font-medium mb-0">
                    Dù có tên gọi là "câu hỏi thơ", College Board chỉ kiểm tra khả năng đọc hiểu logic của thí sinh (như chức năng của một từ/cụm từ trong ngữ cảnh, ý chính, hoặc cấu trúc đoạn). Bạn <strong>không cần</strong> phải có kiến thức nền tảng về văn học để trả lời.
                  </p>
                </div>

                <div className="bg-amber-100/50 p-6 rounded-xl border-2 border-black mt-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <h5 className="font-black text-[#dc2323] text-sm mb-2 flex items-center gap-2 uppercase tracking-wide">
                    <Lightbulb className="w-5 h-5 stroke-[2.5px]" />
                    Cách luyện tập
                  </h5>
                  <p className="text-sm text-black font-medium leading-relaxed">
                    Bạn có thể tham khảo chuyên mục thơ của Poetry Foundation hoặc các đề thi mẫu trên College Board để làm quen với phong cách hành văn.
                  </p>
                  <a
                    href="https://www.poetryfoundation.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-3 text-sm font-black text-black hover:text-[#dc2323] border-b-2 border-black hover:border-transparent transition-colors"
                  >
                    Truy cập Poetry Foundation <ExternalLink className="w-4 h-4 stroke-[2.5px]" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
        
        {/* Recommended Prep Hubs Card */}
        <div className="bg-[#fffdf0] border-[4px] border-black rounded-[32px] p-8 md:p-10 mb-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
          <h3 className="text-2xl md:text-3xl font-display font-black border-b-[4px] border-black pb-5 mb-8 text-slate-950 uppercase flex justify-between items-center gap-4 flex-wrap tracking-tight">
            SAT Test Prep Websites
            <span className="bg-[#dc2323] text-white text-[10px] sm:text-xs px-3 py-1.5 rounded-lg border-2 border-black font-mono shadow-hard-sm inline-flex items-center justify-center leading-none h-fit tracking-widest font-black uppercase">
              RECOMMENDED
            </span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
             <a href="https://www.oneprep.co/" target="_blank" rel="noopener noreferrer" className="bg-white p-5 border-[3px] border-black hover:-translate-y-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all rounded-xl flex items-center justify-between group">
               <span className="font-bold text-black group-hover:text-[#dc2323] transition-colors">One Prep</span>
               <span className="text-black group-hover:text-[#dc2323] group-hover:translate-x-1 transition-all font-black">↗</span>
             </a>
             <a href="https://exam.satpanda.com/" target="_blank" rel="noopener noreferrer" className="bg-white p-5 border-[3px] border-black hover:-translate-y-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all rounded-xl flex items-center justify-between group">
               <span className="font-bold text-black group-hover:text-[#dc2323] transition-colors">SAT Panda</span>
               <span className="text-black group-hover:text-[#dc2323] group-hover:translate-x-1 transition-all font-black">↗</span>
             </a>
             <a href="https://opensat.vn/" target="_blank" rel="noopener noreferrer" className="bg-white p-5 border-[3px] border-black hover:-translate-y-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all rounded-xl flex items-center justify-between group">
               <span className="font-bold text-black group-hover:text-[#dc2323] transition-colors">OpenSAT</span>
               <span className="text-black group-hover:text-[#dc2323] group-hover:translate-x-1 transition-all font-black">↗</span>
             </a>
             <a href="https://satsuiteeducatorquestionbank.collegeboard.org/" target="_blank" rel="noopener noreferrer" className="bg-white p-5 border-[3px] border-black hover:-translate-y-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all rounded-xl flex items-center justify-between group">
               <span className="font-bold text-black group-hover:text-[#dc2323] transition-colors text-sm">Question Bank</span>
               <span className="text-black group-hover:text-[#dc2323] group-hover:translate-x-1 transition-all font-black">↗</span>
             </a>
             <a href="https://www.cracksat.net/digital/index.html" target="_blank" rel="noopener noreferrer" className="bg-white p-5 border-[3px] border-black hover:-translate-y-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all rounded-xl flex items-center justify-between group">
               <span className="font-bold text-black group-hover:text-[#dc2323] transition-colors">CrackSAT</span>
               <span className="text-black group-hover:text-[#dc2323] group-hover:translate-x-1 transition-all font-black">↗</span>
             </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ResourcesView;
