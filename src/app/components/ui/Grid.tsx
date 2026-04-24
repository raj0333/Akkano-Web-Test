import { ReactNode } from 'react';

interface GridProps {
  children: ReactNode;
  cols?: 1 | 2 | 3 | 4 | 5 | 6;
  gap?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  responsive?: boolean;
  className?: string;
}

export function Grid({
  children,
  cols = 3,
  gap = 'md',
  responsive = true,
  className = '',
}: GridProps) {
  const colsClasses = {
    1: responsive ? 'grid-cols-1' : 'grid-cols-1',
    2: responsive ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-2',
    3: responsive ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-3',
    4: responsive ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4' : 'grid-cols-4',
    5: responsive ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-5' : 'grid-cols-5',
    6: responsive ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-6' : 'grid-cols-6',
  };

  const gaps = {
    none: 'gap-0',
    sm: 'gap-4',
    md: 'gap-8',
    lg: 'gap-12',
    xl: 'gap-16',
  };

  return (
    <div className={`grid ${colsClasses[cols]} ${gaps[gap]} ${className}`}>
      {children}
    </div>
  );
}
