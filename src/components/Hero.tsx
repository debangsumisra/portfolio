import React, { useState } from 'react';
import {
  Github,
  Linkedin,
  Twitter,
  Code2,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Copy,
  Check,
  Sparkles,
  Cpu,
} from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../data/portfolioData.ts';

interface HeroProps {
  onCopyText: (text: string, label: string) => void;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCopyText, onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

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

  const getSocialIcon = (name: string) => {
    switch (name) {
      case 'GitHub':
        return <Github className="w-5 h-5" />;
      case 'LinkedIn':
        return <Linkedin className="w-5 h-5" />;
      case 'X (Twitter)':
        return <Twitter className="w-5 h-5" />;
      case 'LeetCode':
        return <Code2 className="w-5 h-5" />;
      default:
        return <Code2 className="w-5 h-5" />;
    }
  };

  return (
    <section id="about" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-cyan-600/10 dark:from-cyan-600/15 via-purple-600/10 dark:via-purple-600/15 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-purple-500/10 dark:bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bio & Core Info */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status & Location kicker */}
            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-ping" />
                <span>Available for AI & Full-Stack Roles</span>
              </span>
              <span className="inline-flex items-center gap-1.5 text-slate-600 dark:text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                <span>{PERSONAL_INFO.location}</span>
              </span>
            </div>

            {/* Headline & Name */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-cyan-600 via-sky-500 to-purple-600 dark:from-cyan-400 dark:via-sky-300 dark:to-purple-400 bg-clip-text text-transparent">
                  {PERSONAL_INFO.name}
                </span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-slate-700 dark:text-slate-300">
                {PERSONAL_INFO.headline}
              </p>
            </div>

            {/* Tagline */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
              {PERSONAL_INFO.tagline}
            </p>

            {/* Quick Contact & Copy Bar */}
            <div className="flex flex-wrap gap-2 pt-1 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              {/* Email Button */}
              <button
                onClick={handleCopyEmail}
                className="group flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white dark:bg-slate-900/80 hover:bg-slate-100 dark:hover:bg-slate-800/90 border border-slate-300 dark:border-slate-700/80 hover:border-cyan-500/40 transition-all duration-200 shadow-sm"
                title="Click to copy email address"
              >
                <Mail className="w-4 h-4 text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform" />
                <span className="font-mono text-xs">{PERSONAL_INFO.email}</span>
                {copiedEmail ? (
                  <Check className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500 group-hover:text-slate-600 dark:group-hover:text-slate-300" />
                )}
              </button>

              {/* Phone Button */}
              <button
                onClick={handleCopyPhone}
                className="group flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white dark:bg-slate-900/80 hover:bg-slate-100 dark:hover:bg-slate-800/90 border border-slate-300 dark:border-slate-700/80 hover:border-purple-500/40 transition-all duration-200 shadow-sm"
                title="Click to copy phone number"
              >
                <Phone className="w-4 h-4 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform" />
                <span className="font-mono text-xs">{PERSONAL_INFO.phone}</span>
                {copiedPhone ? (
                  <Check className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500 group-hover:text-slate-600 dark:group-hover:text-slate-300" />
                )}
              </button>
            </div>

            {/* Social Links Bar */}
            <div className="pt-2">
              <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-3">
                Connect with me
              </div>
              <div className="flex items-center gap-3">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 hover:border-cyan-500/50 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-300 transition-all duration-200 transform hover:-translate-y-0.5 shadow-sm group"
                    aria-label={`${link.name}: ${link.handle}`}
                  >
                    <span className="group-hover:scale-110 transition-transform text-cyan-600 dark:text-cyan-400">
                      {getSocialIcon(link.name)}
                    </span>
                    <span className="text-xs font-medium hidden sm:inline">{link.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm shadow-[0_0_20px_rgba(6,182,212,0.35)] hover:shadow-[0_0_28px_rgba(6,182,212,0.55)] transition-all transform hover:-translate-y-0.5"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-100 dark:bg-slate-900/90 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-medium text-sm border border-slate-300 dark:border-slate-700/80 transition-all transform hover:-translate-y-0.5"
              >
                <span>View Resume Overview</span>
              </button>
            </div>
          </div>

          {/* Right Column: High-Tech Bento Visual Card */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Glowing gradient rim */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 dark:from-cyan-500/30 via-purple-500/20 dark:via-purple-500/30 to-blue-500/20 dark:to-blue-500/30 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative rounded-2xl bg-white/95 dark:bg-[#0b0f19]/90 border border-slate-200 dark:border-white/15 backdrop-blur-xl p-6 overflow-hidden shadow-xl dark:shadow-2xl space-y-5">
                
                {/* Visual Header / Avatar */}
                <div className="relative h-64 sm:h-72 rounded-xl overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-950">
                  <img
                    src="/src/assets/images/hero_ai_avatar_1790362335357.jpg"
                    alt="Debangsu Misra AI Software Engineer Visual"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                  
                  {/* Floating badge inside image */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs backdrop-blur-md bg-black/60 border border-white/15 px-3 py-2 rounded-lg text-slate-200">
                    <div className="flex items-center gap-2">
                      <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                      <span className="font-mono">GenAI & Distributed Backend</span>
                    </div>
                    <span className="text-[11px] text-purple-300 font-mono">Lucknow, IN</span>
                  </div>
                </div>

                {/* Micro-Metrics Bento Row */}
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-cyan-500/30 transition-colors">
                    <div className="text-xl sm:text-2xl font-bold font-mono text-cyan-600 dark:text-cyan-300">100%</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Merit Scholar</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-purple-500/30 transition-colors">
                    <div className="text-xl sm:text-2xl font-bold font-mono text-purple-600 dark:text-purple-300">6+</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Key Projects</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-emerald-500/30 transition-colors">
                    <div className="text-xl sm:text-2xl font-bold font-mono text-emerald-600 dark:text-emerald-300">7.55</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">B.Tech GPA</div>
                  </div>
                </div>

                {/* Engineering Highlights Kicker */}
                <div className="p-3.5 rounded-xl bg-cyan-50 dark:bg-gradient-to-r dark:from-cyan-950/30 dark:to-purple-950/30 border border-cyan-200 dark:border-cyan-500/20 text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-900 dark:text-white font-semibold">Autonomous Agents & RAG:</span> Specializing in LangGraph workflows, dense vector indexing, and scalable FastAPI/Spring Boot services.
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
