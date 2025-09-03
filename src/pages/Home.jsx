import React, { useEffect } from "react";
import Hero from "../components/Hero/Hero";
import EventsComp from "../components/Events/EventsComp";
import Council from "../components/Council/Council";
import CR from "../components/CR/CR";
import Banner from "../components/Banner/Banner";
import { Helmet } from "react-helmet";
import GridBackgroundOptimized from "../components/Hero/GridBackgroundOptimized";

const Home = ({ scrollTo }) => {
  document.title = "DAAN KGP";
  useEffect(() => {
    if (scrollTo) {
      const el = document.getElementById(scrollTo);
      if (el) {
        const yOffset = -100; // Adjust scroll offset if needed
        const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  }, [scrollTo]);

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Welcome to the homepage of DAAN KGP..."
        />
      </Helmet>
      <div data-aos="fade-in">
        <div className="h-[720px] relative bg-gray-400 dark:bg-gray-900 flex items-center overflow-hidden">
          <GridBackgroundOptimized />
          {/* ensure hero content sits above the grid */}
          <div className="relative z-10 w-full">
            <Hero />
          </div>
        </div>
        <CR />
        <Council />
        <EventsComp />
        <Banner />
      </div>
    </>
  );
};

export default Home;
