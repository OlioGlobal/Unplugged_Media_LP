"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Element } from "react-scroll";
import { motion, useAnimation, useInView, Variants } from "framer-motion";

// Animation variants
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function BrandVideoSection({
  openPopup,
}: {
  openPopup: () => void;
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <Element name="about">
      <section className="max pad rm">
        <div
          ref={ref}
          className="grid lg:grid-cols-2 gap-6 md:gap-14 items-center"
        >
          {/* Left: Video or Thumbnail */}
          <motion.div
            className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg"
            variants={fadeUp}
            initial="hidden"
            animate={controls}
          >
            {!isPlaying ? (
              <div
                className="relative w-full cursor-pointer group"
                style={{ aspectRatio: "16/9" }}
                onClick={() => setIsPlaying(true)}
              >
                <Image
                  src={`https://img.youtube.com/vi/1wpuOOh5YJ0/maxresdefault.jpg`}
                  alt="Brand Video Thumbnail"
                  fill
                  className="object-cover scale-120"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/20" />

                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 180, damping: 8 }}
                >
                  <div className="">
                    <Image src="/play.png" alt="play" width={35} height={35} />
                  </div>
                </motion.div>
              </div>
            ) : (
              <video
                className="w-full h-full rounded-lg shadow-lg object-cover"
                style={{ aspectRatio: "16/9" }}
                src="/video/unplugged_intro.mp4"
                autoPlay
                muted
                controls
                playsInline
              >
                Your browser does not support the video tag.
              </video>
            )}
          </motion.div>

          {/* Right: Text + Button */}
          <motion.div
            className="space-y-4"
            variants={fadeUp}
            initial="hidden"
            animate={controls}
            transition={{ delay: 0.2 }}
          >
            <h2 className="h2Text">Why Smart Brands Choose Unplug Infinity</h2>

            <p className="hPara mt-2">
              While others create videos, we engineer visual experiences that
              drive growth as a leading video production company in Pune. Our
              unique blend of cinematic storytelling and marketing strategy
              ensures every frame delivers measurable impact for your brand.
            </p>
            <p className="hPara">
              From corporate video production to industrial walkthroughs, we
              don&apos;t just create videos for our clients, we become strategic
              partners in their success story. Whether you need explainer video
              production, safety training videos, or commercial video
              production, industry leaders trust us to turn their boldest ideas
              into their biggest wins.
            </p>

            <button
              type="button"
              onClick={openPopup}
              className="bg-[#DD3333] hover:bg-[#be1c1c] text-[18px] py-[9px] px-[12px] rounded-[5px] text-white cursor-pointer"
            >
              Enquire Now
            </button>
          </motion.div>
        </div>
      </section>
    </Element>
  );
}
