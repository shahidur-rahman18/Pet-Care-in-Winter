import React from "react";
import tips from "../assets/tips.jpg";

const Tips = () => {
  return (
    <div className="hero bg-gradient-to-br from-blue-50 to-cyan-100 min-h-screen py-12">
  <div className="hero-content flex-col lg:flex-row-reverse gap-12 max-w-6xl">
    <img
      src={tips}
      className="max-w-md rounded-2xl shadow-2xl transform hover:scale-105 transition duration-300"
    />
    <div className="max-w-2xl">
      <div className="inline-block mb-4">
        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
          🐾 Pet Care Guide
        </span>
      </div>
      <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6">
        Winter Care Tips for Pets
      </h1>
      <div className="space-y-4 mb-8">
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <li className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <span className="text-blue-500 text-lg">❄️</span>
            <span className="font-medium">Keep pets warm and dry indoors</span>
          </li>
          <li className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <span className="text-blue-500 text-lg">🧥</span>
            <span className="font-medium">Use pet sweaters for short-haired breeds</span>
          </li>
          <li className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <span className="text-blue-500 text-lg">🦮</span>
            <span className="font-medium">Wipe paws after walks to remove salt</span>
          </li>
          <li className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <span className="text-blue-500 text-lg">🚫</span>
            <span className="font-medium">Avoid antifreeze - it's toxic to pets</span>
          </li>
          <li className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <span className="text-blue-500 text-lg">🍽️</span>
            <span className="font-medium">Provide extra food for outdoor pets</span>
          </li>
          <li className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <span className="text-blue-500 text-lg">🚗</span>
            <span className="font-medium">Check under cars for sheltering animals</span>
          </li>
        </ul>
      </div>
      <div className="flex gap-4">
        <button className="btn btn-primary px-8 bg-gradient-to-r from-blue-500 to-cyan-500 border-none hover:from-blue-600 hover:to-cyan-600 transform hover:-translate-y-1 transition-all duration-300">
          View All Tips
        </button>
        <button className="btn btn-outline border-blue-400 text-blue-600 hover:bg-blue-50">
          Download Guide
        </button>
      </div>
    </div>
  </div>
</div>
  );
};

export default Tips;
