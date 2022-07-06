import { gsap } from "gsap";
import { currentCursorPosition } from "./utils";

export const imageGalleryLayout = () => {
  const gridItems = [
    ...document.querySelectorAll(".free-roam-grid > .grid-item"),
  ];

  gridItems.forEach((item) => {
    const image = item.querySelector(".grid-item-img");

    const yPercentRandomVal = gsap.utils.random(0, 100);

    gsap
      .timeline()
      .addLabel("start", 0)
      .to(
        image,
        {
          ease: "none",
          yPercent: yPercentRandomVal,
          scrollTrigger: {
            trigger: item,
            start: "top bottom",
            end: "top top",
            scrub: true,
          },
        },
        "start"
      );
  });
};

export const openFocusImage = (index, focusState) => {
  const gridItems = [
    ...document.querySelectorAll(".free-roam-grid > .grid-item "),
  ];
  var root = document.documentElement;
  var body = document.body;

  const image = document.querySelector(`.grid-item-image-${index}`);

  function calculatePosition() {
    var rect = image.getBoundingClientRect();

    var scrollTop = window.pageYOffset || root.scrollTop || body.scrollTop || 0;
    var scrollLeft =
      window.pageXOffset || root.scrollLeft || body.scrollLeft || 0;

    var clientTop = root.clientTop || body.clientTop || 0;
    var clientLeft = root.clientLeft || body.clientLeft || 0;

    return {
      top: Math.round(rect.top + scrollTop - clientTop),
      left: Math.round(rect.left + scrollLeft - clientLeft),
    };
  }

  if (!focusState) {
    gsap
      .timeline()
      .addLabel("start", 0)
      .set(image, {
        yPercent: 0,
        left: calculatePosition().left,
        top: calculatePosition().top,
      })
      .to(
        image,
        {
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          zIndex: 100,
          position: "fixed",
          yPercent: 0,
          onComplete: () => {
            document.body.style.overflow = "hidden";
          },
        },
        "start"
      );
  } else {
    gsap.fromTo(
      image,
      {
        // height: "100vh",
        // width: "100vw",
        top: 0,
        left: 0,
      },
      {
        height: "100%",
        width: "100%",
        left: image.getBoundingClientRect().left,
        top: image.getBoundingClientRect().top,
        onComplete: () => {
          image.style.position = "static";
          document.body.style.overflow = "auto";
        },
      }
    );
  }
};
