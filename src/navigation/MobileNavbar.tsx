import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { SITE_CONFIG } from '../data/site.data';
import { NavigationLinks } from './NavigationLinks';
import { ThemeToggle } from './ThemeToggle';
import { SocialLinks } from '../components/shared/SocialLinks';
import { Button } from '../components/ui/Button';

interface MobileNavbarProps {
  activeSection: string;
}

export const MobileNavbar: React.FC<MobileNavbarProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Mobile Top Bar */}
      <header className="lg:hidden sticky top-0 left-0 right-0 z-50 h-16 bg-[var(--bg-main)]/95 backdrop-blur-md border-b border-[var(--border-color)] px-4 flex items-center justify-between">
        <a href="#home" onClick={closeMenu} className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-color)] flex items-center justify-center text-[var(--accent-primary)] font-serif font-bold text-xs">
            YP
          </div>
          <div>
            <div className="text-sm font-semibold text-[var(--text-primary)] leading-tight">
              {SITE_CONFIG.name}
            </div>
            <div className="text-[10px] font-mono text-[var(--text-muted)] leading-tight">
              {SITE_CONFIG.role}
            </div>
            <div className="text-[9px] font-mono text-[var(--accent-secondary)] leading-tight flex items-center gap-1.5 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
              <span>{SITE_CONFIG.tagline}</span>
            </div>
          </div>
        </a>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            className="p-2 rounded-lg border border-[var(--border-color)] bg-[var(--bg-elevated)] text-[var(--text-primary)] hover:text-[var(--accent-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9AA70]"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Drawer Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden fixed top-16 right-0 bottom-0 w-80 max-w-[85vw] z-50 bg-[var(--bg-main)] border-l border-[var(--border-color)] p-6 flex flex-col justify-between overflow-y-auto transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="space-y-6">
          <div className="text-xs font-mono text-[var(--accent-primary)] uppercase tracking-wider">
            Navigation Menu
          </div>
          <NavigationLinks
            activeSection={activeSection}
            onItemClick={closeMenu}
            itemClassName="py-2.5 text-sm"
          />
        </div>

        <div className="pt-6 border-t border-[var(--border-color)] space-y-4">
          <SocialLinks size="md" variant="secondary" className="justify-center" />
          <Button
            variant="primary"
            size="md"
            asLink
            href="#contact"
            onClick={closeMenu}
            icon={<ArrowUpRight className="w-4 h-4" />}
            className="w-full py-3"
          >
            Let's Connect
          </Button>
          <p className="text-[10px] font-mono text-[var(--text-muted)] text-center">
            {SITE_CONFIG.availabilityStatus}
          </p>
        </div>
      </div>
    </>
  );
};
