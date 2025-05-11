import React from "react";
import BrightMindsCard from "./BrightMindsCard";
import TopThreeDataFirst from "./TopThreeDataFirst";
import TopThreeDataSecond from "./TopThreeDataSecond";
import TopThreeDataThird from "./TopThreeDataThird";
import TopThreeDataFourth from "./TopThreeDataFourth";
import TopThreeDataFifth from "./TopThreeDataFifth";

const TopThree = () => {
  return (
    <>
      <div>
        <h1 className="text-lg md:text-xl lg:text-2xl font-semibold mt-10">
          Batch-wise Performers
        </h1>
        <h1 className="text-sm md:text-lg lg:text-xl font-bold mt-4 mb-1 text-center">First Year</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            
          {TopThreeDataFirst.map((item) => (
            <BrightMindsCard key={item.id} {...item} />
          ))}
        </div>
        <h1 className="text-sm md:text-lg lg:text-xl font-bold mt-4 mb-1 text-center">Second Year</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            
          {TopThreeDataSecond.map((item) => (
            <BrightMindsCard key={item.id} {...item} />
          ))}
        </div>
        <h1 className="text-sm md:text-lg lg:text-xl font-bold mt-4 mb-1 text-center">Third Year</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            
          {TopThreeDataThird.map((item) => (
            <BrightMindsCard key={item.id} {...item} />
          ))}
        </div>
        <h1 className="text-sm md:text-lg lg:text-xl font-bold mt-4 mb-1 text-center">Fourth Year</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            
          {TopThreeDataFourth.map((item) => (
            <BrightMindsCard key={item.id} {...item} />
          ))}
        </div>
        <h1 className="text-sm md:text-lg lg:text-xl font-bold mt-4 mb-1 text-center">Fifth Year</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            
          {TopThreeDataFifth.map((item) => (
            <BrightMindsCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default TopThree;
