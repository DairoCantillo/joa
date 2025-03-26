import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Link href="/" aria-label="Short.ly - Página de inicio">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-pastel-purple"
              aria-hidden="true"
            >
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
            </svg>
            <span className="text-xl font-bold gradient-text animate-pulse-slow">
              Short.ly
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
