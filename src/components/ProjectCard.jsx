import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProjectCard({ logo, name, github, live, description, techs, children }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      className="bg-[#092a5a] rounded-2xl shadow-lg p-6 flex flex-col items-center justify-between min-h-[320px] max-w-md mx-auto transition-all duration-300"
      initial={{ boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}
      whileHover={{ boxShadow: '0 4px 16px rgba(0,0,0,0.16)' }}
    >
      <img
        src={logo}
        alt={name}
        className={`${['Zoi Marketing', 'Club+'].includes(name) ? 'w-40 h-40' : 'w-20 h-20'} object-contain mb-4 rounded-xl`}
        style={{ marginTop: 8 }}
      />
      <h3 className="text-2xl mb-4 font-semibold text-white" style={{ fontFamily: 'Null Free, sans-serif' }}>{name}</h3>
      <div className="flex gap-3 mb-2">
        <a href={live} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-[#FF8200] text-white rounded-full font-bold text-sm transition-colors duration-200 hover:bg-[#041737]">Ver Proyecto</a>
        <a href={github} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-[#222] text-white rounded-full font-bold text-sm flex items-center justify-center group" aria-label="GitHub">
          <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 transition-colors duration-200 text-white group-hover:text-[#FF8200]">
            <path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
          </svg>
        </a>
        <button
          className="px-4 py-2 bg-[#041737] text-white rounded-full font-bold text-sm transition-colors duration-200 hover:bg-[#FF8200] flex items-center justify-center"
          onClick={() => setExpanded((e) => !e)}
          aria-label={expanded ? 'Ver menos' : 'Ver más'}
        >
          {expanded ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          )}
        </button>
      </div>
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="w-full mt-4 text-left"
          >
            <p className="text-white text-base mb-3 text-center" style={{ fontFamily: 'Be Vietnam, sans-serif' }}>{description}</p>
            {children}
            {/* Los letreros de techs se eliminan para Club+ si hay children */}
            {!children && (
              <div className="flex flex-wrap gap-2 mt-2">
                {techs.map((tech) => (
                  <span key={tech} className="bg-[#FF8200] text-white px-3 py-1 rounded-full text-xs font-semibold">{tech}</span>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
