import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
  useContext,
} from "react";
import Layout from "../layouts/layout";
import { AppContext } from "../controller/context";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { imageGalleryLayout, openFocusImage } from "../animations/free-roam";
import { smoothScrollEffect } from "../animations/project";
import { isMobile, preloadImages } from "../controller/utils";
import { pageTransitionEnd } from "../animations/pageTransition";

const FreeRoam = () => {
  const { preloaded } = useContext(AppContext);
  const [openImage, setOpenImage] = useState(null);
  const data = useStaticQuery(graphql`
    query FreeRoamQuery {
      allContentfulFreeRoam {
        edges {
          node {
            title

            image {
              title
              url
              gatsbyImageData
            }
          }
        }
      }
    }
  `);

  const imageArr = data.allContentfulFreeRoam.edges;

  useLayoutEffect(() => {
      smoothScrollEffect();
      !isMobile() && imageGalleryLayout();
  }, []);

  useEffect(() => {
    preloadImages().then(() => {
      pageTransitionEnd();
    });
  }, []);

  const imageRender = useMemo(() => {
    var allPos = [];
    imageArr.forEach((image, index) => {
      let rowPosition = Math.floor(
        (Math.random() * (1 - 0.1) + 0.1) * (imageArr.length - 1)
      );

      let colPosition = Math.floor((Math.random() * (1 - 0.1) + 0.1) * 8);

      const checkPosition = allPos.findIndex(
        (elem) => elem.row === rowPosition && elem.col === colPosition
      );

      if (checkPosition > -1) {
        let finalRow;
        let finalCol;

        finalCol = Math.floor((Math.random() * (1 - 0.1) + 0.1) * 8);

        finalRow = Math.floor(
          (Math.random() * (1 - 0.1) + 0.1) * (imageArr.length - 1)
        );

        allPos.push({ row: finalRow, col: finalCol });
      } else {
        allPos.push({ row: rowPosition, col: colPosition });
      }
    });
    return (
      <div className="free-roam-grid py-[6.25rem] lg:pt-0 flex flex-col lg:grid grid-cols-8 gap-x-10 gap-y-[6.25rem] max-w-full content-min-h ">
        {imageArr.map((image, index) => {
          return (
            <div
              key={index}
              className={`grid-item lg:h-[15vw] overflow-visible`}
              style={{
                gridColumn: allPos[index].col,
                gridRow: allPos[index].row,
              }}
            >
              <div
                className={`grid-item-img grid-item-image-${index} w-full h-full center backdrop-blur-xl`}
                data-cursor-text="Open"
                onClick={() => {
                  if (!isMobile()) {
                    setOpenImage({ image: image.node.image, index: index });
                    openFocusImage(index, false);
                  }
                }}
              >
                <GatsbyImage
                  image={getImage(image.node.image)}
                  alt={image.node.title}
                  className="w-full h-full"
                  imgStyle={{ objectFit: "contain" }}
                />
              </div>
            </div>
          );
        })}
      </div>
    );
  }, [data]);

  return (
    <Layout>
      <div
        className="w-full h-screen center backdrop-blur-xl open-image-container fixed top-0 -z-50"
        onClick={() => {
          openFocusImage(openImage?.index, true);
          setOpenImage(null);
        }}
        data-cursor-text="Close"
      >
        <GatsbyImage
          image={getImage(openImage?.image)}
          alt=""
          className="w-auto h-full"
          loading="eager"
          imgStyle={{ objectFit: "contain" }}
        />
      </div>
      {imageRender}
    </Layout>
  );
};

export default FreeRoam;
