import { ReactNode } from 'react';

interface SpeechBubbleProps {
  children: ReactNode;
  className?: string;
}

export function SpeechBubble({ children, className = '' }: SpeechBubbleProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="bg-background border border-border rounded-lg px-4 py-3 shadow-soft max-w-[150px] relative">
        <p className="text-sm font-medium text-foreground leading-relaxed">
          {children}
        </p>
        {/* Speech bubble tail */}
        <div className="absolute -bottom-2 left-6 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-border"></div>
        <div className="absolute -bottom-[7px] left-6 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-background"></div>
      </div>
    </div>
  );
}