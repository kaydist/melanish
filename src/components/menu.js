import React, { useContext } from "react";
import { AppContext } from "../controller/context";
import { PageTransitionStart } from "../animations/pageTransition";

function Menu({ menuOpen, toggleMenu }) {
  const { theme, setTheme } = useContext(AppContext);

  const path = typeof window !== "undefined" ? window.location.pathname : "";

  let activeLink = path.split("/")[1];
  return (
    <div className="menu hidden" id="menu">
      <div className="relative">
        <div className="w-screen min-h-screen fixed z-[49] bg-transparent dark:text-[#030303] text-[#FFFFFF] px-body">
          <div className="flex items-center justify-start min-h-[80vh]">
            <ul className="text-5xl lg:text-[3.8vw] space-y-2 lg:space-y-[1vw] leading-[1] col-start">
              {[
                { label: "Portfolio", link: "/" },
                { label: "Free-Roam", link: "/free-roam" },
                { label: "About", link: "/about" },
              ].map((item, idx) => {
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      menuOpen === true && toggleMenu();
                      PageTransitionStart(item.link);
                    }}
                    disabled={
                      activeLink === item?.link.substring(1) ||
                      (activeLink === "portfolio" && idx === 0)
                        ? true
                        : false
                    }
                  >
                    <div
                      className={`animated-text vertical-anim capitalize menu-link ${
                        activeLink === item?.link.substring(1) ||
                        (activeLink === "portfolio" && idx === 0)
                          ? `active opacity-50`
                          : ``
                      } relative`}
                    >
                      {item.label}
                    </div>
                  </button>
                );
              })}
            </ul>
          </div>

          <button
            className="relative bottom-0 text-sm lg:text-[1.25vw] cursor-pointer"
            onClick={() => {
              theme === "light" ? setTheme("dark") : setTheme("light");
            }}
          >
            {theme === "light" ? (
              <div className="animated-text vertical-anim">Dark Mode</div>
            ) : (
              <div className="animated-text vertical-anim">Light Mode</div>
            )}
          </button>

          <div className="absolute right-0 top-[30vh] text-[15vw] font-bold w-fit text-right leading-[13vw] hidden lg:block">
            <span className="animated-text horizontal-anim">XTREME-</span>
            <br />
            <div className="relative">
              <div className="animated-text horizontal-anim">FOTO</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
