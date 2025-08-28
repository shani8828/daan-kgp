import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Forms = () => {
  document.title = "Our Forms | DAAN KGP";
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="This page includes our forms related queries."
        />
      </Helmet>
      <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-14 pt-20 min-h-[80vh]">
        <section data-aos="fade-up" className="container ">
          <h1 className="my-8 border-l-8 border-red-300 py-2 pl-2 text-3xl font-bold">
            Our Forms
          </h1>

          <Link to="/tshirt-form">T-Shirts 2025</Link>
        </section>
      </div>
    </>
  );
};

export default Forms;
