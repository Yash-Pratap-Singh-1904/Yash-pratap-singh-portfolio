import React from 'react';
import { PROJECTS_DATA } from './projects.data';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { ProjectCard } from './ProjectCard';

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-16 lg:py-24 border-t border-[var(--border-color)]">
      <SectionHeading
        kicker="FEATURED PROJECTS"
        number="03"
        title="Selected Projects"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {PROJECTS_DATA.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};
