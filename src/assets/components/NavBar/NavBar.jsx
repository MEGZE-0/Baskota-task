import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../logo/Logo.png";
import "../../../App.css";

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 xs:bg-[#323031] xs:h-28 ${
        isScrolled ? "bg-[#323031] bg-opacity-75 h-28 shadow-md" : "bg-inherit"
      }`}
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center mt-14 ml-24 gap-2">
            <a href="#" className="flex items-center">
              <img
                src={Logo}
                alt="Company Logo"
                className="h-20 w-40 xs:w-40 xs:h-20"
              />
            </a>
          </div>
          <div className="hidden md:flex md:items-center md:gap-12">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-2xl mt-12 ">
                <li>
                  <NavLink
                    className="text-gray-200 transition hover:text-[#F4C890]"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="text-gray-200 transition hover:text-[#F4C890]"
                    to="/About"
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="text-gray-200 transition hover:text-[#F4C890]"
                    to="/OurWork"
                  >
                    Our Work
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="text-gray-200 transition hover:text-[#F4C890]"
                    to="/Contact"
                  >
                    Contact
                  </NavLink>
                </li>
                <li className="ml-10">
                  <NavLink
                    className="Button rounded-full bg-[#1A1919] px-5 py-2.5 text-1xl font-medium text-gray-300 transition hover:blue-grey-900"
                    to={"/Contact"}
                  >
                    Start Now
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4"></div>
            <div className="block md:hidden">
              <button
                onClick={toggleMenu}
                className="toggle rounded-lg bg-slate-600-100 p-2 text-gray-600 transition hover:text-gray-600/75"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:hidden absolute top-16 w-50 h-81 right-0 bg-[#1A1919] text-white px-10 py-2 shadow-md`}
        >
          <ul className="flex flex-col gap-4 text-lg text-center">
            <li>
              <NavLink
                className="text-gray-200 transition hover:text-[#F4C890]"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="pt-3">
              <NavLink
                className="text-gray-200 transition hover:text-[#F4C890]"
                to="/About"
              >
                About
              </NavLink>
            </li>
            <li className="pt-3">
              <NavLink
                className="text-gray-200 transition hover:text-[#F4C890]"
                to="/OurWork"
              >
                Our Work
              </NavLink>
            </li>
            <li className="pt-3">
              <NavLink
                className="text-gray-200 transition hover:text-[#F4C890]"
                to="/Contact"
              >
                Contact
              </NavLink>
            </li>
            <li className="mt-5">
              <NavLink
                className="Button border-2 hover:border-none border-gray-600 bg-black px-2 py-2.5 text-1xl font-medium text-gray-300 transition hover:blue-grey-900"
                to={"/Contact"}
              >
                Start Now
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
