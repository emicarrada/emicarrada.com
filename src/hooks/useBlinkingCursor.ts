import { useState, useEffect } from 'react';

interface UseBlinkingCursorOptions {
  interval?: number;
  initialVisible?: boolean;
}

export function useBlinkingCursor(options: UseBlinkingCursorOptions = {}) {
  const { interval = 530, initialVisible = true } = options;
  const [isVisible, setIsVisible] = useState(initialVisible);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsVisible(prev => !prev);
    }, interval);

    return () => clearInterval(intervalId);
  }, [interval]);

  return isVisible;
}