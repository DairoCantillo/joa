import type React from 'react';
type FeatureCardProps = Readonly<{
  icon: React.ReactNode;
  title: string;
  description: string;
  content: string;
}>;

export default function FeatureCard({
  icon,
  title,
  description,
  content,
}: FeatureCardProps) {
  return (
    <div className="flex flex-col items-center text-center rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
      <div className="mb-4">
        <div className="p-2 rounded-full bg-purple-100 mb-2 flex items-center justify-center">
          {icon}
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-500 mt-1">{description}</p>
      </div>
      <div className="flex-1">
        <p className="text-gray-600 text-sm">{content}</p>
      </div>
    </div>
  );
}
