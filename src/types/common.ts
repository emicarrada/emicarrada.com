// Common types used across the application
export interface BaseApiResponse {
  success: boolean;
  message: string;
}

export interface ApiError {
  message: string;
  code?: string;
  details?: unknown;
}

export interface LoadingState {
  isLoading: boolean;
  error: string | null;
}

// Generic utility types
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export type RequiredOnly<T, K extends keyof T> = Partial<T> & Required<Pick<T, K>>;

// Component prop types
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface ClickableProps {
  onClick?: () => void;
  disabled?: boolean;
}

// Theme and styling
export type ThemeMode = 'light' | 'dark';

export interface ThemeContextType {
  mode: ThemeMode;
  toggleTheme: () => void;
}