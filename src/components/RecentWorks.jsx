import { recentWorks } from "../data/mockData";
import Card from "../components/Card";
const RecentWorks = () => {
  return (
    <div className="h-auto w-full bg-cover bg-center bg-blend-exclusion bg-[#00000d] text-white flex flex-col justify-center items-center px-4 pb-10">
      <div className="grid max-w-[1140px] mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6">
        {recentWorks.map((work, index) => (
          <div
            key={index}
            className={`${
              index === 0 || index === 1
                ? "lg:col-span-6 text-2xl md:text-[32px]"
                : "lg:col-span-4 "
            } col-span-1`}
          >
            <Card work={work} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentWorks;
