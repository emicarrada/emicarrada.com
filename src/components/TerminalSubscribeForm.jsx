import React, { useState } from 'react';

export default function TerminalSubscribeForm() {
  const [email, setEmail] = useState('');
  const [focused, setFocused] = useState(false);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    try {
      const response = await fetch('https://api.brevo.com/v3/contacts', {
        method: 'POST',
        headers: {
          'api-key': import.meta.env.VITE_BREVO_API_KEY, // Usar variable de entorno
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          listIds: [3],
          updateEnabled: true
        })
      });
      if (response.ok) {
        setMessage('¡Gracias por suscribirte!');
        setEmail('');
      } else {
        setMessage('Hubo un error, intenta de nuevo.');
      }
    } catch (error) {
      setMessage('Hubo un error, intenta de nuevo.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-[#041737] w-full flex justify-center py-8">
      <div className="max-w-md w-full p-6 rounded-lg">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <div className="flex items-center">
              <span className="text-[#00FF7F] font-mono text-lg mr-2">{'>'}</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                placeholder="// introduce tu email"
                className={`bg-transparent w-full py-3 px-2 font-mono text-[#00FF7F] placeholder-gray-400 border-none outline-none border-b-2 transition-all duration-300 ${
                  focused ? 'border-[#FF8200]' : 'border-[#374151]'
                }`}
                required
              />
            </div>
          </div>
          
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              disabled={isLoading}
              className="bg-[#FF8200] text-[#041737] font-mono font-semibold px-6 py-3 rounded-md hover:bg-[#e57400] hover:shadow-md transition-all duration-300 disabled:opacity-50"
            >
              {isLoading ? 'Enviando...' : '[_ENTER_] Suscribirme'}
            </button>
          </div>
          
          {message && (
            <div className="text-center pt-2">
              <span className={`font-mono text-sm ${message.includes('Gracias') ? 'text-green-400' : 'text-red-400'}`}>
                {message}
              </span>
            </div>
          )}
          
          <div className="text-center pt-2">
            <span className="text-gray-400 font-mono text-sm">// Sin spam, solo contenido de calidad</span>
          </div>
        </form>
      </div>
    </div>
  );
}
