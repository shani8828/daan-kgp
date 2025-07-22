import AnimatedCounter from "./AnimatedCounter";
import { VscDiffIgnored } from "react-icons/vsc";
import BubbleBackground from "./BubbleBackground";

const Hero = () => {
  return (
    <div className="bg-transparent h-full">
      <BubbleBackground />
      <div className="h-full flex justify-center items-center p-4 bg-transparent">
        <div className="container grid grid-cols-1 gap-4">
          {/* Header Text */}
          <div className="text-white">
            <p
              data-aos="fade-up"
              className="text-2xl md:text-4xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-red-900 to-red-500 font-bold text-center dark:from-red-400 dark:to-yellow-300"
            >
              Congratulations on being a KGPian Dakshanite!
            </p>
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-sm md:text-md lg:text-lg text-center mt-4 md:mt-6 text-white/80 dark:text-neutral-300"
            >
              Warmest greetings on joining the esteemed community of KGPians and
              proudly embracing your Dakshanite heritage!
            </p>
          </div>

          {/* Count Cards */}
          <div className="flex justify-center items-center gap-3 md:gap-8 mt-8 flex-wrap">
            {/* Card 1 */}
            <div
              data-aos="fade-up"
              data-aos-delay="600"
              className="rounded-xl p-4 md:p-6 lg:p-8 flex flex-col justify-evenly items-center bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 hover:scale-105 transition-transform duration-300 shadow-lg shadow-red-300/30 dark:shadow-red-700/40"
            >
              <span className="text-3xl md:text-4xl lg:text-6xl font-bold flex items-center text-center text-white">
                <AnimatedCounter target={140} duration={2500} /> +
              </span>
              <p className="text-sm text-center text-white/80 dark:text-gray-300">Currently in campus</p>
            </div>

            {/* Card 2 */}
            <div
              data-aos="fade-up"
              data-aos-delay="600"
              className="rounded-xl p-4 md:p-6 lg:p-8 flex flex-col justify-evenly items-center bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 hover:scale-105 transition-all duration-300 shadow-lg shadow-red-300/30 dark:shadow-red-700/40"
            >
              <span className="text-3xl md:text-4xl lg:text-6xl font-bold flex items-center text-center text-white">
                <AnimatedCounter target={45} duration={2500} /> +
              </span>
              <p className="text-sm text-center text-white/80 dark:text-gray-300">Expected to join</p>
            </div>
          </div>

          {/* Flashing Notices */}
          <div
            id="flashing-notices"
            data-aos="fade-right"
            data-aos-delay="900"
            className="scroll-mt-[100px] text-white bg-white/10 dark:bg-white/5 items-center text-left p-4 mt-8 border-red-500 border-r-2 border-b-2 rounded-xl shadow-md shadow-red-400/30 dark:shadow-orange-400/30 backdrop-blur-md transition-all duration-300"
          >
            <h1 className="text-left underline font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500 dark:from-yellow-400 dark:to-orange-400">
              Flashing Notices
            </h1>
            <div className="space-y-2">
              {[
                "Date of Reporting : Jul 16, 2025.",
                "Date of Reporting for Freshers : Jul 22-23, 2025.",
              ].map((text, index) => (
                <div
                  key={index}
                  className="flex items-start gap-2 text-sm md:text-md text-white/90 dark:text-gray-200"
                >
                  <VscDiffIgnored className="translate-y-[3px]" />
                  <div>{text}</div>
                </div>
              ))}

              <div className="flex items-start gap-2 text-sm md:text-md text-white/90 dark:text-gray-200">
                <VscDiffIgnored className="translate-y-[3px]" />
                <div>
                  <a
                    href="https://chat.whatsapp.com/IOtGUjxfUPf7mZ5ehSKx5J?mode=r_c"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-600 transition-colors duration-300"
                  >
                    Whatsapp group{" "}
                  </a>
                  for Freshers with Sophomores.
                </div>
              </div>

              <div className="flex items-start gap-2 text-sm md:text-md text-white/90 dark:text-gray-200">
                <VscDiffIgnored className="translate-y-[3px]" />
                <div>
                  Income Certificate
                  <a
                    href="https://drive.google.com/file/d/1d7_OxbrHCOzuzNQ8rVCCqui9lsEoEdUT/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-600 transition-colors duration-300 "
                  >
                    {" "}
                    Format{" "}
                  </a>
                  for current session.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
