import { Helmet } from "react-helmet";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

const FamCard = ({ img, name, dept, hall, mail, linkedIn }) => {
  return (
    <>
      <div className="flex flex-col justify-around items-center p-2 md:p-3 lg:p-4 border border-red-400 bg-gradient-to-tr from-red-300 to-red-100 rounded-lg gap-1 md:gap-2">
        <Helmet>
          <link rel="preload" as="image" href={img} />
        </Helmet>
        <img
          title={`${name}'s Image`}
          src={img}
          alt={name}
          className="rounded-lg border border-red-500"
        />
        <h1
          title="Name"
          className="text-lg md:text-xl font-semibold md:font-bold bg-clip-text text-transparent bg-gradient-to-tr from-red-900 to-orange-600 text-center"
        >
          {name}
        </h1>
        <div className=" relative flex justify-between items-center gap-4 w-full">
          <p
            title="Department/Branch"
            className="text-sm md:text-lg text-black/80"
          >
            {dept}
          </p>
          <p
            title="Hall of Residence"
            className="text-black/80 text-sm md:text-lg"
          >
            {hall}
          </p>
        </div>
        <div className="relative flex justify-evenly items-center gap-2 md:gap-4 w-full">
          {mail && (
            <a href={`mailto:${mail}`} target="_blank" title="E-Mail">
              <FaEnvelope className="text-lg md:text-xl lg:text-2xl text-red-700 hover:scale-[1.10] hover:text-red-500 transition-all duration-300" />
            </a>
          )}
          {linkedIn && (
            <a href={linkedIn} target="_blank" title="LinkedIn">
              <FaLinkedin className="text-lg md:text-xl lg:text-2xl text-red-700 hover:scale-[1.10] hover:text-red-500 transition-all duration-300" />
            </a>
          )}
        </div>
      </div>
    </>
  );
};

export default FamCard;
