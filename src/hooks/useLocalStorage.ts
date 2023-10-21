'use client';
import { useEffect, useState } from 'react';

function getStorageValue(key: string, defaultValue: any) {
  if (typeof window !== 'undefined') {
    try {
      const saved = localStorage.getItem(key);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (error) {
      console.error('Error reading from localStorage:', error);
    }
  }
  return defaultValue;
}

export const useLocalStorage = (key: string, defaultValue: any) => {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    let value;
    value = getStorageValue(key, defaultValue);
    setValue(value);
  }, []);

  useEffect(() => {
    try {
      // Store value in localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem(key, JSON.stringify(value));
      }
    } catch (error) {
      console.error('Error writing to localStorage:', error);
    }
  }, [key, value]);

  return [value, setValue];
};
