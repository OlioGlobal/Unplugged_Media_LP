"use client";

import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { Element } from "react-scroll";
import { FC, useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import type { TargetAndTransition } from "framer-motion";
const services = [
  {
    id: 1,
    image: "/images/service/s1.png",
    logo: "/images/service/s1Logo.png",
    name: "VIDEO PRODUCTION",
  },
  {
    id: 2,
    image: "/images/service/s2.png",
    logo: "/images/service/s2Logo.png",
    name: "ANIMATION SERVICES",
  },
  {
    id: 3,
    image: "/images/service/s3.png",
    logo: "/images/service/s3Logo.png",
    name: "WEBSITE & BRANDING",
  },
  {
    id: 4,
    image: "/images/service/s4.png",
    logo: "/images/service/s4Logo.png",
    name: "AUGMENTED & VIRTUAL REALITY",
  },
  {
    id: 5,
    image: "/images/service/s5.png",
    logo: "/images/service/s5Logo.png",
    name: "PRODUCT PHOTOSHOOT",
  },
  {
    id: 6,
    image: "/images/service/s6.png",
    logo: "/images/service/s6logo.png",
    name: (
      <span>
        AUDIO <br /> SERVICES
      </span>
    ),
  },
];

const WhatWeCreate: FC = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index: number): TargetAndTransition => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.15,
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
    hover: {
      scale: 1.02,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 120,
      },
    },
  } as const;

  return (
    <Element name="services">
      <div className="bg-[#070728]">
        <section className="text-white max pad rm">
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-[32px] sm:text-[34px] md:text-[38px] lg:text-[42px] text-white font-bold leading-[120%]">
              What We Create
            </h2>
            <p className="mt-2 text-[15px] md:text-[16px] lg:text-[18px] text-white font-normal leading-[160%] wrapText">
              From industrial showcases and corporate video production to
              cinematic campaigns and product explainer videos, we bring your
              vision to life through powerful visual storytelling.
            </p>
          </div>

          {/* Grid */}
          <div
            ref={ref}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className="relative rounded-[5px] cursor-pointer overflow-hidden  flex items-center justify-center shadow-lg"
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate={controls}
                whileHover="hover"
              >
                <Image
                  src={service.image}
                  alt={service.name as string}
                  width={500}
                  height={500}
                  className="object-contain transition duration-300 ease-in-out"
                />
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
                  <div className="bg-[#DD3333] rounded-full w-18 h-18 flex items-center justify-center mb-2 shadow-md">
                    <Image
                      src={service.logo}
                      alt="Service Logo"
                      width={46}
                      height={46}
                    />
                  </div>
                  <span className="text-white font-semibold text-[18px] text-center drop-shadow-sm">
                    {service.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </Element>
  );
};

export default WhatWeCreate;
