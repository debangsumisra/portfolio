import React from 'react';
import { Bug, Rocket, ShieldCheck, Target, Sparkles, Zap } from 'lucide-react';

const STACK = [
  'Java', 'Python', 'TypeScript', 'Spring Boot', 'FastAPI', 'Flask', 'React', 'Tailwind',
  'LangGraph', 'LangChain', 'RAG', 'FAISS', 'ChromaDB', 'PostgreSQL', 'MySQL', 'Docker',
  'Git', 'Linux', 'Vercel', 'Render', 'WebSockets', 'Selenium',
];

const PILLARS = [
  {
    icon: Target,
    title: 'Target in, product out',
    text: 'Hand me a goal. I scope it, design the architecture, build it, test it and deploy it without hand-holding.',
  },
  {
    icon: Bug,
    title: 'Debugging & test-first',
    text: 'I read stack traces calmly, write test cases for edge states and leave the codebase more reliable than I found it.',
  },
  {
    icon: Zap,
    title: 'Full-stack range',
    text: 'Spring Boot and FastAPI backends, React frontends, SQL and vector databases, and LangGraph AI agents, all from one engineer.',
  },
  {
    icon: ShieldCheck,
    title: 'Production mindset',
    text: 'Circuit breakers, rate limiting, indexing and observability. I build for the failure cases, not just the demo.',
  },
];

export const WhyMe: React.FC = () => {
  return (
    <section id="why-me" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-tr from-cyan-500/30 via-purple-500/30 to-pink-500/30 rounded-3xl blur-2xl opacity-70 group-hover:opacity-100 transition-opacity" />
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 h-80 sm:h-[26rem]">
              <img
                src="/images/team.jpg"
                alt="Engineering team collaborating around laptops"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 text-white">
                <div className="p-2.5 rounded-xl bg-white/15 backdrop-blur-md border border-white/20">
                  <Rocket className="w-5 h-5 text-cyan-300" />
                </div>
                <div>
                  <div className="text-sm font-bold">From idea to production</div>
                  <div className="text-xs text-slate-300">Planning · Building · Testing · Shipping</div>
                </div>
              </div>
            </div>
          </div>

          {/* Pitch */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-pink-600 dark:text-pink-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Why recruiters pick me</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              One engineer who can{' '}
              <span className="bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradientShift bg-[length:200%_200%]">
                do it all
              </span>
              , and do it well.
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-xl">
              I treat every project like a real product: clean architecture, tested code and a working deployment. Set the target and I'll keep going until it's done.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PILLARS.map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="p-4 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-cyan-500/50 hover:-translate-y-1 transition-all duration-300"
                >
                  <Icon className="w-5 h-5 text-cyan-600 dark:text-cyan-400 mb-2" />
                  <div className="text-sm font-bold text-slate-900 dark:text-white">{title}</div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tech marquee */}
      <div className="mt-16 relative overflow-hidden border-y border-slate-200 dark:border-white/10 py-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max gap-10 animate-marquee">
          {[...STACK, ...STACK].map((t, i) => (
            <span key={i} className="text-sm sm:text-base font-mono font-semibold text-slate-400 dark:text-slate-500 whitespace-nowrap">
              {t} <span className="text-cyan-500">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
