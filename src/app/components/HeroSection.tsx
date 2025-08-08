"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import React from "react";
import { motion, useInView } from "framer-motion";

const HeroSection = ({ openPopup }: { openPopup: () => void }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Premium staggered animation
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number], // ✅ cast as tuple
      },
    },
  };

  return (
    <section className="md:h-screen flex bg-[url('/bg.png')] bg-cover bg-center text-white">
      <motion.div
        ref={ref}
        className="max pad w-full flex gap-5 py-8 mt-22 flex-col md:grid md:grid-cols-2 md:gap-8 items-center"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Left Content */}
        <div>
          <motion.div
            className="md:max-w-[35rem] flex z-20 flex-col items-start gap-6"
            variants={containerVariants}
          >
            <motion.h2
              className="font-bold z-20 text-[38px] sm:text-[42px] md:text-[48px] lg:text-[54px] leading-[120%] font-epilogue"
              variants={fadeUp}
            >
              India&apos;s #1 Choice for{" "}
              <span className="bg-gradient-to-b from-white to-[#B5B5B5] bg-clip-text text-transparent">
                High-Converting Videos
              </span>
            </motion.h2>

            <motion.p
              className="paraFont text-[#FFFFFF] font-normal"
              variants={fadeUp}
            >
              We transform your brand story into powerful visual content that
              speaks to your audience, builds trust, and drives action. Trusted
              by 500+ brands across India.
            </motion.p>

            <motion.button
              onClick={openPopup}
              className="paraText cursor-pointer text-[#DD3333] hover:bg-[#e9e7e7] py-[9px] px-[21px] rounded-[5px] font-bold bg-white"
              variants={fadeUp}
            >
              Get Started Now
            </motion.button>
          </motion.div>
        </div>

        {/* Right Video */}
        <motion.div className="w-full md:h-[500px] z-10" variants={fadeUp}>
          <div className="relative w-full h-full aspect-video rounded-lg overflow-hidden shadow-lg">
            {!isPlaying ? (
              <div
                className="relative w-full h-full cursor-pointer group"
                onClick={() => setIsPlaying(true)}
              >
                <Image
                  src={`https://img.youtube.com/vi/1wpuOOh5YJ0/maxresdefault.jpg`}
                  alt="Brand Video Thumbnail"
                  fill
                  className="object-cover scale-118"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className=" rounded-full shadow-lg transition-all duration-300 group-hover:scale-110">
                    <Image src="/play.png" alt="Play" width={45} height={45} />
                  </div>
                </div>
              </div>
            ) : (
              <iframe
                className="w-full scale-3d h-full rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/1wpuOOh5YJ0?autoplay=1&rel=0&modestbranding=1&controls=0&showinfo=0&fs=0&disablekb=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
