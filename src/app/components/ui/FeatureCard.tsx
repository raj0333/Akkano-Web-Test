import { ReactNode } from 'react';
import { motion } from 'motion/react';
import { IconBox } from './IconBox';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  layout?: 'vertical' | 'horizontal';
  iconVariant?: 'primary' | 'secondary' | 'outline';
  animate?: boolean;
  delay?: number;
  className?: string;
}

export function FeatureCard({
  icon,
  title,
  description,
  layout = 'vertical',
  iconVariant = 'secondary',
  animate = true,
  delay = 0,
  className = '',
}: FeatureCardProps) {
  const CardComponent = animate ? motion.div : 'div';
  const animationProps = animate ? {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, delay },
  } : {};

  if (layout === 'horizontal') {
    return (
      <CardComponent
        className={`flex gap-4 p-6 rounded-lg hover:bg-gray-50 transition-colors ${className}`}
        {...animationProps}
      >
        <IconBox icon={icon} variant={iconVariant} size="md" />
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </CardComponent>
    );
  }

  return (
    <CardComponent
      className={`text-center p-6 rounded-lg hover:shadow-lg transition-shadow ${className}`}
      {...animationProps}
    >
      <div className="flex justify-center mb-4">
        <IconBox icon={icon} variant={iconVariant} size="lg" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </CardComponent>
  );
}
