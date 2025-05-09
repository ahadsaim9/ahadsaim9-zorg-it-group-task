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
            className="flex px-2 justify-between items-center rounded-[8px]  p-6 hover:border-blue-500 cursor-pointer bg-[linear-gradient(90deg,rgba(0,54,80,1)_-10%,rgba(0,0,0,1)_12%,rgba(0,0,0,1)_81%,rgba(0,0,0,1)_91%,rgba(0,0,0,1)_100%)] "
          >
            <div className="flex items-center  space-x-4">
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
        <div className=" flex justify-center">
          <button className="mt-6 flex justify-center gap-2 py-5 px-8 text-center bg-gradient-to-r from-[#73BFFA] to-[#3C97F5] hover:from-blue-600 hover:to-purple-700 text-white  rounded-full transition duration-300">
            <span>Book a call with us</span>
            <span className="text-xl">
              <FiArrowUpRight />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
