import React from "react";
import { useLoaderData, useNavigate, useParams } from "react-router";

import { ToastContainer, toast } from "react-toastify";
import { addToStoredDB } from "../Utilities/addToDB";

const DoctorDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const doctorId = parseInt(id);
  const data = useLoaderData();
  const singleDoctor = data.find((doctor) => doctor.id === doctorId);

  const {
    name,
    image,
    education = [],
    workplace,
    registration_number,
    availability,
    fee_bdt,
  } = singleDoctor || {};

  const handleAppoinment = (id) => {
    addToStoredDB(parseInt(id));

    toast.success(`Appointment Schedule For ${name} Successfully`, {
      autoClose: 1000,
      onClose: () =>
        navigate("/myBooking", {
          state: { refresh: true },
        }),
    });
  };

  //   doctor available

  const today = new Date().toLocaleString("en-US", { weekday: "short" });

  const isAvailableToday =
    availability?.available && availability?.days?.includes(today);

  return (
    <section className="bg-base-200 py-26 px-4">
      <div className="lg:max-w-7xl w-full mx-auto space-y-10">
        {/* Header */}
        <div className="bg-base-100 rounded-2xl p-6 md:p-10 text-center shadow-sm">
          <h2 className="text-2xl md:text-3xl font-bold">
            Doctor’s Profile Details
          </h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto text-sm md:text-base">
            Find complete information about the doctor, availability, and
            consultation details.
          </p>
        </div>

        {/* Doctor Card */}
        <div className="bg-base-100 rounded-2xl p-6 md:p-8 shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Image */}
            <div className="flex justify-center">
              <img
                src={image}
                alt="Doctor"
                className="w-56 h-72 object-cover rounded-2xl ring-4 ring-primary/20"
              />
            </div>

            {/* Info */}
            <div className="md:col-span-2 space-y-4">
              <div>
                <h3 className="text-2xl font-bold">{name}</h3>
                <p className="text-sm text-gray-500 mt-1">Urology Specialist</p>
              </div>

              {/* Education */}
              <div>
                <p className="font-semibold mb-1">Education</p>
                <div className="text-sm text-gray-600 space-y-1">
                  {education.map((item, index) => (
                    <p key={index}>{item}</p>
                  ))}
                </div>
              </div>

              {/* Workplace */}
              <div className="text-sm">
                <p className="font-semibold">Working at</p>
                <p className="text-gray-600">
                  {workplace.name},{" "}
                  <span className="text-gray-500">{workplace.address}</span>
                </p>
              </div>

              {/* Registration */}
              <div className="border-t-2 border-b-2 border-dashed border-gray-200  py-3 text-sm">
                <span className="font-semibold">BMDC Reg No:</span>{" "}
                {registration_number}
              </div>

              {/* Availability */}
              <div>
                <p className="font-semibold mb-2">Available Days</p>
                <div className="flex flex-wrap gap-2">
                  {availability?.days?.map((day, index) => (
                    <span
                      key={index}
                      className="px-4 py-1 text-sm rounded-full border border-amber-400 bg-amber-50 text-amber-600"
                    >
                      {day}
                    </span>
                  ))}
                </div>
              </div>

              {/* Fee */}
              <div className="mt-4 p-4 rounded-xl bg-primary/5 border border-primary/10">
                <p className="text-sm font-semibold">Consultation Fee</p>
                <p className="text-xl font-bold text-primary">
                  ৳ {fee_bdt}
                  <span className="text-sm text-gray-500 font-normal ml-2">
                    (incl. VAT · Per consultation)
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Appointment Card */}
        <div className="bg-base-100 rounded-2xl p-6 md:p-8 shadow-md">
          <h3 className="text-xl font-bold text-center mb-6">
            Book An Appointment
          </h3>

          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between border-y-2 border-dashed border-gray-200 py-4">
            {/* Left */}
            <p className="font-semibold text-center md:text-left">
              Availability
            </p>

            {/* Right */}
            <div className="flex justify-center md:justify-end">
              {isAvailableToday ? (
                <span className="inline-flex items-center gap-2 rounded-full border border-green-600 bg-green-100 px-4 py-1.5 text-sm font-medium text-green-600">
                  {/* <span className="h-2 w-2 rounded-full bg-green-600 animate-pulse"></span> */}
                  Available Today • {availability?.time}
                </span>
              ) : (
                <span className="inline-flex items-center gap-2 rounded-full border border-red-500 bg-red-50 px-4 py-1.5 text-sm font-medium text-red-600">
                  <span className="h-2 w-2 rounded-full bg-red-500"></span>
                  Not Available Today
                </span>
              )}
            </div>
          </div>

          <div className="alert alert-warning text-sm mb-6 mt-5">
            Due to high patient volume, appointments are available for today
            only.
          </div>

          <button
            onClick={() => handleAppoinment(id)}
            className="mt-8 btn btn-full rounded-full bg-transparent text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white shadow-none transition duration-300 ease-in-out"
          >
            Book Appointment Now
          </button>

          <ToastContainer />
        </div>
      </div>
    </section>
  );
};

export default DoctorDetails;
