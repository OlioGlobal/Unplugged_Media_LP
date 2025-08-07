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
                className="relative w-full h-full cursor-pointer group"
                onClick={() => setIsPlaying(true)}
              >
                <Image
                  src="/images/stock.png"
                  alt="Brand Video Thumbnail"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20" />

                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 180, damping: 8 }}
                >
                  <div className="backdrop-blur-sm p-6 rounded-full shadow-lg">
                    <Image src="/play.png" alt="play" width={45} height={45} />
                  </div>
                </motion.div>
              </div>
            ) : (
              <video
                src="/video/stock.mp4"
                autoPlay
                controlsList="nodownload nofullscreen noremoteplayback"
                disablePictureInPicture
                onContextMenu={(e) => e.preventDefault()}
                className="w-full h-full object-cover"
              />
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
              drive growth. Our unique blend of cinematic storytelling and
              marketing strategy ensures every frame delivers measurable impact
              for your brand.
            </p>
            <p className="hPara">
              We don&apos;t just create videos for our clients, we become
              strategic partners in their success story. That&apos;s why
              industry leaders trust us to turn their boldest ideas into their
              biggest wins.
            </p>

            <button
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
