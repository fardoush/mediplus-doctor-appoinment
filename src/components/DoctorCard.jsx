import React from "react";
import { FaRegRegistered } from "react-icons/fa6";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router";

const DoctorCard = ({ singleDoctor }) => {
  const {
    id,
    image,
    availability,
    experience_years,
    name,
    education,
    registration_number,
  } = singleDoctor;
  // availability text & style
  // const isAvailable = available === true || available === "Available";
  //   doctor available

  const today = new Date().toLocaleString("en-US", { weekday: "short" });

  const isAvailableToday =
    availability?.available && availability?.days?.includes(today);

  return (
    <div className="group bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col">
      {/* Image */}
      <div className="relative h-64 w-full overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Availability Badge */}
        {/* <span
          className={`absolute top-4 left-4 text-sm font-medium px-4 py-1 rounded-full
          ${
            isAvailable
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-600"
          }`}
        >
          {isAvailable ? "Available" : "Not Available"}
        </span> */}
        {isAvailableToday ? (
          <span className="absolute top-4 left-4 z-10 bg-green-100 border border-green-600 text-green-600 text-sm px-4 py-1 rounded-full">
            Available
          </span>
        ) : (
          <span className="absolute top-4 left-4 z-10 bg-red-100 border border-red-500 text-red-600 text-sm px-4 py-1 rounded-full">
            Not Available
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-3 flex-1">
        {/* Experience */}
        <span className="w-fit bg-blue-50 text-primary  border border-primary text-sm font-medium px-4 py-1 rounded-full">
          {experience_years}+ Years Experience
        </span>

        {/* Name */}
        <h3 className="text-xl font-semibold text-gray-800 leading-tight">
          {name}
        </h3>

        {/* Education */}
        <p className="text-gray-500 text-base">{education}</p>

        {/* Divider */}
        <div className="border-t border-dashed border-gray-200 my-3"></div>

        {/* Registration */}
        <div className="flex items-center gap-2 text-gray-600 text-sm">
          <FaRegRegistered className="text-primary" />
          <span>Reg No: {registration_number}</span>
        </div>

        {/* Action */}
        <Link
          to={`/doctorDetails/${id}`}
          className="mt-8 btn btn-full rounded-full bg-transparent text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white shadow-none transition duration-300 ease-in-out"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
};

export default DoctorCard;
