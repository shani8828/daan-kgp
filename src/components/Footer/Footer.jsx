import React from "react";
import {
  FaLongArrowAltRight,
  FaMapMarkedAlt,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaRegCopyright,
} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { Link } from "react-router-dom";

const FooterLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Our Fam",
    link: "/our-fam",
  },
  {
    title: "Fresher Place",
    link: "/fresher-place",
  },
  {
    title: "Our Bright Minds",
    link: "/our-bright-minds",
  },
];

const Footer = () => {
  return (
    <>
      <div className=" dark:bg-gray-950 py-10 relative overflow-hidden">
        {/* <video
          autoPlay
          loop
          muted
          className="absolute right-0 top-0 h-full overflow-hidden w-full object-cover z-[-1]"
        >
          <source src="https://res.cloudinary.com/dcwwptwzt/video/upload/v1746467353/Screen_Recording_2025-04-29_045145_ixmnjn.mp4" type="video/mp4" />
        </video> */}
        <div className="container">
          <div className="grid md:grid-cols-3 pt-5 bg-gradient-to-tr from-red-200 to-red-100 border border-red-300 backdrop-blur-sm rounded-t-xl">
            <div className="pt-8 px-4">
              <h1 className="flex items-center gap-3 text-xl sm:text-3xl font-bold text-justify sm:text-left">
                <img
                  src="https://res.cloudinary.com/dcwwptwzt/image/upload/v1747687457/DAAN_KGP_Logo_ie2g9d.webp"
                  alt=""
                  width="60px"
                  height="60px"
                  // className="max-h-[60px]"
                />
              </h1>
              <p className="text-md">
                DAAN KGP is a well-structured DakshanA Alumni Network
                established at the Indian Institute of Technology, Kharagpur.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 col-span-2 md:pl-10">
              <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl font-bold text-justify sm:text-left mb-3">
                    Quick Ways
                  </h1>
                  <ul className="flex flex-col gap-3">
                    {FooterLinks.map((link) => (
                      <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-700 dark:text-gray-200">
                        <Link
                          to={link.link}
                          onClick={() => window.scrollTo(0, 0)}
                          className="flex gap-1 items-center"
                        >
                          <span>
                            <FaLongArrowAltRight />
                          </span>
                          <span>{link.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="py-8 px-4">
                <h1 className="text-xl font-bold text-justify sm:text:left mb-3">
                  Reach Out
                </h1>
                <div>
                  <a
                    href="https://maps.app.goo.gl/SJVVbSZG5igkX1hXA"
                    target="_blank"
                    title="Address"
                    className="flex items-center gap-3 transition-all duration-300 hover:!text-primary hover:italic"
                  >
                    <FaMapMarkedAlt />
                    <p>IIT Kharagpur, West Bengal, 721302</p>
                  </a>

                  {/* <a
                    href="tel:+919555439091"
                    target="_blank"
                    className="flex items-center gap-3 mt-3 transition-all duration-300 hover:!text-primary hover:italic"
                  >
                    <MdAddCall />
                    <p>+91 9555439091</p>
                  </a> */}
                  <a
                  
                    href="mailto:cr.daan.kgp@gmail.com"
                    target="_blank"
                    title="E-Mail"
                    className="flex items-center gap-1 md:gap-3 mt-3 transition-all duration-300 hover:!text-primary hover:italic"
                  >
                    <IoIosMail />
                    <p>cr.daan.kgp@gmail.com</p>
                  </a>
                </div>
                {/* social handles */}
                <div>
                  <h1 className="font-semibold mt-3">DAAN Officials: </h1>
                  <div className="flex w-[250px] md:w-[200px] justify-evenly items-center gap-6 mt-2">
                    <a
                      href="https://www.instagram.com/daan.official1?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                      target="_blank"
                      title="Instagram DAAN"
                    >
                      <FaInstagram className="text-3xl duration-300 hover:!text-primary hover:-translate-y-1 hover:shadow-lg bg-transparent rounded-lg hover:shadow-red-400" />
                    </a>
                    <a
                      href="https://www.facebook.com/share/g/1HgK8eLe43/"
                      target="_blank"
                      title="Facebook DAAN"
                    >
                      <FaFacebook className="text-3xl duration-300 hover:!text-primary  hover:-translate-y-1 hover:shadow-lg bg-transparent rounded-full hover:shadow-red-400" />
                    </a>
                    <a
                      href="https://www.linkedin.com/groups/4920035/"
                      target="_blank"
                      title="LinkedIn DAAN"
                    >
                      <FaLinkedin className="text-3xl duration-300 hover:!text-primary hover:-translate-y-1 hover:shadow-lg bg-transparent rounded-md hover:shadow-red-400" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="text-center py-5 border-t-2 border-gray-300/50 bg-primary text-gray-900 flex justify-center items-center">
              <FaRegCopyright />Amplifier | All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
