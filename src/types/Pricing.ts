import { BaseCardProps } from './common';

export type PricingColor = 'purple' | 'pink' | 'blue';

export type Feature = {
  included: boolean;
  text: string;
};

export type PricingCardProps = BaseCardProps & {
  name: string;
  icon: React.ReactNode;
  price: string;
  period: string;
  features: Feature[];
  popular?: boolean;
  color: PricingColor;
};
