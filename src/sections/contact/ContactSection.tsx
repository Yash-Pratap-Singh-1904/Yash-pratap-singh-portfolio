import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, ArrowUpRight } from 'lucide-react';
import { CONTACT_DATA } from './contact.data';
import { SITE_CONFIG } from '../../data/site.data';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { Button } from '../../components/ui/Button';
import { ProfileImage } from '../../components/shared/ProfileImage';
import { SocialLinks } from '../../components/shared/SocialLinks';
import { Spotlight } from '../../components/effects/Spotlight';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: CONTACT_DATA.subjects[0],
    message: '',
  });

  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [submittedStatus, setSubmittedStatus] = useState<'idle' | 'success' | 'client-redirect'>('idle');

  const validate = () => {
    const errors: { [key: string]: string } = {};
    if (!formData.name.trim()) errors.name = 'Please provide your full name.';
    if (!formData.email.trim()) {
      errors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address format.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errors.message = 'Please provide a message with at least 10 characters.';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Direct mailto launcher with sanitized parameters
    const subjectEncoded = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject} - from ${formData.name}`);
    const bodyEncoded = encodeURIComponent(
      `Hello Yash,\n\nName: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}\n`
    );

    const mailtoUrl = `mailto:${SITE_CONFIG.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;
    
    // Trigger user's mail client
    window.location.href = mailtoUrl;

    setSubmittedStatus('client-redirect');
  };

  return (
    <section id="contact" className="py-16 lg:py-24 border-t border-[var(--border-color)]">
      <SectionHeading
        kicker={CONTACT_DATA.kicker}
        number="12"
        title="Get in Touch"
        subtitle={CONTACT_DATA.subheading}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Direct Info & Social */}
        <div className="lg:col-span-5 space-y-6">
          <Spotlight className="rounded-2xl">
            <div className="surface-card rounded-2xl p-6 sm:p-8 space-y-6">
              <div className="flex items-center gap-4">
                <ProfileImage size="sm" />
                <div>
                  <h3 className="text-lg font-serif text-[var(--text-primary)]">
                    {SITE_CONFIG.name}
                  </h3>
                  <p className="text-xs font-mono text-[var(--accent-primary)]">
                    {SITE_CONFIG.role}
                  </p>
                  <p className="text-[11px] font-mono text-[var(--accent-secondary)] mt-0.5 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
                    <span>{SITE_CONFIG.tagline}</span>
                  </p>
                </div>
              </div>

              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Whether you have an internship position, an applied AI project, or want to discuss machine learning systems, my inbox is always open.
              </p>

              {/* Direct channels */}
              <div className="space-y-3 pt-2 text-xs font-mono">
                <a
                  href={`mailto:${CONTACT_DATA.email}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-color)] text-[var(--text-primary)] hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] transition-colors group"
                >
                  <Mail className="w-4 h-4 text-[var(--accent-primary)] shrink-0" />
                  <span className="truncate">{CONTACT_DATA.email}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-auto opacity-60 group-hover:opacity-100" />
                </a>

                <a
                  href={`tel:${CONTACT_DATA.phone}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-color)] text-[var(--text-primary)] hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] transition-colors group"
                >
                  <Phone className="w-4 h-4 text-[var(--accent-primary)] shrink-0" />
                  <span className="truncate">{CONTACT_DATA.phone}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-auto opacity-60 group-hover:opacity-100" />
                </a>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-color)] text-[var(--text-secondary)]">
                  <MapPin className="w-4 h-4 text-[var(--accent-secondary)] shrink-0" />
                  <span className="truncate">Lovely Professional University, Punjab</span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-[var(--border-color)]">
                <div className="text-xs font-mono text-[var(--text-muted)] mb-3">
                  Verified Social Channels
                </div>
                <SocialLinks size="md" variant="secondary" />
              </div>
            </div>
          </Spotlight>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <Spotlight className="rounded-2xl">
            <div className="surface-card rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl font-serif text-[var(--text-primary)] mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs text-[var(--text-secondary)] mb-6">
                Fill in your details below and your preferred email client will open with this message ready to deliver directly to Yash.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono text-[var(--text-primary)] mb-1.5">
                    Your Name <span className="text-[var(--accent-primary)]">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Morgan"
                    className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-color)] text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-primary)] focus:ring-1 focus:ring-[var(--accent-primary)] transition-colors"
                  />
                  {formErrors.name && (
                    <span className="text-[11px] font-mono text-rose-400 mt-1 block">
                      {formErrors.name}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-mono text-[var(--text-primary)] mb-1.5">
                    Email Address <span className="text-[var(--accent-primary)]">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. alex@example.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-color)] text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-primary)] focus:ring-1 focus:ring-[var(--accent-primary)] transition-colors"
                  />
                  {formErrors.email && (
                    <span className="text-[11px] font-mono text-rose-400 mt-1 block">
                      {formErrors.email}
                    </span>
                  )}
                </div>

                {/* Subject Selector */}
                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-mono text-[var(--text-primary)] mb-1.5">
                    Subject / Discussion Topic
                  </label>
                  <select
                    id="contact-subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-color)] text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-primary)] focus:ring-1 focus:ring-[var(--accent-primary)] transition-colors cursor-pointer"
                  >
                    {CONTACT_DATA.subjects.map((subj) => (
                      <option key={subj} value={subj} className="bg-[var(--bg-card)] text-[var(--text-primary)]">
                        {subj}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono text-[var(--text-primary)] mb-1.5">
                    Message <span className="text-[var(--accent-primary)]">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project, timeline, or opportunities..."
                    className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-color)] text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-primary)] focus:ring-1 focus:ring-[var(--accent-primary)] transition-colors resize-y min-h-[110px]"
                  />
                  {formErrors.message && (
                    <span className="text-[11px] font-mono text-rose-400 mt-1 block">
                      {formErrors.message}
                    </span>
                  )}
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    icon={<Send className="w-4 h-4" />}
                    className="w-full py-3"
                  >
                    Send Message via Email
                  </Button>
                </div>

                {/* Status Notice */}
                {submittedStatus === 'client-redirect' && (
                  <div className="p-3.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--accent-primary)]/40 text-xs font-mono text-[var(--accent-primary)] flex items-start gap-2.5 animate-fadeIn">
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                    <div>
                      <span>
                        Your email application has been invoked with your pre-filled inquiry. You can also reach out anytime at{' '}
                        <strong className="underline">{SITE_CONFIG.email}</strong>.
                      </span>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </Spotlight>
        </div>
      </div>
    </section>
  );
};
