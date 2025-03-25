import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-white py-6 md:py-12">
      <div className="container mx-auto flex flex-col items-center justify-center gap-4 px-4 md:flex-row md:justify-between">
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
          <span className="text-lg font-bold">Joa.io</span>
        </div>
        <div className="flex gap-4">
          <Link href="#" className="text-sm hover:underline underline-offset-4">
            Términos
          </Link>
          <Link href="#" className="text-sm hover:underline underline-offset-4">
            Privacidad
          </Link>
          <Link href="#" className="text-sm hover:underline underline-offset-4">
            Contacto
          </Link>
        </div>
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Joa.io. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}
