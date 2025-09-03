import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { NavbarLinks } from "../Navbar/JSFiles/NavbarData";

const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
  console.log("showMenu", showMenu);
  const menuRef = useRef();
  useEffect(() => {
    const handleClickOutsideMenu = (event) => {
      // Close menu if click is outside the menu
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutsideMenu);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideMenu);
    };
  }, [setShowMenu]);

  

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div
      ref={menuRef}
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-20 flex h-[95vh] w-[75%] flex-col justify-between bg-gray-50 dark:bg-gray-800 dark:text-gray-400 px-8 pb-6 pt-16 text-gray-900 transition-all duration-300 md:hidden rounded-r-xl shadow-md`}
    >
      <div className="card">
        <div className="w-full flex justify-between items-center">
          <a
            className="bg-gray-200 dark:bg-gray-700 p-1 rounded-lg border border-gray-300 dark:border-gray-600"
            href="https://www.dakshana.org/"
            target="_blank"
            title="Dakshana Foundation"
          >
            <img
              src="https://res.cloudinary.com/dcwwptwzt/image/upload/v1754520270/DakshanaLogo_ouuxyh.avif"
              alt="Dakshana Foundation"
              width="50px"
              height="50px"
            />
          </a>
          <a
            className="bg-gray-200 dark:bg-gray-700 p-1 rounded-lg border border-gray-300 dark:border-gray-600 w-[50px] h-[50px] flex justify-center items-center text-gray-900 dark:text-gray-400"
            href="https://erp.iitkgp.ac.in/"
            target="_blank"
            title="ERP IIT Kharagpur"
          >
            ERP
          </a>
        </div>
        <nav className="mt-12">
          <ul className="space-y-4 text-xl">
            {NavbarLinks.map((data) => (
              <li>
                <NavLink
                  to={data.link}
                  onClick={() => setShowMenu(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "text-red-500 dark:text-gray-200 font-semibold border-b-2 border-red-500 dark:border-gray-200 rounded-lg"
                      : "text-gray-700 dark:text-gray-400 hover:text-red-300 dark:hover:text-gray-300 transition-all duration-300"
                  }
                >
                  {data.name}
                </NavLink>
              </li>
            ))}
            
          </ul>
        </nav>
      </div>
      <div className="footer">
        {/* <h1>
          Made with 💖 by Amplifier
        </h1> */}
        {/* <div className="w-full flex justify-between items-center">
          <a
            className="bg-gray-200 p-1 rounded-lg border border-gray-300"
            href="https://www.dakshana.org/"
            target="_blank"
            title="Dakshana Foundation"
          >
            <img
              src="https://res.cloudinary.com/dcwwptwzt/image/upload/v1754520270/DakshanaLogo_ouuxyh.avif"
              alt="Dakshana Foundation"
              width="50px"
              height="50px"
            />
          </a>
          <a
            className="bg-gray-200 p-1 rounded-lg border border-gray-300 w-[50px] h-[50px] flex justify-center items-center"
            href="https://erp.iitkgp.ac.in/"
            target="_blank"
            title="ERP IIT Kharagpur"
          >
            ERP
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default ResponsiveMenu;
