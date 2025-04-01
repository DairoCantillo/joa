import { apiConfig } from '@/constants/apiEndpoints';
import axios, { Axios } from 'axios';

class UrlShortenerService {
  private static apiBaseUrl: string = apiConfig.baseUrl;

  constructor(apiBaseUrl: string = apiConfig.baseUrl) {
    UrlShortenerService.apiBaseUrl = apiBaseUrl;
  }

  static async registerUrl(url: string, shortUrl: string): Promise<Axios> {
    try {
      console.log('NEXT_PUBLIC_API_URL:', process.env.NEXT_PUBLIC_API_URL);
      return await axios.post(`${this.apiBaseUrl}/shorturls`, {
        url,
        shortUrl,
      });
    } catch (error) {
      console.error('Error en registerUrl:', error);
      throw error;
    }
  }

  static async getUrl(shortUrl: string): Promise<string> {
    try {
      const response = await axios.get(`${this.apiBaseUrl}/${shortUrl}`);
      return response.data.url;
    } catch (error) {
      console.error('Error en getUrl:', error);
      throw error;
    }
  }
}

export default UrlShortenerService;
