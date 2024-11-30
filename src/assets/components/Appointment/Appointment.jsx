import { NavLink } from "react-router-dom";
import AppointmentImg from "../../imges/WhatsApp-Image-2024-08-05-at-15.10.40_456d9c9c.jpg";

export default function Appointment() {
    
  return (
    <div
    className="w-full h-[70vh] bg-cover bg-center relative"
    style={{
      backgroundImage: `url(${AppointmentImg})`,
      backgroundAttachment: "fixed",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    {/* Layer for Opacity */}
    <div className="absolute inset-0 bg-black bg-opacity-80"></div>

    {/* Content Section */}
    <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
      {/* Appointment Form */}
      <form className="w-full sm:w-4/5 md:w-3/5 bg-inherit rounded-lg shadow-lg sm:p-6">
        {/* Form Heading */}
        <h1 className="text-[#F4C890] mb-6 text-center text-2xl sm:text-3xl font-bold">
          Book An Appointment
        </h1>

        {/* Name and Phone Fields */}
        <div className="flex flex-col gap-4 mb-6 sm:flex-row">
          <div className="w-full">
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              className="w-full border text-[#F4C890] rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-[#6a573e]"
            />
          </div>
          <div className="w-full">
            <input
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
              className="w-full border text-[#F4C890] rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-[#F4C890]"
            />
          </div>
        </div>

        {/* Email and Message Fields */}
        <div className="flex flex-col gap-4 sm:flex-row">
          <div className="w-full">
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full border text-[#F4C890] rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-[#F4C890]"
            />
          </div>
          <div className="w-full">
            <textarea
              id="message"
              rows="4"
              placeholder="Enter your message"
              className="w-full border text-[#F4C890] rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-[#F4C890]"
            ></textarea>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full sm:w-2/5 bg-[#1A1919] text-white font-bold py-2 px-4 rounded-lg hover:bg-[#e2b078] transition duration-300 sm:mt-6 xs:mt-3"
        >
          Submit
        </button>
      </form>

      {/* Contact Information */}
      <div className="sm:mt-8 xs:mt-3 flex flex-col sm:flex-row items-center sm:gap-4 text-white text-sm text-center">
        <h4>
          Email:{"  "}
          <span className="text-[#F4C890]">
            ash.innovations@outlook.com
          </span>
        </h4>
        <h4>
          Phone:{"  "}
          <span className="text-[#F4C890]">
            012345678901 - 012345678901
          </span>
        </h4>
      </div>

      {/* Social Media Icons */}
      <div className="sm:mt-4 xs:mt-3 flex justify-center space-x-6">
        {/* Facebook Icon */}
        <NavLink
          to="#"
          className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
        >
          <svg
            className="w-6 h-6"
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
        </NavLink>

        {/* Twitter Icon */}
        <NavLink
          to="#"
          className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
        >
          <svg
            className="w-6 h-6"
            xmlns=""
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M23.146 0H15.9L12.006 7.714 8.044 0H.854L9.695 13.426 0 24h7.328l4.7-7.83L16.792 24h7.226l-9.716-10.574L23.146 0z" />
          </svg>
        </NavLink>

        {/* Instagram Icon */}
        <NavLink
          to="#"
          className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
        >
          <svg
            className="w-6 h-6"
            xmlns=""
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
              clipRule="evenodd"
            />
          </svg>
        </NavLink>
      </div>
    </div>
  </div>
  )
}
