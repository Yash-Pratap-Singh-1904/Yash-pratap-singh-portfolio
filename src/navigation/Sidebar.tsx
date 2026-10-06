import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SITE_CONFIG } from '../data/site.data';
import { NavigationLinks } from './NavigationLinks';
import { ThemeToggle } from './ThemeToggle';
import { SocialLinks } from '../components/shared/SocialLinks';
import { Button } from '../components/ui/Button';

interface SidebarProps {
  activeSection: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeSection }) => {
  return (
    <aside
      className="hidden lg:flex flex-col justify-between fixed top-0 left-0 bottom-0 w-64 xl:w-72 z-40 bg-[var(--bg-main)]/95 backdrop-blur-md border-r border-[var(--border-color)] px-5 py-6 overflow-y-auto"
      aria-label="Primary Desktop Navigation"
    >
      {/* Top Header: Identity & Status */}
      <div className="space-y-6">
        <a href="#home" className="flex items-center gap-3 group focus-visible:outline-none">
          <div className="w-11 h-11 rounded-xl overflow-hidden border border-[var(--border-color)] bg-[var(--bg-elevated)] p-0.5 group-hover:border-[var(--accent-primary)] transition-colors shrink-0">
            <div className="w-full h-full rounded-lg bg-gradient-to-br from-[#2D2A26] to-[#171819] flex items-center justify-center text-[var(--accent-primary)] font-serif text-base font-bold">
              YP
            </div>
          </div>
          <div className="overflow-hidden">
            <h1 className="text-sm font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors truncate">
              {SITE_CONFIG.name}
            </h1>
            <p className="text-[11px] font-mono text-[var(--text-muted)] truncate">
              {SITE_CONFIG.role}
            </p>
            <p className="text-[10px] font-mono text-[var(--accent-secondary)] truncate flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
              <span className="truncate">{SITE_CONFIG.tagline}</span>
            </p>
          </div>
        </a>

        {/* Section Navigation */}
        <div className="pt-2">
          <NavigationLinks activeSection={activeSection} />
        </div>
      </div>

      {/* Bottom Footer Section: Socials, Connect CTA, Theme Toggle */}
      <div className="pt-6 border-t border-[var(--border-color)] space-y-4">
        {/* Social Icons */}
        <div className="flex items-center justify-between">
          <SocialLinks size="sm" variant="ghost" />
          <ThemeToggle />
        </div>

        {/* Let's Connect CTA */}
        <Button
          variant="primary"
          size="sm"
          asLink
          href="#contact"
          icon={<ArrowUpRight className="w-3.5 h-3.5" />}
          className="w-full py-2"
        >
          Let's Connect
        </Button>

        {/* Copyright notice */}
        <div className="text-[10px] font-mono text-[var(--text-muted)] text-center">
          © {new Date().getFullYear()} Yash Pratap Singh
        </div>
      </div>
    </aside>
  );
};
