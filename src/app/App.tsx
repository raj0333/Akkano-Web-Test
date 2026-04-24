import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { AboutSection } from './components/AboutSection';
import { GetStartedSection } from './components/GetStartedSection';
import { Testimonials } from './components/Testimonials';
import { WhatYouGet } from './components/WhatYouGet';
import { Pricing } from './components/Pricing';
import HowItWorks from './components/HowItWorks';
import { ReportUploadSection } from './components/ReportUploadSection';
import { FAQ } from './components/FAQ';
import { ContactForm } from './components/ContactForm';
import { WhyDoINeed } from './components/WhyDoINeed';
import { Footer } from './components/Footer';
import { ChatWidget } from './components/ChatWidget';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <AboutSection />
        <GetStartedSection />
        <Testimonials />
        <WhatYouGet />
        <Pricing />
        <HowItWorks />
        <ReportUploadSection />
        <WhyDoINeed />
        <FAQ />
        {/* <ContactForm /> */}
        
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}
