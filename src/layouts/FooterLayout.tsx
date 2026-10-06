import React from 'react';
import { ArrowUp } from 'lucide-react';
import { SITE_CONFIG } from '../data/site.data';
import { NAVIGATION_ITEMS } from '../data/navigation.data';
import { SocialLinks } from '../components/shared/SocialLinks';

export const FooterLayout: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="mt-20 border-t border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-secondary)] py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Footer Navigation & Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-3">
            <h3 className="text-xl font-serif font-bold text-[var(--text-primary)]">
              {SITE_CONFIG.name}
            </h3>
            <p className="text-xs font-mono text-[var(--accent-primary)]">
              {SITE_CONFIG.role} · Lovely Professional University
            </p>
            <p className="text-[11px] font-mono text-[var(--accent-secondary)] flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
              <span>{SITE_CONFIG.tagline}</span>
            </p>
            <p className="text-xs text-[var(--text-secondary)] max-w-sm leading-relaxed">
              Aspiring AI/ML Engineer passionate about turning theoretical machine learning into reliable, deployed software products.
            </p>
            <div className="pt-2">
              <SocialLinks size="sm" variant="ghost" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--text-primary)] font-bold mb-3">
              Quick Links
            </h4>
            <ul className="space-y-1.5 text-xs">
              {NAVIGATION_ITEMS.slice(0, 5).map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & External Links */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--text-primary)] font-bold mb-3">
              Resources
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a
                  href="#resume"
                  className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors"
                >
                  Curriculum Vitae (PDF)
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors"
                >
                  GitHub Repositories
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors"
                >
                  LinkedIn Profile
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors"
                >
                  Direct Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Sub-bar */}
        <div className="pt-8 border-t border-[var(--border-color)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[var(--text-muted)]">
          <div>
            © {new Date().getFullYear()} Yash Pratap Singh. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-[var(--accent-primary)] transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
