import React from 'react';
import { ProjectCardProps } from '../../../types/projects';
import { TechBadge } from './TechBadge';
import { TechIconsService } from '../../../services/tech/TechIconsService';

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, className = '' }) => {
  const techIconsService = new TechIconsService();

  const getTechBadges = () => {
    return project.technologies.map((techName) => {
      const techIcon = techIconsService.getIconByName(techName);
      if (!techIcon) return null;
      
      return (
        <TechBadge 
          key={techIcon.id} 
          tech={techIcon} 
        />
      );
    }).filter(Boolean);
  };

  return (
    <div className={`bg-white rounded-lg shadow-lg overflow-hidden max-w-md ${className}`}>
      {/* Project Header */}
      <div className="p-6">
        <div className="flex items-center mb-4">
          <img 
            src={project.logo} 
            alt={`${project.name} logo`}
            className="w-12 h-12 mr-4 object-contain"
          />
          <h3 className="text-xl font-bold text-gray-900">{project.name}</h3>
        </div>

        {/* Description */}
        <p 
          className="text-gray-600 mb-6 leading-relaxed"
          style={{ fontFamily: 'Be Vietnam, sans-serif' }}
        >
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-4 justify-center mb-6">
          {getTechBadges()}
        </div>

        {/* Links */}
        <div className="flex gap-4 justify-center">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            GitHub
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-[#FF8200] text-white rounded-lg hover:bg-[#e6750e] transition-colors"
          >
            Ver Proyecto
          </a>
        </div>
      </div>
    </div>
  );
};