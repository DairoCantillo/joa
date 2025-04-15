import { apiConfig } from '@/constants/apiEndpoints';
import { Metadata } from 'next';

interface SeoProps {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  type?:
    | 'website'
    | 'article'
    | 'book'
    | 'profile'
    | 'music.song'
    | 'music.album'
    | 'music.playlist'
    | 'music.radio_station'
    | 'video.movie'
    | 'video.episode'
    | 'video.tv_show'
    | 'video.other';
}

/**
 * Genera metadatos para Next.js basados en las propiedades proporcionadas
 * @param props Propiedades para los metadatos
 * @returns Objeto Metadata para Next.js
 */
export function generateMetadata({
  title = 'Joa - Acortador de URLs',
  description = 'Administra, rastrea y optimiza tus enlaces con nuestra plataforma.',
  url = apiConfig.hostname,
  image = '/images/logo.png',
  type = 'website',
}: SeoProps = {}): Metadata {
  return {
    icons: {
      icon: image,
      shortcut: image,
      apple: image,
    },
    title,
    description,
    metadataBase: new URL(`https://${apiConfig.hostname}`),
    alternates: {
      canonical: '/',
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Joa - Acortador de URLs',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'es_ES',
      type,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@joa',
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
