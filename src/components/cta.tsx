'use client';

import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section
      id="cta"
      className="w-full py-16 md:py-24 lg:py-32 relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Fondo con gradiente */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-pastel-purple/10 via-pastel-pink/10 to-pastel-blue/10"
        aria-hidden="true"
      ></div>

      {/* Formas decorativas */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-20 right-10 w-72 h-72 bg-pastel-mint/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-pastel-yellow/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 border border-white/50 dark:border-gray-700/50">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center space-y-6 text-center"
          >
            <div className="inline-flex items-center gap-2 bg-pastel-purple/10 px-3 py-1.5 rounded-full text-pastel-purple font-medium">
              <Sparkles
                size={16}
                className="text-pastel-yellow"
                aria-hidden="true"
              />
              <span>¡Únete a +10,000 usuarios felices!</span>
            </div>

            <h2
              id="cta-heading"
              className="text-3xl md:text-4xl font-bold tracking-tight gradient-text animate-pulse-slow"
            >
              ¿Listo para empezar a acortar?
            </h2>

            <p className="mx-auto max-w-[600px] text-gray-700 dark:text-gray-300 md:text-xl">
              Únete a miles de profesionales de marketing, creadores de
              contenido y empresas que usan Short.ly todos los días.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full max-w-md">
              <motion.a
                href="/register"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 rounded-xl bg-gradient-to-r from-pastel-purple to-pastel-pink px-6 py-4 text-sm font-medium text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-pastel-purple focus:ring-offset-2 shadow-md text-center"
              >
                Comenzar Gratis
              </motion.a>

              <motion.a
                href="#demo"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 rounded-xl border border-pastel-purple/20 bg-white dark:bg-gray-800 px-6 py-4 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-pastel-purple focus:ring-offset-2 shadow-sm flex items-center justify-center gap-2"
              >
                <span>Ver Demo</span>
                <ArrowRight
                  size={16}
                  className="text-pastel-purple"
                  aria-hidden="true"
                />
              </motion.a>
            </div>

            <dl className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
              <div className="flex flex-col items-center">
                <dt className="sr-only">Número de usuarios</dt>
                <dd className="text-2xl font-bold gradient-text">10K+</dd>
                <dt className="text-sm gradient-text-subtle">Usuarios</dt>
              </div>
              <div className="flex flex-col items-center">
                <dt className="sr-only">Enlaces creados</dt>
                <dd className="text-2xl font-bold gradient-text">5M+</dd>
                <dt className="text-sm gradient-text-subtle">
                  Enlaces creados
                </dt>
              </div>
              <div className="flex flex-col items-center">
                <dt className="sr-only">Porcentaje de tiempo activo</dt>
                <dd className="text-2xl font-bold gradient-text">99.9%</dd>
                <dt className="text-sm gradient-text-subtle">Tiempo activo</dt>
              </div>
              <div className="flex flex-col items-center">
                <dt className="sr-only">Disponibilidad de soporte</dt>
                <dd className="text-2xl font-bold gradient-text">24/7</dd>
                <dt className="text-sm gradient-text-subtle">Soporte</dt>
              </div>
            </dl>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
