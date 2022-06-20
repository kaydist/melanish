import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const otherSectionAnimation = () => {
  const otherImagesCon = document.getElementById("project-other-images");
  let sections = gsap.utils.toArray(".panel");

  if (sections.length > 1) {
    ScrollTrigger.matchMedia({
      // large
      "(min-width: 768px)": function () {
        gsap.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: otherImagesCon,
            pin: otherImagesCon,
            scrub: 1,
            end: "+=3000px",
            // anticipatePin: 1,
          },
        });
      },
    });
  }
};
