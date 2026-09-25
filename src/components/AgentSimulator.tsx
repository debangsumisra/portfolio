import React, { useState } from 'react';
import {
  Terminal,
  Play,
  RotateCcw,
  Sparkles,
  Cpu,
  Database,
  Shield,
  Zap,
} from 'lucide-react';

export const AgentSimulator: React.FC = () => {
  const [activeWorkflow, setActiveWorkflow] = useState<'autoresearch' | 'sentinel'>('autoresearch');
  const [isRunning, setIsRunning] = useState(false);
  const [currentStep, setCurrentStep] = useState<number>(3); // default completed view

  const autoResearchSteps = [
    {
      title: 'Query Ingestion & Planning',
      desc: 'LangGraph parses user objective and decomposes into 3 parallel search sub-tasks.',
      icon: Terminal,
      time: '12ms',
    },
    {
      title: 'Dense Vector Retrieval',
      desc: 'FAISS and ChromaDB retrieve contextual embeddings and top-k source documents.',
      icon: Database,
      time: '45ms',
    },
    {
      title: 'Critic & Fact-Check Loop',
      desc: 'Cyclical state machine validates citations and verifies empirical claims.',
      icon: Cpu,
      time: '180ms',
    },
    {
      title: 'Structured Report Synthesis',
      desc: 'FastAPI streams markdown sections with executive summaries and reference trees.',
      icon: Sparkles,
      time: '310ms',
    },
  ];

  const sentinelSteps = [
    {
      title: 'Token Bucket Ingress',
      desc: 'FastAPI middleware checks client quota and enforces sliding rate limits.',
      icon: Shield,
      time: '2ms',
    },
    {
      title: 'Latency Weighted Routing',
      desc: 'Evaluates provider health metrics and balances across OpenAI / Gemini / Claude.',
      icon: Zap,
      time: '6ms',
    },
    {
      title: 'Circuit Breaker Guard',
      desc: 'Automatic trip protection prevents cascading latency spikes during upstream slowdowns.',
      icon: Cpu,
      time: '1ms',
    },
    {
      title: 'Zero-Copy Stream Delivery',
      desc: 'Proxies SSE tokens directly to client with sub-25ms time-to-first-token.',
      icon: Terminal,
      time: '18ms',
    },
  ];

  const steps = activeWorkflow === 'autoresearch' ? autoResearchSteps : sentinelSteps;

  const runSimulation = () => {
    if (isRunning) return;
    setIsRunning(true);
    setCurrentStep(0);

    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= steps.length - 1) {
          clearInterval(stepInterval);
          setIsRunning(false);
          return steps.length - 1;
        }
        return prev + 1;
      });
    }, 600);
  };

  return (
    <section id="agent-simulator" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
            <Cpu className="w-4 h-4" />
            <span>Interactive Architecture Sandbox</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Agentic Pipeline in Action
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Visualize how my agent workflows and API gateways process state, vector memory, and failover in real time.
          </p>
        </div>

        {/* Simulator Container */}
        <div className="rounded-2xl bg-white dark:bg-[#090d16]/90 border border-slate-200 dark:border-white/15 backdrop-blur-xl shadow-lg dark:shadow-2xl p-6 sm:p-8 max-w-4xl mx-auto">
          
          {/* Top Bar Switcher */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-white/10">
            <div className="flex items-center gap-2 p-1 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10">
              <button
                onClick={() => {
                  setActiveWorkflow('autoresearch');
                  setCurrentStep(3);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeWorkflow === 'autoresearch'
                    ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                AutoResearch Agent Pipeline
              </button>
              <button
                onClick={() => {
                  setActiveWorkflow('sentinel');
                  setCurrentStep(3);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeWorkflow === 'sentinel'
                    ? 'bg-purple-600 dark:bg-purple-500 text-white shadow-md shadow-purple-500/20'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                SentinelAI Token Gateway
              </button>
            </div>

            {/* Run Button */}
            <button
              onClick={runSimulation}
              disabled={isRunning}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 text-slate-950 font-bold text-xs hover:opacity-90 transition-opacity disabled:opacity-50 shadow-md shadow-cyan-500/20"
            >
              {isRunning ? (
                <>
                  <RotateCcw className="w-3.5 h-3.5 animate-spin" />
                  <span>Executing Pipeline...</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Run Live Simulation</span>
                </>
              )}
            </button>
          </div>

          {/* Workflow Steps Display */}
          <div className="py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((st, i) => {
              const Icon = st.icon;
              const isPastOrCurrent = i <= currentStep;
              const isActive = i === currentStep;

              return (
                <div
                  key={i}
                  className={`p-4 rounded-xl border transition-all duration-300 relative ${
                    isActive
                      ? 'bg-cyan-50 dark:bg-cyan-950/40 border-cyan-400 dark:border-cyan-400/80 shadow-[0_0_20px_rgba(34,211,238,0.2)]'
                      : isPastOrCurrent
                      ? 'bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/15'
                      : 'bg-slate-50/50 dark:bg-white/[0.02] border-slate-100 dark:border-white/5 opacity-50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className={`p-2 rounded-lg ${
                        isActive
                          ? 'bg-cyan-400 text-slate-950'
                          : isPastOrCurrent
                          ? 'bg-slate-200 dark:bg-white/10 text-cyan-600 dark:text-cyan-400'
                          : 'bg-slate-100 dark:bg-white/5 text-slate-400 dark:text-slate-500'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400">{st.time}</span>
                  </div>

                  <div className="text-[11px] font-mono text-cyan-700 dark:text-cyan-300 mb-1">Step 0{i + 1}</div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white mb-1.5">{st.title}</h4>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">{st.desc}</p>

                  {/* Active Indicator dot */}
                  {isActive && (
                    <div className="absolute top-2 right-2 flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-ping" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Terminal Output Snapshot */}
          <div className="rounded-xl bg-slate-950 border border-slate-800 p-4 font-mono text-xs text-slate-300 space-y-1.5 shadow-inner">
            <div className="flex items-center gap-2 text-slate-500 text-[11px] border-b border-slate-800 pb-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="ml-2">runtime-console :: debangsu-agent-node</span>
            </div>
            <div className="pt-2 text-cyan-400">
              $ {activeWorkflow === 'autoresearch' ? 'langgraph run research_pipeline --depth=3' : 'sentinel_gateway --listen=0.0.0.0:8000'}
            </div>
            <div className="text-slate-400">
              [INFO] Graph loaded: 4 state nodes, 2 recursive verification loops initialized.
            </div>
            <div className="text-emerald-400">
              [STATUS] Vector indexes FAISS & ChromaDB connected. 0 errors detected.
            </div>
            <div className="text-purple-300">
              [METRICS] Average latency: 28ms | Multi-provider fallback: READY
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
