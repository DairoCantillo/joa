'use client';

import type React from 'react';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Link, Copy, CheckCheck, Wand2 } from 'lucide-react';
import Image from 'next/image';

export default function UrlShortener() {
  const [activeTab, setActiveTab] = useState('standard');
  const [url, setUrl] = useState('');
  const [customUrl, setCustomUrl] = useState('');
  const [customPath, setCustomPath] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState('');
  const [copied, setCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulamos una carga
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Esto se conectaría a tu servicio real de acortamiento de URL
    setShortenedUrl('https://short.ly/a1b2c3');
    setIsLoading(false);
  };

  const handleCustomSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulamos una carga
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Esto se conectaría a tu servicio real de acortamiento de URL con ruta personalizada
    setShortenedUrl(`https://short.ly/${customPath}`);
    setIsLoading(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortenedUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="url-shortener"
      className="w-full py-16 md:py-24 relative overflow-hidden"
      aria-labelledby="url-shortener-heading bg-[url(/images/bg-short-url.png)] bg-cover bg-center bg-no-repeat"
    >
      {/* Imagen de fondo */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/images/bg-short-url.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-auto flex max-w-[64rem] flex-col items-center justify-center gap-4">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 px-4 py-2 rounded-full text-pastel-purple font-medium mb-2 shadow-sm"
          >
            <Sparkles
              size={18}
              className="text-pastel-yellow animate-pulse-slow"
              aria-hidden="true"
            />
            <span>¡Acorta URLs al instante!</span>
          </motion.div>

          <motion.h2
            id="url-shortener-heading"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-center gradient-text"
          >
            Convierte enlaces largos en mágicamente cortos
          </motion.h2>

          <motion.p
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-700 dark:text-gray-300 text-center md:text-xl mb-8 max-w-[85%]"
          >
            Pega tu enlace, haz clic y ¡listo! Comparte URLs cortas y atractivas
            en segundos
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full max-w-3xl bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-white/50 dark:border-gray-700/50"
          >
            <div
              role="tablist"
              className="flex w-full mb-6 bg-gray-100/80 dark:bg-gray-700/80 p-1 rounded-xl"
            >
              <button
                role="tab"
                aria-selected={activeTab === 'standard'}
                aria-controls="standard-tab"
                onClick={() => setActiveTab('standard')}
                className={`flex-1 py-3 px-4 text-center rounded-lg flex items-center justify-center gap-2 transition-all duration-200 ${
                  activeTab === 'standard'
                    ? 'bg-white dark:bg-gray-800 text-pastel-purple shadow-sm'
                    : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-white/50 dark:hover:bg-gray-800/50'
                }`}
              >
                <Link
                  size={18}
                  className={
                    activeTab === 'standard' ? 'text-pastel-purple' : ''
                  }
                  aria-hidden="true"
                />
                <span>Enlace Simple</span>
              </button>
              <button
                role="tab"
                aria-selected={activeTab === 'custom'}
                aria-controls="custom-tab"
                onClick={() => setActiveTab('custom')}
                className={`flex-1 py-3 px-4 text-center rounded-lg flex items-center justify-center gap-2 transition-all duration-200 ${
                  activeTab === 'custom'
                    ? 'bg-white dark:bg-gray-800 text-pastel-purple shadow-sm'
                    : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-white/50 dark:hover:bg-gray-800/50'
                }`}
              >
                <Wand2
                  size={18}
                  className={activeTab === 'custom' ? 'text-pastel-purple' : ''}
                  aria-hidden="true"
                />
                <span>Enlace Personalizado</span>
              </button>
            </div>

            <div
              id="standard-tab"
              role="tabpanel"
              aria-labelledby="standard-tab"
              hidden={activeTab !== 'standard'}
            >
              {activeTab === 'standard' && (
                <form onSubmit={handleSubmit} className="grid gap-4">
                  <div className="relative">
                    <label htmlFor="standard-url" className="sr-only">
                      URL a acortar
                    </label>
                    <input
                      id="standard-url"
                      type="url"
                      placeholder="https://ejemplo.com/pega-aqui-tu-enlace-super-largo-que-quieres-acortar"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      className="w-full px-4 py-4 pr-36 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-pastel-purple/50 bg-white text-white dark:bg-gray-800 transition-all duration-200"
                      required
                    />
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="absolute right-2 top-2 bg-gradient-to-r from-pastel-purple to-pastel-pink text-white py-2 px-4 rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-pastel-purple/50 focus:ring-offset-2 transition-all duration-200 disabled:opacity-70"
                    >
                      {isLoading ? (
                        <div className="flex items-center gap-2">
                          <div
                            className="h-4 w-4 rounded-full border-2 border-white border-r-transparent animate-spin"
                            aria-hidden="true"
                          ></div>
                          <span>Acortando...</span>
                        </div>
                      ) : (
                        '¡Acortar!'
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>

            <div
              id="custom-tab"
              role="tabpanel"
              aria-labelledby="custom-tab"
              hidden={activeTab !== 'custom'}
            >
              {activeTab === 'custom' && (
                <form onSubmit={handleCustomSubmit} className="grid gap-5">
                  <div>
                    <label
                      htmlFor="long-url"
                      className="text-sm font-medium mb-2 block text-gray-700 dark:text-gray-300"
                    >
                      URL que quieres acortar
                    </label>
                    <input
                      id="long-url"
                      type="url"
                      placeholder="https://ejemplo.com/pega-aqui-tu-enlace-super-largo"
                      value={customUrl}
                      onChange={(e) => setCustomUrl(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-pastel-purple/50 bg-white text-white dark:bg-gray-800 transition-all duration-200"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="custom-path"
                      className="text-sm font-medium mb-2 block text-gray-700 dark:text-gray-300"
                    >
                      Personaliza tu enlace
                    </label>
                    <div className="flex items-center">
                      <div className="bg-gray-100 dark:bg-gray-700 px-4 py-3 rounded-l-xl border-y border-l border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 font-medium">
                        short.ly/
                      </div>
                      <input
                        id="custom-path"
                        type="text"
                        placeholder="mi-super-enlace"
                        value={customPath}
                        onChange={(e) => setCustomPath(e.target.value)}
                        className="flex-1 px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-r-xl focus:outline-none focus:ring-2 focus:ring-pastel-purple/50 bg-white text-white dark:bg-gray-800 transition-all duration-200"
                        required
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-pastel-purple to-pastel-pink text-white py-3 px-4 rounded-xl hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-pastel-purple/50 focus:ring-offset-2 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {isLoading ? (
                      <div className="flex items-center gap-2">
                        <div
                          className="h-4 w-4 rounded-full border-2 border-white border-r-transparent animate-spin"
                          aria-hidden="true"
                        ></div>
                        <span>Creando enlace...</span>
                      </div>
                    ) : (
                      <>
                        <Wand2 size={18} aria-hidden="true" />
                        <span>Crear Enlace Mágico</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {shortenedUrl && (
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="mt-6 rounded-xl border border-pastel-mint/30 p-4 bg-gradient-to-r from-pastel-mint/10 to-pastel-blue/10"
              >
                <output
                  className="flex items-center justify-between"
                  aria-atomic="true"
                >
                  <div className="flex items-center gap-2">
                    <div
                      className="h-2 w-2 rounded-full bg-pastel-mint"
                      aria-hidden="true"
                    ></div>
                    <p className="text-sm font-medium text-pastel-purple">
                      ¡Enlace creado con éxito!
                    </p>
                  </div>
                  <button
                    onClick={copyToClipboard}
                    className="h-8 w-8 flex items-center justify-center rounded-md hover:bg-white dark:hover:bg-gray-700 transition-colors"
                    aria-label={
                      copied
                        ? 'Copiado al portapapeles'
                        : 'Copiar al portapapeles'
                    }
                  >
                    {copied ? (
                      <CheckCheck
                        size={18}
                        className="text-pastel-mint"
                        aria-hidden="true"
                      />
                    ) : (
                      <Copy
                        size={18}
                        className="text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                      />
                    )}
                  </button>
                </output>
                <a
                  href={shortenedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 block truncate font-medium text-lg hover:underline text-pastel-purple"
                >
                  {shortenedUrl}
                </a>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                  Haz clic para abrir o usa el botón de copiar para compartir
                </p>
              </motion.div>
            )}

            <div
              className="mt-6 flex flex-wrap gap-2 justify-center"
              aria-hidden="true"
            >
              <span className="text-xs bg-white/50 dark:bg-gray-700/50 px-3 py-1 rounded-full text-pastel-purple">
                Sin registro
              </span>
              <span className="text-xs bg-white/50 dark:bg-gray-700/50 px-3 py-1 rounded-full text-pastel-blue">
                Estadísticas
              </span>
              <span className="text-xs bg-white/50 dark:bg-gray-700/50 px-3 py-1 rounded-full text-pastel-yellow">
                Personalizable
              </span>
              <span className="text-xs bg-white/50 dark:bg-gray-700/50 px-3 py-1 rounded-full text-pastel-mint">
                Seguro
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-8 flex flex-wrap gap-4 justify-center items-center"
            aria-hidden="true"
          >
            <div className="flex items-center gap-2 bg-white/70 dark:bg-gray-800/70 px-4 py-2 rounded-full shadow-sm">
              <div className="h-2 w-2 rounded-full bg-pastel-mint animate-pulse"></div>
              <span className="text-sm text-gray-700 dark:text-gray-300">
                +10,000 enlaces creados hoy
              </span>
            </div>
            <div className="flex items-center gap-2 bg-white/70 dark:bg-gray-800/70 px-4 py-2 rounded-full shadow-sm">
              <div className="h-2 w-2 rounded-full bg-pastel-pink animate-pulse"></div>
              <span className="text-sm text-gray-700 dark:text-gray-300">
                100% seguro
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
