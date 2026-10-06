import React from 'react';
import { MapPin, GraduationCap, Cpu, Calendar } from 'lucide-react';
import { ABOUT_DATA } from './about.data';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { Spotlight } from '../../components/effects/Spotlight';

export const AboutSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'map-pin':
        return <MapPin className="w-5 h-5 text-[var(--accent-primary)]" />;
      case 'graduation-cap':
        return <GraduationCap className="w-5 h-5 text-[var(--accent-primary)]" />;
      case 'cpu':
        return <Cpu className="w-5 h-5 text-[var(--accent-primary)]" />;
      case 'calendar':
        return <Calendar className="w-5 h-5 text-[var(--accent-primary)]" />;
      default:
        return <Cpu className="w-5 h-5 text-[var(--accent-primary)]" />;
    }
  };

  return (
    <section id="about" className="py-16 lg:py-24 border-t border-[var(--border-color)]">
      <div className="space-y-12">
        {/* Section Heading */}
        <SectionHeading
          kicker={ABOUT_DATA.kicker}
          number="02"
          title={ABOUT_DATA.heading}
        />

        {/* Editorial Story Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Main Prose Text */}
          <div className="lg:col-span-8 space-y-5 text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed">
            {ABOUT_DATA.paragraphs.map((para, idx) => (
              <p key={idx} className="[text-wrap:pretty]">
                {para}
              </p>
            ))}

            {/* Quote banner */}
            <div className="mt-8 p-6 rounded-2xl bg-[var(--bg-card)] border-l-4 border-[var(--accent-primary)] border-t border-r border-b border-[var(--border-color)]">
              <p className="font-serif italic text-lg sm:text-xl text-[var(--text-primary)]">
                “I’m drawn to problems where software engineering discipline and applied AI meet — building systems that aren't just intelligent, but resilient and maintainable.”
              </p>
              <p className="mt-2 text-xs font-mono text-[var(--accent-primary)] uppercase tracking-wider">
                — Yash Pratap Singh
              </p>
            </div>
          </div>

          {/* Quick Info Grid */}
          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5">
            {ABOUT_DATA.infoCards.map((card, idx) => (
              <Spotlight key={idx} className="rounded-xl">
                <div className="surface-card rounded-xl p-4 sm:p-5 flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-color)] shrink-0">
                    {getIcon(card.icon)}
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider">
                      {card.label}
                    </div>
                    <div className="text-sm font-semibold text-[var(--text-primary)] mt-1 truncate">
                      {card.value}
                    </div>
                  </div>
                </div>
              </Spotlight>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
