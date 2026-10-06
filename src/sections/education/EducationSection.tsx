import React from 'react';
import { GraduationCap, MapPin, Calendar, Award, BookOpen } from 'lucide-react';
import { EDUCATION_DATA } from './education.data';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { Spotlight } from '../../components/effects/Spotlight';
import { TechnologyTag } from '../../components/shared/TechnologyTag';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-16 lg:py-24 border-t border-[var(--border-color)]">
      <SectionHeading
        kicker="ACADEMIC JOURNEY"
        number="07"
        title="Education & Foundations"
        subtitle="Formal computer science education, academic milestones, and core disciplinary coursework."
      />

      <div className="relative pl-6 sm:pl-8 border-l border-[var(--border-color)] space-y-10 sm:space-y-12">
        {EDUCATION_DATA.map((edu, idx) => (
          <div key={edu.id} className="relative group">
            {/* Timeline node */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[var(--bg-main)] border-2 border-[var(--accent-primary)] group-hover:scale-125 transition-transform" />

            <Spotlight className="rounded-2xl">
              <div className="surface-card rounded-2xl p-6 sm:p-8">
                {/* Degree & Institution */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-serif text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
                      {edu.institution}
                    </h3>
                    <div className="text-sm font-medium text-[var(--accent-primary)] mt-0.5">
                      {edu.degree}
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] border border-[var(--accent-primary)]/20 text-xs font-mono font-semibold shrink-0">
                    <Award className="w-3.5 h-3.5" />
                    <span>{edu.cgpaOrScore}</span>
                  </div>
                </div>

                {/* Metadata row */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-mono text-[var(--text-muted)] my-3">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {edu.period}
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    {edu.location}
                  </span>
                  <span>·</span>
                  <span className="text-[var(--accent-secondary)]">{edu.currentStatus}</span>
                </div>

                {/* Highlights */}
                <ul className="mt-4 space-y-2 text-xs sm:text-sm text-[var(--text-secondary)]">
                  {edu.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2">
                      <span className="text-[var(--accent-primary)] mt-1">·</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Courses */}
                {edu.courses && edu.courses.length > 0 && (
                  <div className="mt-5 pt-4 border-t border-[var(--border-color)]">
                    <div className="text-xs font-mono text-[var(--text-muted)] mb-2 flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
                      Relevant Coursework
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.courses.map((course) => (
                        <TechnologyTag key={course} name={course} variant="subtle" />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </Spotlight>
          </div>
        ))}
      </div>
    </section>
  );
};
