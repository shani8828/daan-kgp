import React from "react";
import { GiTrophy } from "react-icons/gi";
import { FaHelicopter, FaBus, FaBuilding } from "react-icons/fa";

const Banner = () => {
  return (
    <>
      <div className="min-h-[550px] bg-gray-100">
        <div className="min-h-[550px] flex justify-center items-center backdrop-blur-xl py-12 sm:py-0 ">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
              {/* Image section */}
              <div data-aos="flip-up">
                <img
                  src="https://res.cloudinary.com/dcwwptwzt/image/upload/v1746469149/treasurebox_p2owq6.png"
                  alt="biryani img"
                  className="max-w-[450px] h-[350px] w-full mx-auto drop-shadow-[5px_5px_12px_rgba(0,0,0,0.7)] object-cover"
                />
              </div>
              {/* text content section */}
              <div className="flex flex-col justify-center gap-6 sm:pt-0 lg:px-16">
                <h1
                  data-aos="fade-up"
                  className="text-3xl sm:text-4xl font-bold"
                >
                  Explore all corners of IIT Kharagpur with us
                </h1>
                <p
                  data-aos="fade-up"
                  className="text-sm text-gray-500 tracking-wide leading-8"
                >
                  IIT Kharagpur's sprawling campus boasts modern facilities,
                  unique infrastructure fostering a dynamic environment for
                  students to grow academically and personally with diverse
                  opportunities.
                  <br />
                </p>
                <div data-aos="zoom-in" className="grid grid-cols-2 gap-6">
                  <div className="space-y-6">
                    <a
                      href="https://maps.app.goo.gl/NqEH1JNonsuRggBX9"
                      target="_blank"
                      className="flex items-center gap-4 hover:translate-x-1 transition-all duration-300"
                    >
                      <FaHelicopter className="text-4xl h-4 w-4 md:h-12 md:w-12 shadow-sm p-2 md:p-4 rounded-full bg-violet-100 border border-violet-300 dark:bg-violet-400" />
                      <p>Helipad</p>
                    </a>
                    <a
                      href="https://maps.app.goo.gl/c6AvVK4NAywEqcDJ7"
                      target="_blank"
                      className="flex items-center gap-4 hover:translate-x-1 transition-all duration-300"
                    >
                      <FaBus className="text-4xl h-4 w-4 md:h-12 md:w-12 shadow-sm p-2 md:p-4 rounded-full bg-red-100 border border-red-300 dark:bg-red-400" />
                      <p>Hanger</p>
                    </a>
                  </div>
                  <div className="space-y-6">
                    <a
                      href="https://maps.app.goo.gl/JGGXni9LUqP8zDZQA"
                      target="_blank"
                      className="flex items-center gap-4 hover:translate-x-1 transition-all duration-300"
                    >
                      <GiTrophy className="text-4xl h-4 w-4 md:h-12 md:w-12 shadow-sm p-2 md:p-4 rounded-full bg-green-100 border border-green-300 dark:bg-green-400" />
                      <p>Gymkhana</p>
                    </a>
                    <a
                      href="https://maps.app.goo.gl/c6AvVK4NAywEqcDJ7"
                      target="_blank"
                      className="flex items-center gap-4 hover:translate-x-1 transition-all duration-300"
                    >
                      <FaBuilding className="text-4xl h-4 w-4 md:h-12 md:w-12 shadow-sm p-2 md:p-4 rounded-full bg-yellow-100 border border-yellow-300 dark:bg-yellow-400" />
                      <p>Nehru Museum</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
