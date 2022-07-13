import React, { useEffect, useLayoutEffect } from "react";
import Nav from "../components/nav";
import { textSplit } from "../animations/project";
import { gsap } from "gsap";

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
      className={`min-h-screen overflow-x-hidden layout ${
        className ? className : ``
      }`}
      theme="light"
    >
      <Nav />

      <div className="lg:pt-body min-h-screen">{children}</div>
    </div>
  );
}

export default Layout;
