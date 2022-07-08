import { useState, useContext } from "react";
import * as React from "react";
import Footer from "../components/footer";
import Layout from "../layouts/layout";
import { useStaticQuery } from "gatsby";
import { graphql } from "gatsby";
import ListView from "../components/list-view";
import GalleryView from "../components/gallery-view";
import { AppContext } from "../controller/context";
import { smoothScrollEffect } from "../animations/project";
import { pageTransitionEnd } from "../animations/pageTransition";
import { preloadImages } from "../controller/utils";

// markup
const PortfolioPage = () => {
  const data = useStaticQuery(graphql`
    query PortfolioQuery {
      allContentfulProjects {
        edges {
          node {
            projectTitle
            id
            mainProjectImage {
              title
              url
              gatsbyImageData
            }
          }
        }
      }
    }
  `);

  const projects = data.allContentfulProjects.edges;

  const [isListView, setIsListView] = useState(false);

  const { setPageChange } = useContext(AppContext);

  React.useLayoutEffect(() => {
    if (isListView) {
      smoothScrollEffect();
    } else {
      if (window.lenis) {
        let lenis = window.lenis;
        lenis.destroy();
      }
    }
  }, [isListView]);

  React.useEffect(() => {
    preloadImages().then(() => {
      pageTransitionEnd();
    });
  }, []);

  return (
    <Layout>
      {!isListView ? (
        <GalleryView projects={projects} setPageChange={setPageChange} />
      ) : (
        <ListView projects={projects} setPageChange={setPageChange} />
      )}

      <Footer
        isListView={isListView}
        setIsListView={setIsListView}
        totalCount={projects.length}
      />
    </Layout>
  );
};

export default PortfolioPage;
