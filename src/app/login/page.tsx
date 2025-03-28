import Link from 'next/link';
import type { Metadata } from 'next';
import LoginForm from '@/components/login-form';
import { LinkIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Iniciar Sesión | Short.ly',
  description:
    'Inicia sesión en tu cuenta de Short.ly para gestionar tus URLs acortadas',
};

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1 items-center justify-center py-12">
        <div className="mx-auto grid w-full max-w-md gap-6 px-4">
          <div className="flex flex-col space-y-2 text-center">
            <div className="flex justify-center">
              <Link href="/" className="flex items-center gap-2">
                <LinkIcon className="h-6 w-6 text-primary" aria-hidden="true" />
                <span className="text-xl font-bold">Short.ly</span>
              </Link>
            </div>
            <h1 className="text-2xl font-bold tracking-tight">
              Bienvenido de nuevo
            </h1>
            <p className="text-muted-foreground">
              Inicia sesión en tu cuenta para continuar
            </p>
          </div>
          <LoginForm />
          <div className="mt-4 text-center text-sm">
            <p className="text-muted-foreground">
              ¿No tienes una cuenta?{' '}
              <Link
                href="/register"
                className="font-medium text-primary hover:underline"
              >
                Regístrate
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
