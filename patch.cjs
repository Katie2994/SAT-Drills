const fs = require('fs');
let code = fs.readFileSync('components/ResourcesView.tsx', 'utf-8');

code = code.replace(
  "import React from 'react';",
  "import React, { useState } from 'react';"
);

code = code.replace(
  "const ResourcesView: React.FC = () => {",
  "const ResourcesView: React.FC = () => {\n  const [activeTab, setActiveTab] = useState<'verbal' | 'math'>('verbal');"
);

const tabUI = `
      <div className="flex gap-4 mb-6 border-b border-[#d9d9d9] pb-2 export-button-hide">
        <button
          onClick={() => setActiveTab('verbal')}
          className={\`px-6 py-2 font-bold text-lg rounded-t-lg transition-colors \${
            activeTab === 'verbal'
              ? 'bg-[#324dc7] text-white border-b-4 border-[#1e1e1e]'
              : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
          }\`}
        >
          Verbal Resources
        </button>
        <button
          onClick={() => setActiveTab('math')}
          className={\`px-6 py-2 font-bold text-lg rounded-t-lg transition-colors \${
            activeTab === 'math'
              ? 'bg-[#dc2323] text-white border-b-4 border-[#1e1e1e]'
              : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
          }\`}
        >
          SAT Math Resources
        </button>
      </div>
      <div id="resources-export-container" className="w-full bg-transparent flex flex-col gap-8">
        {activeTab === 'verbal' && (
          <>
`;

code = code.replace(
  '<div id="resources-export-container" className="w-full bg-transparent flex flex-col gap-8">',
  tabUI
);


const mathUI = `
          </>
        )}
        {activeTab === 'math' && (
          <>
            <div className="bg-white border border-[#d9d9d9] shadow-cb rounded-cb-lg p-8 md:p-10 relative overflow-hidden">
              <h3 className="text-2xl md:text-3xl font-display font-bold border-b border-[#d9d9d9] pb-5 mb-8 text-[#1e1e1e] uppercase flex justify-between items-center flex-wrap gap-4 tracking-tight">
                <span>
                  SAT - Math Focus <span className="text-[#324dc7] ml-2">(Math Section)</span>
                </span>
                <span className="text-xs bg-[#f5f7fc] text-[#324dc7] border border-[#d9d9d9] px-3 py-1.5 rounded-cb-xs uppercase font-medium tracking-widest select-none inline-flex items-center justify-center leading-none h-fit">
                  RESOURCE DECK
                </span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-base">
                {/* Math Section 1 */}
                <div className="bg-white p-6 rounded-cb-md border border-[#d9d9d9] shadow-sm hover:shadow-md transition-shadow md:col-span-2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-[#f5f7fc] p-2.5 rounded-cb-sm border border-[#d9d9d9]">
                      <MonitorPlay className="w-5 h-5 text-[#324dc7]" />
                    </div>
                    <h4 className="font-bold text-[#1e1e1e] text-lg uppercase tracking-wide">1. Cách Dùng Desmos Trong Bluebook</h4>
                  </div>
                  <p className="text-gray-600 font-medium mb-5 text-sm leading-relaxed">
                    Máy tính đồ thị Desmos được tích hợp sẵn trong ứng dụng Bluebook là một vũ khí cực kỳ lợi hại. Dưới đây là các kỹ thuật bấm máy giải nhanh (hacks) giúp tiết kiệm thời gian đáng kể.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-5 rounded-cb-sm border border-[#d9d9d9] shadow-sm">
                      <h5 className="font-bold text-[#dc2323] text-base mb-2">A. Lập bảng (Tables) & Hồi quy (Regression)</h5>
                      <p className="text-sm text-gray-700 font-medium mb-3">
                        Dùng khi đề bài cho một bảng dữ liệu (x, y) và yêu cầu tìm phương trình hoặc dự đoán giá trị tiếp theo.
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
                        <li><strong>Bước 1:</strong> Bấm phím <code>+</code> (Add Item) &rarr; Chọn <strong>Table</strong>. Nhập các giá trị vào 2 cột <code>x₁</code> và <code>y₁</code>.</li>
                        <li><strong>Bước 2:</strong> Ở một ô lệnh mới (expression line), gõ công thức hồi quy tùy theo yêu cầu đề:</li>
                        <ul className="list-circle list-inside ml-6 mt-2 space-y-2">
                          <li><strong>Linear (Đường thẳng):</strong> Gõ <code>y₁ ~ mx₁ + b</code> (Desmos sẽ trả về giá trị m và b).</li>
                          <li><strong>Exponential (Mũ):</strong> Gõ <code>y₁ ~ a * b^{x₁}</code>.</li>
                          <li><strong>Quadratic (Bậc 2):</strong> Gõ <code>y₁ ~ ax₁² + bx₁ + c</code>.</li>
                        </ul>
                        <li><em className="text-gray-500">* Bắt buộc phải dùng <code>y₁</code>, <code>x₁</code> (có số 1 ở chân) và dấu ngã <code>~</code> thay cho dấu bằng <code>=</code>.</em></li>
                      </ul>
                      <a href="https://www.youtube.com/watch?v=qJbJgT-n_gI" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 mt-4 text-sm font-bold text-[#324dc7] hover:text-[#dc2323] transition-colors">
                        Xem video hướng dẫn Linear Regression <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                    
                    <div className="bg-white p-5 rounded-cb-sm border border-[#d9d9d9] shadow-sm">
                      <h5 className="font-bold text-[#324dc7] text-base mb-2">B. Tính Standard Deviation & Mean (Thống kê)</h5>
                      <p className="text-sm text-gray-700 font-medium mb-3">
                        Dùng khi đề yêu cầu so sánh độ lệch chuẩn hoặc tính giá trị trung bình của một tập dữ liệu dài (mặc dù ít khi bắt tính chính xác, nhưng nếu cần xác nhận):
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
                        <li><strong>Tạo danh sách:</strong> Gõ <code>A = [1, 2, 3, 3, 4, 5]</code>.</li>
                        <li><strong>Tính Mean:</strong> Gõ <code>mean(A)</code>.</li>
                        <li><strong>Tính Median:</strong> Gõ <code>median(A)</code>.</li>
                        <li><strong>Tính Độ lệch chuẩn (Population SD):</strong> Gõ <code>stdevp(A)</code> (Đây là hàm SD thường dùng trong SAT, lưu ý có chữ <strong>p</strong>).</li>
                        <li><strong>Tính Độ lệch chuẩn (Sample SD):</strong> Gõ <code>stdev(A)</code>.</li>
                      </ul>
                    </div>

                    <div className="bg-white p-5 rounded-cb-sm border border-[#d9d9d9] shadow-sm">
                      <h5 className="font-bold text-[#1e1e1e] text-base mb-2">C. Giải Hệ Phương Trình Bậc Nhất & Bất Phương Trình</h5>
                      <p className="text-sm text-gray-700 font-medium mb-3">
                        Cách trực quan nhất là biểu diễn bằng đồ thị.
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
                        <li><strong>Hệ 2 phương trình:</strong> Nhập y = 2x + 1 và 3x - y = 4 vào 2 dòng riêng biệt. Click vào điểm giao cắt trên đồ thị, Desmos sẽ hiện tọa độ (x, y) chính là nghiệm.</li>
                        <li><strong>Bất phương trình:</strong> Gõ trực tiếp <code>y &lt; 2x + 3</code>. Desmos sẽ tô màu vùng nghiệm. Nếu là hệ bất phương trình, vùng nghiệm chung là phần giao nhau của các vùng màu.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Math Section 2 */}
                <div className="bg-white p-6 rounded-cb-md border border-[#d9d9d9] shadow-sm hover:shadow-md transition-shadow md:col-span-2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-[#f5f7fc] p-2.5 rounded-cb-sm border border-[#d9d9d9]">
                      <BookOpen className="w-5 h-5 text-[#324dc7]" />
                    </div>
                    <h4 className="font-bold text-[#1e1e1e] text-lg uppercase tracking-wide">2. Nguồn Học Thêm (Outside Knowledge) - Xu Hướng 2023-2026</h4>
                  </div>
                  <p className="text-gray-600 font-medium mb-5 text-sm leading-relaxed">
                    Digital SAT đang có xu hướng ra một số bài Hard Module kết hợp lý thuyết số (Number theory), đường tròn nâng cao, và kỹ năng tư duy (Logic). Dưới đây là các nguồn bổ sung.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-5 rounded-cb-sm border border-[#d9d9d9] shadow-sm">
                      <h5 className="font-bold text-[#1e1e1e] text-base mb-2">Advanced Geometry (Đường Tròn & Đa Giác)</h5>
                      <p className="text-sm text-gray-700 mb-3">Gồm các bài về tiếp tuyến đường tròn, định lý phần dư đa thức, và hệ số tối đa (câu 800).</p>
                      <ul className="space-y-3">
                        <li>
                          <a href="https://www.khanacademy.org/test-prep/sat-math/x0fcb3d95ce32debc:advanced-math" target="_blank" rel="noopener noreferrer" className="group flex items-start gap-2 hover:text-[#dc2323] transition-colors font-medium text-[#1e1e1e] text-sm">
                            <Link2 className="w-4 h-4 text-gray-400 group-hover:text-[#dc2323] mt-0.5 shrink-0" />
                            <span className="leading-tight border-b border-transparent group-hover:border-[#dc2323]">Khan Academy - Advanced Math Series</span>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.desmos.com/calculator" target="_blank" rel="noopener noreferrer" className="group flex items-start gap-2 hover:text-[#dc2323] transition-colors font-medium text-[#1e1e1e] text-sm">
                            <Link2 className="w-4 h-4 text-gray-400 group-hover:text-[#dc2323] mt-0.5 shrink-0" />
                            <span className="leading-tight border-b border-transparent group-hover:border-[#dc2323]">Luyện thao tác trực tiếp trên Desmos Web</span>
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-white p-5 rounded-cb-sm border border-[#d9d9d9] shadow-sm">
                      <h5 className="font-bold text-[#1e1e1e] text-base mb-2">Data Analysis & Probability</h5>
                      <p className="text-sm text-gray-700 mb-3">Tập trung vào Margin of Error, Confidence Intervals, và Standard Deviation spread.</p>
                      <ul className="space-y-3">
                        <li>
                          <a href="https://youtube.com/playlist?list=PLf3ypCGW3S0w06z5_wB_B7_P1vOEKR9xT" target="_blank" rel="noopener noreferrer" className="group flex items-start gap-2 hover:text-[#dc2323] transition-colors font-medium text-[#1e1e1e] text-sm">
                            <MonitorPlay className="w-4 h-4 text-gray-400 group-hover:text-[#dc2323] mt-0.5 shrink-0" />
                            <span className="leading-tight border-b border-transparent group-hover:border-[#dc2323]">YouTube - SAT Math Data Analysis Hacks</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
`;

code = code.replace(
  '        {/* Recommended Prep Hubs Card */}',
  mathUI + '\n        {/* Recommended Prep Hubs Card */}'
);

fs.writeFileSync('components/ResourcesView.tsx', code);
