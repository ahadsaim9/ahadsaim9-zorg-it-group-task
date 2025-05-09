import img_1 from "/images/Frame_1.png";
import img_2 from "/images/Frame_2.png";
import img_3 from "/images/Frame_3.png";
import img_4 from "/images/Frame_4.png";
import service_img_1 from "/images/service_1.png";
import service_img_2 from "/images/service_2.png";
import service_img_3 from "/images/service_3.png";
import service_img_4 from "/images/service_4.png";
import { GoArrowUpRight } from "react-icons/go";

const Service = () => {
  return (
    <div className="text-white max-w-[1140px]  mx-auto pt-10 px-5 lg:px-0 font-[Rethink_Sans]">
      <h1 className="md:text-[40px] text-2xl leading-snug">
        <span className="text-gray-500 block">
          We are a full-service studio creating transformative
        </span>
        <span className="text-white block">
          digital experiences and solutions.
        </span>
        <span className="text-gray-500 block">
          Specializing in websites and web applications.
        </span>
      </h1>

      <div className="md:grid  md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 service flex flex-col justify-center items-center ">
        {/* ******** section->1********* */}
        <div className="lg:relative">
          <section
            style={{
              backgroundImage: `url(${service_img_1})`,
            }}
            className="h-[314px] w-[286px] lg:absolute top-[49px] rounded-3xl flex flex-col justify-between  p-4 box"
          >
            <img className="w-14" src={img_1} alt="" />
            <div className="flex flex-col gap-3">
              <div className="flex justify-between  ">
                <h3 className="text-2xl">All-In-One (AIO) Service</h3>
                <span className="text-3xl">
                  <GoArrowUpRight />
                </span>
              </div>
              <p>
                Our AIO solution tailors your unique vision, crafting a website
                that truly reflects...
              </p>
            </div>
            <div></div>
          </section>
        </div>
        {/* ******** section->2********* */}
        <div className="lg:relative">
          <section
            style={{
              backgroundImage: `url(${service_img_2})`,
            }}
            className="h-[314px] w-[286px] lg:absolute top-[113px] rounded-3xl flex flex-col justify-between  p-4 box"
          >
            <img className="w-14" src={img_2} alt="" />
            <div className="flex flex-col gap-3">
              <div className="flex justify-between ">
                <h3 className="text-2xl">All-In-One (AIO) Service</h3>
                <span className="text-3xl">
                  <GoArrowUpRight />
                </span>
              </div>
              <p>
                Our AIO solution tailors your unique vision, crafting a website
                that truly reflects...
              </p>
            </div>
            <div></div>
          </section>
        </div>
        {/* ******** section->3********* */}
        <div className="relative ">
          <section
            style={{
              backgroundImage: `url(${service_img_3})`,
            }}
            className="h-[314px] w-[286px] lg:absolute top-[66px] rounded-3xl flex flex-col justify-between  p-4 box"
          >
            <img className="w-14" src={img_3} alt="" />
            <div className="flex flex-col gap-3">
              {" "}
              <div className="flex justify-between ">
                <h3 className="text-2xl">All-In-One (AIO) Service</h3>
                <span className="text-3xl">
                  <GoArrowUpRight />
                </span>
              </div>
              <p>
                Our AIO solution tailors your unique vision, crafting a website
                that truly reflects...
              </p>
            </div>
            <div></div>
          </section>
        </div>
        {/* ******** section->4********* */}
        <div className="relative ">
          {" "}
          <section
            style={{
              backgroundImage: `url(${service_img_4})`,
            }}
            className="h-[314px] w-[286px] lg:absolute top-0 rounded-3xl flex flex-col justify-between  p-4 box"
          >
            <img className="w-14" src={img_4} alt="" />
            <div className="flex flex-col gap-3">
              {" "}
              <div className="flex justify-between    ">
                <h3 className="text-2xl">All-In-One (AIO) Service</h3>
                <span className="text-3xl">
                  <GoArrowUpRight />
                </span>
              </div>
              <p>
                Our AIO solution tailors your unique vision, crafting a website
                that truly reflects...
              </p>
            </div>
            <div></div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Service;
