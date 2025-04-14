import axios, { AxiosResponse, AxiosRequestConfig, AxiosError } from 'axios';
import { apiConfig } from '@/constants/apiEndpoints';

export interface ApiErrorResponse {
  message: string;
  status?: number;
  [key: string]: string | number | boolean | null | undefined; // Tipos específicos en lugar de any
}

export class ApiError extends Error {
  constructor(
    message: string,
    public statusCode: number = 400,
    public isOperational: boolean = true,
  ) {
    super(message);
    Object.setPrototypeOf(this, ApiError.prototype);
  }
}

class ApiClient {
  private static readonly baseURL: string = apiConfig.baseUrl;

  static async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    try {
      const response: AxiosResponse<T> = await axios.get(
        `${this.baseURL}${url}`,
        config,
      );
      return response.data;
    } catch (error: unknown) {
      this.handleError(error);
      throw error;
    }
  }

  static async post<T, D = unknown>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    try {
      const response: AxiosResponse<T> = await axios.post(
        `${this.baseURL}${url}`,
        data,
        config,
      );
      return response.data;
    } catch (error: unknown) {
      this.handleError(error);
      throw error;
    }
  }

  static async put<T, D = unknown>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    try {
      const response: AxiosResponse<T> = await axios.put(
        `${this.baseURL}${url}`,
        data,
        config,
      );
      return response.data;
    } catch (error: unknown) {
      this.handleError(error);
      throw error;
    }
  }

  static async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    try {
      const response: AxiosResponse<T> = await axios.delete(
        `${this.baseURL}${url}`,
        config,
      );
      return response.data;
    } catch (error: unknown) {
      this.handleError(error);
      throw error;
    }
  }

  private static handleError(error: unknown): never {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ApiErrorResponse>;
      const message =
        axiosError.response?.data?.message ??
        'Se produjo un error en la solicitud';
      const statusCode = axiosError.response?.status ?? 500;

      console.error(`Error API (${statusCode}): ${message}`, error);
      throw new ApiError(message, statusCode);
    }

    // Si no es un error de Axios, lanzamos un error genérico
    console.error('Error no identificado:', error);
    throw new ApiError('Se produjo un error inesperado', 500);
  }
}

export default ApiClient;
