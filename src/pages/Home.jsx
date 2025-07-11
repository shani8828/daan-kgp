import React, { useEffect } from "react";
import Hero from "../components/Hero/Hero";
import EventsComp from "../components/Events/EventsComp";
import Council from "../components/Council/Council";
import CR from "../components/CR/CR";
import Banner from "../components/Banner/Banner";
import { Helmet } from "react-helmet";

const Home = ({ scrollTo }) => {
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
        <meta name="description" content="Welcome to the homepage of DAAN KGP..." />
      </Helmet>
      <div data-aos="fade-in">
        <div className="h-[775px] relative bg-black flex items-center">
          <Hero />
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
