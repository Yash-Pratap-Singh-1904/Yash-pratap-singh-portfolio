import React from 'react';
import { NAVIGATION_ITEMS } from '../data/navigation.data';

interface NavigationLinksProps {
  activeSection: string;
  onItemClick?: () => void;
  className?: string;
  itemClassName?: string;
}

export const NavigationLinks: React.FC<NavigationLinksProps> = ({
  activeSection,
  onItemClick,
  className = '',
  itemClassName = '',
}) => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const topOffset = id === 'home' ? 0 : 70;
      const elementY = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: Math.max(0, elementY - topOffset),
        behavior: 'smooth',
      });
      window.history.pushState(null, '', `#${id}`);
    }

    if (onItemClick) {
      onItemClick();
    }
  };

  return (
    <nav className={`flex flex-col space-y-1 ${className}`}>
      {NAVIGATION_ITEMS.map((item) => {
        const isActive = activeSection === item.id;
        return (
          <a
            key={item.id}
            href={item.href}
            onClick={(e) => handleScrollTo(e, item.id)}
            className={`group flex items-center justify-between px-3 py-1.5 text-xs rounded-md transition-all duration-150 select-none ${
              isActive
                ? 'text-[var(--accent-primary)] font-semibold bg-[var(--glow-accent)]'
                : 'text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)]/60'
            } ${itemClassName}`}
          >
            <div className="flex items-center gap-2.5">
              <span
                className={`font-mono text-[11px] transition-colors ${
                  isActive ? 'text-[var(--accent-primary)]' : 'text-[var(--text-muted)] group-hover:text-[var(--text-secondary)]'
                }`}
              >
                {item.number}
              </span>
              <span className="tracking-tight truncate">{item.label}</span>
            </div>
            {isActive && (
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)]" />
            )}
          </a>
        );
      })}
    </nav>
  );
};
