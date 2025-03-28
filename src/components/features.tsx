'use client';

import { features } from '@/constants/texts';
import FeatureCard from './feature-card';
import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';

export default function Features() {
  return (
    <section
      id="features"
      className="w-full py-16 md:py-24 lg:py-32 relative overflow-hidden"
      aria-labelledby="features-heading"
    >
      <div
        className="absolute inset-0 overflow-hidden -z-10"
        aria-hidden="true"
      >
        <div className="absolute top-20 right-10 w-72 h-72 bg-pastel-blue rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute bottom-40 left-10 w-72 h-72 bg-pastel-pink rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-72 h-72 bg-pastel-yellow rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
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
            <StarIcon
              className="h-4 w-4 text-pastel-yellow"
              aria-hidden="true"
            />
            <span>Características Increíbles</span>
          </div>
          <h2
            id="features-heading"
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text"
          >
            Todo lo que Necesitas
          </h2>
          <p className="max-w-[85%] text-gray-600 md:text-xl">
            Herramientas potentes para gestionar, rastrear y optimizar tus
            enlaces
          </p>
        </motion.div>
        <ul className="mx-auto grid justify-center gap-6 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 lg:gap-8 mt-10">
          {features.map((feature, index) => (
            <li key={feature.title}>
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                content={feature.content}
                color={
                  feature.color as
                    | 'purple'
                    | 'pink'
                    | 'blue'
                    | 'mint'
                    | 'yellow'
                }
                index={index}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
