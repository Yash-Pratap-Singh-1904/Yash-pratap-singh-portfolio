import React, { useState } from 'react';
import { ArrowRight, Download, Github, CheckCircle2, Sparkles, AlertCircle } from 'lucide-react';
import { HOME_DATA } from './home.data';
import { SITE_CONFIG } from '../../data/site.data';
import { Button } from '../../components/ui/Button';
import { IconButton } from '../../components/ui/IconButton';
import { ProfileImage } from '../../components/shared/ProfileImage';
import { BackgroundPattern } from '../../components/effects/BackgroundPattern';
import { Spotlight } from '../../components/effects/Spotlight';
import { handleDownloadResume } from '../../utils/downloadResume';

export const HomeSection: React.FC = () => {
  const [downloadNotice, setDownloadNotice] = useState<string | null>(null);

  const onDownloadClick = () => {
    handleDownloadResume(
      () => {
        setDownloadNotice('Resume download initiated successfully!');
        setTimeout(() => setDownloadNotice(null), 4000);
      },
      () => {
        setDownloadNotice('Resume file is being packaged. Please check back shortly.');
        setTimeout(() => setDownloadNotice(null), 4000);
      }
    );
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex flex-col justify-center pt-8 pb-16 lg:py-20 overflow-hidden">
      {/* Background ambient lighting and pattern */}
      <BackgroundPattern variant="dots" />
      <BackgroundPattern variant="radial-glow" />

      <div className="relative z-10 w-full">
        {/* Main Grid: Left copy, Right Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column (Content) */}
          <div className="lg:col-span-7 xl:col-span-7 space-y-6">
            {/* Kicker badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--border-color)] bg-[var(--bg-elevated)]/80 backdrop-blur-sm text-xs font-mono text-[var(--accent-primary)]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{HOME_DATA.kicker}</span>
            </div>

            {/* Editorial Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-serif text-[var(--text-primary)] tracking-tight leading-[1.12] [text-wrap:balance]">
                {HOME_DATA.greeting}
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif text-[var(--accent-primary)] font-medium tracking-tight leading-snug [text-wrap:balance]">
                {HOME_DATA.headline}
              </h2>
            </div>

            {/* Subtitle / Bio */}
            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-xl [text-wrap:pretty]">
              {HOME_DATA.subtext}
            </p>

            {/* Availability status */}
            <div className="flex items-center gap-2 text-xs font-mono text-[var(--accent-secondary)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-secondary)] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent-secondary)]" />
              </span>
              <span>{HOME_DATA.availability}</span>
            </div>

            {/* Actions: Explore, Download Resume, GitHub */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button
                variant="primary"
                size="md"
                asLink
                href="#projects"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                {HOME_DATA.ctaPrimary}
              </Button>

              <Button
                variant="secondary"
                size="md"
                onClick={onDownloadClick}
                icon={<Download className="w-4 h-4" />}
              >
                {HOME_DATA.ctaSecondary}
              </Button>

              <IconButton
                icon={<Github className="w-4 h-4" />}
                label="GitHub Profile"
                asLink
                href={SITE_CONFIG.githubUrl}
                external
                size="md"
                variant="outline"
              />
            </div>

            {/* Download feedback notification */}
            {downloadNotice && (
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[var(--bg-elevated)] border border-[var(--accent-primary)]/40 text-xs font-mono text-[var(--accent-primary)] animate-fadeIn">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{downloadNotice}</span>
              </div>
            )}
          </div>

          {/* Right Column (Hero Visual / Portrait) */}
          <div className="lg:col-span-5 xl:col-span-5 flex justify-center lg:justify-end">
            <ProfileImage size="hero" className="animate-float-slow" />
          </div>
        </div>

        {/* Bottom Hero Metric Cards Grid (Matching reference mockup) */}
        <div className="mt-14 lg:mt-20 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {HOME_DATA.metrics.map((metric, idx) => (
            <Spotlight key={idx} className="rounded-xl">
              <div className="surface-card rounded-xl p-4 sm:p-5 flex flex-col justify-between h-full group hover:border-[var(--accent-primary)] transition-all">
                <div className="text-2xl sm:text-3xl font-serif text-[var(--accent-primary)] font-bold tracking-tight">
                  {metric.value}
                </div>
                <div className="mt-2">
                  <div className="text-xs sm:text-sm font-medium text-[var(--text-primary)]">
                    {metric.label}
                  </div>
                  {metric.subtext && (
                    <div className="text-[11px] font-mono text-[var(--text-muted)] mt-0.5 truncate">
                      {metric.subtext}
                    </div>
                  )}
                </div>
              </div>
            </Spotlight>
          ))}
        </div>
      </div>
    </section>
  );
};
