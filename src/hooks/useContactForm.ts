import { useState, useCallback } from 'react';
import { ContactFormData, FormState, IContactService } from '@/types';
import { ContactFormValidator } from '@/utils/ContactFormValidator';

const INITIAL_FORM_DATA: ContactFormData = {
  nombre: '',
  email: '',
  mensaje: 'Hola Cristopher, quiero hablar sobre...',
};

const INITIAL_FORM_STATE: FormState<ContactFormData> = {
  data: INITIAL_FORM_DATA,
  isLoading: false,
  error: null,
  isDirty: false,
  isSubmitting: false,
  errors: [],
  touchedFields: new Set(),
};

interface UseContactFormReturn extends FormState<ContactFormData> {
  updateField: (field: keyof ContactFormData, value: string) => void;
  submitForm: () => Promise<void>;
  resetForm: () => void;
  touchField: (field: keyof ContactFormData) => void;
  getFieldError: (field: keyof ContactFormData) => string | undefined;
}

export function useContactForm(contactService: IContactService): UseContactFormReturn {
  const [formState, setFormState] = useState<FormState<ContactFormData>>(INITIAL_FORM_STATE);

  const updateField = useCallback((field: keyof ContactFormData, value: string) => {
    setFormState(prev => ({
      ...prev,
      data: { ...prev.data, [field]: value },
      isDirty: true,
    }));
  }, []);

  const touchField = useCallback((field: keyof ContactFormData) => {
    setFormState(prev => ({
      ...prev,
      touchedFields: new Set([...prev.touchedFields, field]),
    }));
  }, []);

  const validateForm = useCallback(() => {
    const validation = ContactFormValidator.validate(formState.data);
    setFormState(prev => ({
      ...prev,
      errors: validation.errors,
    }));
    return validation.isValid;
  }, [formState.data]);

  const submitForm = useCallback(async () => {
    // Touch all fields to show validation errors
    const allFields: Set<keyof ContactFormData> = new Set(['nombre', 'email', 'mensaje']);
    setFormState(prev => ({
      ...prev,
      touchedFields: allFields,
    }));

    if (!validateForm()) {
      return;
    }

    setFormState(prev => ({
      ...prev,
      isSubmitting: true,
      error: null,
    }));

    try {
      const response = await contactService.sendMessage(formState.data);
      
      if (response.success) {
        setFormState(prev => ({
          ...prev,
          data: INITIAL_FORM_DATA,
          isDirty: false,
          touchedFields: new Set(),
          errors: [],
        }));
        
        // Show success message temporarily
        setFormState(prev => ({
          ...prev,
          error: null,
        }));
        
        return;
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
      setFormState(prev => ({
        ...prev,
        error: errorMessage,
      }));
      throw error;
    } finally {
      setFormState(prev => ({
        ...prev,
        isSubmitting: false,
      }));
    }
  }, [contactService, formState.data, validateForm]);

  const resetForm = useCallback(() => {
    setFormState(INITIAL_FORM_STATE);
  }, []);

  const getFieldError = useCallback((field: keyof ContactFormData): string | undefined => {
    if (!formState.touchedFields.has(field)) return undefined;
    return formState.errors.find(error => error.field === field)?.message;
  }, [formState.errors, formState.touchedFields]);

  return {
    ...formState,
    updateField,
    submitForm,
    resetForm,
    touchField,
    getFieldError,
  };
}