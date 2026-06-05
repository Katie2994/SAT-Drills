import React, { useRef, useState, useEffect } from 'react';
import { Upload, FileImage, Search, Settings, HelpCircle, Loader2, Download, Link as LinkIcon, Type, Eye, BookOpen, CheckCircle2, ChevronDown, Facebook, X, Image as ImageIcon, Archive } from 'lucide-react';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';
import JSZip from 'jszip';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import FlashcardTemplate from './FlashcardTemplate';

interface AnalyzedData {
  question: string;
  options?: string[];
  correctAnswer: string;
  explanation: string;
  keyTerms: { term: string; definition: string }[];
  tips?: string;
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
    
    const [showVercelPopup, setShowVercelPopup] = useState(false);
    
    // Image Export States
    const [showExportOptions, setShowExportOptions] = useState(false);
    const [exportPlatform, setExportPlatform] = useState<'1080x1080' | '1080x1350'>('1080x1080'); // Instagram square vs tall
    const [exportFontSize, setExportFontSize] = useState<'sm' | 'md' | 'lg'>('md');
    
    const card1Ref = useRef<HTMLDivElement>(null);
    const card2Ref = useRef<HTMLDivElement>(null);
    const card3Ref = useRef<HTMLDivElement>(null);
    const card4Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
       if (typeof window !== 'undefined' && window.location.hostname.includes('vercel.app')) {
           setShowVercelPopup(true);
       }
    }, []);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const selectedFile = e.target.files[0];
            setFile(selectedFile);
            setPreviewUrl(URL.createObjectURL(selectedFile));
            setResult(null);
            setIsRevealed(false);
            setShowExportOptions(false);
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
        setShowExportOptions(false);

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

    const getCanvasFromRef = async (ref: React.RefObject<HTMLDivElement>) => {
         if (!ref.current) return null;
         return await html2canvas(ref.current, {
             useCORS: true,
             scale: 2,
             backgroundColor: '#f8f9fa'
         });
    };

    const downloadSingleImage = async (ref: React.RefObject<HTMLDivElement>, name: string) => {
        try {
            setLoading(true);
            const canvas = await getCanvasFromRef(ref);
            if (canvas) {
                canvas.toBlob((blob) => {
                    if (blob) saveAs(blob, `SAT_Drill_${name}_${Date.now()}.png`);
                });
            }
        } catch (e) {
            console.error(e);
            setError("Lỗi khi tải ảnh.");
        } finally {
            setLoading(false);
        }
    };

    const downloadZip = async () => {
        try {
            setLoading(true);
            const zip = new JSZip();
            const refs = [
                { ref: card1Ref, name: "1_Question" },
                { ref: card2Ref, name: "2_Explanation" },
                { ref: card3Ref, name: "3_KeyConcepts" },
                { ref: card4Ref, name: "4_Tips" }
            ];
            
            for (const item of refs) {
                if (item.ref.current) {
                    const canvas = await getCanvasFromRef(item.ref);
                    if (canvas) {
                        const blob = await new Promise<Blob | null>(res => canvas.toBlob(res));
                        if (blob) zip.file(`${item.name}.png`, blob);
                    }
                }
            }
            
            const zipBlob = await zip.generateAsync({ type: "blob" });
            saveAs(zipBlob, `SAT_Solve_${Date.now()}.zip`);
        } catch(e) {
            console.error(e);
            setError("Lỗi khi nén ảnh.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto py-8 font-sans">
            {showVercelPopup && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
                    <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative border-4 border-black">
                        <button onClick={() => setShowVercelPopup(false)} className="absolute top-4 right-4 text-gray-400 hover:text-black">
                            <X className="w-6 h-6" />
                        </button>
                        <div className="text-center">
                            <h2 className="text-2xl font-black text-black mb-4">Gói Nâng Cấp Tự Học Cùng AI</h2>
                            <p className="text-gray-600 mb-6 leading-relaxed font-medium">
                                Tham gia cộng đồng hoặc nâng cấp gói để mở khóa AI Solver với tốc độ và khả năng suy luận vượt trội cho các dạng bài Digital SAT.
                            </p>
                            <img 
                                src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/511006794_24133287536328545_1676392969100136650_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=ChLQCnsX7P8Q7kNvwGAlQAo&_nc_oc=AdoWtMKdG7w706j3e2qSTBiTYjbt-oPY3H3LSuaXhXIHJKQaDlNsGVAE5ruUfMmZBes&_nc_zt=23&_nc_ht=scontent.fsgn2-5.fna&_nc_gid=By8eQwlLIg1URNKawKhv5w&_nc_ss=7b2a8&oh=00_Af-4_WGHRVxiHqj_8eOBbOOXYbsxW7p8E6l01sJ6Wyds2g&oe=6A283D19" 
                                alt="Upgrade AI Solver" 
                                className="w-full h-auto rounded-2xl border-2 border-black mix-blend-multiply" 
                            />
                        </div>
                    </div>
                </div>
            )}

            <div className="bg-white border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-3xl p-6 md:p-10 mb-12 relative">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#ffe36d] border-l-2 border-b-2 border-black rounded-bl-3xl flex items-center justify-center -mr-0.5 -mt-0.5 pointer-events-none">
                    <img src="https://pbs.twimg.com/media/G9_w8N1aUAENd0l?format=jpg&name=large" alt="Logo" className="w-12 h-12 rounded-full border-2 border-black" referrerPolicy="no-referrer" />
                </div>
                
                <h2 className="text-3xl font-black uppercase mb-8 pr-20 text-black tracking-tight">AI Drill Solver</h2>

                {/* Input Switcher */}
                <div className="flex bg-gray-100 p-1 rounded-xl mb-8 w-fit shadow-inner border border-gray-200">
                   <button onClick={() => setInputType('image')} className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold transition-all ${inputType === 'image' ? 'bg-white shadow border border-gray-200 text-[#dc2323]' : 'text-gray-600 hover:text-gray-900'}`}>
                      <FileImage className="w-4 h-4" /> Upload Ảnh
                   </button>
                   <button onClick={() => setInputType('text')} className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold transition-all ${inputType === 'text' ? 'bg-white shadow border border-gray-200 text-[#dc2323]' : 'text-gray-600 hover:text-gray-900'}`}>
                      <Type className="w-4 h-4" /> Văn bản
                   </button>
                   <button onClick={() => setInputType('url')} className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold transition-all ${inputType === 'url' ? 'bg-white shadow border border-gray-200 text-[#dc2323]' : 'text-gray-600 hover:text-gray-900'}`}>
                      <LinkIcon className="w-4 h-4" /> URL
                   </button>
                </div>

                <div className="flex flex-col items-center justify-center w-full mb-6">
                    {inputType === 'image' && (
                        !previewUrl ? (
                            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-gray-300 rounded-2xl cursor-pointer bg-gray-50 hover:bg-gray-100 hover:border-black transition-colors">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <div className="bg-white p-4 rounded-2xl shadow-sm mb-4 border border-gray-200">
                                        <Upload className="w-8 h-8 text-black" />
                                    </div>
                                    <p className="mb-2 text-sm text-gray-700 font-medium"><span className="font-bold text-black border-b-2 border-[#dc2323]">Nhấn để tải lên</span> hoặc kéo thả ảnh</p>
                                </div>
                                <input id="dropzone-file" type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
                            </label>
                        ) : (
                            <div className="relative w-full max-w-2xl bg-gray-50 p-4 rounded-2xl border-2 border-black shadow-[4px_4px_0px_0px_#000000]">
                                <img src={previewUrl} alt="Preview" className="max-h-96 w-full object-contain rounded-xl" />
                                <button 
                                    onClick={() => { setFile(null); setPreviewUrl(null); setResult(null); setIsRevealed(false); }}
                                    className="absolute -top-4 -right-4 bg-white text-black border-2 border-black p-2 rounded-full hover:bg-gray-100 shadow-[2px_2px_0px_0px_#000000] transition-colors"
                                >
                                    <X className="w-4 h-4 font-bold" />
                                </button>
                            </div>
                        )
                    )}

                    {inputType === 'url' && (
                        <div className="w-full max-w-2xl">
                            <label className="block text-sm font-bold text-black mb-2">Đường dẫn ảnh (URL)</label>
                            <input 
                                type="url" 
                                value={imageUrl}
                                onChange={e => setImageUrl(e.target.value)}
                                placeholder="https://example.com/image.png"
                                className="w-full px-4 py-3 rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] outline-none transition-shadow"
                            />
                        </div>
                    )}

                    {inputType === 'text' && (
                        <div className="w-full max-w-2xl">
                            <label className="block text-sm font-bold text-black mb-2">Nội dung câu hỏi</label>
                            <textarea 
                                value={textContent}
                                onChange={e => setTextContent(e.target.value)}
                                placeholder="Nhập câu hỏi bạn cần giải đáp ở đây..."
                                rows={6}
                                className="w-full px-4 py-3 rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] outline-none transition-shadow resize-y"
                            ></textarea>
                        </div>
                    )}
                </div>

                <div className="w-full max-w-2xl mx-auto mb-8">
                    <label className="block text-sm font-bold text-black mb-2">Nguồn / Credit (Tuỳ chọn)</label>
                    <input 
                        type="text" 
                        value={sourceCredit}
                        onChange={e => setSourceCredit(e.target.value)}
                        placeholder="VD: Khan Academy, College Board, etc."
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-black outline-none transition-colors bg-gray-50"
                    />
                </div>

                <div className="flex justify-center border-t border-gray-100 pt-8">
                   <button 
                       onClick={handleAnalyze}
                       disabled={loading || (inputType === 'image' && !file) || (inputType === 'url' && !imageUrl) || (inputType === 'text' && !textContent)}
                       className="bg-[#dc2323] text-white font-black text-lg px-10 py-4 rounded-full shadow-[6px_6px_0px_0px_#000000] hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_#000000] border-2 border-black transition-all disabled:opacity-50 flex items-center gap-3 uppercase tracking-wider disabled:hover:translate-y-0 disabled:hover:shadow-[6px_6px_0px_0px_#000000]"
                   >
                       {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : <Search className="w-6 h-6" />}
                       {loading ? 'ĐANG GIẢI...' : 'GIẢI BÀI NGAY'}
                   </button>
                </div>
                {error && <div className="bg-red-50 text-red-600 p-4 rounded-xl mt-6 text-center font-bold border-2 border-red-200">{error}</div>}
            </div>

            {/* Results Display */}
            {result && (
                <div className="space-y-6 animate-fade-in relative max-w-3xl mx-auto">
                    <div className="flex justify-between items-center px-2">
                       <h3 className="text-2xl font-black text-black">AI RESOLUTION</h3>
                       <button 
                           onClick={() => setShowExportOptions(!showExportOptions)}
                           className="bg-[#ffe36d] text-black border-2 border-black font-bold uppercase tracking-wider text-sm flex items-center gap-2 hover:bg-[#ffeb8a] px-5 py-2.5 rounded-full shadow-[3px_3px_0px_0px_#000000] transition-colors"
                       >
                         <ImageIcon className="w-4 h-4" /> LƯU ẢNH
                       </button>
                    </div>

                    <div className="bg-white border-2 border-black shadow-[8px_8px_0px_0px_#000000] p-6 md:p-10 rounded-3xl">
                        {sourceCredit && (
                            <div className="inline-flex items-center gap-2 text-xs font-bold text-white bg-gray-800 px-4 py-1.5 rounded-full mb-6 border border-black uppercase">
                                SOURCE: {sourceCredit}
                            </div>
                        )}
                        <div className="mb-8 border-b-2 border-gray-100 pb-8">
                            <h4 className="text-sm font-black text-[#dc2323] uppercase tracking-widest mb-4">Tóm tắt Câu hỏi</h4>
                            <div className="text-lg text-black font-semibold leading-relaxed markdown-body">
                                <ReactMarkdown remarkPlugins={[remarkGfm]}>{result.question}</ReactMarkdown>
                            </div>
                            
                            {result.options && result.options.length > 0 && (
                                <div className="mt-5 space-y-3">
                                    {result.options.map((opt, i) => (
                                        <div key={i} className="flex gap-3 items-start bg-gray-50 p-4 rounded-xl border border-gray-200">
                                            <div className="font-bold text-gray-500 mt-0.5">{opt.substring(0, 2)}</div>
                                            <div className="font-medium text-black">
                                                <ReactMarkdown remarkPlugins={[remarkGfm]}>{opt.substring(2).trim()}</ReactMarkdown>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {!isRevealed ? (
                            <div className="text-center w-full max-w-md mx-auto pt-4 pb-4">
                               <div className="mb-8 p-8 border-4 border-dashed border-gray-200 rounded-3xl bg-gray-50 text-gray-400">
                                 <BookOpen className="w-12 h-12 mx-auto mb-4 text-[#ffe36d] drop-shadow-sm animate-bounce" />
                                 <p className="text-base font-bold text-black">AI đã phân tích xong. Thử tự tư duy trước khi xem đáp án!</p>
                               </div>
                               
                               <button
                                  onClick={() => setIsRevealed(true)}
                                  className="w-full flex items-center justify-center px-8 py-4 rounded-full font-black text-lg transition-all bg-black text-white hover:bg-gray-800 shadow-[6px_6px_0px_0px_#dc2323] hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_#dc2323] border-2 border-black"
                                >
                                  <Eye className="w-5 h-5 mr-3" /> MỞ KHÓA LỜI GIẢI
                                </button>
                            </div>
                        ) : (
                            <div className="animate-fade-in space-y-8 pt-4">
                                <div className="bg-[#f0fdf4] p-8 rounded-3xl border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] relative text-left">
                                    <div className="inline-flex items-center gap-2 bg-[#22c55e] text-white border-2 border-black px-4 py-2 rounded-full text-sm font-black uppercase mb-4 shadow-[2px_2px_0px_0px_#000000]">
                                       <CheckCircle2 className="w-4 h-4" />
                                       <span>ĐÁP ÁN ĐÚNG</span>
                                    </div>
                                    <div className="text-3xl font-black text-black">
                                        {result.correctAnswer}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-left">
                                    <div className="md:col-span-7 bg-white p-6 rounded-2xl border-2 border-black shadow-[4px_4px_0px_0px_#000000]">
                                        <h4 className="text-sm font-black text-[#dc2323] uppercase tracking-widest mb-6 flex items-center gap-2">
                                            GIẢI THÍCH CHI TIẾT
                                        </h4>
                                        <div className="prose prose-sm md:prose-base prose-slate max-w-none text-black font-medium leading-relaxed markdown-style-custom">
                                            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                                {result.explanation}
                                            </ReactMarkdown>
                                        </div>
                                    </div>
                                    
                                    <div className="md:col-span-5 flex flex-col gap-8">
                                        {result.keyTerms && result.keyTerms.length > 0 && (
                                            <div className="bg-slate-900 p-6 rounded-2xl border-2 border-black shadow-[4px_4px_0px_0px_#000000] text-white">
                                                <h4 className="text-sm font-black text-[#ffe36d] uppercase tracking-widest mb-5 flex items-center gap-2">
                                                    KEY CONCEPTS
                                                </h4>
                                                <div className="flex flex-col gap-4">
                                                    {result.keyTerms.map((item, idx) => (
                                                        <div key={idx} className="flex flex-col gap-1.5 pb-4 border-b border-slate-700 last:border-0 last:pb-0">
                                                            <span className="font-bold text-[#ffe36d]">{item.term}</span>
                                                            <span className="text-gray-300 text-sm leading-relaxed">{item.definition}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                        
                                        {result.tips && (
                                            <div className="bg-[#fff9e6] p-6 rounded-2xl border-2 border-black shadow-[4px_4px_0px_0px_#000000]">
                                                 <h4 className="text-sm font-black text-orange-600 uppercase tracking-widest mb-4 flex items-center gap-2">
                                                    TIPS & LƯU Ý
                                                </h4>
                                                <div className="prose prose-sm text-gray-800 font-medium markdown-style-custom">
                                                    <ReactMarkdown remarkPlugins={[remarkGfm]}>{result.tips}</ReactMarkdown>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
            
            {showExportOptions && result && (
                <div className="fixed inset-0 z-[100] bg-black/80 flex flex-col overflow-y-auto font-sans p-6">
                    <div className="w-full max-w-6xl mx-auto flex justify-between items-center bg-white border-2 border-black shadow-[6px_6px_0px_0px_#000000] p-4 rounded-2xl mb-8">
                        <div className="flex items-center gap-6">
                           <h3 className="text-xl font-black uppercase">TÙY CHỈNH LƯU ẢNH</h3>
                           <div className="flex items-center gap-2 border-l-2 border-black pl-6">
                               <span className="text-sm font-bold text-gray-500 uppercase">Cỡ Ảnh:</span>
                               <select 
                                  value={exportPlatform} 
                                  onChange={e => setExportPlatform(e.target.value as any)}
                                  className="bg-gray-100 border-2 border-black rounded-lg px-3 py-1 font-bold outline-none"
                               >
                                  <option value="1080x1080">1080 x 1080 (Vuông - FB/Insta post)</option>
                                  <option value="1080x1350">1080 x 1350 (Dọc - Insta portrait)</option>
                               </select>
                           </div>
                           <div className="flex items-center gap-2 border-l-2 border-black pl-6">
                               <span className="text-sm font-bold text-gray-500 uppercase">Cỡ Chữ:</span>
                               <select 
                                  value={exportFontSize} 
                                  onChange={e => setExportFontSize(e.target.value as any)}
                                  className="bg-gray-100 border-2 border-black rounded-lg px-3 py-1 font-bold outline-none"
                               >
                                  <option value="sm">Nhỏ</option>
                                  <option value="md">Vừa</option>
                                  <option value="lg">Lớn</option>
                               </select>
                           </div>
                        </div>
                        <div className="flex gap-4">
                            <button onClick={downloadZip} disabled={loading} className="bg-[#ffe36d] text-black border-2 border-black font-bold uppercase py-2 px-6 rounded-full shadow-[3px_3px_0px_0px_#000000] hover:translate-y-1 hover:shadow-none transition-all flex items-center gap-2">
                                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Archive className="w-5 h-5" />} ZIP CẢ 4 ẢNH
                            </button>
                            <button onClick={() => setShowExportOptions(false)} className="bg-gray-200 text-black border-2 border-black p-2 rounded-full hover:bg-gray-300">
                                <X className="w-6 h-6 font-bold" />
                            </button>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1920px] mx-auto w-full pb-20">
                        <ExportCard index={1} title="Câu Hỏi" disabled={loading} onDownload={() => downloadSingleImage(card1Ref, "Question")}>
                            <CardTemplate 
                               ref={card1Ref} 
                               title="DEBAI & LUA CHON" 
                               subtitle={sourceCredit || "SAT DRILLS"}
                               platform={exportPlatform}
                               fontSize={exportFontSize}
                               type="question"
                            >
                                <div className="markdown-style-custom-export question-text mb-6">
                                    <ReactMarkdown remarkPlugins={[remarkGfm]}>{result.question}</ReactMarkdown>
                                </div>
                                {result.options && result.options.length > 0 && (
                                    <div className="space-y-4">
                                        {result.options.map((opt, i) => (
                                            <div key={i} className="flex gap-4 items-start bg-white p-5 rounded-2xl border-4 border-black shadow-[4px_4px_0px_0px_#000000]">
                                                <div className="font-black text-2xl mt-1">{opt.substring(0, 2)}</div>
                                                <div className="font-medium text-xl mt-1 markdown-style-custom-export">
                                                    <ReactMarkdown remarkPlugins={[remarkGfm]}>{opt.substring(2).trim()}</ReactMarkdown>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </CardTemplate>
                        </ExportCard>

                        <ExportCard index={2} title="Đáp Án & Giải Thích" disabled={loading} onDownload={() => downloadSingleImage(card2Ref, "Explanation")}>
                            <CardTemplate 
                               ref={card2Ref} 
                               title="LOI GIAI CHI TIET" 
                               subtitle="AI EXPLANATION"
                               platform={exportPlatform}
                               fontSize={exportFontSize}
                               type="explanation"
                            >
                                <div className="inline-flex items-center gap-3 bg-[#22c55e] border-4 border-black text-white px-6 py-3 rounded-full font-black uppercase mb-6 shadow-[4px_4px_0px_0px_#000000] text-xl tracking-widest">
                                    <CheckCircle2 className="w-6 h-6" /> ĐÁP ÁN: {result.correctAnswer}
                                </div>
                                <div className="bg-white p-8 rounded-3xl border-4 border-black shadow-[6px_6px_0px_0px_#000000] markdown-style-custom-export explanation-text leading-relaxed">
                                    <ReactMarkdown remarkPlugins={[remarkGfm]}>{result.explanation}</ReactMarkdown>
                                </div>
                            </CardTemplate>
                        </ExportCard>

                        <ExportCard index={3} title="Key Concepts" disabled={loading} onDownload={() => downloadSingleImage(card3Ref, "KeyConcepts")}>
                            <CardTemplate 
                               ref={card3Ref} 
                               title="KHAI NIEM & TU VUNG" 
                               subtitle="KEY CONCEPTS"
                               platform={exportPlatform}
                               fontSize={exportFontSize}
                               type="concepts"
                            >
                                <div className="space-y-6">
                                    {result.keyTerms.map((item, i) => (
                                        <div key={i} className="bg-white p-6 rounded-2xl border-4 border-black shadow-[6px_6px_0px_0px_#000000]">
                                            <div className="font-black text-3xl mb-3 pr-[10%] break-words uppercase border-b-4 border-black pb-3">"{item.term}"</div>
                                            <div className="text-xl font-medium leading-relaxed text-gray-800">{item.definition}</div>
                                        </div>
                                    ))}
                                    {(!result.keyTerms || result.keyTerms.length === 0) && (
                                        <div className="text-center font-bold text-2xl text-gray-500 mt-20">Không có KEY CONCEPTS bổ sung.</div>
                                    )}
                                </div>
                            </CardTemplate>
                        </ExportCard>

                        <ExportCard index={4} title="Lưu ý" disabled={loading} onDownload={() => downloadSingleImage(card4Ref, "Tips")}>
                            <CardTemplate 
                               ref={card4Ref} 
                               title="GOC LUU Y & TIPS" 
                               subtitle="PRO TIPS"
                               platform={exportPlatform}
                               fontSize={exportFontSize}
                               type="tips"
                            >
                                <div className="bg-white p-8 rounded-3xl border-4 border-black shadow-[6px_6px_0px_0px_#000000] markdown-style-custom-export explanation-text leading-relaxed mt-4">
                                    {result.tips ? (
                                        <ReactMarkdown remarkPlugins={[remarkGfm]}>{result.tips}</ReactMarkdown>
                                    ) : (
                                        <p className="font-bold text-center text-gray-500 text-xl py-10">AI không ghi nhận tips đặc biệt nào cho bài này.</p>
                                    )}
                                </div>
                            </CardTemplate>
                        </ExportCard>
                    </div>
                </div>
            )}
        </div>
    );
};

const ExportCard = ({ index, title, children, disabled, onDownload }: { index: number, title: string, children: React.ReactNode, disabled: boolean, onDownload: () => void }) => (
    <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center bg-gray-900 border-2 border-gray-700 p-4 rounded-xl">
            <span className="text-white font-bold whitespace-nowrap overflow-hidden text-ellipsis mr-2">#{index}: {title}</span>
            <button onClick={onDownload} disabled={disabled} className="text-black bg-white border border-gray-400 font-bold p-2 rounded-lg hover:bg-gray-100 flexshrink-0">
                Lưu
            </button>
        </div>
        <div className="relative w-full aspect-[4/5] bg-gray-800 rounded-xl overflow-hidden border-2 border-gray-600 custom-scrollbar flex justify-center origin-top transform">
            <div className="overflow-auto w-full h-full custom-scrollbar flex justify-center p-2">
                <div style={{ transform: 'scale(0.35)', transformOrigin: 'top center' }}>
                     {children}
                </div>
            </div>
        </div>
    </div>
);

const CardTemplate = React.forwardRef<HTMLDivElement, { 
    title: string; 
    subtitle: string; 
    platform: '1080x1080' | '1080x1350'; 
    fontSize: 'sm' | 'md' | 'lg';
    type: 'question' | 'explanation' | 'concepts' | 'tips';
    children: React.ReactNode;
}>(({ title, subtitle, platform, fontSize, type, children }, ref) => {
    
    const w = 1080;
    const h = platform === '1080x1080' ? 1080 : 1350;
    
    let fontClass = "text-xl";
    if (fontSize === 'md') fontClass = "text-[26px]";
    if (fontSize === 'lg') fontClass = "text-[32px]";
    
    // Background colors similar to flashcards
    const bgColors = {
        question: "bg-[#f8f9fa]",
        explanation: "bg-[#fffaf0]",
        concepts: "bg-[#1a202c]",
        tips: "bg-[#ffe36d]"
    };
    
    const cardBgColor = bgColors[type];

    return (
        <div 
            ref={ref} 
            style={{ width: `${w}px`, height: `${h}px` }} 
            className={`font-sans p-12 flex flex-col ${cardBgColor} relative overflow-hidden flex-shrink-0 box-border`}
        >
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(#000000 3px, transparent 3px)", backgroundSize: "40px 40px" }} />
            
            {/* Header */}
            <div className="flex justify-between items-center z-10 w-full shrink-0 mb-10 mt-2">
                <div className={`border-[5px] border-black rounded-[30px] px-8 py-3 w-3/4 flex items-center shadow-[6px_6px_0px_0px_#000000] ${type === 'concepts' ? 'bg-white text-black' : 'bg-white'}`}>
                    <h2 className="text-[26px] font-black uppercase tracking-widest whitespace-nowrap overflow-hidden text-ellipsis">
                        {title}
                    </h2>
                </div>
                <div className="bg-[#dc2323] border-[4px] border-black rounded-full h-[76px] w-[76px] flex items-center justify-center text-white font-black text-2xl shadow-[4px_4px_0px_0px_#000000] shrink-0">
                    <BookOpen size={36} />
                </div>
             </div>
             
             {/* Main Content Area */}
             <div className={`flex-1 z-10 w-full overflow-hidden ${fontClass} ${type === 'concepts' ? 'text-white' : 'text-black'}`}>
                  {children}
             </div>
             
             {/* Footer equivalent to flashcard footers */}
             <div className="flex gap-4 z-20 shrink-0 w-full mt-auto pt-8">
                 <div className="bg-[#ffe36d] border-[4px] border-black rounded-full h-[60px] text-lg font-black tracking-widest text-black shadow-[6px_6px_0px_0px_#000000] flex items-center justify-center px-8 text-center uppercase leading-none whitespace-nowrap">
                   {subtitle}
                 </div>
                 <div className="bg-[#dc2323] border-[4px] border-black rounded-full h-[60px] font-black text-2xl text-white shadow-[6px_6px_0px_0px_#000000] flex-1 flex items-center justify-center px-8 text-center truncate leading-none uppercase">
                   SAT DRILLS
                 </div>
                 <div className="bg-white border-[4px] border-black rounded-full h-[60px] font-black text-xl shadow-[6px_6px_0px_0px_#000000] flex items-center justify-center text-black min-w-[125px] px-8 text-center leading-none whitespace-nowrap truncate">
                   2026
                 </div>
              </div>
        </div>
    );
});

CardTemplate.displayName = 'CardTemplate';

export default AIDrillSolverView;
