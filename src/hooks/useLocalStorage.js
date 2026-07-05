import { useEffect, useState } from 'react';

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const storedValue = window.localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : initialValue;
    } catch {
      return initialValue;
    }
  });

  function setStoredValue(nextValue) {
    setValue((currentValue) => {
      const resolvedValue =
        typeof nextValue === 'function' ? nextValue(currentValue) : nextValue;

      try {
        window.localStorage.setItem(key, JSON.stringify(resolvedValue));
      } catch {
        // Ignore storage errors and keep the in-memory state usable.
      }

      return resolvedValue;
    });
  }

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // Ignore storage errors and keep the in-memory state usable.
    }
  }, [key, value]);

  return [value, setStoredValue];
}
