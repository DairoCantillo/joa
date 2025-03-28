'use client';
import { colorClasses } from '@/constants/colors';
import { FeatureCardProps } from '@/types/Feature';
import { motion } from 'framer-motion';

export default function FeatureCard({
  icon,
  title,
  description,
  content,
  color,
  index,
}: FeatureCardProps) {
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
