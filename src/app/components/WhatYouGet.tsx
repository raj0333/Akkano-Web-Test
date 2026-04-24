import { motion } from 'motion/react';
import { LayoutGrid, Route, Target, GraduationCap, Map, MessagesSquare, Eye } from 'lucide-react';

export function WhatYouGet() {
  const benefits = [
    {
      icon: LayoutGrid,
      title: 'The Dynamics Matrix',
      description: 'A visual high-level overview of your relationship, featuring a unique compatibility score based on your shared "cognitive DNA".',
    },
    {
      icon: Route,
      title: 'Complementarity Roadmap',
      description: 'Reveals how your partner’s strengths fill your gaps, turning individual differences into a powerful, unified team.',
    },
    {
      icon: Target,
      title: 'Talent Gap Analysis',
      description: 'A side-by-side comparison of your Top 10 themes to identify why you process information and take action differently.',
    },
    {
      icon: GraduationCap,
      title: 'Common Ground Discovery',
      description: 'Reveals where you and your partner are similar, aligning the way you think, talk, act and relate.',
    },
    {
      icon: Map,
      title: 'Conflict Heatmap',
      description: 'Pinpoints specific "friction zones" (from mismatched life paces to differing future horizons) before they lead to arguments.',
    },
    {
      icon: MessagesSquare,
      title: 'Mindful Conversation Guides',
      description: 'Step-by-step prompts and actionable communication strategies tailored to resolve tension and promote balanced dialogue.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-fit mx-0 px-0 sm:px-0 lg:px-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-semibold text-[#111827] mb-4 tracking-tight">
            What Will You Get
          </h2>
          <p className="text-[15px] md:text-base text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
            This isn't a generic personality summary. It’s a deep-dive analysis of your combined talent themes, meticulously mapped for your unique partnership.
          </p>
          <button className="inline-flex items-center justify-center gap-2 bg-[#0f4c3a] text-white px-8 py-3.5 rounded-xl hover:bg-[#0a3629] transition-colors font-semibold shadow-sm">
            <Eye className="w-5 h-5" />
            View Sample Report
          </button>
        </motion.div>

        <div className="grid lg:grid-cols-[auto_1fr] gap-12 lg:gap-16 items-center">
          <div className="w-full max-w-[580px] xl:max-w-[580px] mx-auto lg:mx-0">
            <img src="/frame.svg" alt="Sample Report Book" className="w-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#FAFAFA] p-8 rounded-3xl hover:shadow-sm transition-all"
              >
                <div className="w-12 h-12 bg-[#0f4c3a] rounded-full flex items-center justify-center mb-6">
                  <benefit.icon className="w-6 h-6 text-[#e8f5e9]" strokeWidth={2} />
                </div>

                <div>
                  <h3 className="text-[20px] font-bold text-gray-900 mb-3 leading-snug">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-700 text-[15px] leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
