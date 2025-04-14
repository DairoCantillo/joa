import { apiConfig } from '@/constants/apiEndpoints';
import axios, { AxiosError } from 'axios';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthResponse {
  token: string;
  user: User;
}

interface ApiErrorResponse {
  message?: string;
  [key: string]: string | number | boolean | null | undefined;
}

export class AuthError extends Error {
  constructor(
    message: string,
    public statusCode: number = 400,
    public isOperational = true,
  ) {
    super(message);
    Object.setPrototypeOf(this, AuthError.prototype);
  }
}

class AuthService {
  private static apiBaseUrl: string = apiConfig.baseUrl;
  private static readonly tokenKey: string = 'joa_auth_token';
  private static readonly userKey: string = 'joa_user';

  constructor(apiBaseUrl: string = apiConfig.baseUrl) {
    AuthService.apiBaseUrl = apiBaseUrl;
  }

  static async login(email: string, password: string): Promise<boolean> {
    try {
      const response = await axios.post<AuthResponse>(
        `${this.apiBaseUrl}/auth/login`,
        { email, password },
      );

      if (response.data) {
        this.setToken(response.data.token);
        this.setUser(response.data.user);
        return true;
      }
      return false;
    } catch (error: unknown) {
      console.error('Error en login:', error);
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<ApiErrorResponse>;
        throw new AuthError(
          axiosError.response?.data?.message ?? 'Error al iniciar sesión',
          axiosError.response?.status,
        );
      }
      throw new AuthError('Error inesperado al iniciar sesión');
    }
  }

  static async register(
    name: string,
    email: string,
    password: string,
  ): Promise<boolean> {
    try {
      const response = await axios.post<AuthResponse>(
        `${this.apiBaseUrl}/auth/register`,
        { name, email, password },
      );

      if (response.data) {
        this.setToken(response.data.token);
        this.setUser(response.data.user);
        return true;
      }
      return false;
    } catch (error: unknown) {
      console.error('Error en registro:', error);
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<ApiErrorResponse>;
        throw new AuthError(
          axiosError.response?.data?.message ?? 'Error al registrarse',
          axiosError.response?.status,
        );
      }
      throw new AuthError('Error inesperado al registrarse');
    }
  }

  static async loginWithGoogle(): Promise<void> {
    window.location.href = `${this.apiBaseUrl}/auth/google`;
  }

  static logout(): void {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.userKey);
  }

  static isAuthenticated(): boolean {
    return !!this.getToken();
  }

  static getToken(): string | null {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(this.tokenKey);
    }
    return null;
  }

  static setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  static getUser(): User | null {
    if (typeof window !== 'undefined') {
      const user = localStorage.getItem(this.userKey);
      return user ? (JSON.parse(user) as User) : null;
    }
    return null;
  }

  static setUser(user: User): void {
    localStorage.setItem(this.userKey, JSON.stringify(user));
  }
}

export default AuthService;
