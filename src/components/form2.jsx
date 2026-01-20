"use client";
import React, { useState } from "react";
import StepperControl from "./stepperControl";
import Submitbtn from "./submitbtn";

export default function Form2() {
  const [educationLevel, setEducationLevel] = useState("");
  const [program, setProgram] = useState("");
  const [certifications, setCertifications] = useState("");

  return (
    <div className="w-full p-5 flex flex-col gap-8 cursor-pointer">
      <h1 className="font-bold text-justify text-[24px] text-black ">
        Educational Info
      </h1>

      <form className="w-[70%] p-5 border-10 border-x-[#3c357c] border-y-[#ea5535] text-[13.7px] text-black flex flex-col lg:flex-col cursor-pointer lg:p- gap-5 ">
        <label htmlFor="fullname" className="lg:text-[17px] lg:font-bold">
          1. Level of Education*
        </label>
        <select
          name="educationLevel"
          id="educationLevel"
          value={educationLevel}
          onChange={(e) => setEducationLevel(e.target.value)}
          required
          className="w-[40%] h-10 border-slate-300 shadow-md"
        >
          <option value="">Select</option>
          <option value="Olevel">O/L Certificate</option>
          <option value="Alevel">A/L Certificate</option>
          <option value="Bachelors">Bachelors Degree</option>
          <option value="Masters">Masters Degree</option>
          <option value="PostGraduate">Post Graduate</option>
        </select>

        <label
          htmlFor="program"
          className="font-bold text-[16px] lg:text-[17px] lg:font-bold"
        >
          2. Program or Subjects of Study*
        </label>
        <textarea
          onChange={(e) => setProgram(e.target.value)}
          required
          value={program}
          className="lg:w-20 h-10 border rounded-lg pl-2"
          type="text"
          name="program"
          id="program"
          placeholder="Enter your program or subject details"
        />

        <label
          htmlFor="certifications"
          className="font-bold text-[16px] lg:text-[17px] lg:font-bold"
        >
          3. Certifications*
        </label>
        <textarea
          name="certifications"
          id="certifications"
          value={certifications}
          onChange={(e) => setCertifications(e.target.value)}
          required
          className="w-20 h-10 border rounded-lg pl-2 shadow-md"
          placeholder="Enter any certifications you have. Training or online course certifications"
        />

        {/* Navigation Controls */}
        <StepperControl />
      </form>
    </div>
  );
}
