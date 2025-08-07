"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Element } from "react-scroll";
export default function WhatWeCreate() {
  const services = [
    {
      id: 1,
      image: "/camera.png",
      logo: "/starLogo.png",
      name: "Service Name",
    },
    {
      id: 2,
      image: "/camera.png",
      logo: "/starLogo.png",
      name: "Service Name",
    },
    {
      id: 3,
      image: "/camera.png",
      logo: "/starLogo.png",
      name: "Service Name",
    },
    {
      id: 4,
      image: "/camera.png",
      logo: "/starLogo.png",
      name: "Service Name",
    },
    {
      id: 5,
      image: "/camera.png",
      logo: "/starLogo.png",
      name: "Service Name",
    },
    {
      id: 6,
      image: "/camera.png",
      logo: "/starLogo.png",
      name: "Service Name",
    },
    {
      id: 7,
      image: "/camera.png",
      logo: "/starLogo.png",
      name: "Service Name",
    },
    {
      id: 8,
      image: "/camera.png",
      logo: "/starLogo.png",
      name: "Service Name",
    },
  ];

  return (
    <Element name="services">
      <div className="bg-[#070728]">
        <section className="text-white max pad rm">
          <div className="text-center mb-10">
            <h2 className="text-[34px] sm:text-[38px] md:text-[44px] lg:text-[48px] text-[#ffffff] font-bold leading-[120%]">
              What We Create
            </h2>
            <p className=" mt-2 text-[15px] md:text-[16px] lg:text-[18px] text-[#ffffff] font-normal leading-[160%]">
              From industrial walkthroughs to cinematic brand films.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <motion.div
                key={service.id}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 50 }}
                className="relative rounded-xl cursor-pointer overflow-hidden  aspect-[3/4] flex items-center justify-center shadow-lg"
              >
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover transition duration-300 ease-in-out hover:brightness-75"
                />

                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
                  <div className="bg-[#DD3333] rounded-full w-16 h-16 flex items-center justify-center mb-2">
                    <Image
                      src={service.logo}
                      alt="Service Logo"
                      width={44}
                      height={44}
                    />
                  </div>
                  <span className="text-white font-semibold text-[16px] text-center">
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
}
