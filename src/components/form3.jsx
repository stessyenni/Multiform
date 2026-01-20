"use client";
import React, { useState } from "react";
import StepperControl from "./stepperControl";
import Submitbtn from "./submitbtn";

export default function Form3() {
  const [jobTitle, setJobTitle] = useState("");
  const [experience, setExperience] = useState("");
  const [preferredJob, setPreferredJob] = useState("");
  const [skills, setSkills] = useState("");

  return (
    <div className="w-full p-5 flex flex-col gap-8 cursor-pointer">
      <h1 className="font-bold text-justify text-[24px] text-black ">
        Career and Skills
      </h1>

      <form className="w-[70%] p-5 border-10 border-x-[#3c357c] border-y-[#ea5535] text-[13.7px] text-black flex flex-col lg:flex-col cursor-pointer lg:p- gap-5 ">
        <label htmlFor="jobTitle" className="lg:text-[17px] lg:font-bold">
          1. Job Title*
        </label>
        <input
          onChange={(e) => setJobTitle(e.target.value)}
          required
          value={jobTitle}
          className="lg:w-[40%] h-11 border rounded-lg pl-2"
          type="text"
          name="jobTitle"
          id="jobTitle"
          placeholder="e.g Student, Developer, Designer, etc."
        />

        <label
          htmlFor="experience"
          className="font-bold text-[16px] lg:text-[17px] lg:font-bold"
        >
          2. Your Experience Level*
        </label>
        <input
          onChange={(e) => setExperience(e.target.value)}
          required
          value={experience}
          className="lg:w-[40%] h-11 border rounded-lg pl-2"
          type="text"
          name="experience"
          id="experience"
          placeholder="<1 year, 1-3 years, 3-5 years, 5+ years"
        />

        <label
          htmlFor="phone"
          className="font-bold text-[16px] lg:text-[17px] lg:font-bold"
        >
          3. What's your preferred job of interest?*
        </label>
        <input
          name="preferredJob"
          id="preferredJob"
          value={preferredJob}
          onChange={(e) => setPreferredJob(e.target.value)}
          required
          className="w-[40%] h-10 border rounded-lg pl-2 shadow-md"
          placeholder="e.g Programmer, Designer, Content Creator"
        ></input>

        <label
          htmlFor="certifications"
          className="font-bold text-[16px] lg:text-[17px] lg:font-bold"
        >
          4. What are your soft and hard skills?*
        </label>
        <textarea
          name="skills"
          id="skills"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
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
