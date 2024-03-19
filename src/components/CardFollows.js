import React from "react";

function CardFollows({
  appIcon,
  arrow,
  name,
  number,
  folow,
  statsitical,
  increase,
}) {
  return (
    <div className="w-full mb-8 md:basis-[20%] p-5 border-t-2 border-blue-600 text-center rounded-md bg-[#f0f3fa] hover:bg-[#e1e3f0] dark:bg-[#252b43] dark:hover:bg-[#333a56]">
      <div className="flex items-center justify-center gap-1 text-center">
        <img src={appIcon} alt="logo" />
        <h3 className="text-lightParagraph dark:text-darkParagraph">{name}</h3>
      </div>
      <p className="text-black dark:text-white text-5xl font-bold pt-6 mb-2">
        {number}
      </p>
      <p className="tracking-widest uppercase text-lightParagraph dark:text-darkParagraph mb-6">
        {folow}
      </p>
      <div className="flex items-center justify-center gap-1">
        <img src={arrow} alt="arrow" />
        <span
          className={`${increase ? "text-[#2db090]" : "text-red-500"} text-sm`}
        >
          {statsitical}
        </span>
      </div>
    </div>
  );
}

export default CardFollows;
