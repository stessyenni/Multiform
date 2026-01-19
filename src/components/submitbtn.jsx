import React from "react";

const Submitbtn = ({ isSubmitting }) => {
  return (
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
  );
};

export default Submitbtn;
