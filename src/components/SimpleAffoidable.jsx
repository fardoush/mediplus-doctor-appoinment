import React from "react";
import { CalendarCheck, Stethoscope, Scissors } from "lucide-react"; 
const SimpleAffordable = () => {
  const cards = [
    {
      id: "01",
      title: "Request Appointment",
      description: "Fast and easy booking system.",
      icon: <CalendarCheck size={32} />,
      gradient: "from-rose-500 to-red-600",
      shadow: "shadow-red-200",
    },
    {
      id: "02",
      title: "Book a Checkup",
      description: "Regular checkups for your health.",
      icon: <Stethoscope size={32} />,
      gradient: "from-blue-500 to-indigo-600",
      shadow: "shadow-blue-200",
    },
    {
      id: "03",
      title: "Consult a Dentist",
      description: "Expert dental care for everyone.",
      icon: <Scissors size={32} />,
      gradient: "from-emerald-500 to-teal-600",
      shadow: "shadow-emerald-200",
    },
  ];

  return (
    <section className="bg-white py-20 lg:py-32  overflow-hidden">
      <div className="lg:max-w-7xl w-full mx-auto flex flex-col lg:flex-row items-center gap-6 px-4 md:px-6 ">
        {/* Left Text Section */}
        <div className="lg:w-2/5 text-center lg:text-left space-y-6">
          <div className="space-y-2">
            <span className="text-blue-600 font-bold tracking-[0.2em] uppercase text-xs">
              Simple & Affordable
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight ">
              Happy, Healthy <br />
              <span className="text-blue-600 not-italic">
                Smiles Start Here
              </span>
            </h2>
          </div>

          <p className="text-slate-500 text-lg leading-relaxed lg:max-w-md mx-auto lg:mx-0">
            Dental care made simple and affordable. Book appointments, checkups,
            or consultations effortlessly.
          </p>

          <div className="pt-4">
            <button className="text-blue-600 font-bold border-b-2 border-blue-600 hover:text-blue-700 transition-colors">
              View All Services →
            </button>
          </div>
        </div>

        {/* Right Cards Section */}
        <div className="lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden bg-gradient-to-br ${card.gradient} p-5 rounded-2xl h-72 flex flex-col justify-between text-white shadow-2xl ${card.shadow} transition-all duration-500 hover:-translate-y-3`}
            >
              {/* Floating ID in Background */}
              <span className="absolute right-4 top-2 text-8xl font-bold opacity-10 group-hover:opacity-20 transition-opacity">
                {card.id}
              </span>

              {/* Icon Container */}
              <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/30">
                {card.icon}
              </div>

              {/* Content */}
              <div className="space-y-2">
                <h3 className="text-xl font-bold leading-tight">
                  {card.title}
                </h3>
                <p className="text-white/80 text-sm">{card.description}</p>
              </div>

              {/* Action Circle */}
              <div className="absolute bottom-6 right-6 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-white">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimpleAffordable;
