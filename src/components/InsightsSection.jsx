import React from "react";
import { insights } from "../data/mockData";
import { FiArrowUpRight } from "react-icons/fi";

const InsightsSection = () => {
  return (
    <section className=" w-full text-white py-16 px-4">
      {/* *********** List Item *************** */}
      <div className="max-w-3xl mx-auto space-y-6">
        {insights.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center group shadow-blue-950 shadow pb-3 hover:border-blue-500 cursor-pointer"
          >
            <div className="flex items-center space-x-4">
              <span className="text-blue-400 font-semibold">
                {String(item.id).padStart(2, "0")}
              </span>
              <h3 className="text-base md:text-lg group-hover:text-blue-400 transition duration-00">
                {item.title}
              </h3>
            </div>
            <FiArrowUpRight className="text-white group-hover:text-blue-400 transition duration-300" />
          </div>
        ))}
        <div className="flex justify-center">
          <button className="mt-6 text-center bg-gradient-to-r from-[#73BFFA] to-[#3C97F5] hover:from-blue-600 hover:to-purple-700 text-white px-6 py-2 rounded-full transition duration-300">
            Book a call with us
          </button>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
