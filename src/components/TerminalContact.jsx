import { useState, useEffect } from 'react';

export default function TerminalContact() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: 'Hola Cristopher, quiero hablar sobre...'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showOutput, setShowOutput] = useState(false);
  const [outputMessage, setOutputMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  // Cursor parpadeante
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/mjkogjlo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre: formData.nombre,
          email: formData.email,
          mensaje: formData.mensaje,
        }),
      });

      if (response.ok) {
        setIsError(false);
        setOutputMessage('"Mensaje enviado correctamente! Respondo en menos de 24h."');
        setShowOutput(true);
        setFormData({
          nombre: '',
          email: '',
          mensaje: 'Hola Cristopher, quiero hablar sobre...'
        });
        setTimeout(() => setShowOutput(false), 4000);
      } else {
        throw new Error('Error al enviar el mensaje');
      }
    } catch (error) {
      console.error('Error:', error);
      setIsError(true);
      setOutputMessage('"Error al enviar el mensaje. Por favor intenta de nuevo o contacta por email."');
      setShowOutput(true);
      setTimeout(() => setShowOutput(false), 4000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ backgroundColor: '#041737' }}>
      <div className="w-full max-w-4xl">
        {/* Terminal Window */}
        <div className="bg-[#061b3a] rounded-lg shadow-xl overflow-hidden font-mono">
          {/* macOS Controls Bar */}
          <div className="bg-[#0a2550] p-2 flex items-center">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
          </div>

          {/* Terminal Content */}
          <div className="p-8 text-green-400 leading-relaxed">
            {/* Terminal Header */}
            <div className="mb-6">
              <span className="text-orange-400">emicarrada@contact</span>
              <span className="text-green-400">:~$ </span>
              <span className={`${cursorVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>_</span>
            </div>

            {/* Welcome Message */}
            <div className="mb-8 text-lg">
              <span className="text-green-400">¿Listo para construir algo?</span>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nombre */}
              <div>
                <label className="block text-green-400 mb-2">nombre: []</label>
                <input
                  type="text"
                  value={formData.nombre}
                  onChange={(e) => handleInputChange('nombre', e.target.value)}
                  className="w-full bg-transparent border-none border-b-2 border-orange-400 text-green-400 font-mono p-2 focus:outline-none focus:border-orange-400 focus:shadow-[0_0_10px_rgba(255,165,0,0.3)] transition-all duration-300"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-green-400 mb-2">email: []</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full bg-transparent border-none border-b-2 border-orange-400 text-green-400 font-mono p-2 focus:outline-none focus:border-orange-400 focus:shadow-[0_0_10px_rgba(255,165,0,0.3)] transition-all duration-300"
                  required
                />
              </div>

              {/* Mensaje */}
              <div>
                <label className="block text-green-400 mb-2">mensaje: """</label>
                <textarea
                  value={formData.mensaje}
                  onChange={(e) => handleInputChange('mensaje', e.target.value)}
                  rows={4}
                  className="w-full bg-transparent border-2 border-orange-400 text-green-400 font-mono p-3 focus:outline-none focus:border-orange-400 focus:shadow-[0_0_10px_rgba(255,165,0,0.3)] transition-all duration-300 resize-none rounded"
                  required
                />
                <div className="text-green-400 mt-1">"""</div>
              </div>

              {/* Submit Button */}
              <div className="mt-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-transparent border-2 border-orange-400 text-orange-400 font-mono px-6 py-3 hover:bg-orange-400 hover:text-[#061b3a] transition-all duration-300 focus:outline-none focus:shadow-[0_0_15px_rgba(255,165,0,0.5)] disabled:opacity-50"
                >
                  {isSubmitting ? '$ ejecutando...' : '$ [ ejecutar_contacto --enviar ]'}
                </button>
              </div>

              {/* Output */}
              {showOutput && (
                <div className={`mt-6 p-4 border-l-4 ${isError ? 'border-red-400' : 'border-green-400'}`}>
                  <span className="text-orange-400">(output): </span>
                  <span className={isError ? 'text-red-400' : 'text-green-400'}>{outputMessage}</span>
                </div>
              )}
            </form>

            {/* Terminal Footer */}
            <div className="mt-12 text-sm opacity-70">
              <span className="text-orange-400">~/contact $</span>
              <span className="text-green-400"> ready_to_connect</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
