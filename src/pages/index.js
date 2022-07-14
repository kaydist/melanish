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
import TouchAndHold from "../components/touch-and-hold";
import { preloadImages } from "../controller/utils";
import { pageTransitionEnd } from "../animations/pageTransition";

// markup
const IndexPage = () => {
  const { theme, setPageChange } = useContext(AppContext);

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
    let timer = 0;

    const landingContainer = document.querySelector(".landing-container");

    const touchContainer = document.querySelector(".touch-action");

    landingContainer.addEventListener("mousedown", () => {
      timer = setTimeout(() => {
        navigate(`/portfolio`);
        document.querySelector(".mf-cursor").classList.remove("-text");
        setPageChange(true);
      }, 1500);
    });

    touchContainer.addEventListener("touchstart", () => {
      timer = setTimeout(() => {
        navigate(`/portfolio`);
        setPageChange(true);
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
    preloadImages().then(() => {
      pageTransitionEnd();
    });
  }, []);

  return (
    <div className="w-full h-screen relative overflow-hidden no-scrollbar landing-container">
      <div className="w-full z-50 mt-body lg:mt-half-body text-white mix-blend-difference center px-body no-select">
        <div className="text-2xl lg:text-[2vw] font-bold cursor-pointer relative">
          MELANISH
          <sup className="text-[30%] absolute top-[30%] -right-[10%]">o</sup>
        </div>
      </div>

      <div
        className="w-[100vw] h-[95vh] center relative"
        data-cursor-text="Click & Hold"
        data-cursor={`${theme === "dark" ? `-cusor-text-dark` : `-text-light`}`}
      >
        <GatsbyImage
          image={images}
          alt=""
          className="max-h-full w-auto object-contain"
          imgStyle={{
            objectPosition: "center",
            objectFit: "contain",
          }}
        />
      </div>

      <TouchAndHold />
    </div>
  );
};

export default IndexPage;
