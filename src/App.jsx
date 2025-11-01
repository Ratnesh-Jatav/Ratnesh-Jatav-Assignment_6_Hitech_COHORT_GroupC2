import React from "react";
import Header from "./components/Header";
import FeedbackForm from "./components/FeedbackForm";
import Card from "./components/Card";

export default function App() {
  return (
    
    <div className="  font-sans p-6">
      
   
      
      <Header />

      <div className="max-w-3xl mx-auto">
        <FeedbackForm />

        {/* Section Title */}
        <h2 className="text-2xl font-semibold text-center mt-10 mb-4 text-gray-800">
          Sample Feedbacks
        </h2>

        {/* Sample Cards */}
        <Card
          name="Riya Sharma"
          course="React Basics"
          feedback="The course was very helpful and the examples were clear."
        />

        <Card
          name="Aman Verma"
          course="Data Structures"
          feedback="Good course, would like more practice problems."
        />
      </div>
    </div>
  );
}
