import { IContactService, ContactFormData, ContactResponse } from '@/types';

export class FormspreeContactService implements IContactService {
  private readonly endpoint: string;

  constructor(endpoint: string = 'https://formspree.io/f/mjkogjlo') {
    this.endpoint = endpoint;
  }

  async sendMessage(data: ContactFormData): Promise<ContactResponse> {
    try {
      const response = await fetch(this.endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return {
        success: true,
        message: 'Mensaje enviado correctamente! Respondo en menos de 24h.',
        data: {
          id: `msg_${Date.now()}`,
          timestamp: new Date(),
        },
      };
    } catch (error) {
      console.error('Error sending contact message:', error);
      
      return {
        success: false,
        message: 'Error al enviar el mensaje. Por favor intenta de nuevo o contacta por email.',
      };
    }
  }
}

// Default instance
export const contactService = new FormspreeContactService();