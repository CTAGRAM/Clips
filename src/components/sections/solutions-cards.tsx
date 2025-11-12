import React from 'react';
import { Zap, Waves, Mic } from 'lucide-react';
import type { LucideProps } from 'lucide-react';

type Solution = {
  icon: React.ComponentType<LucideProps>;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
};

const solutionsData: Solution[] = [
  {
    icon: Zap,
    title: "Need Editing?",
    description: "A world class editing team at your disposal. Turn your raw videos into visual masterpieces.",
    buttonText: "Explore Credits™",
    buttonLink: "#",
  },
  {
    icon: Waves,
    title: "Need A-Z Support?",
    description: "A complete done-for-you solution helping you create 15+ high-quality content in 2 hours of your time only.",
    buttonText: "Explore GhostHost™",
    buttonLink: "#",
  },
  {
    icon: Mic,
    title: "Have a Podcast?",
    description: "Outsource your podcast's signature editing and distribution",
    buttonText: "Explore PowerPod™",
    buttonLink: "#",
  },
];

const SolutionCard: React.FC<Solution> = ({ icon: Icon, title, description, buttonText, buttonLink }) => (
  <div className="bg-secondary rounded-[24px] p-12 flex flex-col">
    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
      <Icon className="w-8 h-8 text-primary-foreground" strokeWidth={1.5} />
    </div>
    <h3 className="text-black text-[40px] font-bold font-display leading-[1.1] mt-8">
      {title}
    </h3>
    <p className="text-black text-opacity-80 text-lg leading-[1.5] mt-4">
      {description}
    </p>
    <a
      href={buttonLink}
      className="inline-block bg-accent text-accent-foreground font-semibold py-3 px-8 rounded-xl text-base text-center w-fit mt-[100px] transition-all hover:shadow-button-hover"
    >
      {buttonText}
    </a>
  </div>
);

const SolutionsCards = () => {
  return (
    <section id="solutions" className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto">
        <h2 className="text-center font-display text-5xl font-bold text-foreground mb-16 max-w-4xl mx-auto">
          No-brainer solutions for <br /> Brain-wrecking problems
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {solutionsData.map((solution, index) => (
            <SolutionCard key={index} {...solution} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsCards;