import { gsap } from "gsap";
import { currentCursorPosition } from "../controller/utils";
import { navigate } from "gatsby";

export const TransitionAnimationIn = (to, e) => {
  //Manulally remove all cursor states

  const cursor = document.querySelector(".mf-cursor");
  cursor.classList.remove("-text");
  cursor.classList.remove("-link-pointer");
  cursor.classList.remove("-media");

  const transitionElem = document.createElement("div");

  document.body.appendChild(transitionElem);

  transitionElem.classList.add("transition-elem");

  gsap.set(transitionElem, {
    top: e?.clientY || currentCursorPosition().y,
    left: e?.clientX || currentCursorPosition().x,
    transformOrigin: "center center",
  });

  gsap.timeline({}).to(
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

export const TransitionAnimationOut = (onCompleteFun) => {
  let transitionElem = document.querySelector(".transition-elem");
  gsap.to(transitionElem, {
    scale: 0,
    ease: "expo.in",
    duration: 1.5,
    onComplete: () => {
      if (transitionElem) {
        document.body.removeChild(transitionElem);
        document.body.style.overflow = "auto";
      }
      if (onCompleteFun) {
        onCompleteFun();
      }
    },
  });
};

export const PageTransitionStart = (to, e) => {
  TransitionAnimationIn(to, e);
  document.querySelectorAll("nav button").forEach((btn) => {
    btn.classList.add("hidden");
  });

  const loadingIndicator = document.createElement("p");
  document.body.appendChild(loadingIndicator);

  loadingIndicator.innerHTML = "LOADING...";
  loadingIndicator.classList.add("loading-indicator");
  document.body.style.overflow = "hidden";

  gsap.set(loadingIndicator, { opacity: 0 });
  gsap.to(loadingIndicator, {
    opacity: 1,
    duration: 0.5,
    yoyo: true,
    repeat: -1,
  });
};

export const pageTransitionEnd = (onCompleteFun) => {
  const loadingIndicator = document.querySelector(".loading-indicator");

  gsap.to(loadingIndicator, {
    opacity: 0,
    duration: 0.5,
    onComplete: () => {
      if (loadingIndicator) {
        document.body.removeChild(loadingIndicator);
      }
    },
  });
  TransitionAnimationOut(onCompleteFun);
};
