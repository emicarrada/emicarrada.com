// Re-export all types for easy importing
export * from './common';
export * from './terminal';
export * from './projects';
export * from './api';
export * from './components';

// Type guards and utility functions
export const isString = (value: unknown): value is string => {
  return typeof value === 'string';
};

export const isNumber = (value: unknown): value is number => {
  return typeof value === 'number' && !isNaN(value);
};

export const isObject = (value: unknown): value is Record<string, unknown> => {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
};

export const isArray = <T>(value: unknown): value is T[] => {
  return Array.isArray(value);
};

// Assertion functions
export const assertString = (value: unknown, name: string): asserts value is string => {
  if (!isString(value)) {
    throw new Error(`Expected ${name} to be a string, got ${typeof value}`);
  }
};

export const assertNumber = (value: unknown, name: string): asserts value is number => {
  if (!isNumber(value)) {
    throw new Error(`Expected ${name} to be a number, got ${typeof value}`);
  }
};