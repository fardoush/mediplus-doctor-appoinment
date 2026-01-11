import React from "react";
import { ToastContainer, toast } from "react-toastify";

const MyAppoinmentList = ({ singleData, onCancel }) => {
  if (!singleData) return null;

  const { id, name, education = [], fee_bdt } = singleData;

  const handleCancel = () => {
    toast.error(`Appointment with ${name} Cancelled`);
    onCancel(id);
  };

  return (
    <div className="w-full mx-auto bg-white rounded-2xl shadow-sm p-4 sm:p-6">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-4 border-b border-dashed">
        {/* Doctor Info */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
            {name}
          </h3>

          {education.map((item, index) => (
            <p key={index} className="text-sm text-gray-500">
              {item}
            </p>
          ))}
        </div>

        {/* Fee */}
        <div className="text-sm sm:text-base text-gray-500 md:text-right">
          Appointment Fee :{" "}
          <span className="font-medium text-gray-700">
            {fee_bdt} Taka + Vat
          </span>
        </div>
      </div>

      {/* Cancel Button */}
      <button
        onClick={handleCancel}
        className="mt-6 w-full rounded-full border border-red-500 py-3 text-sm sm:text-base font-medium text-red-500
        hover:bg-red-500 hover:text-white transition-all duration-300"
      >
        Cancel Appointment
      </button>

      <ToastContainer />
    </div>
  );
};

export default MyAppoinmentList;
