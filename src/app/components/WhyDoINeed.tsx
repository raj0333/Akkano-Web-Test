import { motion } from 'motion/react';
import { ArrowRight, User, Shield } from 'lucide-react';

export function WhyDoINeed() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[32px] md:text-[40px] font-semibold text-[#111827] mb-8 leading-tight tracking-tight">
              Why Do I Need <br className="hidden md:block" />
              CliftonStrengths® 34?
            </h2>

            <p className="text-[15px] text-gray-700 leading-relaxed mb-10">
              Understanding 'Us' begins with understanding 'You.' We utilize the
              CliftonStrengths® 34 assessment as our foundation because it
              provides a precise map of your unique talents. While this
              assessment is a prerequisite for our compatibility assessment, it is
              also a powerful gift to yourself. <strong className="font-bold text-gray-900">You aren't just unlocking a door to
                our platform — you are gaining a lifelong manual for your own
                success.</strong>
            </p>

            <button className="inline-flex items-center gap-2 bg-[#0f4c3a] text-white px-8 py-3.5 rounded-xl hover:bg-[#0a3629] transition-colors font-semibold shadow-sm">
              Take CliftonStrengths® 34
              <ArrowRight className="w-5 h-5 ml-1" />
            </button>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            {/* Card 1 */}
            <div className="bg-[#e8f8d6] p-8 rounded-3xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#0f4c3a] rounded-full flex items-center justify-center shrink-0">
                  <User className="w-6 h-6 text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-[20px] font-bold text-gray-900">
                  For Personal Growth
                </h3>
              </div>
              <p className="text-gray-800 text-[15px] leading-relaxed">
                You receive a personalized 26-27 page report from Gallup that explains how
                you think, feel, and behave. It's the same tool used by Fortune 500 CEOs to
                optimize their performance.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white border-[1.5px] border-[#0f4c3a] p-8 rounded-3xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#0f4c3a] rounded-full flex items-center justify-center shrink-0">
                  <Shield className="w-6 h-6 text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-[20px] font-bold text-gray-900">
                  Note
                </h3>
              </div>
              <p className="text-gray-700 text-[15px] leading-relaxed">
                The CliftonStrengths® 34 assessment is a premium, third-party tool hosted by
                Gallup. We chose this integration because we refuse to compromise on the
                quality of the data that fuels your relationship insights.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
