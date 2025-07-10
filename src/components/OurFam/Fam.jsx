import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FirstFam from "./FirstFam";
import SecondFam from "./SecondFam";
import ThirdFam from "./ThirdFam";
import FourthFam from "./FourthFam";
import FifthFam from "./FifthFam";

const Fam = ({ yearParam }) => {
  const navigate = useNavigate();

  const tabs = [
    { id: "24", label: "'24", content: <FirstFam /> },
    { id: "23", label: "'23", content: <SecondFam /> },
    { id: "22", label: "'22", content: <ThirdFam /> },
    { id: "21", label: "'21", content: <FourthFam /> },
    { id: "20", label: "'20", content: <FifthFam /> },
  ];

  const activeTab = tabs.find((tab) => tab.id === yearParam) ?? tabs[0];

  const handleTabClick = (id) => {
    navigate(`/our-fam/${encodeURIComponent(id)}`);
  };

  return (
    <div className="dark:bg-gray-900 dark:text-white py-10">
      <section data-aos="fade-up" className="container">
        <h1 className="my-8 border-l-8 border-red-300 py-2 pl-2 text-3xl font-bold">
          Our Fam
        </h1>
        <p className="text-center text-red-500 underline mb-2">Choose Batch</p>
        <div className="text-center">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`py-3 px-4 w-14 rounded-lg border ${
                tab.id === activeTab.id
                  ? "bg-red-400 text-white"
                  : "border-red-300 text-red-800 bg-red-200 hover:bg-red-400"
              }`}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mt-6">{activeTab.content}</div>
      </section>
    </div>
  );
};

export default Fam;
