import "./src/styles/tailwind/tailwind.css";
import "./src/styles/scss/index.scss";
import React from "react";
import AppState from "./src/controller/context";
import MouseFollower from "mouse-follower";
import gsap from "gsap";
MouseFollower.registerGSAP(gsap);

const cursor = new MouseFollower({
  stateDetection: {
    "-link-pointer": "a, button",
  },
});

export const wrapRootElement = ({ element }) => (
  <>
    <AppState>{element}</AppState>
  </>
);
