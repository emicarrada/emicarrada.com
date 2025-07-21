import React from "react";

export default function EmailCTAButton({ className = "", ...props }) {
  const handleClick = (e) => {
    e.preventDefault();
    // Abrir cliente de email con dirección predefinida
    window.location.href = "mailto:tu-email@ejemplo.com?subject=Colaboración&body=Hola,%20me%20gustaría%20hablar%20contigo%20sobre...";
    if (props.onClick) props.onClick(e);
  };

  return (
    <div className="flex justify-center py-1 md:py-2">
      <button
        className={`px-16 py-8 md:px-20 md:py-10 rounded-xl font-title text-2xl md:text-4xl lg:text-5xl 
          bg-[#041737] text-white transition-all duration-200 ease-in-out
          border-none outline-none
          
          /* Neumorphism effect */
          shadow-[inset_4px_4px_12px_#233a5e,inset_-4px_-4px_12px_#010c1a,0_2px_8px_#010c1a22]
          hover:shadow-[0_4px_16px_#010c1a55,0_-4px_16px_#233a5e44]
          hover:-translate-y-1 hover:scale-105
          hover:text-[#FF8200]
          ${className}`}
        onClick={handleClick}
        {...props}
      >
        Enviar Correo
      </button>
    </div>
  );
}
