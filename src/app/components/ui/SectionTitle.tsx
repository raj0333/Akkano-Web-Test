import { ReactNode } from 'react';
import { motion } from 'motion/react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  animate?: boolean;
  className?: string;
}

export function SectionTitle({
  title,
  subtitle,
  align = 'center',
  animate = true,
  className = '',
}: SectionTitleProps) {
  const alignments = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  const TitleComponent = animate ? motion.div : 'div';
  const animationProps = animate ? {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  } : {};

  return (
    <TitleComponent className={`mb-16 ${alignments[align]} ${className}`} {...animationProps}>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </TitleComponent>
  );
}
