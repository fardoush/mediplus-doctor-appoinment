import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
const DoctorChart = ({ data }) => {
  if (!Array.isArray(data) || data.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-10">No chart data available</p>
    );
  }
  const formattedData = data.map((doctor) => ({
    name: doctor.name,
    fee: parseInt(doctor.fee_bdt, 10),
  }));
  console.log("Chart data 👉", formattedData);
  return (
    <div className="max-w-7xl mx-auto bg-white p-10 rounded-2xl">
      {" "}
      <BarChart width={900} height={350} data={formattedData}>
        {" "}
        <CartesianGrid strokeDasharray="3 3" /> <XAxis dataKey="name" />{" "}
        <YAxis /> <Tooltip /> <Bar dataKey="fee" fill="#2563eb" />{" "}
      </BarChart>{" "}
    </div>
  );
};
export default DoctorChart;
