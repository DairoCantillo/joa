import { BaseCardProps, AppColor } from './common';

export type FeatureCardProps = BaseCardProps & {
  icon: React.ReactNode;
  content: string;
  color: AppColor;
};
