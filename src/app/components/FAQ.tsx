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
      answer: 'The CliftonStrengths® 34 assessment is a gold-standard psychometric tool owned by Gallup®. To provide you with the most accurate relationship analysis, we need the raw data from their official reports. Think of it as the "blood test" results that allow us to provide your specific "medical" diagnosis and treatment plan.',
    },
    {
      question: 'How much does it cost?',
      answer: 'The total investment consists of two parts. First, each partner needs a CliftonStrengths® 34 report, which costs approximately $84–$90 per person and is purchased directly from store.gallup.com Second, choose your preferred bundle for the Relationship Synergy Map for $29 (for Basic Report) or for $129 (for Premium) before uploading both of your CliftonStrengths® 34 reports. You can find more details about the differences between these reports in our pricing section.',
    },
    {
      question: 'What if I have already taken the CliftonStrengths® assessment?',
      answer: 'You do not need to take the assessment again. Just upload your existing CliftonStrengths® 34 report, which should be 26 or 27 pages long. Can’t find your report, or only have the shorter reports? Retrieve the CliftonStrengths® 34 report from Gallup.com',
    },
    {
      question: 'What exactly will I see in the 12-page Relationship Synergy Map?',
      answer: 'Your report is a detailed, easy-to-understand guide to your relationship dynamics. Inside, you’ll discover:\n\nWhere you and your partner naturally align\nHow your strengths complement each other\nPotential areas of misunderstanding or conflict\nReal-life scenarios explaining your dynamics\nPractical suggestions for improving communication and connection\n\nThe goal is not just awareness, but actionable insights you can apply immediately in your relationship.',
    },
    {
      question: 'What if our strengths are completely different? Are we incompatible?',
      answer: 'Not at all. In fact, differences are often where the greatest growth and balance come from. This assessment doesn’t label couples as “compatible” or “incompatible.” Instead, it helps you understand how your differences work together and how to turn potential friction into strength. Many strong relationships are built on complementary traits. The key is learning how to recognize and work with them, rather than against them. ',
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
