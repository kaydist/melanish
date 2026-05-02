const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const projectTemplate = path.resolve("./src/templates/project.js");

  const result = await graphql(`
    {
      allContentfulProjects(limit: 10000) {
        edges {
          node {
            projectTitle
            id
            creditTitles
            creditNames
            mainProjectImage {
              title
              gatsbyImageData
            }
            image2 {
              title
              gatsbyImageData
            }
            image3 {
              title
              gatsbyImageData
            }
            image4 {
              title
              gatsbyImageData
            }
            image5 {
              title
              gatsbyImageData
            }
            image6 {
              title
              gatsbyImageData
            }
            image7 {
              title
              gatsbyImageData
            }
            otherImages {
              title
              gatsbyImageData
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild("Error loading Contentful projects", result.errors);
    return;
  }

  const edges = result.data.allContentfulProjects.edges;
  edges.forEach((edge, idx) => {
    const nextIdx = idx === edges.length - 1 ? 0 : idx + 1;

    createPage({
      path: `/portfolio/${edge.node.projectTitle}`,
      component: projectTemplate,
      context: {
        id: edge.node.id,
        projectTitle: edge.node.projectTitle,
        mainProjectImage: edge.node.mainProjectImage,
        image2: edge.node.image2,
        image3: edge.node.image3,
        image4: edge.node.image4,
        image5: edge.node.image5,
        image6: edge.node.image6,
        image7: edge.node.image7,
        otherImages: edge.node.otherImages,
        creditTitles: edge.node.creditTitles,
        creditNames: edge.node.creditNames,
        nextProject: edges[nextIdx],
      },
    });
  });
};
