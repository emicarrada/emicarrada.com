import { TerminalHistory } from '@/types';
import { TerminalPrompt } from './TerminalPrompt';

interface TerminalHistoryDisplayProps {
  history: TerminalHistory[];
}

export function TerminalHistoryDisplay({ history }: TerminalHistoryDisplayProps) {
  return (
    <div>
      {history.map((entry, i) => (
        <div key={`${entry.id}-${i}`} className="mb-1">
          {entry.output === '' ? (
            // Input entry
            <div>
              <TerminalPrompt />
              {entry.input}
            </div>
          ) : (
            // Output entry
            <div className="whitespace-pre-wrap">{entry.output}</div>
          )}
        </div>
      ))}
    </div>
  );
}