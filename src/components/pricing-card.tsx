import type React from 'react';
type PricingCardProps = Readonly<{
  name: string;
  icon: React.ReactNode;
  price: string;
  period: string;
  description: string;
  features: Array<{
    included: boolean;
    text: string;
  }>;
  popular?: boolean;
}>;

export default function PricingCard({
  name,
  icon,
  price,
  period,
  description,
  features,
  popular = false,
}: PricingCardProps) {
  return (
    <div
      className={`flex flex-col overflow-hidden group hover:shadow-lg transition-all duration-200 rounded-lg ${popular ? 'border-purple-500 border-2' : 'border border-gray-200'}`}
    >
      <div
        className={`h-2 w-full ${popular ? 'bg-purple-500' : 'bg-gray-200'}`}
      ></div>
      {popular && (
        <div className="absolute top-0 right-0">
          <div className="text-xs font-bold uppercase bg-purple-500 text-white py-1 px-3 rounded-bl-lg">
            Popular
          </div>
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center gap-2">
          {icon}
          <h3 className="text-xl font-bold">{name}</h3>
        </div>
        <div className="mt-4 flex items-baseline text-5xl font-bold">
          {price}
          <span className="ml-1 text-lg font-medium text-gray-500">
            /{period}
          </span>
        </div>
        <p className="pt-4 text-gray-500">{description}</p>
      </div>
      <div className="flex-1 p-6 pt-0">
        <ul className="space-y-3 text-sm">
          {features.map((feature, index) => (
            <li key={feature.text + index} className="flex items-center">
              {feature.included ? (
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
                  className="mr-2 h-4 w-4 text-purple-500"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              ) : (
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
                  className="mr-2 h-4 w-4 text-gray-400"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              )}
              <span className={feature.included ? '' : 'text-gray-400'}>
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-6 pt-0">
        <button
          className={`w-full py-2 px-4 rounded-md transition-colors ${
            popular
              ? 'bg-purple-600 text-white hover:bg-purple-700'
              : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
          } focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2`}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
