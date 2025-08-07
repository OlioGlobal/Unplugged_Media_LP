"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Element } from "react-scroll";
export default function BrandVideoSection({
  openPopup,
}: {
  openPopup: () => void;
}) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <Element name="about">
      <section className="max pad rm">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-14 items-center">
          {/* Video Player Side */}
          <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
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
                {/* Dark overlay for better contrast */}
                <div className="absolute inset-0 bg-black/20"></div>

                {/* Play Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="backdrop-blur-sm p-6 rounded-full shadow-lg transition-all duration-300  group-hover:scale-110">
                    <Image
                      src={"/play.png"}
                      alt="play"
                      width={45}
                      height={45}
                    />
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
                className="w-full h-full object-cover"
              />
            )}
          </div>

          <div className="space-y-6">
            <h2 className="h2Text">Why Smart Brands Choose Unplug Infinity</h2>

            <p className="hPara">
              While others create videos, we engineer visual experiences that
              drive growth. Our unique blend of cinematic storytelling and
              marketing strategy ensures every frame delivers measurable impact
              for your brand. Why Smart Why Smart Brands Choose Unplug
              InfinityBrands Choose Unplug Infinity
              <br className="hidden md:block" />
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
          </div>
        </div>
      </section>
    </Element>
  );
}
