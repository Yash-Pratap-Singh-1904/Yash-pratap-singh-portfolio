import React, { useState } from 'react';
import { SITE_CONFIG } from '../../data/site.data';

interface ProfileImageProps {
  size?: 'sm' | 'md' | 'lg' | 'hero';
  className?: string;
}

export const ProfileImage: React.FC<ProfileImageProps> = ({
  size = 'md',
  className = '',
}) => {
  const [imageError, setImageError] = useState(false);

  const sizeClasses = {
    sm: 'w-10 h-10 rounded-full',
    md: 'w-16 h-16 rounded-full',
    lg: 'w-24 h-24 rounded-2xl',
    hero: 'w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px] aspect-[4/5] rounded-3xl',
  };

  return (
    <div className={`relative group select-none ${className}`}>
      {/* Outer ambient glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[var(--accent-primary)]/25 via-[var(--accent-secondary)]/15 to-[var(--accent-primary)]/15 rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition duration-700" />

      {/* Main image container */}
      <div
        className={`relative overflow-hidden border border-[var(--border-color)] bg-[var(--bg-elevated)] shadow-2xl transition-all duration-300 group-hover:border-[var(--accent-primary)]/70 ${sizeClasses[size]}`}
      >
        {/* Actual photo from Google Drive */}
        {!imageError ? (
          <img
            src="/images/yash-portrait.jpg"
            alt={SITE_CONFIG.name}
            onError={() => setImageError(true)}
            className="w-full h-full object-cover object-center filter contrast-[102%] group-hover:scale-[1.02] transition-all duration-500"
          />
        ) : (
          /* High-fidelity Vector Fallback if network drops */
          <div className="w-full h-full flex flex-col items-center justify-between p-6 bg-gradient-to-b from-[#1C1E23] via-[#141518] to-[#0E0F12] text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(217,170,112,0.18),transparent_70%)]" />
            <div className="w-full flex-1 flex items-center justify-center relative z-10 pt-2">
              <svg
                className="w-48 h-48 drop-shadow-2xl"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="100" cy="100" r="88" fill="#181A1E" stroke="#D9AA70" strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.4" />
                <path d="M38 185C38 148 65 140 100 140C135 140 162 148 162 185" fill="#F4F4F6" stroke="#D1D5DB" strokeWidth="2" />
                <path d="M85 140L100 162L115 140" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="1.5" />
                <path d="M88 140L96 185" stroke="#1D4ED8" strokeWidth="7" strokeLinecap="round" />
                <path d="M112 140L104 185" stroke="#1D4ED8" strokeWidth="7" strokeLinecap="round" />
                <rect x="91" y="150" width="5" height="12" fill="#F97316" rx="1" />
                <rect x="104" y="150" width="5" height="12" fill="#F97316" rx="1" />
                <path d="M86 122V142C86 148 114 148 114 142V122" fill="#C68B59" />
                <ellipse cx="100" cy="98" rx="36" ry="42" fill="#D4A373" />
                <path d="M62 90C60 62 72 44 100 44C128 44 140 62 138 90C132 82 126 78 118 78C108 78 95 84 82 82C74 81 68 85 62 90Z" fill="#1C1816" />
                <ellipse cx="83" cy="93" rx="4" ry="4.5" fill="#1C1816" />
                <ellipse cx="117" cy="93" rx="4" ry="4.5" fill="#1C1816" />
                <rect x="71" y="86" width="24" height="16" rx="5" stroke="#1A1817" strokeWidth="2.5" fill="none" />
                <rect x="105" y="86" width="24" height="16" rx="5" stroke="#1A1817" strokeWidth="2.5" fill="none" />
                <line x1="95" y1="92" x2="105" y2="92" stroke="#1A1817" strokeWidth="2.5" />
                <path d="M87 117C92 114 98 114 100 116C102 114 108 114 113 117C109 120 91 120 87 117Z" fill="#1C1816" />
                <path d="M92 122C96 125 104 125 108 122" stroke="#A0522D" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        )}

        {/* Identity card info overlay at bottom (Clean presentation without signature) */}
        {size === 'hero' && (
          <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/95 via-black/60 to-transparent p-5 pt-14 text-left pointer-events-none">
            <p className="font-serif text-xl font-bold text-white drop-shadow-md">
              {SITE_CONFIG.name}
            </p>
            <p className="text-xs text-[var(--accent-primary)] font-mono tracking-wider mt-0.5 font-medium drop-shadow-sm">
              {SITE_CONFIG.role}
            </p>
            <div className="flex items-center gap-1.5 mt-1.5 drop-shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
              </span>
              <span className="text-[11px] text-[var(--accent-secondary)] font-mono tracking-wider">
                {SITE_CONFIG.tagline}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
