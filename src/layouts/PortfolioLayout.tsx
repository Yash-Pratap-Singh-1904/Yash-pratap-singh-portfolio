import React from 'react';
import { Sidebar } from '../navigation/Sidebar';
import { MobileNavbar } from '../navigation/MobileNavbar';
import { MainContent } from './MainContent';
import { FooterLayout } from './FooterLayout';
import { BackToTop } from '../components/effects/BackToTop';
import { useActiveSection } from '../hooks/useActiveSection';
import { NAVIGATION_ITEMS } from '../data/navigation.data';

interface PortfolioLayoutProps {
  children: React.ReactNode;
}

export const PortfolioLayout: React.FC<PortfolioLayoutProps> = ({ children }) => {
  const sectionIds = NAVIGATION_ITEMS.map((item) => item.id);
  const activeSection = useActiveSection(sectionIds, 150);

  return (
    <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-primary)] transition-colors duration-300 flex flex-col relative selection:bg-[var(--accent-primary)]/30 selection:text-[var(--text-primary)]">
      {/* Mobile Top Navigation */}
      <MobileNavbar activeSection={activeSection} />

      {/* Desktop Persistent Left Sidebar */}
      <Sidebar activeSection={activeSection} />

      {/* Primary Content Container */}
      <MainContent>
        {children}
      </MainContent>

      {/* Footer Area with Sidebar offset on desktop */}
      <div className="w-full lg:pl-64 xl:pl-72">
        <FooterLayout />
      </div>

      {/* Back to top floating button */}
      <BackToTop />
    </div>
  );
};
