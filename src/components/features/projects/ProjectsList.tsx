import React from 'react';
import { ProjectsListProps } from '../../../types/projects';
import { ProjectCard } from './ProjectCard';

export const ProjectsList: React.FC<ProjectsListProps> = ({ projects, className = '' }) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center items-start ${className}`}>
      {projects.map((project) => (
        <ProjectCard 
          key={project.id} 
          project={project} 
        />
      ))}
    </div>
  );
};