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
    const [isLocked, setIsLocked] = useState(false);

    useEffect(() => {
        const host = window.location.hostname;
        // Lock if accessing from vercel or other external hosts. Allow localhost, run.app (AI Studio), googleusercontent.com
        if (!host.includes('run.app') && !host.includes('localhost') && !host.includes('googleusercontent.com')) {
            setIsLocked(true);
        }
    }, []);

    if (isLocked) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[50vh] text-center p-8 bg-white rounded-3xl border border-gray-200 shadow-sm max-w-2xl mx-auto mt-12 animate-fade-in">
                <div className="text-6xl mb-6 animate-pulse">⚙️</div>
                <h2 className="text-2xl font-extrabold text-black uppercase tracking-tight mb-4">Tính năng đang được cập nhật</h2>
                <p className="text-gray-600 mb-8 max-w-md mx-auto font-medium">
                    Tính năng AI Solver hiện đang được bảo trì và cập nhật trên hệ thống này. Vui lòng quay lại sau!
                </p>
                <img 
                    src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/511006794_24133287536328545_1676392969100136650_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1152&ctp=s2048x1152&_nc_cat=104&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeHw9xGUpGYiLqCTDZ1QGYpwDi4b2FJaQHEOLhvYUlpAccai9qazjbldtchvOzXpU1dzWRlHfgRDuQq-w2CPPgqf&_nc_ohc=O1bC89T716gQ7kNvwGXYTu-&_nc_oc=AdrUM5xczvhUusPTVcqgCR4nEzOV61Tj4Nd7jLVdhcUH7R9KpfBamur5gEbb0h-ghWo&_nc_zt=23&_nc_ht=scontent.fsgn2-5.fna&_nc_gid=N-8APSoitDzdUIZMSsF3rg&_nc_ss=7b2a8&oh=00_AQD-UIFAPqqbyuLMsh-V-auRdPmf6O4inh5mcmw7dQYGpQ&oe=6A4ABC59"
                    alt="Updating"
                    className="w-full h-auto rounded-2xl border-2 border-black"
                />
            </div>
        );
    }
    const [sourceCredit, setSourceCredit] = useState('');
    
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<AnalyzedData | null>(null);
    const [isRevealed, setIsRevealed] = useState(false);
    const [error, setError] = useState('');
    
    // Image Export States
    const [showExportOptions, setShowExportOptions] = useState(false);
    const [exportPlatform, setExportPlatform] = useState<'1080x1080' | '1080x1350'>('1080x1080'); // Instagram square vs tall
    const [exportFontSize, setExportFontSize] = useState<'sm' | 'md' | 'lg'>('md');
    
    const card1Ref = useRef<HTMLDivElement>(null);
    const card2Ref = useRef<HTMLDivElement>(null);
    const card3Ref = useRef<HTMLDivElement>(null);
    const card4Ref = useRef<HTMLDivElement>(null);

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
        <div className="max-w-4xl mx-auto py-8 font-sans px-4">
            <div className="bg-white border border-[#d9d9d9] shadow-cb rounded-cb-lg p-6 md:p-10 mb-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#f5f7fc] border-l border-b border-[#d9d9d9] rounded-bl-cb-md flex items-center justify-center -mr-px -mt-px pointer-events-none">
                    <img src="https://pbs.twimg.com/media/G9_w8N1aUAENd0l?format=jpg&name=large" alt="Logo" className="w-12 h-12 rounded-full border border-[#d9d9d9]" referrerPolicy="no-referrer" />
                </div>
                
                <h2 className="text-3xl font-display font-extrabold uppercase mb-8 pr-20 text-[#1e1e1e] tracking-tight">AI Drill Solver</h2>

                {/* Input Switcher */}
                <div className="flex bg-[#f5f7fc] p-1.5 rounded-cb-sm mb-8 w-fit border border-[#d9d9d9]">
                   <button onClick={() => setInputType('image')} className={`flex items-center gap-2 px-6 py-2.5 rounded-cb-xs text-sm font-bold transition-all ${inputType === 'image' ? 'bg-white shadow-sm border border-[#d9d9d9] text-[#dc2323]' : 'text-gray-600 hover:text-[#1e1e1e] hover:bg-white/50'}`}>
                      <FileImage className="w-4 h-4" /> Upload Ảnh
                   </button>
                   <button onClick={() => setInputType('text')} className={`flex items-center gap-2 px-6 py-2.5 rounded-cb-xs text-sm font-bold transition-all ${inputType === 'text' ? 'bg-white shadow-sm border border-[#d9d9d9] text-[#dc2323]' : 'text-gray-600 hover:text-[#1e1e1e] hover:bg-white/50'}`}>
                      <Type className="w-4 h-4" /> Văn bản
                   </button>
                   <button onClick={() => setInputType('url')} className={`flex items-center gap-2 px-6 py-2.5 rounded-cb-xs text-sm font-bold transition-all ${inputType === 'url' ? 'bg-white shadow-sm border border-[#d9d9d9] text-[#dc2323]' : 'text-gray-600 hover:text-[#1e1e1e] hover:bg-white/50'}`}>
                      <LinkIcon className="w-4 h-4" /> URL
                   </button>
                </div>

                <div className="flex flex-col items-center justify-center w-full mb-6">
                    {inputType === 'image' && (
                        !previewUrl ? (
                            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-[#d9d9d9] rounded-cb-md cursor-pointer bg-white hover:bg-[#f5f7fc] hover:border-[#324dc7] transition-all">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <div className="bg-white p-4 rounded-cb-sm shadow-sm mb-4 border border-[#d9d9d9]">
                                        <Upload className="w-8 h-8 text-[#324dc7]" />
                                    </div>
                                    <p className="mb-2 text-sm text-gray-700 font-medium"><span className="font-bold text-[#324dc7] border-b border-[#324dc7]">Nhấn để tải lên</span> hoặc kéo thả ảnh</p>
                                </div>
                                <input id="dropzone-file" type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
                            </label>
                        ) : (
                            <div className="relative w-full max-w-2xl bg-white p-4 rounded-cb-md border border-[#d9d9d9] shadow-sm">
                                <img src={previewUrl} alt="Preview" className="max-h-96 w-full object-contain rounded-cb-sm" />
                                <button 
                                    onClick={() => { setFile(null); setPreviewUrl(null); setResult(null); setIsRevealed(false); }}
                                    className="absolute -top-3 -right-3 bg-white text-gray-500 border border-[#d9d9d9] p-2 rounded-full hover:bg-[#f5f7fc] hover:text-[#dc2323] shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#324dc7]"
                                >
                                    <X className="w-4 h-4 font-bold" />
                                </button>
                            </div>
                        )
                    )}

                    {inputType === 'url' && (
                        <div className="w-full max-w-2xl">
                            <label className="block text-sm font-bold text-[#1e1e1e] mb-2 uppercase tracking-wide">Đường dẫn ảnh (URL)</label>
                            <input 
                                type="url" 
                                value={imageUrl}
                                onChange={e => setImageUrl(e.target.value)}
                                placeholder="https://example.com/image.png"
                                className="w-full px-4 py-3 rounded-cb-md border border-[#d9d9d9] focus:border-[#324dc7] focus:ring-1 focus:ring-[#324dc7] outline-none transition-all shadow-sm"
                            />
                        </div>
                    )}

                    {inputType === 'text' && (
                        <div className="w-full max-w-2xl">
                            <label className="block text-sm font-bold text-[#1e1e1e] mb-2 uppercase tracking-wide">Nội dung câu hỏi</label>
                            <textarea 
                                value={textContent}
                                onChange={e => setTextContent(e.target.value)}
                                placeholder="Nhập câu hỏi bạn cần giải đáp ở đây..."
                                rows={6}
                                className="w-full px-4 py-3 rounded-cb-md border border-[#d9d9d9] focus:border-[#324dc7] focus:ring-1 focus:ring-[#324dc7] outline-none transition-all shadow-sm resize-y"
                            ></textarea>
                        </div>
                    )}
                </div>

                <div className="w-full max-w-2xl mx-auto mb-8">
                    <label className="block text-sm font-bold text-[#1e1e1e] mb-2 uppercase tracking-wide">Nguồn / Credit (Tuỳ chọn)</label>
                    <input 
                        type="text" 
                        value={sourceCredit}
                        onChange={e => setSourceCredit(e.target.value)}
                        placeholder="VD: Khan Academy, College Board, etc."
                        className="w-full px-4 py-3 rounded-cb-md border border-[#d9d9d9] focus:border-[#324dc7] focus:ring-1 focus:ring-[#324dc7] outline-none transition-all bg-[#f5f7fc] shadow-sm"
                    />
                </div>

                <div className="flex justify-center border-t border-[#d9d9d9] pt-8">
                   <button 
                       onClick={handleAnalyze}
                       disabled={loading || (inputType === 'image' && !file) || (inputType === 'url' && !imageUrl) || (inputType === 'text' && !textContent)}
                       className="bg-[#324dc7] text-white font-bold text-lg px-10 py-4 rounded-cb-md hover:bg-[#283b99] transition-all disabled:opacity-50 flex items-center gap-3 uppercase tracking-widest shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#324dc7] focus-visible:ring-offset-2"
                   >
                       {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : <Search className="w-6 h-6" />}
                       {loading ? 'ĐANG GIẢI...' : 'GIẢI BÀI NGAY'}
                   </button>
                </div>
                {error && <div className="bg-[#fffdf0] text-[#dc2323] p-4 rounded-cb-sm mt-6 text-center font-bold border border-[#dc2323]">{error}</div>}
            </div>

            {/* Results Display */}
            {result && (
                <div className="space-y-6 animate-fade-in relative max-w-3xl mx-auto">
                    <div className="flex justify-between items-center px-2">
                       <h3 className="text-2xl font-display font-extrabold text-[#1e1e1e]">AI RESOLUTION</h3>
                       <button 
                           onClick={() => setShowExportOptions(!showExportOptions)}
                           className="bg-[#ffe36d] text-[#1e1e1e] border border-[#d9d9d9] font-bold uppercase tracking-wider text-sm flex items-center gap-2 hover:bg-[#ebd056] px-5 py-2.5 rounded-cb-sm shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffe36d]"
                       >
                         <ImageIcon className="w-4 h-4" /> LƯU ẢNH
                       </button>
                    </div>

                    <div className="bg-white border border-[#d9d9d9] shadow-cb p-6 md:p-10 rounded-cb-lg">
                        {sourceCredit && (
                            <div className="inline-flex items-center gap-2 text-xs font-bold text-white bg-[#1e1e1e] px-4 py-1.5 rounded-cb-xs mb-6 uppercase tracking-wider">
                                SOURCE: {sourceCredit}
                            </div>
                        )}
                        <div className="mb-8 border-b border-[#d9d9d9] pb-8">
                            <h4 className="text-sm font-bold text-[#dc2323] uppercase tracking-widest mb-4">Tóm tắt Câu hỏi</h4>
                            <div className="text-lg text-[#1e1e1e] font-medium leading-relaxed markdown-body">
                                <ReactMarkdown remarkPlugins={[remarkGfm]}>{result.question}</ReactMarkdown>
                            </div>
                            
                            {result.options && result.options.length > 0 && (
                                <div className="mt-5 space-y-3">
                                    {result.options.map((opt, i) => (
                                        <div key={i} className="flex gap-3 items-start bg-[#f5f7fc] p-4 rounded-cb-sm border border-[#d9d9d9]">
                                            <div className="font-bold text-gray-500 mt-0.5">{opt.substring(0, 2)}</div>
                                            <div className="font-medium text-[#1e1e1e]">
                                                <ReactMarkdown remarkPlugins={[remarkGfm]}>{opt.substring(2).trim()}</ReactMarkdown>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {!isRevealed ? (
                            <div className="text-center w-full max-w-md mx-auto pt-4 pb-4">
                               <div className="mb-8 p-8 border-2 border-dashed border-[#d9d9d9] rounded-cb-md bg-[#f5f7fc] text-gray-500">
                                 <BookOpen className="w-12 h-12 mx-auto mb-4 text-[#324dc7] animate-bounce" />
                                 <p className="text-base font-bold text-[#1e1e1e]">AI đã phân tích xong. Thử tự tư duy trước khi xem đáp án!</p>
                               </div>
                               
                               <button
                                  onClick={() => setIsRevealed(true)}
                                  className="w-full flex items-center justify-center px-8 py-4 rounded-cb-md font-bold text-lg transition-all bg-[#1e1e1e] text-white hover:bg-black shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#324dc7] focus-visible:ring-offset-2"
                                >
                                  <Eye className="w-5 h-5 mr-3" /> MỞ KHÓA LỜI GIẢI
                                </button>
                            </div>
                        ) : (
                            <div className="animate-fade-in space-y-8 pt-4">
                                <div className="bg-[#f5f7fc] p-8 rounded-cb-md border border-[#324dc7] shadow-sm relative text-left">
                                    <div className="inline-flex items-center gap-2 bg-[#1e1e1e] text-white px-4 py-2 rounded-cb-xs text-sm font-bold uppercase mb-4 shadow-sm tracking-wider">
                                       <CheckCircle2 className="w-4 h-4 text-[#324dc7]" />
                                       <span>ĐÁP ÁN ĐÚNG</span>
                                    </div>
                                    <div className="text-3xl font-display font-bold text-[#1e1e1e]">
                                        {result.correctAnswer}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-left">
                                    <div className="md:col-span-7 bg-white p-6 rounded-cb-md border border-[#d9d9d9] shadow-sm">
                                        <h4 className="text-sm font-bold text-[#324dc7] uppercase tracking-widest mb-6 flex items-center gap-2">
                                            GIẢI THÍCH CHI TIẾT
                                        </h4>
                                        <div className="prose prose-sm md:prose-base prose-slate max-w-none text-[#1e1e1e] font-medium leading-relaxed markdown-style-custom">
                                            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                                {result.explanation}
                                            </ReactMarkdown>
                                        </div>
                                    </div>
                                    
                                    <div className="md:col-span-5 flex flex-col gap-8">
                                        {result.keyTerms && result.keyTerms.length > 0 && (
                                            <div className="bg-[#1e1e1e] p-6 rounded-cb-md border border-[#1e1e1e] shadow-sm text-white">
                                                <h4 className="text-sm font-bold text-[#ffe36d] uppercase tracking-widest mb-5 flex items-center gap-2">
                                                    KEY CONCEPTS
                                                </h4>
                                                <div className="flex flex-col gap-4">
                                                    {result.keyTerms.map((item, idx) => (
                                                        <div key={idx} className="flex flex-col gap-1.5 pb-4 border-b border-gray-700 last:border-0 last:pb-0">
                                                            <span className="font-bold text-[#ffe36d]">{item.term}</span>
                                                            <span className="text-gray-300 text-sm leading-relaxed">{item.definition}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                        
                                        {result.tips && (
                                            <div className="bg-[#fffdf0] p-6 rounded-cb-md border border-[#ffe36d] shadow-sm">
                                                 <h4 className="text-sm font-bold text-[#dc2323] uppercase tracking-widest mb-4 flex items-center gap-2">
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
                    <div className="w-full max-w-6xl mx-auto flex justify-between items-center bg-white border border-[#d9d9d9] shadow-cb p-4 rounded-cb-md mb-8">
                        <div className="flex items-center gap-6">
                           <h3 className="text-xl font-display font-bold uppercase text-[#1e1e1e]">TÙY CHỈNH LƯU ẢNH</h3>
                           <div className="flex items-center gap-2 border-l border-[#d9d9d9] pl-6">
                               <span className="text-sm font-bold text-gray-500 uppercase tracking-wide">Cỡ Ảnh:</span>
                               <select 
                                  value={exportPlatform} 
                                  onChange={e => setExportPlatform(e.target.value as any)}
                                  className="bg-[#f5f7fc] border border-[#d9d9d9] rounded-cb-xs px-3 py-1 font-bold outline-none focus:border-[#324dc7]"
                               >
                                  <option value="1080x1080">1080 x 1080 (Vuông - FB/Insta post)</option>
                                  <option value="1080x1350">1080 x 1350 (Dọc - Insta portrait)</option>
                               </select>
                           </div>
                           <div className="flex items-center gap-2 border-l border-[#d9d9d9] pl-6">
                               <span className="text-sm font-bold text-gray-500 uppercase tracking-wide">Cỡ Chữ:</span>
                               <select 
                                  value={exportFontSize} 
                                  onChange={e => setExportFontSize(e.target.value as any)}
                                  className="bg-[#f5f7fc] border border-[#d9d9d9] rounded-cb-xs px-3 py-1 font-bold outline-none focus:border-[#324dc7]"
                               >
                                  <option value="sm">Nhỏ</option>
                                  <option value="md">Vừa</option>
                                  <option value="lg">Lớn</option>
                               </select>
                           </div>
                        </div>
                        <div className="flex gap-4">
                            <button onClick={downloadZip} disabled={loading} className="bg-[#ffe36d] text-[#1e1e1e] border border-[#d9d9d9] font-bold uppercase py-2 px-6 rounded-cb-sm shadow-sm hover:bg-[#ebd056] transition-all flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffe36d]">
                                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Archive className="w-5 h-5" />} ZIP CẢ 4 ẢNH
                            </button>
                            <button onClick={() => setShowExportOptions(false)} className="bg-[#f5f7fc] text-gray-500 border border-[#d9d9d9] p-2 rounded-full hover:bg-white hover:text-[#dc2323] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#324dc7]">
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
