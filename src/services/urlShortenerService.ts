import ApiClient from '@/services/api/apiClient';

interface ShortUrlResponse {
  url: string;
  shortUrl: string;
  createdAt: string;
  clicks: number;
}

interface UrlStats {
  totalClicks: number;
  clicksPerDay: {
    date: string;
    count: number;
  }[];
  browsers?: {
    name: string;
    count: number;
  }[];
  platforms?: {
    name: string;
    count: number;
  }[];
  countries?: {
    name: string;
    count: number;
  }[];
}

class UrlShortenerService {
  static async registerUrl(
    url: string,
    shortUrl: string,
  ): Promise<ShortUrlResponse | null> {
    try {
      return await ApiClient.post<
        ShortUrlResponse,
        { url: string; shortUrl: string }
      >('/shorturls', {
        url,
        shortUrl,
      });
    } catch (error: unknown) {
      console.error('Error en registerUrl:', error);
      throw error;
    }
  }

  static async getUrl(shortUrl: string): Promise<string | null> {
    try {
      const response = await ApiClient.get<ShortUrlResponse>(
        `/shorturls/${shortUrl}`,
      );
      return response.url;
    } catch (error: unknown) {
      console.error('Error en getUrl:', error);
      throw error;
    }
  }

  static async getUserUrls(): Promise<ShortUrlResponse[]> {
    try {
      return await ApiClient.get<ShortUrlResponse[]>('/shorturls/user');
    } catch (error: unknown) {
      console.error('Error en getUserUrls:', error);
      return [];
    }
  }

  static async deleteUrl(shortUrl: string): Promise<boolean> {
    try {
      await ApiClient.delete<void>(`/shorturls/${shortUrl}`);
      return true;
    } catch (error: unknown) {
      console.error('Error en deleteUrl:', error);
      return false;
    }
  }

  static async getUrlStats(shortUrl: string): Promise<UrlStats | null> {
    try {
      return await ApiClient.get<UrlStats>(`/shorturls/${shortUrl}/stats`);
    } catch (error: unknown) {
      console.error('Error en getUrlStats:', error);
      return null;
    }
  }
}

export default UrlShortenerService;
