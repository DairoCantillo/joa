'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 py-12 md:py-16 relative overflow-hidden">
      <div
        className="absolute inset-0 overflow-hidden -z-10"
        aria-hidden="true"
      >
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-pastel-purple/5 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-pastel-blue/5 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
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
              <span className="text-xl font-bold gradient-text">Short.ly</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
              La forma más sencilla de acortar, compartir y rastrear enlaces.
            </p>
            <ul className="flex gap-4" aria-label="Redes sociales">
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-pastel-purple transition-colors"
                  aria-label="Twitter"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-pastel-purple transition-colors"
                  aria-label="Instagram"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-pastel-purple transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <nav className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 uppercase tracking-wider mb-4">
                Producto
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#features"
                    className="text-gray-600 dark:text-gray-400 hover:text-pastel-purple dark:hover:text-pastel-purple transition-colors text-sm"
                  >
                    Características
                  </Link>
                </li>
                <li>
                  <Link
                    href="#pricing"
                    className="text-gray-600 dark:text-gray-400 hover:text-pastel-purple dark:hover:text-pastel-purple transition-colors text-sm"
                  >
                    Precios
                  </Link>
                </li>
                <li>
                  <Link
                    href="#api"
                    className="text-gray-600 dark:text-gray-400 hover:text-pastel-purple dark:hover:text-pastel-purple transition-colors text-sm"
                  >
                    API
                  </Link>
                </li>
                <li>
                  <Link
                    href="#integrations"
                    className="text-gray-600 dark:text-gray-400 hover:text-pastel-purple dark:hover:text-pastel-purple transition-colors text-sm"
                  >
                    Integraciones
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 uppercase tracking-wider mb-4">
                Recursos
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#blog"
                    className="text-gray-600 dark:text-gray-400 hover:text-pastel-purple dark:hover:text-pastel-purple transition-colors text-sm"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="#docs"
                    className="text-gray-600 dark:text-gray-400 hover:text-pastel-purple dark:hover:text-pastel-purple transition-colors text-sm"
                  >
                    Documentación
                  </Link>
                </li>
                <li>
                  <Link
                    href="#guides"
                    className="text-gray-600 dark:text-gray-400 hover:text-pastel-purple dark:hover:text-pastel-purple transition-colors text-sm"
                  >
                    Guías
                  </Link>
                </li>
                <li>
                  <Link
                    href="#tutorials"
                    className="text-gray-600 dark:text-gray-400 hover:text-pastel-purple dark:hover:text-pastel-purple transition-colors text-sm"
                  >
                    Tutoriales
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 uppercase tracking-wider mb-4">
                Empresa
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#about"
                    className="text-gray-600 dark:text-gray-400 hover:text-pastel-purple dark:hover:text-pastel-purple transition-colors text-sm"
                  >
                    Acerca de
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="text-gray-600 dark:text-gray-400 hover:text-pastel-purple dark:hover:text-pastel-purple transition-colors text-sm"
                  >
                    Contacto
                  </Link>
                </li>
                <li>
                  <Link
                    href="#terms"
                    className="text-gray-600 dark:text-gray-400 hover:text-pastel-purple dark:hover:text-pastel-purple transition-colors text-sm"
                  >
                    Términos
                  </Link>
                </li>
                <li>
                  <Link
                    href="#privacy"
                    className="text-gray-600 dark:text-gray-400 hover:text-pastel-purple dark:hover:text-pastel-purple transition-colors text-sm"
                  >
                    Privacidad
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Short.ly. Todos los derechos
            reservados.
          </p>
          <div className="mt-4 md:mt-0 flex items-center">
            <div className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 px-3 py-1.5 rounded-full shadow-sm">
              <div
                className="h-2 w-2 rounded-full bg-pastel-mint"
                aria-hidden="true"
              ></div>
              <span className="text-xs text-gray-600 dark:text-gray-400">
                Todos los sistemas operativos
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
