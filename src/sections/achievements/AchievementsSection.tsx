import React from 'react';
import { Trophy, Award, Star, CheckCircle2, Calendar, ExternalLink, ShieldCheck } from 'lucide-react';
import { ACHIEVEMENTS_DATA } from './achievements.data';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { Spotlight } from '../../components/effects/Spotlight';

export const AchievementsSection: React.FC = () => {
  const getAchievementIcon = (id: string, idx: number) => {
    switch (id) {
      case 'accenture-emph-head':
        return <ShieldCheck className="w-5 h-5 text-[#D9AA70]" />;
      case 'tech-synergy-winner':
        return <Trophy className="w-5 h-5 text-[#D9AA70]" />;
      case 'byte-battle':
        return <Award className="w-5 h-5 text-[#D9AA70]" />;
      case 'codextreme-neo':
        return <Star className="w-5 h-5 text-[#A9B69B]" />;
      default:
        return <Trophy className="w-5 h-5 text-[#D9AA70]" />;
    }
  };

  return (
    <section id="achievements" className="py-16 lg:py-24 border-t border-[var(--border-color)]">
      <SectionHeading
        kicker="ACHIEVEMENTS"
        number="08"
        title="Honors & Competitive Milestones"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ACHIEVEMENTS_DATA.map((item, idx) => (
          <Spotlight key={item.id} className="rounded-2xl h-full">
            <div className="surface-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between h-full group">
              <div>
                {/* Card Top: Icon & Rank Badge */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-color)] flex items-center justify-center shrink-0 group-hover:border-[var(--accent-primary)] transition-colors">
                    {getAchievementIcon(item.id, idx)}
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] border border-[var(--accent-primary)]/20 text-xs font-mono font-semibold">
                    {item.rank}
                  </span>
                </div>

                {/* Event & Title */}
                <div className="text-xs font-mono text-[var(--accent-primary)]">
                  {item.event}
                </div>
                <h3 className="text-lg sm:text-xl font-serif text-[var(--text-primary)] mt-1 group-hover:text-[var(--accent-primary)] transition-colors">
                  {item.title}
                </h3>
                <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-muted)] mt-1.5">
                  <span>{item.organization}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {item.date}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-3 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Certificate Verification Note with green circle check */}
              {item.certificateNote && (
                <div className="mt-5 pt-4 border-t border-[var(--border-color)] flex items-center gap-2 text-xs font-mono text-[var(--text-secondary)]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  {item.certificateUrl ? (
                    <a
                      href={item.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[var(--accent-primary)] hover:text-white underline underline-offset-4 font-semibold transition-colors"
                    >
                      <span>{item.certificateNote}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <span>{item.certificateNote}</span>
                  )}
                </div>
              )}
            </div>
          </Spotlight>
        ))}
      </div>
    </section>
  );
};
