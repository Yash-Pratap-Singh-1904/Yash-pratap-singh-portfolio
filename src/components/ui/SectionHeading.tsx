import React from 'react';

interface SectionHeadingProps {
  kicker?: string;
  number?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  kicker,
  number,
  title,
  subtitle,
  align = 'left',
  className = '',
}) => {
  const alignClasses = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`mb-10 lg:mb-14 ${alignClasses} ${className}`}>
      {(kicker || number) && (
        <div className={`flex items-center gap-2 mb-3 text-xs tracking-widest uppercase font-mono text-[var(--accent-primary)] font-medium ${align === 'center' ? 'justify-center' : ''}`}>
          {number && <span className="text-[var(--text-muted)] font-mono">{number}</span>}
          {number && kicker && <span className="text-[var(--border-color)]">/</span>}
          {kicker && <span>{kicker}</span>}
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[var(--text-primary)] tracking-tight leading-[1.15] [text-wrap:balance]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3.5 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl [text-wrap:pretty]">
          {subtitle}
        </p>
      )}
    </div>
  );
};
