import Navigation from '@/components/sections/navigation';
import HeroSection from '@/components/sections/hero';
import VideoCarousel from '@/components/sections/video-carousel';
import Work from '@/components/sections/work';
import ResultsCarousel from '@/components/sections/results-carousel';
import BrandingHeader from '@/components/sections/branding-header';
import Testimonials from '@/components/sections/testimonials';
import Pricing from '@/components/sections/pricing';
import Process from '@/components/sections/process';
import CtaFooter from '@/components/sections/cta-footer';
import Footer from '@/components/sections/footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero: "You Host. We Handle the Rest." */}
        <HeroSection />
        
        {/* Video carousel showcase */}
        <VideoCarousel />
        
        {/* Results: What clients can expect */}
        <ResultsCarousel />
        
        {/* Work: Our Video Editing Work */}
        <Work />
        
        {/* Shows: Our Current Shows We're Managing */}
        <BrandingHeader />
        
        {/* Testimonials */}
        <Testimonials />
        
        {/* Plans: What's included */}
        <Pricing />
        
        {/* Process: Simple & transparent */}
        <Process />
        
        {/* CTA: Book a Free Strategy Call */}
        <CtaFooter />
      </main>
      <Footer />
    </>
  );
}