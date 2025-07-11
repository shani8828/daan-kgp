import React from "react";
import { useParams } from "react-router-dom";
import EventsComp from "../components/Events/EventsComp";
import { Helmet } from "react-helmet";
import EventData from "../components/Events/EventData";

const EventsDetails = () => {
  const { id } = useParams();
  const decodedTitle = decodeURIComponent(id);

  const event = EventData.find(
    (e) => e.title.toLowerCase() === decodedTitle.toLowerCase()
  );

  if (!event) {
    return (
      <div className="pt-20 text-center text-red-500 text-xl">
        Event not found.
      </div>
    );
  }

  const { image, date, title, description } = event;
  document.title = `${title} | DAAN KGP`;

  return (
    <div className="pt-20">
      <Helmet>
        <meta name="description" content={description} />
      </Helmet>
      <div className="h-auto overflow-hidden">
        <img
          src={image}
          alt={title}
          className="mx-auto h-auto md:h-fit w-full object-cover"
        />
      </div>
      <div className="container">
        <p className="text-slate-600 text-sm py-3"> on {date}</p>
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p className="text-gray-700">{description}</p>
      </div>

      {/* All Events Section */}
      <EventsComp />
    </div>
  );
};

export default EventsDetails;
