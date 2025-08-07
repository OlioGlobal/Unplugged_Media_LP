"use client";

import React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const topLogos: string[] = [
  "/images/truster/ACG-Client-logo.jpg",
  "/images/truster/aditi-developers-Client-Logo.jpg",
  "/images/truster/alankar-kumkum-Client-Logo.jpg",
  "/images/truster/bank-of-maharashtra-Client-Logo.jpg",
  "/images/truster/bramasol-Client-Logo.jpg",
  "/images/truster/ezest-Client-Logo.jpg",
  "/images/truster/isuzu-client-logo.jpg",
  "/images/truster/kexplora-Client-Logo.jpg",
  "/images/truster/mantra-Client-Logo.jpg",
  "/images/truster/rohitkrushi-Client-Logo.jpg",
  "/images/truster/SBI-client-logo.jpg",
  "/images/truster/suzlon-client-logo.jpg",
  "/images/truster/Unplug_Accupak.jpg",
  "/images/truster/Unplug_ARAPL.jpg",
  "/images/truster/Unplug_Astik.jpg",
  "/images/truster/Unplug_AtllastCopco.jpg",
  "/images/truster/Unplug_Bajaj.jpg",
  "/images/truster/Unplug_Borosil_Scientific.jpg",
  "/images/truster/Unplug_BritishCounsil.jpg",
  "/images/truster/Unplug_BUBhandari.jpg",
  "/images/truster/Unplug_Campak.jpg",
  "/images/truster/Unplug_CP.jpg",
  "/images/truster/Unplug_Electromech.jpg",
  "/images/truster/Unplug_Fabtech.jpg",
];

const bottomLogos: string[] = [
  "/images/truster/Unplug_foseco.jpg",
  "/images/truster/Unplug_Fujifil.jpg",
  "/images/truster/Unplug_GsLab.jpg",
  "/images/truster/Unplug_GTS.jpg",
  "/images/truster/Unplug_Henkel.jpg",
  "/images/truster/Unplug_Idex.jpg",
  "/images/truster/Unplug_IDFC.jpg",
  "/images/truster/Unplug_Jamtani.jpg",
  "/images/truster/Unplug_Kabra.jpg",
  "/images/truster/Unplug_Ozone.jpg",
  "/images/truster/Unplug_Phillips.jpg",
  "/images/truster/Unplug_Radcom.jpg",
  "/images/truster/Unplug_Rama.jpg",
  "/images/truster/Unplug_Salamander.jpg",
  "/images/truster/Unplug_Sharechat.jpg",
  "/images/truster/Unplug_SK.jpg",
  "/images/truster/Unplug_Tata.jpg",
  "/images/truster/Unplug_Unidel.jpg",
  "/images/truster/Unplug_Vesuvius.jpg",
  "/images/truster/Unplug_YesBank.jpg",
  "/images/truster/Unplug_Getinge.jpg",
  "/images/truster/Unplug_Vesuvius.jpg",
  "/images/truster/Unplug_Ozone.jpg",
  "/images/truster/Unplug_pharmnxt.jpg",
];

interface LogoCarouselRowProps {
  logos: string[];
  reverse?: boolean;
}

const LogoCarouselRow: React.FC<LogoCarouselRowProps> = ({
  logos,
  reverse = false,
}) => {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      direction: reverse ? "rtl" : "ltr",
      dragFree: true,
    },
    [
      Autoplay({
        delay: 2500,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );

  return (
    <div className="overflow-hidden" dir={reverse ? "rtl" : "ltr"}>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container flex">
          {logos.map((src: string, index: number) => (
            <div
              key={index}
              className="embla__slide shrink-0 w-1/2 sm:w-1/3 md:w-1/4 lg:w-[14.2857%] px-2"
            >
              <div className="bg-white  border-gray-300  rounded-md flex items-center justify-center h-[100px]">
                <Image
                  src={src}
                  alt={`Logo ${index + 1}`}
                  width={160}
                  height={160}
                  className="object-contain max-h-[140px] w-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const TrusterSlider: React.FC = () => {
  return (
    <section className="rm bg-white max">
      <div className="max pad text-center">
        <h2 className="h2Text">Join the Brands Who Trust Our Vision</h2>
        <p className="mt-2 hPara">
          Delivering excellence across industries, from emerging brands to
          market leaders.
        </p>
      </div>

      <div className="mt-10 md:mt-12 space-y-9 pad">
        <LogoCarouselRow logos={topLogos} reverse={false} />
        <LogoCarouselRow logos={bottomLogos} reverse={true} />
      </div>
    </section>
  );
};

export default TrusterSlider;
