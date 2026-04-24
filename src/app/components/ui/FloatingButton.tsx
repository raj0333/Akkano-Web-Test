import { ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface FloatingButtonProps {
  icon: ReactNode;
  onClick: () => void;
  badge?: string | number;
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  variant?: 'primary' | 'secondary';
  visible?: boolean;
  className?: string;
}

export function FloatingButton({
  icon,
  onClick,
  badge,
  position = 'bottom-right',
  variant = 'primary',
  visible = true,
  className = '',
}: FloatingButtonProps) {
  const positions = {
    'bottom-right': 'bottom-6 right-6',
    'bottom-left': 'bottom-6 left-6',
    'top-right': 'top-6 right-6',
    'top-left': 'top-6 left-6',
  };

  const variants = {
    primary: 'bg-emerald-800 hover:bg-emerald-900',
    secondary: 'bg-gray-800 hover:bg-gray-900',
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onClick}
          className={`fixed ${positions[position]} w-16 h-16 ${variants[variant]} text-white rounded-full shadow-lg flex items-center justify-center transition-colors z-50 ${className}`}
        >
          {icon}
          {badge && (
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold">
              {badge}
            </span>
          )}
        </motion.button>
      )}
    </AnimatePresence>
  );
}
