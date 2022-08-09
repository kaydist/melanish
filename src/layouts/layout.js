import React, { useContext, useLayoutEffect } from "react";
import Nav from "../components/nav";
import { textSplit } from "../animations/text-animations";
import { gsap } from "gsap";
import Preloader from "../components/preloader";
import { AppContext } from "../controller/context";

function Layout({ children, className }) {
  const { preloaded } = useContext(AppContext);
  useLayoutEffect(() => {
    if (preloaded) {
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
    }
  }, [preloaded]);

  if (preloaded === false) {
    return <Preloader />;
  } else {
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
}

export default Layout;
