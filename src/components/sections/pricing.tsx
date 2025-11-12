"use client";

import React, { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

const pricingPlans = [
  {
    name: "Start-Up Plan",
    pods: 4,
    price: 1200,
    pricePerPod: 300,
    features: [
      "4 pod video edit",
      "4 pod audio edit",
      "4 trailer",
      "4 shorts",
      "YT thumbnail",
      "Audio cover",
      "Distribution on all audio platforms",
      "Distribution on all social media platforms for long and short content",
      "Promotion campaigns"
    ]
  },
  {
    name: "Growth Plan",
    pods: 8,
    price: 2000,
    pricePerPod: 250,
    popular: true,
    features: [
      "8 pod video edit",
      "8 pod audio edit",
      "8 trailer",
      "8 shorts",
      "YT thumbnail",
      "Audio cover",
      "Distribution on all audio platforms",
      "Distribution on all social media platforms for long and short content",
      "Promotion campaigns"
    ]
  },
  {
    name: "Creator Plan",
    pods: 12,
    price: 2400,
    pricePerPod: 200,
    features: [
      "12 pod video edit",
      "12 pod audio edit",
      "12 trailer",
      "12 shorts",
      "YT thumbnail",
      "Audio cover",
      "Distribution on all audio platforms",
      "Distribution on all social media platforms for long and short content",
      "Promotion campaigns"
    ]
  }
];

const Pricing = () => {
  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={ref}
      className="py-32 px-6 bg-background"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
            Pricing Plans
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
            Choose the perfect plan to scale your podcast production
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.name}
              className={cn(
                "relative bg-secondary rounded-[24px] p-8 md:p-10 transition-all duration-300 hover:scale-105 hover:shadow-elevated-card",
                isInView
                  ? "animate-in fade-in slide-in-from-bottom-5 duration-700 ease-out"
                  : "opacity-0"
              )}
              style={{
                animationDelay: isInView ? `${index * 150}ms` : '0ms'
              }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-3xl font-bold text-secondary-foreground mb-3">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-5xl font-bold text-secondary-foreground">
                    ${plan.price}
                  </span>
                </div>
                <p className="text-sm text-secondary-foreground/70">
                  {plan.pods} Pods • ${plan.pricePerPod} per pod
                </p>
              </div>

              <button className="w-full bg-accent text-accent-foreground rounded-[12px] px-6 py-4 font-semibold text-base transition-all duration-300 hover:shadow-button-hover hover:scale-105 mb-8">
                Get Started
              </button>

              <div className="space-y-4">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-icon-accent flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-white" strokeWidth={3} />
                    </div>
                    <span className="text-secondary-foreground text-sm leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-text-secondary text-lg">
            Need a custom plan?{" "}
            <a href="#" className="text-primary hover:text-primary/80 font-semibold underline transition-colors">
              Contact us
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;