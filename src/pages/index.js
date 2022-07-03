import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useContext,
  useMemo,
} from "react";
import Layout from "../layouts/layout";
import { useStaticQuery } from "gatsby";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { navigate } from "gatsby";
import { AppContext } from "../controller/context";
import TouchAndHold from "../components/touch-and-hold";

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

  // useEffect(() => {
  //   setTimeout(() => {
  //     if (currentImage === projects.length - 1) {
  //       setCurrentImage(0);
  //     } else {
  //       setCurrentImage(currentImage + 1);
  //     }
  //   }, 2000);
  // }, [currentImage]);

  useLayoutEffect(() => {
    let timer = 0;

    const landingContainer = document.querySelector(".landing-container");

    const touchContainer = document.querySelector(".touch-action");

    landingContainer.addEventListener("mousedown", () => {
      timer = setTimeout(() => {
        navigate(`/portfolio`);
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

  let timeout = 2000;
  useMemo(() => {
    setTimeout(() => {
      if (currentImage === projects.length - 1) {
        setCurrentImage(0);
      } else {
        setCurrentImage(currentImage + 1);
      }
    }, timeout);
  }, [currentImage]);

  return (
    <Layout>
      <div className="max-w-full relative start overflow-x-auto overflow-y-hidden no-scrollbar content-min-h landing-container">
        <div
          className="min-w-[100vw] h-[60vh] center relative"
          data-cursor-text="Click & Hold"
          data-cursor={`${
            theme === "dark" ? `-cusor-text-dark` : `-text-light`
          }`}
        >
          <div className="scale-[0.8]">
            <GatsbyImage
              image={images}
              alt=""
              className="h-full w-auto object-contain"
              imgStyle={{ objectPosition: "center" }}
            />
          </div>

          <h2 className="uppercase font-CormorantGaramond text-[10.69vw] bottom-0 absolute z-10">
            Melanish{" "}
            <sup className="text-[30%] absolute top-[30%] -right-[10%]">o</sup>
          </h2>
        </div>

        <TouchAndHold />
      </div>
    </Layout>
  );
};

export default IndexPage;
