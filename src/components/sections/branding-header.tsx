"use client";

import { motion } from "framer-motion";

const BrandingHeader = () => {
  const fadeInAnimation = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true },
  };

  return (
    <section className="bg-background py-[120px]">
      <div className="mx-auto max-w-[1440px] px-6 md:px-20">
        <motion.div
          {...fadeInAnimation}
          className="mx-auto max-w-[700px] text-center"
        >
          <h2 className="font-display text-4xl font-bold leading-tight text-foreground md:text-[56px] md:leading-[1.1]">
            Branding, Content &amp; Systems.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-[#94a3b8]">
            What happens when a branding agency who is obsessed with systems and
            frameworks, decides to dive in the world content creation? you get
            the clips agency.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandingHeader;