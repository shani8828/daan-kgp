import React from "react";
import TopOne from "../components/OurBrightMinds/TopOne";
import TopThree from "../components/OurBrightMinds/TopThree";
import { Helmet } from "react-helmet";

const OurBrightMinds = () => {
  document.title="Our Bright Minds | DAAN KGP";
  return (
    <>
    <Helmet>
      <meta name="description" content="This page includes our bright minds and hard works. They are the reasons behind our success." />
    </Helmet>
      <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-14 pt-20">
        <section data-aos="fade-up" className="container ">
          <h1 className="my-8 border-l-8 border-red-300 py-2 pl-2 text-3xl font-bold">
            Our Bright Minds
          </h1>
          <TopOne/>
          <TopThree/>
        </section>
      </div>
    </>
  );
};

export default OurBrightMinds;
