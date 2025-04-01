'use client';
import { apiConfig } from '@/constants/apiEndpoints';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="w-full py-16 md:py-24 lg:py-32 relative overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div
        className="absolute inset-0 overflow-hidden -z-10"
        aria-hidden="true"
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-pastel-purple/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-pastel-mint/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pastel-blue/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center space-y-6"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-white/95 dark:bg-gray-800/95 px-3 py-1.5 rounded-full text-pastel-purple font-medium shadow-sm">
                <Sparkles
                  size={16}
                  className="text-pastel-yellow"
                  aria-hidden="true"
                />
                <span>Simplifica tus Enlaces</span>
              </div>
              <h1
                id="hero-heading"
                className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none gradient-text"
              >
                Enlaces Cortos, Grandes Resultados
              </h1>
              <p className="max-w-[600px] text-gray-600 md:text-xl">
                Transforma enlaces largos y difíciles de manejar en URLs
                limpias, memorables y rastreables con nuestro potente acortador
                de URLs.
              </p>
            </div>
            <div className="flex flex-col gap-3 min-[400px]:flex-row">
              <motion.a
                href="#url-shortener"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-xl bg-gradient-to-r from-pastel-purple to-pastel-pink px-6 py-3 text-sm font-medium text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-pastel-purple focus:ring-offset-2 shadow-md text-center"
              >
                Comenzar Ahora
              </motion.a>
              <motion.a
                href="#features"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-xl border border-pastel-purple/20 bg-white dark:bg-gray-800 px-6 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-pastel-purple focus:ring-offset-2 shadow-sm flex items-center justify-center gap-2"
              >
                <span>Saber Más</span>
                <ArrowRight
                  size={16}
                  className="text-pastel-purple"
                  aria-hidden="true"
                />
              </motion.a>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2">
                <div
                  className="h-2 w-2 rounded-full bg-pastel-mint"
                  aria-hidden="true"
                ></div>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Gratis para siempre
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div
                  className="h-2 w-2 rounded-full bg-pastel-blue"
                  aria-hidden="true"
                ></div>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Sin registro obligatorio
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div
                  className="h-2 w-2 rounded-full bg-pastel-pink"
                  aria-hidden="true"
                ></div>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Estadísticas en tiempo real
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center"
            aria-hidden="true"
          >
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-1 bg-gradient-to-r from-pastel-purple via-pastel-pink to-pastel-blue rounded-2xl blur-md opacity-50"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-white/50 dark:border-gray-700/50">
                <div className="h-2 w-full bg-gradient-to-r from-pastel-purple via-pastel-pink to-pastel-blue"></div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-pastel-purple/20 flex items-center justify-center">
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
                        >
                          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                        </svg>
                      </div>
                      <span className="font-medium text-gray-700 dark:text-gray-300">
                        Panel de Control
                      </span>
                    </div>
                    <div className="flex gap-1">
                      <div className="h-2 w-2 rounded-full bg-pastel-pink"></div>
                      <div className="h-2 w-2 rounded-full bg-pastel-yellow"></div>
                      <div className="h-2 w-2 rounded-full bg-pastel-mint"></div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="h-6 w-6 rounded-full bg-pastel-blue/20 flex items-center justify-center">
                          <span className="text-xs font-medium text-pastel-blue">
                            1
                          </span>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {apiConfig.hostname}/promo
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">
                            Creado hace 2 días
                          </div>
                        </div>
                      </div>
                      <div className="text-sm font-medium text-pastel-purple">
                        1,234 clics
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="h-6 w-6 rounded-full bg-pastel-mint/20 flex items-center justify-center">
                          <span className="text-xs font-medium text-pastel-mint">
                            2
                          </span>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {apiConfig.hostname}/evento
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">
                            Creado hace 5 días
                          </div>
                        </div>
                      </div>
                      <div className="text-sm font-medium text-pastel-purple">
                        856 clics
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="h-6 w-6 rounded-full bg-pastel-pink/20 flex items-center justify-center">
                          <span className="text-xs font-medium text-pastel-pink">
                            3
                          </span>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {apiConfig.hostname}/blog
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">
                            Creado hace 1 semana
                          </div>
                        </div>
                      </div>
                      <div className="text-sm font-medium text-pastel-purple">
                        621 clics
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Total de clics
                      </div>
                      <div className="text-lg font-bold gradient-text">
                        2,711
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
