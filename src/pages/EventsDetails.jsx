import React from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import EventData from "../components/Events/EventData";
import EventsComp from "../components/Events/EventsComp";

const EventsDetails = () => {
  const { slug } = useParams();
  const event = EventData.find((e) => e.slug === slug);

  if (!event) {
    return (
      <div className="pt-20 text-center text-red-500 text-xl">
        Event not found.
      </div>
    );
  }

  const { image, date, title, description } = event;

  return (
    <div className="pt-20">
      <Helmet>
        <title>{`${title} | DAAN KGP`}</title>
        <meta name="description" content={description} />
      </Helmet>

      <div className="h-auto overflow-hidden">
        <img
          src={image}
          alt={title}
          className="mx-auto h-auto md:h-fit w-full object-cover"
        />
      </div>

      <div className="container bg-gray-50 dark:bg-gray-900">
        <p className="text-slate-600 dark:text-gray-500 text-sm py-3">on {date}</p>
        <h1 className="text-2xl dark:text-gray-300 font-semibold">{title}</h1>
        <p className="text-gray-700 dark:text-gray-400">{description}</p>
      </div>

      {/* All Events Section */}
      <EventsComp />
    </div>
  );
};

export default EventsDetails;
