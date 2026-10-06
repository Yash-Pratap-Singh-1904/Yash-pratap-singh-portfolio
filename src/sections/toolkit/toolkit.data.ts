import { ToolkitCategory, ToolkitItem } from '../../types/portfolio.types';

export const TOOLKIT_CATEGORIES: ToolkitCategory[] = [
  'All',
  'Programming Languages',
  'AI / Machine Learning',
  'Data Science',
  'Backend',
  'Frontend',
  'Databases',
  'Developer Tools',
  'Core Computer Science',
];

export const TOOLKIT_ITEMS: ToolkitItem[] = [
  // Programming Languages
  {
    id: 'python',
    name: 'Python',
    category: 'Programming Languages',
    purpose: 'Core language for AI/ML modeling, automation scripts, and backend services.',
    proficiencyLevel: 'Advanced',
    icon: 'python',
  },
  {
    id: 'java',
    name: 'Java',
    category: 'Programming Languages',
    purpose: 'Enterprise software architecture, OOP design patterns, and Collections.',
    proficiencyLevel: 'Proficient',
    icon: 'coffee',
  },
  {
    id: 'cpp',
    name: 'C++',
    category: 'Programming Languages',
    purpose: 'Algorithmic problem-solving, high-efficiency data structures, and memory concepts.',
    proficiencyLevel: 'Proficient',
    icon: 'code-2',
  },
  {
    id: 'c',
    name: 'C',
    category: 'Programming Languages',
    purpose: 'Systems-level programming, pointers, and computational fundamentals.',
    proficiencyLevel: 'Working Knowledge',
    icon: 'binary',
  },
  {
    id: 'sql-lang',
    name: 'SQL',
    category: 'Programming Languages',
    purpose: 'Relational data query design, complex joins, indexing, and data normalization.',
    proficiencyLevel: 'Proficient',
    icon: 'database',
  },

  // AI / ML
  {
    id: 'scikit-learn',
    name: 'Scikit-learn',
    category: 'AI / Machine Learning',
    purpose: 'Supervised classification, regression, model validation, and metrics evaluation.',
    proficiencyLevel: 'Advanced',
    icon: 'brain-circuit',
  },
  {
    id: 'xgboost',
    name: 'XGBoost',
    category: 'AI / Machine Learning',
    purpose: 'High-performance gradient boosting trees for structured tabular data.',
    proficiencyLevel: 'Proficient',
    icon: 'activity',
  },
  {
    id: 'random-forest',
    name: 'Random Forest',
    category: 'AI / Machine Learning',
    purpose: 'Ensemble bagging algorithms for robust clinical screening models.',
    proficiencyLevel: 'Proficient',
    icon: 'trees',
  },

  // Data Science
  {
    id: 'pandas',
    name: 'Pandas',
    category: 'Data Science',
    purpose: 'Dataframe manipulation, data deduplication, imputation, and feature engineering.',
    proficiencyLevel: 'Advanced',
    icon: 'table-2',
  },
  {
    id: 'numpy',
    name: 'NumPy',
    category: 'Data Science',
    purpose: 'Multidimensional array operations, vectorized linear algebra calculations.',
    proficiencyLevel: 'Advanced',
    icon: 'calculator',
  },
  {
    id: 'matplotlib',
    name: 'Matplotlib',
    category: 'Data Science',
    purpose: 'Visualizing distributions, ROC curves, feature importances, and correlations.',
    proficiencyLevel: 'Proficient',
    icon: 'line-chart',
  },

  // Backend
  {
    id: 'fastapi',
    name: 'FastAPI',
    category: 'Backend',
    purpose: 'High-speed asynchronous REST APIs for serving machine learning models.',
    proficiencyLevel: 'Proficient',
    icon: 'zap',
  },
  {
    id: 'flask',
    name: 'Flask',
    category: 'Backend',
    purpose: 'Lightweight web microservices and ML inference application routing.',
    proficiencyLevel: 'Proficient',
    icon: 'server',
  },

  // Frontend
  {
    id: 'html5',
    name: 'HTML5',
    category: 'Frontend',
    purpose: 'Semantic markup structure for responsive web interfaces.',
    proficiencyLevel: 'Proficient',
    icon: 'file-code',
  },
  {
    id: 'css3',
    name: 'CSS3',
    category: 'Frontend',
    purpose: 'Styling, flexbox, CSS grid, and responsive design systems.',
    proficiencyLevel: 'Proficient',
    icon: 'layout',
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'Frontend',
    purpose: 'Client-side interactivity, DOM manipulation, and asynchronous API calls.',
    proficiencyLevel: 'Proficient',
    icon: 'file-json',
  },

  // Databases
  {
    id: 'dbms-sql',
    name: 'Relational DBMS',
    category: 'Databases',
    purpose: 'Database normalization, ACID transaction consistency, schema design, and DDL/DML.',
    proficiencyLevel: 'Proficient',
    icon: 'database',
  },

  // Developer Tools
  {
    id: 'git',
    name: 'Git',
    category: 'Developer Tools',
    purpose: 'Distributed version control, branch management, and collaborative workflows.',
    proficiencyLevel: 'Proficient',
    icon: 'git-branch',
  },
  {
    id: 'github',
    name: 'GitHub',
    category: 'Developer Tools',
    purpose: 'Code repository hosting, open-source portfolio sharing, and issue tracking.',
    proficiencyLevel: 'Proficient',
    icon: 'github',
  },
  {
    id: 'vscode',
    name: 'VS Code',
    category: 'Developer Tools',
    purpose: 'Primary integrated development environment with extensions and debuggers.',
    proficiencyLevel: 'Advanced',
    icon: 'terminal',
  },
  {
    id: 'jupyter',
    name: 'Jupyter & Colab',
    category: 'Developer Tools',
    purpose: 'Interactive data science exploration, experimentation, and GPU prototyping.',
    proficiencyLevel: 'Advanced',
    icon: 'book-open',
  },
  {
    id: 'linux',
    name: 'Linux / Shell',
    category: 'Developer Tools',
    purpose: 'Command line utilities, shell scripting, environment configuration, and automation.',
    proficiencyLevel: 'Proficient',
    icon: 'terminal-square',
  },

  // Core Computer Science
  {
    id: 'dsa',
    name: 'Data Structures & Algorithms',
    category: 'Core Computer Science',
    purpose: 'Trees, graphs, dynamic programming, recursion, and O(n log n) optimization.',
    proficiencyLevel: 'Proficient',
    icon: 'network',
  },
  {
    id: 'oop',
    name: 'Object-Oriented Programming',
    category: 'Core Computer Science',
    purpose: 'Encapsulation, inheritance, polymorphism, abstract interfaces, and design patterns.',
    proficiencyLevel: 'Advanced',
    icon: 'box',
  },
  {
    id: 'os-networks',
    name: 'OS & Computer Networks',
    category: 'Core Computer Science',
    purpose: 'Process scheduling, concurrency, TCP/IP stack, routing protocols, and OSI model.',
    proficiencyLevel: 'Working Knowledge',
    icon: 'radio',
  },
];
