"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

const CtaFooter = () => {
  // Split the heading into parts for staggered animation
  const headingParts = [
    { text: "Let's build your show", delay: 0.2 },
    { text: "—without the overwhelm.", delay: 0.4 }
  ];

  return (
    <section className="relative bg-gradient-to-br from-[#100D1B] via-[#1A1525] to-[#100D1B] py-24 lg:py-32 overflow-hidden border-t border-primary/20">
      {/* Gradient Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#75FB7E] rounded-full opacity-20 blur-[120px] hero-fade-in" 
          style={{ animationDelay: '0.1s' }} 
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#75FB7E] rounded-full opacity-15 blur-[120px] hero-fade-in" 
          style={{ animationDelay: '0.3s' }} 
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-20 text-center">
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
          {headingParts.map((part, index) => (
            <span key={index}>
              <span
                className="hero-word inline-block"
                style={{
                  animationDelay: `${part.delay}s`,
                }}
              >
                {part.text}
              </span>
              {index < headingParts.length - 1 && ' '}
            </span>
          ))}
        </h2>
        <p 
          className="text-xl text-text-secondary max-w-2xl mx-auto mb-4 hero-fade-in-up"
          style={{ animationDelay: '0.6s' }}
        >
          15 minutes to map your plan, timelines, and first month's content calendar.
        </p>
        <p 
          className="text-lg text-text-secondary/80 max-w-xl mx-auto mb-10 hero-fade-in-up"
          style={{ animationDelay: '0.8s' }}
        >
          Email us at <a href="mailto:hello@yourdomain.com" className="text-primary underline hover:text-primary/80 transition-colors">hello@yourdomain.com</a> or DM <a href="#" className="text-primary underline hover:text-primary/80 transition-colors">@yourhandle</a>.
        </p>
        
        <div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center hero-fade-in-up"
          style={{ animationDelay: '1s' }}
        >
          <Link href="#contact" id="contact">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-6 text-lg font-semibold rounded-[12px] shadow-lg hover:shadow-button-hover transition-all duration-300">
              Book a Free Strategy Call
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaFooter;