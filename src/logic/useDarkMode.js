import { useEffect, useState } from 'react';

export const useDarkMode = () => {
  const [dark, setDark] = useState(false);
  const htmlElement = document.documentElement;

  useEffect(() => {
    if (dark) {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
    }
  }, [dark]);

  const toggleDarkMode = () => {
    setDark(!dark);
  };

  return [dark, toggleDarkMode];
};