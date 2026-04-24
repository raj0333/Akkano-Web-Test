import { ReactNode } from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { Button } from './Button';

interface PricingCardProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  buttonText?: string;
  onButtonClick?: () => void;
  animate?: boolean;
  delay?: number;
  className?: string;
}

export function PricingCard({
  name,
  price,
  period,
  description,
  features,
  popular = false,
  buttonText = 'Get Started',
  onButtonClick,
  animate = true,
  delay = 0,
  className = '',
}: PricingCardProps) {
  const CardComponent = animate ? motion.div : 'div';
  const animationProps = animate ? {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, delay },
  } : {};

  return (
    <CardComponent
      className={`bg-white rounded-lg shadow-lg p-8 relative ${
        popular ? 'border-2 border-emerald-800' : ''
      } ${className}`}
      {...animationProps}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-800 text-white px-4 py-1 rounded-full text-sm font-medium">
          Most Popular
        </div>
      )}

      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-end justify-center gap-1">
          <span className="text-5xl font-bold text-gray-900">{price}</span>
          <span className="text-gray-600 mb-2">/{period}</span>
        </div>
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-emerald-800 flex-shrink-0 mt-0.5" />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        variant={popular ? 'primary' : 'outline'}
        fullWidth
        onClick={onButtonClick}
      >
        {buttonText}
      </Button>
    </CardComponent>
  );
}
