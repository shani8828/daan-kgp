import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const EventCard = ({ image, date, title, description }) => {
  return (
    <>
      <Link
        to={`/events/${title}`}
        onClick={() => {
          window.scrollTo(0, 0);
          window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        }}
        state={{ image, date, title, description  }}
      >
        <div
          title={title}
          className="p-4 shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950 dark:text-white bg-gradient-to-tr from-rose-200 to-rose-100 border border-rose-300 rounded-lg"
        >
          <div className="overflow-hidden">
            <Helmet>
              <link rel="preload" as="image" href={image} />
            </Helmet>
            <img
              src={image}
              alt={title}
              width="100%"
              height="250px"
              className="mx-auto object-cover rounded-lg border border-rose-500 shadow-sm shadow-rose-300"
            />
          </div>
          <div className="flex justify-between pt-2 text-slate-600">
            <p title="Date">{date}</p>
          </div>
          <div className="space-y-2 py-3">
            <h1
              className="line-clamp-1 font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-700 to-orange-500"
              title="Title"
            >
              {title}
            </h1>
            <p className="line-clamp-2 text-rose-700/80 " title="Description">
              {description}
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default EventCard;
