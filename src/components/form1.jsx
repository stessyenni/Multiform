"use client";
import React, { useState } from "react";
import StepperControl from "./stepperControl";
import Submitbtn from "./submitbtn";

export default function Form1() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div className="w-full p-5 flex flex-col gap-8 cursor-pointer">
      <h1 className="font-bold text-justify text-[24px] text-black ">
        Personal Info
      </h1>
      <form className="w-[70%] p-5 border-10 border-x-[#3c357c] border-y-[#ea5535] text-[13.7px] text-black flex flex-col lg:flex-col cursor-pointer lg:p- gap-5 ">
        <label htmlFor="fullname" className="lg:text-[17px] lg:font-bold">
          1. Name*
        </label>
        <input
          onChange={(e) => setFullname(e.target.value)}
          required
          value={fullname}
          className="lg:w-[40%] h-11 border rounded-lg pl-2"
          type="text"
          name="fullname"
          id="fullname"
          placeholder="e.g John Doe"
        />
        <label
          htmlFor="email"
          className="font-bold text-[16px] lg:text-[17px] lg:font-bold"
        >
          3. Your Email Address*
        </label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          required
          value={email}
          className="lg:w-[40%] h-11 border rounded-lg pl-2"
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
        />
        <label
          htmlFor="phone"
          className="font-bold text-[16px] lg:text-[17px] lg:font-bold"
        >
          5. Phone Number*
        </label>
        <input
          name="phone"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          className="w-[40%] h-10 border rounded-lg pl-2 shadow-md"
          placeholder="e.g +1 234 567 890"
        ></input>
        {/* Navigation Controls */}
        <StepperControl />
      </form>
    </div>
  );
}
