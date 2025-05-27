import React, { useState } from "react";
import FamCard from "./FamCard";
import FourthFamData from './JSFiles/FourthFamData';

const FourthFam = () => {
   const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = FourthFamData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white py-10">
        <section data-aos="fade-up" className="container">
          <h1 className="my-8 border-l-8 border-red-300 py-2 pl-2 text-2xl font-bold">
            Fourth Years
          </h1>
          <h3 className="m-2 italic">Total : 19 Members</h3>
          <div className="w-full bg-transparent flex justify-center">
            <input
              type="text"
              placeholder="Search by name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="m-4 px-4 py-2 border border-red-200 rounded-lg shadow-sm placeholder-red-300 text-red-600
         focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-red-500
         transition-all duration-300 ease-in-out
          dark:bg-gray-800 dark:text-white dark:placeholder-gray-400
         hover:shadow-md max-w-[200px] text-center"
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
              href="https://forms.gle/biqNgYVv7rHCZTMt9"
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

export default FourthFam
