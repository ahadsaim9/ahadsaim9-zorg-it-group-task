import React from "react";
import { recentWorks } from "../data/mockData";
import CenterMode from "../components/CenterMode";
import Banner from "../components/Banner";
import Card from "../components/Card";
import bg_img2 from "/public/images/bg_2.png";
import bg_img3 from "/public/images/Bg.png";
import Service from "../components/Service";

const Home = () => {
  return (
    <div className="max-w-[1440px] mx-auto ">
      <div className="mx-auto w-full">
        <Banner />
      </div>
      <div className="centerMode ">
        <CenterMode />
        <section
          className="h-[670px] w-full bg-cover  banner text-white flex flex-col justify-center items-center px-4 pb-10"
          style={{
            backgroundImage: `url(${bg_img2})`,
          }}
        >
          <Service />
        </section>
      </div>
      <div
        className="h-auto w-full bg-cover   banner text-white flex flex-col justify-center items-center px-4 pb-10"
        style={{
          backgroundImage: `url(${bg_img3})`,
        }}
      >
        <div className="grid max-w-[1140px] mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6">
          {recentWorks.map((work, index) => (
            <div
              key={index}
              className={`${
                index === 0 || index === 1 ? "lg:col-span-6" : "lg:col-span-4 "
              } col-span-1`}
            >
              <Card work={work} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
