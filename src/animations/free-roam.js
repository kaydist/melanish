import { gsap } from "gsap";
import { preloadImages } from "../controller/utils";

export const imageGalleryLayout = () => {
  preloadImages().then(() => {
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
  });
};

export const openFocusImage = (index, focusState) => {
  var root = document.documentElement;
  var body = document.body;
  const openImageCon = document.querySelector(".open-image-container");
  const image = document.querySelector(`.grid-item-image-${index}`);

  function calculatePosition(element) {
    var rect = element.getBoundingClientRect();

    var scrollTop = window.pageYOffset || root.scrollTop || body.scrollTop || 0;
    var scrollLeft =
      window.pageXOffset || root.scrollLeft || body.scrollLeft || 0;

    var clientTop = root.clientTop || body.clientTop || 0;
    var clientLeft = root.clientLeft || body.clientLeft || 0;

    return {
      top: Math.round(rect.top + scrollTop - clientTop),
      left: Math.round(rect.left + scrollLeft - clientLeft),
      height: rect.height,
      width: rect.width,
    };
  }

  function animateHero(fromHero, toHero) {
    var clone = fromHero.cloneNode(true);

    var from = calculatePosition(fromHero);
    var to = calculatePosition(toHero);

    gsap.set([fromHero, toHero], { visibility: "hidden" });
    gsap.set(clone, { position: "absolute", margin: 0 });

    body.appendChild(clone);

    gsap.set(clone, from);

    gsap.to(clone, {
      x: to.left - from.left,
      y: to.top - from.top,
      width: to.width,
      height: to.height,
      autoRound: false,
      ease: "Power4.out",
      duration: 0.3,
      onComplete: () => {
        gsap.set(toHero, { visibility: "visible", zIndex: 50 });
        body.removeChild(clone);
      },
    });
  }

  if (focusState === true) {
    animateHero(openImageCon, image);
  } else {
    animateHero(image, openImageCon);
  }
};
