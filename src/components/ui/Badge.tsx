import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'accent' | 'neutral' | 'subtle' | 'outline';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'neutral',
  size = 'sm',
  className = '',
}) => {
  const sizeClasses = size === 'sm' ? 'text-xs px-2.5 py-0.5' : 'text-xs px-3 py-1';

  const variantClasses = {
    accent:
      'bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] border border-[var(--accent-primary)]/30 font-medium rounded-md',
    neutral:
      'bg-[var(--bg-elevated)] text-[var(--text-secondary)] border border-[var(--border-color)] rounded-md',
    subtle:
      'text-[var(--text-muted)] border-b border-[var(--border-color)] font-mono text-[11px] tracking-wide',
    outline:
      'border border-[var(--border-color)] text-[var(--text-primary)] rounded-md font-medium',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 whitespace-nowrap transition-colors ${sizeClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
