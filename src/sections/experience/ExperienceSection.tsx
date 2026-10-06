import React, { useState } from 'react';
import { Briefcase, ChevronDown, ChevronUp, MapPin, Calendar, CheckCircle2, ExternalLink } from 'lucide-react';
import { EXPERIENCE_DATA } from './experience.data';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { TechnologyTag } from '../../components/shared/TechnologyTag';
import { Spotlight } from '../../components/effects/Spotlight';

export const ExperienceSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(EXPERIENCE_DATA[0].id);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="experience" className="py-16 lg:py-24 border-t border-[var(--border-color)]">
      <SectionHeading
        kicker="EXPERIENCE & PRACTICAL WORK"
        number="06"
        title="Experience & Practical Work"
        subtitle="Hands-on development roles, technical team leadership, internships, and engineering capstones."
      />

      <div className="space-y-4">
        {EXPERIENCE_DATA.map((exp) => {
          const isExpanded = expandedId === exp.id;
          return (
            <Spotlight key={exp.id} className="rounded-2xl">
              <div
                className={`surface-card rounded-2xl p-6 sm:p-7 transition-all duration-300 ${
                  isExpanded ? 'border-[var(--accent-primary)]/60 shadow-lg' : ''
                }`}
              >
                {/* Header row (always visible) */}
                <div
                  onClick={() => toggleExpand(exp.id)}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer select-none"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-[var(--accent-secondary)]">
                        {exp.type}
                      </span>
                    </div>
                    <h3 className="text-xl font-serif text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-colors">
                      {exp.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-mono text-[var(--text-muted)]">
                      <span className="text-[var(--text-secondary)] font-medium">
                        {exp.organization}
                      </span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </span>
                      {exp.location && (
                        <>
                          <span>·</span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5" />
                            {exp.location}
                          </span>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0 self-end sm:self-center">
                    <button
                      className="p-2 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors"
                      aria-label={isExpanded ? 'Collapse details' : 'Expand details'}
                    >
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Summary teaser */}
                <p className="text-sm text-[var(--text-secondary)] mt-3 leading-relaxed">
                  {exp.summary}
                </p>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="mt-5 pt-5 border-t border-[var(--border-color)] space-y-4 animate-fadeIn">
                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--accent-primary)] mb-2.5">
                        Key Responsibilities & Highlights
                      </h4>
                      <ul className="space-y-2 text-xs sm:text-sm text-[var(--text-secondary)]">
                        {exp.highlights.map((h, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-[var(--accent-secondary)] mt-0.5 shrink-0" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {(exp.verificationUrl || exp.outcome) && (
                      <div className="p-3.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-color)] text-xs text-[var(--text-secondary)] flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[var(--accent-primary)] font-semibold">
                            For Verification:
                          </span>
                          {exp.verificationUrl ? (
                            <a
                              href={exp.verificationUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[var(--accent-primary)]/10 hover:bg-[var(--accent-primary)]/20 text-[var(--accent-primary)] hover:text-white border border-[var(--accent-primary)]/30 font-mono font-medium transition-all"
                            >
                              <span>{exp.verificationLabel || 'Certificate'}</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          ) : (
                            <span>{exp.outcome}</span>
                          )}
                        </div>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {exp.technologies.map((tech) => (
                        <TechnologyTag key={tech} name={tech} variant="subtle" />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </Spotlight>
          );
        })}
      </div>
    </section>
  );
};
