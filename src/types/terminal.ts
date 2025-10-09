export interface TerminalCommand {
  name: string;
  description: string;
  execute: (args: string[]) => string | Promise<string>;
}

export interface TerminalHistory {
  id: string;
  input: string;
  output: string;
  timestamp: Date;
}

export interface TerminalState {
  history: TerminalHistory[];
  currentInput: string;
  isProcessing: boolean;
}

export interface AvailableCommands {
  [key: string]: string;
}

export interface CommandOutputs {
  [key: string]: string;
}

// Command registry interface for extensibility (OCP)
export interface ITerminalCommandRegistry {
  register(name: string, command: TerminalCommand): void;
  unregister(name: string): void;
  execute(commandLine: string): Promise<string>;
  getAvailableCommands(): AvailableCommands;
  getHelp(commandName?: string): string;
}

// Terminal component props
export interface TerminalProps {
  className?: string;
  autoFocus?: boolean;
  welcomeMessage?: string;
  prompt?: string;
}