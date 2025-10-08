import { TERMINAL_STYLES } from '@/constants/terminal';

interface TerminalPromptProps {
  className?: string;
}

export function TerminalPrompt({ className }: TerminalPromptProps) {
  return (
    <span className={`${TERMINAL_STYLES.accent} ${className || ''}`}>
      guest@emicarrada:~${' '}
    </span>
  );
}