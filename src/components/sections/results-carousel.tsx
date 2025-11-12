"use client";

import Image from 'next/image';
import { CountingNumber } from '@/components/ui/counting-number';

const resultsData = [
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a93d8c77-2901-4b64-8e54-ce6f6469eefe-theclips-agency/assets/icons/6720577b1055a4940102a304_dr_medhat-3.jpg",
    fromViews: 350,
    fromViewsUnit: "K",
    toViews: 1,
    viewsUnit: "M+",
    increasePercent: 185.7,
    comments: 100,
    shares: 50,
    likes: 267,
    commentsUnit: "K+",
    sharesUnit: "K+",
    likesUnit: "K+",
  },
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a93d8c77-2901-4b64-8e54-ce6f6469eefe-theclips-agency/assets/icons/672b6de56b76e3b2d676bec8_svenja-4.jpg",
    fromViews: 2.5,
    fromViewsUnit: "M",
    toViews: 10,
    viewsUnit: "M+",
    increasePercent: 300,
    comments: 150,
    shares: 121,
    likes: 1500,
    commentsUnit: "K+",
    sharesUnit: "K+",
    likesUnit: "K+",
  },
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a93d8c77-2901-4b64-8e54-ce6f6469eefe-theclips-agency/assets/icons/6720577b1055a4940102a304_dr_medhat-3.jpg",
    fromViews: 0,
    toViews: 3,
    viewsUnit: "M",
    increasePercent: 0,
    comments: 45,
    shares: 70,
    likes: 167,
    commentsUnit: "K+",
    sharesUnit: "K+",
    likesUnit: "K+",
    note: "Not trending",
    noteTo: "Trending in Youtube in less than 12 Months",
  },
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a93d8c77-2901-4b64-8e54-ce6f6469eefe-theclips-agency/assets/icons/672b6de56b76e3b2d676bec8_svenja-4.jpg",
    fromViews: 0,
    toViews: 100,
    viewsUnit: "K+",
    increasePercent: 0,
    revenue: 100,
    revenueUnit: "K+",
    note: "Not getting any brand deal",
    noteTo: "Working with top brands in the industry",
    brands: "Worked with industry leading brands",
  },
];

type ResultCard = {
  image: string;
  fromViews: number;
  fromViewsUnit?: string;
  toViews: number;
  viewsUnit: string;
  increasePercent?: number;
  comments?: number;
  shares?: number;
  likes?: number;
  commentsUnit?: string;
  sharesUnit?: string;
  likesUnit?: string;
  note?: string;
  noteTo?: string;
  revenue?: number;
  revenueUnit?: string;
  brands?: string;
};

const ResultCardComponent = ({ result, index }: { result: ResultCard; index: number }) => {
  const baseDelay = index * 200;
  
  return (
    <div className="flex flex-col bg-secondary rounded-[24px] p-6 w-[450px] h-[600px] shadow-card hover:shadow-elevated-card transition-all duration-300 flex-shrink-0 mx-4">
      {/* Client Image */}
      <div className="relative w-full h-[240px] rounded-[16px] overflow-hidden mb-6 flex-shrink-0">
        <Image
          src={result.image}
          alt="Client success story"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
      </div>

      {/* Main Achievement */}
      <div className="mb-6 flex-grow flex flex-col justify-start">
        {result.note ? (
          <div className="flex-1 flex flex-col">
            <p className="text-text-secondary text-sm mb-2 font-medium">
              From {result.note}
            </p>
            <p className="text-foreground text-2xl font-bold mb-3 leading-tight">
              To {result.noteTo}
            </p>
            {result.toViews > 0 && (
              <p className="text-foreground text-lg font-semibold">
                <CountingNumber value={result.toViews} suffix={`${result.viewsUnit} views across all social media`} duration={2000} delay={baseDelay} decimals={result.toViews % 1 !== 0 ? 1 : 0} />
              </p>
            )}
          </div>
        ) : (
          <div className="flex-1 flex flex-col">
            <p className="text-foreground text-2xl font-bold mb-3 leading-tight">
              From <CountingNumber value={result.fromViews} suffix={result.fromViewsUnit || result.viewsUnit} duration={1500} delay={baseDelay} decimals={result.fromViews % 1 !== 0 ? 1 : 0} /> views to <CountingNumber value={result.toViews} suffix={`${result.viewsUnit}`} duration={2000} delay={baseDelay + 300} decimals={result.toViews % 1 !== 0 ? 1 : 0} /> views across all social media
            </p>
            {result.increasePercent > 0 && (
              <p className="text-primary text-lg font-bold mt-2">
                <CountingNumber value={result.increasePercent} suffix="% increase in Views" duration={2000} delay={baseDelay + 500} decimals={1} />
              </p>
            )}
          </div>
        )}
      </div>

      {/* Metrics */}
      <div className="pt-4 border-t border-border flex-shrink-0">
        {result.revenue ? (
          <div className="space-y-2">
            <p className="text-foreground font-bold text-xl">
              <CountingNumber value={result.revenue} suffix={` ${result.revenueUnit} Dollars in revenue`} duration={2000} delay={baseDelay + 600} />
            </p>
            <p className="text-text-secondary text-sm">
              {result.brands}
            </p>
          </div>
        ) : (
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-base">
            <span className="text-foreground font-bold">
              <CountingNumber value={result.comments} suffix={result.commentsUnit} duration={1500} delay={baseDelay + 600} /> Comments
            </span>
            <span className="text-text-secondary">|</span>
            <span className="text-foreground font-bold">
              <CountingNumber value={result.shares} suffix={result.sharesUnit} duration={1500} delay={baseDelay + 700} /> Shares
            </span>
            <span className="text-text-secondary">|</span>
            <span className="text-foreground font-bold">
              <CountingNumber value={result.likes} suffix={result.likesUnit} duration={1500} delay={baseDelay + 800} /> Likes
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

const ResultsCarousel = () => {
  const animationDuration = "80s";
  const extendedResults = [...resultsData, ...resultsData];

  return (
    <>
      <style>
        {`
          @keyframes scroll-left {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          .animate-scroll-left {
            animation: scroll-left ${animationDuration} linear infinite;
          }
        `}
      </style>
      <section className="bg-background py-20 lg:py-32">
        <div className="container mx-auto px-6 md:px-20 text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Results
          </h2>
          <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto mb-8">
            What clients can expect
          </p>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-12">
            We focus on outcomes, not just files. Typical wins:
          </p>
          
          {/* Typical Wins Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
            <div className="bg-secondary rounded-[24px] p-6 text-center">
              <h3 className="text-foreground font-bold text-lg mb-2">Consistency</h3>
              <p className="text-text-secondary text-sm">Weekly publishing across your primary platforms</p>
            </div>
            <div className="bg-secondary rounded-[24px] p-6 text-center">
              <h3 className="text-foreground font-bold text-lg mb-2">Discoverability</h3>
              <p className="text-text-secondary text-sm">Stronger hooks, retention, and CTR due to thumbnails/titles</p>
            </div>
            <div className="bg-secondary rounded-[24px] p-6 text-center">
              <h3 className="text-foreground font-bold text-lg mb-2">Pipeline</h3>
              <p className="text-text-secondary text-sm">More DMs, calendar bookings, and inbound leads from content</p>
            </div>
            <div className="bg-secondary rounded-[24px] p-6 text-center">
              <h3 className="text-foreground font-bold text-lg mb-2">Time Saved</h3>
              <p className="text-text-secondary text-sm">You spend ~60–90 minutes per recording; we do the rest</p>
            </div>
          </div>
          
          <p className="text-lg font-bold text-foreground mb-4">
            The results speak for themselves
          </p>
        </div>

        <div className="relative w-full overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
          
          <div className="group">
            <div className="flex items-stretch w-max animate-scroll-left group-hover:[animation-play-state:paused]">
              {extendedResults.map((result, index) => (
                <ResultCardComponent key={index} result={result} index={index % resultsData.length} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResultsCarousel;

