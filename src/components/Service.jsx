import img_1 from "/public/images/Frame_1.png";
import img_2 from "/public/images/Frame_2.png";
import img_3 from "/public/images/Frame_3.png";
import img_4 from "/public/images/Frame_4.png";
import { GoArrowUpRight } from "react-icons/go";

const Service = () => {
  return (
    <div className="text-white max-w-[1140px] mx-auto mt-24  font-[Rethink_Sans]">
      <h1 className="md:text-[40px] text-2xl ">
        <span className="text-gray-500">
          We are a full-service studio creating transformative
        </span>
        digital experiences and solutions.
        <span className="text-gray-500">specializing in</span> websites and web
        applications.
      </h1>

      <div className="grid grid-cols-4">
        {/* ******** section->1********* */}
        <section className="h-[314px] w-[286px] flex flex-col justify-between bg-blue-600 p-4">
          <img className="w-14" src={img_1} alt="" />
          <div>
            <div className="flex justify-between  ">
              <h3>All-In-One (AIO) Service</h3>
              <span>
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
        <section className="h-[314px] w-[286px] flex flex-col justify-between bg-blue-700 p-4">
          <img className="w-14" src={img_2} alt="" />
          <div>
            <div className="flex justify-between ">
              <h3>All-In-One (AIO) Service</h3>
              <span>
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
        <section className="h-[314px] w-[286px] flex flex-col justify-between bg-blue-800 p-4 ">
          <img className="w-14" src={img_3} alt="" />
          <div>
            <div className="flex justify-between ">
              <h3>All-In-One (AIO) Service</h3>
              <span>
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
        <section className="h-[314px] w-[286px] flex flex-col justify-between bg-blue-900 p-4 ">
          <img className="w-14" src={img_4} alt="" />
          <div>
            <div className="flex justify-between    ">
              <h3>All-In-One (AIO) Service</h3>
              <span>
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
