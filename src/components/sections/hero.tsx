"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  // Split the heading into parts for staggered animation
  const headingParts = [
    { text: "You Host.", delay: 0.2 },
    { text: "We Handle", delay: 0.35 },
    { text: "the Rest.", delay: 0.5 }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Gradient Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#75FB7E] rounded-full opacity-15 blur-[120px] hero-fade-in" 
          style={{ animationDelay: '0.1s' }} 
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#75FB7E] rounded-full opacity-10 blur-[120px] hero-fade-in" 
          style={{ animationDelay: '0.3s' }} 
        />
        <div 
          className="absolute top-1/3 right-1/3 w-80 h-80 bg-[#75FB7E] rounded-full opacity-12 blur-[100px] hero-fade-in" 
          style={{ animationDelay: '0.2s' }} 
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-20 text-center pt-32 pb-24">
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
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
              {index < headingParts.length - 1 && (
                <span className="inline-block mx-1 md:mx-2" aria-hidden="true">
                  {' '}
                </span>
              )}
            </span>
          ))}
        </h1>
        <p 
          className="mt-8 text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed hero-fade-in-up"
          style={{ animationDelay: '0.75s' }}
        >
          Strategy, recording support, world-class editing, distribution, and optimization—done for you so your show grows while you focus on hosting.
        </p>
        <p 
          className="mt-6 text-lg text-text-secondary/80 max-w-2xl mx-auto hero-fade-in-up"
          style={{ animationDelay: '0.95s' }}
        >
          For founders, coaches, creators, and teams who want consistent, high-quality content without the editing grind.
        </p>
        
        <div 
          className="mt-12 flex justify-center items-center hero-fade-in-up"
          style={{ animationDelay: '1.15s' }}
        >
          <Link href="#contact">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-6 text-lg font-semibold rounded-[12px] shadow-lg hover:shadow-xl transition-all duration-300">
              Book a Free Strategy Call
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;