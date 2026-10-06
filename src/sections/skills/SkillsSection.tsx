import React, { useState } from 'react';
import { Brain, Code, Database, Globe, Sparkles } from 'lucide-react';
import { FEATURED_AI_SKILL, SUPPORTING_SKILL_CATEGORIES } from './skills.data';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { Spotlight } from '../../components/effects/Spotlight';
import { TechnologyTag } from '../../components/shared/TechnologyTag';

export const SkillsSection: React.FC = () => {
  const [aiImgError, setAiImgError] = useState(false);

  const getCategoryIcon = (title: string) => {
    switch (title) {
      case 'Software Development':
        return <Code className="w-5 h-5 text-[var(--accent-primary)]" />;
      case 'Computer Science':
        return <Database className="w-5 h-5 text-[var(--accent-primary)]" />;
      case 'Web & API Development':
        return <Globe className="w-5 h-5 text-[var(--accent-primary)]" />;
      case 'AI & Applied Intelligence':
        return <Sparkles className="w-5 h-5 text-[var(--accent-primary)]" />;
      default:
        return <Brain className="w-5 h-5 text-[var(--accent-primary)]" />;
    }
  };

  return (
    <section id="skills" className="py-16 lg:py-24 border-t border-[var(--border-color)]">
      <SectionHeading
        kicker="SKILLS & CAPABILITIES"
        number="04"
        title="Skills & Capabilities"
        subtitle="Technologies and computer science foundations I use to learn, engineer, and solve complex problems."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
        {/* Featured Left Card: AI / Machine Learning with 3D Neural Brain */}
        <div className="lg:col-span-6 xl:col-span-5 flex flex-col">
          <Spotlight className="h-full rounded-2xl">
            <div className="surface-card rounded-2xl p-6 sm:p-8 h-full flex flex-col justify-between group border-[var(--accent-primary)]/40 shadow-xl">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] border border-[var(--accent-primary)]/30">
                    <Brain className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-serif text-[var(--text-primary)]">
                      {FEATURED_AI_SKILL.title}
                    </h3>
                    <span className="text-xs font-mono text-[var(--accent-primary)]">
                      Core Specialization
                    </span>
                  </div>
                </div>

                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                  {FEATURED_AI_SKILL.description}
                </p>

                {/* AI / Machine Learning Image Preview */}
                <div className="my-4 h-48 sm:h-56 rounded-2xl bg-[#0F1012] border border-[var(--border-color)] flex items-center justify-center relative overflow-hidden group-hover:border-[var(--accent-primary)]/60 transition-colors shadow-inner">
                  {!aiImgError ? (
                    <img
                      src="/images/AI-vs.-Machine-Learning-vs.-Deep-Learning-2.jpg"
                      alt="AI vs Machine Learning vs Deep Learning"
                      onError={() => setAiImgError(true)}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full p-6 bg-gradient-to-b from-[#1C1E23] to-[#121316] flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,170,112,0.18),transparent_65%)]" />

                      <svg
                        className="w-48 h-48 text-[var(--accent-primary)] drop-shadow-2xl animate-pulse-glow"
                        viewBox="0 0 200 200"
                        fill="none"
                      >
                        {/* Outer Brain Lobes Silhouette */}
                        <path
                          d="M60 50C40 60 30 85 32 110C34 135 50 160 75 165C85 167 95 160 100 155C105 160 115 167 125 165C150 160 166 135 168 110C170 85 160 60 140 50C125 42 110 48 100 55C90 48 75 42 60 50Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeDasharray="4 3"
                          fill="#1E2024"
                          fillOpacity="0.8"
                        />

                        {/* Central Synaptic Trunk */}
                        <line x1="100" y1="55" x2="100" y2="155" stroke="currentColor" strokeWidth="2" strokeOpacity="0.4" />

                        {/* Left Hemisphere Synaptic Nodes & Connectors */}
                        <circle cx="55" cy="80" r="5" fill="#D9AA70" />
                        <circle cx="75" cy="70" r="4" fill="#A9B69B" />
                        <circle cx="50" cy="115" r="4.5" fill="#A9B69B" />
                        <circle cx="80" cy="110" r="6" fill="#D9AA70" />
                        <circle cx="65" cy="140" r="4" fill="#D9AA70" />

                        <line x1="55" y1="80" x2="75" y2="70" stroke="#D9AA70" strokeWidth="1.5" />
                        <line x1="55" y1="80" x2="50" y2="115" stroke="#D9AA70" strokeWidth="1.5" />
                        <line x1="75" y1="70" x2="80" y2="110" stroke="#D9AA70" strokeWidth="1.5" />
                        <line x1="50" y1="115" x2="80" y2="110" stroke="#D9AA70" strokeWidth="1.5" />
                        <line x1="80" y1="110" x2="65" y2="140" stroke="#D9AA70" strokeWidth="1.5" />
                        <line x1="80" y1="110" x2="100" y2="110" stroke="#D9AA70" strokeWidth="2" />

                        {/* Right Hemisphere Synaptic Nodes & Connectors */}
                        <circle cx="145" cy="80" r="5" fill="#D9AA70" />
                        <circle cx="125" cy="70" r="4" fill="#A9B69B" />
                        <circle cx="150" cy="115" r="4.5" fill="#A9B69B" />
                        <circle cx="120" cy="110" r="6" fill="#D9AA70" />
                        <circle cx="135" cy="140" r="4" fill="#D9AA70" />

                        <line x1="145" y1="80" x2="125" y2="70" stroke="#D9AA70" strokeWidth="1.5" />
                        <line x1="145" y1="80" x2="150" y2="115" stroke="#D9AA70" strokeWidth="1.5" />
                        <line x1="125" y1="70" x2="120" y2="110" stroke="#D9AA70" strokeWidth="1.5" />
                        <line x1="150" y1="115" x2="120" y2="110" stroke="#D9AA70" strokeWidth="1.5" />
                        <line x1="120" y1="110" x2="135" y2="140" stroke="#D9AA70" strokeWidth="1.5" />
                        <line x1="120" y1="110" x2="100" y2="110" stroke="#D9AA70" strokeWidth="2" />

                        {/* Central Nexus node */}
                        <circle cx="100" cy="110" r="7" fill="#D9AA70" />
                        <circle cx="100" cy="75" r="4" fill="#A9B69B" />
                        <line x1="100" y1="75" x2="100" y2="110" stroke="#D9AA70" strokeWidth="1.5" />
                      </svg>
                    </div>
                  )}
                </div>
              </div>

              {/* Skills Pill Tags */}
              <div className="flex flex-wrap gap-2 pt-4">
                {FEATURED_AI_SKILL.skills.map((skill) => (
                  <TechnologyTag key={skill} name={skill} variant="filled" />
                ))}
              </div>
            </div>
          </Spotlight>
        </div>

        {/* Supporting 4 Skill Categories Grid */}
        <div className="lg:col-span-6 xl:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {SUPPORTING_SKILL_CATEGORIES.map((cat, idx) => (
            <Spotlight key={idx} className="rounded-2xl">
              <div className="surface-card rounded-2xl p-6 h-full flex flex-col justify-between group">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-color)]">
                      {getCategoryIcon(cat.title)}
                    </div>
                    <h4 className="text-lg font-serif text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
                      {cat.title}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {cat.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {cat.skills.map((skill) => (
                    <TechnologyTag key={skill} name={skill} variant="subtle" />
                  ))}
                </div>
              </div>
            </Spotlight>
          ))}
        </div>
      </div>
    </section>
  );
};
