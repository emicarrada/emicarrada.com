import { BaseApiResponse, LoadingState } from './common';

// Contact form types
export interface ContactFormData {
  nombre: string;
  email: string;
  mensaje: string;
}

export interface ContactResponse extends BaseApiResponse {
  data?: {
    id: string;
    timestamp: Date;
  };
}

// Form validation
export interface FormFieldError {
  field: string;
  message: string;
}

export interface FormValidationResult {
  isValid: boolean;
  errors: FormFieldError[];
}

// Generic form state
export interface FormState<T> extends LoadingState {
  data: T;
  isDirty: boolean;
  isSubmitting: boolean;
  errors: FormFieldError[];
  touchedFields: Set<string>;
}

// Form field props
export interface FormFieldProps {
  name: string;
  label: string;
  type?: 'text' | 'email' | 'textarea' | 'password';
  value: string;
  error?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  onChange: (value: string) => void;
  onBlur?: () => void;
}

// API service interfaces
export interface IContactService {
  sendMessage(data: ContactFormData): Promise<ContactResponse>;
}

export interface IApiService {
  get<T>(endpoint: string): Promise<T>;
  post<T, U>(endpoint: string, data: U): Promise<T>;
  put<T, U>(endpoint: string, data: U): Promise<T>;
  delete<T>(endpoint: string): Promise<T>;
}