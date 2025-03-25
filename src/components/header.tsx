import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
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
            className="h-6 w-6 text-purple-600"
          >
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
          </svg>
          <span className="text-xl font-bold">Joa.io</span>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link
            href="#features"
            className="text-sm font-medium hover:text-purple-600"
          >
            Características
          </Link>
          <Link
            href="#pricing"
            className="text-sm font-medium hover:text-purple-600"
          >
            Precios
          </Link>
          <Link
            href="#faq"
            className="text-sm font-medium hover:text-purple-600"
          >
            Preguntas frecuentes
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="text-sm font-medium hover:text-purple-600"
          >
            Login
          </Link>
          <button className="rounded-md bg-purple-600 px-4 py-2 text-sm font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
            Regístrate gratis
          </button>
        </div>
      </div>
    </header>
  );
}
