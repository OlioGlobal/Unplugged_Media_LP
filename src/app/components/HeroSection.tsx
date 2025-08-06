"use client";
import { useState } from "react";
import Image from "next/image";
import React from "react";

const HeroSection = ({ openPopup }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <section className="md:h-screen flex bg-[url('/bg.png')] bg-cover bg-center text-white">
      <div className="max pad w-full flex gap-5 py-8  mt-22  flex-col md:grid md:grid-cols-2 md:gap-8 items-center">
        {/* Left Content */}
        <div className="">
          <div className="md:max-w-sm flex z-20 flex-col items-start gap-6">
            <h2 className="font-bold z-20 text-[38px] sm:text-[42px] md:text-[48px] lg:text-[54px] leading-[120%] font-epilogue">
              Transforming Ideas into{" "}
              <span className="bg-gradient-to-b from-white to-[#B5B5B5] bg-clip-text text-transparent">
                Stunning Visual Stories
              </span>
            </h2>

            <p className=" paraFont text-[#FFFFFF] font-normal  ">
              From industrial walkthroughs to cinematic brand films — Unplug
              Infinity crafts visuals that speak, sell, and stay.
            </p>
            <button
              onClick={openPopup}
              className="paraText cursor-pointer text-[#DD3333]  hover:bg-[#e9e7e7] py-[9px] px-[21px] rounded-[5px] font-bold bg-white"
            >
              Enquire Now
            </button>
          </div>
        </div>

        {/* Right Video */}
        <div className="w-full md:h-[500px] z-10">
          <div className="relative w-full h-full aspect-video rounded-lg overflow-hidden shadow-lg">
            {!isPlaying ? (
              <div
                className="relative w-full h-full cursor-pointer group"
                onClick={() => setIsPlaying(true)}
              >
                {/* Thumbnail */}
                <Image
                  src="/images/stock.png"
                  alt="Brand Video Thumbnail"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/30" />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="backdrop-blur-sm p-6 rounded-full shadow-lg transition-all duration-300 group-hover:scale-110">
                    <Image src="/play.png" alt="Play" width={45} height={45} />
                  </div>
                </div>
              </div>
            ) : (
              <video
                src="/video/stock.mp4"
                autoPlay
                controlsList="nodownload nofullscreen noremoteplayback"
                disablePictureInPicture
                onContextMenu={(e) => e.preventDefault()}
                className="w-full h-full object-cover rounded-lg"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
