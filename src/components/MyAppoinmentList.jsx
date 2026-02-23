import React from "react";
import { ToastContainer, toast } from "react-toastify";
import {
  FaUserMd,
  FaWallet,
  FaRegCalendarTimes,
  FaArrowRight,
} from "react-icons/fa";

const MyAppoinmentList = ({ singleData, onCancel }) => {
  if (!singleData) return null;

  const { id, name, education = [], fee_bdt, availability } = singleData;

  const isActive = availability?.available === true;

  const handleCancel = () => {
    toast.error(`Appointment with ${name} Cancelled`);
    onCancel(id);
  };

  return (
    <div className="lg:max-w-7xl w-full mx-auto ">
      <div className="w-full bg-white rounded-3xl border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] hover:border-blue-200 transition-all duration-500 p-5 sm:p-7 mb-6 group">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          {/* Section 1: Doctor Identity */}
          <div className="flex items-center gap-5 flex-1 w-full md:flex-row flex-col">
            <div className="relative flex-shrink-0">
              <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                <FaUserMd size={32} />
              </div>

              {/* Dynamic Status Dot Logic */}
              <span className="absolute -top-1 -right-1 flex h-4 w-4">
                {isActive ? (
                  <>
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500 border-2 border-white"></span>
                  </>
                ) : (
                  // Active na hole red
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-white"></span>
                )}
              </span>
            </div>

            <div className="space-y-1.5 flex-1">
              <h3 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight group-hover:text-blue-600 transition-colors">
                {name}
              </h3>
              <div className="flex flex-wrap items-center gap-2">
                {/* {status color */}
                <span
                  className={`px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-md border ${
                    isActive
                      ? "bg-green-50 text-green-600 border-green-100"
                      : "bg-red-50 text-red-600 border-red-100"
                  }`}
                >
                  {isActive ? "Active Now" : "Currently Offline"}
                </span>
                <p className="text-sm text-slate-500 font-medium line-clamp-1 italic">
                  {Array.isArray(education) ? education.join(" • ") : education}
                </p>
              </div>
            </div>
          </div>

          {/* Section 2: Financial Stats */}
          <div className="w-full lg:w-auto flex items-center gap-4 bg-slate-50/50 p-4 rounded-2xl border border-slate-100/50">
            <div className="h-12 w-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-emerald-500">
              <FaWallet size={20} />
            </div>
            <div className="pr-4">
              <p className="text-[10px] uppercase tracking-widest font-extrabold text-slate-400 mb-0.5">
                Consultation Fee
              </p>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-black text-slate-800">
                  {fee_bdt}
                </span>
                <span className="text-xs font-bold text-slate-500">BDT</span>
              </div>
            </div>
          </div>

          {/* Section 3: Action Button */}
          <div className="w-full lg:w-auto">
            <button
              onClick={handleCancel}
              className="group/btn relative w-full lg:w-auto flex items-center justify-center gap-3  px-3 md:px-8 py-4 rounded-2xl bg-white border-2 border-rose-100 text-rose-500 font-bold text-sm transition-all duration-300 hover:bg-rose-500 hover:border-rose-500 hover:text-white hover:shadow-[0_10px_20px_-5px_rgba(244,63,94,0.3)] active:scale-95 overflow-hidden"
            >
              <FaRegCalendarTimes className="text-lg group-hover/btn:rotate-12 transition-transform" />
              <span className="relative z-10">Cancel Appointment</span>
              <FaArrowRight className="text-xs opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all duration-300" />
            </button>
          </div>
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={2500}
        theme="colored"
      />
    </div>
  );
};

export default MyAppoinmentList;
