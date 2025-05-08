import React, { useState } from "react";
import FirstFam from "./FirstFam";
import SecondFam from "./SecondFam";
import ThirdFam from "./ThirdFam";
import FourthFam from "./FourthFam";
import FifthFam from "./FifthFam";

const Fam = () => {
  const [activeTab, setActiveTab] = useState(null);
  const tabs = [
    { id: 1, label: "1", content: <FirstFam /> },
    { id: 2, label: "2", content: <SecondFam /> },
    { id: 3, label: "3", content: <ThirdFam /> },
    { id: 4, label: "4", content: <FourthFam /> },
    { id: 5, label: "5", content: <FifthFam /> },
  ];

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className="my-8 border-l-8 border-red-300 py-2 pl-2 text-3xl font-bold">
            Our Fam
          </h1>
          <p className="text-center mb-2 text-red-500 underline">Choose Year</p>
          <div className="text-center">
            {tabs.map((tab) => (
              <button
                className="py-3 px-4 w-14 rounded-lg border border-red-300 text-red-800 bg-red-200 hover:shadow-lg transition-all duration-300 hover:bg-red-400"
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
              >
                {tab.label}
              </button>
            ))}
            {tabs.map((tab) => (
              <div
                key={tab.id}
                style={{ display: activeTab === tab.id ? "block" : "none" }}
              >
                {tab.content}
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Fam;
