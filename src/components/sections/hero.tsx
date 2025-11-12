"use client";

import { motion } from 'framer-motion';
import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative bg-background pt-[160px] pb-[120px] overflow-hidden">
      {/* Gradient Orbs */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div
          className="absolute -top-40 -left-80 w-[500px] h-[500px] bg-[var(--color-gradient-orb-1)] rounded-full opacity-20 blur-[120px] animate-pulse"
          style={{ animationDuration: '8s' }}
        />
        <div
          className="absolute top-12 -right-60 w-[600px] h-[600px] bg-[var(--color-gradient-orb-2)] rounded-full opacity-15 blur-[120px] animate-pulse"
          style={{ animationDuration: '10s', animationDelay: '2s' }}
        />
        <div
          className="absolute -bottom-60 left-[10%] w-[400px] h-[400px] bg-[var(--color-gradient-orb-2)] rounded-full opacity-15 blur-[120px] animate-pulse"
          style={{ animationDuration: '9s', animationDelay: '1s' }}
        />
        <div
          className="absolute -bottom-40 right-[5%] w-[500px] h-[500px] bg-[var(--color-gradient-orb-1)] rounded-full opacity-20 blur-[120px] animate-pulse"
          style={{ animationDuration: '12s', animationDelay: '3s' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-20">
        <div className="flex flex-col items-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
            className="font-display text-[40px] md:text-[56px] lg:text-[72px] font-bold leading-[1.1] tracking-[-0.02em] text-foreground [text-shadow:var(--shadow-text-hero)]"
          >
            Supercharge your brand with viral signature clips
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
            className="mt-[60px] max-w-[616px] font-body text-[20px] font-normal leading-[1.6] text-[color:var(--color-text-secondary)]"
          >
            If you're a busy creator with no time to edit or post consistently on social media but still recognize the need to grow your brand faster, then this is for you.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;