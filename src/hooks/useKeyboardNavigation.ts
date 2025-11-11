import { useEffect } from 'react';

/**
 * Custom hook to detect when user is navigating with keyboard
 * Adds visual focus indicators when tab is pressed
 */
export function useKeyboardNavigation() {
  useEffect(() => {
    let isUsingKeyboard = false;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        isUsingKeyboard = true;
        document.body.classList.add('keyboard-navigation');
      }
    };

    const handleMouseDown = () => {
      if (isUsingKeyboard) {
        isUsingKeyboard = false;
        document.body.classList.remove('keyboard-navigation');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('mousedown', handleMouseDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);
}
