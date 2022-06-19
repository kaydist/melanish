import React, { useContext } from "react";
import { Link } from "gatsby";
import { AppContext } from "../controller/context";

function Menu() {
  const [theme, setTheme] = useContext(AppContext);

  return (
    <div className="hidden" id="menu">
      <div className="relative">
        <div className="w-screen min-h-screen fixed z-40 bg-white dark:bg-[#030303] text-[#030303] dark:text-[#FFFFFF] px-body">
          <div className="flex items-center justify-start min-h-[80vh]">
            <ul className="text-2xl md:text-[3.8vw]">
              <Link to="/">
                <li className="my-2 md:my-[2.5vw]">Home</li>
              </Link>

              <Link to="/portfolio">
                <li className="my-2 md:my-[2.5vw]">Portfolio</li>
              </Link>

              <Link to="/free-roam">
                <li className="my-2 md:my-[2.5vw]">Free Roam</li>
              </Link>

              <Link to="/contact">
                <li className="my-2 md:my-[2.5vw]">Contact</li>
              </Link>
            </ul>
          </div>

          <div
            className="relative bottom-0 text-sm md:text-[1.25vw] cursor-pointer"
            onClick={() => {
              theme === "light" ? setTheme("dark") : setTheme("light");
            }}
          >
            Dark Mode
          </div>

          <div className="absolute right-0 top-[60vh] text-[10vw] font-bold w-fit text-right leading-[8vw] hidden md:block">
            <span className="">MELA-</span>
            <br />
            <span className="mr-[10vw]">NISH</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
