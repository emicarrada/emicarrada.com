import { BaseComponentProps, ClickableProps } from './common';

// Button component types
export interface ButtonProps extends BaseComponentProps, ClickableProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

// Card component types
export interface CardProps extends BaseComponentProps {
  title?: string;
  description?: string;
  image?: string;
  footer?: React.ReactNode;
  hoverable?: boolean;
}

// Modal component types
export interface ModalProps extends BaseComponentProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
}

// Navigation types
export interface NavigationItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
  external?: boolean;
  active?: boolean;
}

export interface HeaderProps extends BaseComponentProps {
  navigation: NavigationItem[];
  logo?: React.ReactNode;
  actions?: React.ReactNode;
}

// Layout component types
export interface LayoutProps extends BaseComponentProps {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  sidebar?: React.ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
}

// Loading component types
export interface LoadingProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'spinner' | 'dots' | 'bars';
  text?: string;
}

// Error component types
export interface ErrorBoundaryProps extends BaseComponentProps {
  fallback?: React.ComponentType<{ error: Error; resetError: () => void }>;
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
}