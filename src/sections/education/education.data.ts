import { EducationItem } from '../../types/portfolio.types';

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'lpu-btech',
    institution: 'Lovely Professional University',
    degree: 'Bachelor of Technology — Computer Science and Engineering',
    specialization: 'Artificial Intelligence & Machine Learning Focus',
    period: "Aug' 2024 — Present (Expected 2028)",
    currentStatus: 'Currently Pursuing (CGPA: 8.62)',
    cgpaOrScore: 'CGPA: 8.62',
    location: 'Phagwara, Punjab',
    highlights: [
      'Maintaining strong academic performance with a 8.62 CGPA',
      'Specialized in Applied AI, Machine Learning Pipelines, and Software Engineering',
      'Head of Technical Team at Accenture Emph Club (LPU CPE)',
      'Coursework projects in Java OOP, Machine Learning, DBMS, and Algorithm Design',
    ],
    courses: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming (Java)',
      'Database Management Systems',
      'Machine Learning Foundations',
      'Operating Systems',
      'Computer Networks',
    ],
  },
  {
    id: 'maria-school-intermediate',
    institution: 'Maria School',
    degree: 'Senior Secondary / Intermediate (Class XII)',
    period: "Apr' 2022 — Mar' 2023",
    currentStatus: 'Completed',
    cgpaOrScore: 'Percentage: 73.5%',
    location: 'Jaspur, Uttarakhand',
    highlights: [
      'Science Stream (Physics, Chemistry, Mathematics, Computer Science)',
      'Developed early passion for logical reasoning and programming',
    ],
    courses: ['Mathematics', 'Physics', 'Chemistry', 'Computer Science'],
  },
  {
    id: 'maria-school-matriculation',
    institution: 'Maria School',
    degree: 'Secondary School / Matriculation (Class X)',
    period: "Apr' 2020 — Mar' 2021",
    currentStatus: 'Completed',
    cgpaOrScore: 'Percentage: 87.6%',
    location: 'Jaspur, Uttarakhand',
    highlights: [
      'Strong academic distinction with 87.6% marks',
      'Solid foundations in science, mathematics, and analytical reasoning',
    ],
    courses: ['Mathematics', 'Science', 'Social Science', 'English'],
  },
];
