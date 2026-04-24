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
      popular: false,
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
      popular: true,
    },
  ];

  return (
    <section id="pricing" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-10 max-w-5xl mx-auto items-center">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`group hover:bg-[#064733] hover:text-white 
transition-all duration-300 ease-in-out p-8 relative flex flex-col ${plan.popular
                  ? 'rounded-3xl bg-[#0f4c3a] shadow-xl md:p-12'
                  : 'rounded-[16px] bg-white border-2 border-[#E7E5E4] shadow-sm md:p-10'
                }`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#e8f8d6] text-[#0f4c3a] px-6 py-2 rounded-full text-[13px] font-bold uppercase tracking-wider shadow-md">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className={`text-[24px] font-semibold mb-2 transition-colors duration-300 ${plan.popular ? 'text-white' : 'text-gray-900 group-hover:text-white'}`}>
                  {plan.name}
                </h3>
                <p className={`text-[13px] mb-8 transition-colors duration-300 ${plan.popular ? 'text-gray-300' : 'text-gray-600 group-hover:text-white'}`}>
                  {plan.subtext}
                </p>
                <p className={`text-[15px] mb-8 transition-colors duration-300 ${plan.popular ? 'text-gray-200' : 'text-gray-600 group-hover:text-white'}`}>
                  {plan.description}
                </p>
                <div className={`text-[48px] font-bold transition-colors duration-300 ${plan.popular ? 'text-white' : 'text-gray-900 group-hover:text-white'}`}>
                  {plan.price}
                </div>
              </div>

              <ul className="space-y-4 mb-10 mx-auto w-fit flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 transition-colors duration-300 ${plan.popular ? 'text-white' : 'text-[#0f4c3a] group-hover:text-white'}`} strokeWidth={2} />
                    <span className={`text-[15px] transition-colors duration-300 ${plan.popular ? 'text-white' : 'text-gray-800 group-hover:text-white'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-xl font-semibold transition-colors ${plan.popular
                  ? 'bg-[#e8f8d6] text-[#0f4c3a] hover:bg-[#d5f3b4]'
                  : 'bg-[#0f4c3a] text-white hover:bg-[#0a3629] group-hover:bg-[#e8f8d6] group-hover:text-[#0f4c3a] group-hover:hover:bg-[#d5f3b4]'
                  }`}
              >
                {plan.buttonText}
              </button>

              <p className={`text-[11px] text-center mt-6 transition-colors duration-300 ${plan.popular ? 'text-[#b1d8c7]' : 'text-gray-400 group-hover:text-white'}`}>
                *Important: CliftonStrengths® 34 Report is not included in our bundle price.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
