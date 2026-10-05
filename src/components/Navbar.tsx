import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle.tsx';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Why Me', href: '#why-me' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Architecture', href: '#agent-simulator' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 dark:bg-[#07090e]/85 backdrop-blur-md border-b border-slate-200 dark:border-white/10 shadow-md shadow-slate-900/5 dark:shadow-black/20 py-3'
          : 'bg-transparent border-b border-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Zone 1: Single Wordmark Element */}
        <a
          href="#"
          className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors flex items-center gap-2 group"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 dark:bg-cyan-400 shadow-[0_0_8px_#06b6d4] dark:shadow-[0_0_8px_#22d3ee] animate-pulse"></span>
          <span>Debangsu Misra</span>
        </a>

        {/* Zone 2: Clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600 dark:text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-cyan-500 dark:after:bg-cyan-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary actions + Theme Toggle */}
        <div className="flex items-center gap-2.5">
          <ThemeToggle />

          <button
            onClick={onOpenResume}
            className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700/80 border border-slate-300 dark:border-slate-700 rounded-lg transition-colors whitespace-nowrap"
          >
            <FileText className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
            <span>Resume</span>
          </button>

          <a
            href="#contact"
            className="hidden sm:flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-cyan-200 rounded-lg transition-all shadow-[0_0_15px_rgba(34,211,238,0.3)] hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] whitespace-nowrap"
          >
            <span>Get In Touch</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile menu toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 dark:border-white/10 bg-white/95 dark:bg-[#090d16]/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-300 hover:bg-slate-100 dark:hover:bg-white/5 rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-slate-200 dark:border-white/10 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg"
            >
              <FileText className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
              <span>View Resume Summary</span>
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-1.5 py-2 text-xs font-semibold text-slate-950 bg-cyan-400 rounded-lg shadow-[0_0_12px_rgba(34,211,238,0.3)]"
            >
              <span>Get In Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
