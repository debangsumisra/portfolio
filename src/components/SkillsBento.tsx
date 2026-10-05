import React, { useState } from 'react';
import {
  Code,
  Layers,
  Database,
  Terminal,
  Cpu,
  Server,
  Search,
  Sparkles,
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData.ts';

export const SkillsBento: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const getCategoryIcon = (category: string) => {
    if (category.includes('GenAI')) return <Cpu className="w-5 h-5 text-purple-500 dark:text-purple-400" />;
    if (category.includes('Backend')) return <Server className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />;
    if (category.includes('Databases')) return <Database className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
    if (category.includes('Frontend')) return <Layers className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
    if (category.includes('Languages')) return <Code className="w-5 h-5 text-amber-500 dark:text-amber-400" />;
    return <Terminal className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />;
  };

  const getAccentBorderClass = (color: string) => {
    switch (color) {
      case 'purple':
        return 'hover:border-purple-400 dark:hover:border-purple-500/50 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.12)]';
      case 'cyan':
        return 'hover:border-cyan-400 dark:hover:border-cyan-500/50 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.12)]';
      case 'blue':
        return 'hover:border-blue-400 dark:hover:border-blue-500/50 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.12)]';
      case 'emerald':
        return 'hover:border-emerald-400 dark:hover:border-emerald-500/50 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.12)]';
      case 'amber':
        return 'hover:border-amber-400 dark:hover:border-amber-500/50 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.12)]';
      default:
        return 'hover:border-cyan-400 dark:hover:border-cyan-500/50';
    }
  };

  const getTagColorClass = (color: string) => {
    switch (color) {
      case 'purple':
        return 'bg-purple-50 text-purple-700 border-purple-200 hover:border-purple-400 dark:bg-purple-950/40 dark:text-purple-200 dark:border-purple-800/40 dark:hover:border-purple-400 dark:hover:bg-purple-900/50';
      case 'cyan':
        return 'bg-cyan-50 text-cyan-800 border-cyan-200 hover:border-cyan-400 dark:bg-cyan-950/40 dark:text-cyan-200 dark:border-cyan-800/40 dark:hover:border-cyan-400 dark:hover:bg-cyan-900/50';
      case 'blue':
        return 'bg-blue-50 text-blue-700 border-blue-200 hover:border-blue-400 dark:bg-blue-950/40 dark:text-blue-200 dark:border-blue-800/40 dark:hover:border-blue-400 dark:hover:bg-blue-900/50';
      case 'emerald':
        return 'bg-emerald-50 text-emerald-800 border-emerald-200 hover:border-emerald-400 dark:bg-emerald-950/40 dark:text-emerald-200 dark:border-emerald-800/40 dark:hover:border-emerald-400 dark:hover:bg-emerald-900/50';
      case 'amber':
        return 'bg-amber-50 text-amber-800 border-amber-200 hover:border-amber-400 dark:bg-amber-950/40 dark:text-amber-200 dark:border-amber-800/40 dark:hover:border-amber-400 dark:hover:bg-amber-900/50';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-800/60 dark:text-slate-200 dark:border-slate-700';
    }
  };

  const filteredCategories = SKILL_CATEGORIES.filter((cat) => {
    if (selectedCategory !== 'all' && cat.category !== selectedCategory) {
      return false;
    }
    if (!searchTerm.trim()) return true;
    const term = searchTerm.toLowerCase();
    const matchesCat = cat.category.toLowerCase().includes(term);
    const matchesSkill = cat.skills.some((s) => s.toLowerCase().includes(term));
    return matchesCat || matchesSkill;
  });

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Technical Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Skills & Tech Stack
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-xl">
              Engineered with modern languages, agentic AI frameworks, robust backend architectures, and high-performance databases.
            </p>
          </div>

          {/* Interactive Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill (e.g. LangGraph)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs rounded-xl bg-white dark:bg-slate-900/90 border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500 dark:focus:ring-cyan-400 transition-all shadow-sm"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => {
            return (
              <div
                key={cat.category}
                className={`group relative overflow-hidden rounded-2xl bg-white dark:bg-[#0b0f19]/80 border border-slate-200 dark:border-white/10 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 shadow-sm dark:shadow-none ${getAccentBorderClass(
                  cat.color,
                )}`}
              >
                {cat.image && (
                  <div className="relative -mx-6 -mt-6 mb-5 h-36 overflow-hidden">
                    <img
                      src={cat.image}
                      alt={cat.category}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#0b0f19] via-white/20 dark:via-[#0b0f19]/30 to-transparent" />
                  </div>
                )}

                {/* Top ambient icon row */}
                <div className="flex items-center justify-between gap-4 mb-3">
                  <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 group-hover:scale-105 transition-transform">
                    {getCategoryIcon(cat.category)}
                  </div>
                  <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    {cat.skills.length} Technologies
                  </span>
                </div>

                {/* Category Title */}
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                  {cat.category}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mb-5 leading-relaxed min-h-[32px]">
                  {cat.description}
                </p>

                {/* Skills Badges Container */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => {
                    const isHighlighted =
                      searchTerm.trim() !== '' &&
                      skill.toLowerCase().includes(searchTerm.toLowerCase());
                    return (
                      <span
                        key={skill}
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium border transition-all duration-200 cursor-default ${
                          isHighlighted
                            ? 'ring-2 ring-cyan-500 dark:ring-cyan-400 bg-cyan-100 dark:bg-cyan-900/70 text-cyan-900 dark:text-cyan-100 font-semibold shadow-[0_0_10px_rgba(34,211,238,0.3)]'
                            : getTagColorClass(cat.color)
                        }`}
                      >
                        <span>{skill}</span>
                      </span>
                    );
                  })}
                </div>

                {/* Glass shine on corner */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-black/[0.02] dark:from-white/5 to-transparent rounded-tr-2xl pointer-events-none" />
              </div>
            );
          })}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-12 bg-slate-100 dark:bg-slate-900/40 rounded-2xl border border-slate-200 dark:border-white/5">
            <p className="text-slate-600 dark:text-slate-400 text-sm">No skills found matching "{searchTerm}".</p>
            <button
              onClick={() => setSearchTerm('')}
              className="mt-3 text-xs text-cyan-600 dark:text-cyan-400 hover:underline font-medium"
            >
              Reset Search Filter
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
