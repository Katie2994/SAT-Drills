import React from 'react';
import { Download, FileCode, ShieldAlert } from 'lucide-react';
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
          
          <div className="space-y-6 text-base">
            {/* Section 1 */}
            <div className="bg-[#fffaf0] p-6 rounded-xl border border-[#ffe36d]">
              <h4 className="font-bold text-[#dc2323] text-lg mb-3">1. Theory - Words in Context</h4>
              <ul className="space-y-2 pl-4 list-disc list-inside text-[#b91c1c]">
                <li>
                  <a href="https://www.khanacademy.org/test-prep/sat-reading-and-writing/x0d47bcec73eb6c4b:advanced-craft-and-structure/x0d47bcec73eb6c4b:words-in-context-3/a/words-in-context-lesson" target="_blank" rel="noopener noreferrer" className="hover:text-[#dc2323] hover:underline transition-colors font-semibold">
                    1.1. Khan Academy - Words in Context Lesson
                  </a>
                </li>
              </ul>
            </div>

            {/* Section 2 */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-[#21242c] text-lg mb-3">2. SAT - High frequency vocab wordlist</h4>
              <ul className="space-y-2 pl-4 list-disc list-inside text-gray-700">
                <li>
                  <a href="https://quizlet.com/join/Gv8UmnH4b?i=1u2w5s&x=1bqt" target="_blank" rel="noopener noreferrer" className="hover:text-[#dc2323] hover:underline transition-colors font-semibold text-blue-600">
                    2.1. 500 KEY WORDS FOR THE SAT (Quizlet Deck)
                  </a>
                </li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-[#21242c] text-lg mb-3">3. Practice Vocab</h4>
              <ul className="space-y-3 pl-4 list-disc list-inside text-gray-700">
                <li>
                  <a href="https://test-ninjas.com/sat-vocabulary-practice" target="_blank" rel="noopener noreferrer" className="hover:text-[#dc2323] hover:underline transition-colors font-semibold">
                    3.1. Test Ninjas Vocab Practice Hub
                  </a>
                </li>
                <li>
                  <a href="https://www.cracksat.net/digital/reading-writing/test9.html" target="_blank" rel="noopener noreferrer" className="hover:text-[#dc2323] hover:underline transition-colors font-semibold">
                    3.2. Digital SAT Reading and Writing Practice Test 9: Words in Context
                  </a>
                </li>
                <li>
                  <a href="https://www.cracksat.net/digital/reading-writing/test10.html" target="_blank" rel="noopener noreferrer" className="hover:text-[#dc2323] hover:underline transition-colors font-semibold">
                    3.3. Digital SAT Reading and Writing Practice Test 10: Words in Context
                  </a>
                </li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <h4 className="font-bold text-[#21242c] text-lg mb-5">4. Youtube Videos</h4>
              <ul className="space-y-8 pl-0 list-none text-gray-700">
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
              </ul>
            </div>

            {/* Section 5 */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <h4 className="font-bold text-[#21242c] text-lg mb-5">5. SAT Vocab Games</h4>
              <ul className="space-y-8 pl-0 list-none text-gray-700">
                <li className="flex flex-col gap-3">
                  <a href="https://www.tyrannosaurusprep.com/sat.html" target="_blank" rel="noopener noreferrer" className="hover:text-[#dc2323] hover:underline transition-colors font-bold text-[#21242c] inline-flex items-center gap-2">
                    <span className="bg-[#fffdf0] text-[#dc2323] px-2 py-1 rounded text-xs font-bold border border-[#ffe36d]">5.1</span> Tyrannosaurus Prep | SAT vocab practice game
                  </a>
                  {/* Game Screenshot Centered */}
                  <div className="mt-1 flex justify-center w-full">
                    <a href="https://www.tyrannosaurusprep.com/sat.html" target="_blank" rel="noopener noreferrer" className="inline-block hover:opacity-90 transition-opacity">
                      <img src="https://drills.vn/wp-content/uploads/2025/07/Screenshot-2025-07-08-at-08.49.51.png" alt="Tyrannosaurus Prep" className="mx-auto w-full max-w-2xl rounded-xl border border-gray-200 shadow-sm" referrerPolicy="no-referrer" />
                    </a>
                  </div>
                </li>
                
                <li className="flex flex-col gap-3">
                  <a href="https://vocab-prodigy.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-[#dc2323] hover:underline transition-colors font-bold text-[#21242c] flex items-center flex-wrap gap-2">
                    <span className="bg-[#fffdf0] text-[#dc2323] px-2 py-1 rounded text-xs font-bold border border-[#ffe36d]">5.2</span> Vocab Prodigy (WordList &gt; SAT Words)
                  </a>
                  {/* Game Screenshot Centered */}
                  <div className="mt-1 flex justify-center w-full">
                    <a href="https://vocab-prodigy.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-block hover:opacity-90 transition-opacity">
                      <img src="https://drills.vn/wp-content/uploads/2025/12/Screenshot-2025-12-25-at-09.40.46.png" alt="Vocab Prodigy" className="mx-auto w-full max-w-2xl rounded-xl border border-gray-200 shadow-sm" referrerPolicy="no-referrer" />
                    </a>
                  </div>
                </li>
                
                <li className="flex flex-col gap-3">
                  <a href="https://vocab-joy.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-[#dc2323] hover:underline transition-colors font-bold text-[#21242c] inline-flex items-center gap-2">
                    <span className="bg-[#fffdf0] text-[#dc2323] px-2 py-1 rounded text-xs font-bold border border-[#ffe36d]">5.3</span> Vocab Joy (SAT words focus)
                  </a>
                  {/* Game Screenshot Centered */}
                  <div className="mt-1 flex justify-center w-full">
                    <a href="https://vocab-joy.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-block hover:opacity-90 transition-opacity">
                      <img src="https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/707270392_122111955014737350_2762396690227640915_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=NUk6m7IJcKAQ7kNvwEqSYIK&_nc_oc=AdrIhoF0n-b47l15_W5jIsX2PAOHBgxbGWvtIjL7rYG3f39-Egs_nHQngiiMQhKeEaE&_nc_zt=23&_nc_ht=scontent.fsgn2-9.fna&_nc_gid=4ibGjg2BGywJTHiqV85AMA&_nc_ss=7b2a8&oh=00_Af_pHJVxbW933EMmx3aphqU2Mas6q5m0bHZxuDxexfZPKg&oe=6A25892A" alt="Vocab Joy" className="mx-auto w-full max-w-2xl rounded-xl border border-gray-200 shadow-sm" referrerPolicy="no-referrer" />
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Recommended Prep Hubs Card */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 md:p-10 mb-12">
          <h3 className="text-xl md:text-2xl font-bold border-b border-gray-200 pb-5 mb-6 text-[#21242c] flex items-center gap-3">
            SAT Test Prep Websites <span className="bg-[#dc2323] text-white text-xs px-3 py-1 rounded-full shadow-sm inline-flex items-center justify-center leading-none h-fit">RECOMMENDED</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
