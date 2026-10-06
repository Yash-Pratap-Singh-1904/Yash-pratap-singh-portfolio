export type ThemeMode = 'dark' | 'light';

export interface NavItem {
  id: string;
  label: string;
  number: string;
  href: string;
}

export interface SocialLink {
  platform: 'github' | 'linkedin' | 'email' | 'phone';
  url: string;
  label: string;
  displayValue?: string;
}

export interface MetricItem {
  value: string;
  label: string;
  subtext?: string;
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  features: string[];
  contributions: string[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  metrics?: { label: string; value: string }[];
  category: 'ml' | 'systems' | 'web';
  status: 'Completed' | 'In Progress';
  date: string;
  image?: string;
  illustrationType?: 'hospital' | 'medical-prediction' | 'fastapi-pipeline' | 'dynamic-memory';
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
  highlight?: boolean;
}

export type ToolkitCategory =
  | 'All'
  | 'Programming Languages'
  | 'AI / Machine Learning'
  | 'Data Science'
  | 'Backend'
  | 'Frontend'
  | 'Databases'
  | 'Developer Tools'
  | 'Core Computer Science';

export interface ToolkitItem {
  id: string;
  name: string;
  category: ToolkitCategory;
  purpose: string;
  proficiencyLevel?: 'Advanced' | 'Proficient' | 'Working Knowledge';
  icon: string;
}

export interface ExperienceItem {
  id: string;
  title: string;
  type: 'Academic Project' | 'Practical Development' | 'Internship' | 'Technical Leadership' | 'Intensive Training';
  organization: string;
  period: string;
  location?: string;
  summary: string;
  highlights: string[];
  technologies: string[];
  outcome?: string;
  verificationLabel?: string;
  verificationUrl?: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  specialization?: string;
  period: string;
  currentStatus: string;
  cgpaOrScore: string;
  location: string;
  highlights: string[];
  courses: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  event: string;
  organization: string;
  rank: string;
  date: string;
  description: string;
  verified: boolean;
  certificateNote?: string;
  certificateUrl?: string;
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  certificateUrl?: string;
  category: 'Certification' | 'Course' | 'Workshop';
  description?: string;
  skillsLearned: string[];
}

export interface ApproachStep {
  number: string;
  title: string;
  shortDescription: string;
  detailedPoints: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
