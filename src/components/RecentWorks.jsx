import { recentWorks } from "../data/mockData";
import Card from "../components/Card";
import title_img from "/images/Title.png";
const RecentWorks = () => {
  const recentWorksStyle =
    "h-[220px]  bg-cover bg-center  text-white flex flex-col justify-center items-center px-4 pb-10";
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${title_img})`,
        }}
        className=" w-[70%] mx-auto bg-cover  bg-center h-[400px] text-white flex flex-col justify-center items-center px-4"
      >
        <div className={`${recentWorksStyle}`}>
          <h2 className="text-3xl lg:text-5xl mt-[106px] font-bold">
            Our Most Recent Works
          </h2>
          <p className="mt-4 text-center">
            Lorem ipsum dolor sit amet <br /> consectetur. Eget at at nunc
            lorem.
          </p>
        </div>
      </div>
      <div className="h-auto w-full bg-cover bg-center relative mb-16 bg-[#0a0a0a] text-white flex flex-col justify-center items-center px-4 pb-10">
        <div className="grid max-w-[1140px] mx-auto grid-cols-1 lg:grid-cols-12 gap-20">
          {recentWorks.map((work, index) => (
            <div
              key={index}
              className={`${
                index === 0 || index === 1
                  ? "lg:col-span-6 text-2xl max-w-[554px] max-h-[566px] md:text-[32px]"
                  : "lg:col-span-4 max-w-[364px] max-h-[372px]"
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

export default RecentWorks;
