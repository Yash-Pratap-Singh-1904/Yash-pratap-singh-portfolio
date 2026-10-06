import { SkillCategory } from '../../types/portfolio.types';

export const FEATURED_AI_SKILL: SkillCategory = {
  title: 'AI / Machine Learning',
  description:
    'Hands-on experience developing end-to-end data preprocessing pipelines, feature engineering, class-balancing with SMOTE, cross-validation, and deploying ensemble architectures (XGBoost, Random Forest).',
  skills: [
    'Python',
    'Pandas',
    'NumPy',
    'Scikit-learn',
    'XGBoost',
    'Random Forest',
    'Data Preprocessing',
    'Model Evaluation',
  ],
  highlight: true,
};

export const SUPPORTING_SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Software Development',
    description: 'Object-oriented programming, design patterns, clean code, and robust modular system design.',
    skills: ['Java', 'C++', 'Python', 'OOP Design', 'Exception Handling', 'Collections Framework'],
  },
  {
    title: 'Computer Science',
    description: 'Strong foundations in data structures, algorithms, database systems, and low-level computing.',
    skills: ['DSA', 'DBMS', 'SQL', 'Operating Systems', 'Computer Networks', 'Time-Space Complexity'],
  },
  {
    title: 'Web & API Development',
    description: 'Building connected applications, RESTful microservices, and interactive client interfaces.',
    skills: ['FastAPI', 'Flask', 'Git / GitHub', 'HTML5', 'CSS3', 'JavaScript'],
  },
  {
    title: 'AI & Applied Intelligence',
    description: 'Exploring machine learning, natural language processing, prompt design, and applied AI workflows.',
    skills: ['Supervised ML', 'Model Benchmarking', 'NLP Basics', 'Generative AI Tools', 'Prompt Engineering'],
  },
];
