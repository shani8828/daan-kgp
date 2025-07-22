import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { NavbarLinks, dropdown } from "./Navbar";

const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
  console.log("showMenu", showMenu);
  const [showDropdown, setShowDropdown] = useState(false);
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

  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white dark:bg-gray-900 dark:text-white px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md`}
    >
      <div className="card">
        <nav className="mt-12">
          <ul className="space-y-4 text-xl">
            {NavbarLinks.map((data) => (
              <li>
                <NavLink
                  to={data.link}
                  onClick={() => setShowMenu(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "text-red-500 font-semibold border-b-2 border-red-500 rounded-lg"
                      : "text-gray-700 hover:text-red-300 transition-all duration-300"
                  }
                >
                  {data.name}
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
                <ul className="p-2 space-y-2 rounded-lg relative top-[10px] bg-white z-50 shadow-lg shadow-gray-500">
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
        </nav>
      </div>
      {/* <div className="footer">
        <h1>
          Made with 💖 by Amplifier
        </h1>
      </div> */}
    </div>
  );
};

export default ResponsiveMenu;
