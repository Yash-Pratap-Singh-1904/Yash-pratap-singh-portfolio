import React from 'react';

interface TechnologyTagProps {
  name: string;
  variant?: 'subtle' | 'outline' | 'filled';
  className?: string;
}

export const TechnologyTag: React.FC<TechnologyTagProps> = ({
  name,
  variant = 'subtle',
  className = '',
}) => {
  const variantStyles = {
    subtle:
      'bg-[var(--bg-elevated)] text-[var(--text-secondary)] border border-[var(--border-color)] hover:border-[var(--accent-primary)]/50 hover:text-[var(--text-primary)]',
    outline:
      'border border-[var(--border-color)] text-[var(--text-primary)] hover:border-[var(--accent-primary)]',
    filled:
      'bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] border border-[var(--accent-primary)]/20',
  };

  return (
    <span
      className={`inline-flex items-center text-xs font-mono px-2.5 py-1 rounded-md transition-colors whitespace-nowrap ${variantStyles[variant]} ${className}`}
    >
      {name}
    </span>
  );
};
