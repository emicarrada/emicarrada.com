import { cn } from '@/utils';

interface TerminalOutputProps {
  message: string;
  type: 'success' | 'error';
  visible: boolean;
  className?: string;
}

export function TerminalOutput({ message, type, visible, className }: TerminalOutputProps) {
  if (!visible) return null;

  return (
    <div className={cn(
      'mt-6 p-4 border-l-4 font-mono',
      {
        'border-green-400': type === 'success',
        'border-red-400': type === 'error',
      },
      className
    )}>
      <span className="text-orange-400">(output): </span>
      <span className={cn({
        'text-green-400': type === 'success',
        'text-red-400': type === 'error',
      })}>
        {message}
      </span>
    </div>
  );
}