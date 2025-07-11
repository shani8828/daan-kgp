import React from "react";
import EventCard from "./EventCard";
import EventData from "./EventData"; // <-- import data

const EventComp = () => {
  return (
    <div id="events" className="scroll-mt-[100px] dark:bg-gray-900 dark:text-white py-10">
      <section data-aos="fade-up" className="container">
        <h1 className="my-8 border-l-8 border-rose-300 py-2 pl-2 text-3xl font-bold">
          Our Events
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {EventData.map((item) => (
            <EventCard key={item.id} {...item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default EventComp;
