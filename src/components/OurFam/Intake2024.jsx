import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import FamCard from "./FamCard";
import Intake2024Data from "./JSFiles/Intake2024Data";

const Intake2024 = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Local state initialized from query params
  const [searchName, setSearchName] = useState(searchParams.get("name") || "");
  const [searchDept, setSearchDept] = useState(searchParams.get("dept") || "");
  const [searchHall, setSearchHall] = useState(searchParams.get("hall") || "");

  // Sync URL when any input changes
  useEffect(() => {
    const params = {};
    if (searchName) params.name = searchName;
    if (searchDept) params.dept = searchDept;
    if (searchHall) params.hall = searchHall;
    setSearchParams(params);
  }, [searchName, searchDept, searchHall, setSearchParams]);

  // Input handlers (don't clear others)
  const handleNameChange = (e) => setSearchName(e.target.value);
  const handleDeptChange = (e) => setSearchDept(e.target.value);
  const handleHallChange = (e) => setSearchHall(e.target.value);

  // Filter logic - apply all non-empty filters together
  const filteredItems = Intake2024Data.filter((item) => {
    const matchesName = searchName
      ? item.name.toLowerCase().includes(searchName.toLowerCase())
      : true;
    const matchesDept = searchDept
      ? item.dept.toLowerCase().includes(searchDept.toLowerCase())
      : true;
    const matchesHall = searchHall
      ? item.hall.toLowerCase().includes(searchHall.toLowerCase())
      : true;
    return matchesName && matchesDept && matchesHall;
  });

  return (
    <div className="dark:bg-gray-900 bg-gray-100 text-gray-900 dark:text-gray-400 py-10">
      <section data-aos="fade-up" className="container">
        <h1 className="mt-8  text-gray-900 dark:text-gray-400 pl-2 text-2xl font-bold text-center w-full">
          Second Years
        </h1>
        <h3 className="mb-8 italic text-center w-full">
          Total :{" "}
          {searchName || searchDept || searchHall ? filteredItems.length : "46"}{" "}
          Members
        </h3>

        <div className="flex gap-2 items-center justify-center flex-wrap mb-4">
          <input
            type="text"
            placeholder="Name"
            value={searchName}
            onChange={handleNameChange}
            className="px-3 py-2 border border-red-200 dark:border-gray-300 rounded-lg shadow-sm placeholder-red-300 text-red-600
              focus:outline-none focus:ring-2 focus:ring-red-200 dark:focus:ring-gray-500 
              transition-all duration-300 ease-in-out
              dark:bg-gray-800 dark:text-white dark:placeholder-gray-400
              hover:shadow-md w-[30%]"
          />
          <input
            type="text"
            placeholder="Dept"
            value={searchDept}
            onChange={handleDeptChange}
            className="px-3 py-2 border border-red-200 dark:border-gray-300 rounded-lg shadow-sm placeholder-red-300 text-red-600
              focus:outline-none focus:ring-2 focus:ring-red-200 dark:focus:ring-gray-500 
              transition-all duration-300 ease-in-out
              dark:bg-gray-800 dark:text-white dark:placeholder-gray-400
              hover:shadow-md w-[30%]"
          />
          <input
            type="text"
            placeholder="Hall"
            value={searchHall}
            onChange={handleHallChange}
            className="px-3 py-2 border border-red-200 dark:border-gray-300 rounded-lg shadow-sm placeholder-red-300 text-red-600
              focus:outline-none focus:ring-2 focus:ring-red-200 dark:focus:ring-gray-500 
              transition-all duration-300 ease-in-out
              dark:bg-gray-800 dark:text-white dark:placeholder-gray-400
              hover:shadow-md w-[30%]"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
          {filteredItems.map((item) => (
            <FamCard key={item.id} {...item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Intake2024;
