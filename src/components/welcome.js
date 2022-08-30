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
import { textVerticalAnimationIn } from "../animations/text-animations";
import LandingVideo from "../images/melanish-bg-video.mp4";
import LandingVideoPoster from "../images/video-poster.jpg";

// markup
const WelcomePage = () => {
  const { theme, setPageChange, preloaded, setPreloaded } =
    useContext(AppContext);
  const [preloadedState, setPreloadedState] = useState(false);

  const data = useStaticQuery(graphql`
    query IndexQuery {
      allContentfulProjects {
        edges {
          node {
            mainProjectImage {
              title
              url
              gatsbyImageData
            }

            image2 {
              title
              url
              gatsbyImageData
            }
          }
        }
      }
    }
  `);

  const [currentImage, setCurrentImage] = useState(0);

  const projects = data.allContentfulProjects.edges;

  let images = getImage(projects[currentImage].node?.image2) || {};

  useMemo(() => {
    setTimeout(() => {
      if (currentImage === projects.length - 1) {
        setCurrentImage(0);
      } else {
        setCurrentImage(currentImage + 1);
      }
    }, 1500);
  }, [currentImage]);

  useLayoutEffect(() => {
    if (!preloaded) {
      document.querySelector(".nav-bar").classList.add("hidden");
    }
    textVerticalAnimationIn();

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

  return (
    <div
      className={`w-full h-screen fixed z-[48] overflow-hidden no-scrollbar landing-container ${
        preloaded ? `hidden` : `block`
      }`}
    >
      <div
        className="w-[100vw] h-[100vh] center relative"
        data-cursor-text="Click & Hold"
        data-cursor={`${theme === "dark" ? `-cusor-text-dark` : `-text-light`}`}
      >
        <div className="w-full z-50 text-white mix-blend-difference text-center px-body no-select absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="text-5xl lg:text-[10vw] font-bold relative mb-4 lg:mb-[1vw]">
            XTREME-FOTO
            <sup className="text-[30%] absolute top-[30%] -right-[10%]">o</sup>
          </div>
        </div>

        <div className="w-full z-50 text-white mix-blend-difference text-center px-body no-select absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pt-[6rem] lg:pt-[9.5vw] ">
          <p className="animated-text vertical-anim">
            A nigeria-based creative and innovative <br /> Photography Agency
          </p>
        </div>

        <video
          className="min-w-[100vw] min-h-screen object-cover landing-video"
          src={LandingVideo}
          poster={LandingVideoPoster}
          autoPlay
          loop
          muted
        />

        {/* <GatsbyImage
          image={images}
          alt=""
          imgStyle={{
            objectPosition: "center",
            objectFit: "cover",
            height: "100%",
            width: "100%",
          }}
        /> */}
      </div>

      <TouchAndHold className="fixed" />
    </div>
  );
};

export default WelcomePage;
