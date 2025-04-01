import { notFound, redirect } from 'next/navigation';
import UrlShortenerService from '@/services/urlShortenerService';
import { RESERVED_ROUTES } from '@/constants/routes';

export default async function RedirectPage({
  params,
}: {
  readonly params: { readonly token: string };
}) {
  const { token } = await params;
  if (!token) {
    notFound();
  }
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
