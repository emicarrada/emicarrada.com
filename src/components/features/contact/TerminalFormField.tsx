import { FormFieldProps } from '@/types';
import { cn } from '@/utils';

export function TerminalFormField({
  name,
  label,
  type = 'text',
  value,
  error,
  placeholder,
  required = false,
  disabled = false,
  onChange,
  onBlur,
}: FormFieldProps) {
  const isTextarea = type === 'textarea';
  
  const inputClasses = cn(
    'w-full bg-transparent text-green-400 font-mono p-2 focus:outline-none transition-all duration-300',
    'focus:border-orange-400 focus:shadow-[0_0_10px_rgba(255,165,0,0.3)]',
    {
      'border-none border-b-2 border-orange-400': !isTextarea,
      'border-2 border-orange-400 rounded resize-none': isTextarea,
      'opacity-50 cursor-not-allowed': disabled,
      'border-red-400': error,
    }
  );

  const InputComponent = isTextarea ? 'textarea' : 'input';

  return (
    <div>
      <label className="block text-green-400 mb-2">
        {label}: {isTextarea ? '"""' : '[]'}
        {required && <span className="text-red-400 ml-1">*</span>}
      </label>
      
      <InputComponent
        name={name}
        type={isTextarea ? undefined : type}
        value={value}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        rows={isTextarea ? 4 : undefined}
        className={inputClasses}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
      />
      
      {isTextarea && <div className="text-green-400 mt-1">"""</div>}
      
      {error && (
        <div className="text-red-400 text-sm mt-1 font-mono">
          ERROR: {error}
        </div>
      )}
    </div>
  );
}