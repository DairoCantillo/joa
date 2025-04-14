import { ReactNode } from 'react';

/**
 * Props base para componentes de tarjeta
 */
export type BaseCardProps = {
  title: string;
  description: string;
  index: number;
};

/**
 * Tipo de colores disponibles en la aplicación
 */
export type AppColor = 'purple' | 'pink' | 'blue' | 'mint' | 'yellow';

/**
 * Props base para componentes con children
 */
export type WithChildrenProps = {
  children: ReactNode;
};

/**
 * Props base para componentes con className
 */
export type WithClassNameProps = {
  className?: string;
};

/**
 * Props para un botón base
 */
export type ButtonProps = WithChildrenProps &
  WithClassNameProps & {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    isLoading?: boolean;
    disabled?: boolean;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
  };

/**
 * Respuesta de error de API
 */
export type ApiErrorResponse = {
  message: string;
  statusCode: number;
  error?: string;
};

/**
 * Tipo para respuestas paginadas
 */
export type PaginatedResponse<T> = {
  data: T[];
  meta: {
    total: number;
    page: number;
    perPage: number;
    totalPages: number;
  };
};
