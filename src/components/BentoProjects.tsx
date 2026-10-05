import React, { useState } from 'react';
import {
  ExternalLink,
  Github,
  Sparkles,
  ChevronRight,
  CheckCircle2,
  X,
  Layers,
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData.ts';
import { ProjectData } from '../types.ts';

export const BentoProjects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [activeProjectModal, setActiveProjectModal] = useState<ProjectData | null>(null);

  const categories = ['All', 'GenAI & Agents', 'Full-Stack & Systems', 'Data & Analytics'];

  const filteredProjects = PROJECTS.filter((proj) => {
    if (selectedFilter === 'All') return true;
    return proj.category === selectedFilter;
  });

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Production & Research Engineering</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Featured Projects
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-xl">
              High-impact solutions ranging from autonomous agent pipelines to resilient real-time gateways and data graph intelligence.
            </p>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-white/10 backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap ${
                  selectedFilter === cat
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold shadow-md shadow-cyan-500/20'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const isFeatured = project.featured;

            return (
              <div
                key={project.id}
                className={`group relative rounded-2xl bg-white dark:bg-[#0b0f19]/90 border border-slate-200 dark:border-white/10 hover:border-cyan-500/50 dark:hover:border-cyan-400/50 backdrop-blur-xl p-6 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden shadow-sm dark:shadow-lg hover:shadow-xl dark:hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] ${
                  isFeatured ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'
                }`}
              >
                {/* Ambient glow in card corner */}
                <div className="absolute -top-12 -right-12 w-36 h-36 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-transparent rounded-full blur-2xl pointer-events-none group-hover:from-cyan-500/20 group-hover:via-purple-500/15 transition-all duration-500" />

                <div>
                  {/* Image showcase for featured projects */}
                  {project.image && (
                    <div className={`relative mb-5 rounded-xl overflow-hidden border border-slate-200 dark:border-white/10 ${isFeatured ? 'h-48 sm:h-64' : 'h-40'} bg-slate-950 group-hover:border-cyan-500/30 transition-colors`}>
                      <img
                        src={project.image}
                        alt={`${project.title} Preview`}
                        loading="lazy"
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 dark:from-[#0b0f19] via-transparent to-transparent opacity-80" />
                      
                      <div className="absolute bottom-3 left-3 flex items-center gap-2">
                        <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-md text-cyan-300 border border-white/10">
                          {project.category}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Header & Badges if no image */}
                  {!project.image && (
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-md bg-purple-50 dark:bg-white/5 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-500/20">
                        {project.category}
                      </span>
                    </div>
                  )}

                  {/* Project Title */}
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                    {project.shortDesc}
                  </p>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Bullet Points */}
                  <div className="space-y-2 mb-6">
                    {project.bulletPoints.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400 mt-1.5 shrink-0" />
                        <span className="leading-normal">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Controls: Links & Architecture Modal Button */}
                <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center justify-between gap-3 mt-auto">
                  <div className="flex items-center gap-2">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-50 dark:bg-cyan-500/10 hover:bg-cyan-100 dark:hover:bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-500/30 text-xs font-medium transition-all transform hover:-translate-y-0.5"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-white/10 text-xs font-medium transition-all transform hover:-translate-y-0.5"
                      >
                        <Github className="w-3.5 h-3.5 text-slate-600 dark:text-slate-300" />
                        <span>Code</span>
                      </a>
                    )}
                  </div>

                  <button
                    onClick={() => setActiveProjectModal(project)}
                    className="inline-flex items-center gap-1 text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors ml-auto group/btn"
                  >
                    <span>View Architecture</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Project Detail & Architecture Modal */}
      {activeProjectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-[#0d121f] border border-slate-200 dark:border-white/15 p-6 sm:p-8 shadow-2xl text-left space-y-6">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-4">
              <div>
                <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-wider">
                  {activeProjectModal.category}
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-1">
                  {activeProjectModal.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveProjectModal(null)}
                className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image if present */}
            {activeProjectModal.image && (
              <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-white/10 h-52 bg-slate-950">
                <img
                  src={activeProjectModal.image}
                  alt={activeProjectModal.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Overview */}
            <div className="space-y-2">
              <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Project Overview
              </h4>
              <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                {activeProjectModal.fullDesc}
              </p>
            </div>

            {/* Architecture Highlights */}
            {activeProjectModal.architectureHighlights && (
              <div className="space-y-2.5">
                <h4 className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5" />
                  <span>Engineering & Architecture Details</span>
                </h4>
                <div className="space-y-2">
                  {activeProjectModal.architectureHighlights.map((hl, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack */}
            <div>
              <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeProjectModal.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-200 border border-purple-200 dark:border-purple-800/40"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons in Modal */}
            <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-end gap-3">
              {activeProjectModal.githubLink && (
                <a
                  href={activeProjectModal.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>View Repository</span>
                </a>
              )}
              {activeProjectModal.liveLink && (
                <a
                  href={activeProjectModal.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-semibold text-xs transition-all shadow-md shadow-cyan-500/20"
                >
                  <span>Launch Live Demo</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
