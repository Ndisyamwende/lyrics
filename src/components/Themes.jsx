import React, { useState, useEffect } from 'react';

const Themes = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
  
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

const Themes = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
};

  return (
    <button onClick={toggleTheme} className="text-blue-500">
      Theme {theme === 'light' ? 'Dark' : 'Light'} Theme
    </button>
  );
};

export default Themes;
