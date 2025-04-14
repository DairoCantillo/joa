'use client';

import { useState } from 'react';
import PricingCard from '@/components/ui/pricing-card';
import { motion } from 'framer-motion';
import { SparklesIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { plans } from '@/constants/texts';

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState('monthly');

  return (
    <section
      id="pricing"
      className="w-full py-16 md:py-24 lg:py-32 relative overflow-hidden"
      aria-labelledby="pricing-heading"
    >
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
            <SparklesIcon
              className="h-4 w-4 text-pastel-yellow"
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
          <p className="max-w-[85%] text-gray-600 md:text-xl z-10">
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
                  title={plan.name}
                  icon={plan.icon}
                  price={plan.price}
                  period={plan.period}
                  description={plan.description}
                  features={plan.features}
                  popular={plan.popular}
                  color={plan.color as 'blue' | 'pink' | 'purple'}
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
          <div className="inline-flex items-center gap-2 bg-white/95 dark:bg-gray-800/95 px-4 py-2 rounded-full shadow-sm">
            <div
              className="h-2 w-2 rounded-full bg-pastel-mint animate-pulse"
              aria-hidden="true"
            ></div>
            <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">
              ¿Necesitas un plan personalizado?
            </h3>
          </div>
          <p className="text-gray-600 max-w-[600px]">
            Contacta con nuestro equipo de ventas para soluciones empresariales
            adaptadas a tus necesidades específicas.
          </p>
          <a
            href="#contact"
            className="flex-1 rounded-xl border border-pastel-purple/20 bg-white dark:bg-gray-800 px-6 py-4 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-pastel-purple focus:ring-offset-2 shadow-sm flex items-center justify-center gap-2"
          >
            <span>Contactar con Ventas</span>
            <ArrowRightIcon
              className="h-4 w-4 text-pastel-purple"
              aria-hidden="true"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
