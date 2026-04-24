export function Footer() {
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-gray-100">
      <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Section: Logo & Tagline */}
        <div className="mb-12">
          <div className="flex items-center gap-2.5 mb-6">
            {/* Custom SVG Logo matching the AKKANO logo */}
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 20.5C7 20.5 4 16.5 4 11.5C4 7.5 6.5 4.5 9.5 4.5C11 4.5 12 6 12 6C12 6 13 4.5 14.5 4.5C17.5 4.5 20 7.5 20 11.5C20 16.5 17 20.5 12 20.5Z" stroke="#0f4c3a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 20.5C9.5 15.5 9.5 10 12 6C14.5 10 14.5 15.5 12 20.5Z" stroke="#0f4c3a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="font-extrabold text-[17px] text-[#111827] tracking-wider uppercase">AKKANO</span>
          </div>
          <p className="text-[#4b5563] text-[15.5px]">
            Building stronger bonds through the science of strengths.
          </p>
        </div>

        {/* Disclaimer Section */}
        <div className="text-center max-w-[80%] mx-auto mb-16">
          <p className="text-[12.5px] text-[#4b5563] leading-relaxed mb-0.5">
            Disclaimer:
          </p>
          <p className="text-[12.5px] text-[#4b5563] leading-relaxed mb-0.5">
            CliftonStrengths, CliftonStrengths Theme Names and Theme descriptions are trademarks of Gallup, Inc. This portal and any documents we provide are purely for your personal use as part of our coaching and training programs. They are not to be shared, reproduced, or in any other way made publicly available.
          </p>
          <p className="text-[12.5px] text-[#4b5563] leading-relaxed">
            For full details visit <a href="#" className="text-[#0f4c3a] hover:underline font-medium underline">Gallup | Analytics and Tools to Transform Your Workspace - Product Terms of Use.</a>
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-[14px] text-gray-600">
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#0f4c3a] transition-colors font-medium">Terms of Service</a>
            <a href="#" className="hover:text-[#0f4c3a] transition-colors font-medium">Privacy Policy</a>
          </div>
          <p>
            © 2026 Hong Bao Media (Holdings) Pte Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
