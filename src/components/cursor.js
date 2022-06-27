import React from "react";
import MouseFollower from "mouse-follower";
import gsap from "gsap";
MouseFollower.registerGSAP(gsap);

export default function Cursor() {
  const cursorElement = document.querySelector("cursor-element");

  const cursor = new MouseFollower({
    el: cursorElement,
    stateDetection: {
      "-link-pointer": "a, button",
    },
  });

  

  return <div className="cursor-element" />;
}
