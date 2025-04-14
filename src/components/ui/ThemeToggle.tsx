'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Esto es necesario para evitar problemas de hidratación
  // porque no podemos saber el tema hasta que el componente está montado en el cliente
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition-colors duration-200 hover:bg-gray-300 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-pastel-purple"
      aria-label="Cambiar tema"
    >
      {theme === 'dark' ? (
        <Sun className="h-5 w-5 text-pastel-yellow" />
      ) : (
        <Moon className="h-5 w-5 text-pastel-purple" />
      )}
    </button>
  );
}
