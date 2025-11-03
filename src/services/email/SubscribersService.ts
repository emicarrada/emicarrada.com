import fs from 'fs/promises';
import path from 'path';

export interface SubscribersService {
  getAll(): Promise<string[]>;
  add(email: string): Promise<void>;
  remove(email: string): Promise<void>;
  count(): Promise<number>;
}

export class FileSubscribersService implements SubscribersService {
  private filePath: string;

  constructor(filePath?: string) {
    // Default a la raíz del proyecto
    this.filePath = filePath || path.join(process.cwd(), 'DataBaseSuscribers.txt');
  }

  /**
   * Lee todos los suscriptores del archivo
   */
  async getAll(): Promise<string[]> {
    try {
      const content = await fs.readFile(this.filePath, 'utf-8');
      const emails = content
        .split('\n')
        .map((line) => line.trim())
        .filter((line) => line && this.isValidEmail(line));
      
      // Remover duplicados
      return [...new Set(emails)];
    } catch (error) {
      if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
        // Archivo no existe, retornar array vacío
        return [];
      }
      throw error;
    }
  }

  /**
   * Agrega un nuevo suscriptor
   */
  async add(email: string): Promise<void> {
    if (!this.isValidEmail(email)) {
      throw new Error('Email inválido');
    }

    const emails = await this.getAll();
    
    if (emails.includes(email.toLowerCase())) {
      throw new Error('Email ya está suscrito');
    }

    emails.push(email.toLowerCase());
    await this.save(emails);
  }

  /**
   * Remueve un suscriptor
   */
  async remove(email: string): Promise<void> {
    const emails = await this.getAll();
    const filtered = emails.filter((e) => e !== email.toLowerCase());
    
    if (filtered.length === emails.length) {
      throw new Error('Email no encontrado');
    }

    await this.save(filtered);
  }

  /**
   * Cuenta total de suscriptores
   */
  async count(): Promise<number> {
    const emails = await this.getAll();
    return emails.length;
  }

  /**
   * Guarda los suscriptores al archivo
   */
  private async save(emails: string[]): Promise<void> {
    const content = emails.join('\n') + '\n';
    await fs.writeFile(this.filePath, content, 'utf-8');
  }

  /**
   * Valida formato de email
   */
  private isValidEmail(email: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
}

// Factory function
export function createSubscribersService(filePath?: string): SubscribersService {
  return new FileSubscribersService(filePath);
}
