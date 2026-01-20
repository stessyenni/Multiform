"use client";
import React from "react";

const StepperControl = ({ isSubmitting }) => {
  return (
    <div className="container flex justify-between mt-4 mb-8">
      <button
        disabled={isSubmitting}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-800"
      >
        Previous
      </button>
      <button
        disabled={isSubmitting}
        className="bg-green-500 text-white px-8 py-3 rounded hover:bg-green-700"
      >
        Next
      </button>
    </div>
  );
};

export default StepperControl;
