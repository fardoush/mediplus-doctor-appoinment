import React from "react";
import { FaUserMd, FaUsers, FaHospital, FaAward } from "react-icons/fa";

const StatisticsSection = () => {
  const stats = [
    {
      id: 1,
      label: "Expert Doctors",
      value: "500+",
      icon: FaUserMd,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      id: 2,
      label: "Happy Patients",
      value: "12,000+",
      icon: FaUsers,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
    },
    {
      id: 3,
      label: "Medical Centers",
      value: "85+",
      icon: FaHospital,
      color: "text-orange-500",
      bgColor: "bg-orange-50",
    },
    {
      id: 4,
      label: "Years of Trust",
      value: "10+",
      icon: FaAward,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
  ];

  return (
    <section className="py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-slate-800 italic mb-4 leading-tight">
            We Provide Best Medical Services
          </h2>
          <p className="text-slate-500 font-medium">
            Our platform connects you with verified, experienced doctors across
            various specialties — all at your convenience.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 flex flex-col items-center"
              >
                {/* Icon Circle */}
                <div
                  className={`h-16 w-16 ${stat.bgColor} ${stat.color} rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-500`}
                >
                  <Icon />
                </div>

                {/* Counter Value (Static) */}
                <h3 className="text-4xl font-black text-slate-800 tracking-tight">
                  {stat.value}
                </h3>

                {/* Label */}
                <p className="mt-3 text-xs font-black text-slate-400 uppercase tracking-[0.2em]">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
