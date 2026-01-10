import React from "react";
import { FaCalendarCheck, FaTooth, FaStethoscope } from "react-icons/fa";

const SimpleAffordable = () => {
  const cards = [
    {
      id: "01",
      text: "Request Appointment",
      icon: <FaCalendarCheck />,
      color: "from-red-400 to-red-600",
    },
    {
      id: "02",
      text: "Book a Checkup",
      icon: <FaStethoscope />,
      color: "from-blue-400 to-blue-600",
    },
    {
      id: "03",
      text: "Consult a Dentist",
      icon: <FaTooth />,
      color: "from-green-400 to-green-600",
    },
  ];

  return (
    <section className="bg-gray-50 flex flex-col lg:flex-row items-center lg:justify-between px-6 lg:px-24 lg:py-28 md:py-16 py-12 gap-12">
      {/* Left Text Section */}
      <div className="lg:w-1/2 flex flex-col gap-4">
        <h2 className="text-sm uppercase text-gray-500 tracking-widest mb-2">
          Simple & Affordable
        </h2>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          Happy, Healthy <br /> Smiles Start Here
        </h1>
        <p className="text-gray-600 sm:text-base text-sm max-w-md">
          Dental care made simple and affordable. Book appointments, checkups,
          or consultations effortlessly. Modern solutions for a healthier smile.
        </p>
      </div>

      {/* Right Cards Section */}
      <div className="flex flex-col sm:flex-row gap-6 lg:gap-8 w-full lg:w-1/2 justify-center">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`
              relative flex flex-col items-center justify-center text-white
              w-full sm:w-64 h-56 rounded-3xl p-6
              bg-gradient-to-br ${card.color}
              backdrop-blur-md bg-opacity-20
              shadow-2xl hover:scale-105 transform transition-transform duration-500 ease-in-out
            `}
          >
            {/* Icon */}
            <div className="text-4xl mb-4">{card.icon}</div>
            {/* ID */}
            <span className="text-3xl font-bold mb-2">{card.id}</span>
            {/* Text */}
            <p className="text-center text-lg font-medium">{card.text}</p>

            {/* Decorative floating circle */}
            <div className="absolute -top-6 -left-6 w-16 h-16 rounded-full opacity-20 bg-white animate-pulse"></div>
            <div className="absolute -bottom-6 -right-6 w-20 h-20 rounded-full opacity-20 bg-white animate-pulse"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SimpleAffordable;
