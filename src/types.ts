export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  handle: string;
}

export interface EducationData {
  degree: string;
  university: string;
  timeline: string;
  gpa: string;
  scholarship: string;
  coursework: string[];
}

export interface ProjectData {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  category: 'GenAI & Agents' | 'Full-Stack & Systems' | 'Data & Analytics';
  techStack: string[];
  bulletPoints: string[];
  liveLink?: string;
  githubLink?: string;
  image?: string;
  featured?: boolean;
  architectureHighlights?: string[];
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: string[];
  color: 'cyan' | 'purple' | 'emerald' | 'blue' | 'amber';
}
