"use client";
import React, { useState } from "react";
import StepperControl from "./stepperControl";
import Submitbtn from "./submitbtn";

export default function MultiForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSubmitted(false);
    setSuccess(false);

    try {
      console.log({
        fullname,
        email,
        phone,
      });

      const res = await fetch("/api/applicationform", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullname,
          email,
          phone,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        console.error("Server error:", data.msg);
        setSuccess(false);
        setSubmitted(true);
        return;
      }

      console.log("Successful:", data.msg);
      setSuccess(true);
      setSubmitted(true);

      // Clear form on success
      setFullname("");
      setEmail("");
      setPhone("");
    } catch (error) {
      console.error("Request failed:", error);
      setSuccess(false);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full p-5 flex flex-col gap-8 cursor-pointer">
      <form>
        <h1 className="font-bold text-justify text-[24px] text-black "> </h1>

        {/* Navigation Controls */}

        <Submitbtn isSubmitting={isSubmitting} />
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
