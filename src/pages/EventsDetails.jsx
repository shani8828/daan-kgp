import React from "react";
import { useLocation } from "react-router-dom";
import EventsComp from "../components/Events/EventsComp";

const EventsDetails = (props) => {
  const location = useLocation();
  console.log(props, " props");
  console.log(location, " useLocation Hook");
  const { image, date, title, description, } = location.state;

  return (
    <div className="pt-20">
      <div className="h-auto  overflow-hidden">
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
