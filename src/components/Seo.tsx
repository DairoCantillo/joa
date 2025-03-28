import Head from 'next/head';

interface SeoProps {
  title: string;
  description: string;
  url: string;
  image: string;
  type: string;
}

const Seo = ({
  title = 'Tu Plataforma de Enlaces',
  description = 'Administra, rastrea y optimiza tus enlaces con nuestra plataforma.',
  url = 'https://tu-sitio.com',
  image = 'https://tu-sitio.com/images/default-preview.png',
  type = 'website',
}: SeoProps) => {
  return (
    <Head>
      {/* Título */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content={type} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Head>
  );
};

export default Seo;
