import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

export const smoothScrollEffect = () => {
  const lenis = new Lenis({
    lerp: 0.03,
    smooth: true,
  });
  const scrollFn = () => {
    lenis.raf();
    requestAnimationFrame(scrollFn);
  };
  requestAnimationFrame(scrollFn);
  window.lenis = lenis;
};

export const imageAnimation = () => {
  gsap.utils.toArray(".image-wrapper").forEach((wrapper, idx) => {
    let mask = wrapper.querySelector(".image-wrapper-mask");
    let image = wrapper.querySelector(".image-content");

    let startPoint = "";

    if (idx === 0) {
      startPoint = "top bottom";
    } else {
      ScrollTrigger.matchMedia({
        "(min-width: 768px)": function () {
          startPoint = "top 30%";
        },
        "(max-width: 7687x)": function () {
          startPoint = "top 60%";
        },
      });
    }

    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: mask,
        start: startPoint,
      },
      onComplete: () => {
        if (idx === 0 && idx) {
          ScrollTrigger.getById("otherImageSectionTrigger").refresh();
        }
      },
    });

    tl.to(mask, {
      y: "-100%",
      duration: 1.5,
      ease: "expo.out",
    });

    tl.to(
      mask,
      {
        autoAlpha: 0,
      },
      ">"
    );

    tl.fromTo(
      image,
      { y: "15%" },
      {
        y: "-15%",
        scrollTrigger: {
          trigger: mask,
          start: startPoint,
          scrub: true,
        },
      },
      ">"
    );
  });
};

export const otherSectionAnimation = () => {
  const otherImagesCon = document.getElementById("project-other-images");
  const sections = document.querySelectorAll(".panel");

  if (sections.length > 1) {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: otherImagesCon,
        pin: otherImagesCon,
        scrub: 1,
        scroller: document.body,
        end: "+=3500px",
        anticipatePin: 1,
        id: "otherImageSectionTrigger",
      },
    });

    tl.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
    });
  }
};

export const highlightTextAnimation = () => {
  const highlightText = gsap.utils.toArray(".highlight h2");
  highlightText.forEach((text, idx) => {
    gsap.set(text, { color: "#FFFFFF00" });

    const tl = gsap.timeline({
      defaults: {
        ease: "sine.out",
        duration: 2,
      },
      scrollTrigger: {
        trigger: text,
        start: "top 90%",
        end: "top 30%",
        scrub: true,
      },
    });

    tl.fromTo(text, { color: "#FFFFFF00" }, { color: "inherit" });

    tl.fromTo(text, { color: "inherit" }, { color: "#FFFFFF00" }, "+=200%");
  });
};
