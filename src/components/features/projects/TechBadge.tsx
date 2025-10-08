import React from 'react';
import { TechBadgeProps } from '../../../types/projects';

export const TechBadge: React.FC<TechBadgeProps> = ({ tech, className = '' }) => {
  return (
    <span 
      title={tech.title} 
      className={`flex items-center gap-2 px-3 py-1 ${className}`}
      style={{
        backgroundColor: '#ff8200', 
        opacity: 0.8, 
        borderRadius: '1.5rem'
      }}
    >
      <div dangerouslySetInnerHTML={{ __html: tech.svgContent }} />
      <span className="ml-2 text-sm text-white">{tech.name}</span>
    </span>
  );
};