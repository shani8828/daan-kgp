import { Helmet } from "react-helmet";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

const FamCard = ({ img, name, dept, hall, mail, linkedIn }) => {
  return (
    <>
      <div className="flex flex-col justify-around items-center p-2 md:p-3 lg:p-4 border border-gray-400 dark:border-gray-900 bg-gradient-to-tr from-gray-100 dark:from-gray-700 to-gray-200 dark:to-gray-800 rounded-2xl gap-1 md:gap-2 shadow-sm hover:shadow-red-200 dark:hover:shadow-gray-500 transition-all duration-300">
        <Helmet>
          <link rel="preload" as="image" href={img} />
        </Helmet>
        <img
          title={`${name}'s Image`}
          src={img}
          alt={name}
          className="rounded-lg border border-gray-400 dark:border-gray-600"
        />
        <h1
          title="Name"
          className="text-lg md:text-xl font-semibold md:font-bold bg-clip-text text-transparent bg-gradient-to-tr from-red-900 dark:from-gray-600 to-orange-600 dark:to-gray-200 text-center"
        >
          {name}
        </h1>
        <div className=" relative flex justify-between items-center gap-4 w-full">
          <p
            title="Department/Branch"
            className="text-sm md:text-lg text-gray-900 dark:text-gray-500"
          >
            {dept}
          </p>
          <p
            title="Hall of Residence"
            className="text-gray-900 dark:text-gray-500 text-sm md:text-lg"
          >
            {hall}
          </p>
        </div>
        <div className="relative flex justify-evenly items-center gap-2 md:gap-4 w-full">
          {mail && (
            <a href={`mailto:${mail}`} target="_blank" title="E-Mail">
              <FaEnvelope className="text-lg md:text-xl lg:text-2xl text-red-700 dark:text-gray-400 hover:scale-[1.10] hover:text-red-500 transition-all duration-300" />
            </a>
          )}
          {linkedIn && (
            <a href={linkedIn} target="_blank" title="LinkedIn">
              <FaLinkedin className="text-lg md:text-xl lg:text-2xl text-red-700 dark:text-gray-400 hover:scale-[1.10] hover:text-red-500 transition-all duration-300" />
            </a>
          )}
        </div>
      </div>
    </>
  );
};

export default FamCard;
