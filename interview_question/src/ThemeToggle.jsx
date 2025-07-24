import React from 'react';

const ThemeToggle = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 text-sm font-medium text-white bg-slate-700 dark:bg-slate-200 dark:text-slate-900 rounded-md hover:bg-slate-600 dark:hover:bg-slate-300 transition-colors"
    >
      {theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
};

export default ThemeToggle;