import React from "react";
import { IoIosMail } from "react-icons/io";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

const FamCard = ({ img, name, dept, hall, mail, linkedIn, }) => {
  return (
    <>
      <div className="flex flex-col justify-around items-center p-2 md:p-3 lg:p-4 border border-red-400 bg-gradient-to-tr from-red-300 to-red-100 rounded-lg gap-1 md:gap-2">
        <img src={img} alt="" className="rounded-lg" />
        <h1 className="text-lg md:text-xl font-semibold md:font-bold bg-clip-text text-transparent bg-gradient-to-tr from-red-900 to-orange-600">
          {name}
        </h1>
        <div className=" relative flex justify-between items-center gap-4 w-full">
          <p className="text-sm md:text-lg text-black/80">{dept}</p>
          <p className="text-black/80 text-sm md:text-lg">{hall}</p>
        </div>
        <div className="relative flex justify-evenly items-center gap-2 md:gap-4 w-full">{
          mail &&
          
          <a href={mail}>
            <FaEnvelope className="text-lg md:text-xl lg:text-2xl text-red-700 hover:scale-[1.10] hover:text-red-500 transition-all duration-300" />
          </a>}{linkedIn &&

          
          <a href={linkedIn}>
            <FaLinkedin className="text-lg md:text-xl lg:text-2xl text-red-700 hover:scale-[1.10] hover:text-red-500 transition-all duration-300" />
          </a>}
        </div>
      </div>
    </>
  );
};

export default FamCard;
