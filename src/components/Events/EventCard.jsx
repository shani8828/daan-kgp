import React from "react";
import { Link } from "react-router-dom";

const EventCard = ({ image, date, title, description, author }) => {
  return (
    <>
      <Link
        to={`/blogs/${title}`}
        onClick={() => {
          window.scrollTo(0, 0);
          // window.scroll({
          //   top: 0,
          //   left: 0,
          //   behavior: "smooth",
          // });
        }}
        state={{ image, date, title, description, author }}
      >
        <div title={title} className="p-4 shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950 dark:text-white bg-gradient-to-tr from-yellow-200 to-yellow-100 border border-yellow-300 rounded-lg">
          <div className="overflow-hidden">
            <img
              src={image}
              alt="No image"
              className="mx-auto h-[250px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110 rounded-lg"
            />
          </div>
          <div className="flex justify-between pt-2 text-slate-600">
            <p title="Date">{date}</p>
            {/* <p className="line-clamp-1">By {author}</p> */}
          </div>
          <div className="space-y-2 py-3">
            <h1 className="line-clamp-1 font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-700 to-orange-500" title="Title">{title}</h1>
            <p className="line-clamp-2 text-yellow-700/80 " title="Description">{description}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default EventCard;
