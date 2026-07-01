import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface CollapsibleExplanationProps {
  answer: string;
  children: React.ReactNode;
}

const CollapsibleExplanation: React.FC<CollapsibleExplanationProps> = ({ answer, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-4 border border-[#d9d9d9] rounded-cb-md overflow-hidden bg-white shadow-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-[#f5f7fc] flex items-center justify-between p-4 font-bold text-[#1e1e1e] hover:bg-[#e8ecf8] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#324dc7] focus-visible:ring-inset"
      >
        <span>Xem Đáp án & Giải thích chi tiết</span>
        {isOpen ? <ChevronUp className="w-5 h-5 text-[#324dc7]" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
      </button>
      {isOpen && (
        <div className="p-4 bg-white border-t border-[#d9d9d9]">
          <div className="mb-4">
            <span className="font-bold text-[#dc2323] text-lg uppercase tracking-wide">Đáp án: {answer}</span>
          </div>
          <div className="space-y-3 text-[#1e1e1e] leading-relaxed">
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default CollapsibleExplanation;
