import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
    });

    tl.to(mask, {
      y: "-100%",
      duration: 1.5,
      ease: "power4.out",
    });

    tl.to(mask, { autoAlpha: 0 }, ">");

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
        onComplete: () => {
          if (idx === 0) {
            ScrollTrigger.refresh();
          }
        },
      },
      ">"
    );
  });
};

export const textAnimation = () => {
  const allParagragh = document.querySelectorAll(".animated-text");

  allParagragh.forEach((paragraph) => {
    let word = paragraph.textContent.split(" ");
    paragraph.textContent = "";
    word.forEach((word) => {
      paragraph.innerHTML += `<span class="word-overflow-container overflow-hidden inline-block"><div class="paragrah-word ">${word} </div></span> `;
    });

    gsap.utils.toArray(".paragrah-word").forEach((text) => {
      var y = "500%";

      text.style.transform = "translateY:" + y;

      gsap.fromTo(
        text,
        { y: y },
        {
          y: 0,
          duration: 1.5,
          ease: "expo",
          overwrite: "auto",
          scrollTrigger: {
            trigger: paragraph,
            start: "top 80%",
          },
        }
      );
    });
  });
};

export const otherSectionAnimation = () => {
  const otherImagesCon = document.getElementById("project-other-images");
  const sections = document.querySelectorAll(".panel");
  if (sections.length > 1) {
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: otherImagesCon,
        pin: otherImagesCon,
        scrub: 1,
        end: "+=3000px",
        anticipatePin: 1,
      },
    });
  }
};

export const highlightTextAnimation = () => {
  const highlightText = gsap.utils.toArray(".highlight h2");
  highlightText.forEach((text, idx) => {
    gsap.set(text, { color: "#FFFFFF00" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: text,
        start: "top 90%",
        end: "top 30%",
        scrub: true,
      },
    });

    tl.fromTo(text, { color: "#FFFFFF00" }, { color: "#030303" });

    tl.fromTo(text, { color: "#030303" }, { color: "#FFFFFF00" }, "+=200%");
  });
};
