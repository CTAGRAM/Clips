"use client";

import Image from 'next/image';
import Link from 'next/link';

const shows = [
  {
    name: "Show A",
    category: "Business",
    description: "Weekly interviews; Shorts get 15–45s hooks; grew from 0 → 10k monthly views in 90 days.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a93d8c77-2901-4b64-8e54-ce6f6469eefe-theclips-agency/assets/images/672b70289a5a99badc0f9951_Dr_20Dunia_20-_20Tourist_-1.gif"
  },
  {
    name: "Show B",
    category: "Health",
    description: "Clinic-led podcast; clips drive local SEO + booking inquiries.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a93d8c77-2901-4b64-8e54-ce6f6469eefe-theclips-agency/assets/images/672b70140a505fc39767c232_Chris_20V_20-_20What_20ar-2.gif"
  },
  {
    name: "Show C",
    category: "Creator",
    description: "Repurposed livestreams; 3 clips per episode; consistent LinkedIn reach.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a93d8c77-2901-4b64-8e54-ce6f6469eefe-theclips-agency/assets/images/672b7867aba77299709fc7fa_Svenja-3.gif"
  }
];

const BrandingHeader = () => {
  return (
    <section className="bg-background py-20 lg:py-32">
      <div className="container mx-auto px-6 md:px-20">
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-center mb-6">
          Our Current Shows We're Managing
        </h2>
        <p className="text-text-secondary text-lg text-center max-w-2xl mx-auto mb-16">
          Feature a 2–3 line snapshot for each show (logo/cover + 1 hero clip)
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {shows.map((show, index) => (
            <div 
              key={index}
              className="flex flex-col bg-secondary rounded-[24px] p-6 hover:shadow-elevated-card transition-all duration-300"
            >
              <div className="w-full aspect-video rounded-[16px] overflow-hidden mb-4 bg-card relative shadow-card">
                <Image
                  src={show.image}
                  alt={`${show.name} cover art`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mb-2">
                <h3 className="text-foreground font-bold text-xl mb-1">
                  {show.name}
                </h3>
                <p className="text-primary font-semibold text-sm mb-3">
                  Category: {show.category}
                </p>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed">
                {show.description}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/portfolio" className="text-primary hover:text-primary/80 font-semibold underline transition-colors">
            Link to a full portfolio page for more samples/case studies
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandingHeader;