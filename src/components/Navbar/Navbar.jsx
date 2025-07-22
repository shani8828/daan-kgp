import React, { useState, useRef, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import ResponsiveMenu from "./ResponsiveMenu";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import { Helmet } from "react-helmet";
import { Moon, Sun } from "lucide-react";

export const NavbarLinks = [
  { name: "Home", link: "/" },
  { name: "Our Fam", link: "/our-fam" },
  { name: "Our Bright Minds", link: "/our-bright-minds" },
];

export const dropdown = [
  { name: "ERP Place", link: "/erp-place" },
  { name: "Fresher Place", link: "/fresher-place" },
  { name: "Academic Place", link: "/academic-place" },
  { name: "CDC Intern Place", link: "/cdc-intern-place" },
];

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef();
  const [showMenu, setShowMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <>
      <nav className="fixed top-0 right-0 w-full z-50 bg-white/90 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 text-black dark:text-white shadow-md">
        {/* MARQUEE */}
        <div className="bg-gradient-to-r from-red-600 to-red-400 dark:from-red-500 dark:to-yellow-300 text-white overflow-hidden">
          <div className="container py-[2px] sm:block hidden relative">
            <div className="animate-marquee whitespace-nowrap">
              <p className="text-sm inline-block px-4">
                Freshers, fasten your seatbelts! Say hello to the land of
                greenery, night canteens, and crazy innovation – welcome to KGP!
              </p>
            </div>
          </div>
        </div>

        {/* MAIN NAV */}
        <div className="container py-3 sm:py-0">
          <div className="flex justify-between items-center">
            {/* LOGO */}
            <div className="flex items-center gap-4 font-bold text-2xl">
              <Link to={"/"} onClick={() => window.scrollTo(0, 0)}>
                <Helmet>
                  <link
                    rel="preload"
                    as="image"
                    href="https://res.cloudinary.com/dcwwptwzt/image/upload/v1747687457/DAAN_KGP_Logo_ie2g9d.webp"
                  />
                </Helmet>
                <img
                  src="https://res.cloudinary.com/dcwwptwzt/image/upload/v1747687457/DAAN_KGP_Logo_ie2g9d.webp"
                  alt="DAAN-KGP"
                  width="50px"
                  height="50px"
                  title="DAAN KGP"
                />
              </Link>
            </div>

            {/* NAV LINKS */}
            <div className="hidden md:block">
              <ul className="flex items-center gap-6">
                {NavbarLinks.map((e) => (
                  <li className="py-4" key={e.name}>
                    <NavLink
                      to={e.link}
                      className={({ isActive }) =>
                        isActive
                          ? "text-red-500 dark:text-yellow-300 font-semibold border-b-2 border-red-500 dark:border-yellow-400 rounded-lg"
                          : "text-gray-700 dark:text-gray-300 hover:text-red-400 dark:hover:text-yellow-200 transition-all duration-300"
                      }
                    >
                      {e.name}
                    </NavLink>
                  </li>
                ))}

                {/* DROPDOWN */}
                <li ref={dropdownRef}>
                  <div
                    onClick={() => setShowDropdown(!showDropdown)}
                    className="cursor-pointer text-gray-700 dark:text-gray-300  transition-all duration-300 hover:text-red-400 dark:hover:text-yellow-200"
                  >
                    KGP Toolkit {showDropdown ? "↴" : "→"}
                  </div>
                  {showDropdown && (
                    <ul className="p-2 space-y-2 rounded-lg absolute top-[72px] bg-white/90 dark:bg-black/90 border text-black dark:text-white border-white/30 dark:border-white/10 backdrop-blur-md z-50 shadow-sm shadow-gray-500">
                      {dropdown.map((e, index) => (
                        <li key={index}>
                          <NavLink
                            to={e.link}
                            onClick={() => setShowDropdown(false)}
                            className={({ isActive }) =>
                              isActive
                                ? "text-red-500 dark:text-yellow-300 font-semibold border-b-2 border-red-500 dark:border-yellow-400 rounded-lg"
                                : "text-gray-700 dark:text-gray-300 hover:text-red-400 dark:hover:text-yellow-200 transition-all duration-300"
                            }
                          >
                            {e.name}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              </ul>
            </div>

            {/* RIGHT ICONS */}
            <div className="flex items-center gap-4 justify-evenly">
              {/* External Links */}
              <div className="md:flex justify-between items-center gap-4 hidden">
                <a
                  className="bg-gradient-to-tr p-1 dark:from-yellow-300 dark:to-yellow-100 from-red-500 to-red-300 border transition-all duration-300 text-black dark:text-white rounded-full hover:border-red-600 shadow-sm shadow-gray-600"
                  href="https://www.dakshana.org/"
                  target="_blank"
                  rel="noreferrer"
                  title="Dakshana Foundation"
                >
                  <img
                    src="https://res.cloudinary.com/dubu8yxkm/image/upload/v1751437736/Untitled_design-removebg-preview_elucc3.png"
                    alt="Dakshana"
                    width="35px"
                    height="35px"
                  />
                </a>
                <a
                  className="bg-gradient-to-tr p-2 dark:from-yellow-300 dark:to-yellow-100 from-red-500 to-red-300 border transition-all duration-300 dark:text-black text-white rounded-full hover:border-red-600 shadow-sm shadow-gray-600"
                  href="https://erp.iitkgp.ac.in/"
                  target="_blank"
                  rel="noreferrer"
                  title="ERP IIT Kharagpur"
                >
                  ERP
                </a>
              </div>

              {/* DARK MODE TOGGLE */}
              {/* <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 transition duration-300 hover:scale-110"
                title="Toggle Theme"
              >
                {darkMode ? (
                  <Sun className="text-gray-200" size={22} />
                ) : (
                  <Moon className="text-gray-800" size={22} />
                )}
              </button> */}

              {/* Mobile Menu Icon */}
              <div className="md:hidden block">
                {showMenu ? (
                  <HiMenuAlt1
                    onClick={toggleMenu}
                    className="cursor-pointer transition-all duration-300"
                    size={30}
                  />
                ) : (
                  <HiMenuAlt3
                    onClick={toggleMenu}
                    className="cursor-pointer transition-all duration-300"
                    size={30}
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Responsive Menu */}
        <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu} />
      </nav>
    </>
  );
};

export default Navbar;
