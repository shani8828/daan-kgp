import BrightMindsCard from "./BrightMindsCard";
import TopThreeData2024 from "./TopThreeData2024";
import TopThreeData2023 from "./TopThreeData2023";
import TopThreeData2022 from "./TopThreeData2022";
import TopThreeData2021 from "./TopThreeData2021";

const TopThree = () => {
  return (
    <>
      <div>
        <h1 className="text-lg md:text-xl lg:text-2xl font-semibold mt-10">
          Batch-wise Performers
        </h1>
        <h1 className="text-sm md:text-lg lg:text-xl font-bold mt-4 mb-1 text-center">Second Year</h1>
        <div className="flex justify-center items-center flex-wrap flex-row gap-4 md:gap-6 lg:gap-8">
            
          {TopThreeData2024.map((item) => (
            <BrightMindsCard key={item.id} {...item} />
          ))}
        </div>
        <h1 className="text-sm md:text-lg lg:text-xl font-bold mt-4 mb-1 text-center">Third Year</h1>
        <div className="flex justify-center items-center flex-wrap flex-row gap-4 md:gap-6 lg:gap-8">
            
          {TopThreeData2023.map((item) => (
            <BrightMindsCard key={item.id} {...item} />
          ))}
        </div>
        <h1 className="text-sm md:text-lg lg:text-xl font-bold mt-4 mb-1 text-center">Fourth Year</h1>
        <div className="flex justify-center items-center flex-wrap flex-row gap-4 md:gap-6 lg:gap-8">
            
          {TopThreeData2022.map((item) => (
            <BrightMindsCard key={item.id} {...item} />
          ))}
        </div>
        <h1 className="text-sm md:text-lg lg:text-xl font-bold mt-4 mb-1 text-center">Fifth Year</h1>
        <div className="flex justify-center items-center flex-wrap flex-row gap-4 md:gap-6 lg:gap-8">
            
          {TopThreeData2021.map((item) => (
            <BrightMindsCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default TopThree;
