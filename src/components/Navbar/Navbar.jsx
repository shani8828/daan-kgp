import React, { useState, useRef, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import ResponsiveMenu from "./ResponsiveMenu";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import { FiSun, FiMoon } from "react-icons/fi";
import { Helmet } from "react-helmet";
import { dropdown, NavbarLinks } from "./JSFiles/NavbarData";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [theme, setTheme] = useState("light");
  const [showMenu, setShowMenu] = useState(false);
  const dropdownRef = useRef();

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

  // Load theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else {
      // fallback: system preference
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setTheme(prefersDark ? "dark" : "light");
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, []);
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <>
      <nav className="fixed top-0 right-0 w-full z-50 bg-gray-50 dark:bg-gray-900 backdrop-blur-sm text-gray-900 dark:text-gray-200 shadow-md dark:shadow-lg">
        <div className="bg-gradient-to-r from-red-600 to-red-400 dark:from-gray-900 dark:to-gray-600 text-gray-200 dark:text-gray-300 overflow-hidden">
          <div className="container py-[2px] sm:block hidden relative">
            <div className="animate-marquee whitespace-nowrap">
              <p className="text-sm inline-block px-4">
                Grey skies, green vibes, and that unmistakable KGP spark ~
                monsoon season is here to charge us up.
              </p>
            </div>
          </div>
        </div>

        <div className="container py-3 sm:py-0">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-4 font-bold text-2xl">
              <Link to={"/"} onClick={() => window.scrollTo(0, 0)}>
                <Helmet>
                  <link
                    rel="preload"
                    as="image"
                    href="https://res.cloudinary.com/dubu8yxkm/image/upload/v1754643304/Logo_mnu1fh.avif"
                  />
                </Helmet>
                <img
                  src="https://res.cloudinary.com/dubu8yxkm/image/upload/v1754643304/Logo_mnu1fh.avif"
                  alt=""
                  width="125px"
                  height="50px"
                  title="DAAN KGP"
                />
              </Link>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:block">
              <ul className="flex items-center gap-6">
                {NavbarLinks.map((e) => (
                  <li className="py-4" key={e.name}>
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "text-red-500 font-semibold border-b-2 border-red-500 rounded-lg dark:text-gray-200 dark:border-gray-200"
                          : "text-gray-700 hover:text-red-300 transition-all duration-300 dark:text-gray-400 dark:hover:text-gray-300"
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
                    className="cursor-pointer text-gray-700 dark:text-gray-400 transition-all duration-300 hover:text-red-300 dark:hover:text-gray-300"
                  >
                    KGP Toolkit {showDropdown ? "↴" : "→"}
                  </div>
                  {showDropdown && (
                    <ul className="p-2 space-y-2 rounded-lg absolute top-[72px] bg-gray-100 dark:bg-gray-900 z-50 shadow-sm dark:shadow-lg shadow-gray-500 dark:border dark:border-gray-700">
                      {dropdown.map((e, index) => (
                        <li key={index}>
                          <NavLink
                            to={e.link}
                            onClick={() => {
                              setShowMenu(false);
                              setShowDropdown(false);
                            }}
                            className={({ isActive }) =>
                              isActive
                                ? "text-red-500 font-semibold border-b-2 border-red-500 rounded-lg dark:text-gray-200 dark:border-gray-200"
                                : "text-gray-700 hover:text-red-300 transition-all duration-300 dark:text-gray-400 dark:hover:text-gray-300"
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

            {/* Right Side */}
            <div className="flex items-center gap-4 justify-evenly">
              <div className="md:flex justify-between items-center gap-4 hidden">
                <a
                  className="bg-gradient-to-tr p-1 from-gray-100 to-gray-200 dark:from-gray-950 dark:to-gray-800 border transition-all duration-300 text-gray-900 dark:text-gray-400 rounded-lg text-center hover:bg-gradient-to-tr hover:from-gray-300 hover:to-gray-400 dark:hover:from-gray-900 dark:hover:to-gray-700 hover:border-gray-500 dark:border-gray-600 dark:hover:border-gray-500 shadow-sm shadow-gray-600 dark:shadow-gray-500"
                  href="https://www.dakshana.org/"
                  target="_blank"
                  title="Dakshana Foundation"
                >
                  <img
                    src="https://res.cloudinary.com/dcwwptwzt/image/upload/v1754520270/DakshanaLogo_ouuxyh.avif"
                    alt=""
                    width="35px"
                    height="35px"
                    title="Dakshana Foundation"
                  />
                </a>
                <a
                  className="bg-gradient-to-tr p-2 text-sm from-gray-100 to-gray-200 dark:from-gray-950 dark:to-gray-800 border transition-all duration-300 text-gray-900 dark:text-gray-400 rounded-lg text-center hover:bg-gradient-to-tr hover:from-gray-300 hover:to-gray-400 dark:hover:from-gray-900 dark:hover:to-gray-700 hover:border-gray-500 dark:border-gray-600 dark:hover:border-gray-500 shadow-sm  shadow-gray-600 dark:shadow-gray-500"
                  href="https://erp.iitkgp.ac.in/"
                  target="_blank"
                  title="ERP IIT Kharagpur"
                >
                  ERP
                </a>
              </div>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 transition-all duration-300 text-gray-900 dark:text-gray-400"
                aria-label="Toggle theme"
              >
                {theme === "light" ? <FiMoon size={20} /> : <FiSun size={20} />}
              </button>

              {/* Mobile Icon */}
              <div className="md:hidden block">
                {showMenu ? (
                  <HiMenuAlt1
                    onClick={toggleMenu}
                    className="cursor-pointer transition-all duration-300 text-gray-900 dark:text-gray-200"
                    size={30}
                  />
                ) : (
                  <HiMenuAlt3
                    onClick={toggleMenu}
                    className="cursor-pointer transition-all duration-300 text-gray-900 dark:text-gray-400"
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
