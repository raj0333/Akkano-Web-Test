import React from 'react';


export function Testimonials() {
  const baseTestimonials = [
    {
      text: "We thought our patterns were just 'how marriage is after two decades.' This assessment helped us see that a lot of our tension wasn’t personal. It helped us be gentler with each other again. Honestly, it came at the right time.",
      name: "Aisyah & Firdaus",
      years: "Married 22 years",
      image: "/test-1.svg",
    },
    {
      text: "We thought we knew each other well—until the Akkano report showed us why we kept circling the same arguments. It didn’t ‘fix’ us; it gave us a shared language. Decisions that used to take weeks now take hours, without resentment.",
      name: "Amelia & Josh",
      years: "Married 18 years",
      image: "/test-2.svg",
    },
    {
      text: "We didn’t realise how many things we were assuming about each other. This gave us words for conversations we always avoided. Instead of worrying whether we’re too different, we now understand how to manage those differences better.",
      name: "Mei Lin & Jun Wei",
      years: "Married 9 years",
      image: "/test-3.svg",
    },
  ];

  // To perfectly mimic the image which has 5 sliding dots, and we show 3 cards at a time,
  // we need exactly 7 items (7 total items - 3 visible = 4 remaining slides + 1 initial = 5 dots).
  const testimonials = [
    ...baseTestimonials,
    ...baseTestimonials,
    baseTestimonials[0]
  ];

  const [slideIndex, setSlideIndex] = React.useState(0);
  const [visibleCards, setVisibleCards] = React.useState(3);

  // Responsive visible cards count
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    handleResize(); // Set initially
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Max index determines how far we can slide to the right without leaving empty space
  const maxSlideIndex = Math.max(0, testimonials.length - visibleCards);
  const totalDots = maxSlideIndex + 1;

  React.useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % totalDots);
    }, 4000);

    return () => clearInterval(interval);
  }, [totalDots]);

  const nextSlide = () => {
    setSlideIndex((prev) => (prev + 1) % totalDots);
  };

  const prevSlide = () => {
    setSlideIndex((prev) => (prev - 1 + totalDots) % totalDots);
  };

  return (
    <section className="bg-[#e7fbc8] py-16 px-0 mt-13 overflow-hidden font-sans">
      <div className="max-w-fit mx-0 text-center">
        <h2 className="text-3xl md:text-[38px] font-bold text-black mb-14 tracking-tight">
          Trusted By Couples Worldwide
        </h2>

        <div className="relative overflow-hidden px-4 md:px-0">
          {/* Slider Track */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              // Translate by the width of ONE card per slideIndex.
              // Since the track takes up 100% of the container width, 
              // translating by (100% / visibleCards) moves it exactly 1 card width.
              transform: `translateX(calc(-${slideIndex} * (100% / ${visibleCards})))`,
            }}
          >
            {/* Render all cards sequentially, no chunks */}
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-0 mx-3"
              >
                <div className="bg-white rounded-[24px] shadow-[0_4px_24px_rgba(0,0,0,0.04)] p-8 md:p-10 h-full flex items-start gap-4 text-left">
                  {/* Quote Icon */}
                  <img
                    src="/quote.svg"
                    alt="quote"
                    className="w-12 h-12 object-contain flex-shrink-0 opacity-40 mt-1"
                  />

                  {/* Content */}
                  <div className="flex flex-col h-full w-full">
                    <p className="text-[24px] leading-[1.65] text-gray-800 italic mb-8 flex-grow font-normal">
                      "{item.text}"
                    </p>

                    <div className="flex items-center gap-4 mt-auto">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-[46px] h-[46px] rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-bold text-[16px] text-black leading-snug">{item.name}</h4>
                        <p className="text-[16px] text-gray-500 mt-0.5">{item.years}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation - Bottom Centered */}
        <div className="flex justify-center items-center mt-12 gap-6">
          <button
            onClick={prevSlide}
            className="p-1 text-[#86b57d] hover:text-[#184e3f] transition-colors cursor-pointer"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex items-center gap-2.5">
            {Array.from({ length: totalDots }).map((_, index) => (
              <button
                key={index}
                onClick={() => setSlideIndex(index)}
                className={`rounded-full transition-all duration-300 cursor-pointer ${slideIndex === index
                  ? "w-2 h-2 bg-[#0b3c2d] scale-125"
                  : "w-2 h-2 bg-[#86b57d]"
                  }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="p-1 text-[#86b57d] hover:text-[#184e3f] transition-colors cursor-pointer"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}