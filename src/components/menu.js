import React from "react";

function Menu() {
  return (
    <div className="hidden" id="menu">
      <div className="relative">
        <div className="w-screen min-h-screen fixed z-40 bg-white text-[#030303] px-body">
          <div className="flex items-center justify-start min-h-[80vh]">
            <ul className="text-2xl md:text-[3.8vw]">
              <li className="my-2 md:my-[2.5vw]">Home</li>
              <li className="my-2 md:my-[2.5vw]">Portfolio</li>
              <li className="my-2 md:my-[2.5vw]">Free Roam</li>
              <li className="my-2 md:my-[2.5vw]">Contact</li>
            </ul>
          </div>

          <div className="relative bottom-0 text-sm md:text-[1.25vw]">
            Dark Mode
          </div>

          <div className="absolute right-0 top-[60vh] text-[10vw] font-bold w-fit text-right leading-[8vw] hidden md:block">
            <span className="">MELA-</span><br />
            <span className="mr-[10vw]">NISH</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
