import React from "react";

const steps = [
  {
    id: 1,
    title: "Choose Your Bundle",
    desc: (
      <>
        Select the package that fits your needs (comprehensive or basic
        report).
      </>
    ),
  },
  {
    id: 2,
    title: "Upload Your CliftonStrengths® 34 Reports",
    desc: (
      <>
        Don’t have them yet? Learn why it matters and how to get your
        CliftonStrengths® 34 report in <span className="font-bold underline underline-offset-4 decoration-2 whitespace-nowrap">the section below.</span>
      </>
    ),
  },
  {
    id: 3,
    title: "Receive Your Report",
    desc: (
      <>
        Within 48 hours, we'll email your custom 12-page "Relationship
        Synergy Map" and action plan.
      </>
    ),
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-white py-16 md:py-24 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-[40px] font-semibold text-[#111827] mb-20 tracking-tight">
          How It Works
        </h2>

        {/* Steps Container */}
        <div className="relative flex flex-col md:flex-row items-center md:items-start justify-between gap-12 md:gap-4">
          {/* ✅ Perfect Center Line */}
          <div className="hidden md:block absolute left-[16.5%] right-[16.5%] top-[36px] h-[1.5px] bg-[#0f4c3a] z-0 opacity-80"></div>

          {steps.map((step) => (
            <div
              key={step.id}
              className="relative z-10 flex flex-col items-center text-center flex-1 px-4"
            >
              {/* Circle */}
              <div className="w-[72px] h-[72px] flex items-center justify-center rounded-full bg-[#0f4c3a] text-white text-[28px] font-bold shrink-0 mb-6 shadow-sm">
                {step.id}
              </div>

              {/* Title */}
              <h3 className="text-[17px] font-semibold text-gray-900 mb-3 leading-snug">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 text-[15px] leading-relaxed max-w-[280px]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;