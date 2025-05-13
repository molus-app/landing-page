
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/providers/ThemeProvider';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button 
      onClick={toggleTheme}
      className="fixed top-4 right-6 p-2 rounded-full bg-white dark:bg-gray-800 border-2 border-black dark:border-white z-50"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon className="h-5 w-5 text-black" />
      ) : (
        <Sun className="h-5 w-5 text-white" />
      )}
    </button>
  );
};

export default ThemeToggle;
