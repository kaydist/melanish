import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const imageAnimation = () => {
  gsap.utils.toArray(".image-wrapper").forEach((wrapper) => {
    let mask = wrapper.querySelector(".image-wrapper-mask");
    let image = wrapper.querySelector(".image-content");

    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: mask,
        start: "top 30%",
      },
    });

    tl.to(mask, {
      y: "-100%",
      duration: 1,
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
          start: "top 10%",
          scrub: true,
        },
      },
      ">"
    );
  });
};

export const textAnimation = () => {
  function hide(elem) {
    gsap.set(elem, { autoAlpha: 0 });
  }

  gsap.utils.toArray(".animated-text").forEach((elem) => {
    hide(elem);
    var y = 50;
    elem.style.opacity = "0";
    gsap.fromTo(
      elem,
      { y: y, autoAlpha: 0 },
      {
        duration: 1.25,
        y: 0,
        autoAlpha: 1,
        ease: "expo",
        overwrite: "auto",
        scrollTrigger: {
          trigger: elem,
          start: "top 80%",
        },
      }
    );
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
        pinSpacing: true,
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

export const nextProjectHoverAnimation = () => {
  const footerContainer = document.querySelector(".next-project-footer");

  const footerImage = document.querySelectorAll(".next-project-image");

  footerContainer.addEventListener('mouseenter', ()=>{
      gsap.to(footerImage[0], {
    x: "30%",
    y: "10%",
    rotate: "-10deg",
  });

  gsap.to(footerImage[1], {
    x: "-30%",
    y: "-10%",
    rotate: "10deg"
  });
  })

  footerContainer.addEventListener('mouseleave', ()=>{
      gsap.to(footerImage[0], {
    x: 0,
    y: 0,
    rotate: "6deg",
  });

  gsap.to(footerImage[1], {
    x: 0,
    y: 0,
    rotate: "-8deg",
  });
  })

};
