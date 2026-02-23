import React, { useState } from "react";
import DoctorCard from "./DoctorCard";

const DoctorSection = ({ data }) => {
  const [visible, setVisible] = useState(6);
  const handleSeeMore = () => {
    console.log("click me");
    setVisible(data.length);
  };

  return (
    <section className="py-12 md:py-16 lg:py-24 px-4 md:px-6 lg:max-w-7xl w-full mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-black text-slate-800 italic mb-4 leading-tight">
          Our Best Doctors
        </h2>
        <p className="text-slate-500 font-medium">
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience. Whether it's a routine
          checkup or urgent consultation, book appointments in minutes and
          receive quality care you can trust.
        </p>
      </div>

      {/* Doctor Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.slice(0, visible).map((singleDoctor) => (
          <DoctorCard key={singleDoctor.id} singleDoctor={singleDoctor} />
        ))}
      </div>

      <div className="flex justify-center items-center pt-10">
        {visible < data.length && (
          <button
            onClick={handleSeeMore}
            className="mt-8 btn btn-full rounded-full bg-transparent text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white shadow-none transition duration-300 ease-in-out"
          >  View All Doctors

            {/* <span className="absolute inset-0 bg-blue-600 -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-in-out"></span>
            <span className="relative z-10 group-hover:text-white transition-colors duration-700">
              View All Doctors
            </span> */}

            
          </button>
        )}
      </div>
    </section>
  );
};

export default DoctorSection;
