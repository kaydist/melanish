import { gsap } from "gsap";
import { currentCursorPosition } from "../controller/utils";
import { navigate } from "gatsby";

export const PageTransitionStart = (to, e) => {
  //Manulally remove all cursor states
  const cursor = document.querySelector(".mf-cursor");
  cursor.classList.remove("-text");
  cursor.classList.remove("-link-pointer");
  cursor.classList.remove("-media");

  const transitionElem = document.createElement("div");
  const loadingIndicator = document.createElement("p");
  document.body.appendChild(loadingIndicator);
  document.body.appendChild(transitionElem);

  loadingIndicator.innerHTML = "LOADING...";
  transitionElem.classList.add("transition-elem");
  loadingIndicator.classList.add("loading-indicator");
  document.body.style.overflow = "hidden";

  gsap.set(transitionElem, {
    top: e?.clientY || currentCursorPosition().y,
    left: e?.clientX || currentCursorPosition().x,
    transformOrigin: "center center",
  });
  gsap.set(loadingIndicator, { opacity: 0 });

  const tl = gsap
    .timeline({})
    .to(loadingIndicator, { opacity: 1, duration: 0.5, yoyo: true, repeat: -1 })
    .to(
      transitionElem,
      {
        scale: 110,
        ease: "expo.out",
        duration: 1.5,
        onComplete: () => {
          if (to) {
            navigate(to);
          }
        },
      },
      "<"
    );
};

export const pageTransitionEnd = (onCompleteFun) => {
  const transitionElem = document.querySelector(".transition-elem");
  const loadingIndicator = document.querySelector(".loading-indicator");

  gsap.to(loadingIndicator, { opacity: 0, duration: 0.5 });
  gsap.to(transitionElem, {
    scale: 0,
    ease: "expo.in",
    duration: 1.5,
    onComplete: () => {
      if (transitionElem) {
        document.body.style.overflow = "auto";
        document.body.removeChild(transitionElem);
        document.body.removeChild(loadingIndicator);
      }
      if (onCompleteFun) {
        onCompleteFun();
      }
    },
  });
};
