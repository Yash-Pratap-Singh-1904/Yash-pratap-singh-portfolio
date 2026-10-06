import { useEffect, useState } from 'react';

/**
 * Robust scroll spy hook that uses getBoundingClientRect() to reliably detect
 * which section is currently active in the viewport, avoiding offsetParent / transform bugs.
 */
export const useActiveSection = (sectionIds: string[], offset: number = 150): string => {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0] || 'home');

  useEffect(() => {
    if (!sectionIds || sectionIds.length === 0) return;

    let ticking = false;

    const determineActiveSection = () => {
      // 1. If at or near the very top of the page, always select the first item ('home')
      if (window.scrollY < 80) {
        setActiveSection(sectionIds[0]);
        return;
      }

      // 2. If scrolled to the bottom of the page, activate the last section ('contact')
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight;
      const currentScrollBottom = window.scrollY + clientHeight;

      if (currentScrollBottom >= scrollHeight - 60) {
        setActiveSection(sectionIds[sectionIds.length - 1]);
        return;
      }

      // 3. Focal line: A line ~20-30% down the viewport
      const focalLine = Math.min(220, Math.max(120, clientHeight * 0.28));

      // Find the section whose bounding rect currently crosses the focalLine
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= focalLine && rect.bottom > focalLine) {
            setActiveSection(id);
            return;
          }
        }
      }

      // 4. Fallback if between sections: find the section closest to the focal line
      let closestId = sectionIds[0];
      let minDistance = Infinity;

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const distance = Math.abs(rect.top - focalLine);
          if (distance < minDistance) {
            minDistance = distance;
            closestId = id;
          }
        }
      }

      if (closestId) {
        setActiveSection(closestId);
      }
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          determineActiveSection();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    // Initial evaluation
    determineActiveSection();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [sectionIds, offset]);

  return activeSection;
};
