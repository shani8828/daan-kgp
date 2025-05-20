import React from "react";
import { useLocation } from "react-router-dom";
import EventsComp from "../components/Events/EventsComp";
import { Helmet } from "react-helmet";

const EventsDetails = (props) => {
  const location = useLocation();
  console.log(props, " props");
  console.log(location, " useLocation Hook");
  const { image, date, title, description } = location.state;
  document.title = "Events | DAAN KGP";

  return (
    <div className="pt-20">
      <Helmet>
        <meta
          name="description"
          content="This page shows our delighted events like **A Memorable Visit by Ravi Sir**
Ravi Sir's inspiring visit to Gymkhana, IIT Kharagpur, included heartfelt interactions and invaluable guidance, leaving a lasting impact on all of us.

**Farewell'25**
We bid a heartfelt farewell to the graduating batch, whose leadership and support inspired and guided us.

**Fresher's Treat'25**
A lively evening welcoming freshers, full of joy, performances, and bonding moments.

**Dakshana Day'24**
Celebrating 18 impactful years of the Dakshana Foundation’s life-changing educational mission.
."
        />
      </Helmet>
      <div className="h-auto overflow-hidden">
        <img
          src={image}
          alt={title}
          className="mx-auto h-auto md:h-fit w-full object-cover"
        />
      </div>
      <div className="container ">
        <p className="text-slate-600 text-sm py-3"> on {date}</p>
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p>{description}</p>
      </div>

      {/* All Events Section */}
      <EventsComp />
    </div>
  );
};

export default EventsDetails;
