"use client";
import React from "react";

const StepperControl = () => {
  return (
    <div className="container flex justify-around mt-4 mb-8">
      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Previous
      </button>
      <button className="bg-green-500 text-white px-4 py-2 rounded">
        Next
      </button>
    </div>
  );
};

export default StepperControl;
