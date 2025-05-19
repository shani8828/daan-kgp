import React from "react";

const BrightMindsCard = ({ img, name, dept, Year, cg, position, colour }) => {
  return (
    <>
      <div className="relative flex w-full flex-col justify-around items-center p-2 md:p-3 lg:p-4 border border-red-400 bg-gradient-to-tr from-red-300 to-red-100 rounded-lg gap-1 md:gap-2">
        <p
          className={`absolute w-full h-full text-right top-1 right-3 animate-pulse font-bold text-3xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-orange-500`}
        >
          {position}
        </p>
        <img
          src={img}
          alt=""
          className="rounded-lg w-[200px] h-[200px] drop-shadow-[5px_5px_12px_rgba(0,0,0,0.7)]"
        />
        <h1 className="text-lg md:text-xl font-semibold md:font-bold">
          {name}
        </h1>
        <p className="text-sm md:text-lg text-black/90">{dept}</p>
        <p className="text-black/70 text-sm md:text-lg flex justify-between items-center gap-4">
          <div>{Year}</div>
          <div>CGPA : {cg}</div>
        </p>
      </div>
    </>
  );
};

export default BrightMindsCard;
