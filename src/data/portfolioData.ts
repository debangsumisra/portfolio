import { EducationData, ProjectData, SkillCategory, SocialLink } from '../types.ts';

export const PERSONAL_INFO = {
  name: 'Debangsu Misra',
  headline: 'Full-Stack & AI Developer | B.Tech Computer Science',
  tagline: 'Building scalable backends, GenAI agentic workflows, and real-time platforms.',
  location: 'Lucknow, India',
  email: 'debangsumisra2005@gmail.com',
  phone: '+91 6291795182',
  status: 'Open for AI & Full-Stack Engineering roles',
  about: `I am a full-stack engineer and AI specialist passionate about building high-performance backends, autonomous agentic systems, and real-time distributed platforms. Currently pursuing B.Tech in Computer Science on a 100% Merit Scholarship from the Sitare Foundation, I bridge modern GenAI architectures (LangGraph, RAG, vector retrieval) with production-grade backend foundations (FastAPI, Spring Boot, PostgreSQL).`,
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/debangsumisra',
    icon: 'Github',
    handle: 'debangsumisra',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/debangsu-misra-42b24b253/',
    icon: 'Linkedin',
    handle: 'in/debangsu-misra',
  },
  {
    name: 'X (Twitter)',
    url: 'https://x.com/MisraDebangsu',
    icon: 'Twitter',
    handle: '@MisraDebangsu',
  },
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/u/debangsumisra/',
    icon: 'Code2',
    handle: 'u/debangsumisra',
  },
];

export const EDUCATION_DATA: EducationData = {
  degree: 'B.Tech, Computer Science',
  university: 'Sitare University (with SRMU), Lucknow',
  timeline: 'Aug 2024 - May 2027',
  gpa: '7.55 / 10.0',
  scholarship: '100% Merit Scholarship, Sitare Foundation',
  coursework: [
    'Advanced DSA',
    'Object-Oriented Programming (OOP)',
    'Artificial Intelligence (AI)',
    'Database Management Systems (DBMS)',
    'Machine Learning',
    'Search Engine & Information Retrieval',
  ],
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'GenAI & Agentic Systems',
    description: 'Autonomous multi-agent graphs, dense vector retrieval, and orchestration',
    skills: ['LangChain', 'LangGraph', 'RAG Pipelines', 'Prompt Engineering', 'Agentic Workflows'],
    color: 'purple',
  },
  {
    category: 'Backend & APIs',
    description: 'High-throughput enterprise services, microservices, and asynchronous pipelines',
    skills: ['Spring Boot', 'REST APIs', 'FastAPI', 'Flask', 'Pydantic'],
    color: 'cyan',
  },
  {
    category: 'Databases & Vector Stores',
    description: 'Relational persistence, vector embeddings, and search indexing',
    skills: ['PostgreSQL', 'MySQL', 'NeonDB', 'SQLAlchemy', 'FAISS', 'ChromaDB'],
    color: 'blue',
  },
  {
    category: 'Frontend Engineering',
    description: 'Modern reactive interfaces, state architecture, and responsive styling',
    skills: ['React.js', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'Axios'],
    color: 'emerald',
  },
  {
    category: 'Languages',
    description: 'Strong foundation in object-oriented and functional systems programming',
    skills: ['Java', 'Python', 'JavaScript', 'TypeScript', 'SQL'],
    color: 'amber',
  },
  {
    category: 'Tools & DevOps',
    description: 'Containerization, version control, CI/CD, and cloud hosting platforms',
    skills: ['Git', 'GitHub', 'Docker', 'Render', 'Vercel', 'Linux'],
    color: 'cyan',
  },
];

export const PROJECTS: ProjectData[] = [
  {
    id: 'autoresearch-agent',
    title: 'AutoResearch Agent',
    shortDesc: 'Autonomous GenAI Research & Report Pipeline leveraging LangGraph, LangChain, FAISS, ChromaDB, and FastAPI.',
    fullDesc: 'An autonomous multi-agent research pipeline that conducts comprehensive research on complex topics. It utilizes LangGraph for stateful cyclical execution, dynamically performs deep-web exploration, synthesizes findings using FAISS and ChromaDB vector retrieval, and outputs structured analytical reports.',
    category: 'GenAI & Agents',
    techStack: ['LangGraph', 'LangChain', 'FAISS', 'ChromaDB', 'FastAPI', 'Python'],
    bulletPoints: [
      'Multi-agent workflow orchestrated with LangGraph state machines for autonomous query planning and iterative fact verification.',
      'Hybrid semantic vector storage using ChromaDB and FAISS for instant cross-document contextual retrieval.',
      'High-throughput asynchronous FastAPI backend providing live streaming of agent reasoning steps.',
    ],
    liveLink: 'https://autoresearch-agent.ai.studio',
    image: '/src/assets/images/autoresearch_showcase_1790362351180.jpg',
    featured: true,
    architectureHighlights: [
      'Stateful Cyclical Graphs: Implemented recursive validation loops that critique intermediate drafts before generating final outputs.',
      'Dynamic Chunk Embedding: Automated pipeline parsing raw web search artifacts into high-density vector chunks.',
      'REST & Streaming Endpoints: Built resilient SSE streams for real-time thought traces.',
    ],
  },
  {
    id: 'trendsphere',
    title: 'TrendSphere',
    shortDesc: 'Real-time trend aggregation platform pulling live data via RSS and Selenium, built with Flask, SocketIO, and SQLAlchemy.',
    fullDesc: 'A high-velocity platform designed to ingest, process, and broadcast trending topics in real time. Combines Selenium automation with RSS stream ingestion, pushes dynamic updates over WebSockets using Flask-SocketIO, and structures persistence via SQLAlchemy.',
    category: 'Full-Stack & Systems',
    techStack: ['Flask', 'SocketIO', 'Selenium', 'SQLAlchemy', 'Python', 'JavaScript'],
    bulletPoints: [
      'Distributed headless scraping engine powered by Selenium and RSS feed aggregators for multi-source ingestion.',
      'Real-time bi-directional client broadcasting with zero-lag WebSocket feeds via Flask-SocketIO.',
      'Optimized schema relationships and indexing in SQLAlchemy to handle concurrent trend spikes.',
    ],
    liveLink: 'https://trendysphere.netlify.app',
    image: '/src/assets/images/trendsphere_showcase_1790362365343.jpg',
    featured: true,
    architectureHighlights: [
      'Headless Automation: Configured resilient background tasks that bypass anti-bot challenges and extract structured entities.',
      'Pub/Sub WebSocket Flow: Decoupled scraper workers from frontend subscribers for sub-100ms latency.',
      'Relational Normalization: Modeled trend velocity, sentiment weights, and historical volume.',
    ],
  },
  {
    id: 'reposense',
    title: 'RepoSense',
    shortDesc: 'Intelligent GitHub Repository Search Engine using React.js, Spring Boot, and PostgreSQL Full-Text Search.',
    fullDesc: 'An enterprise-grade repository discovery engine designed to locate codebase dependencies, architecture patterns, and trending repositories with instantaneous natural-language queries.',
    category: 'Full-Stack & Systems',
    techStack: ['React.js', 'Spring Boot', 'PostgreSQL', 'TypeScript', 'Tailwind CSS'],
    bulletPoints: [
      'Production Spring Boot backend with robust repository indexing, caching layers, and rate-limited API handlers.',
      'PostgreSQL Full-Text Search with customized dictionary lexemes, inverted indexes (GIN), and relevance ranking.',
      'Fast responsive React client with live debounced search, faceted filtering, and code snippet rendering.',
    ],
    liveLink: 'https://reposense-frontend-phi.vercel.app',
    image: '/src/assets/images/reposense_showcase_1790362376527.jpg',
    featured: false,
    architectureHighlights: [
      'GIN-Indexed Queries: Sub-50ms execution across tens of thousands of repository metadata rows.',
      'Spring Boot Architecture: Strict separation of concerns with Services, Repositories, DTO mappings, and exception advisors.',
      'Modern UI/UX: Interactive syntax highlighters and quick filter presets.',
    ],
  },
  {
    id: 'sentinel-ai',
    title: 'SentinelAI',
    shortDesc: 'Resilient LLM API Gateway supporting multi-provider load balancing and circuit breaker patterns using Python/FastAPI.',
    fullDesc: 'A mission-critical middleware gateway protecting applications against LLM vendor rate limits, downtime, and latency jitter. Features token bucket algorithms, automated provider failover, and circuit breaker patterns.',
    category: 'GenAI & Agents',
    techStack: ['Python', 'FastAPI', 'Pydantic', 'AsyncIO', 'Docker'],
    bulletPoints: [
      'Multi-provider round-robin and latency-weighted load balancing across OpenAI, Anthropic, and Google Gemini endpoints.',
      'Configurable circuit breaker pattern that isolates degrading LLM upstream providers and automatically falls back.',
      'Fine-grained token bucket rate limiting and strict Pydantic payload validation.',
    ],
    githubLink: 'https://github.com/debangsumisra/Token_balancing',
    featured: false,
    architectureHighlights: [
      'Circuit Breaker States: Closed, Half-Open, and Open state transitions based on rolling error rate windows.',
      'Zero-Copy Streaming: Proxies SSE chunks without buffering overhead to preserve minimal time-to-first-token.',
      'Observability: Built-in latency tracing and provider health heartbeats.',
    ],
  },
  {
    id: 'linkedin-social-graph',
    title: 'LinkedIn Social Graph Analysis',
    shortDesc: 'Constructed and analyzed a professional social graph using Pandas, NetworkX, and Matplotlib to identify top-influence nodes.',
    fullDesc: 'Graph-theoretic investigation of professional network clusters. Built network adjacency structures from connection datasets to identify influential connectors, high-centrality bridges, and community partitions.',
    category: 'Data & Analytics',
    techStack: ['Python', 'NetworkX', 'Pandas', 'Matplotlib', 'Graph Theory'],
    bulletPoints: [
      'Topological network modeling using NetworkX to compute Degree, Betweenness, and Eigenvector centralities.',
      'Identified cross-industry information brokers using bridge detection algorithms and Louvain modularity clustering.',
      'Created high-clarity data visualizations and topological chord diagrams using Matplotlib.',
    ],
    featured: false,
    architectureHighlights: [
      'Influence Metric Synthesis: Blended multiple graph algorithms into a unified composite ranking score.',
      'Large-Scale Matrix Processing: Handled sparse connection matrices efficiently with Pandas vectorization.',
      'Network Density & Clustering: Discovered tight professional hubs and calculated average path lengths.',
    ],
  },
  {
    id: 'fancode-optimization',
    title: 'Fancode Optimization',
    shortDesc: 'Algorithmic optimization suite and data pipeline performance enhancement for streaming metrics and location telemetry.',
    fullDesc: 'A specialized optimization project addressing location matching algorithms, data pipeline filtering, and latency reduction for high-throughput sports telemetry.',
    category: 'Data & Analytics',
    techStack: ['Python', 'Data Structures', 'Algorithmic Optimization', 'REST APIs'],
    bulletPoints: [
      'Engineered optimized boundary checking and geospatial filter algorithms with improved asymptotic time complexity.',
      'Built automated verification harnesses ensuring 100% test coverage against mock API boundary states.',
      'Streamlined memory consumption and redundant API requests through intelligent caching.',
    ],
    githubLink: 'https://github.com/debangsumisra/Fancode_optimization',
    featured: false,
    architectureHighlights: [
      'Algorithmic Refactoring: Replaced O(N^2) brute-force lookups with indexed hash maps and spatial spatial bounding.',
      'Deterministic Test Suites: Validated edge cases for user location coordinates and completion flags.',
    ],
  },
];
