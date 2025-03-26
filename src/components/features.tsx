'use client';

import FeatureCard from './feature-card';
import { motion } from 'framer-motion';

export default function Features() {
  const features = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
          aria-hidden="true"
        >
          <path d="m13 2-2 2h-2v2l-2 2v2l-2 2v2l-2 2h2l2-2h2l2-2h2l2-2h2l2-2v-2l-2-2V4l-2-2z"></path>
          <path d="m13 14-2 2h-2v2l-2 2"></path>
        </svg>
      ),
      title: 'Analíticas de Enlaces',
      description:
        'Seguimiento de clics, datos geográficos, referentes, dispositivos y más',
      content:
        'Obtén información detallada sobre quién está haciendo clic en tus enlaces y de dónde provienen.',
      color: 'purple',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
          aria-hidden="true"
        >
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
        </svg>
      ),
      title: 'URLs Personalizadas',
      description:
        'Crea enlaces cortos de marca y memorables con dominios personalizados',
      content:
        'Usa tu propio dominio para crear enlaces cortos de marca que refuercen tu identidad.',
      color: 'pink',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
          aria-hidden="true"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <rect x="7" y="7" width="3" height="9"></rect>
          <rect x="14" y="7" width="3" height="5"></rect>
        </svg>
      ),
      title: 'Códigos QR',
      description: 'Genera códigos QR para tus enlaces acortados al instante',
      content:
        'Conecta experiencias offline y online con códigos QR escaneables para tus enlaces.',
      color: 'blue',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
          aria-hidden="true"
        >
          <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
          <path d="M10 2c1 .5 2 2 2 5" />
        </svg>
      ),
      title: 'Páginas Bio',
      description: 'Crea una página de destino con múltiples enlaces',
      content:
        'Comparte múltiples enlaces con una sola URL - perfecto para perfiles de redes sociales.',
      color: 'mint',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
          aria-hidden="true"
        >
          <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
      title: 'Acceso API',
      description:
        'Integra el acortamiento de URL en tus aplicaciones y flujos de trabajo',
      content:
        'Usa nuestra potente API para crear, gestionar y rastrear enlaces cortos de forma programática.',
      color: 'yellow',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
          aria-hidden="true"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
      title: 'Seguridad de Enlaces',
      description:
        'Protección con contraseña y fechas de caducidad para enlaces',
      content:
        'Controla quién puede acceder a tus enlaces y por cuánto tiempo con funciones avanzadas de seguridad.',
      color: 'purple',
    },
  ];

  return (
    <section
      id="features"
      className="w-full py-16 md:py-24 lg:py-32 relative overflow-hidden"
      aria-labelledby="features-heading"
    >
      {/* Formas decorativas de fondo */}
      <div
        className="absolute inset-0 overflow-hidden -z-10"
        aria-hidden="true"
      >
        <div className="absolute top-20 right-10 w-72 h-72 bg-pastel-blue/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute bottom-40 left-10 w-72 h-72 bg-pastel-pink/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-72 h-72 bg-pastel-yellow/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 px-3 py-1.5 rounded-full text-pastel-purple font-medium shadow-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 text-pastel-yellow"
              aria-hidden="true"
            >
              <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
            </svg>
            <span>Características Increíbles</span>
          </div>
          <h2
            id="features-heading"
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text"
          >
            Todo lo que Necesitas
          </h2>
          <p className="max-w-[85%] text-gray-700 dark:text-gray-300 md:text-xl">
            Herramientas potentes para gestionar, rastrear y optimizar tus
            enlaces
          </p>
        </motion.div>
        <ul className="mx-auto grid justify-center gap-6 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 lg:gap-8 mt-10">
          {features.map((feature, index) => (
            <li key={index}>
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                content={feature.content}
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                color={feature.color as any}
                index={index}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
