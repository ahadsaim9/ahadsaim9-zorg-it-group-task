import React from "react";
import maskGroup from "/public/images/mask_group.png";
import fixMyPhone from "/public/images/Frame 1143.png";
import verdant from "/public/images/Frame 1139.png";
import duet from "/public/images/Frame 1141.png";
import apex from "/public/images/Frame 1150.png";
import lindholms from "/public/images/Frame 1147.png";
import Navbar from "./Navbar";

const Banner = () => {
  return (
    <section
      className="relative max-h-[734px] bg-cover banner  text-white flex flex-col justify-center items-center px-4 pb-10"
      style={{
        backgroundImage: `url(${maskGroup})`,
      }}
    >
      <div className="w-full mx-auto">
        <Navbar />
      </div>
      {/* ************** Content ************* */}

      <div className=" z-10 text-center max-w-3xl flex flex-col font-[Rethink_Sans]">
        <div className="mt-40 mt">
          <h1 className="text-3xl lg:text-[64px] md:text-5xl font-bold leading-tight ">
            <span className="text-gray-300">We Shape Your Ideas Into</span>
            <br />
            <span className="text-white">Awesome Digital</span>
            <br />
            <span className="text-white">Experience</span>
          </h1>
          <p className="mt-4  text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur. Eget at at nunc lorem.
          </p>
          <button className="mt-6 bg-gradient-to-r from-[#73BFFA] to-[#3C97F5] hover:from-blue-600 hover:to-purple-700 text-white px-6 py-2 rounded-full transition duration-300">
            Book a call with us
          </button>
        </div>
        <div className="mt-12 flex flex-col md:flex-row justify-around items-center gap-1 md:gap-6 opacity-80">
          <img src={fixMyPhone} className="h-10 w-[163px]" alt="" />
          <img src={verdant} className="h-10 w-[163px]" alt="" />
          <img src={duet} className="h-10 w-[163px]" alt="" />
          <img src={apex} className="h-10 w-[163px]" alt="" />
          <img src={lindholms} className="h-10 w-[163px]" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
