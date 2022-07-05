import { gsap } from "gsap";

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

// export const openFocusImage = (index) => {
//   const gridItems = [
//     ...document.querySelectorAll(".free-roam-grid > .grid-item "),
//   ];

//   const image = document.querySelector(`.grid-item-image-${index}`);

//   gsap.timeline().addLabel("start", 0).set(image, { yPercent: 0 }).to(
//     image,
//     {
//       height: "100vh",
//       width: "100vw",
//       position: "fixed",
//       top: 0,
//       bottom: 0,
//       left: 0,
//       zIndex: 100,
//       yPercent: 0,
//     },
//     "start"
//   );
// };
