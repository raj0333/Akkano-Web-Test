import { motion } from 'motion/react';
import { Check } from 'lucide-react';

export function Pricing() {
  const plans = [
    {
      name: 'Essential Compatibility',
      subtext: 'Basic Report',
      description: 'Best if you just want the data',
      price: '$29*',
      features: [
        'A personalized overview report',
        'Comparison Strength & Conflict Zones',
        'Delivered within 24 hours',
        '4 pages PDF report',
      ],
      buttonText: 'Buy Essential Report',
    },
    {
      name: 'Comprehensive Compatibility',
      subtext: 'Premium',
      description: 'Best for couples seeking a breakthrough',
      price: '$129*',
      features: [
        'Everything in the Essential Report',
        'Couples Reflection Guide',
        'Practical prompts and discussion starters',
        'Delivered within 48 hours',
        '8-12 pages PDF report',
      ],
      buttonText: 'Start My Transformation',
      isPopular: true, // only for badge
    },
  ];

  return (
    <section id="pricing" className="py-16 md:py-24 bg-white">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-10 max-w-[1400px] mx-auto items-center">

          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative flex flex-col p-8 md:p-12 rounded-[24px] bg-white border-2 border-[#E7E5E4] shadow-sm 
              hover:shadow-xl hover:bg-[#0f4c3a] hover:text-white transition-all duration-300 ease-in-out group"
            >

              {/* Most Popular Badge */}
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#e8f8d6] text-[#0f4c3a] px-5 py-1.5 rounded-full text-xs font-bold tracking-wide border border-[#064733] uppercase shadow-md">
                  Most Popular
                </div>
              )}

              {/* Header */}
              <div className="text-center mb-8">
                <h3 className="text-[24px] font-semibold mb-2 text-gray-900 group-hover:text-white">
                  {plan.name}
                </h3>

                <p className="text-[13px] mb-6 text-gray-600 group-hover:text-white">
                  {plan.subtext}
                </p>

                <p className="text-[15px] mb-6 text-gray-600 group-hover:text-white">
                  {plan.description}
                </p>

                <div className="text-[48px] font-bold text-gray-900 group-hover:text-white">
                  {plan.price}
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-10">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#0f4c3a] group-hover:text-white"
                      strokeWidth={2}
                    />
                    <span className="text-[15px] text-gray-800 group-hover:text-white">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Button (FIXED HOVER) */}
              <button
                className="w-full py-4 rounded-xl font-semibold 
                bg-[#0f4c3a] text-white 
                hover:bg-[#e8f8d6] hover:text-[#0f4c3a]
                group-hover:bg-[#e8f8d6] group-hover:text-[#0f4c3a]
                transition-colors duration-300"
              >
                {plan.buttonText}
              </button>

              {/* Note */}
              <p className="text-[11px] text-center mt-6 text-gray-400 group-hover:text-white">
                *Important: CliftonStrengths® 34 Report is not included in our bundle price.
              </p>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}