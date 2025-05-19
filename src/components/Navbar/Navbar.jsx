import React, { useState } from "react";
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
    name: "Fresher Place",
    link: "/fresher-place",
  },
  {
    name: "Our Bright Minds",
    link: "/our-bright-minds",
  },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

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
                    href="https://res.cloudinary.com/dcwwptwzt/image/upload/v1746467915/DAAN_KGP_Logo_bhdfxo.png"
                  />
                </Helmet>
                <img
                  src="https://res.cloudinary.com/dcwwptwzt/image/upload/v1746467915/DAAN_KGP_Logo_bhdfxo.png"
                  alt=""
                  className="h-16"
                  title="DAAN KGP"
                />
              </Link>
              {/* <span>TCJ Tourism</span> */}
            </div>
            <div className="hidden md:block">
              <ul className="flex items-center gap-6 ">
                <li className="py-4">
                  <NavLink to="/" activeClassName="active">
                    Home
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink to="/our-fam" activeClassName="active">
                    Our Fam
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink to="/fresher-place" activeClassName="active">
                    Fresher Place
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink to="/our-bright-minds" activeClassName="active">
                    Our Bright Minds
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-4 justify-evenly">
              <a
                className="bg-gradient-to-tr p-2 from-red-400 to-red-200 border transition-all duration-300 text-black rounded-xl text-center hover:bg-gradient-to-tr hover:from-red-500 hover:to-red-300 hover:border-red-600 shadow-sm shadow-gray-600"
                href="https://www.dakshana.org/"
                target="_blank"
                title="Dakshana Foundation"
              >
                Official Dakshana Page
              </a>
              {/* Mobile Hamburger icon */}
              <div className="md:hidden block">
                {showMenu ? (
                  <HiMenuAlt1
                    onClick={toggleMenu}
                    className=" cursor-pointer transition-all"
                    size={30}
                  />
                ) : (
                  <HiMenuAlt3
                    onClick={toggleMenu}
                    className="cursor-pointer transition-all"
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
