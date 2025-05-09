import title_img from "/images/Title.png";

const FeaturedInsights = () => {
  const recentWorksStyle =
    "h-[220px]  bg-cover bg-center  text-white flex flex-col justify-center items-center px-4 pb-10";
  return (
    <div
      style={{
        backgroundImage: `url(${title_img})`,
      }}
      className=" w-[70%] mx-auto bg-cover  bg-center h-[400px] text-white flex flex-col justify-center items-center px-4"
    >
      <div className={`${recentWorksStyle}`}>
        <h2 className="text-3xl lg:text-5xl mt-[106px] font-bold">
          Featured Insights
        </h2>
        <p className="mt-4 text-center">
          Lorem ipsum dolor sit amet <br /> consectetur. Eget at at nunc lorem.
        </p>
      </div>
    </div>
  );
};

export default FeaturedInsights;
