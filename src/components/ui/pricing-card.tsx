'use client';

import type React from 'react';

import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { PricingCardProps } from '@/types/Pricing';

export default function PricingCard({
  name,
  icon,
  price,
  period,
  description,
  features,
  popular = false,
  color = 'purple',
  index,
}: PricingCardProps) {
  // Usamos mapeos directos en lugar de condicionales para el manejo de colores
  const colorClasses = {
    purple: 'from-pastel-purple to-pastel-purple/70',
    pink: 'from-pastel-pink to-pastel-pink/70',
    blue: 'from-pastel-blue to-pastel-blue/70',
  };

  const colorText = {
    purple: 'text-pastel-purple',
    pink: 'text-pastel-pink',
    blue: 'text-pastel-blue',
  };

  const colorMap = {
    purple: 'pastel-purple',
    pink: 'pastel-pink',
    blue: 'pastel-blue',
  };

  const colorAssign = colorMap[color];

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="flex flex-col overflow-hidden group hover:shadow-xl transition-all duration-300 rounded-xl relative"
    >
      <div
        className="absolute -inset-0.5 bg-gradient-to-r from-pastel-purple via-pastel-pink to-pastel-blue rounded-xl opacity-20 group-hover:opacity-40 transition-opacity"
        aria-hidden="true"
      ></div>
      <div className="relative min-h-120 bg-white dark:bg-gray-800 rounded-xl flex flex-col h-full">
        <div
          className={`h-2 w-full bg-gradient-to-r ${colorClasses[color]}`}
          aria-hidden="true"
        ></div>
        {popular && (
          <div className="absolute top-0 right-0">
            <div className="text-xs font-bold uppercase bg-gradient-to-r from-pastel-purple to-pastel-pink text-white py-1 px-3 rounded-bl-lg">
              Popular
            </div>
          </div>
        )}
        <header className="p-6">
          <div className="flex items-center gap-2">
            <div
              className={`p-2 rounded-full bg-${colorAssign}/10`}
              aria-hidden="true"
            >
              {icon}
            </div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
              {name}
            </h3>
          </div>
          <div className="mt-4 flex items-baseline">
            <span className="text-5xl font-bold gradient-text">{price}</span>
            <span className="ml-1 text-lg font-medium text-gray-500 dark:text-gray-400">
              /{period}
            </span>
          </div>
          <p className="pt-4 text-gray-600 dark:text-gray-400">{description}</p>
        </header>
        <div className="flex-1 p-6 pt-0">
          <ul
            className="space-y-3 text-sm"
            aria-label={`Características del plan ${name}`}
          >
            {features.map((feature, idx) => (
              <li key={`${name}-feature-${idx}`} className="flex items-center">
                {feature.included ? (
                  <Check
                    className={`mr-2 h-4 w-4 ${colorText[color]}`}
                    aria-hidden="true"
                  />
                ) : (
                  <X
                    className="mr-2 h-4 w-4 text-gray-400"
                    aria-hidden="true"
                  />
                )}
                <span
                  className={
                    feature.included
                      ? 'text-gray-700 dark:text-gray-300'
                      : 'text-gray-500 dark:text-gray-400'
                  }
                >
                  {feature.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <footer className="p-6 pt-0">
          <a
            href="#signup"
            className={`w-full py-3 px-4 rounded-xl transition-all ${
              popular
                ? 'bg-gradient-to-r from-pastel-purple to-pastel-pink text-white shadow-md hover:shadow-lg'
                : `bg-${colorAssign}/10 ${colorText[color]} hover:bg-${colorAssign}/20`
            } focus:outline-none focus:ring-2 focus:ring-${colorAssign} focus:ring-offset-2 inline-block text-center`}
          >
            Comenzar
          </a>
        </footer>
      </div>
    </motion.article>
  );
}
