import { apiConfig } from '@/constants/apiEndpoints';
import axios, { Axios } from 'axios';

class UrlShortenerService {
  private static apiBaseUrl: string = apiConfig.baseUrl;

  constructor(apiBaseUrl: string = apiConfig.baseUrl) {
    UrlShortenerService.apiBaseUrl = apiBaseUrl;
  }

  static async registerUrl(
    url: string,
    shortUrl: string,
  ): Promise<Axios | null> {
    try {
      const response = await axios.post(`${this.apiBaseUrl}/shorturls`, {
        url,
        shortUrl,
      });
      if (response.data) {
        return response.data;
      }
      return null;
    } catch (error) {
      console.error('Error en registerUrl:', error);
      throw error;
    }
  }

  static async getUrl(shortUrl: string): Promise<string | null> {
    try {
      const response = await axios.get(
        `${this.apiBaseUrl}/shorturls/${shortUrl}`,
      );
      if (response.data) {
        return response.data.url;
      }
      return null;
    } catch (error) {
      console.error('Error en getUrl:', error);
      throw error;
    }
  }
}

export default UrlShortenerService;
