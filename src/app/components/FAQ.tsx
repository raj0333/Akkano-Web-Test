import { motion } from 'motion/react';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function FAQ() {
  // Start with the first item open to match the image
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How is this different from other compatibility tests?',
      answer: 'Most compatibility tests are based on general questions and provide surface-level insights or scores. This assessment is fundamentally different because it is built on your individual CliftonStrengths® profiles — a research-based framework developed by Gallup®. Instead of generic results, you receive a deep, personalized analysis of how your unique strengths interact, highlighting where you align, where you complement each other, and where tension may arise in real-life situations.',
    },
    {
      question: 'Why do I need to take the Gallup® assessment separately?',
      answer: 'You need to take the official assessment directly from Gallup® to ensure your results are authentic and based on their proprietary scientific research. We then use those official results to generate your custom relationship analysis.',
    },
    {
      question: 'How much does it cost?',
      answer: 'Our Relationship Synergy Map bundle is a one-time fee of $129. Please note that the cost of the initial CliftonStrengths® 34 assessment from Gallup® is separate.',
    },
    {
      question: 'What if I have already taken the CliftonStrengths® assessment?',
      answer: 'If you and your partner have already taken the CliftonStrengths® 34 assessment, you can simply upload your existing PDF reports during the checkout process. There is no need to take the test again.',
    },
    {
      question: 'What exactly will I see in the 12-page Relationship Synergy Map?',
      answer: 'You will receive a comprehensive breakdown including the Dynamics Matrix, a Complementarity Roadmap, a Talent Gap Analysis, and a Conflict Heatmap, all designed to give you actionable insights into your partnership.',
    },
    {
      question: 'What if our strengths are completely different? Are we incompatible?',
      answer: 'Not at all! Completely different strengths often make for the most powerful partnerships because you complement each other. Our report will show you how to turn these differences into a unified advantage rather than a source of conflict.',
    },
  ];

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-semibold text-[#111827] tracking-tight">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="space-y-0">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="border-b border-gray-200 last:border-b-0"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full py-6 flex items-center justify-between text-left group bg-transparent"
                >
                  <span
                    className={`text-[15px] md:text-[16px] font-bold transition-colors ${isOpen ? 'text-[#0f4c3a]' : 'text-[#111827] group-hover:text-[#0f4c3a]'
                      }`}
                  >
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#0f4c3a]' : 'text-gray-500'
                      }`}
                    strokeWidth={1.5}
                  />
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: isOpen ? 'auto' : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="pb-8 text-[14.5px] leading-relaxed text-gray-700 pr-4 md:pr-12">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
