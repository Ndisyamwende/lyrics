import React, { useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className={`fixed top-4 right-4 p-2 ${
        theme === 'light' ? 'bg-white text-gray-800' : 'bg-gray-800 text-white'
      } rounded`}
    >
      {theme === 'light' ? '🌞 Light Mode' : '🌙 Dark Mode'}
    </button>
  );
};

export default ThemeToggle;
