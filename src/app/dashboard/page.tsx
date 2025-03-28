import type { Metadata } from 'next';
import Link from 'next/link';
import { LinkIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Panel de Control | Short.ly',
  description: 'Gestiona tus URLs acortadas',
};

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <LinkIcon className="h-6 w-6 text-primary" aria-hidden="true" />
            <span className="text-xl font-bold">Short.ly</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="/dashboard"
              className="text-sm font-medium text-primary"
            >
              Panel de Control
            </Link>
            <Link
              href="/dashboard/links"
              className="text-sm font-medium hover:text-primary"
            >
              Mis Enlaces
            </Link>
            <Link
              href="/dashboard/analytics"
              className="text-sm font-medium hover:text-primary"
            >
              Analíticas
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium">usuario@ejemplo.com</span>
            <button className="rounded-md bg-primary/10 px-4 py-2 text-sm font-medium text-primary hover:bg-primary/20 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
              Cerrar Sesión
            </button>
          </div>
        </div>
      </header>
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">Panel de Control</h1>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">Enlaces Totales</h3>
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
                  className="h-5 w-5 text-primary"
                >
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </svg>
              </div>
              <p className="text-3xl font-bold mt-2">24</p>
              <p className="text-sm text-muted-foreground mt-1">
                +3 desde la semana pasada
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">Clics Totales</h3>
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
                  className="h-5 w-5 text-primary"
                >
                  <path d="m21.2 8.4-4.2 4.2-4-4-4 4-4.2-4.2"></path>
                  <path d="M3 10.4V21h18V10.4"></path>
                </svg>
              </div>
              <p className="text-3xl font-bold mt-2">1.234</p>
              <p className="text-sm text-muted-foreground mt-1">
                +21% desde el mes pasado
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">Enlace Principal</h3>
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
                  className="h-5 w-5 text-primary"
                >
                  <path d="m12 2 2.4 7.4H22l-6 4.6 2.3 7-6.3-4.6L5.7 21l2.3-7-6-4.6h7.6L12 2z"></path>
                </svg>
              </div>
              <p className="text-xl font-medium mt-2 truncate">
                short.ly/lanzamiento-producto
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                543 clics esta semana
              </p>
            </div>
          </div>

          <div className="mt-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Enlaces Recientes</h2>
              <Link
                href="/dashboard/links"
                className="text-sm font-medium text-primary hover:underline"
              >
                Ver todos los enlaces
              </Link>
            </div>
            <div className="rounded-lg border shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">
                        URL Corta
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">
                        URL Original
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">
                        Clics
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">
                        Creado
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t">
                      <td className="px-4 py-3 text-sm">
                        short.ly/lanzamiento-producto
                      </td>
                      <td className="px-4 py-3 text-sm truncate max-w-[200px]">
                        https://ejemplo.com/detalles-e-informacion-de-nuestro-nuevo-lanzamiento-de-producto
                      </td>
                      <td className="px-4 py-3 text-sm">543</td>
                      <td className="px-4 py-3 text-sm">hace 2 días</td>
                    </tr>
                    <tr className="border-t">
                      <td className="px-4 py-3 text-sm">
                        short.ly/oferta-verano
                      </td>
                      <td className="px-4 py-3 text-sm truncate max-w-[200px]">
                        https://ejemplo.com/promocion-verano-2023
                      </td>
                      <td className="px-4 py-3 text-sm">321</td>
                      <td className="px-4 py-3 text-sm">hace 5 días</td>
                    </tr>
                    <tr className="border-t">
                      <td className="px-4 py-3 text-sm">short.ly/webinar</td>
                      <td className="px-4 py-3 text-sm truncate max-w-[200px]">
                        https://ejemplo.com/registrate-para-proxima-serie-de-webinars
                      </td>
                      <td className="px-4 py-3 text-sm">210</td>
                      <td className="px-4 py-3 text-sm">hace 1 semana</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
