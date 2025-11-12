"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Gradient Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#B5DFB2] rounded-full opacity-50 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#96D4AF] rounded-full opacity-40 blur-[120px]" />
        <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-[#B5DFB2] rounded-full opacity-45 blur-[100px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-20 text-center pt-32 pb-24">
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
          You host. We handle the rest.
        </h1>
        <p className="mt-6 text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
          Fast, reliable podcast editing for busy creators—designed to stay under ~$1,000/mo. 
          We're a team of podcast editors and content specialists who turn raw recordings into 
          polished, audience-ready episodes so you can focus on creating.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="#contact">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg font-semibold rounded-[12px]">
              Get a free sample edit
            </Button>
          </Link>
          <Link href="https://calendly.com" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="border-2 border-foreground text-foreground hover:bg-foreground/5 px-8 py-6 text-lg font-semibold rounded-[12px]">
              Let's talk
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;