"use client";

import { motion } from "framer-motion";
import { CountingNumber } from "@/components/ui/counting-number";

// Animation variants for the container to stagger children
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Animation variants for each stat item and divider
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const StatCard = ({ value, label, delay }: { value: string; label: string; delay: number }) => {
  // Parse the value to extract number and suffix
  const parseValue = (val: string) => {
    if (val === "10X") return { number: 10, suffix: "X" };
    if (val.includes("Hr")) return { number: 500, suffix: "Hr+" };
    if (val.includes("M")) return { number: 50, suffix: "M+" };
    return { number: 0, suffix: "" };
  };

  const { number, suffix } = parseValue(value);

  return (
    <motion.div
      variants={itemVariants}
      className="flex flex-col items-center text-center md:px-10"
    >
      <h2 className="font-sans text-[56px] font-bold leading-none tracking-[-0.02em] text-white">
        <CountingNumber value={number} suffix={suffix} duration={2000} delay={delay} />
      </h2>
      <p className="mt-2 text-lg text-slate-400">{label}</p>
    </motion.div>
  );
};

const Divider = () => (
  <motion.div
    variants={itemVariants}
    className="hidden h-16 w-px bg-white/10 md:block"
  />
);

const StatsSection = () => {
  return (
    <div className="bg-background pt-[100px] pb-12 md:pb-24">
      <motion.div
        className="flex flex-col items-center justify-center gap-y-10 md:flex-row md:gap-y-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={containerVariants}
      >
        <StatCard value="500Hr+" label="Time Saved" delay={0} />
        <Divider />
        <StatCard value="50M+" label="Organic Views" delay={200} />
        <Divider />
        <StatCard value="10X" label="Credibility" delay={400} />
      </motion.div>
    </div>
  );
};

export default StatsSection;