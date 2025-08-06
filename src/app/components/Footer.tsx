import React from "react";

const Footer = ({ openPopup }) => {
  return (
    <div className="relative overflow-hidden">
      {/* 🌄 Background Image */}
      <div className="absolute inset-0 bg-[url('/bg.png')] bg-cover bg-center z-0" />

      {/* 🔘 Radial Overlay Effects (optional, keep or remove) */}
      <div className="absolute inset-0 bg-gradient-radial from-white/10 via-transparent to-transparent opacity-30 pointer-events-none z-10"></div>
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/5 to-black/10 pointer-events-none z-10"></div>

      {/* 🌟 Main Content */}
      <section className="rm pad max flex items-center justify-center relative z-20">
        <div className="text-center text-white max-w-4xl px-5">
          <h1 className="font-bold text-[38px] sm:text-[42px] md:text-[48px] lg:text-[54px] leading-[120%] font-epilogue">
            Ready to Script Your Brand's Visual Journey?
          </h1>
          <p className="text-[15px] md:text-[16px] lg:text-[18px] text-[#FFFFFFBF] mt-2">
            From industrial walkthroughs to cinematic brand films.
          </p>
          <button
            onClick={openPopup}
            className="paraText mt-6 cursor-pointer text-[#DD3333] hover:bg-[#e9e7e7] py-[9px] px-[21px] rounded-[5px] font-bold bg-white"
          >
            Enquire Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Footer;
