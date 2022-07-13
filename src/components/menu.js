import React, { useContext, useEffect, useLayoutEffect } from "react";
import { Link } from "gatsby";
import { AppContext } from "../controller/context";
import {
  textHorizontalAnimationIn,
  textVerticalAnimation,
} from "../animations/project";
import {
  pageTransitionEnd,
  PageTransitionStart,
} from "../animations/pageTransition";

function Menu({ menuOpen, toggleMenu }) {
  const { theme, setTheme } = useContext(AppContext);

  useLayoutEffect(() => {
    if (menuOpen === true) {
      PageTransitionStart();
      document.querySelector(".loading-indicator").classList.add("hidden");
      textVerticalAnimation();
      textHorizontalAnimationIn();
    } else {
      pageTransitionEnd();
    }
  }, [menuOpen]);

  return (
    <div className={`${menuOpen ? "" : `hidden`}`} id="menu">
      <div className="relative">
        <div className="w-screen min-h-screen fixed z-[49] bg-transparent dark:text-[#030303] text-[#FFFFFF] px-body">
          <div className="flex items-center justify-start min-h-[80vh]">
            <ul className="text-5xl md:text-[3.8vw] space-y-2 md:space-y-[1vw] leading-[1] col-start">
              {[
                { label: "Home", link: "/" },
                { label: "Portfolio", link: "/portfolio" },
                { label: "Free Roam", link: "/free-roam" },
                { label: "Contact", link: "/contact" },
              ].map((item, idx) => {
                return (
                  <Link key={idx} to={item.link}>
                    <div className="animated-text vertical-anim capitalize menu-link relative">
                      {item.label}
                    </div>
                  </Link>
                );
              })}
            </ul>
          </div>

          <button
            className="relative bottom-0 text-sm md:text-[1.25vw] cursor-pointer animated-text vertical-anim"
            onClick={() => {
              theme === "light" ? setTheme("dark") : setTheme("light");
            }}
          >
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </button>

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
