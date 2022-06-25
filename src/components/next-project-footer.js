import React, { useEffect, useLayoutEffect } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { navigate } from "gatsby";
import gsap from "gsap";
import {
  nextProjectHoverActive,
  nextProjectHoverIn,
  nextProjectHoverOut,
} from "../animations/project";

export default function NextProject({ nextProject }) {
  var timer = 0;
  let tl = gsap.timeline();

  useLayoutEffect(() => {
    const footerContainer = document.querySelector(".next-project-footer");

    const footerImage = document.querySelectorAll(".next-project-image");
    
    footerContainer.addEventListener("mouseenter", () => {
      nextProjectHoverIn(footerImage);
    });

    footerContainer.addEventListener("mouseleave", () => {
      nextProjectHoverOut(footerImage);
    });

    footerContainer.addEventListener("mousedown", () => {
      nextProjectHoverActive(footerImage);

      timer = setTimeout(() => {
        navigate(`/${nextProject?.projectTitle}`);
      }, 1500);
    });

    footerContainer.addEventListener("mouseup", () => {
      tl.clear();
      clearTimeout(timer);
      nextProjectHoverIn(footerImage);
    });
  }, []);

  return (
    <div className="overflow-hidden center dark:bg-[#0C0C0C] bg-[#e8e8e8] h-[80vw] md:h-[66.46vw] md:max-h-[80vh] relative cursor-pointer next-project-footer">
      <div className="col-center text-center uppercase z-20 text-[#FFFFFF]">
        <p className="experience">NEXT PROJECT</p>
        <h2 className="uppercase font-CormorantGaramond text-[10.69vw] next-project-title">
          {nextProject?.projectTitle}
        </h2>
      </div>

      <div className="absolute center w-full h-full">
        <div className="w-[25%] h-[50%] rotate-6 overflow-hidden -mt-16 next-project-image">
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

        <div className="w-[25%] h-[50%] -rotate-[4deg] overflow-hidden -mx-5 z-10">
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

        <div className="w-[25%] h-[50%] -rotate-[8deg] overflow-hidden mt-24 next-project-image">
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
  );
}
