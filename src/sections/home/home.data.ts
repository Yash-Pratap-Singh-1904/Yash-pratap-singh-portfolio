import { MetricItem } from '../../types/portfolio.types';

export const HOME_DATA = {
  kicker: 'AI / ML · SOFTWARE DEVELOPMENT',
  greeting: "Hello, I'm Yash Pratap Singh",
  headline: 'B.Tech Computer Science & Engineering — AI/ML Enthusiast',
  subtext:
    'I study computer science at Lovely Professional University and spend most of my time turning that coursework into working software — FastAPI services, machine-learning pipelines, and interactive front ends. I’m drawn to problems where software development and applied AI meet.',
  availability: 'OPEN TO INTERNSHIPS & COLLABORATION',
  ctaPrimary: 'Explore My Work',
  ctaSecondary: 'Download Resume',
  metrics: [
    { value: '03+', label: 'Projects', subtext: 'Production & Academic' },
    { value: 'AI/ML', label: 'Primary Focus', subtext: 'Deep Learning & Pipelines' },
    { value: '2028', label: 'Graduation', subtext: 'B.Tech CSE (Hons/AI)' },
    { value: '8.62', label: 'CGPA', subtext: 'Academic Excellence' },
  ] as MetricItem[],
};
