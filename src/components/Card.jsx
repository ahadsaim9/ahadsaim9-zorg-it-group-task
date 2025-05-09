import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";

const Card = ({ work }) => {
  const { title, industry, link, image } = work;
  console.log(work);

  return (
    <div className="relative">
      <img src={image} alt="" />
      <div className="flex box-border w-full  absolute -bottom-14  justify-between items-center bg-[#0a0a0a] text-white px-4 py-5">
        <section className="flex flex-col gap-2.5  ">
          <h2 className="font-bold text-2xl">{title}</h2>
          <p className="text-2xl">{industry}</p>
        </section>

        <Link to={link}>
          <button className="border py-1 px-4 rounded-3xl bg-gray-900">
            <span className="flex text-[18px] gap-1">
              Open
              <span className="text-3xl">
                <GoArrowUpRight />
              </span>
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
