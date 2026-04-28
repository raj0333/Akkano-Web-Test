import { motion } from 'motion/react';
import { MessageCircleX, HelpCircle, Lightbulb } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: MessageCircleX,
      title: 'Recurring Conflicts',
      description: "You feel like you're speaking different languages.",
    },
    {
      icon: HelpCircle,
      title: 'Lack of Clarity',
      description: 'You love each other but struggle to understand why certain habits trigger tension.',
    },
    {
      icon: Lightbulb,
      title: 'Untapped Potential',
      description: 'You know you\'re a great team, but you haven\'t found the "manual" for your partnership yet.',
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-semibold text-[#111827] mb-4">
            Are You Stuck In The Same Old Conversations?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-left p-8 md:p-10 bg-[#FAFAFA] rounded-2xl"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-[#0f4c3a] rounded-2xl mb-8">
                <feature.icon className="w-7 h-7 text-[#e8f5e9]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-[15px] md:text-base text-gray-700 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
