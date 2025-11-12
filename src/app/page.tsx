import Navigation from '@/components/sections/navigation';
import HeroSection from '@/components/sections/hero';
import VideoCarousel from '@/components/sections/video-carousel';
import PhoneMockup from '@/components/sections/phone-mockup';
import StatsSection from '@/components/sections/stats';
import BrandingHeader from '@/components/sections/branding-header';
import ValueProps from '@/components/sections/value-props';
import SolutionsCards from '@/components/sections/solutions-cards';
import SuccessStoriesHeader from '@/components/sections/success-stories-header';
import Testimonials from '@/components/sections/testimonials';
import Pricing from '@/components/sections/pricing';
import CtaFooter from '@/components/sections/cta-footer';
import Footer from '@/components/sections/footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <VideoCarousel />
        <PhoneMockup />
        <StatsSection />
        <BrandingHeader />
        <ValueProps />
        <SolutionsCards />
        <SuccessStoriesHeader />
        <Testimonials />
        <Pricing />
        <section className="py-32 bg-background text-center">
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground">
            50M+ of organic views
          </h2>
        </section>
        <CtaFooter />
      </main>
      <Footer />
    </>
  );
}