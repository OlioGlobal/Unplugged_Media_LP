"use client";

import React from "react";
import CountUp from "./utils/CountUP";
import { motion, Variants } from "framer-motion";

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

const statsData: Stat[] = [
  { value: 827, suffix: "+", label: "PROJECT DELIVERED" },
  { value: 120, suffix: "+", label: "AWESOME CLIENTS" },
  { value: 42, suffix: "", label: "CREATIVE TEAM" },
  { value: 10, suffix: "+", label: "YEARS OF EXPERIENCE" },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: [0.25, 0.8, 0.25, 1],
    },
  },
};

const StatsSection: React.FC = () => {
  return (
    <section className="bg-[#EAE6E3] rm">
      <div className="max pad text-center flex flex-col justify-center">
        {/* Heading */}
        <motion.h2
          className="h2Text"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.8, 0.25, 1] }}
          viewport={{ once: true }}
        >
          Proven Track Record of Visual Excellence
        </motion.h2>

        <motion.p
          className="hPara mt-2 wrapText"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.8, 0.25, 1], delay: 0.1 }}
          viewport={{ once: true }}
        >
          Serving startups to Fortune 500 companies, from industrial video
          production showcases to cinematic brand stories, we consistently
          deliver results that matter.
        </motion.p>

        {/* Stats Grid */}
        <motion.div
          className="mt-10 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-10 md:px-[6%]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col justify-center items-center gap-2 group transition-all duration-300"
            >
              <motion.h3
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="text-[38px] sm:text-[42px] md:text-[48px] lg:text-[54px] leading-[120%] OswaldFont font-semibold text-[#DD3333] font-epilogue"
              >
                <CountUp
                  from={0}
                  to={stat.value}
                  separator=","
                  direction="up"
                  duration={2}
                  className="count-up-text"
                />
                {stat.suffix}
              </motion.h3>
              <p className="text-[15px] md:text-[16px] lg:text-[18px] text-[#070728] font-normal font-roboto">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
