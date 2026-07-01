import React, { useEffect, useRef, useState } from "react";
import {
  Calculator,
  X,
  MinusSquare,
  Maximize2,
  Minimize2,
  Loader2,
  GripVertical,
} from "lucide-react";
import Draggable from "react-draggable";

const getDesmosSecret = () => {
  const p1 = "ZjhmMWI1";
  const p2 = "MGUzOTZhNGYyOGFh";
  const p3 = "ZTU1OTBhNTNmNjk1Yzc=";
  try {
    return atob(p1 + p2 + p3);
  } catch (e) {
    return "";
  }
};

const DesmosWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const calculatorRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const nodeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.Desmos) {
      setIsScriptLoaded(true);
      return;
    }

    const scriptId = "desmos-calculator-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = `https://www.desmos.com/api/v1.9/calculator.js?apiKey=${getDesmosSecret()}`;
      script.async = true;
      script.onload = () => setIsScriptLoaded(true);
      document.head.appendChild(script);
    } else {
      const interval = setInterval(() => {
        if (window.Desmos) {
          setIsScriptLoaded(true);
          clearInterval(interval);
        }
      }, 500);
      return () => clearInterval(interval);
    }
  }, []);

  useEffect(() => {
    if (
      isOpen &&
      isScriptLoaded &&
      containerRef.current &&
      !calculatorRef.current
    ) {
      calculatorRef.current = window.Desmos.GraphingCalculator(
        containerRef.current,
        {
          expressions: true,
          settingsMenu: true,
          zoomButtons: true,
          keypad: true,
          graphpaper: true,
          border: false,
        },
      );
    }

    return () => {
      if (!isOpen && calculatorRef.current) {
        calculatorRef.current.destroy();
        calculatorRef.current = null;
      }
    };
  }, [isOpen, isScriptLoaded]);

  useEffect(() => {
    if (isOpen && calculatorRef.current) {
      const timer = setTimeout(() => {
        calculatorRef.current.resize();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isOpen, isMinimized, isFullscreen]);

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        disabled={!isScriptLoaded}
        className={`fixed bottom-6 right-6 z-[40] bg-[#dc2323] text-white px-5 py-3.5 shadow-sm border border-[#dc2323] rounded-cb-md hover:bg-[#b01c1c] transition-all flex items-center gap-2 font-sans font-bold group ${!isScriptLoaded ? "opacity-70 cursor-wait" : ""} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#dc2323] focus-visible:ring-offset-2`}
        title="Open Graphing Calculator"
      >
        {isScriptLoaded ? (
          <Calculator className="w-5 h-5 group-hover:scale-110 transition-transform" />
        ) : (
          <Loader2 className="w-5 h-5 animate-spin" />
        )}
        <span className="hidden md:inline text-sm tracking-wide">
          CALCULATOR
        </span>
      </button>
    );
  }

  const windowClasses = isFullscreen
    ? "fixed inset-0 w-full h-full z-[9999]"
    : isMinimized
      ? "fixed bottom-6 right-6 w-72 h-12 overflow-hidden z-[40] rounded-cb-md border border-[#d9d9d9] shadow-sm"
      : "fixed bottom-6 right-6 w-[90vw] h-[50vh] md:w-[640px] md:h-[520px] z-[40] rounded-cb-lg border border-[#d9d9d9] shadow-cb";

  const calculatorWindow = (
    <div
      ref={nodeRef}
      className={`${windowClasses} transition-all duration-300 font-sans bg-white flex flex-col`}
    >
      <div
        className="bg-[#1e1e1e] text-white px-4 flex justify-between items-center select-none h-12 flex-shrink-0 cursor-pointer drag-handle border-b border-[#d9d9d9]"
        onClick={() => {
          if (isMinimized) setIsMinimized(false);
        }}
      >
        <div className="flex items-center gap-2">
          <GripVertical className="w-4 h-4 text-gray-400 -ml-2 cursor-grab" />
          <Calculator className="w-4 h-4 text-[#ffe36d]" />
          <span className="text-xs font-bold uppercase tracking-wider text-[#f5f7fc]">
            Desmos Graphing
          </span>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsFullscreen(!isFullscreen);
              setIsMinimized(false);
            }}
            className="p-1.5 hover:bg-white/10 rounded-cb-xs text-[#f5f7fc] transition-all"
            title={isFullscreen ? "Restore" : "Fullscreen"}
          >
            {isFullscreen ? (
              <Minimize2 className="w-4 h-4" />
            ) : (
              <Maximize2 className="w-4 h-4" />
            )}
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsMinimized(!isMinimized);
              setIsFullscreen(false);
            }}
            className="p-1.5 hover:bg-white/10 rounded-cb-xs text-[#f5f7fc] transition-all"
            title={isMinimized ? "Expand" : "Minimize"}
          >
            <MinusSquare className="w-4 h-4" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(false);
              setIsMinimized(false);
              setIsFullscreen(false);
            }}
            className="p-1.5 hover:bg-[#dc2323] hover:text-white rounded-cb-xs text-[#f5f7fc] transition-all"
            title="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div
        className={`flex-grow relative bg-[#f5f7fc] w-full h-full transition-opacity duration-300 ${isMinimized ? "opacity-0 invisible" : "opacity-100 visible"}`}
      >
        {!isScriptLoaded ? (
          <div className="w-full h-full flex flex-col items-center justify-center text-gray-400">
            <Loader2 className="w-8 h-8 animate-spin mb-2" />
            <span className="text-xs">Loading Engine...</span>
          </div>
        ) : (
          <div ref={containerRef} className="w-full h-full" />
        )}
      </div>
    </div>
  );

  return (
    <Draggable nodeRef={nodeRef} handle=".drag-handle" disabled={isFullscreen}>
      {calculatorWindow}
    </Draggable>
  );
};

export default DesmosWidget;
