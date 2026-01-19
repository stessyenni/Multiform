"use client";

import React from "react";

const SidebarSteps = () => {
  const steps = [
    { stepNum: 1, title: "Step 1", description: "Your Info" },
    { stepNum: 2, title: "Step 2", description: "Select Plan" },
    { stepNum: 3, title: "Step 3", description: "Add-Ons" },
    { stepNum: 4, title: "Step 4", description: "Summary" },
  ];
  const [currentStep, setCurrentStep] = React.useState(1);
  return (
    <aside className=" h-full rounded-lg pt-20 bg-blue-600 w-fit px-15 lg:bg-[url('/bg-sidebar-desktop.svg')] bg-bottom bg-no-repeat bg-cover ">
      <nav className=" h-full flex flex-col  ">
        {steps.map((step) => (
          <div key={step.stepNum} className="flex items-center gap-2 mb-4">
            <div
              className={` w-8 h-8 rounded-full ${currentStep === step.stepNum ? "bg-blue-500 text-white" : "bg-gray-100 text-black"} flex items-center justify-center font-bold `}
            >
              {step.stepNum}
            </div>
            <div>
              <h3
                className={`${currentStep === step.stepNum ? "text-green-400 font-bold" : "text-gray-200"} text-semibold`}
              >
                {step.title}
              </h3>
              <p
                className={`${currentStep === step.stepNum ? "text-green-300" : "text-gray-800"} text-bold`}
              >
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default SidebarSteps;
