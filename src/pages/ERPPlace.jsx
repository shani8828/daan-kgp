import React from "react";
import DownloadBtn from "../components/FresherPlace/DownloadBtn";
import { Helmet } from "react-helmet";
import ERPPlaceData from "../components/FresherPlace/ERPPlaceData";


const ERPPlace = () => {
  document.title = "ERP Place | DAAN KGP";
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="This is the place where every fresher gets the requirements. This page facilitates them to get a smooth transition to college life."
        />
      </Helmet>
      <div className=" text-gray-900 bg-gray-100 dark:bg-gray-900 dark:text-gray-400 py-14 pt-20">
        <section data-aos="fade-up" className="container ">
          <h1 className="my-8 border-l-8 border-red-300 dark:border-gray-400 py-2 pl-2 text-3xl font-bold w-full ">
            ERP Place
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {ERPPlaceData.map((item, index) => (
              <DownloadBtn key={index} {...item} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default ERPPlace;
