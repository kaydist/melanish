import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useContext,
  useMemo,
} from "react";
import { useStaticQuery } from "gatsby";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { navigate } from "gatsby";
import { AppContext } from "../controller/context";
import TouchAndHold from "./touch-and-hold";
import {
  pageTransitionEnd,
  PageTransitionStart,
} from "../animations/pageTransition";
import {
  textVerticalAnimationIn,
  textSplit,
} from "../animations/text-animations";
import LandingVideo from "../images/melanish-bg-video.mp4";
import LandingVideoPoster from "../images/video-poster.jpg";

// markup
const WelcomePage = () => {
  const { theme, setPageChange, preloaded, setPreloaded } =
    useContext(AppContext);
  const [preloadedState, setPreloadedState] = useState(false);

  // const data = useStaticQuery(graphql`
  //   query IndexQuery {
  //     allContentfulProjects {
  //       edges {
  //         node {
  //           mainProjectImage {
  //             title
  //             url
  //             gatsbyImageData
  //           }

  //           image2 {
  //             title
  //             url
  //             gatsbyImageData
  //           }
  //         }
  //       }
  //     }
  //   }
  // `);

  useLayoutEffect(() => {
    let timer = 0;

    const landingContainer = document.querySelector(".landing-container");

    const touchContainer = document.querySelector(".touch-action");

    landingContainer.addEventListener("mousedown", (e) => {
      timer = setTimeout(() => {
        document.querySelector(".mf-cursor").classList.remove("-text");
        PageTransitionStart("#", e);
        setTimeout(() => {
          setPreloaded(true);
          pageTransitionEnd();
          if (!preloaded) {
            document.querySelector(".nav-bar").classList.remove("hidden");
          }
        }, 1500);
      }, 1500);
    });

    touchContainer.addEventListener("touchstart", (e) => {
      timer = setTimeout(() => {
        PageTransitionStart("#", e);
        setTimeout(() => {
          setPreloaded(true);
          pageTransitionEnd();
          if (!preloaded) {
            document.querySelector(".nav-bar").classList.remove("hidden");
          }
        }, 1500);
      }, 1500);
    });

    landingContainer.addEventListener("mouseup", () => {
      clearTimeout(timer);
    });

    touchContainer.addEventListener("touchend", () => {
      clearTimeout(timer);
    });
  }, []);

  useEffect(() => {
    if (!preloaded) {
      textVerticalAnimationIn();
    }
  }, []);

  return (
    <div
      className={`w-full h-screen fixed z-[48] overflow-hidden no-scrollbar landing-container  ${
        preloaded ? `hidden` : `block`
      }`}
    >
      <div
        className="w-[100vw] h-[100vh] col-center relative"
        data-cursor-text="Click & Hold"
        data-cursor={`${theme === "dark" ? `-cusor-text-dark` : `-text-light`}`}
      >
        <div className={`w-full  h-[20vh] text-center px-body no-select `}>
          <div className="text-6xl lg:text-[10vw] font-bold relative mb-4 lg:mb-[1vw]">
            <p className="animated-text vertical-anim">XTREME-FOTO</p>
          </div>
        </div>

        <video
          className="min-w-[100vw] min-h-[80vh] object-cover landing-video"
          src={LandingVideo}
          // poster={LandingVideoPoster}
          autoPlay
          loop
          muted
        />
      </div>

      <TouchAndHold className="fixed" />
    </div>
  );
};

export default WelcomePage;
