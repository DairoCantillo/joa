import type { Metadata, Viewport } from 'next';
import '@styles/globals.css';
import { AxiosInterceptor } from '@/interceptors/axiosInterceptor';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};
export const metadata: Metadata = {
  title: 'Acortar URLs de forma fácil y rápida | JOA',
  description:
    'Acorta tus enlaces de forma rápida y sencilla con JOA. Únete a nuestra comunidad y comienza a compartir tus URLs acortadas hoy mismo.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  AxiosInterceptor.initialize();
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
