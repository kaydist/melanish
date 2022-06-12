const path = require("path");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const projectTemplate = path.resolve("./src/templates/project.js");

    resolve(
      graphql(`
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
                otherImages {
                  title
                  gatsbyImageData
                }
              }
            }
          }
        }
      `).then((result) => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }
        result.data.allContentfulProjects.edges.forEach((edge, idx) => {
          let nextIdx = 0;
          if (idx === result.data.allContentfulProjects.edges.length - 1) {
            nextIdx = 0;
          } else {
            nextIdx = idx + 1;
          }

          createPage({
            path: edge.node.projectTitle,
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
              otherImages: edge.node.otherImages,
              creditTitles: edge.node.creditTitles,
              creditNames: edge.node.creditNames,
              nextProject: result.data.allContentfulProjects.edges[nextIdx],
            },
          });
        });
        return;
      })
    );
  });
};
