import { NavLink } from "react-router-dom";
import ashicon from "../../imges/Ash-icon.png";
export default function Footer() {
  return (
    <div className="bg-[#1A1919]">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="flex flex-wrap items-center">
            <div className="xs:m-auto self-center text-left text-lg font-semibold whitespace-nowrap  text-gray-500">
              <p className="text-2xl">Email:</p>
              <p>ash.innovations@outlook.com</p>
              <p className="text-2xl">Phone:</p>
              <p>01122448819</p>
            </div>
          </div>
          <div className="p-16 grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4">
            <div>
              <NavLink
                className="mb-6 text-sm font-semibold text-gray-900 uppercase  dark:text-white hover:text-[#F4C890]"
                to="/"
              >
                Home
              </NavLink>
              <ul className="text-gray-500 dark:text-gray-400 font-medium"></ul>
            </div>
            <div>
              <NavLink
                className="mb-6 text-sm font-semibold text-gray-900 uppercase hover:text-[#F4C890] dark:text-white"
                to="/Contact"
              >
                Contact
              </NavLink>
              <ul className="text-gray-500 dark:text-gray-400 font-medium"></ul>
            </div>
            <div>
              <NavLink
                className="mb-6 text-sm font-semibold text-gray-900 uppercase hover:text-[#F4C890] dark:text-white"
                to="/OurWork"
              >
                OurWork
              </NavLink>
              <ul className="text-gray-500 dark:text-gray-400 font-medium"></ul>
            </div>
            <div>
              <NavLink
                className="mb-6 text-sm font-semibold text-gray-900 uppercase hover:text-[#F4C890] dark:text-white"
                to="/About"
              >
                About
              </NavLink>
              <ul className="text-gray-500 dark:text-gray-400 font-medium"></ul>
            </div>
          </div>
          <div className="mb-6 md:mb-0 flex flex-col items-center">
            <NavLink
              href="https://flowbite.com/"
              className="flex items-center justify-center"
            >
              <img
                src={ashicon}
                className="h-3/4 w-20 me-5 hover:bg-slate-300"
                alt="Ash Logo"
              />
            </NavLink>

            <p className="text-center  mt-4 text-lg font-semibold whitespace-nowrap  text-gray-500">
              “The best way to predict the future
            </p>
            <p className="text-center text-lg font-semibold whitespace-nowrap  text-gray-500">
              is to create it.”—Peter Drucker
            </p>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className=" text-gray-500 sm:text-center text-xl  dark:text-gray-400">
            © 2024 -{" "}
            <NavLink
              to="https://zealnx.com"
              className="hover:hidden dark:text-gray-400 text-xl"
            >
              developed by Zealnx
            </NavLink>
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            {/* Facebook Icon */}
            <NavLink
              to="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns=""
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fillRule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Facebook page</span>
            </NavLink>
            {/* TikTok Icon */}
            <NavLink
              to="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns=""
                fill="currentColor"
                viewBox="0 0 448 512"
              >
                <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
              </svg>
              <span className="sr-only">TikTok Page</span>
            </NavLink>
            {/* instgram Icon */}
            <NavLink
              to="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns=""
                fill="currentColor"
                viewBox="0 0 24 24 "
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Instgram page</span>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
