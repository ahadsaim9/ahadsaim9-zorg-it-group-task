import React from "react";
import Banner from "../components/Banner";

import bg_img2 from "/images/bg_2.png";
import bg_img3 from "/images/Bg.png";
import Service from "../components/Service";
import CenterModeSlide from "../components/CenterMoodSlide";
import InsightsSection from "../components/InsightsSection";
import Footer from "../components/Footer";
import RecentWorks from "../components/RecentWorks";

const Home = () => {
  const recentWorksStyle =
    "h-[220px] w-2/4 bg-cover bg-center  bg-blend-exclusion bg-[#00000d] text-white flex flex-col justify-center items-center px-4 pb-10";
  return (
    <div className="max-w-[1440px] mx-auto ">
      <div className="mx-auto w-full">
        <Banner />
      </div>
      <div className="bg-blend-exclusion bg-[#00000d]">
        <CenterModeSlide />
        <section
          className=" h-auto  lg:h-[670px] w-full bg-cover  bg-blend-exclusion bg-[#00000d] "
          style={{
            backgroundImage: `url(${bg_img2})`,
          }}
        >
          <Service />
        </section>

        {/* ********** Our Most Recent Works *********** */}
        <div className="h-auto w-full   bg-[#00000d] text-white flex flex-col justify-center items-center px-4 pb-10">
          <div
            className={`${recentWorksStyle}`}
            style={{
              backgroundImage: `url(${bg_img3})`,
            }}
          >
            <h2 className="text-3xl">Our Most Recent Works</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Eget at at nunc lorem.
            </p>
          </div>
        </div>
        {/* *********** RecentWorks ************* */}
        <RecentWorks />
      </div>

      {/* ************ Featured Insights ************ */}
      <div className="h-auto w-full  bg-[#00000d] text-white flex flex-col justify-center items-center px-4 pb-10">
        <div
          className="h-[220px] w-2/4 bg-cover bg-center  bg-blend-exclusion bg-[#00000d] text-white flex flex-col justify-center items-center px-4 pb-10"
          style={{
            backgroundImage: `url(${bg_img3})`,
          }}
        >
          <h2 className="text-3xl">Featured Insights</h2>
          <p>Lorem ipsum dolor sit amet consectetur. Eget at at nunc lorem.</p>
        </div>
        {/* ************ InsightsSection ************ */}
        <InsightsSection />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
