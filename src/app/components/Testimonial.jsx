"use client";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Element } from "react-scroll";

const TestimonialCarousel = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const options = {
    loop: true,
    align: "start",
    slidesToScroll: 1,
    containScroll: "trimSnaps",
  };

  const autoplayOptions = {
    delay: 4000,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
    playOnInit: true,
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay(autoplayOptions),
  ]);

  const testimonials = [
    {
      id: 1,
      text: "Their dedication, precision, and innovative approach turned our vision into a stunning reality.",
      name: "Prajakta",
      title: "Marketing Manager",
      avatar: "/images/avatar/Prajakta_avatar.png",
    },
    {
      id: 2,
      text: "The video captured the essence of our innovation and exceeded our expectations.",
      name: "Pooja",
      title: "Marketing Manager",
      avatar: "/images/avatar/pooja.png",
    },
    {
      id: 3,
      text: "Their dedication to detail were evident throughout the Corporate Film.",
      name: "Sandesh",
      title: "National Sales Head",
      avatar: "/images/avatar/Sandesh.png",
    },
    {
      id: 4,
      text: "Unplug Infinity's team transformed our complex machinery into a visual masterpiece.",
      name: "Ashish",
      title: "Sales Head",
      avatar: "/images/avatar/ashish_avatar.png",
    },
    {
      id: 5,
      text: "Explainer with Chroma film they produced stands as a testament to their excellence.",
      name: "Varsha",
      title: "Marketing",
      avatar: "/images/avatar/varsha_avatar.png",
    },
    {
      id: 6,
      text: "The result was a visually stunning Corporate film that showcased our innovation seamlessly. Thank You!",
      name: "Sukanya",
      title: "Associate Director Marketing",
      avatar: "/images/avatar/sukanya_avatar.png",
    },
    {
      id: 7,
      text: "A smooth and professional experience of video production. Looking forward to future projects.",
      name: "Priyank",
      title: "Marketing Manager",
      avatar: "/images/avatar/priyank_avatar.png",
    },
    {
      id: 8,
      text: "The resulting video exceeded our expectations and showcased our technology flawlessly.",
      name: "Pooja",
      title: "Associate Director Marketing",
      avatar: "/images/avatar/pooja2_avatar.png",
    },
    {
      id: 9,
      text: "Unplug's unwavering dedication and creative process brought our vision to life like never before.",
      name: "Shalini",
      title: "Communication Strategist",
      avatar: "/images/avatar/shalini_avatar.png",
    },
  ];

  // Get slides per view for current screen size
  const getSlidesPerView = () => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

  // Calculate which dot should be active based on current slide
  const getCurrentDotIndex = (slideIndex) => {
    const slidesPerView = getSlidesPerView();
    return Math.floor(slideIndex / slidesPerView);
  };

  // Calculate total number of dots needed
  const getTotalDots = () => {
    const slidesPerView = getSlidesPerView();
    return Math.ceil(testimonials.length / slidesPerView);
  };

  const scrollToPage = useCallback(
    (dotIndex) => {
      if (emblaApi) {
        const slidesPerView = getSlidesPerView();
        const targetSlide = dotIndex * slidesPerView;
        emblaApi.scrollTo(targetSlide);
      }
    },
    [emblaApi]
  );

  const onInit = useCallback(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onInit();
    emblaApi.on("reInit", onInit);
    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("reInit", onInit);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onInit, onSelect]);

  // Calculate current dot index
  const currentDotIndex = getCurrentDotIndex(selectedIndex);
  const totalDots = getTotalDots();

  return (
    <Element name="testimonial">
      <section className="rm bg-[#EAE6E3]">
        <div className="max pad">
          <div className="text-center mb-12">
            <h2 className="h2Text">What Our Clients Say</h2>
            <p className="hPara mt-2">
              Don't just take our word for it. Hear from brands who've
              experienced the Unplug Infinity difference.
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="flex-[0_0_100%] min-w-0 px-3 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                  >
                    <div className="p-8 bg-[#FFFFFF] h-full flex flex-col border-t-8 border-[#702B2B] rounded-t-[8px]">
                      <div className="flex-1 mb-6">
                        <p className="text-[#070728] text-[18px] text-center md:text-[20px] leading-relaxed">
                          {testimonial.text}
                        </p>
                      </div>
                      <div className="flex flex-col text-center items-center pt-4">
                        <div className="w-22 h-22 rounded-full overflow-hidden flex-shrink-0 relative">
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="mt-3">
                          <h4 className="text-[#070728] font-normal text-[15px] sm:text-[16px]">
                            {testimonial.name}
                          </h4>
                          <p className="text-[#070728] text-[14px]">
                            {testimonial.title}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Fixed Dot Navigation */}
          <div className="flex justify-center items-center mt-8 space-x-2">
            {Array.from({ length: totalDots }).map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => scrollToPage(index)}
                className={`w-[14px] h-[14px] cursor-pointer rounded-full transition-all duration-300 ${
                  index === currentDotIndex
                    ? "bg-red-600 scale-125"
                    : "bg-[#D9D9D9] hover:bg-[#d8cdcd]"
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </Element>
  );
};

export default TestimonialCarousel;
