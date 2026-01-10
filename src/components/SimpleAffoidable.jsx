import React from "react";

const SimpleAffoidable = () => {
  const cards = [
    {
      id: "01",
      text: "Request appointment",
      color: "border-red-500 text-red-500",
    },
    {
      id: "02",
      text: "Request appointment",
      color: "border-blue-500 text-blue-500",
    },
    {
      id: "03",
      text: "Request appointment",
      color: "border-green-600 text-green-600",
    },
  ];
  return (
    <div className=" flex md:gap-5 md:flex-row flex-col justify-between lg:py-26 md:py-16 py-10 lg:px-16 md:px-6 px-6 bg-white min-h-screen font-sans">
      {/* Header Section */}
      <div className="md:mb-12 mb-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-black font-medium uppercase tracking-widest">
            simple & affordable
          </span>
          <div className="flex  gap-1">
            <div className="w-3 h-3 rounded-full border-2 border-red-500"></div>
            <div className="w-3 h-3 rounded-full border-2 border-blue-500"></div>
            <div className="w-3 h-3 rounded-full border-2 border-green-500"></div>
          </div>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-black leading-tight">
          Happy, Healthy <br /> Smiles start here
        </h1>
        <p className="w-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat beatae nemo quae veniam dicta tempore inventore voluptatibus et doloribus incidunt hic exercitationem libero velit nam dolorum sit, amet voluptatum blanditiis.</p>
      </div>

      {/* Cards Container */}
      <div className="flex justify-center flex-wrap gap-3">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`w-72 h-40 border-2 rounded-2xl relative overflow-hidden flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:shadow-md ${card.color}`}
          >
            {/* Inner Content with Animation */}

            <span className="text-7xl font-bold mb-1">{card.id}</span>
            <span className="text-xl font-semibold text-center px-6 leading-tight">
              {card.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimpleAffoidable;
