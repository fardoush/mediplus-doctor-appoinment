import React from "react";
import errorImg from "../assets/error.svg";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100 px-4">
      <div className="text-center bg-base-200 p-8 md:p-12 rounded-2xl shadow-md border border-base-300">

        <img
          src={errorImg}
          alt="Error"
          className="w-56 md:w-72 mx-auto mb-6"
        />

        <h2 className="text-2xl md:text-3xl font-bold text-accent mb-2">
          Page Not Found
        </h2>

        <p className="text-gray-500 mb-6 max-w-md mx-auto">
          The page you are trying to reach doesn’t exist or may have been moved.
        </p>

        <Link
          to="/"
          className="btn bg-primary hover:bg-secondary text-white border-none"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
