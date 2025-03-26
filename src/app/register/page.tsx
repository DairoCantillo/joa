import Link from 'next/link';
import type { Metadata } from 'next';
import RegisterForm from '@/components/register-form';

export const metadata: Metadata = {
  title: 'Registro | Short.ly',
  description: 'Crea una nueva cuenta en Short.ly para comenzar a acortar URLs',
};

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1 items-center justify-center py-12">
        <div className="mx-auto grid w-full max-w-md gap-6 px-4">
          <div className="flex flex-col space-y-2 text-center">
            <div className="flex justify-center">
              <Link href="/" className="flex items-center gap-2">
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
                  className="h-6 w-6 text-primary"
                >
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </svg>
                <span className="text-xl font-bold">Short.ly</span>
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
