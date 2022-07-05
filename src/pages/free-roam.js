import React, { useLayoutEffect } from "react";
import Layout from "../layouts/layout";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { imageGalleryLayout } from "../animations/free-roam";

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
    imageGalleryLayout();
  }, []);

  var allPos = [];
  return (
    <Layout>
      <div className="free-roam-grid grid grid-cols-8 gap-y-[6.25rem] w-full content-min-h overflow-hidden">
        {imageArr.map((image, index) => {
          let rowPosition = Math.floor(Math.random() * 8);

          let colPosition = Math.floor(Math.random() * imageArr.length);

          let finalRow = null;
          let finalCol = null;

          if (allPos.includes({ row: rowPosition, col: colPosition })) {
            colPosition = Math.floor(Math.random() * imageArr.length);
            rowPosition = Math.floor(Math.random() * 8);
          } else {
            allPos.push({ row: rowPosition, col: colPosition });
            finalCol = colPosition;
            finalRow = rowPosition;
          }

          return (
            <div
              key={index}
              className={`grid-item h-[15vw]`}
              style={{ gridColumn: finalCol, gridRow: finalRow }}
            >
              <div className="grid-item-img w-full h-full">
                <GatsbyImage
                  image={getImage(image.node.image)}
                  alt={image.node.title}
                  className="w-full h-full"
                  imgStyle={{ objectFit: "contain" }}
                  data-cursor-text="Open"
                />
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default FreeRoam;
