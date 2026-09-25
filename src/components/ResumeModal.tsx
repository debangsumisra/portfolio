import React, { useState } from 'react';
import {
  X,
  Copy,
  Check,
  Printer,
  GraduationCap,
  Briefcase,
  Code,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';
import { PERSONAL_INFO, EDUCATION_DATA, SKILL_CATEGORIES, PROJECTS } from '../data/portfolioData.ts';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCopyText: (text: string, label: string) => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, onCopyText }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopySummary = () => {
    const text = `
DEBANGSU MISRA
${PERSONAL_INFO.headline}
Location: ${PERSONAL_INFO.location}
Contact: ${PERSONAL_INFO.email} | ${PERSONAL_INFO.phone}

EDUCATION:
${EDUCATION_DATA.degree} - ${EDUCATION_DATA.university} (${EDUCATION_DATA.timeline})
GPA: ${EDUCATION_DATA.gpa} | ${EDUCATION_DATA.scholarship}
Coursework: ${EDUCATION_DATA.coursework.join(', ')}

PROJECTS:
${PROJECTS.map((p) => `- ${p.title}: ${p.shortDesc}`).join('\n')}

TECHNICAL SKILLS:
${SKILL_CATEGORIES.map((c) => `${c.category}: ${c.skills.join(', ')}`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    onCopyText(text, 'Full resume text');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl bg-white dark:bg-[#090d16] border border-slate-200 dark:border-white/20 shadow-2xl overflow-hidden text-slate-800 dark:text-slate-200">
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#0d121f]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-pulse" />
            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              Debangsu Misra — Resume Summary
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopySummary}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-200/70 hover:bg-slate-300 dark:bg-white/5 dark:hover:bg-white/10 text-xs text-slate-700 dark:text-slate-300 transition-colors"
              title="Copy plain text summary"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-50 hover:bg-cyan-100 dark:bg-cyan-500/10 dark:hover:bg-cyan-500/20 text-xs text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-500/30 transition-colors"
              title="Print or save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Document Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
          
          {/* Resume Header */}
          <div className="border-b border-slate-200 dark:border-white/10 pb-6 space-y-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-sm font-semibold text-cyan-600 dark:text-cyan-400">
              {PERSONAL_INFO.headline}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-slate-400 pt-1">
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                <span>{PERSONAL_INFO.email}</span>
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                <span>{PERSONAL_INFO.phone}</span>
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>{PERSONAL_INFO.location}</span>
              </span>
            </div>
          </div>

          {/* Education Section */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-400 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </h2>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h3 className="font-bold text-slate-900 dark:text-white text-sm">{EDUCATION_DATA.degree}</h3>
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400">{EDUCATION_DATA.timeline}</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300">{EDUCATION_DATA.university}</p>
              <div className="flex flex-wrap items-center gap-3 text-xs pt-1">
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold font-mono">GPA: {EDUCATION_DATA.gpa}</span>
                <span>·</span>
                <span className="text-amber-600 dark:text-amber-300 font-medium">{EDUCATION_DATA.scholarship}</span>
              </div>
              <div className="pt-2 text-xs text-slate-500 dark:text-slate-400">
                <span className="font-semibold text-slate-700 dark:text-slate-300">Coursework: </span>
                {EDUCATION_DATA.coursework.join(', ')}
              </div>
            </div>
          </div>

          {/* Technical Skills Section */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-400 flex items-center gap-2">
              <Code className="w-4 h-4" />
              <span>Technical Skills</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.category} className="p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5">
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white mb-1.5">{cat.category}</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((s) => (
                      <span key={s} className="px-2 py-0.5 rounded text-[11px] bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Projects Section */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-400 flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              <span>Key Projects</span>
            </h2>
            <div className="space-y-3">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 space-y-1.5">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-bold text-slate-900 dark:text-white text-sm">{proj.title}</h3>
                    <span className="text-[11px] font-mono text-cyan-600 dark:text-cyan-300">{proj.category}</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300">{proj.shortDesc}</p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {proj.techStack.map((tech) => (
                      <span key={tech} className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-200/80 dark:bg-white/5 text-slate-600 dark:text-slate-400">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#0d121f] flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
          <span>Debangsu Misra · Curriculum Vitae</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 transition-colors font-medium"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
