import React, { useCallback, useLayoutEffect, useMemo } from "react";
import Layout from "../layouts/layout";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { imageGalleryLayout, openFocusImage } from "../animations/free-roam";

const FreeRoam = () => {
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
    window.innerWidth > 768 && imageGalleryLayout();
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

    let focusState = true;
    let focusMouse = "Open";
    return (
      <div className="free-roam-grid py-[6.25rem] md:pt-0 flex flex-col md:grid grid-cols-8 gap-x-10 gap-y-[6.25rem] max-w-full content-min-h overflow-hidden">
        {imageArr.map((image, index) => {
          return (
            <div
              key={index}
              className={`grid-item md:h-[15vw] overflow-visible`}
              style={{
                gridColumn: allPos[index].col,
                gridRow: allPos[index].row,
              }}
            >
              <div
                className={`grid-item-img grid-item-image-${index} w-full h-full center backdrop-blur-xl`}
                data-cursor-text={focusMouse}
                onClick={() => {
                  focusState = !focusState;
                  focusMouse = focusState ? "close" : "Close";
                  openFocusImage(index, focusState);
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

  return <Layout>{imageRender}</Layout>;
};

export default FreeRoam;
