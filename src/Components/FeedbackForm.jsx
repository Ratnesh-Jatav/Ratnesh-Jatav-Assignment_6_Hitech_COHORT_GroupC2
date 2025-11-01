import React, { useState } from "react";

export default function FeedbackForm() {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name, course, feedback };
    console.log("Feedback submitted:", data);

    // clear inputs after submit
    setName("");
    setCourse("");
    setFeedback("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-6 bg-white shadow-md rounded-xl p-6 border border-gray-200"
    >
      <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
        Submit Your Feedback
      </h2>

      {/* Name Input */}
      <div className="mb-4">
        
        <label className="block text-gray-700 font-medium mb-1">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Your name"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Course Input */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-1">Course</label>
        <input
          type="text"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          required
          placeholder="Course name"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Feedback Textarea */}
      <div className="mb-5">
        <label className="block text-gray-700 font-medium mb-1">
          Feedback
        </label>
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          required
          placeholder="Write your feedback..."
          rows={4}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        ></textarea>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-md transition duration-200"
      >
        Submit
      </button>
    </form>
  );
}
