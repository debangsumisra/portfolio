import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext.tsx';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { SkillsBento } from './components/SkillsBento.tsx';
import { BentoProjects } from './components/BentoProjects.tsx';
import { Education } from './components/Education.tsx';
import { AgentSimulator } from './components/AgentSimulator.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { WhyMe } from './components/WhyMe.tsx';
import { ResumeModal } from './components/ResumeModal.tsx';
import { Check } from 'lucide-react';

function PortfolioApp() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  const handleCopyText = (_text: string, label: string) => {
    setToastMessage(`${label} copied to clipboard!`);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#07090e] dark:text-[#f1f5f9] transition-colors duration-300 relative selection:bg-cyan-500/20 selection:text-cyan-600 dark:selection:text-cyan-300">
      
      {/* Background Decorative Mesh / Subtle Grid */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.03] z-0"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '36px 36px',
        }}
      />

      {/* Floating subtle ambient glows */}
      <div className="fixed top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 dark:bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none -z-10 transition-colors" />
      <div className="fixed bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-500/10 dark:bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10 transition-colors" />

      {/* Top Bar with Light/Dark Mode Toggle */}
      <Navbar onOpenResume={() => setResumeModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero
          onCopyText={handleCopyText}
          onOpenResume={() => setResumeModalOpen(true)}
        />
        
        <WhyMe />

        <SkillsBento />

        <BentoProjects />

        <AgentSimulator />

        <Education />

        <ContactSection onCopyText={handleCopyText} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
        onCopyText={handleCopyText}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-xl bg-white dark:bg-slate-900/95 border border-slate-300 dark:border-cyan-500/40 text-slate-900 dark:text-white text-xs shadow-2xl backdrop-blur-md animate-bounce">
          <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
            <Check className="w-3 h-3" />
          </div>
          <span className="font-medium">{toastMessage}</span>
        </div>
      )}

    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioApp />
    </ThemeProvider>
  );
}
