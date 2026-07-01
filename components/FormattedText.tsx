import React, { useMemo } from 'react';

interface FormattedTextProps {
  text: string;
  className?: string;
  noHighlight?: boolean;
}

const FormattedText: React.FC<FormattedTextProps> = ({ text, className = '', noHighlight = false }) => {
  const content = useMemo(() => {
    if (!text) return null;

    // Split by literal newlines
    const lines = text.replace(/(?<!-)->/g, '→').replace(/-\&gt;/g, '→').split('\n');
    
    return lines.map((line, lineIdx) => {
      const trimmed = line.trim();
      
      // Heuristic: If a line starts with "A) ", "(A) ", "A. ", etc., give it indentation
      const isOption = /^(\(|)[A-D](\)|\.)\s/i.test(trimmed);
      
      let lineClass = 'min-h-[1.5em] text-[#1e1e1e] leading-relaxed';
      if (trimmed === '') {
        lineClass = 'h-4'; // Spacer for empty lines
      } else if (isOption) {
        lineClass = 'pl-4 font-bold text-[#1e1e1e] mt-1';
      }

      if (trimmed === '') {
        return <div key={lineIdx} className={lineClass} />;
      }

      // Parse bold markers: **text** and underline <u>text</u>
      const parts = line.split(/(\*\*[^*]+\*\*|<u>.*?<\/u>)/g);

      return (
        <div key={lineIdx} className={lineClass}>
          {parts.map((part, partIdx) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              return (
                <strong key={partIdx} className={`font-bold text-[#1e1e1e] ${noHighlight ? '' : 'bg-[#f5f7fc] px-1 rounded-cb-xs'}`}>
                  {part.slice(2, -2)}
                </strong>
              );
            }
            if (part.startsWith('<u>') && part.endsWith('</u>')) {
              return (
                <span key={partIdx} className="underline underline-offset-4 decoration-current decoration-1">
                  {part.slice(3, -4)}
                </span>
              );
            }
            return <span key={partIdx}>{part}</span>;
          })}
        </div>
      );
    });
  }, [text, noHighlight]);

  return (
    <div className={`space-y-1 font-serif ${className}`}>
      {content}
    </div>
  );
};

export default FormattedText;