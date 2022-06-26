import React, { useLayoutEffect } from "react";
import Nav from "../components/nav";
import { textSplit } from "../animations/project";
import cursor from "../components/cursor";

function Layout({ children }) {
  useLayoutEffect(() => {
    textSplit();
    // cursor();

    const allVerticalParagragh = document.querySelectorAll(
      ".animated-text.vertical-anim"
    );
    const allHorizontalParagragh = document.querySelectorAll(
      ".animated-text.horizontal-anim"
    );

    allVerticalParagragh.forEach((paragraph) => {
      let text = paragraph.querySelectorAll(".paragraph-word");

      text.forEach((text) => {
        text.style.transform = "translateY: 500%";
      });
    });

    allHorizontalParagragh.forEach((paragraph) => {
      let text = paragraph.querySelectorAll(".paragraph-word");

      text.forEach((text) => {
        text.style.transform = "translateX: 500%";
      });
    });
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden" theme="light">
      <Nav />

      <div className="md:pt-body min-h-screen">{children}</div>
    </div>
  );
}

export default Layout;
