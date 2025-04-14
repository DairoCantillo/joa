export const RESERVED_ROUTES = [
  'login',
  'register',
  'home',
  'dashboard',
  'auth',
  'pricing',
  'features',
  'faq',
  'contact',
];

export const Routes = {
  HOME: '/',
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    FORGOT_PASSWORD: '/auth/forgot-password',
    RESET_PASSWORD: '/auth/reset-password',
  },
  DASHBOARD: {
    ROOT: '/dashboard',
    LINKS: '/dashboard/links',
    ANALYTICS: '/dashboard/analytics',
    SETTINGS: '/dashboard/settings',
    PROFILE: '/dashboard/profile',
  },
  PUBLIC: {
    FEATURES: '/#features',
    PRICING: '/#pricing',
    FAQ: '/#faq',
    CONTACT: '/#contact',
    TERMS: '/terms',
    PRIVACY: '/privacy',
  },
};

// Función helper para verificar si una ruta está reservada
export const isReservedRoute = (route: string): boolean => {
  return RESERVED_ROUTES.includes(route.toLowerCase());
};
