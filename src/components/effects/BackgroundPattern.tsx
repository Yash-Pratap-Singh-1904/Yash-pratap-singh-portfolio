import React from 'react';

interface BackgroundPatternProps {
  variant?: 'dots' | 'radial-glow' | 'grid' | 'orbit' | 'subtle';
  className?: string;
}

export const BackgroundPattern: React.FC<BackgroundPatternProps> = ({
  variant = 'dots',
  className = '',
}) => {
  if (variant === 'radial-glow') {
    return (
      <div
        className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
        aria-hidden="true"
      >
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[var(--accent-primary)]/10 blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-80 h-80 rounded-full bg-[var(--accent-secondary)]/10 blur-3xl" />
      </div>
    );
  }

  if (variant === 'orbit') {
    return (
      <div
        className={`pointer-events-none absolute inset-0 overflow-hidden flex items-center justify-center opacity-30 ${className}`}
        aria-hidden="true"
      >
        <div className="w-[500px] h-[500px] rounded-full border border-[var(--border-color)]/50 animate-orbit-spin" />
        <div className="absolute w-[700px] h-[700px] rounded-full border border-dashed border-[var(--border-color)]/30" />
      </div>
    );
  }

  // Default dots/grid
  return (
    <div
      className={`pointer-events-none absolute inset-0 opacity-40 bg-[radial-gradient(var(--dot-color)_1.5px,transparent_1.5px)] [background-size:24px_24px] ${className}`}
      aria-hidden="true"
    />
  );
};
