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
                    <div className="flex items-center gap-4">
                      <FaHelicopter className="text-4xl h-12 w-12 shadow-sm p-1 md:p-2 lg:p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                      <p>Helipad</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <FaBus className="text-4xl h-12 w-12 shadow-sm p-1 md:p-2 lg:p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
                      <p>Hanger</p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <GiTrophy className="text-4xl h-12 w-12 shadow-sm p-1 md:p-2 lg:p-4 rounded-full bg-green-100 dark:bg-green-400" />
                      <p>Gymkhana</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <FaBuilding className="text-4xl h-12 w-12 shadow-sm p-1 md:p-2 lg:p-4 rounded-full bg-yellow-100 dark:bg-yellow-400" />
                      <p>Hijli Shaheed Bhavan</p>
                    </div>
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
