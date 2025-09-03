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
  { title: "Home", link: "/" },
  { title: "Our Fam", link: "/our-fam" },
  { title: "Fresher Place", link: "/fresher-place" },
  { title: "Our Bright Minds", link: "/our-bright-minds" },
];

const SocialLinks = [
  {
    href: "https://www.instagram.com/daan.official1?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    title: "Instagram DAAN",
    icon: <FaInstagram />,
  },
  {
    href: "https://www.facebook.com/share/g/1HgK8eLe43/",
    title: "Facebook DAAN",
    icon: <FaFacebook />,
  },
  {
    href: "https://www.linkedin.com/groups/4920035/",
    title: "LinkedIn DAAN",
    icon: <FaLinkedin />,
  },
];

const Footer = () => (
  <footer className="bg-gray-50 dark:bg-gray-950 py-10">
    <div className="container">
      {/* Main Content */}
      <div className="grid md:grid-cols-3 pt-5 bg-gradient-to-tr from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 border border-gray-300 dark:border-gray-700 backdrop-blur-sm rounded-t-xl shadow-gray-600">
        
        {/* Logo & About */}
        <div className="pt-8 px-4">
          <img
            src="https://res.cloudinary.com/dubu8yxkm/image/upload/v1754643304/Logo_mnu1fh.avif"
            alt="DAAN KGP Logo"
            width="250"
            height="100"
          />
          <p className="mt-6 text-gray-900 dark:text-gray-400">
            DAAN KGP is a well-structured Dakshana Alumni Network established at the Indian Institute of Technology, Kharagpur.
          </p>
        </div>

        {/* Links & Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 col-span-2 md:pl-10">
          {/* Quick Links */}
          <div className="py-8 px-4">
            <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-200">Quick Ways</h2>
            <ul className="flex flex-col gap-3">
              {FooterLinks.map(({ title, link }) => (
                <li key={title} className="hover:translate-x-1 duration-300 text-gray-900 dark:text-gray-400 hover:text-primary dark:hover:text-gray-200">
                  <Link
                    to={link}
                    onClick={() => window.scrollTo(0, 0)}
                    className="flex items-center gap-1"
                  >
                    <FaLongArrowAltRight /> {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="py-8 px-4">
            <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-200">Reach Out</h2>
            <div className="flex flex-col gap-3 text-gray-900 dark:text-gray-400">
              <a
                href="https://maps.app.goo.gl/SJVVbSZG5igkX1hXA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-primary dark:hover:text-gray-200 hover:italic"
              >
                <FaMapMarkedAlt /> <span>IIT Kharagpur, West Bengal, 721302</span>
              </a>
              <a
                href="mailto:cr.daan.kgp@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-primary dark:hover:text-gray-200 hover:italic"
              >
                <IoIosMail /> <span>cr.daan.kgp@gmail.com</span>
              </a>
            </div>

            {/* Socials */}
            <h3 className="font-semibold mt-4 text-gray-900 dark:text-gray-200">DAAN Officials:</h3>
            <div className="flex gap-6 mt-2">
              {SocialLinks.map(({ href, title, icon }) => (
                <a
                  key={title}
                  href={href}
                  title={title}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl text-gray-900 dark:text-gray-400 transition duration-300 hover:text-primary dark:hover:text-gray-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-red-400 dark:hover:shadow-gray-300 rounded-lg"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center py-5 border-t-2 border-gray-400 bg-primary dark:bg-gray-900 text-gray-900 dark:text-gray-400 flex justify-center items-center gap-2">
        <FaRegCopyright /> Amplifier | All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
