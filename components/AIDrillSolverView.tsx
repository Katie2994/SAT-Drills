import React, { useRef, useState } from 'react';
import { Upload, FileImage, Search, Settings, HelpCircle, Loader2, Download, Link as LinkIcon, Type, Eye, BookOpen, CheckCircle2 } from 'lucide-react';
import { toPng } from 'html-to-image';
import { saveAs } from 'file-saver';
import { VocabCard } from '../types';
import FlashcardTemplate from './FlashcardTemplate';

interface AnalyzedData {
  questionSummary: string;
  correctAnswer: string;
  explanation: string;
  keyTerms: { term: string; definition: string }[];
}

const AIDrillSolverView: React.FC = () => {
    const [inputType, setInputType] = useState<'image' | 'url' | 'text'>('image');
    const [file, setFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [imageUrl, setImageUrl] = useState('');
    const [textContent, setTextContent] = useState('');
    const [sourceCredit, setSourceCredit] = useState('');
    
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<AnalyzedData | null>(null);
    const [isRevealed, setIsRevealed] = useState(false);
    const [error, setError] = useState('');
    const [isDownloading, setIsDownloading] = useState(false);
    
    // Hidden refs for PNG generation
    const resultTemplateRef = useRef<HTMLDivElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const selectedFile = e.target.files[0];
            setFile(selectedFile);
            setPreviewUrl(URL.createObjectURL(selectedFile));
            setResult(null);
        }
    };

    const handleAnalyze = async () => {
        if (inputType === 'image' && !file) {
            setError("Vui lòng tải lên một ảnh câu hỏi!");
            return;
        }
        if (inputType === 'url' && !imageUrl) {
            setError("Vui lòng nhập đường dẫn URL ảnh!");
            return;
        }
        if (inputType === 'text' && !textContent) {
            setError("Vui lòng nhập nội dung câu hỏi!");
            return;
        }

        setLoading(true);
        setError('');
        setIsRevealed(false);

        try {
            const formData = new FormData();
            if (file && inputType === 'image') formData.append('image', file);
            if (imageUrl && inputType === 'url') formData.append('imageUrl', imageUrl);
            if (textContent && inputType === 'text') formData.append('textContent', textContent);
            if (sourceCredit) formData.append('sourceCredit', sourceCredit);
            formData.append('type', 'general');

            const res = await fetch('/api/analyze-question', {
                method: 'POST',
                body: formData,
            });

            if (!res.ok) {
                const errData = await res.json();
                throw new Error(errData.error || 'Lỗi phân tích');
            }

            const data: AnalyzedData = await res.json();
            setResult(data);
        } catch (err: any) {
            setError(err.message || 'Có lỗi xảy ra trong quá trình kết nối.');
        } finally {
            setLoading(false);
        }
    };

    const downloadResultsAsPNG = async () => {
        if (!resultTemplateRef.current) return;
        try {
            setIsDownloading(true);
            const dataUrl = await toPng(resultTemplateRef.current, {
                cacheBust: true,
                pixelRatio: 2,
                fontEmbedCSS: '',
                styleSheetsFilter: (sheet) => {
                  try {
                    const rules = sheet.cssRules;
                    return true;
                  } catch (e) {
                    return false;
                  }
                },
            });
            saveAs(dataUrl, `SAT_Solve_${Date.now()}.png`);
        } catch (err) {
            console.error(err);
        } finally {
            setIsDownloading(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto py-8 font-sans">
            <div className="bg-white border border-gray-200 shadow-sm rounded-2xl p-6 md:p-10 mb-12">
                
                {/* Input Switcher */}
                <div className="flex bg-gray-100 p-1 rounded-xl mb-8 w-fit mx-auto shadow-inner border border-gray-200">
                   <button onClick={() => setInputType('image')} className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold transition-all ${inputType === 'image' ? 'bg-white shadow text-[#dc2323]' : 'text-gray-600 hover:text-gray-900'}`}>
                      <FileImage className="w-4 h-4" /> Upload Ảnh
                   </button>
                   <button onClick={() => setInputType('url')} className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold transition-all ${inputType === 'url' ? 'bg-white shadow text-[#dc2323]' : 'text-gray-600 hover:text-gray-900'}`}>
                      <LinkIcon className="w-4 h-4" /> Link Ảnh
                   </button>
                   <button onClick={() => setInputType('text')} className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold transition-all ${inputType === 'text' ? 'bg-white shadow text-[#dc2323]' : 'text-gray-600 hover:text-gray-900'}`}>
                      <Type className="w-4 h-4" /> Văn bản
                   </button>
                </div>

                <div className="flex flex-col items-center justify-center w-full mb-6">
                    {inputType === 'image' && (
                        !previewUrl ? (
                            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer bg-gray-50 hover:bg-gray-100 hover:border-[#dc2323] transition-colors">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <div className="bg-white p-4 rounded-full shadow-sm mb-4">
                                        <Upload className="w-8 h-8 text-[#dc2323]" />
                                    </div>
                                    <p className="mb-2 text-sm text-gray-700"><span className="font-semibold text-[#dc2323]">Nhấn để tải lên</span> hoặc kéo thả ảnh vào đây</p>
                                    <p className="text-xs text-gray-500">PNG, JPG or JPEG (Khuyên dùng)</p>
                                </div>
                                <input id="dropzone-file" type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
                            </label>
                        ) : (
                            <div className="relative w-full max-w-2xl bg-gray-50 p-4 rounded-xl border border-gray-200">
                                <img src={previewUrl} alt="Preview" className="max-h-96 w-full object-contain rounded-lg" />
                                <button 
                                    onClick={() => { setFile(null); setPreviewUrl(null); setResult(null); }}
                                    className="absolute -top-3 -right-3 bg-white text-gray-600 border border-gray-200 p-2 rounded-full hover:text-red-500 hover:border-red-200 shadow-sm transition-colors"
                                >
                                    X
                                </button>
                            </div>
                        )
                    )}

                    {inputType === 'url' && (
                        <div className="w-full max-w-2xl">
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Đường dẫn ảnh (URL)</label>
                            <input 
                                type="url" 
                                value={imageUrl}
                                onChange={e => setImageUrl(e.target.value)}
                                placeholder="https://example.com/image.png"
                                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#dc2323] focus:border-[#dc2323] outline-none transition-shadow"
                            />
                        </div>
                    )}

                    {inputType === 'text' && (
                        <div className="w-full max-w-2xl">
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Nội dung câu hỏi</label>
                            <textarea 
                                value={textContent}
                                onChange={e => setTextContent(e.target.value)}
                                placeholder="Nhập câu hỏi bạn cần giải đáp ở đây..."
                                rows={6}
                                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#dc2323] focus:border-[#dc2323] outline-none transition-shadow resize-y"
                            ></textarea>
                        </div>
                    )}
                </div>

                <div className="w-full max-w-2xl mx-auto mb-8">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Nguồn câu hỏi (Credit / Source) - Tuỳ chọn</label>
                    <input 
                        type="text" 
                        value={sourceCredit}
                        onChange={e => setSourceCredit(e.target.value)}
                        placeholder="VD: Khan Academy, College Board Test 1, v.v..."
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#dc2323] focus:border-[#dc2323] outline-none transition-shadow"
                    />
                </div>

                <div className="flex justify-center border-t border-gray-100 pt-8">
                   <button 
                       onClick={handleAnalyze}
                       disabled={loading || (inputType === 'image' && !file) || (inputType === 'url' && !imageUrl) || (inputType === 'text' && !textContent)}
                       className="bg-[#dc2323] text-white font-semibold text-base px-10 py-3.5 rounded-full shadow-md hover:bg-[#b91c1c] hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3"
                   >
                       {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Search className="w-5 h-5" />}
                       {loading ? 'Đang giải bài...' : 'Phân tích & Giải chi tiết'}
                   </button>
                </div>
                {error && <div className="bg-red-50 text-red-600 p-4 rounded-xl mt-6 text-center text-sm font-medium border border-red-100">{error}</div>}
            </div>

            {/* Results Display */}
            {result && (
                <div className="space-y-6 animate-fade-in relative max-w-3xl mx-auto">
                    <div className="flex justify-between items-center px-2">
                       <h3 className="text-xl font-bold text-[#21242c]">Phân tích từ AI</h3>
                       <button 
                           onClick={downloadResultsAsPNG}
                           disabled={isDownloading}
                           className="text-[#dc2323] font-semibold text-sm flex items-center gap-2 hover:bg-[#fffaf0] px-4 py-2 rounded-full transition-colors"
                       >
                         <Download className="w-4 h-4" /> Lưu Ảnh
                       </button>
                    </div>

                    <div className="bg-white border border-gray-200 shadow-sm p-8 rounded-2xl">
                        {sourceCredit && (
                            <div className="inline-flex items-center gap-2 text-xs font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full mb-6">
                                Nguồn: {sourceCredit}
                            </div>
                        )}
                        <div className="mb-6">
                            <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Tóm tắt câu hỏi (Question Summary)</h4>
                            <p className="text-lg text-[#21242c] font-medium leading-relaxed">{result.questionSummary}</p>
                        </div>

                        {!isRevealed ? (
                            <div className="border-t border-gray-100 pt-8 text-center w-full max-w-md mx-auto">
                               <div className="mb-6 p-6 border border-dashed border-gray-300 rounded-2xl bg-gray-50/50 text-gray-400">
                                 <BookOpen className="w-10 h-10 mx-auto mb-3 text-gray-300 animate-bounce" />
                                 <p className="text-sm font-medium tracking-wide text-gray-500">AI đã giải xong câu này. Hãy suy nghĩ đáp án của bạn trước khi mở lời giải chính thức!</p>
                               </div>
                               
                               <button
                                  onClick={() => setIsRevealed(true)}
                                  className="w-full flex items-center justify-center px-6 py-3.5 rounded-full font-bold text-base transition-all bg-[#dc2323] text-white hover:bg-[#b91c1c] shadow-md hover:shadow-lg cursor-pointer"
                                >
                                  <Eye className="w-5 h-5 mr-3" /> Tiết lộ đáp án & Lời giải (Reveal Solution)
                                </button>
                            </div>
                        ) : (
                            <div className="animate-fade-in space-y-6 border-t border-gray-100 pt-6">
                                {/* Correct Answer card in light green style like drills */}
                                <div className="bg-[#f2fbf5] p-6 rounded-xl border border-[#22a04c]/30 relative text-left">
                                    <div className="inline-flex items-center gap-2 bg-[#22a04c] text-white px-3 py-1 rounded-full text-xs font-bold uppercase mb-4 shadow-sm">
                                       <CheckCircle2 className="w-3.5 h-3.5" />
                                       <span>Đáp án đúng (Correct Answer)</span>
                                    </div>
                                    <div className="text-xl md:text-2xl font-black text-[#1d823f]">
                                        {result.correctAnswer}
                                    </div>
                                </div>

                                {/* Detailed Explanation / Key terms side by side in 2 columns */}
                                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 text-left">
                                    {/* Explanation column */}
                                    <div className="md:col-span-7 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                                        <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                                            <span className="w-2.5 h-2.5 bg-[#dc2323] rounded-full animate-ping"></span> Lời giải chi tiết (Detailed Explanation)
                                        </h4>
                                        <div className="text-sm text-gray-700 leading-relaxed font-medium whitespace-pre-line">
                                            {result.explanation}
                                        </div>
                                    </div>
                                    
                                    {/* Key concepts column */}
                                    <div className="md:col-span-5 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                                        <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                                            <span className="w-2.5 h-2.5 bg-yellow-500 rounded-full"></span> Khái niệm & Từ vựng (Key concepts)
                                        </h4>
                                        {result.keyTerms && result.keyTerms.length > 0 ? (
                                            <div className="flex flex-col gap-3.5">
                                                {result.keyTerms.map((item, idx) => (
                                                    <div key={idx} className="flex flex-col gap-1 pb-3 border-b border-gray-100 last:border-0 last:pb-0">
                                                        <span className="font-bold text-[#dc2323]">{item.term}</span>
                                                        <span className="text-gray-600 text-xs leading-relaxed">{item.definition}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        ) : (
                                            <p className="text-sm text-gray-400">Không có từ vựng bổ sung.</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Hidden Template to Render PNG representing the result (Keeping the original styling for the output image as it was requested and explicitly designed) */}
                    <div className="absolute top-[-9999px] left-[-9999px]">
                         <ResultTemplate ref={resultTemplateRef} result={result} image={previewUrl || imageUrl} />
                    </div>
                </div>
            )}
        </div>
    );
};

// Internal component for generating the result image to download
const ResultTemplate = React.forwardRef<HTMLDivElement, { result: AnalyzedData, image: string | null }>(({ result, image }, ref) => {
    return (
        <div ref={ref} className="w-[1080px] bg-[#ffe36d] font-sans p-12 flex flex-col" style={{ backgroundImage: "radial-gradient(#000000 3px, transparent 3px)", backgroundSize: "40px 40px" }}>
            <div className="bg-[#1a202c] rounded-[40px] border-[6px] border-black p-12 flex-1 flex flex-col shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
                <div className="absolute top-8 left-8 right-8 bottom-8 border-4 border-dashed border-gray-600 rounded-[30px] pointer-events-none" />
                
                <h2 className="text-[#ffe36d] text-3xl font-black mb-6 uppercase tracking-widest z-10">AI SOLVER • CORRECT: {result.correctAnswer}</h2>
                
                <div className="flex gap-8 z-10 flex-1">
                     <div className="w-1/3 flex flex-col gap-6">
                        {image && (
                            <img src={image} className="w-full rounded-2xl border-4 border-black object-contain bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,0.5)]" alt="Question" />
                        )}
                         {result.keyTerms && result.keyTerms.length > 0 && (
                            <div className="bg-[#2d3748] border-4 border-black rounded-2xl p-6 text-white shadow-[8px_8px_0px_0px_rgba(0,0,0,0.5)]">
                                <h4 className="text-[#ffe36d] font-bold mb-4 uppercase">Key Concepts</h4>
                                <div className="space-y-4">
                                    {result.keyTerms.slice(0, 3).map(term => (
                                        <div key={term.term}>
                                            <span className="font-bold text-[#dc2323] block">{term.term}</span>
                                            <span className="text-sm opacity-90">{term.definition}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                         )}
                     </div>
                     <div className="w-2/3 relative flex flex-col">
                        <div className="bg-white rounded-2xl border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.5)] flex-1">
                            <h3 className="text-2xl font-black border-b-4 border-black pb-4 mb-6">EXPLANTION</h3>
                            <p className="text-gray-800 text-2xl leading-relaxed font-serif whitespace-pre-line">
                                {result.explanation.substring(0, 1000)}{result.explanation.length > 1000 ? '...' : ''}
                            </p>
                        </div>
                     </div>
                </div>

                <div className="mt-8 flex justify-between items-center z-10">
                    <div className="bg-white px-8 py-3 rounded-full border-4 border-black font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-xl">
                        AI EXPLANATION
                    </div>
                </div>
            </div>
        </div>
    );
});

ResultTemplate.displayName = 'ResultTemplate';

export default AIDrillSolverView;
