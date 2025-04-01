import { notFound, redirect } from 'next/navigation';
import UrlShortenerService from '@/services/urlShortenerService';

export default async function RedirectPage({
  params,
}: {
  readonly params: { readonly token: string };
}) {
  const { token } = await params;
  if (!token) {
    notFound();
  }
  const targetUrl = await UrlShortenerService.getUrl(token);
  if (targetUrl) {
    redirect(targetUrl);
  }
  notFound();
}
