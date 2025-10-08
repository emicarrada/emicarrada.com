import { useTerminal } from '@/hooks/useTerminal';
import { TERMINAL_STYLES } from '@/constants/terminal';
import { TerminalHeader } from './TerminalHeader';
import { TerminalHistoryDisplay } from './TerminalHistoryDisplay';
import { TerminalInput } from './TerminalInput';
import { cn } from '@/utils';

interface InteractiveTerminalProps {
  className?: string;
}

export function InteractiveTerminal({ className }: InteractiveTerminalProps) {
  const {
    history,
    currentCommand,
    setCurrentCommand,
    terminalRef,
    inputRef,
    handleKeyPress,
    focusInput,
  } = useTerminal();

  return (
    <div 
      ref={terminalRef}
      className={cn(
        TERMINAL_STYLES.bgPrimary,
        TERMINAL_STYLES.textPrimary,
        TERMINAL_STYLES.height,
        'p-4 rounded-lg font-mono text-sm overflow-y-auto relative cursor-text',
        className
      )}
      onClick={focusInput}
    >
      <TerminalHeader />
      
      <div className="mt-8 mb-2">
        Bienvenido a mi terminal interactiva! Escribe 'help' para ver los comandos disponibles y descubrir más sobre mí.
      </div>
      
      <TerminalHistoryDisplay history={history} />
      
      <TerminalInput
        currentCommand={currentCommand}
        onCommandChange={setCurrentCommand}
        onKeyPress={handleKeyPress}
        inputRef={inputRef}
      />
    </div>
  );
}