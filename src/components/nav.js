import React, { useState } from "react";
import Menu from "./menu";
import gsap from "gsap";
import {
  PageTransitionStart,
  TransitionAnimationIn,
  TransitionAnimationOut,
} from "../animations/pageTransition";
import {
  textHorizontalAnimationIn,
  textHorizontalAnimationOut,
  textVerticalAnimationIn,
  textVerticalAnimationOut,
} from "../animations/text-animations";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (menuOpen === false) {
      TransitionAnimationIn();
      document.querySelector(".menu").classList.remove("hidden");
      textVerticalAnimationIn();
      textHorizontalAnimationIn();
    } else {
      let onComplete = () => {
        document.querySelector(".menu").classList.add("hidden");
      };
      let verticalTextElem = document.querySelectorAll(
        ".menu .animated-text.vertical-anim"
      );
      let horizontalTextElem = document.querySelectorAll(
        ".menu .animated-text.horizontal-anim"
      );
      gsap
        .timeline({})
        .add(textHorizontalAnimationOut(horizontalTextElem))
        .add(textVerticalAnimationOut(verticalTextElem), "<")
        .add(TransitionAnimationOut(onComplete), "<");
    }
  };

  const path = typeof window !== "undefined" ? window.location.pathname : "";

  return (
    <>
      <nav className="fixed w-full mt-body lg:mt-half-body text-white mix-blend-difference grid grid-flow-col px-body no-select z-50">
        <div className="cursor-pointer small-text font-medium col-span-1 start">
          {path === "/" || path === "/portfolio" ? (
            <button
              onClick={() => {
                PageTransitionStart(`/contact`);
                menuOpen === true && toggleMenu();
              }}
            >
              Contact
            </button>
          ) : path === "/contact" || path === "/free-roam" ? (
            <button
              onClick={() => {
                PageTransitionStart(`/portfolio`);
                menuOpen === true && toggleMenu();
              }}
            >
              Gallery
            </button>
          ) : (
            <button
              onClick={() => {
                if (window.history.length > 2) {
                  PageTransitionStart(-1);
                  menuOpen === true && toggleMenu();
                }
              }}
            >
              Back
            </button>
          )}
        </div>

        <div className="col-span-2 center">
          <div className="text-2xl lg:text-[2vw] font-bold cursor-pointer relative">
            MELANISH
            <sup className="text-[30%] absolute top-[30%] -right-[10%]">o</sup>
          </div>
        </div>

        <div className="col-span-1 end">
          <button
            className="cursor-pointer small-text font-medium"
            onClick={toggleMenu}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </nav>

      <Menu menuOpen={menuOpen} toggleMenu={toggleMenu} />
    </>
  );
}

export default Nav;
