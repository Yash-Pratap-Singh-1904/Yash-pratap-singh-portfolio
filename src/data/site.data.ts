import { SocialLink } from '../types/portfolio.types';

export const SITE_CONFIG = {
  name: 'Yash Pratap Singh',
  role: 'AI/ML Engineer • Software Developer',
  tagline: 'Open To Internships & Collaborations',
  headline: 'Aspiring AI/ML Engineer | Software Developer | Design-Driven Thinker',
  subHeadline:
    'I study computer science at Lovely Professional University and spend most of my time turning that coursework into working software — FastAPI services, machine-learning pipelines, and interactive front ends. I’m drawn to problems where software development and applied AI meet.',
  university: 'Lovely Professional University',
  degree: 'Bachelor of Technology — Computer Science and Engineering',
  specialization: 'Artificial Intelligence & Machine Learning',
  cgpa: '8.62',
  graduationYear: '2028',
  location: 'Moradabad Tehsil, Uttar Pradesh, India',
  email: 'yashh.p.s90@gmail.com',
  phone: '+91-7819854956',
  githubUrl: 'https://github.com/Yash-Pratap-Singh-1904',
  linkedinUrl: 'https://www.linkedin.com/in/yash-pratap-singh1904/',
  availabilityStatus: 'Open To Internships & Collaborations',
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: 'github',
    url: SITE_CONFIG.githubUrl,
    label: 'GitHub',
    displayValue: 'Yash-Pratap-Singh-1904',
  },
  {
    platform: 'linkedin',
    url: SITE_CONFIG.linkedinUrl,
    label: 'LinkedIn',
    displayValue: 'yash-pratap-singh1904',
  },
  {
    platform: 'email',
    url: `mailto:${SITE_CONFIG.email}`,
    label: 'Email',
    displayValue: SITE_CONFIG.email,
  },
];
