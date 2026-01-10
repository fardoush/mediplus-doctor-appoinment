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
    <div className="max-w-7xl mx-auto bg-white rounded-3xl p-6">
      <div className="pb-4 flex justify-between items-center border-dashed border-b-2">
        <div>
          <h6 className="text-2xl font-semibold">{name}</h6>

          {education.map((item, index) => (
            <p key={index} className="text-sm text-gray-400">
              {item}
            </p>
          ))}
        </div>

        <span className="text-gray-400">
          Appointment Fee : {fee_bdt} Taka + Vat
        </span>
      </div>

      <button
        onClick={handleCancel}
        className="mt-8 btn btn-full rounded-full bg-transparent text-red-500 border border-red-500 hover:bg-red-500 hover:text-white"
      >
        Cancel Appointment
      </button>

      <ToastContainer />
    </div>
  );
};

export default MyAppoinmentList;
