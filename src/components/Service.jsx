import img_1 from "/images/Frame_1.png";
import img_2 from "/images/Frame_2.png";
import img_3 from "/images/Frame_3.png";
import img_4 from "/images/Frame_4.png";
import { GoArrowUpRight } from "react-icons/go";

const Service = () => {
  return (
    <div className="text-white max-w-[1140px] mx-auto mt-24  font-[Rethink_Sans]">
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

      <div className="grid  md:grid-cols-2 lg:grid-cols-4 service ">
        {/* ******** section->1********* */}
        <section className="h-[314px] w-[286px] flex flex-col justify-between bg-[#000066] p-4 box">
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
        {/* ******** section->2********* */}
        <section className="h-[314px] w-[286px] flex flex-col justify-between bg-[#00004e] p-4 box">
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
        {/* ******** section->3********* */}
        <section className="h-[314px] w-[286px] flex flex-col justify-between bg-[#00003d] p-4 box">
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
        {/* ******** section->4********* */}
        <section className="h-[314px] w-[286px]   flex flex-col justify-between bg-[#03032e] p-4 box">
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
  );
};

export default Service;
