import Link from 'next/link';
import type { Metadata } from 'next';
import RegisterForm from '@/components/register-form';
import { LinkIcon } from '@heroicons/react/24/outline';
import { apiConfig } from '@/constants/apiEndpoints';

export const metadata: Metadata = {
  title: 'Registro | JOA',
  description: 'Crea una nueva cuenta en JOA para comenzar a acortar URLs',
};

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1 items-center justify-center py-12">
        <div className="mx-auto grid w-full max-w-md gap-6 px-4">
          <div className="flex flex-col space-y-2 text-center">
            <div className="flex justify-center">
              <Link href="/" className="flex items-center gap-2">
                <LinkIcon className="h-6 w-6 text-primary" aria-hidden="true" />
                <span className="text-xl font-bold">{apiConfig.hostname}</span>
              </Link>
            </div>
            <h1 className="text-2xl font-bold tracking-tight">
              Crear una cuenta
            </h1>
            <p className="text-muted-foreground">
              Ingresa tus datos para comenzar
            </p>
          </div>
          <RegisterForm />
          <div className="mt-4 text-center text-sm">
            <p className="text-muted-foreground">
              ¿Ya tienes una cuenta?{' '}
              <Link
                href="/login"
                className="font-medium text-primary hover:underline"
              >
                Inicia sesión
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
