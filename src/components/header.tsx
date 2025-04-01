import Link from 'next/link';
import { LinkIcon } from '@heroicons/react/24/outline';
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
            <LinkIcon
              className="h-6 w-6 text-pastel-purple"
              aria-hidden="true"
            />
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
        <div className="flex items-center gap-4">
          <Link href="/login" className="text-sm font-medium gradient-nav-item">
            Iniciar Sesión
          </Link>
          <Link
            href="/register"
            className="rounded-md bg-gradient-to-r from-pastel-purple to-pastel-pink px-4 py-2 text-sm font-medium text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-pastel-purple focus:ring-offset-2 transition-all"
          >
            Registrarse Gratis
          </Link>
        </div>
      </div>
    </header>
  );
}
