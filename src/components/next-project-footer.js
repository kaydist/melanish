import React, { useLayoutEffect, useContext } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import gsap from "gsap";
import { AppContext } from "../controller/context";
import TouchAndHold from "./touch-and-hold";
import { CSSRulePlugin } from "gsap/all";
import { PageTransitionStart } from "../animations/pageTransition";

export default function NextProject({ nextProject, theme }) {
  const { setPageChange } = useContext(AppContext);
  var timer = 0;

  useLayoutEffect(() => {
    const footerContainer = document.querySelector(".next-project-footer");

    const touchContainer = document.querySelector(".next-project-footer-container .touch-action");

    const footerImage = document.querySelectorAll(".next-project-image");

    const nextProjectHoverIn = () => {
      var tl = gsap.timeline({
        defaults: {
          ease: "ease.in",
        },
      });
      tl.to(footerImage[0], {
        x: "30%",
        y: "10%",
        rotate: "-10deg",
      });

      tl.to(
        footerImage[1],
        {
          x: "-30%",
          y: "-10%",
          rotate: "10deg",
        },
        "<"
      );
    };

    const nextProjectHoverOut = () => {
      var tl = gsap.timeline({
        defaults: {
          ease: "ease.out",
        },
      });
      tl.to(footerImage[0], {
        x: 0,
        y: 0,
        rotate: "6deg",
      });

      tl.to(
        footerImage[1],
        {
          x: 0,
          y: 0,
          rotate: "-8deg",
        },
        "<"
      );
    };

    var tl = gsap.timeline();
    const nextProjectHoverActive = () => {
      tl.to(
        footerImage[0],
        {
          x: "0%",
          y: "200%",
          ease: "expo.in",
          rotate: "-10deg",
          duration: 1.5,
        },
        "<"
      );

      tl.to(
        footerImage[1],
        {
          x: "0%",
          y: "200%",
          ease: "expo.in",
          rotate: "10deg",
          duration: 1.5,
        },
        "<"
      );
    };

    footerContainer.addEventListener("mouseenter", () => {
      nextProjectHoverIn(footerImage);
    });

    footerContainer.addEventListener("mouseleave", () => {
      nextProjectHoverOut(footerImage);
    });

    footerContainer.addEventListener("mousedown", (e) => {
      nextProjectHoverActive(footerImage);

      timer = setTimeout(() => {
        setPageChange(true);
        PageTransitionStart(`/portfolio/${nextProject?.projectTitle}`, e);
      }, 1500);
    });

    touchContainer.addEventListener("touchstart", (e) => {
      console.log(e);
      nextProjectHoverActive(footerImage);
      timer = setTimeout(() => {
        PageTransitionStart(
          `/portfolio/${nextProject?.projectTitle}`,
          e.touches[0]
        );
      }, 1500);
    });

    footerContainer.addEventListener("mouseup", () => {
      tl.clear();
      clearTimeout(timer);
      nextProjectHoverIn(footerImage);
    });

    touchContainer.addEventListener("touchend", () => {
      tl.clear();
      clearTimeout(timer);
      nextProjectHoverIn(footerImage);
    });
  }, []);

  return (
    <div className="relative next-project-footer-container">
      <div
        className="overflow-hidden center dark:bg-[#0C0C0C] bg-[#e8e8e8] h-[70vh] lg:h-[66.46vw] lg:max-h-[80vh] relative cursor-pointer next-project-footer"
        data-cursor-text="Click & Hold"
        data-cursor={`${theme === "dark" ? `-cusor-text-dark` : `-text-light`}`}
      >
        <div className="col-center text-center uppercase z-20 text-[#FFFFFF]">
          <p className="experience">NEXT PROJECT</p>
          <h2 className="uppercase font-CormorantGaramond text-[10.69vw] relative next-project-title">
            {nextProject?.projectTitle}
          </h2>
        </div>

        <div className="absolute center w-full h-full">
          <div className="w-[40%] lg:w-[25%] h-[50%] rotate-6 overflow-hidden -mt-16 next-project-image">
            <div className="absolute min-w-full min-h-full bg-[#00000090] z-10" />
            <GatsbyImage
              image={getImage(nextProject?.image2.gatsbyImageData)}
              alt={nextProject?.image2?.title}
              className="w-full h-full"
              imgStyle={{
                width: "100%",
                height: "100%",
              }}
            />
          </div>

          <div className="w-[40%] lg:w-[25%] h-[50%] -rotate-[4deg] overflow-hidden -mx-5 z-10">
            <GatsbyImage
              image={getImage(nextProject?.mainProjectImage?.gatsbyImageData)}
              alt={nextProject?.mainProjectImage?.title}
              className="w-full h-full"
              imgStyle={{
                width: "100%",
                height: "100%",
              }}
            />
          </div>

          <div className="w-[40%] lg:w-[25%] h-[50%] -rotate-[8deg] overflow-hidden mt-24 next-project-image">
            <div className="absolute min-w-full min-h-full bg-[#00000090] z-10" />
            <GatsbyImage
              image={getImage(nextProject?.otherImages[0]?.gatsbyImageData)}
              alt={nextProject?.otherImages[0]?.title}
              className="w-full h-full"
              imgStyle={{
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        </div>
      </div>

      <TouchAndHold className="absolute z-30" />
    </div>
  );
}
