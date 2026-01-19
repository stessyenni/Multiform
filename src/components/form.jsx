"use client";
import React, { useState } from "react";

export default function MultiForm() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    setIsSubmitting(true);

    console.log({
      fullname,
      email,
      Phone,
    });

    const res = await fetch("/api/survey", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        fullname,
        email,
        phone,
      }),
    });

    if (!res.ok) {
      const errData = await res.json();
      console.error("Server error", errData.msg);
      setSubmitted(true);
      setSuccess(false);
      return;
    }

    const { msg, success } = await res.json();
    //   setError(msg)
    setSuccess(success);
    console.log("Successful:", msg);

    if (success) {
      setFullname("");
      setEmail("");
      setPhone("");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full p-5 flex flex-col gap-8 cursor-pointer">
      <h1 className="font-bold text-justify text-[24px] text-black ">
        Personal Info
      </h1>

      <form
        onSubmit={handleSubmit}
        className="w-[70%] p-5 border-10 border-x-[#3c357c] border-y-[#ea5535] text-[13.7px] text-black flex flex-col lg:flex-col cursor-pointer lg:p- gap-5 "
      >
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

        <div className="lg:w-full flex items-center justify-center lg:flex lg:items-center lg:justify-center">
          <button
            type="submit"
            className={`${
              isSubmitting
                ? "w-[40%] h-[30px] lg:h-13 border bg-[#ea5535] font-bold text-[16px] rounded-2xl text-gray-700"
                : "w-[40%] h-[30px] lg:h-13 border bg-[#3c357c] text-white font-bold text-[16px] rounded-2xl"
            }`}
          >
            {isSubmitting ? "Form Submitting..." : "Submit"}
          </button>
        </div>
      </form>
      {submitted && success && (
        <h2 className={"font-bold text-[16px] text-center text-green-800"}>
          Form Submitted Successfully! Thank You For Your Response!
        </h2>
      )}
      {submitted && !success && (
        <h2 className={"font-bold text-[16px] text-center text-red-500"}>
          Something went wrong! Please try again
        </h2>
      )}
    </div>
  );
}
