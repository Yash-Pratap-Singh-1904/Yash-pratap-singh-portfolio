import React from 'react';
import { ArrowRight, CheckCircle2, Search, Cpu, RefreshCw } from 'lucide-react';
import { APPROACH_DATA } from './approach.data';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { Spotlight } from '../../components/effects/Spotlight';

export const ApproachSection: React.FC = () => {
  const getStepIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Search className="w-5 h-5 text-[var(--accent-primary)]" />;
      case 1:
        return <Cpu className="w-5 h-5 text-[var(--accent-primary)]" />;
      case 2:
        return <RefreshCw className="w-5 h-5 text-[var(--accent-secondary)]" />;
      default:
        return <Cpu className="w-5 h-5 text-[var(--accent-primary)]" />;
    }
  };

  return (
    <section id="approach" className="py-16 lg:py-24 border-t border-[var(--border-color)]">
      <SectionHeading
        kicker="HOW I APPROACH PROBLEMS"
        number="10"
        title="Engineering Methodology"
        subtitle="A disciplined, repeatable process that guides how I deconstruct ambiguous requirements into robust, high-performance software."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
        {APPROACH_DATA.map((step, idx) => (
          <Spotlight key={step.number} className="rounded-2xl h-full">
            <div className="surface-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between h-full group relative">
              <div>
                {/* Step Number & Icon */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <span className="font-serif text-3xl font-bold text-[var(--accent-primary)]">
                    {step.number}
                  </span>
                  <div className="p-2.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-color)] group-hover:border-[var(--accent-primary)] transition-colors">
                    {getStepIcon(idx)}
                  </div>
                </div>

                {/* Step Title */}
                <h3 className="text-xl font-serif text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
                  {step.title}
                </h3>

                {/* Short Description */}
                <p className="text-sm text-[var(--text-secondary)] mt-2 leading-relaxed">
                  {step.shortDescription}
                </p>

                {/* Detailed checklist */}
                <ul className="mt-5 space-y-2.5 pt-4 border-t border-[var(--border-color)] text-xs text-[var(--text-secondary)]">
                  {step.detailedPoints.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2">
                      <span className="text-[var(--accent-primary)] font-bold mt-0.5">·</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Step indicator footer */}
              <div className="mt-6 pt-4 border-t border-[var(--border-color)] flex items-center justify-between text-[11px] font-mono text-[var(--text-muted)]">
                <span>Phase {step.number} of 03</span>
                {idx < 2 && (
                  <span className="hidden md:inline-flex items-center gap-1 text-[var(--accent-primary)]">
                    Proceed <ArrowRight className="w-3 h-3" />
                  </span>
                )}
              </div>
            </div>
          </Spotlight>
        ))}
      </div>
    </section>
  );
};
