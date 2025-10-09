import React from 'react';
import { ProjectsHeaderProps } from '../../../types/projects';

export const ProjectsHeader: React.FC<ProjectsHeaderProps> = ({ 
  title, 
  subtitle, 
  className = '' 
}) => {
  return (
    <div className={`max-w-5xl mx-auto px-4 text-center ${className}`}>
      <h2 className="font-title text-4xl md:text-5xl mb-8 text-[#FF8200]">
        {title}
      </h2>
      <p 
        className="text-lg md:text-xl mb-12" 
        style={{ fontFamily: 'Be Vietnam, sans-serif' }}
      >
        {subtitle}
      </p>
    </div>
  );
};