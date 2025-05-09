import React from "react";
import Banner from "../components/Banner";

import bg_img2 from "/images/bg_2.png";
import Service from "../components/Service";
import CenterModeSlide from "../components/CenterMoodSlide";
import InsightsSection from "../components/InsightsSection";
import Footer from "../components/Footer";
import RecentWorks from "../components/RecentWorks";
import FeaturedInsights from "../components/Featured Insights";

const Home = () => {
  return (
    <div className="max-w-[1440px] mx-auto ">
      <div className="mx-auto w-full">
        <Banner />
      </div>
      <div className="mt-8 bg-blend-exclusion">
        <CenterModeSlide />
        <section
          className=" h-auto lg:h-[670px] w-full bg-cover  bg-blend-exclusion "
          style={{
            backgroundImage: `url(${bg_img2})`,
          }}
        >
          <Service />
        </section>

        {/* *********** RecentWorks ************* */}
        <RecentWorks />
      </div>

      <div className="h-auto  w-full  bg-[#0a0a0a] text-white flex flex-col justify-center items-center px-4 pb-10">
        {/* ************ Featured Insights ************ */}
        <FeaturedInsights />
        {/* ************ InsightsSection ************ */}
        <InsightsSection />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
