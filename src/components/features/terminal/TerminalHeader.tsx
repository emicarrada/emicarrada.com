import { cn } from '@/utils';

interface TerminalHeaderProps {
  className?: string;
}

export function TerminalHeader({ className }: TerminalHeaderProps) {
  return (
    <div className={cn(
      'absolute top-0 left-0 w-full bg-[#0a2550] p-2 rounded-t-lg flex items-center',
      className
    )}>
      <div className="flex space-x-2">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
      </div>
    </div>
  );
}