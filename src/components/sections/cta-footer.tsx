"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

const CtaFooter = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#2E6F40] via-[#3A8B5C] to-[#2E6F40] py-24 lg:py-32 overflow-hidden">
      {/* Gradient Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#3A8B5C] rounded-full opacity-40 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#2E6F40] rounded-full opacity-30 blur-[120px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-20 text-center">
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Have a project in mind?
        </h2>
        <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
          Schedule a free 30-minute strategy call and let's chat about how we can help elevate your podcast
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="https://calendly.com" target="_blank" rel="noopener noreferrer">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-6 text-lg font-semibold rounded-[12px] shadow-lg hover:shadow-xl transition-all duration-300">
              Book a Call
            </Button>
          </Link>
          <Link href="#contact">
            <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-10 py-6 text-lg font-semibold rounded-[12px]">
              Get a free sample edit
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaFooter;