import React from "react";

function PercentCard({ text, appIcon, number, arrow, percent, increase }) {
  return (
    <div className="p-6 bg-[#f0f3fa] hover:bg-[#e1e3f0] dark:bg-[#252b43] dark:hover:bg-[#333a56] rounded-lg">
      {/* first row */}
      <div className="flex justify-between mb-3">
        <p className="font-semibold text-lightParagraph dark:text-darkParagraph">
          {text}
        </p>
        <div className="">
          <img src={appIcon} alt="arrow" className="mx-auto" />
        </div>
      </div>
      {/* second row */}
      <div className="flex justify-between items-end">
        <p className="text-3xl font-bold dark:text-white">{number}</p>
        <div className="flex items-center gap-1">
          <img src={arrow} alt="arrow" />
          <span
            className={`${
              increase ? "text-[#2db090]" : "text-red-500"
            } text-sm`}
          >
            {percent}
          </span>
        </div>
      </div>
    </div>
  );
}

export default PercentCard;
