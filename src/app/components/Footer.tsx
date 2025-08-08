"use client";
import React from "react";
import { motion } from "framer-motion";

const Footer = ({ openPopup }: { openPopup: () => void }) => {
  return (
    <footer className="relative overflow-hidden text-white">
      {/* 🌄 Background Image */}
      <div className="absolute inset-0 bg-[url('/bg.png')] bg-cover bg-center z-0" />

      {/* ✨ Overlays for Depth */}
      <div className="absolute inset-0 bg-gradient-radial from-white/10 via-transparent to-transparent opacity-30 z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/5 to-black/10 z-10 pointer-events-none" />

      {/* 🌟 CTA Section */}
      <section className="rm pad max flex items-center justify-center relative z-20 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center max-w-4xl px-5"
        >
          <h2 className="font-bold text-[36px] sm:text-[42px] md:text-[48px] lg:text-[54px] leading-[120%] font-epilogue">
            Ready to Transform Your Story?
          </h2>
          <p className="text-[15px] md:text-[16px] lg:text-[18px] text-[#ffffffcc] mt-4 leading-relaxed wrapText">
            Let’s collaborate to craft videos that not only captivate but also
            convert. Elevate your brand with compelling visuals.
          </p>
          <button
            onClick={openPopup}
            className="mt-8 px-6 py-3 bg-white text-[#DD3333] font-semibold rounded-[6px] transition-all duration-300 hover:bg-[#f3f3f3] hover:scale-[1.04]"
          >
            Enquire Now
          </button>
        </motion.div>
      </section>
    </footer>
  );
};

export default Footer;
