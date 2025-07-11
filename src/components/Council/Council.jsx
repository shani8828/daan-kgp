import React from "react";
import CouncilCard from "./CouncilCard";

const CouncilData = [
  {
    img: "https://res.cloudinary.com/dcwwptwzt/image/upload/v1748012053/Ashutosh_wvgdts.avif",
    title: "Mr. Ashutosh ",
    portfolio: "Vice President, Events - DST & Freshmen",
    mobile: "+91 9058887078",
    mail: "ashutosh.daan@gmail.com",
    year: "4th",
  },
  {
    img: "https://res.cloudinary.com/dcwwptwzt/image/upload/v1747723339/Paramjeet_Saini_xolxxj.avif",
    title: "Mr. Paramjeet Saini",
    portfolio: "Senior Sectretary, DST(JNV)",
    mail: "paramjeetsaini@kgpian.iitkgp.ac.in",
    mobile: "+91 6397189676",
    year: "3rd",
  },
  {
    img: "https://res.cloudinary.com/dcwwptwzt/image/upload/v1748023103/Shani_Maurya_cpux6d.avif",
    title: "Mr. Shani Maurya",
    portfolio: "College Representative, IIT Kharagpur",
    mail: "shauryashanisaini@gmail.com",
    mobile: "+91 9555439091",
    year: "2nd",
  },
  {
    img: "https://res.cloudinary.com/dcwwptwzt/image/upload/v1747723437/Mohit_Kumar_h57d5w.avif",
    title: "Mr. Mohit Kumar",
    portfolio: "Junior Secretary, DST(Non-JNV)",
    mail: "mk8750351763@kgpian.iitkgp.ac.in",
    mobile: "+91 8384078167",
    year: "2nd",
  },
  {
    img: "https://res.cloudinary.com/dcwwptwzt/image/upload/v1747723597/Swarup_Dhanavade_ncjz8k.avif",
    title: "Mr. Swarup Dhanavade",
    portfolio: "Junior Secretary, DST(JNV)",
    mail: "swarupd@kgpian.iitkgp.ac.in",
    mobile: "+91 9423751729",
    year: "2nd",
  },
];

const Council = () => {
  return (
    <>
      <div id="council" className="scroll-mt-[100px] dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-red-300 py-2 pl-2 text-3xl font-bold">
            Our DAAN Council Members
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {CouncilData.map((item, index) => (
              <CouncilCard key={index} {...item} />
            ))}
          </div>
          <div className="text-center mt-8 w-full">
            <a
              className="bg-gradient-to-tr p-2 from-red-300 to-red-200 border transition-all duration-300 text-black rounded-xl text-center hover:bg-gradient-to-tr hover:from-red-500 hover:to-red-300 hover:border-red-600 shadow-sm shadow-gray-600"
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
