import React from 'react';
import { BlogHeaderProps } from '../../../types/blog';

export const BlogHeader: React.FC<BlogHeaderProps> = ({ 
  title, 
  subtitle, 
  className = '' 
}) => {
  return (
    <div className={`max-w-7xl pl-4 mx-auto mb-6 md:mb-8 text-center ${className}`}>
      <h2 className="text-4xl md:text-7xl font-null mb-4" style={{ color: '#FF8200' }}>
        {title}
      </h2>
      <p className="text-lg md:text-xl font-bevietnam text-white max-w-4xl mx-auto">
        {subtitle}
      </p>
    </div>
  );
};