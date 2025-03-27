'use client';

import { useState } from 'react';
import PricingCard from './pricing-card';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState('monthly');

  const plans = {
    monthly: [
      {
        name: 'Gratis',
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
            className="h-5 w-5 text-pastel-blue"
          >
            <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path>
            <path d="M16 16v-3a2 2 0 0 0-4 0"></path>
            <path d="M12 16v-3"></path>
            <path d="M12 9.01l.01-.011"></path>
          </svg>
        ),
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
            className="h-5 w-5 text-pastel-purple"
          >
            <path d="M19.7 14a6.9 6.9 0 0 0 .3-2V5l-8-3-3.2 1.2"></path>
            <path d="m2 19 1.6-1.6"></path>
            <path d="M4 16.6 7.3 14"></path>
            <path d="M7.3 14c.7-1.3 1.7-2.4 3-3.1"></path>
            <path d="M20.1 6.5 16 8.9"></path>
            <path d="m12 12 2.1 1.7"></path>
            <path d="M19.7 14a6.9 6.9 0 0 0 .3-2V5l-8-3-8 3v7c0 6 8 10 8 10a20.3 20.3 0 0 0 5.7-4.2"></path>
          </svg>
        ),
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
            className="h-5 w-5 text-pastel-pink"
          >
            <path d="M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z"></path>
            <rect x="3" y="14" width="7" height="7" rx="1"></rect>
            <circle cx="17.5" cy="17.5" r="3.5"></circle>
          </svg>
        ),
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
            className="h-5 w-5 text-pastel-blue"
          >
            <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path>
            <path d="M16 16v-3a2 2 0 0 0-4 0"></path>
            <path d="M12 16v-3"></path>
            <path d="M12 9.01l.01-.011"></path>
          </svg>
        ),
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
            className="h-5 w-5 text-pastel-purple"
          >
            <path d="M19.7 14a6.9 6.9 0 0 0 .3-2V5l-8-3-3.2 1.2"></path>
            <path d="m2 19 1.6-1.6"></path>
            <path d="M4 16.6 7.3 14"></path>
            <path d="M7.3 14c.7-1.3 1.7-2.4 3-3.1"></path>
            <path d="M20.1 6.5 16 8.9"></path>
            <path d="m12 12 2.1 1.7"></path>
            <path d="M19.7 14a6.9 6.9 0 0 0 .3-2V5l-8-3-8 3v7c0 6 8 10 8 10a20.3 20.3 0 0 0 5.7-4.2"></path>
          </svg>
        ),
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
            className="h-5 w-5 text-pastel-pink"
          >
            <path d="M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z"></path>
            <rect x="3" y="14" width="7" height="7" rx="1"></rect>
            <circle cx="17.5" cy="17.5" r="3.5"></circle>
          </svg>
        ),
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

  return (
    <section
      id="pricing"
      className="w-full py-16 md:py-24 lg:py-32 relative overflow-hidden"
      aria-labelledby="pricing-heading"
    >
      {/* Formas decorativas de fondo */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute top-20 left-10 w-72 h-72 bg-pastel-yellow/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-pastel-purple/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pastel-pink/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
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
            <Sparkles
              size={16}
              className="text-pastel-yellow"
              aria-hidden="true"
            />
            <span>Planes Flexibles</span>
          </div>
          <h2
            id="pricing-heading"
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text min-h-16"
          >
            Elige tu Plan Perfecto
          </h2>
          <p className="max-w-[85%] text-gray-700 dark:text-gray-300 md:text-xl">
            Opciones flexibles para individuos y empresas de todos los tamaños
          </p>
        </motion.div>

        <div className="mt-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center mb-8"
          >
            <fieldset className="inline-flex p-1 rounded-xl bg-white dark:bg-gray-800 shadow-sm">
              <legend className="sr-only">
                Seleccionar período de facturación
              </legend>
              <div className="flex">
                <button
                  onClick={() => setBillingPeriod('monthly')}
                  aria-pressed={billingPeriod === 'monthly'}
                  className={`px-6 py-2 text-sm rounded-lg transition-all duration-200 ${
                    billingPeriod === 'monthly'
                      ? 'bg-gradient-to-r from-pastel-purple to-pastel-pink text-white shadow-sm'
                      : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
                  }`}
                >
                  Mensual
                </button>
                <button
                  onClick={() => setBillingPeriod('annually')}
                  aria-pressed={billingPeriod === 'annually'}
                  className={`px-6 py-2 text-sm rounded-lg transition-all duration-200 ${
                    billingPeriod === 'annually'
                      ? 'bg-gradient-to-r from-pastel-purple to-pastel-pink text-white shadow-sm'
                      : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
                  }`}
                >
                  Anual (Ahorra 20%)
                </button>
              </div>
            </fieldset>
          </motion.div>

          <ul className="mx-auto grid max-w-screen-lg gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {plans[billingPeriod as keyof typeof plans].map((plan, index) => (
              <li key={plan.name}>
                <PricingCard
                  name={plan.name}
                  icon={plan.icon}
                  price={plan.price}
                  period={plan.period}
                  description={plan.description}
                  features={plan.features}
                  popular={plan.popular}
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  color={plan.color as any}
                  index={index}
                />
              </li>
            ))}
          </ul>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-col items-center justify-center space-y-4 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 px-4 py-2 rounded-full shadow-sm">
            <div
              className="h-2 w-2 rounded-full bg-pastel-mint animate-pulse"
              aria-hidden="true"
            ></div>
            <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">
              ¿Necesitas un plan personalizado?
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-[600px]">
            Contacta con nuestro equipo de ventas para soluciones empresariales
            adaptadas a tus necesidades específicas.
          </p>
          <a
            href="#contact"
            className="flex-1 rounded-xl border border-pastel-purple/20 bg-white dark:bg-gray-800 px-6 py-4 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-pastel-purple focus:ring-offset-2 shadow-sm flex items-center justify-center gap-2"
          >
            <span>Contactar con Ventas</span>
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
              className="h-4 w-4 text-pastel-purple"
              aria-hidden="true"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
