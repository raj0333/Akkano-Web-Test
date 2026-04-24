import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar?: string;
  animate?: boolean;
  delay?: number;
  className?: string;
}

export function TestimonialCard({
  name,
  role,
  content,
  rating,
  avatar,
  animate = true,
  delay = 0,
  className = '',
}: TestimonialCardProps) {
  const CardComponent = animate ? motion.div : 'div';
  const animationProps = animate ? {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, delay },
  } : {};

  return (
    <CardComponent
      className={`bg-white p-8 rounded-lg shadow-lg relative ${className}`}
      {...animationProps}
    >
      <Quote className="w-10 h-10 text-emerald-200 absolute top-4 right-4" />
      
      <div className="flex mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
        ))}
      </div>

      <p className="text-gray-700 mb-6 italic">"{content}"</p>

      <div className="flex items-center gap-3">
        {avatar ? (
          <img
            src={avatar}
            alt={name}
            className="w-12 h-12 rounded-full object-cover"
          />
        ) : (
          <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
            <span className="text-emerald-800 font-semibold text-lg">
              {name.charAt(0)}
            </span>
          </div>
        )}
        <div>
          <p className="font-semibold text-gray-900">{name}</p>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </CardComponent>
  );
}
