import React from "react";
import CouncilCard from "./CouncilCard";
import { CouncilData } from "./CouncilData";

const Council = () => {
  return (
    <>
      <div id="council" className="scroll-mt-[100px] dark:bg-gray-900 dark:text-gray-400 bg-gray-50 text-gray-900 py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-red-300 dark:border-gray-300 py-2 pl-2 text-3xl font-bold">
            Our DAAN Council Members
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {CouncilData.map((item, index) => (
              <CouncilCard key={index} {...item} />
            ))}
          </div>
          <div className="text-center mt-8 w-full">
            <a
              className="bg-gradient-to-tr p-2 from-gray-100 dark:from-gray-800 to-gray-200 dark:to-gray-700 border border-gray-300 dark:border-gray-600 transition-all duration-300 rounded-xl text-center hover:bg-gradient-to-tr hover:from-gray-300 dark:hover:from-gray-700 hover:to-gray-400 dark:hover:to-gray-600 hover:border-gray-500 dark:hover:border-cyan-400 shadow-sm shadow-gray-600 text-red-600 dark:text-gray-400"
              href="https://docs.google.com/spreadsheets/d/1nz1CIe0N_4NcI_l0K6u6biITxJKGillizUyfkfjL_8c/edit?usp=sharing"
              target="_blank"
              title="DAAN Council 2024-25"
            >
              DAAN Council 2024-25
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default Council;
