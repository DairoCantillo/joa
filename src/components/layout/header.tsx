import Link from 'next/link';
import { apiConfig } from '@/constants/apiEndpoints';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 dark:bg-gray-900/95 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Link
            href="/"
            aria-label={`${apiConfig.hostname || 'Joa'} - Página de inicio`}
          >
            <span className="text-xl font-bold gradient-text animate-pulse-slow">
              Joa.pro
            </span>
          </Link>
        </div>
        <nav aria-label="Navegación principal">
          <ul className="hidden md:flex gap-6 list-none">
            <li>
              <Link
                href="#features"
                className="text-sm font-medium gradient-nav-item"
              >
                Características
              </Link>
            </li>
            <li>
              <Link
                href="#pricing"
                className="text-sm font-medium gradient-nav-item"
              >
                Precios
              </Link>
            </li>
            <li>
              <Link
                href="#faq"
                className="text-sm font-medium gradient-nav-item"
              >
                Preguntas Frecuentes
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-4">
            <button
              disabled
              className="all-initial text-sm font-medium text-gray-400 cursor-not-allowed opacity-60"
            >
              Iniciar Sesión
            </button>
            <button
              disabled
              className="rounded-md bg-gray-300 px-4 py-2 text-sm font-medium text-gray-600 cursor-not-allowed opacity-60"
            >
              Registrarse Gratis
            </button>
          </div>
          <span className="mt-1 text-xs font-medium text-gray-500 bg-white px-2 rounded-full">
            Próximamente
          </span>
        </div>
      </div>
    </header>
  );
}
