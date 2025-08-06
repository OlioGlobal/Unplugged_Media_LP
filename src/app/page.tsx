"use client";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import TrusterSlider from "./components/TrusterSlider";
import WhatWeCreate from "./components/WhatWeCreate";
import WhyBrandsSection from "./components/WhyBrandsSection";
import TestimonialCarousel from "./components/Testimonial";
import Footer from "./components/Footer";
import FormPopup from "./components/utils/FormPopup";
import { usePopupToggle } from "./hooks/usePopupToggle";
export default function Home() {
  const { isOpen, openPopup, closePopup } = usePopupToggle();
  return (
    <>
      <Header openPopup={openPopup} />
      <HeroSection openPopup={openPopup} />
      <StatsSection />
      <TrusterSlider />
      <WhatWeCreate />
      <WhyBrandsSection openPopup={openPopup} />
      <TestimonialCarousel />
      <Footer openPopup={openPopup} />
      <FormPopup isOpen={isOpen} onClose={closePopup} />
    </>
  );
}
