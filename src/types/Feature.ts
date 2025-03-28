export type FeatureCardProps = Readonly<{
  icon: React.ReactNode;
  title: string;
  description: string;
  content: string;
  color: 'purple' | 'pink' | 'blue' | 'mint' | 'yellow';
  index: number;
}>;
