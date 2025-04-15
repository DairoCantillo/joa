import type { Viewport, Metadata } from 'next';
import '@styles/globals.css';
import { AxiosInterceptor } from '@/interceptors/axiosInterceptor';
import { ThemeProvider } from '@/components/theme-provider';
import { generateMetadata as seoGenerateMetadata } from '@/components/Seo';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = seoGenerateMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  AxiosInterceptor.initialize();
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
