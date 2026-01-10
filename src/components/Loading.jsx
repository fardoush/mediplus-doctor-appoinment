import React from "react";

const Loading = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-100">
      <span className="loading loading-bars loading-xl text-primary mb-4"></span>
      <p className="text-sm text-gray-500 tracking-wide">
        Loading, please wait...
      </p>
    </div>
  );
};

export default Loading;
