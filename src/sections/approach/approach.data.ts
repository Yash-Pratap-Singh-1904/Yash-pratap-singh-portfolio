import { ApproachStep } from '../../types/portfolio.types';

export const APPROACH_DATA: ApproachStep[] = [
  {
    number: '01',
    title: 'Understand',
    shortDescription:
      'Break the problem into clear requirements before writing code, isolating constraints and target outcomes.',
    detailedPoints: [
      'Deconstruct complex system specs into atomic, testable problem definitions',
      'Analyze edge cases, data distribution realities, and system constraints upfront',
      'Map data flow and role-based permissions before scaffolding schemas',
    ],
  },
  {
    number: '02',
    title: 'Build',
    shortDescription:
      'Turn ideas into practical, maintainable solutions through modular code and clean architectural boundaries.',
    detailedPoints: [
      'Apply strict OOP and separation-of-concerns principles to avoid technical debt',
      'Design clean, typed APIs with predictive error handling and schema validation',
      'Implement reproducible data pipelines with target leakage prevention',
    ],
  },
  {
    number: '03',
    title: 'Improve',
    shortDescription:
      'Evaluate results rigorously, benchmark metrics against baselines, and iterate continuously.',
    detailedPoints: [
      'Benchmark ML models with stratified cross-validation, F1-scores, and ROC-AUC curves',
      'Optimize computational complexity towards O(n log n) and eliminate redundant operations',
      'Refine UX feedback loops, accessibility standards, and code clarity based on real usage',
    ],
  },
];
