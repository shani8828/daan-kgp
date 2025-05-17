import React from "react";
import { FaDownload } from "react-icons/fa";

const DownloadBtn = ({ catching, cover, heading, href }) => {
  return (
    <>
      <div className="border border-red-400 bg-gradient-to-tr from-red-300 to-red-100 p-4 m-4 rounded-lg flex flex-col justify-evenly items-start gap-2 ">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">{catching}</h1>
        <h2 className="text-sm text-black/75">{cover}</h2>
        <a
          href={href}
          download={heading}
          target="_blank"
          className="border shadow-sm shadow-gray-500 p-2 rounded-lg flex gap-2 items-center hover:bg-gradient-to-tr hover:from-red-500 hover:to-red-300 hover:border-red-600 transition-all duration-300"
        >
            <div className="flex ">{heading}</div><FaDownload />
        </a>
      </div>
    </>
  );
};

export default DownloadBtn;
