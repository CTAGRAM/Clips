"use client"

import Image from 'next/image';
import Link from 'next/link';
import { CountingNumber } from '@/components/ui/counting-number';

const testimonialsData = [
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a93d8c77-2901-4b64-8e54-ce6f6469eefe-theclips-agency/assets/icons/6720577b1055a4940102a304_dr_medhat-3.jpg",
    name: "Dr Medhat",
    title: "Pediatrician",
    quote: "I love working with this team. I feel so comfortable and everyone is amazing",
    initialFollowers: "0",
    stats: [
      { value: 66, suffix: "K", label: "Followers Gained" },
      { value: 13, suffix: "M+", label: "View Count" },
    ],
  },
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a93d8c77-2901-4b64-8e54-ce6f6469eefe-theclips-agency/assets/icons/672b6de56b76e3b2d676bec8_svenja-4.jpg",
    name: "svenja maltzahn",
    title: "Entrepreneur",
    quote: "I'm getting so many requests I think I should stop posting videos",
    initialFollowers: "0",
    stats: [
      { value: 4.6, suffix: "K+", label: "Followers Gained", decimals: 1 },
      { value: 350, suffix: "K", label: "View Count" },
      { value: 3, suffix: "K+", label: "Leads Generated" },
    ],
  },
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a93d8c77-2901-4b64-8e54-ce6f6469eefe-theclips-agency/assets/icons/6720577b1055a4940102a304_dr_medhat-3.jpg",
    name: "Business Coach",
    title: "Coach",
    quote: "What I do with you in 1 hour used to take me a full day on a TV set. I gained so much insights from our sessions",
    initialFollowers: "1.2K",
    stats: [
      { value: 25, suffix: "K+", label: "Followers Gained" },
      { value: 4.2, suffix: "M+", label: "View count", decimals: 1 },
    ],
  },
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a93d8c77-2901-4b64-8e54-ce6f6469eefe-theclips-agency/assets/icons/672b6de56b76e3b2d676bec8_svenja-4.jpg",
    name: "Agency Owner",
    title: "Founder",
    quote: "I'm like a puppet between your hands. It takes a village to do what you do. Really you have an amazing team",
    initialFollowers: "500",
    stats: [
      { value: 15, suffix: "K+", label: "Followers Gained" },
      { value: 2, suffix: "M+", label: "View Count" },
      { value: 1.5, suffix: "K+", label: "Leads Generated", decimals: 1 },
    ],
  },
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a93d8c77-2901-4b64-8e54-ce6f6469eefe-theclips-agency/assets/icons/6720577b1055a4940102a304_dr_medhat-3.jpg",
    name: "Startup Founder",
    title: "CEO",
    quote: "This is an amazing company. They helped me with the content ideas and the results are amazing",
    initialFollowers: "0",
    stats: [
      { value: 78, suffix: "K", label: "Followers Gained" },
      { value: 15, suffix: "M+", label: "View Count" },
    ],
  },
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a93d8c77-2901-4b64-8e54-ce6f6469eefe-theclips-agency/assets/icons/672b6de56b76e3b2d676bec8_svenja-4.jpg",
    name: "Brand Strategist",
    title: "Strategist",
    quote: "You understood what I wanted to achieve, and with your team I was able to go online and grow my brand",
    initialFollowers: "3.5K",
    stats: [
      { value: 50, suffix: "K+", label: "Followers Gained" },
      { value: 7, suffix: "M+", label: "View Count" },
      { value: 5, suffix: "K+", label: "Leads Generated" },
    ],
  },
];

const StatIcon = () => (
  <div className="w-4 h-4 rounded-full bg-primary flex items-center justify-center shrink-0">
    <span className="text-primary-foreground font-bold text-xs">+</span>
  </div>
);

type Testimonial = typeof testimonialsData[0];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="flex flex-col bg-secondary rounded-[24px] p-8 w-[400px] h-full">
    <div className="flex items-center space-x-4">
      <Image
        src={testimonial.image}
        alt={`Profile picture of ${testimonial.name}`}
        width={56}
        height={56}
        className="rounded-full object-cover w-14 h-14"
      />
      <div>
        <p className="text-black text-lg font-bold capitalize">{testimonial.name}</p>
        <p className="text-zinc-600 text-sm capitalize">{testimonial.title}</p>
      </div>
    </div>
    <p className="text-black text-xl font-semibold leading-7 my-6 flex-grow">
      {testimonial.quote}
    </p>
    <div>
      <p className="text-zinc-600 text-xs mb-3">
        Started with {testimonial.initialFollowers} Followers
      </p>
      <div className="flex items-start space-x-6">
        {testimonial.stats.map((stat, i) => (
          <div key={i}>
            <div className="flex items-center space-x-1.5">
              <StatIcon />
              <p className="text-black font-bold text-lg">
                <CountingNumber 
                  value={stat.value} 
                  suffix={stat.suffix} 
                  decimals={stat.decimals || 0}
                  duration={2000}
                  delay={i * 200}
                />
              </p>
            </div>
            <p className="text-zinc-500 text-xs uppercase tracking-wider mt-1 pl-[22px]">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const extendedTestimonials = [...testimonialsData, ...testimonialsData];

  return (
    <section className="bg-background font-body py-20 lg:py-32">
       <div className="container mx-auto px-6 md:px-20 text-center">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">Success Stories</h2>
        <p className="mt-4 max-w-xl mx-auto text-base text-text-secondary">
          Clients don't just love us because we save them time. It's because we also get them results.
        </p>
        <Link href="#" className="mt-8 inline-block bg-accent text-accent-foreground px-6 py-3 rounded-full font-semibold text-sm transition-transform hover:scale-105">
          View All Client Success
        </Link>
      </div>
      
      <div className="mt-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_5%,white_95%,transparent)]">
        <div className="flex gap-8 will-change-transform [animation:marquee_80s_linear_infinite]">
          {extendedTestimonials.map((testimonial, index) => (
            <div key={index} className="flex-shrink-0">
               <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
