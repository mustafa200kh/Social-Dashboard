import React, { useRef, useState } from "react";

function Navbar() {
  let circleRef = useRef();
  let [darkMode, setDarkMode] = useState(false);

  let modeHandler = () => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      circleRef.current.classList.remove("bg-white");
      circleRef.current.classList.remove("left-[35px]");
      circleRef.current.classList.add("bg-[#20222f]");
      circleRef.current.classList.add("left-[4px]");
    } else {
      document.documentElement.classList.remove("dark");
      circleRef.current.classList.remove("bg-[#20222f]");
      circleRef.current.classList.remove("left-[4px]");
      circleRef.current.classList.add("bg-white");
      circleRef.current.classList.add("left-[35px]");
    }
  };
  return (
    <header className="flex flex-col md:flex-row justify-between items-center pt-6 pb-20 px-4 md:px-12 bg-[#f8f9fe] dark:bg-[#20222f] rounded-bl-3xl rounded-br-3xl">
      <div className="w-full md:flex-1 border-b-2 dark:border-b-darkParagraph border-b-lightParagraph md:border-none pb-4 md:pb-0">
        <p className="text-xl md:text-3xl font-bold mb-3 dark:text-white">
          Social Media Dashboard
        </p>
        <p className="font-semibold text-lightParagraph dark:text-darkParagraph">
          {" "}
          total followers:20,004{" "}
        </p>
      </div>
      <div className="w-full md:basis-[16%] flex items-center justify-end gap-3 pt-4 md:pt-0">
        <div className="font-medium text-lightParagraph dark:text-darkParagraph">
          Dark Mode
        </div>
        <div
          className="px-8 py-4 rounded-full w-[40px] h-[15px] gradient-color relative cursor-pointer"
          onClick={() => {
            modeHandler();
            setDarkMode(!darkMode);
          }}
        >
          <div
            ref={circleRef}
            className="w-[25px] h-[25px] rounded-full bg-[#20222f] absolute top-1/2 left-[4px] translate-y-[-50%] z-10 transition-all duration-200"
          ></div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
