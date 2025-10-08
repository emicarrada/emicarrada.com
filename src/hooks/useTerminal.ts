import { useState, useEffect, useRef } from 'react';
import { TerminalHistory } from '@/types';
import { AVAILABLE_COMMANDS, COMMAND_OUTPUTS } from '@/constants/terminal';

interface UseTerminalReturn {
  history: TerminalHistory[];
  currentCommand: string;
  setCurrentCommand: (command: string) => void;
  processCommand: (command: string) => void;
  terminalRef: React.RefObject<HTMLDivElement | null>;
  inputRef: React.RefObject<HTMLInputElement | null>;
  handleKeyPress: (e: React.KeyboardEvent) => void;
  focusInput: () => void;
}

export function useTerminal(): UseTerminalReturn {
  const [history, setHistory] = useState<TerminalHistory[]>([]);
  const [currentCommand, setCurrentCommand] = useState('');
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  };

  const focusInput = () => {
    inputRef.current?.focus();
  };

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  const processCommand = (cmd: string) => {
    const command = cmd.toLowerCase().trim();
    
    if (command === '') return;
    
    let output = '';
    
    if (command === 'help') {
      output = Object.entries(AVAILABLE_COMMANDS)
        .map(([cmd, desc]) => `${cmd}: ${desc}`)
        .join('\n');
    } else if (command === 'clear') {
      setHistory([]);
      return;
    } else if (COMMAND_OUTPUTS[command]) {
      output = COMMAND_OUTPUTS[command];
    } else {
      output = `Comando no reconocido: ${command}\nEscribe 'help' para ver los comandos disponibles`;
    }

    const newEntry: TerminalHistory = {
      id: `${Date.now()}-${Math.random()}`,
      input: command,
      output,
      timestamp: new Date(),
    };

    setHistory(prev => [
      ...prev,
      { ...newEntry, output: '', timestamp: new Date() }, // Input entry
      newEntry, // Output entry
    ]);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      processCommand(currentCommand);
      setCurrentCommand('');
    }
  };

  return {
    history,
    currentCommand,
    setCurrentCommand,
    processCommand,
    terminalRef,
    inputRef,
    handleKeyPress,
    focusInput,
  };
}