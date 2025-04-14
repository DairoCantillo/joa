import { useState } from 'react';
import UrlShortenerService from '@/services/urlShortenerService';
import { generateShortUrl } from '@/utils/urlUtils';
import { apiConfig } from '@/constants/apiEndpoints';

export function useUrlShortener() {
  const [url, setUrl] = useState('');
  const [customShortUrl, setCustomShortUrl] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const shortenUrl = async (useCustomUrl = false) => {
    try {
      setIsLoading(true);
      setError(null);

      const shortUrl = useCustomUrl ? customShortUrl : generateShortUrl();
      const response = await UrlShortenerService.registerUrl(url, shortUrl);

      if (response) {
        setShortenedUrl(shortUrl);
      }
    } catch (err) {
      setError('Error al acortar la URL');
      console.error('Error al acortar la URL:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`${apiConfig.hostname}/${shortenedUrl}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const resetState = () => {
    setUrl('');
    setCustomShortUrl('');
    setShortenedUrl('');
    setCopied(false);
    setIsLoading(false);
    setError(null);
  };

  return {
    url,
    setUrl,
    customShortUrl,
    setCustomShortUrl,
    shortenedUrl,
    isLoading,
    error,
    copied,
    shortenUrl,
    copyToClipboard,
    resetState,
  };
}
