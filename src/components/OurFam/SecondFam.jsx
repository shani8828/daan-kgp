import React from 'react'
import FamCard from "./FamCard";
import SecondFamData from './JSFiles/SecondFamData';

const SecondFam = () => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className="my-8 border-l-8 border-red-300 py-2 pl-2 text-2xl font-bold">
            Second Years
          </h1>
          <h3 className="m-2 italic">Total : 35 Members</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
            {SecondFamData.map((item) => (
              <FamCard key={item.id} {...item} />
            ))}
          </div>
          <div className="text-left mt-8">
            Oops, missed your info? Upload it right
            <a
              href="https://forms.gle/z3SJn3XUzuQRC5Rg9"
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

export default SecondFam
