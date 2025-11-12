"use client";

import { Upload, Clock, Rocket } from "lucide-react";

const steps = [
  {
    icon: Upload,
    number: "01",
    title: "Upload your files",
    description: "Upload your raw recordings to your client folder or send them to your dedicated account manager"
  },
  {
    icon: Clock,
    number: "02",
    title: "We edit in ~24 hours",
    description: "Our team works fast to deliver your first draft within approximately 24 hours"
  },
  {
    icon: Rocket,
    number: "03",
    title: "Publish ready",
    description: "Receive your polished, audience-ready episode ready to publish across all platforms"
  }
];

const Process = () => {
  return (
    <section className="bg-background py-20 lg:py-32">
      <div className="container mx-auto px-6 md:px-20">
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-center mb-6">
          How it works
        </h2>
        <p className="text-text-secondary text-lg text-center max-w-2xl mx-auto mb-16">
          A simple 3-step process to get your podcast edited and published
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index}
                className="relative bg-card rounded-[24px] p-8 hover:bg-card-hover transition-all duration-300 shadow-card"
              >
                <div className="absolute top-8 right-8 text-6xl font-bold text-primary/10">
                  {step.number}
                </div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
