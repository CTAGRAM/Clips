"use client";

import { motion } from "framer-motion";

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

// Data for the stats
const statsData = [
  { value: "500Hr+", label: "Time Saved" },
  { value: "50M+", label: "Organic Views" },
  { value: "10X", label: "Credibility" },
];

const StatCard = ({ value, label }: { value: string; label: string }) => (
  <motion.div
    variants={itemVariants}
    className="flex flex-col items-center text-center md:px-10"
  >
    <h2 className="font-sans text-[56px] font-bold leading-none tracking-[-0.02em] text-white">
      {value}
    </h2>
    <p className="mt-2 text-lg text-slate-400">{label}</p>
  </motion.div>
);

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
        <StatCard value={statsData[0].value} label={statsData[0].label} />
        <Divider />
        <StatCard value={statsData[1].value} label={statsData[1].label} />
        <Divider />
        <StatCard value={statsData[2].value} label={statsData[2].label} />
      </motion.div>
    </div>
  );
};

export default StatsSection;