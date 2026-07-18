import React from 'react';
import { BlogSubscriptionProps } from '../../../types/blog';
// @ts-ignore
import TerminalSubscribeForm from '../../TerminalSubscribeForm';

export const BlogSubscription: React.FC<BlogSubscriptionProps> = ({ 
  title, 
  subtitle, 
  className = '' 
}) => {
  return (
    <div className={`max-w-7xl mx-auto px-4 py-6 pb-0 text-center ${className}`}>
      <h3 className="text-4xl md:text-7xl font-null mb-6" style={{ color: '#FF8200' }}>
        {title}
      </h3>
      <p className="text-lg md:text-xl font-bevietnam text-white max-w-2xl mx-auto mb-4">
        {subtitle}
      </p>
      {/* Formulario de suscripción */}
      <TerminalSubscribeForm />
    </div>
  );
};