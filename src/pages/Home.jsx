import React from "react";
import Hero from "../components/Hero/Hero";
import BlogsComp from "../components/Events/EventsComp";
import Council from "../components/Council/Council";
import CR from "../components/CR/CR";
import Banner from "../components/Banner/Banner";

const Home = () => {
  return (
    <>
      <div>
        <div className="h-[700px] relative bg-black">
          <video
            autoPlay
            loop
            muted
            className="absolute right-0 top-0 h-[700px] w-full object-cover z-[-1]"
          >
            {/* <source src="https://res.cloudinary.com/dcwwptwzt/video/upload/v1746467353/Screen_Recording_2025-04-29_045145_ixmnjn.mp4" type="video/mp4" /> */}
          </video>
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
