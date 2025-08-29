import { useNavigate } from "react-router-dom";
import Intake2025 from "./Intake2025";
import Intake2024 from "./Intake2024";
import Intake2023 from "./Intake2023";
import Intake2022 from "./Intake2022";
import Intake2021 from "./Intake2021";
import Intake2020 from "./Intake2020";

const Fam = ({ yearParam }) => {

  const navigate = useNavigate();

  const tabs = [
    { id: "25", label: "'25", content: <Intake2025/> },
    { id: "24", label: "'24", content: <Intake2024/> },
    { id: "23", label: "'23", content: <Intake2023 /> },
    { id: "22", label: "'22", content: <Intake2022 /> },
    { id: "21", label: "'21", content: <Intake2021 /> },
    { id: "20", label: "'20", content: <Intake2020 /> },
  ];

  const activeTab = tabs.find((tab) => tab.id === yearParam) ?? tabs[0];

  const handleTabClick = (id) => {
    navigate(`/our-fam/${encodeURIComponent(id)}`);
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-400 py-10">
      <section data-aos="fade-up" className="container">
        <h1 className="my-8 border-l-8 border-red-300 dark:border-gray-300 py-2 pl-2 text-3xl font-bold text-gray-900 dark:text-gray-300">
          Our Fam
        </h1>
        <p className="text-center text-red-500 dark:text-gray-400 underline mb-2">Joining Year</p>
        <div className="text-center">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`shadow-md hover:shadow-lg py-1 md:py-2 lg:py-3 px-2 md:px-3 lg:px-4 w-10 md:w-12 lg:w-14 rounded-lg text-sm border transition-all duration-300 ${
                tab.id === activeTab.id
                  ? "bg-gray-500 dark:bg-gray-800 text-gray-200 dark:text-gray-400 border-gray-600 "
                  : "border-gray-300 dark:border-gray-400 text-red-800 dark:text-gray-500 bg-gray-200 dark:bg-gray-700 hover:bg-gray-400 hover:border-gray-500"
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
