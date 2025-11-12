import Navigation from '@/components/sections/navigation';
import HeroSection from '@/components/sections/hero';
import VideoCarousel from '@/components/sections/video-carousel';
import PhoneMockup from '@/components/sections/phone-mockup';
import StatsSection from '@/components/sections/stats';
import SolutionsCards from '@/components/sections/solutions-cards';
import BrandingHeader from '@/components/sections/branding-header';
import Testimonials from '@/components/sections/testimonials';
import ValueProps from '@/components/sections/value-props';
import Process from '@/components/sections/process';
import CtaFooter from '@/components/sections/cta-footer';
import Footer from '@/components/sections/footer';
import { CountingNumber } from '@/components/ui/counting-number';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero: "You host, we handle the rest" */}
        <HeroSection />
        
        {/* Video carousel showcase */}
        <VideoCarousel />
        <PhoneMockup />
        
        {/* Work: Our video editing services */}
        <SolutionsCards />
        
        {/* Results: Fast, simple, affordable */}
        <StatsSection />
        
        {/* Shows: Current shows we're managing */}
        <BrandingHeader />
        
        {/* Testimonials */}
        <Testimonials />
        
        {/* Plans: What's included */}
        <ValueProps />
        
        {/* Process: 3-step workflow */}
        <Process />
        
        {/* Organic views highlight */}
        <section className="py-32 bg-background text-center">
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground">
            <CountingNumber value={50} suffix="M+" duration={2000} />+ of organic views
          </h2>
        </section>
        
        {/* CTA: Book a call */}
        <CtaFooter />
      </main>
      <Footer />
    </>
  );
}