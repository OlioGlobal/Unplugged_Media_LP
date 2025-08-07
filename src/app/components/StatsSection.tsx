"use client";
import React from "react";
import CountUp from "./utils/CountUP";

const statsData = [
  {
    value: 827,
    suffix: "+",
    label: "PROJECT DELIVERED",
  },
  {
    value: 120,
    suffix: "+",
    label: "AWESOME CLIENTS",
  },
  {
    value: 42,
    suffix: "",
    label: "CREATIVE TEAM",
  },
  {
    value: 10,
    suffix: "+",
    label: "YEARS OF EXPERIENCE",
  },
];

const StatsSection = () => {
  return (
    <section className="bg-[#EAE6E3] rm">
      <div className="max pad text-center">
        {/* Heading */}
        <h2 className="h2Text">Proven Track Record of Visual Excellence</h2>
        <p className="hPara mt-2">
          Serving startups to Fortune 500 companies, from industrial showcases
          to cinematic brand stories, we consistently deliver results that
          matter.
        </p>

        {/* Stats Grid */}
        <div className="mt-8 md:mt-14 grid grid-cols-2 md:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center gap-2"
            >
              <h3 className="text-[38px]  sm:text-[42px] md:text-[48px] lg:text-[54px] leading-[120%] OswaldFont  font-semibold text-[#DD3333] font-epilogue">
                <CountUp
                  from={0}
                  to={stat.value}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                />
                {stat.suffix}
              </h3>
              <p className=" text-[15px] md:text-[16px] lg:text-[18px] text-[#070728]  font-normal   font-roboto">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
