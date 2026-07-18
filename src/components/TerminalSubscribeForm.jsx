import React, { useEffect, useState } from 'react';
import CurvedInput from './ui/CurvedInput';

const SITE_COLORS = {
  backgroundColor: '#061b3a',
  textColor: '#ffffff',
  placeholderColor: 'rgba(255, 255, 255, 0.45)',
  borderColor: 'rgba(255, 130, 0, 0.35)',
  buttonColor: '#FF8200',
  buttonTextColor: '#041737',
  iconColor: '#FF8200',
  shadowColor: '#010c1a',
};

function useIsMobile(breakpoint = 640) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, [breakpoint]);

  return isMobile;
}

export default function TerminalSubscribeForm() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const isMobile = useIsMobile();

  const handleSubmit = async (value) => {
    const trimmedEmail = value.trim();
    if (!trimmedEmail || isLoading) return;

    setIsLoading(true);
    setMessage('');

    try {
      const response = await fetch('https://formspree.io/f/mpwlqrnk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: trimmedEmail,
        }),
      });

      if (response.ok) {
        setMessage('¡Gracias por suscribirte! Cada domingo recibirás nuevas actualizaciones.');
        setEmail('');
      } else {
        setMessage('Ups, ocurrió un error. Intenta de nuevo, si no funciona contáctame por email.');
      }
    } catch {
      setMessage('Ups, ocurrió un error. Intenta de nuevo, si no funciona contáctame por email.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-[#041737] w-full flex justify-center py-8">
      <div className="w-full max-w-xl px-4">
        <CurvedInput
          value={email}
          onChange={setEmail}
          onSubmit={handleSubmit}
          placeholder="tu@email.com"
          buttonText={isLoading ? 'Enviando...' : isMobile ? 'Enviar' : 'Suscribirme'}
          ariaLabel="Correo electrónico para suscripción al blog"
          name="email"
          type="email"
          width="100%"
          bend={isMobile ? 14 : 24}
          height={isMobile ? 56 : 64}
          cornerRadius={isMobile ? 14 : 18}
          fontSize={isMobile ? 12 : 16}
          showIcon={!isMobile}
          shadowSize="md"
          disabled={isLoading}
          className="font-bevietnam mx-auto"
          style={{ maxWidth: '520px', margin: '0 auto' }}
          {...SITE_COLORS}
        />

        {message && (
          <div className="text-center pt-4">
            <span className={`font-bevietnam text-sm ${message.includes('Gracias') ? 'text-green-400' : 'text-red-400'}`}>
              {message}
            </span>
          </div>
        )}

        <div className="text-center pt-3">
          <span className="text-white/50 font-bevietnam text-sm">Sin spam, solo contenido de calidad</span>
        </div>
      </div>
    </div>
  );
}
