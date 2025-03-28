export type PricingCardProps = Readonly<{
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
  color: 'purple' | 'pink' | 'blue';
  index: number;
}>;
