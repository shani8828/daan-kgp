import { FaDownload } from "react-icons/fa";

const DownloadBtn = ({ catching, cover, heading, href }) => (
  <div className="border border-red-400 dark:border-gray-600 bg-gradient-to-tr from-red-300 dark:from-gray-900 to-red-100 dark:to-gray-800 p-4 m-4 rounded-lg flex flex-col justify-evenly items-start gap-2 ">
    <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 dark:text-gray-400">
      {catching}
    </h1>
    <p className="text-sm text-black/75 dark:text-gray-500">{cover}</p>

    <a
      href={href}
      download={heading}
      target="_blank"
      rel="noopener noreferrer"
      className="border dark:border-gray-600 shadow-sm shadow-gray-500 p-2 rounded-lg flex gap-2 items-center hover:bg-gradient-to-tr hover:from-red-500 dark:hover:from-gray-800 hover:to-red-300 dark:hover:to-gray-700 hover:border-red-600 dark:hover:border-gray-200 transition-all duration-300"
    >
      <span>{heading}</span>
      <FaDownload />
    </a>
  </div>
);

export default DownloadBtn;
