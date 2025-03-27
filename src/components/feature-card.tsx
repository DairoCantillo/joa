'use client';

import type React from 'react';

import { motion } from 'framer-motion';

type FeatureCardProps = Readonly<{
  icon: React.ReactNode;
  title: string;
  description: string;
  content: string;
  color: 'purple' | 'pink' | 'blue' | 'mint' | 'yellow';
  index: number;
}>;

export default function FeatureCard({
  icon,
  title,
  description,
  content,
  color,
  index,
}: FeatureCardProps) {
  const colorClasses = {
    purple: 'bg-pastel-purple/10 text-pastel-purple border-pastel-purple/20',
    pink: 'bg-pastel-pink/10 text-pastel-pink border-pastel-pink/20',
    blue: 'bg-pastel-blue/10 text-pastel-blue border-pastel-blue/20',
    mint: 'bg-pastel-mint/10 text-pastel-mint border-pastel-mint/20',
    yellow: 'bg-pastel-yellow/10 text-pastel-yellow border-pastel-yellow/20',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="flex flex-col min-h-70  items-center text-center rounded-xl border border-white/50 dark:border-gray-700/50 bg-white/80 dark:bg-gray-800/95 p-6 shadow-md hover:shadow-lg transition-all"
    >
      <div className="mb-4">
        <div
          className={`p-3 rounded-full ${colorClasses[color]} flex justify-center mb-3`}
        >
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
          {title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          {description}
        </p>
      </div>
      <div className="flex-1">
        <p className="text-gray-600 dark:text-gray-400 text-sm">{content}</p>
      </div>
      <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 w-full"></div>
    </motion.div>
  );
}
