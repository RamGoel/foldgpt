import React, { useState, useRef, useEffect } from 'react';

interface TooltipProviderProps {
  children: React.ReactNode;
  text: string;
}

const TooltipProvider: React.FC<TooltipProviderProps> = ({ children, text }) => {
  const [visible, setVisible] = useState(false);
  const [tooltipStyles, setTooltipStyles] = useState({});
  const tooltipRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (tooltipRef.current && wrapperRef.current) {
      const tooltipRect = tooltipRef.current.getBoundingClientRect();
      const wrapperRect = wrapperRef.current.getBoundingClientRect();

      // Calculate horizontal center of the tooltip relative to the children
      const horizontalCenter = wrapperRect.width / 2 - tooltipRect.width / 2;

      // Determine whether to position above or below based on available space
      const positionAbove = wrapperRect.top > tooltipRect.height + 10;
      const top = positionAbove
        ? -tooltipRect.height - 5 // position above
        : wrapperRect.height + 5; // position below

      setTooltipStyles({
        left: horizontalCenter,
        top: top,
      });
    }
  }, [visible]);

  return (
    <div
      className="relative flex items-center"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      ref={wrapperRef}
    >
      {/* The element to hover over */}
      <div className="cursor-pointer">{children}</div>

      {/* Tooltip */}
      {visible && (
        <div
          ref={tooltipRef}
          style={tooltipStyles}
          className="absolute px-2 py-2 text-[12px] bg-zinc-950 text-white rounded-lg shadow-lg z-10"
        >
          {text}
        </div>
      )}
    </div>
  );
};

export default TooltipProvider;
