import React from "react";

const FamCard = ({ img, name, dept, hall }) => {
  return (
    <>
      <div className="flex flex-col justify-around items-center p-2 md:p-3 lg:p-4 border border-red-400 bg-gradient-to-tr from-red-300 to-red-100 rounded-lg gap-1 md:gap-2">
        <img src={img} alt="" className="rounded-lg"/>
        <h1 className="text-lg md:text-xl font-semibold md:font-bold bg-clip-text text-transparent bg-gradient-to-tr from-red-900 to-orange-600">{name}</h1>
        <p className="text-sm md:text-lg text-black/90">{dept}</p>
        <p className="text-black/70 text-sm md:text-lg">{hall}</p>
      </div>
    </>
  );
};

export default FamCard;
