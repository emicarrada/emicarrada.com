import { useBlinkingCursor } from '@/hooks/useBlinkingCursor';

interface TerminalHeaderProps {
  user?: string;
  path?: string;
}

export function TerminalContactHeader({ user = 'emicarrada', path = 'contact' }: TerminalHeaderProps) {
  const cursorVisible = useBlinkingCursor();

  return (
    <div className="mb-6">
      <span className="text-orange-400">{user}@{path}</span>
      <span className="text-green-400">:~$ </span>
      <span className={`${cursorVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>
        _
      </span>
    </div>
  );
}