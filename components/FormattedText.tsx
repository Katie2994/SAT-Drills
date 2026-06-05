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
      
      // Heuristic: If a line starts with "A) ", "B) ", etc., give it indentation
      const isOption = /^[A-D]\)\s/.test(trimmed);
      
      let lineClass = 'min-h-[1.5em] text-gray-800 leading-relaxed';
      if (trimmed === '') {
        lineClass = 'h-4'; // Spacer for empty lines
      } else if (isOption) {
        lineClass = 'pl-4 font-bold text-gray-900 mt-1';
      }

      if (trimmed === '') {
        return <div key={lineIdx} className={lineClass} />;
      }

      // Parse bold markers: **text**
      const parts = line.split(/(\*\*[^*]+\*\*)/g);

      return (
        <div key={lineIdx} className={lineClass}>
          {parts.map((part, partIdx) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              return (
                <strong key={partIdx} className={`font-black text-gray-900 ${noHighlight ? '' : 'bg-gray-100 px-1 rounded-sm'}`}>
                  {part.slice(2, -2)}
                </strong>
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