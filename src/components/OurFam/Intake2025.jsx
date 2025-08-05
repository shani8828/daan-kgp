import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import FamCard from "./FamCard";
import Intake2025Data from "./JSFiles/Intake2025Data";

const Intake2025 = () => {
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
  const filteredItems = Intake2025Data.filter((item) => {
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
    <div className="dark:bg-gray-900 dark:text-white py-10">
      <section data-aos="fade-up" className="container">
        <h1 className="my-8 border-l-8 border-red-300 py-2 pl-2 text-2xl font-bold text-center w-full">
          First Years
        </h1>
        <h3 className="m-2 lg:m-4 italic text-center w-full">
          Total :{" "}
          {searchName || searchDept || searchHall ? filteredItems.length : "41"}{" "}
          Members
        </h3>
        <h1 className="text-gray-700 font-semibold underline border-t-2 border-red-300 pt-2 lg:pt-4 rounded-lg text-center">
          Search by
        </h1>

        <div className="flex gap-2 items-center justify-center flex-wrap mb-4">
          <input
            type="text"
            placeholder="Name"
            value={searchName}
            onChange={handleNameChange}
            className="px-3 py-2 border border-red-200 rounded-lg shadow-sm placeholder-red-300 text-red-600
              focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-red-500
              transition-all duration-300 ease-in-out
              dark:bg-gray-800 dark:text-white dark:placeholder-gray-400
              hover:shadow-md w-[30%]"
          />
          <input
            type="text"
            placeholder="Dept"
            value={searchDept}
            onChange={handleDeptChange}
            className="px-4 py-2 border border-red-200 rounded-lg shadow-sm placeholder-red-300 text-red-600
              focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-red-500
              transition-all duration-300 ease-in-out
              dark:bg-gray-800 dark:text-white dark:placeholder-gray-400
              hover:shadow-md w-[30%]"
          />
          <input
            type="text"
            placeholder="Hall"
            value={searchHall}
            onChange={handleHallChange}
            className="px-4 py-2 border border-red-200 rounded-lg shadow-sm placeholder-red-300 text-red-600
              focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-red-500
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

export default Intake2025;
