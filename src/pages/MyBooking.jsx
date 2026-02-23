import React, { useEffect, useState } from "react";
import { useLoaderData, useLocation } from "react-router";

import DoctorChart from "../components/DoctorChart";
import MyAppoinmentList from "../components/MyAppoinmentList";
import { getStoredDoctor, removeFromStoredDB } from "../Utilities/addToDB";

const MyBooking = () => {
  const data = useLoaderData();
  const location = useLocation();
  const [bookingList, setBookingList] = useState([]);

  const loadBookings = () => {
    const storedIds = getStoredDoctor().map(Number);
    const bookedDoctors = data.filter((doctor) =>
      storedIds.includes(doctor.id),
    );
    setBookingList(bookedDoctors);
  };

  useEffect(() => {
    loadBookings();
  }, [data]);

  useEffect(() => {
    if (location.state?.refresh) {
      loadBookings();
    }
  }, [location]);

  const handleCancelAppointment = (id) => {
    removeFromStoredDB(id);
    setBookingList((prev) => prev.filter((doc) => doc.id !== id));
  };

  return (
    <div className="w-full lg:max-w-7xl mx-auto py-26 flex flex-col justify-center items-center gap-8 px-4 md:px-6">
      <DoctorChart data={bookingList} />

      <div className=" max-w-7xl flex justify-center items-center flex-col gap-5">
        {bookingList.length ? (
          bookingList.map((doctor) => (
            <MyAppoinmentList
              key={doctor.id}
              singleData={doctor}
              onCancel={handleCancelAppointment}
            />
          ))
        ) : (
          <p className="text-center text-gray-500">No Appointments Found</p>
        )}
      </div>
    </div>
  );
};

export default MyBooking;
