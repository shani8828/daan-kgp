import React from "react";
import { VscDiffIgnored } from "react-icons/vsc";
import { Helmet } from "react-helmet";

const CouncilCard = ({ img, title, location, year }) => {
  return (
    <>
      <div className="shadow-lg border border-red-300 transition-all duration-500 hover:shadow-xl dark:bg-slate-950 dark:text-white rounded-lg bg-gradient-to-tr from-red-200 to-red-100">
        <div className="overflow-hidden h-[220px] transition duration-700 rounded-lg flex justify-center items-center">
          <Helmet>
            <link rel="preload" as="image" href={img} />
          </Helmet>
          <img
            src={img}
            alt={title}
            className="hover:skew-2 hover:scale-[1.04] transition duration-700 w-[180px] h-[180px] rounded-full"
          />
        </div>

        <div className="space-y-2 p-3">
          <h1 className="line-clamp-1 font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-orange-500">
            {title}
          </h1>
          <div className="flex items-center gap-2 opacity-70">
            <VscDiffIgnored />
            <span>{location}</span>
          </div>
          <div className="flex items-center justify-between border-t-2 py-3 !mt-3">
            <div className="opacity-70">{/* <p>{type}</p> */}</div>
            <div>
              <p className="text-2xl font-semibold text-red-700">{year} Yr</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CouncilCard;
