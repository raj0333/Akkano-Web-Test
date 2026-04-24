import { ReactNode } from 'react';
import { motion } from 'motion/react';
import { IconBox } from './IconBox';

interface StepCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  stepNumber: string;
  showConnector?: boolean;
  animate?: boolean;
  delay?: number;
  className?: string;
}

export function StepCard({
  icon,
  title,
  description,
  stepNumber,
  showConnector = false,
  animate = true,
  delay = 0,
  className = '',
}: StepCardProps) {
  const CardComponent = animate ? motion.div : 'div';
  const animationProps = animate ? {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, delay },
  } : {};

  return (
    <CardComponent className={`relative text-center ${className}`} {...animationProps}>
      {showConnector && (
        <div className="hidden lg:block absolute top-16 left-1/2 w-full h-0.5 bg-emerald-200" />
      )}
      <div className="relative bg-white">
        <div className="inline-flex items-center justify-center w-24 h-24 bg-emerald-100 rounded-full mb-4 relative">
          <div className="w-10 h-10 text-emerald-800">
            {icon}
          </div>
          <span className="absolute -top-2 -right-2 w-8 h-8 bg-emerald-800 text-white rounded-full flex items-center justify-center text-sm font-bold">
            {stepNumber}
          </span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          {title}
        </h3>
        <p className="text-gray-600">
          {description}
        </p>
      </div>
    </CardComponent>
  );
}
