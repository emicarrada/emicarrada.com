import { TerminalPrompt } from './TerminalPrompt';

interface TerminalInputProps {
  currentCommand: string;
  onCommandChange: (command: string) => void;
  onKeyPress: (e: React.KeyboardEvent) => void;
  inputRef: React.RefObject<HTMLInputElement | null>;
}

export function TerminalInput({
  currentCommand,
  onCommandChange,
  onKeyPress,
  inputRef,
}: TerminalInputProps) {
  return (
    <div className="flex">
      <TerminalPrompt />
      <input
        ref={inputRef}
        type="text"
        value={currentCommand}
        onChange={(e) => onCommandChange(e.target.value)}
        onKeyDown={onKeyPress}
        className="bg-transparent focus:outline-none flex-1 w-full"
        autoComplete="off"
        spellCheck={false}
      />
    </div>
  );
}