import axios from 'axios';

export class AxiosInterceptor {
  static initialize(): void {
    axios.interceptors.request.use(
      (config) => {
        config.headers['X-Custom-Header'] = 'InterceptorHeader';
        config.headers['Content-Type'] = 'application/json';
        config.headers['Accept'] = 'application/json';
        return config;
      },
      (error) => {
        console.error('Error en la solicitud interceptada:', error);
        return Promise.reject(
          error instanceof Error ? error : new Error(String(error)),
        );
      },
    );

    // Interceptar respuestas
    axios.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        return Promise.reject(
          error instanceof Error ? error : new Error(String(error)),
        );
      },
    );
  }
}
