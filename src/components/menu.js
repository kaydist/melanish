import React, { useContext, useEffect, useLayoutEffect } from "react";
import { Link } from "gatsby";
import { AppContext } from "../controller/context";
import {
  textHorizontalAnimationIn,
  textVerticalAnimation,
} from "../animations/project";

function Menu({ menuOpen, toggleMenu }) {
  const [theme, setTheme] = useContext(AppContext);

  useLayoutEffect(() => {
    if (menuOpen === true) {
      textVerticalAnimation();
      textHorizontalAnimationIn();
    }
  }, [menuOpen]);

  return (
    <div className={`${menuOpen ? "" : `hidden`}`} id="menu">
      <div className="relative">
        <div className="w-screen min-h-screen fixed z-40 bg-white dark:bg-[#030303] text-[#030303] dark:text-[#FFFFFF] px-body">
          <div className="flex items-center justify-start min-h-[80vh]">
            <ul className="text-5xl md:text-[3.8vw] space-y-2 md:space-y-[1vw] leading-[1] col-start">
              {[
                { label: "Home", link: "/" },
                { label: "Portfolio", link: "/portfolio" },
                { label: "Free Roam", link: "/free-roam" },
                { label: "Contact", link: "/contact" },
              ].map((item, idx) => {
                return (
                  <Link key={idx} to={item.link} onClick={toggleMenu}>
                    <div className="animated-text vertical-anim capitalize">
                      {item.label}
                    </div>
                  </Link>
                );
              })}
            </ul>
          </div>

          <div
            className="relative bottom-0 text-sm md:text-[1.25vw] cursor-pointer animated-text vertical-anim"
            onClick={() => {
              theme === "light" ? setTheme("dark") : setTheme("light");
            }}
          >
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </div>

          <div className="absolute right-0 top-[30vh] text-[15vw] font-bold w-fit text-right leading-[13vw] hidden md:block">
            <span className="animated-text horizontal-anim">MELA-</span>
            <br />
            <div className="mr-[15vw] relative">
              <div className="animated-text horizontal-anim">NISH</div>

              <sup className="text-[30%] absolute top-[30%] -right-[10%]">
                o
              </sup>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
