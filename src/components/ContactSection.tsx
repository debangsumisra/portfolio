import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Copy,
  Check,
  Sparkles,
  ArrowUpRight,
  MessageSquare,
  Clock,
  ExternalLink,
  Laptop,
} from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../data/portfolioData.ts';

interface ContactSectionProps {
  onCopyText: (text: string, label: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onCopyText }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [mailProvider, setMailProvider] = useState<'gmail' | 'default'>('gmail');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedDraft, setCopiedDraft] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    onCopyText(PERSONAL_INFO.email, 'Email address');
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    onCopyText(PERSONAL_INFO.phone, 'Phone number');
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const getFullSubject = () => {
    return formData.subject.trim()
      ? `[Portfolio Inquiry] ${formData.subject.trim()}`
      : `[Portfolio Inquiry] Message from ${formData.name.trim() || 'Visitor'}`;
  };

  const getFullBody = () => {
    return `Hi Debangsu,

${formData.message.trim()}

----------------------------------------
Sender Name: ${formData.name.trim()}
Sender Email: ${formData.email.trim()}
Sent via: Debangsu Misra Portfolio Website`;
  };

  const getGmailUrl = () => {
    const subject = encodeURIComponent(getFullSubject());
    const body = encodeURIComponent(getFullBody());
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      PERSONAL_INFO.email,
    )}&su=${subject}&body=${body}`;
  };

  const getMailtoUrl = () => {
    const subject = encodeURIComponent(getFullSubject());
    const body = encodeURIComponent(getFullBody());
    return `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return;
    }

    setIsSubmitting(true);

    const targetUrl = mailProvider === 'gmail' ? getGmailUrl() : getMailtoUrl();

    // Use a reliable link trigger that works inside iframes and across mobile/desktop
    const anchor = document.createElement('a');
    anchor.href = targetUrl;
    anchor.target = mailProvider === 'gmail' ? '_blank' : '_self';
    anchor.rel = 'noopener noreferrer';
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 400);
  };

  const handleCopyDraft = () => {
    const draftText = `To: ${PERSONAL_INFO.email}\nSubject: ${getFullSubject()}\n\n${getFullBody()}`;
    navigator.clipboard.writeText(draftText);
    setCopiedDraft(true);
    onCopyText(draftText, 'Message draft');
    setTimeout(() => setCopiedDraft(false), 2000);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
            <Sparkles className="w-4 h-4" />
            <span>Direct Channels</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Get In Touch
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Send a message directly to my personal email (<span className="text-cyan-600 dark:text-cyan-400 font-mono font-medium">{PERSONAL_INFO.email}</span>). I typically respond within 24 hours.
          </p>
        </div>

        {/* Contact Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info Cards (col-span-5) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Direct Email Card with 1-click Compose */}
            <div className="rounded-2xl bg-white dark:bg-[#0b0f19]/90 border border-slate-200 dark:border-white/10 hover:border-cyan-500/40 backdrop-blur-xl p-6 transition-all duration-300 shadow-sm dark:shadow-xl group">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/20 text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Direct Email</div>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-sm sm:text-base font-mono font-semibold text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors block"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white transition-colors"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-500 dark:text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Direct Gmail compose launcher link */}
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(PERSONAL_INFO.email)}&su=Hello%20Debangsu`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:underline"
                >
                  <span>Open directly in Gmail</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <span className="text-[11px] text-slate-400">1-click compose</span>
              </div>
            </div>

            {/* Phone Card */}
            <div className="rounded-2xl bg-white dark:bg-[#0b0f19]/90 border border-slate-200 dark:border-white/10 hover:border-purple-500/40 backdrop-blur-xl p-6 transition-all duration-300 shadow-sm dark:shadow-xl group">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-purple-50 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Phone & WhatsApp</div>
                    <a
                      href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                      className="text-sm sm:text-base font-mono font-semibold text-slate-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-300 transition-colors"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyPhone}
                  className="p-2 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white transition-colors"
                  title="Copy phone to clipboard"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-500 dark:text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Location & Timezone Card */}
            <div className="rounded-2xl bg-white dark:bg-[#0b0f19]/90 border border-slate-200 dark:border-white/10 backdrop-blur-xl p-6 shadow-sm dark:shadow-xl space-y-3">
              <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-600 dark:text-emerald-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">Location</div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">{PERSONAL_INFO.location}</div>
                </div>
              </div>
              <div className="pt-2 border-t border-slate-200 dark:border-white/5 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                  <span>Timezone: IST (UTC+5:30)</span>
                </span>
                <span className="text-emerald-600 dark:text-emerald-400 font-mono">Replies in &lt; 24h</span>
              </div>
            </div>

            {/* Social Grid */}
            <div className="rounded-2xl bg-white dark:bg-[#0b0f19]/90 border border-slate-200 dark:border-white/10 p-5 backdrop-blur-xl shadow-sm dark:shadow-none">
              <div className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold mb-3">
                Social Profiles
              </div>
              <div className="grid grid-cols-2 gap-2">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-200 dark:border-white/5 hover:border-cyan-500/40 text-xs text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all group"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Direct Email Message Composer (col-span-7) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-white dark:bg-[#0b0f19]/95 border border-slate-200 dark:border-white/15 backdrop-blur-xl p-6 sm:p-8 shadow-md dark:shadow-2xl relative overflow-hidden">
              
              {/* Subtle top rim glow */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400" />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Direct Message Composer</h3>
                </div>

                {/* Email Client Choice Selector */}
                <div className="flex items-center gap-1 p-1 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-xs self-start sm:self-auto">
                  <button
                    type="button"
                    onClick={() => setMailProvider('gmail')}
                    className={`px-2.5 py-1 rounded-lg font-medium transition-all ${
                      mailProvider === 'gmail'
                        ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    Gmail Web
                  </button>
                  <button
                    type="button"
                    onClick={() => setMailProvider('default')}
                    className={`px-2.5 py-1 rounded-lg font-medium transition-all ${
                      mailProvider === 'default'
                        ? 'bg-purple-600 text-white font-semibold shadow-sm'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    Default Mail App
                  </button>
                </div>
              </div>

              {submitted ? (
                <div className="p-6 sm:p-8 rounded-xl bg-cyan-50/80 dark:bg-cyan-950/30 border border-cyan-200 dark:border-cyan-500/30 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-cyan-100 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  
                  <div className="space-y-1">
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                      Email Ready for Transmission!
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                      Your message has been formatted to send directly to{' '}
                      <span className="text-cyan-700 dark:text-cyan-300 font-mono font-semibold">
                        {PERSONAL_INFO.email}
                      </span>.
                    </p>
                  </div>

                  {/* Direct Launch Buttons */}
                  <div className="flex flex-wrap items-center justify-center gap-2.5 pt-2">
                    <a
                      href={getGmailUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs transition-colors shadow-sm"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Open in Gmail</span>
                    </a>

                    <a
                      href={getMailtoUrl()}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs transition-colors shadow-sm"
                    >
                      <Laptop className="w-3.5 h-3.5" />
                      <span>Open in Mail App</span>
                    </a>

                    <button
                      onClick={handleCopyDraft}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white dark:bg-white/10 hover:bg-slate-100 dark:hover:bg-white/20 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-white/10 font-semibold text-xs transition-colors"
                    >
                      {copiedDraft ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedDraft ? 'Copied Draft!' : 'Copy Draft Text'}</span>
                    </button>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                      }}
                      className="text-xs text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 underline"
                    >
                      Edit or write another message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-700 dark:text-slate-300">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Ada Lovelace"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500 dark:focus:ring-cyan-400 transition-all"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-700 dark:text-slate-300">Your Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="ada@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500 dark:focus:ring-cyan-400 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-700 dark:text-slate-300">Subject</label>
                    <input
                      type="text"
                      placeholder="Opportunity / Collaboration / Project Inquiry"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500 dark:focus:ring-cyan-400 transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-700 dark:text-slate-300">Message *</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Hi Debangsu, I would love to connect regarding..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500 dark:focus:ring-cyan-400 transition-all resize-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-3 pt-1">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-500 text-slate-950 font-bold text-xs hover:opacity-95 transition-all shadow-md shadow-cyan-500/20 flex items-center justify-center gap-2 group disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Launching Email Client...</span>
                      ) : (
                        <>
                          <span>
                            {mailProvider === 'gmail' ? 'Send Directly via Gmail' : 'Send via Default Mail App'}
                          </span>
                          <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={handleCopyDraft}
                      disabled={!formData.message.trim()}
                      className="w-full sm:w-auto py-3 px-4 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-300 text-xs font-semibold transition-colors disabled:opacity-40 flex items-center justify-center gap-1.5"
                      title="Copy current form text to clipboard"
                    >
                      {copiedDraft ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedDraft ? 'Copied Draft' : 'Copy Draft'}</span>
                    </button>
                  </div>

                  <p className="text-[11px] text-slate-500 dark:text-slate-400 text-center sm:text-left">
                    Direct recipient: <span className="font-mono text-cyan-600 dark:text-cyan-400 font-semibold">{PERSONAL_INFO.email}</span>. Click opens your composer with all fields pre-filled.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
