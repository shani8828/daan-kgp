import React from "react";
import { Helmet } from "react-helmet";

const BrightMindsCard = ({ img, name, dept, Year, cg, position, colour }) => {
  return (
    <>
      <div className="relative flex flex-col justify-around items-center p-2 md:p-3 lg:p-4 border border-gray-400 dark:border-transparent bg-gradient-to-tr from-gray-300 dark:from-gray-900 dark:to-gray-800 to-gray-100 rounded-2xl gap-1 md:gap-2 hover:drop-shadow-lg transition-all duration-300">
        <Helmet>
          <link rel="preload" as="image" href={img} />
        </Helmet>
        <img
          src={img}
          alt={name}
          className="rounded-full w-[180px] md:w-[230px] lg:w-[250px] shadow-lg border border-gray-400 dark:border-gray-600"
        />
        <h1 className="text-lg md:text-xl font-semibold md:font-bold text-center dark:text-gray-400">
          {name}
        </h1>
        <p className="text-sm md:text-lg text-black/90 dark:text-gray-500">{dept}</p>
        <p className="text-black/70 text-sm md:text-lg flex justify-between items-center gap-4 text-center dark:text-gray-600">
          <div>{Year}</div>
          <div>Score : {cg}</div>
        </p>
      </div>
    </>
  );
};

export default BrightMindsCard;
