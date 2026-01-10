import React from "react";
const services = [
  { title: "Cardiology", icon: "❤️" },
  { title: "Dermatology", icon: "🩹" },
  { title: "Pediatrics", icon: "👶" },
];
const Hero = () => {
  return (
    <section className="relative w-full  min-h-[calc(100vh)] pt-26 lg:pb-0 pb-6 lg:pt-0 flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-14 bg-gradient-to-r from-[#d0ebff] via-[#e0faff] to-[#cce7ff] overflow-hidden">
      {/* LEFT TEXT */}
      <div className="z-10 w-full lg:w-1/2 flex flex-col gap-6 text-center lg:text-left mt-0 lg:mt-0">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-snug">
          Compassionate Care <br />
          <span className="text-primary">You Can Trust</span>
        </h1>
        <p className="text-gray-700 text-sm sm:text-base md:text-lg max-w-md mx-auto lg:mx-0">
          Book appointments instantly with verified doctors. Hassle-free, fast,
          and reliable healthcare for you and your family.
        </p>

        <button className="mt-5 px-8 sm:px-10 py-2 sm:py-3 bg-primary text-white rounded-full hover:bg-blue-500 hover:scale-105 transition transform font-semibold w-fit mx-auto lg:mx-0 shadow-lg text-sm sm:text-base">
          Book Appointment
        </button>

        {/* TRUST INDICATORS */}
        <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 justify-center lg:justify-start text-xl sm:text-sm text-black tracking-widest">
          <span>
            <span className="text-green-600">✔</span> 500+ Verified Doctors
          </span>
          <span>
            <span className="text-green-600">✔</span> 24/7 Support
          </span>
          <span>
            <span className="text-green-600">✔</span> Secure Booking
          </span>
        </div>

        {/* FLOATING SERVICE CARDS */}
        <div className="mt-6 flex flex-wrap gap-3 justify-center lg:justify-start">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-full shadow-lg px-4 sm:px-5 py-2 sm:py-3 flex items-center gap-2 cursor-pointer transform hover:-translate-y-1 hover:scale-105 transition-all text-sm sm:text-base"
            >
              <span className="text-lg sm:text-xl">{s.icon}</span>
              <span className="font-medium text-gray-800">{s.title}</span>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT ILLUSTRATION */}
      <div className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0 relative">
        {/* Custom illustration box */}
        {/* <div className="w-full max-w-sm sm:max-w-md h-72 sm:h-80 lg:h-96 bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl shadow-2xl flex items-center justify-center text-white text-xl sm:text-2xl font-bold transform hover:scale-105 transition duration-500">
          Illustration Here
        </div> */}
        <img
          src="https://plus.unsplash.com/premium_photo-1681842883882-b5c1c9f37869?q=80&w=1181&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="lg:mt-10 md:mt-5 mt-0  shadow-2xl shadow-blue-300 rounded-2xl z-10"
        />
      </div>

      {/* BACKGROUND SHAPES */}
      <div className="absolute -top-32 -left-24 w-48 sm:w-72 h-48 sm:h-72 bg-blue-200/30 rounded-full animate-bounce"></div>
      <div className="absolute top-10 -right-24 sm:-right-32 w-72 sm:w-96 h-72 sm:h-96 bg-purple-200/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 left-1/3 sm:left-1/2 w-48 sm:w-64 h-48 sm:h-64 bg-blue-300/20 rounded-full animate-bounce"></div>
    </section>
  );
};

export default Hero;
