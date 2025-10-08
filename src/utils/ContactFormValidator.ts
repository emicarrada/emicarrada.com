import { ContactFormData, FormValidationResult, FormFieldError } from '@/types';

export class ContactFormValidator {
  private static readonly EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  private static readonly MIN_MESSAGE_LENGTH = 10;
  private static readonly MAX_MESSAGE_LENGTH = 1000;

  static validate(data: ContactFormData): FormValidationResult {
    const errors: FormFieldError[] = [];

    // Validate nombre
    if (!data.nombre.trim()) {
      errors.push({
        field: 'nombre',
        message: 'El nombre es requerido',
      });
    } else if (data.nombre.trim().length < 2) {
      errors.push({
        field: 'nombre',
        message: 'El nombre debe tener al menos 2 caracteres',
      });
    }

    // Validate email
    if (!data.email.trim()) {
      errors.push({
        field: 'email',
        message: 'El email es requerido',
      });
    } else if (!this.EMAIL_REGEX.test(data.email)) {
      errors.push({
        field: 'email',
        message: 'Formato de email inválido',
      });
    }

    // Validate mensaje
    if (!data.mensaje.trim()) {
      errors.push({
        field: 'mensaje',
        message: 'El mensaje es requerido',
      });
    } else if (data.mensaje.trim().length < this.MIN_MESSAGE_LENGTH) {
      errors.push({
        field: 'mensaje',
        message: `El mensaje debe tener al menos ${this.MIN_MESSAGE_LENGTH} caracteres`,
      });
    } else if (data.mensaje.trim().length > this.MAX_MESSAGE_LENGTH) {
      errors.push({
        field: 'mensaje',
        message: `El mensaje no puede exceder ${this.MAX_MESSAGE_LENGTH} caracteres`,
      });
    }

    return {
      isValid: errors.length === 0,
      errors,
    };
  }

  static validateField(fieldName: keyof ContactFormData, value: string): FormFieldError | null {
    const tempData: ContactFormData = {
      nombre: fieldName === 'nombre' ? value : 'temp',
      email: fieldName === 'email' ? value : 'temp@example.com',
      mensaje: fieldName === 'mensaje' ? value : 'temp message for validation',
    };

    const result = this.validate(tempData);
    return result.errors.find(error => error.field === fieldName) || null;
  }
}