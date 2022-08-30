import React, { useContext, useLayoutEffect } from "react";
import Nav from "../components/nav";
import { textSplit } from "../animations/text-animations";
import { gsap } from "gsap";
import Preloader from "./preloader";
import { AppContext } from "../controller/context";
import WelcomePage from "../components/welcome";

function Layout({ children, className }) {
  useLayoutEffect(() => {
    textSplit();

    const allVerticalParagragh = document.querySelectorAll(
      ".animated-text.vertical-anim"
    );
    const allHorizontalParagragh = document.querySelectorAll(
      ".animated-text.horizontal-anim"
    );

    allVerticalParagragh.forEach((paragraph) => {
      let text = paragraph.querySelectorAll(".paragraph-word");

      text.forEach((text) => {
        gsap.set(text, { y: "500%" });
      });
    });

    allHorizontalParagragh.forEach((paragraph) => {
      let text = paragraph.querySelectorAll(".paragraph-word");

      text.forEach((text) => {
        gsap.set(text, { x: "500%" });
      });
    });
  }, []);

  return (
    <div
      className={`overflow-x-hidden layout ${className ? className : ``}`}
      theme="light"
    >
      <WelcomePage />
      <Nav />
      <div className="lg:pt-body min-h-[100svh] center">{children}</div>
    </div>
  );
}

export default Layout;
