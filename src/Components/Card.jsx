import React from "react";

export default function Card({ name, course, feedback }) {
  return (
    <div className="max-w-md mx-auto bg-white border border-gray-200 rounded-xl shadow-md p-5 my-4 hover:shadow-lg transition-shadow duration-300 ">
      <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
      <p className="text-blue-500 italic mt-1">{course}</p>
      <hr className="my-3 border-gray-300" />
      <p className="text-gray-700">{feedback}</p>
    </div>
  );
}
