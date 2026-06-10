import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface CollapsibleExplanationProps {
  answer: string;
  children: React.ReactNode;
}

const CollapsibleExplanation: React.FC<CollapsibleExplanationProps> = ({ answer, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-4 border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-gray-50 flex items-center justify-between p-4 font-semibold text-gray-800 hover:bg-gray-100 transition-colors"
      >
        <span>Xem Đáp án & Giải thích chi tiết</span>
        {isOpen ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
      </button>
      {isOpen && (
        <div className="p-4 bg-white border-t border-gray-200">
          <div className="mb-4">
            <span className="font-bold text-[#dc2323] text-lg">Đáp án: {answer}</span>
          </div>
          <div className="space-y-3 text-gray-700">
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default CollapsibleExplanation;
