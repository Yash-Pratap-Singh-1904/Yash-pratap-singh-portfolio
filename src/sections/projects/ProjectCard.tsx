import React, { useState } from 'react';
import { Github, ExternalLink, ChevronDown, ChevronUp, CheckCircle, Layers } from 'lucide-react';
import { ProjectItem } from '../../types/portfolio.types';
import { Button } from '../../components/ui/Button';
import { TechnologyTag } from '../../components/shared/TechnologyTag';
import { Spotlight } from '../../components/effects/Spotlight';

interface ProjectCardProps {
  project: ProjectItem;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [imgError, setImgError] = useState(false);

  // Render project image or stylized SVG illustrations as fallback
  const renderIllustration = () => {
    if (project.image && !imgError) {
      return (
        <div className="w-full h-48 sm:h-52 rounded-2xl bg-[#0F1012] border border-[var(--border-color)] overflow-hidden relative group-hover:border-[var(--accent-primary)]/60 transition-all duration-300 shadow-inner">
          <img
            src={project.image}
            alt={project.title}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
        </div>
      );
    }

    if (project.illustrationType === 'hospital') {
      return (
        <div className="w-full h-48 sm:h-52 rounded-2xl bg-gradient-to-br from-[#1B1D22] via-[#141518] to-[#0E0F10] border border-[var(--border-color)] flex items-center justify-center p-6 relative overflow-hidden group-hover:border-[var(--accent-primary)]/50 transition-colors">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,170,112,0.1),transparent_70%)]" />
          <svg className="w-36 h-36 text-[var(--accent-primary)] drop-shadow-xl" viewBox="0 0 160 160" fill="none">
            <path d="M80 20L135 52V108L80 140L25 108V52L80 20Z" fill="#1C1E22" stroke="currentColor" strokeWidth="1.5" />
            <path d="M80 20V140" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.4" />
            <path d="M80 20L135 52L80 84L25 52L80 20Z" fill="#26282E" stroke="currentColor" strokeWidth="1.5" />
            <path d="M80 44V60M72 52H88" stroke="#D9AA70" strokeWidth="3.5" strokeLinecap="round" />
            <circle cx="80" cy="80" r="65" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" strokeOpacity="0.3" />
          </svg>
        </div>
      );
    }

    if (project.illustrationType === 'dynamic-memory') {
      return (
        <div className="w-full h-48 sm:h-52 rounded-2xl bg-gradient-to-br from-[#1B1D22] via-[#141518] to-[#0E0F10] border border-[var(--border-color)] flex items-center justify-center p-6 relative overflow-hidden group-hover:border-[var(--accent-primary)]/50 transition-colors">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,170,112,0.15),transparent_70%)]" />
          <svg className="w-36 h-36 text-[var(--accent-primary)] drop-shadow-xl" viewBox="0 0 160 160" fill="none">
            <rect x="25" y="35" width="110" height="90" rx="10" stroke="currentColor" strokeWidth="1.5" fill="#181A1E" />
            <rect x="35" y="48" width="20" height="64" rx="4" fill="#24272D" stroke="#D9AA70" strokeWidth="1.2" />
            <rect x="62" y="48" width="20" height="64" rx="4" fill="#24272D" stroke="#A9B69B" strokeWidth="1.2" />
            <rect x="89" y="48" width="20" height="64" rx="4" fill="#24272D" stroke="#D9AA70" strokeWidth="1.2" />
            <line x1="35" y1="69" x2="55" y2="69" stroke="#D9AA70" strokeWidth="1" strokeOpacity="0.5" />
            <line x1="62" y1="69" x2="82" y2="69" stroke="#A9B69B" strokeWidth="1" strokeOpacity="0.5" />
            <line x1="89" y1="69" x2="109" y2="69" stroke="#D9AA70" strokeWidth="1" strokeOpacity="0.5" />
          </svg>
        </div>
      );
    }

    // Default: medical-prediction
    return (
      <div className="w-full h-48 sm:h-52 rounded-2xl bg-gradient-to-br from-[#1B1D22] via-[#141518] to-[#0E0F10] border border-[var(--border-color)] flex items-center justify-center p-6 relative overflow-hidden group-hover:border-[var(--accent-primary)]/50 transition-colors">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(169,182,155,0.15),transparent_70%)]" />
        <svg className="w-36 h-36 text-[var(--accent-secondary)] drop-shadow-xl" viewBox="0 0 160 160" fill="none">
          <circle cx="80" cy="80" r="50" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
          <circle cx="80" cy="80" r="38" fill="#1E2024" stroke="#D9AA70" strokeWidth="2" />
          <path
            d="M50 80H65L70 70L75 92L82 62L88 88L93 78L97 80H110"
            stroke="#D9AA70"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    );
  };

  return (
    <Spotlight className="rounded-2xl h-full">
      <div className="surface-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between h-full group">
        <div>
          {/* Card Top Header: Number and Date/Status */}
          <div className="flex items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-3">
              <span className="font-serif text-2xl text-[var(--accent-primary)] font-bold">
                {project.number}
              </span>
              <span className="h-4 w-px bg-[var(--border-color)]" />
              <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]">
                {project.date}
              </span>
            </div>
            <span className="text-xs font-mono text-[var(--accent-secondary)]">
              {project.status}
            </span>
          </div>

          {/* Project Title & Subtitle */}
          <h3 className="text-xl sm:text-2xl font-serif text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors leading-snug">
            {project.title}
          </h3>
          <p className="text-xs font-mono text-[var(--accent-primary)] mt-1.5 line-clamp-1">
            {project.subtitle}
          </p>

          {/* Project Image Preview */}
          <div className="my-5">
            {renderIllustration()}
          </div>

          {/* Core Description */}
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed mt-4">
            {project.description}
          </p>

          {/* Optional Metrics Banner (e.g. 84.93% Accuracy on MedPredict) */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="mt-4 p-3.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-color)] grid grid-cols-2 gap-3">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="space-y-0.5">
                  <span className="block text-[11px] font-mono text-[var(--text-muted)] truncate">
                    {m.label}
                  </span>
                  <span className="block text-sm font-semibold font-mono text-[var(--accent-primary)]">
                    {m.value}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Technology Tags */}
          <div className="flex flex-wrap gap-1.5 mt-5">
            {project.techStack.map((tech) => (
              <TechnologyTag key={tech} name={tech} variant="subtle" />
            ))}
          </div>

          {/* Expandable Technical Deep-Dive */}
          {isExpanded && (
            <div className="mt-6 pt-6 border-t border-[var(--border-color)] space-y-5 animate-fadeIn">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--accent-primary)] mb-2.5 flex items-center gap-1.5 font-semibold">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                  Key System Capabilities
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-[var(--text-secondary)]">
                  {project.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2">
                      <span className="text-[var(--accent-primary)] mt-0.5">·</span>
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--accent-primary)] mb-2.5 flex items-center gap-1.5 font-semibold">
                  <Layers className="w-3.5 h-3.5 text-[var(--accent-secondary)]" />
                  Architecture & Personal Contributions
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-[var(--text-secondary)]">
                  {project.contributions.map((item, cIdx) => (
                    <li key={cIdx} className="flex items-start gap-2">
                      <span className="text-[var(--accent-secondary)] mt-0.5">·</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Card Footer Actions */}
        <div className="mt-6 pt-5 border-t border-[var(--border-color)] flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <Button
                variant="outline"
                size="sm"
                asLink
                href={project.githubUrl}
                external
                icon={<Github className="w-3.5 h-3.5" />}
              >
                GitHub
              </Button>
            )}
            {project.liveUrl && (
              <Button
                variant="primary"
                size="sm"
                asLink
                href={project.liveUrl}
                external
                icon={<ExternalLink className="w-3.5 h-3.5" />}
              >
                Live Demo
              </Button>
            )}
          </div>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-xs font-mono text-[var(--text-muted)] hover:text-[var(--accent-primary)] flex items-center gap-1 transition-colors cursor-pointer"
          >
            <span>{isExpanded ? 'Less' : 'View Details'}</span>
            {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>
    </Spotlight>
  );
};
