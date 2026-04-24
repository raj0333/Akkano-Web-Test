import { ReactNode } from 'react';
import { Container } from './Container';

interface SectionProps {
  children: ReactNode;
  id?: string;
  background?: 'white' | 'gray' | 'dark' | 'gradient' | 'green';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  className?: string;
}

export function Section({
  children,
  id,
  background = 'white',
  padding = 'lg',
  containerSize = 'xl',
  className = '',
}: SectionProps) {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    dark: 'bg-gray-900 text-white',
    gradient: 'bg-gradient-to-b from-green-50 to-white',
    green: 'bg-emerald-900 text-white',
  };

  const paddings = {
    none: '',
    sm: 'py-8 md:py-12',
    md: 'py-12 md:py-16',
    lg: 'py-16 md:py-24',
  };

  return (
    <section
      id={id}
      className={`${backgrounds[background]} ${paddings[padding]} ${className}`}
    >
      <Container size={containerSize}>{children}</Container>
    </section>
  );
}
