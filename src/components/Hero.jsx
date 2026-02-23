import React from "react";
import { Heart, Stethoscope, Baby, Calendar } from "lucide-react";

const services = [
  { title: "Cardiology", icon: <Heart size={18} className="text-red-500" /> },
  {
    title: "Dermatology",
    icon: <Stethoscope size={18} className="text-blue-500" />,
  },
  { title: "Pediatrics", icon: <Baby size={18} className="text-green-500" /> },
];

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-[#f8fbff] overflow-hidden py-26 lg:py-0">
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-100/50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/4" />

      <div className="lg:max-w-7xl w-full mx-auto px-4 md:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left order-2 lg:order-1 space-y-6 md:space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-3 py-1 md:px-4 md:py-1.5 rounded-full text-blue-600 text-xs md:sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              24/7 Specialized Medical Support
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 italic leading-[1.2] lg:leading-[1.1]">
              Compassionate Care <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r italic from-blue-600 to-cyan-500">
                You Can Trust
              </span>
            </h1>

            <p className="text-slate-600 text-sm md:text-base lg:text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Book appointments instantly with verified doctors. Hassle-free,
              fast, and reliable healthcare for you and your family.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <button className="flex items-center justify-center gap-2 px-8 py-3.5 bg-blue-600 text-white rounded-xl font-semibold shadow-lg shadow-blue-200 hover:bg-blue-700 hover:-translate-y-0.5 transition-all w-full sm:w-auto text-sm md:text-base">
                <Calendar size={18} />
                Book Appointment
              </button>
              <p className="text-xs md:sm text-slate-500 font-medium italic">
                Trusted by{" "}
                <span className="text-blue-600 font-bold font-sans">10k+</span>{" "}
                patients
              </p>
            </div>

            {/* Service Tags */}
            <div className="flex flex-wrap gap-2 md:gap-3 justify-center lg:justify-start">
              {services.map((s, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-slate-100 px-3 py-1.5 md:px-4 md:py-2 rounded-xl shadow-sm hover:shadow-md transition-all cursor-default"
                >
                  {s.icon}
                  <span className="text-xs md:sm font-semibold text-slate-700">
                    {s.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative order-1 lg:order-2 px-4 sm:px-10 lg:px-0">
            <div className="relative group max-w-[500px] mx-auto lg:max-w-none">
              {/* Decorative Background Box */}
              <div className="absolute inset-0 bg-blue-600/10 rounded-[2rem] md:rounded-[3rem] rotate-3 group-hover:rotate-1 transition-transform duration-500"></div>

              {/* Main Image */}
              <img
                src="https://plus.unsplash.com/premium_photo-1681842883882-b5c1c9f37869?q=80&w=1181&auto=format&fit=crop"
                alt="Medical Team"
                className="relative rounded-[2rem] md:rounded-[3rem] shadow-2xl z-10 object-cover w-full h-[300px] sm:h-[400px] lg:h-[450px] -rotate-3 group-hover:rotate-0 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
