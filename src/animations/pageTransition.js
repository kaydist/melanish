import { gsap } from "gsap";
import { currentCursorPosition } from "../controller/utils";
import { navigate } from "gatsby";

export const PageTransitionStart = (to, e) => {
  const tansitionElem = document.createElement("div");
  document.body.appendChild(tansitionElem);
  tansitionElem.classList.add("transition-elem");
  document.body.style.overflow = "hidden";

  gsap.set(tansitionElem, {
    top: e?.clientY || currentCursorPosition().y,
    left: e?.clientX || currentCursorPosition().x,
    transformOrigin: "center center",
  });

  gsap.to(tansitionElem, {
    scale: 110,
    ease: "expo.out",
    duration: 1.5,
    onComplete: () => {
      if (to) {
        navigate(to);
      }
    },
  });
};

export const pageTransitionEnd = (onCompleteFun) => {
  document.body.style.overflow = "auto";
  const tansitionElem = document.querySelector(".transition-elem");
  gsap.to(tansitionElem, {
    scale: 0,
    ease: "expo.in",
    duration: 1.5,
    onComplete: () => {
      if (tansitionElem) {
        document.body.removeChild(tansitionElem);
      }
      if (onCompleteFun) {
        onCompleteFun();
      }
    },
  });
};
