import {
  ChartBarIcon,
  LinkIcon,
  QrCodeIcon,
  UserCircleIcon,
  KeyIcon,
  AcademicCapIcon,
  ShieldCheckIcon,
  BriefcaseIcon,
} from '@heroicons/react/24/outline';

export const features = [
  {
    icon: <ChartBarIcon className="h-6 w-6" aria-hidden="true" />,
    title: 'Analíticas de Enlaces',
    description:
      'Seguimiento de clics, datos geográficos, referentes, dispositivos y más',
    content:
      'Obtén información detallada sobre quién está haciendo clic en tus enlaces y de dónde provienen.',
    color: 'purple',
  },
  {
    icon: <LinkIcon className="h-6 w-6" aria-hidden="true" />,
    title: 'URLs Personalizadas',
    description:
      'Crea enlaces cortos de marca y memorables con dominios personalizados',
    content:
      'Usa tu propio dominio para crear enlaces cortos de marca que refuercen tu identidad.',
    color: 'pink',
  },
  {
    icon: <QrCodeIcon className="h-6 w-6" aria-hidden="true" />,
    title: 'Códigos QR',
    description: 'Genera códigos QR para tus enlaces acortados al instante',
    content:
      'Conecta experiencias offline y online con códigos QR escaneables para tus enlaces.',
    color: 'blue',
  },
  {
    icon: <UserCircleIcon className="h-6 w-6" aria-hidden="true" />,
    title: 'Páginas Bio',
    description: 'Crea una página de destino con múltiples enlaces',
    content:
      'Comparte múltiples enlaces con una sola URL - perfecto para perfiles de redes sociales.',
    color: 'mint',
  },
  {
    icon: <KeyIcon className="h-6 w-6" aria-hidden="true" />,
    title: 'Acceso API',
    description:
      'Integra el acortamiento de URL en tus aplicaciones y flujos de trabajo',
    content:
      'Usa nuestra potente API para crear, gestionar y rastrear enlaces cortos de forma programática.',
    color: 'yellow',
  },
  {
    icon: <ShieldCheckIcon className="h-6 w-6" aria-hidden="true" />,
    title: 'Seguridad de Enlaces',
    description: 'Protección con contraseña y fechas de caducidad para enlaces',
    content:
      'Controla quién puede acceder a tus enlaces y por cuánto tiempo con funciones avanzadas de seguridad.',
    color: 'purple',
  },
];

export const plans = {
  monthly: [
    {
      name: 'Gratis',
      icon: <AcademicCapIcon className="h-5 w-5 text-pastel-blue" />,
      price: '$0',
      period: 'mes',
      description: 'Perfecto para probar nuestro servicio',
      features: [
        { included: true, text: 'Hasta 50 enlaces' },
        { included: true, text: 'Analíticas básicas' },
        { included: true, text: 'Códigos QR estándar' },
        { included: false, text: 'Dominios personalizados' },
      ],
      color: 'blue',
    },
    {
      name: 'Pro',
      icon: <ShieldCheckIcon className="h-5 w-5 text-pastel-purple" />,
      price: '$12',
      period: 'mes',
      description: 'Para profesionales y equipos pequeños',
      features: [
        { included: true, text: 'Enlaces ilimitados' },
        { included: true, text: 'Analíticas avanzadas' },
        { included: true, text: 'Códigos QR personalizados' },
        { included: true, text: '1 dominio personalizado' },
        { included: true, text: 'Protección con contraseña' },
      ],
      popular: true,
      color: 'purple',
    },
    {
      name: 'Empresas',
      icon: <BriefcaseIcon className="h-5 w-5 text-pastel-pink" />,
      price: '$29',
      period: 'mes',
      description: 'Para empresas con necesidades avanzadas',
      features: [
        { included: true, text: 'Todo lo de Pro' },
        { included: true, text: 'Hasta 5 dominios personalizados' },
        { included: true, text: 'Colaboración en equipo' },
        { included: true, text: 'Acceso a API' },
        { included: true, text: 'Soporte prioritario' },
      ],
      color: 'pink',
    },
  ],
  annually: [
    {
      name: 'Gratis',
      icon: <AcademicCapIcon className="h-5 w-5 text-pastel-blue" />,
      price: '$0',
      period: 'año',
      description: 'Perfecto para probar nuestro servicio',
      features: [
        { included: true, text: 'Hasta 50 enlaces' },
        { included: true, text: 'Analíticas básicas' },
        { included: true, text: 'Códigos QR estándar' },
        { included: false, text: 'Dominios personalizados' },
      ],
      color: 'blue',
    },
    {
      name: 'Pro',
      icon: <ShieldCheckIcon className="h-5 w-5 text-pastel-purple" />,
      price: '$115',
      period: 'año',
      description: 'Para profesionales y equipos pequeños',
      features: [
        { included: true, text: 'Enlaces ilimitados' },
        { included: true, text: 'Analíticas avanzadas' },
        { included: true, text: 'Códigos QR personalizados' },
        { included: true, text: '1 dominio personalizado' },
        { included: true, text: 'Protección con contraseña' },
      ],
      popular: true,
      color: 'purple',
    },
    {
      name: 'Empresas',
      icon: <BriefcaseIcon className="h-5 w-5 text-pastel-pink" />,
      price: '$279',
      period: 'año',
      description: 'Para empresas con necesidades avanzadas',
      features: [
        { included: true, text: 'Todo lo de Pro' },
        { included: true, text: 'Hasta 5 dominios personalizados' },
        { included: true, text: 'Colaboración en equipo' },
        { included: true, text: 'Acceso a API' },
        { included: true, text: 'Soporte prioritario' },
      ],
      color: 'pink',
    },
  ],
};
