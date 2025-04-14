import { notFound, redirect } from 'next/navigation';
import UrlShortenerService from '@/services/urlShortenerService';
import { RESERVED_ROUTES, Routes } from '@/constants/routes';

export default async function RedirectPage({
  params,
}: {
  readonly params: Promise<{ readonly token: string }>;
}) {
  const serviceParams = await params;
  const { token } = serviceParams;

  // Cuando el token está vacío o es la ruta raíz, redirigir a la página de inicio
  if (!token || token === '') {
    redirect(Routes.HOME);
    return;
  }

  // Si es una ruta reservada, redirigir a la ruta correspondiente
  if (RESERVED_ROUTES.includes(token)) {
    redirect(`/${token}`);
    return;
  }

  const targetUrl = await UrlShortenerService.getUrl(token);
  if (targetUrl) {
    redirect(targetUrl);
  }
  notFound();
}
