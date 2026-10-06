import React, { useState } from 'react';
import {
  Download,
  FileText,
  ExternalLink,
  CheckCircle2,
  Eye,
  X,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Sparkles,
} from 'lucide-react';
import { RESUME_DATA } from './resume.data';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { Button } from '../../components/ui/Button';
import { Spotlight } from '../../components/effects/Spotlight';
import { handleDownloadResume, handleViewResume, RESUME_PATH } from '../../utils/downloadResume';

export const ResumeSection: React.FC = () => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState<number>(100);

  const onDownload = () => {
    handleDownloadResume(
      () => {
        setDownloadSuccess(true);
        setTimeout(() => setDownloadSuccess(false), 4000);
      },
      () => {
        setDownloadSuccess(false);
      }
    );
  };

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 15, 160));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 15, 70));
  const handleResetZoom = () => setZoomLevel(100);

  return (
    <section id="resume" className="py-16 lg:py-24 border-t border-[var(--border-color)]">
      <SectionHeading
        kicker={RESUME_DATA.kicker}
        number="11"
        title="Resume & Verified Curriculum Vitae"
      />

      <Spotlight className="rounded-2xl">
        <div className="surface-card rounded-2xl p-6 sm:p-10 border-[var(--accent-primary)]/40 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Quick highlights */}
            <div className="lg:col-span-8 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] text-xs font-mono font-semibold border border-[var(--accent-primary)]/30">
                  {RESUME_DATA.lastUpdated}
                </span>
                <span className="text-xs font-mono text-[var(--text-muted)]">
                  Format: PDF (Verified Academic Transcript & Credentials)
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif text-[var(--text-primary)]">
                Yash Pratap Singh — Technical Profile
              </h3>

              {/* Bullet Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {RESUME_DATA.summaryBullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-secondary)]">
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent-primary)] shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons: Download PDF, Preview & Open in New Tab */}
              <div className="flex flex-wrap items-center gap-3 pt-4">
                <Button
                  variant="primary"
                  size="md"
                  onClick={onDownload}
                  icon={<Download className="w-4 h-4" />}
                >
                  Download Resume PDF
                </Button>

                <Button
                  variant="outline"
                  size="md"
                  onClick={() => setIsPreviewOpen(true)}
                  icon={<Eye className="w-4 h-4" />}
                >
                  Resume Preview
                </Button>

                <Button
                  variant="outline"
                  size="md"
                  onClick={handleViewResume}
                  icon={<ExternalLink className="w-4 h-4" />}
                >
                  Open in New Tab
                </Button>
              </div>

              {downloadSuccess && (
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--accent-primary)] text-xs font-mono text-[var(--accent-primary)] animate-fadeIn">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Resume download triggered! Check your downloads folder.</span>
                </div>
              )}
            </div>

            {/* Right Column: Mini Document Visual / Preview Trigger with Real Resume Image */}
            <div className="lg:col-span-4 flex justify-center">
              <div
                onClick={() => setIsPreviewOpen(true)}
                className="w-full max-w-[260px] rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-color)] overflow-hidden shadow-2xl group cursor-pointer hover:border-[var(--accent-primary)] transition-all hover:-translate-y-1 relative"
                title="Click to view full resume document"
              >
                {/* Header bar of mini document */}
                <div className="p-3 bg-[var(--bg-card)] border-b border-[var(--border-color)] flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
                    <span className="text-[11px] font-mono text-[var(--text-secondary)] font-medium truncate max-w-[140px]">
                      Yash_Resume.pdf
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] font-semibold">
                    Page 1/1
                  </span>
                </div>

                {/* Actual Miniature Render of Resume */}
                <div className="relative aspect-[1/1.35] w-full overflow-hidden bg-white">
                  <img
                    src="/resume/resume-page-1.png?v=20261005"
                    alt="Yash Pratap Singh Resume Preview"
                    className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity"
                    loading="lazy"
                  />
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-elevated)]/90 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Footer Click Prompt */}
                <div className="p-2.5 text-center bg-[var(--bg-card)] border-t border-[var(--border-color)]">
                  <span className="text-[11px] font-mono text-[var(--accent-primary)] group-hover:underline flex items-center justify-center gap-1 font-medium">
                    <Eye className="w-3 h-3" />
                    Click to Expand Preview
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Spotlight>

      {/* Full Resume Preview Modal */}
      {isPreviewOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
          onClick={() => setIsPreviewOpen(false)}
        >
          <div
            className="w-full max-w-4xl max-h-[94vh] bg-[var(--bg-main)] border border-[var(--border-color)] rounded-2xl shadow-2xl flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Bar */}
            <div className="p-3 sm:p-4 border-b border-[var(--border-color)] flex items-center justify-between bg-[var(--bg-card)] gap-2 flex-wrap">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[var(--accent-primary)]/10 flex items-center justify-center">
                  <FileText className="w-4 h-4 text-[var(--accent-primary)]" />
                </div>
                <div>
                  <h4 className="font-serif text-base sm:text-lg text-[var(--text-primary)] font-medium leading-none">
                    Yash Pratap Singh — Verified Curriculum Vitae
                  </h4>
                  <span className="text-[11px] font-mono text-[var(--text-muted)] mt-1 inline-block">
                    Official Engineering Profile • Page 1 of 1
                  </span>
                </div>
              </div>

              {/* Toolbar Controls: Zoom & Actions */}
              <div className="flex items-center gap-1.5 sm:gap-2">
                {/* Zoom Controls */}
                <div className="hidden sm:flex items-center gap-1 bg-[var(--bg-elevated)] border border-[var(--border-color)] rounded-lg p-1 mr-1">
                  <button
                    onClick={handleZoomOut}
                    className="p-1 rounded text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card)] transition-colors cursor-pointer"
                    title="Zoom Out"
                    aria-label="Zoom Out"
                  >
                    <ZoomOut className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-[11px] font-mono text-[var(--text-secondary)] px-1.5 min-w-[42px] text-center">
                    {zoomLevel}%
                  </span>
                  <button
                    onClick={handleZoomIn}
                    className="p-1 rounded text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card)] transition-colors cursor-pointer"
                    title="Zoom In"
                    aria-label="Zoom In"
                  >
                    <ZoomIn className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={handleResetZoom}
                    className="p-1 rounded text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card)] transition-colors cursor-pointer ml-0.5"
                    title="Reset Zoom (100%)"
                    aria-label="Reset Zoom"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </div>

                <Button
                  variant="primary"
                  size="sm"
                  onClick={onDownload}
                  icon={<Download className="w-3.5 h-3.5" />}
                >
                  Download PDF
                </Button>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleViewResume}
                  icon={<ExternalLink className="w-3.5 h-3.5" />}
                >
                  Open in New Tab
                </Button>

                <button
                  onClick={() => setIsPreviewOpen(false)}
                  className="p-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] transition-colors ml-1 cursor-pointer"
                  aria-label="Close Preview"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Document Content - Sharp, High-Res Image Preview that renders reliably everywhere */}
            <div className="flex-1 w-full bg-[#1e2022] p-4 sm:p-8 flex flex-col items-center overflow-auto max-h-[calc(94vh-80px)] custom-scrollbar">
              <div
                className="transition-transform duration-200 ease-out origin-top shadow-[0_10px_35px_rgba(0,0,0,0.5)] rounded-sm bg-white overflow-hidden"
                style={{
                  width: `${Math.round(760 * (zoomLevel / 100))}px`,
                  maxWidth: zoomLevel <= 100 ? '100%' : 'none',
                }}
              >
                <img
                  src="/resume/resume-page-1.png?v=20261005"
                  alt="Yash Pratap Singh Official Curriculum Vitae"
                  className="w-full h-auto block select-none pointer-events-auto"
                />
              </div>

              {/* Informational badge */}
              <div className="mt-4 flex items-center gap-2 text-[11px] font-mono text-zinc-400 bg-zinc-900/80 px-3.5 py-1.5 rounded-full border border-zinc-700/60 shadow-lg">
                <Sparkles className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
                <span>Verified 1-Page Engineering Resume • Built for Technical Roles</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
