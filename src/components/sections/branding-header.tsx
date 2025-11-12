"use client";

import Image from 'next/image';

const shows = [
  {
    name: "Web3 Insights Podcast",
    host: "Aaron Huyhurst",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a93d8c77-2901-4b64-8e54-ce6f6469eefe-theclips-agency/assets/images/672b70289a5a99badc0f9951_Dr_20Dunia_20-_20Tourist_-1.gif"
  },
  {
    name: "Drug Diaries Podcast",
    host: "Kaushik Trivedi",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a93d8c77-2901-4b64-8e54-ce6f6469eefe-theclips-agency/assets/images/672b70140a505fc39767c232_Chris_20V_20-_20What_20ar-2.gif"
  },
  {
    name: "B-Real Estate Podcast",
    host: "Serge Cowan",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a93d8c77-2901-4b64-8e54-ce6f6469eefe-theclips-agency/assets/images/672b7867aba77299709fc7fa_Svenja-3.gif"
  },
  {
    name: "CareersTalks with Tamer",
    host: "Tamer Haddadin",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a93d8c77-2901-4b64-8e54-ce6f6469eefe-theclips-agency/assets/images/672b6fe0639f18a8d6073fb2_Ajmal_20Perfumes_20-Proce-4.gif"
  },
  {
    name: "The Sahil Show",
    host: "Sahil Kasana",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a93d8c77-2901-4b64-8e54-ce6f6469eefe-theclips-agency/assets/images/672b70a8f013b880e870e41f_Dr_20Vivien_20-_20History-5.gif"
  },
  {
    name: "Business Blumin Podcast",
    host: "Daniel Blumin",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a93d8c77-2901-4b64-8e54-ce6f6469eefe-theclips-agency/assets/images/672b7149cb7793071bbde701_Mahmood_20Bartawi_20-_20H-6.gif"
  },
  {
    name: "InsideAMind Podcast",
    host: "Tom McCormick",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a93d8c77-2901-4b64-8e54-ce6f6469eefe-theclips-agency/assets/images/672b781fb59f6f8d368492ac_Rafif-7.gif"
  },
  {
    name: "Directionally Correct",
    host: "Cole Napper",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a93d8c77-2901-4b64-8e54-ce6f6469eefe-theclips-agency/assets/images/672b6ff7723d51118aedc820_Carine_20Boury_20-_20_20W-8.gif"
  }
];

const BrandingHeader = () => {
  return (
    <section className="bg-[#0A0A14] py-20 lg:py-32">
      <div className="container mx-auto px-6 md:px-20">
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-6">
          Shows we power
        </h2>
        <p className="text-text-secondary text-lg text-center max-w-2xl mx-auto mb-16">
          Trusted by podcasters and content creators worldwide
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {shows.map((show, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-full aspect-[9/16] rounded-[16px] overflow-hidden mb-4 bg-card relative group-hover:scale-105 transition-transform duration-300">
                <Image
                  src={show.image}
                  alt={`${show.name} cover art`}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-white font-semibold text-sm mb-1">
                {show.name}
              </h3>
              <p className="text-muted text-xs">
                {show.host}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandingHeader;