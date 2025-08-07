import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

const Header = ({ openPopup }: { openPopup: () => void }) => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white border-b-[1px] border-[#B1B1B1] z-50">
      <div className="max pad py-2">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link href={"/"}>
              <div className="flex items-center space-x-2">
                <Image
                  src="/logo.png"
                  alt="UNPLUG Logo"
                  width={100}
                  height={80}
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <ScrollLink
              to="services"
              smooth={true}
              duration={500}
              offset={-80}
              className="FontLink cursor-pointer"
            >
              Services
            </ScrollLink>

            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              offset={-80}
              className="FontLink cursor-pointer"
            >
              About Us
            </ScrollLink>

            <ScrollLink
              to="testimonial"
              smooth={true}
              duration={500}
              offset={-80}
              className="FontLink cursor-pointer"
            >
              Testimonial
            </ScrollLink>

            <button
              onClick={openPopup}
              className="bg-[#DD3333] hover:bg-[#be1c1c] text-[18px] py-[9px] px-[12px] rounded-[5px] text-white cursor-pointer"
            >
              Enquire Now
            </button>
          </nav>

          {/* Mobile Enquire button */}
          <div className="md:hidden">
            <button
              onClick={openPopup}
              className="bg-[#DD3333] hover:bg-[#be1c1c] text-[18px] py-[9px] px-[12px] rounded-[5px] text-white cursor-pointer"
            >
              Enquire Now
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
