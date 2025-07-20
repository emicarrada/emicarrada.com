import React from "react";

export default function CTAButton({ className = "", ...props }) {
  const handleClick = (e) => {
    e.preventDefault();
    const section = document.getElementById("servicios");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    if (props.onClick) props.onClick(e);
  };
  return (
    <button
      className={`px-8 py-4 rounded-xl font-title text-xl shadow-inner shadow-[#233a5e] 
        bg-[#041737] text-white transition-all duration-200 ease-in-out
        border-none outline-none
        
        /* Neumorphism effect */
        shadow-[inset_4px_4px_12px_#233a5e,inset_-4px_-4px_12px_#010c1a,0_2px_8px_#010c1a22]
        hover:shadow-[0_4px_16px_#010c1a55,0_-4px_16px_#233a5e44]
        hover:-translate-y-1 hover:scale-105
        hover:text-[#FF8200]
        " ${className}`}
      onClick={handleClick}
      {...props}
    >
      Ver servicios
    </button>
  );
}
