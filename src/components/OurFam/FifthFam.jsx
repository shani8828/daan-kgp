import React, { useState } from "react";
import FamCard from "./FamCard";
import FifthFamData from "./JSFiles/FifthFamData"

const FifthFam = () => {
  const [searchName, setSearchName] = useState("");
  const [searchDept, setSearchDept] = useState("");
  const [searchHall, setSearchHall] = useState("");

  const filteredItems = FifthFamData.filter((item) => {
    if (searchName) {
      return item.name.toLowerCase().includes(searchName.toLowerCase());
    } else if (searchDept) {
      return item.dept.toLowerCase().includes(searchDept.toLowerCase());
    } else if (searchHall) {
      return item.hall.toLowerCase().includes(searchHall.toLowerCase());
    } else {
      // If no search input, show all
      return true;
    }
  });
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className="my-8 border-l-8 border-red-300 py-2 pl-2 text-2xl font-bold">
            Fifth Years
          </h1>
          <h3 className="m-2 lg:m-4 italic">Total : 9 Members</h3>
          <h1 className="text-gray-700 font-semibold underline border-t-2 border-red-300 pt-2 lg:pt-4 rounded-lg">
            Search by
          </h1>
          <div className="flex gap-2 items-center justify-center flex-wrap mb-4">
            <input
              type="text"
              placeholder="Name"
              value={searchName}
              onChange={(e) => {
                setSearchName(e.target.value);
                setSearchDept("");
                setSearchHall("");
              }}
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
              onChange={(e) => {
                setSearchDept(e.target.value);
                setSearchName("");
                setSearchHall("");
              }}
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
              onChange={(e) => {
                setSearchHall(e.target.value);
                setSearchName("");
                setSearchDept("");
              }}
              className="px-4 py-2 border border-red-200 rounded-lg shadow-sm placeholder-red-300 text-red-600
         focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-red-500
         transition-all duration-300 ease-in-out
          dark:bg-gray-800 dark:text-white dark:placeholder-gray-400
         hover:shadow-md w-[30%]"
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
            {filteredItems.map((item) => (
              <FamCard key={item.id} name-badge={item.name} {...item} />
            ))}
          </div>
          <div className="text-left mt-8">
            Oops, missed your info? Upload it right
            <a
              href="https://forms.gle/Ss9D5nwR6CKXqQi3A"
              target="_blank"
              className="text-blue-500"
            >
              {" "}
              here
            </a>
            !
          </div>
        </section>
      </div>
    </>
  )
}

export default FifthFam
