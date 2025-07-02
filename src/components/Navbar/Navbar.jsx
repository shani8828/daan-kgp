import React, { useState, useRef, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import ResponsiveMenu from "./ResponsiveMenu";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import { Helmet } from "react-helmet";

export const NavbarLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Our Fam",
    link: "/our-fam",
  },
  {
    name: "Our Bright Minds",
    link: "/our-bright-minds",
  },
];
export const dropdown = [
  {
    name: "ERP Place",
    link: "/erp-place",
  },
  {
    name: "Fresher Place",
    link: "/fresher-place",
  },
  {
    name: "Academic Place",
    link: "/academic-place",
  },
  {
    name: "CDC Intern Place",
    link: "/cdc-intern-place",
  },
];

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef();
  const [showMenu, setShowMenu] = useState(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <nav className="fixed top-0 right-0 w-full z-50 bg-white backdrop-blur-sm text-black shadow-md">
        <div className="bg-gradient-to-r from-red-600 to-red-400 text-white ">
          <div className="container py-[2px] sm:block hidden">
            <div className="flex items-center justify-center">
              <p className="text-sm">
                Have a blast this summer! Wishing you a vacation that's as cool
                as you are!
              </p>
              {/* <p>Summer Vacation</p> */}
            </div>
          </div>
        </div>
        <div className="container py-3 sm:py-0">
          <div className="flex justify-between items-center">
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
                  alt=""
                  width="50px"
                  height="50px"
                  title="DAAN KGP"
                />
              </Link>
            </div>
            <div className="hidden md:block">
              <ul className="flex items-center gap-6 ">
                {NavbarLinks.map((e) => (
                  <li className="py-4">
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "text-red-500 font-semibold border-b-2 border-red-500 rounded-lg"
                          : "text-gray-700 hover:text-red-300 transition-all duration-300"
                      }
                      to={e.link}
                    >
                      {e.name}
                    </NavLink>
                  </li>
                ))}
                <li ref={dropdownRef}>
                  <div
                    onClick={() => setShowDropdown(!showDropdown)}
                    className="cursor-pointer text-gray-700 transition-all duration-300 hover:text-red-300"
                  >
                    {/* KGP Toolkit {showDropdown ? "▲" : "▼"} */}
                    KGP Toolkit {showDropdown ? "↴" : "→"}
                  </div>
                  {showDropdown && (
                    <ul className="p-2 space-y-2 rounded-lg absolute top-[72px] bg-white z-50 shadow-sm shadow-gray-500">
                      {dropdown.map((e, index) => (
                        <li key={index}>
                          <NavLink
                            to={e.link}
                            onClick={() => {
                              setShowMenu(false); // close mobile menu
                              setShowDropdown(false); // close dropdown
                            }}
                            className={({ isActive }) =>
                              isActive
                                ? "text-red-500 font-semibold border-b-2 border-red-500 rounded-lg"
                                : "text-gray-700 hover:text-red-300 transition-all duration-300"
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
            <div className="flex items-center gap-4 justify-evenly">
              <div className="flex justify-between items-center gap-4">
                <a
                  className="bg-gradient-to-tr p-1 from-red-400 to-red-200 border transition-all duration-300 text-black rounded-full text-center hover:bg-gradient-to-tr hover:from-red-500 hover:to-red-300 hover:border-red-600 shadow-sm shadow-gray-600"
                  href="https://www.dakshana.org/"
                  target="_blank"
                  title="Dakshana Foundation"
                >
                  <img
                    src="https://res.cloudinary.com/dubu8yxkm/image/upload/v1751437736/Untitled_design-removebg-preview_elucc3.png"
                    alt=""
                    width="35px"
                    height="35px"
                    title="Dakshana Foundation"
                  />
                </a>
                <a
                  className="bg-gradient-to-tr p-2 from-red-400 to-red-200 border transition-all duration-300 text-black rounded-full text-center hover:bg-gradient-to-tr hover:from-red-500 hover:to-red-300 hover:border-red-600 shadow-sm shadow-gray-600"
                  href="https://erp.iitkgp.ac.in/"
                  target="_blank"
                  title="ERP IIT Kharagpur"
                >
                  ERP
                </a>
              </div>
              {/* Mobile Hamburger icon */}
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
        <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu} />
      </nav>
    </>
  );
};

export default Navbar;
