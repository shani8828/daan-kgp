import React from "react";
import { NavLink } from "react-router-dom";
import { NavbarLinks } from "./Navbar";

const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
  console.log("showMenu", showMenu);
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
                      ? "text-red-500 font-semibold border-b-2 border-red-500 "
                      : "text-gray-700 hover:text-red-300 transition-all duration-300"
                  }
                >
                  {data.name}
                </NavLink>
              </li>
            ))}
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
