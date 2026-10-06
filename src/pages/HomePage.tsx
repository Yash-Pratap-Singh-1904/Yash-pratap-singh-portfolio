import React from 'react';
import { HomeSection } from '../sections/home/HomeSection';
import { AboutSection } from '../sections/about/AboutSection';
import { ProjectsSection } from '../sections/projects/ProjectsSection';
import { SkillsSection } from '../sections/skills/SkillsSection';
import { ToolkitSection } from '../sections/toolkit/ToolkitSection';
import { ExperienceSection } from '../sections/experience/ExperienceSection';
import { EducationSection } from '../sections/education/EducationSection';
import { AchievementsSection } from '../sections/achievements/AchievementsSection';
import { CertificationsSection } from '../sections/certifications/CertificationsSection';
import { ApproachSection } from '../sections/approach/ApproachSection';
import { ContactSection } from '../sections/contact/ContactSection';
import { ResumeSection } from '../sections/resume/ResumeSection';
import { ScrollReveal } from '../components/effects/ScrollReveal';

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-4">
      {/* 01. Home Section */}
      <HomeSection />

      {/* 02. About Section */}
      <ScrollReveal>
        <AboutSection />
      </ScrollReveal>

      {/* 03. Projects Section */}
      <ScrollReveal>
        <ProjectsSection />
      </ScrollReveal>

      {/* 04. Skills Section */}
      <ScrollReveal>
        <SkillsSection />
      </ScrollReveal>

      {/* 05. Technology Toolkit */}
      <ScrollReveal>
        <ToolkitSection />
      </ScrollReveal>

      {/* 06. Experience & Practical Work */}
      <ScrollReveal>
        <ExperienceSection />
      </ScrollReveal>

      {/* 07. Education & Academic Journey */}
      <ScrollReveal>
        <EducationSection />
      </ScrollReveal>

      {/* 08. Achievements */}
      <ScrollReveal>
        <AchievementsSection />
      </ScrollReveal>

      {/* 09. Certifications & Continuous Learning */}
      <ScrollReveal>
        <CertificationsSection />
      </ScrollReveal>

      {/* 10. My Approach */}
      <ScrollReveal>
        <ApproachSection />
      </ScrollReveal>

      {/* 11. Resume & Curriculum Vitae */}
      <ScrollReveal>
        <ResumeSection />
      </ScrollReveal>

      {/* 12. Contact / Get in Touch */}
      <ScrollReveal>
        <ContactSection />
      </ScrollReveal>
    </div>
  );
};
