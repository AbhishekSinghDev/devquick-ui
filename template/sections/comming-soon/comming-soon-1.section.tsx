import React from "react";

const CommingSoonOne = () => {
  return (
    <div className="bg-gray-900 h-screen flex flex-col items-center justify-center text-white">
      <h1 className="text-4xl font-bold mb-6">Coming Soon</h1>

      <div className="flex text-2xl mb-6">
        <div className="mr-2">
          <span id="days" className="font-semibold">
            50
          </span>{" "}
          Days
        </div>
        <div className="mr-2">
          <span id="hours" className="font-semibold">
            10
          </span>{" "}
          Hours
        </div>
        <div className="mr-2">
          <span id="minutes" className="font-semibold">
            12
          </span>{" "}
          Minutes
        </div>
        <div>
          <span id="seconds" className="font-semibold">
            07
          </span>{" "}
          Seconds
        </div>
      </div>

      <form className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2">
        <input
          type="email"
          placeholder="Enter your email"
          className="rounded-full px-4 py-2 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-400"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full transition duration-300"
        >
          Subscribe
        </button>
      </form>

      <div className="mt-4 space-x-4">
        <a href="#" className="text-gray-400 hover:text-white">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  );
};

export default CommingSoonOne;
