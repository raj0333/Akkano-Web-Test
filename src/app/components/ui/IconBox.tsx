import { ReactNode } from 'react';

interface IconBoxProps {
  icon: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  shape?: 'square' | 'circle';
  className?: string;
}

export function IconBox({
  icon,
  variant = 'primary',
  size = 'md',
  shape = 'circle',
  className = '',
}: IconBoxProps) {
  const variants = {
    primary: 'bg-emerald-800 text-white',
    secondary: 'bg-emerald-100 text-emerald-800',
    outline: 'border-2 border-emerald-800 text-emerald-800 bg-white',
  };

  const sizes = {
    sm: 'w-10 h-10',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20',
  };

  const shapes = {
    square: 'rounded-lg',
    circle: 'rounded-full',
  };

  return (
    <div className={`inline-flex items-center justify-center ${variants[variant]} ${sizes[size]} ${shapes[shape]} ${className}`}>
      {icon}
    </div>
  );
}
