import React from "react";
import AnimatedCounter from "./AnimatedCounter";

const Hero = () => {
  return (
    <div className="bg-transparent h-full">
      <div className="h-full flex justify-center items-center p-4 bg-transparent">
        <div className="container grid grid-cols-1 gap-4">
          <div className="text-white">
            <p
              data-aos="fade-up"
              className="text-2xl md:text-4xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-red-900  to-red-500 font-bold text-center"
            >Congratulations on being a KGPian Dakshanite!
            </p>
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-sm md:text-md lg:text-lg text-center mt-4 md:mt-6"
            >
              Warmest greetings on joining the esteemed community of KGPians and
              proudly embracing your Dakshanite heritage!
            </p>
          </div>
          <div
            
            className="flex justify-center items-center gap-3 md:gap-8 mt-8"
          >
            <div data-aos="fade-up"
            data-aos-delay="600" className="bg-gradient-to-r from-red-700 to-red-400 rounded-lg p-4 md:p-6 lg:p-8 flex flex-col justify-evenly items-center">
              <span className="text-3xl md:text-4xl lg:text-6xl font-bold flex items-center text-center">
                <AnimatedCounter target={140} duration={2500} /> +
              </span>
              <p className="text-sm text-center">Currently in campus</p>
            </div>
            <div data-aos="fade-up"
            data-aos-delay="900" className="bg-gradient-to-r from-red-700 to-red-400 rounded-lg p-4 md:p-6 lg:p-8 flex flex-col justify-evenly items-center">
              <span className="text-3xl md:text-4xl lg:text-6xl font-bold flex items-center text-center"><AnimatedCounter target={45} duration={2500} /> +</span>
              <p className="text-sm text-center">Expected to join</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
