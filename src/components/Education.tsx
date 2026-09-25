import React from 'react';
import {
  GraduationCap,
  Award,
  Calendar,
  BookOpen,
  MapPin,
  Sparkles,
  CheckCircle,
} from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData.ts';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Education & Scholarship
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-xl">
            Pursuing Computer Science with rigorous foundations in algorithmic design, distributed databases, and artificial intelligence.
          </p>
        </div>

        {/* Bento Education Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Main University Card (col-span-8) */}
          <div className="lg:col-span-8 rounded-2xl bg-white dark:bg-[#0b0f19]/90 border border-slate-200 dark:border-white/10 hover:border-cyan-500/40 backdrop-blur-xl p-6 sm:p-8 transition-all duration-300 shadow-md dark:shadow-xl relative overflow-hidden group">
            
            {/* Ambient background blur */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-600/5 dark:bg-cyan-600/10 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-600/15 transition-all" />

            <div className="relative z-10 space-y-6">
              
              {/* Header with Icon and Scholarship Spotlight */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/20 text-cyan-600 dark:text-cyan-400">
                    <GraduationCap className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                      {EDUCATION_DATA.degree}
                    </h3>
                    <p className="text-sm font-medium text-slate-600 dark:text-slate-300 mt-0.5">
                      {EDUCATION_DATA.university}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/30 text-amber-700 dark:text-amber-300 text-xs font-semibold self-start sm:self-auto shadow-sm">
                  <Award className="w-4 h-4 text-amber-500 dark:text-amber-400" />
                  <span>100% Merit Scholar</span>
                </div>
              </div>

              {/* Timeline & Metadata */}
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-200 dark:border-white/5">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  <span>{EDUCATION_DATA.timeline}</span>
                </div>
                <span>·</span>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  <span>Lucknow, India</span>
                </div>
                <span>·</span>
                <div className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span className="font-semibold text-slate-800 dark:text-slate-200">{EDUCATION_DATA.scholarship}</span>
                </div>
              </div>

              {/* Relevant Coursework */}
              <div className="space-y-3 pt-3">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  <BookOpen className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                  <span>Relevant Coursework</span>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {EDUCATION_DATA.coursework.map((course, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 hover:border-cyan-500/30 transition-colors text-xs text-slate-700 dark:text-slate-200"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0" />
                      <span>{course}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Right Accolade / Metric Card (col-span-4) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* GPA Card */}
            <div className="rounded-2xl bg-white dark:bg-[#0b0f19]/90 border border-slate-200 dark:border-white/10 hover:border-purple-500/40 backdrop-blur-xl p-6 transition-all duration-300 shadow-md dark:shadow-xl relative overflow-hidden group">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">
                  Cumulative GPA
                </span>
                <span className="text-xs font-mono text-purple-600 dark:text-purple-400">Undergraduate</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl font-extrabold font-mono text-purple-600 dark:text-purple-300">
                  7.55
                </span>
                <span className="text-sm font-mono text-slate-400 dark:text-slate-500">/ 10.0</span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                Consistent academic rigor maintaining Sitare Foundation Merit standards.
              </p>
            </div>

            {/* Scholarship Honor Spotlight */}
            <div className="rounded-2xl bg-purple-50/80 dark:bg-gradient-to-br dark:from-purple-950/30 dark:via-slate-900/60 dark:to-cyan-950/30 border border-purple-200 dark:border-purple-500/30 p-6 backdrop-blur-xl shadow-md dark:shadow-xl space-y-3">
              <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400">
                <Award className="w-5 h-5" />
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                  Sitare Foundation
                </h4>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Awarded full tuition scholarship awarded strictly to top prospective computer science minds across India based on national competitive merit.
              </p>
              <div className="text-[11px] font-mono text-cyan-700 dark:text-cyan-300">
                Aug 2024 – May 2027 Cohort
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
