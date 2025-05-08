import React from "react";
import { heroData } from "../data/heroData";
const Hero = () => {
  return (
    <section className="relative text-white text-center px-4 py-20 bg-black overflow-hidden">
      {/* Glow background circle */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[800px] bg-blue-500 opacity-20 rounded-full blur-3xl z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-snug">
          {heroData.heading.prefix}
          <br />
          <span className="text-white font-bold">
            {heroData.heading.highlight}
          </span>
        </h1>
        <p className="text-gray-300 mt-6 text-lg">{heroData.subheading}</p>
        <button className="mt-8 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-full transition">
          {heroData.buttonText}
        </button>

        {/* Client Logos */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 items-center">
          {heroData.clientLogos.map((logo, idx) => (
            <img
              key={idx}
              src={logo.src}
              alt={logo.name}
              className="h-8 grayscale hover:grayscale-0 transition"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
