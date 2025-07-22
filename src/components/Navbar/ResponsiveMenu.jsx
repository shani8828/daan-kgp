import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { NavbarLinks, dropdown } from "./Navbar";

const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef();

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

  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between 
      bg-white/95 dark:bg-black/90 text-black dark:text-white px-8 pb-6 pt-16 
      transition-all duration-200 md:hidden rounded-r-xl shadow-md backdrop-blur-xl 
      border-r border-white/20 dark:border-white/10`}
    >
      <div className="card">
        <nav className="mt-12">
          <ul className="space-y-4 text-xl">
            {NavbarLinks.map((data) => (
              <li key={data.name}>
                <NavLink
                  to={data.link}
                  onClick={() => setShowMenu(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "text-red-500 dark:text-yellow-400 font-semibold border-b-2 border-red-500 dark:border-yellow-500 rounded-lg"
                      : "text-gray-700 dark:text-gray-300 hover:text-red-400 dark:hover:text-yellow-200 transition-all duration-300"
                  }
                >
                  {data.name}
                </NavLink>
              </li>
            ))}

            <li ref={dropdownRef}>
              <div
                onClick={() => setShowDropdown(!showDropdown)}
                className="cursor-pointer text-gray-700 dark:text-gray-300 dark:hover:text-yellow-200 hover:text-red-300 transition-all duration-300"
              >
                KGP Toolkit {showDropdown ? "↴" : "→"}
              </div>

              {showDropdown && (
                <ul
                  className="p-2 space-y-2 rounded-lg relative top-[10px] 
                  bg-white/30 dark:bg-white/10 text-black dark:text-white 
                  border border-white/30 dark:border-white/10 
                  backdrop-blur-md z-50 shadow-lg shadow-gray-500"
                >
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
                            ? "text-red-500 dark:text-yellow-300 font-semibold border-b-2 border-red-500 dark:border-yellow-300 rounded-lg"
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
        </nav>
      </div>

      <div className="flex justify-between items-center gap-4">
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
    </div>
  );
};

export default ResponsiveMenu;
