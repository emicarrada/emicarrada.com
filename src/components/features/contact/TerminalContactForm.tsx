import { useState } from 'react';
import { useContactForm } from '@/hooks/useContactForm';
import { contactService } from '@/services/api/ContactService';
import { TerminalHeader } from '@/components/features/terminal/TerminalHeader';
import { TerminalFormField } from './TerminalFormField';
import { TerminalOutput } from './TerminalOutput';
import { TerminalContactHeader } from './TerminalContactHeader';
import { cn } from '@/utils';

export function TerminalContactForm() {
  const {
    data,
    isSubmitting,
    error,
    updateField,
    submitForm,
    touchField,
    getFieldError,
  } = useContactForm(contactService);

  const [showOutput, setShowOutput] = useState(false);
  const [outputMessage, setOutputMessage] = useState('');
  const [outputType, setOutputType] = useState<'success' | 'error'>('success');

  // Helper to handle field props correctly
  const getFieldProps = (fieldName: 'nombre' | 'email' | 'mensaje') => {
    const fieldError = getFieldError(fieldName);
    return {
      name: fieldName,
      value: data[fieldName],
      onChange: (value: string) => updateField(fieldName, value),
      onBlur: () => touchField(fieldName),
      required: true,
      ...(fieldError && { error: fieldError }),
    };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await submitForm();
      setOutputType('success');
      setOutputMessage('Mensaje enviado correctamente! Respondo en menos de 24h.');
      setShowOutput(true);
      setTimeout(() => setShowOutput(false), 4000);
    } catch (submitError) {
      setOutputType('error');
      setOutputMessage(error || 'Error al enviar el mensaje. Por favor intenta de nuevo.');
      setShowOutput(true);
      setTimeout(() => setShowOutput(false), 4000);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ backgroundColor: '#041737' }}>
      <div className="w-full max-w-4xl">
        {/* Terminal Window */}
        <div className="bg-[#061b3a] rounded-lg shadow-xl overflow-hidden font-mono">
          <TerminalHeader />

          {/* Terminal Content */}
          <div className="p-8 text-green-400 leading-relaxed">
            <TerminalContactHeader />

            {/* Welcome Message */}
            <div className="mb-8 text-lg">
              <span className="text-green-400">¿Listo para construir algo?</span>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <TerminalFormField
                {...getFieldProps('nombre')}
                label="nombre"
                type="text"
              />

              <TerminalFormField
                {...getFieldProps('email')}
                label="email"
                type="email"
              />

              <TerminalFormField
                {...getFieldProps('mensaje')}
                label="mensaje"
                type="textarea"
              />

              {/* Submit Button */}
              <div className="mt-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    'bg-transparent border-2 border-orange-400 text-orange-400 font-mono px-6 py-3',
                    'hover:bg-orange-400 hover:text-[#061b3a] transition-all duration-300',
                    'focus:outline-none focus:shadow-[0_0_15px_rgba(255,165,0,0.5)]',
                    'disabled:opacity-50 disabled:cursor-not-allowed'
                  )}
                >
                  {isSubmitting ? '$ ejecutando...' : '$ [ ejecutar_contacto --enviar ]'}
                </button>
              </div>

              <TerminalOutput
                message={outputMessage}
                type={outputType}
                visible={showOutput}
              />
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