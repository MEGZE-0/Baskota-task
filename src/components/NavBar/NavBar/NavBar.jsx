import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../logo/Logo.png"; // Make sure this path is correct

export function NavBar() {
  // State to manage the visibility of the mobile menu and dropdown
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to toggle the dropdown menu
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 w-full shadow-md z-50">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <a className="text-teal-600 text-xl font-semibold" href="#">
              <span className="sr-only">Home</span>
              <img className="h-10" src={Logo} alt="Logo" />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:gap-12">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <NavLink className="text-gray-500 transition hover:text-teal-600" to="/about">
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink className="text-gray-500 transition hover:text-teal-600" to="/careers">
                    Careers
                  </NavLink>
                </li>
                <li>
                  <NavLink className="text-gray-500 transition hover:text-teal-600" to="/history">
                    History
                  </NavLink>
                </li>
                {/* Dropdown Menu */}
                <li className="relative" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                  <NavLink className="text-gray-500 transition hover:text-teal-600" to="/services">
                    Services
                  </NavLink>
                  {isDropdownOpen && (
                    <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10">
                      <ul className="text-sm">
                        <li>
                          <NavLink className="block px-4 py-2 text-gray-700 hover:text-teal-600" to="/services/web-development">
                            Web Development
                          </NavLink>
                        </li>
                        <li>
                          <NavLink className="block px-4 py-2 text-gray-700 hover:text-teal-600" to="/services/mobile-app">
                            Mobile App
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>
                <li>
                  <NavLink className="text-gray-500 transition hover:text-teal-600" to="/projects">
                    Projects
                  </NavLink>
                </li>
                <li>
                  <NavLink className="text-gray-500 transition hover:text-teal-600" to="/blog">
                    Blog
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <a className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow transition hover:bg-teal-700" href="#">
                Login
              </a>
              <a className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:bg-gray-200" href="#">
                Register
              </a>
            </div>

            {/* Mobile Menu Icon (Hamburger) */}
            <div className="block md:hidden">
              <button
                className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                onClick={toggleMenu}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-100 p-4">
          <nav aria-label="Mobile" className="bg-gray-100 p-4">
            <ul className="flex flex-col gap-4">
              <li>
                <NavLink className="text-gray-500 transition hover:text-teal-600" to="/about">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink className="text-gray-500 transition hover:text-teal-600" to="/careers">
                  Careers
                </NavLink>
              </li>
              <li>
                <NavLink className="text-gray-500 transition hover:text-teal-600" to="/history">
                  History
                </NavLink>
              </li>
              <li>
                <NavLink className="text-gray-500 transition hover:text-teal-600" to="/services">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink className="text-gray-500 transition hover:text-teal-600" to="/projects">
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink className="text-gray-500 transition hover:text-teal-600" to="/blog">
                  Blog
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
