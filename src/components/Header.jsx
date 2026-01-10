import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { Link, NavLink } from "react-router";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const link = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `cursor-pointer transition-colors duration-300 ${
            isActive ? "text-primary font-semibold" : "hover:text-primary"
          }`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/my-bookings"
        className={({ isActive }) =>
          `cursor-pointer transition-colors duration-300
        ${isActive ? "text-primary font-semibold" : "hover:text-primary"}`
        }
      >
        My Bookings
      </NavLink>

      <NavLink
        to="/blogs"
        className={({ isActive }) =>
          `cursor-pointer transition-colors duration-300
        ${isActive ? "text-primary font-semibold" : "hover:text-primary"}`
        }
      >
        Blogs
      </NavLink>

      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `cursor-pointer transition-colors duration-300
        ${isActive ? "text-primary font-semibold" : "hover:text-primary"}`
        }
      >
        Contact Us
      </NavLink>
    </>
  );

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo */}
          <div className="flex items-center gap-1">
            <FaHeartCirclePlus className="text-accent text-2xl" />

            <span className="text-xl font-bold text-primary font-heading">
              Medi
              <span className="text-accent font-semibold">Plus</span>
            </span>
          </div>

          {/* Center: Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-10 text-gray-600 font-medium">
            {link}
          </ul>

          {/* Right: Emergency Button */}
          <div className="hidden lg:block">
            {/* avatar  */}
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            {/* Logi Button  */}
            <Link
              to="/auth/login"
              className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition"
            >
              Login
            </Link>
          </div>

          {/* Mobile / Tablet Menu Icon */}
          <button
            className="lg:hidden text-3xl text-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile + Tablet overlay menu (already done before) */}
      <div
        className={`fixed inset-0 bg-white text-primary lg:hidden transition-transform duration-300
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Overlay Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
          {/* Logo Left */}
          <div className="flex items-center gap-1">
            <FaHeartCirclePlus className="text-accent text-2xl" />

            <span className="text-xl font-bold text-primary font-heading">
              Medi
              <span className="text-accent font-semibold">Plus</span>
            </span>
          </div>
          <div className="flex gap-1 justify-center items-center">
            {/* avatar  */}
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            {/* Close Icon Right */}
            <button
              className="text-3xl text-primary"
              onClick={() => setIsOpen(false)}
            >
              <HiX />
            </button>
          </div>
        </div>

        {/* Menu Content */}
        <div className=" space-y-6 text-lg font-semibold">
          <ul className="flex flex-col text-gray-600 font-medium">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block px-8 py-2 border-b border-gray-200 cursor-pointer transition-all
        ${
          isActive
            ? "text-primary bg-base-200 font-semibold"
            : "text-gray-600 hover:text-primary hover:bg-gray-200"
        }`
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/my-bookings"
                className={({ isActive }) =>
                  `block px-8 py-2 border-b border-gray-200 cursor-pointer transition-all
        ${
          isActive
            ? "text-primary bg-base-200 font-semibold"
            : "text-gray-600 hover:text-primary hover:bg-gray-200"
        }`
                }
              >
                My Bookings
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/blogs"
                className={({ isActive }) =>
                  `block px-8 py-2 border-b border-gray-200 cursor-pointer transition-all
        ${
          isActive
            ? "text-primary bg-base-200 font-semibold"
            : "text-gray-600 hover:text-primary hover:bg-gray-200"
        }`
                }
              >
                Blogs
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `block px-8 py-2 border-b border-gray-200 cursor-pointer transition-all
        ${
          isActive
            ? "text-primary bg-base-200 font-semibold"
            : "text-gray-600 hover:text-primary hover:bg-gray-200"
        }`
                }
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div className="pt-6 space-y-4 text-sm text-gray-300">
            <p>📞 CALL / TEXT (310) 785-0770</p>
            <p>🧮 PAYMENT CALCULATOR</p>
            <p>📰 BLOG</p>
            <p>💰 GET $1,000 OFF</p>
          </div>

          <button className="mt-6 w-full border border-pink-500 text-pink-500 py-3 uppercase tracking-widest">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
