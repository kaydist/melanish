import { useState } from "react";
import * as React from "react";
import Footer from "../components/footer";
import Layout from "../layouts/layout";
import { useStaticQuery } from "gatsby";
import { graphql } from "gatsby";
import ListView from "../components/list-view";
import GalleryView from "../components/gallery-view";

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

  return (
    <Layout>
      {!isListView ? (
        <GalleryView projects={projects} />
      ) : (
        <ListView projects={projects} />
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
