import { motion } from 'motion/react';
import { CheckCircle, Check } from 'lucide-react';

interface CheckListProps {
  items: string[];
  variant?: 'default' | 'circle';
  iconColor?: 'primary' | 'success' | 'secondary';
  animate?: boolean;
  className?: string;
}

export function CheckList({
  items,
  variant = 'circle',
  iconColor = 'primary',
  animate = true,
  className = '',
}: CheckListProps) {
  const colors = {
    primary: 'text-emerald-800',
    success: 'text-green-600',
    secondary: 'text-gray-600',
  };

  const Icon = variant === 'circle' ? CheckCircle : Check;

  return (
    <div className={`space-y-4 ${className}`}>
      {items.map((item, index) => {
        const ItemComponent = animate ? motion.div : 'div';
        const animationProps = animate ? {
          initial: { opacity: 0, x: 20 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.4, delay: index * 0.1 },
        } : {};

        return (
          <ItemComponent
            key={index}
            className="flex items-start space-x-3"
            {...animationProps}
          >
            <Icon className={`w-6 h-6 ${colors[iconColor]} flex-shrink-0 mt-0.5`} />
            <span className="text-gray-700">{item}</span>
          </ItemComponent>
        );
      })}
    </div>
  );
}
