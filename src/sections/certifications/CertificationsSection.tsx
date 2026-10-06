import React, { useState } from 'react';
import { Award, BookOpen, Calendar, ExternalLink, Wrench } from 'lucide-react';
import { CERTIFICATIONS_DATA } from './certifications.data';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { TechnologyTag } from '../../components/shared/TechnologyTag';
import { Spotlight } from '../../components/effects/Spotlight';

export const CertificationsSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'All' | 'Certification' | 'Course' | 'Workshop'>('All');

  const filteredCerts = CERTIFICATIONS_DATA.filter((item) => {
    if (selectedFilter === 'All') return true;
    return item.category === selectedFilter;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Certification':
        return <Award className="w-4 h-4 text-[var(--accent-primary)]" />;
      case 'Workshop':
        return <Wrench className="w-4 h-4 text-[var(--accent-primary)]" />;
      default:
        return <BookOpen className="w-4 h-4 text-[var(--accent-secondary)]" />;
    }
  };

  return (
    <section id="certifications" className="py-16 lg:py-24 border-t border-[var(--border-color)]">
      <SectionHeading
        kicker="CERTIFICATIONS & CONTINUOUS LEARNING"
        number="09"
        title="Certifications & Learning"
      />

      {/* Filter Tabs */}
      <div className="flex items-center gap-1.5 p-1 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)] mb-8 max-w-fit">
        {(['All', 'Certification', 'Course', 'Workshop'] as const).map((filter) => (
          <button
            key={filter}
            onClick={() => setSelectedFilter(filter)}
            className={`px-3.5 py-1.5 rounded-md text-xs font-medium transition-all cursor-pointer ${
              selectedFilter === filter
                ? 'bg-[var(--accent-primary)] text-[var(--bg-main)] font-semibold shadow-sm'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
            }`}
          >
            {filter === 'All' ? 'All Credentials' : `${filter}s`}
          </button>
        ))}
      </div>

      {/* Cards List / Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {filteredCerts.map((cert) => (
          <Spotlight key={cert.id} className="rounded-xl h-full">
            <div className="surface-card rounded-xl p-5 sm:p-6 flex flex-col justify-between h-full group">
              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-color)] flex items-center justify-center shrink-0">
                      {getCategoryIcon(cert.category)}
                    </div>
                    <span className="text-xs font-mono text-[var(--accent-primary)] font-semibold">
                      {cert.issuer}
                    </span>
                  </div>

                  {/* Right Upper Corner Box attached to Certificate Link */}
                  {cert.certificateUrl ? (
                    <a
                      href={cert.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`View ${cert.name} certificate`}
                      className="inline-flex items-center gap-1.5 text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-[var(--bg-elevated)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)]/60 hover:bg-[var(--accent-primary)]/10 transition-all cursor-pointer group/badge shadow-sm"
                    >
                      <span>{cert.category}</span>
                      <ExternalLink className="w-3 h-3 text-[var(--accent-primary)] opacity-70 group-hover/badge:opacity-100 transition-opacity" />
                    </a>
                  ) : (
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-[var(--bg-elevated)] border border-[var(--border-color)] text-[var(--text-muted)]">
                      {cert.category}
                    </span>
                  )}
                </div>

                <h3 className="text-base sm:text-lg font-serif text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors leading-snug">
                  {cert.name}
                </h3>

                <div className="flex items-center gap-1.5 text-xs font-mono text-[var(--text-muted)] mt-1.5">
                  <Calendar className="w-3 h-3" />
                  <span>Completed: {cert.issueDate}</span>
                </div>

                {cert.description && (
                  <p className="text-xs text-[var(--text-secondary)] mt-2.5 leading-relaxed">
                    {cert.description}
                  </p>
                )}
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-[var(--border-color)]">
                {cert.skillsLearned.map((skill) => (
                  <TechnologyTag key={skill} name={skill} variant="subtle" />
                ))}
              </div>
            </div>
          </Spotlight>
        ))}
      </div>
    </section>
  );
};
