import React from "react";
import Hero from "../components/Hero/Hero";
import BlogsComp from "../components/Events/EventsComp";
import Council from "../components/Council/Council";
import CR from "../components/CR/CR";
import Banner from "../components/Banner/Banner";
import { Helmet } from "react-helmet";

const Home = () => {
  document.title = "DAAN KGP";
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Welcome to the homepage of DAAN KGP where we KGPian Dakshanites showcasing our strength and defining why we are different from other dakshanites."
        />
      </Helmet>
      <div data-aos="fade-in">
        <div className="h-[700px] relative bg-black">
          {/* <video
            autoPlay
            loop
            muted
            className="absolute right-0 top-0 h-[700px] w-full object-cover z-[-1]"
          >
            <source src="https://res.cloudinary.com/dcwwptwzt/video/upload/v1746467353/Screen_Recording_2025-04-29_045145_ixmnjn.mp4" type="video/mp4" />
          </video> */}
          {/* <img src="src/assets/globe-outline-dark-2.svg" alt="" className="absolute right-0 top-0 h-[700px] w-full object-cover z-[-1]"/> */}
          <Hero />
        </div>
        <CR />
        <Council />
        <BlogsComp />
        <Banner />
      </div>
    </>
  );
};

export default Home;
