import React from 'react'
import FamCard from "./FamCard";
import ThirdFamData from "./JSFiles/ThirdFamData";

const ThirdFam = () => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className="my-8 border-l-8 border-red-300 py-2 pl-2 text-2xl font-bold">
            Third Years
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
            {ThirdFamData.map((item) => (
              <FamCard key={item.id} {...item} />
            ))}
          </div>
        </section>
      </div>
    </>
  )
}

export default ThirdFam
