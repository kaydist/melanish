import { gsap } from "gsap";

export const imageGalleryLayout = () => {
  const gridItems = [
    ...document.querySelectorAll(".free-roam-grid > .grid-item"),
  ];

  gridItems.forEach((item) => {
    const image = item.querySelector(".grid-item-img");

    const yPercentRandomVal = gsap.utils.random(-100, 100);

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
