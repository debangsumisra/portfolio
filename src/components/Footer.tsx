import React from 'react';
import { ArrowUp } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/portfolioData.ts';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = 2026;

  return (
    <footer className="border-t border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-[#05070c] py-12 relative overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200 dark:border-white/5">
          
          {/* Brand & Tagline */}
          <div className="space-y-1 text-center md:text-left">
            <a
              href="#"
              className="text-lg font-bold text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors inline-flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400" />
              <span>Debangsu Misra</span>
            </a>
            <p className="text-xs text-slate-600 dark:text-slate-400 max-w-sm">
              Full-Stack & AI Developer · Sitare University Merit Scholar
            </p>
          </div>

          {/* Social Quick Links */}
          <div className="flex items-center gap-4 text-xs text-slate-600 dark:text-slate-400">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-300 dark:border-white/10 text-xs text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all transform hover:-translate-y-0.5 shadow-sm"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
          </button>
        </div>

        {/* Bottom Copyright & Status */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <div>
            © {currentYear} Debangsu Misra. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-[11px] font-mono text-slate-500 dark:text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
            <span>Lucknow, India · Engineered with React & Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
