import React, { useState, useContext } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => alert("You Logged Out Successfully"))
      .catch((err) => console.log(err));
  };

  const menuLinks = [
    { name: "Home", to: "/" },
    { name: "My Bookings", to: "/myBooking" },
    { name: "Blogs", to: "/blogs" },
    { name: "Contact Us", to: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
      {/* Desktop header */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-1">
            <FaHeartCirclePlus className="text-accent text-2xl" />
            <span className="text-xl font-bold text-primary">
              Medi<span className="text-accent font-semibold">Plus</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-10 text-gray-600 font-medium">
            {menuLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `cursor-pointer transition-colors duration-300 ${
                    isActive
                      ? "text-primary font-semibold"
                      : "hover:text-primary"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </ul>

          {/* Desktop Right: Avatar + Login/Logout */}
          <div className="hidden lg:flex items-center gap-4">
            <img
              src={user?.photoURL || "https://via.placeholder.com/40"}
              alt="avatar"
              className="w-10 h-10 border border-base-300 object-cover rounded-full"
            />
            {user ? (
              <button onClick={handleLogOut} className="btn btn-primary btn-sm">
                Logout
              </button>
            ) : (
              <Link
                to="/auth/login"
                className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-3xl text-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white text-primary lg:hidden z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Mobile Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
          <div className="flex items-center gap-1">
            <FaHeartCirclePlus className="text-accent text-2xl" />
            <span className="text-xl font-bold text-primary">
              Medi<span className="text-accent font-semibold">Plus</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            {user && (
              <img
                src={user.photoURL || "https://via.placeholder.com/40"}
                alt="avatar"
                className="w-10 h-10 border border-base-300 object-cover rounded-full"
              />
            )}
            <button
              className="text-3xl text-primary"
              onClick={() => setIsOpen(false)}
            >
              <HiX />
            </button>
          </div>
        </div>

        {/* Mobile Menu Links */}
        <ul className="flex flex-col mt-6 space-y-4 px-6 text-gray-600 font-medium">
          {menuLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `block py-2 border-b border-gray-200 ${
                    isActive
                      ? "text-primary bg-base-200 font-semibold"
                      : "hover:text-primary hover:bg-gray-100"
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Extra info section */}
        <div className="mt-6 px-6 space-y-2 text-sm text-gray-500">
          <p>📞 CALL / TEXT (310) 785-0770</p>
          <p>🧮 PAYMENT CALCULATOR</p>
          <p>📰 BLOG</p>
          <p>💰 GET $1,000 OFF</p>
        </div>

        {/* Mobile Login/Logout */}
        <div className="mt-6 px-6">
          {user ? (
            <button
              onClick={() => {
                handleLogOut();
                setIsOpen(false);
              }}
              className="w-full btn btn-primary btn-sm"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/auth/login"
              onClick={() => setIsOpen(false)}
              className="w-full block bg-blue-600 text-white px-6 py-2 rounded-full font-medium text-center hover:bg-blue-700 transition"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
