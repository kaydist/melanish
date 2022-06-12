import React, { useState, useLayoutEffect } from "react";
import Layout from "../layouts/layout";
import { useStaticQuery } from "gatsby";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

// markup
const IndexPage = () => {
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

            image2{
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

  useLayoutEffect(() => {
    setTimeout(() => {
      if (currentImage === projects.length - 1) {
        setCurrentImage(0);
      } else {
        setCurrentImage(currentImage + 1);
      }
    }, 2000);
  }, [currentImage]);

  return (
    <Layout>
      <div className="max-w-full start overflow-x-auto overflow-y-hidden no-scrollbar content-min-h">
        <Link to="/portfolio">
          <div className="min-w-[100vw] h-[60vh] center relative">
            <div className="scale-[0.8]">
              <GatsbyImage
                image={images}
                alt={images?.title}
                className="h-full w-auto object-contain"
                imgStyle={{ objectPosition: "center" }}
              />
            </div>

            <h2 className="uppercase font-CormorantGaramond text-[10.69vw] bottom-0 absolute z-10">
              Melanish
            </h2>
          </div>
        </Link>
      </div>
    </Layout>
  );
};

export default IndexPage;
