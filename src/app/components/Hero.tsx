import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';


export function Hero() {
  return (
    <section id="home" className="bg-white py-12 md:py-12">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          {/* <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-[64px] font-semibold text-[#111827] leading-[1.1] mb-6 tracking-tight">
              <span className="font-medium">From Argument</span> <br className="hidden md:block" />
              to Understanding.
            </h1>
            <p className="text-lg md:text-[1.125rem] text-gray-700 mb-10 leading-relaxed">
              Identify potential sources of conflict and learn how to overcome them. Map your common ground, align your values, and find fresh ways to grow together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#0f4c3a] text-white px-8 py-3.5 rounded-xl hover:bg-[#0a3629] transition-colors font-semibold shadow-sm">
                Get Your Synergy Map
              </button>
              <button className="border-2 border-[#0f4c3a] text-[#0f4c3a] bg-white px-8 py-3.5 rounded-xl hover:bg-gray-50 transition-colors font-bold shadow-sm">
                Learn More
              </button>
            </div>
          </motion.div> */}

          <div className="relative overflow-hidden">
            {/* Background Shape */}
            <img
              src="/shape.png" // apni image path
              alt="bg-shape"
              className="
      absolute 
      top-0 left-0 
      w-[600px] 
      opacity-20 
      -z-10
      pointer-events-none
    "
            />

            <motion.div
              // initial={{ opacity: 0, x: -50 }}
              // animate={{ opacity: 1, x: 0 }}
              // transition={{ duration: 0.6 }}
              className="max-w-xl"
            >
              <h1 className="text-4xl md:text-5xl lg:text-[64px] font-semibold text-[#111827] leading-[1.1] mb-6 tracking-tight">
                <span className="font-medium">From Argument</span>{" "}
                <br className="hidden md:block" />
                to Understanding.
              </h1>

              <p className="text-lg md:text-[1.125rem] text-gray-700 mb-10 leading-relaxed">
                Identify potential sources of conflict and learn how to overcome them.
                Map your common ground, align your values, and find fresh ways to grow together.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#0f4c3a] text-white px-8 py-3.5 rounded-xl hover:bg-[#0a3629] transition-colors font-semibold shadow-sm">
                  Get Your Synergy Map
                </button>

                <button className="border-2 border-[#0f4c3a] text-[#0f4c3a] bg-white px-8 py-3.5 rounded-xl hover:bg-gray-50 transition-colors font-bold shadow-sm">
                  Learn More
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div
            // initial={{ opacity: 0, x: 50 }}
            // animate={{ opacity: 1, x: 0 }}
            // transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-end items-end"
          >
            <img src="/topright.png" alt="Happy couple planning together" className=" drop-shadow-xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
