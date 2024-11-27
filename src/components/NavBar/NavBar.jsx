import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo/Logo.png";
export function NavBar() {
  return (
    <header className=" fixed  top-0 left-0 right-0 w-full shadow-md ">
      <div className=" px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <a className="text-teal-600 text-xl font-semibold" href="#">
              <span className="sr-only">Home</span>
              <img className="m-auto" src={Logo} alt=""  />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:gap-12">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <NavLink
                    className="text-gray-500 transition hover:text-teal-600"
                    to="/about"
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="text-gray-500 transition hover:text-teal-600"
                    to="/careers"
                  >
                    Careers
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="text-gray-500 transition hover:text-teal-600"
                    to="/history"
                  >
                    History
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="text-gray-500 transition hover:text-teal-600"
                    to="/services"
                  >
                    Services
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="text-gray-500 transition hover:text-teal-600"
                    to="/projects"
                  >
                    Projects
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="text-gray-500 transition hover:text-teal-600"
                    to="/blog"
                  >
                    Blog
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>

          {/* Login/Register and Mobile Menu Button */}
          <div className="flex items-center gap-4">
            {/* Login/Register Buttons */}
            <div className="sm:flex sm:gap-4">
              <a
                className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow transition hover:bg-teal-700"
                href="#"
              >
                Login
              </a>
              <a
                className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:bg-gray-200"
                href="#"
              >
                Register
              </a>
            </div>

            {/* Mobile Menu Icon (Hamburger) */}
            <div className="block md:hidden">
              <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
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
      </div>
    </header>
  );
}
