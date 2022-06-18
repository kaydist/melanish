import { Link } from "gatsby";
import React from "react";
import PropTypes from "prop-types";
import Layout from "../layouts/layout";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

function Project(props) {
  const {
    projectTitle,
    mainProjectImage,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    otherImages,
    creditTitles,
    creditNames,
  } = props.data.contentfulProjects;

  const nextProject = props?.pageContext?.nextProject?.node;

  return (
    <Layout>
      <div className="">
        <div className="w-full h-full mt-[10vh]">
          <div className="hero px-body w-full col-center relative">
            <h2 className=" absolute top-0 uppercase font-CormorantGaramond text-[15.28vw] leading-[0.85] text-center z-10">
              {projectTitle}
            </h2>

            <div className="mt-[15%] w-full h-[50vh] md:h-[58.61vw] center">
              <GatsbyImage
                image={getImage(mainProjectImage?.gatsbyImageData)}
                alt={mainProjectImage?.title}
                className="object-contain h-full w-full"
              />
            </div>
          </div>

          <div className="my-6 md:my-[8.625rem] px-body">
            <p className="explainer">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam
              velit vel sed sit ullamcorper eget. Sapien ligula consectetur
              cursus sagittis vulputate aliquam tellus. Felis vitae, enim auctor
              urna quam facilisis. Aenean nec consequat in odio non ut.
            </p>
          </div>

          <div className="relative">
            <div className="px-body w-full absolute top-[40vw] overflow-hidden">
              <div className="absolute min-w-full min-h-full dark-mask z-[1]" />
              <div className="text-center opacity-20">
                <h2 className="capitalize font-CormorantGaramond text-[15.28vw] whitespace-nowrap">
                  {projectTitle}
                </h2>
              </div>
            </div>

            <div className="z-20 relative">
              <div className="px-body mx-auto md:mx-0 w-auto max-w-[80%] h-[50vh] md:h-[49.1vw]">
                <GatsbyImage
                  image={getImage(image2?.gatsbyImageData)}
                  alt={image2?.title}
                  className="w-full h-full"
                  imgStyle={{ maxWidth: "100%", width: "auto", height: "100%" }}
                />
              </div>

              {image3 ? (
                <div className="px-body end mt-body w-full md:-mb-32">
                  <div className="w-[46.14%] md:[66.14%] h-[50vh] md:h-[58.47vw]">
                    <GatsbyImage
                      image={getImage(image3?.gatsbyImageData)}
                      alt={image3?.title}
                      className="w-full h-full"
                      imgStyle={{
                        maxWidth: "100%",
                        width: "auto",
                        height: "100%",
                      }}
                    />
                  </div>
                </div>
              ) : null}

              <div className="">
                {image4 || image5 ? (
                  <div className="max-w-max">
                    <div className="w-[66.14%] md:w-[46.14vw] h-[50vh] md:h-[58.47vw]  relative">
                      {image4 ? (
                        <GatsbyImage
                          image={getImage(image4?.gatsbyImageData)}
                          alt={image4?.title}
                          className="w-full h-full"
                          imgStyle={{
                            maxWidth: "100%",
                            width: "auto",
                            height: "100%",
                          }}
                        />
                      ) : null}
                    </div>

                    {image5 ? (
                      <div
                        className={`w-[100%] md:w-[26.14vw] h-auto max-h-[30vh] md:max-h-[26vw] overflow-hidden relative md:left-[50%] ${
                          image6 ? `my-20 md:-my-[25%]` : `mt-20 md:-mt-[25%]`
                        }`}
                      >
                        <GatsbyImage
                          image={getImage(image5?.gatsbyImageData)}
                          alt={image5?.title}
                          className="w-full h-full"
                          imgStyle={{
                            maxWidth: "100%",
                            width: "auto",
                            height: "100%",
                          }}
                        />
                      </div>
                    ) : null}
                  </div>
                ) : null}
              </div>

              {image6 ? (
                <div className="end mr-[10%] mt-20 md:mt-[10vw]">
                  <div className="w-[66.16%] md:w-[46.14%] h-auto">
                    <GatsbyImage
                      image={getImage(image6?.gatsbyImageData)}
                      alt={image6?.title}
                      className="w-full h-full"
                      imgStyle={{
                        maxWidth: "100%",
                        width: "auto",
                        height: "100%",
                      }}
                    />
                  </div>
                </div>
              ) : null}

              <div className="grid grid-rows-2 md:grid-cols-2 mt-20 md:mt-[10vw] md:max-h-[120vh] gap-20 md:gap-[5vw]">
                <div className="center row-span-1 md:col-span-1">
                  <div className="w-full h-auto max-h-full">
                    <GatsbyImage
                      image={getImage(image5?.gatsbyImageData)}
                      alt={image5?.title}
                      className="w-full h-full"
                      imgStyle={{
                        maxHeight: "100%",
                        width: "auto",
                        height: "100%",
                      }}
                    />
                  </div>
                </div>

                <div className="center row-span-1 md:col-span-1">
                  <div className="w-full h-auto max-h-full">
                    <GatsbyImage
                      image={getImage(image3?.gatsbyImageData)}
                      alt={image3?.title}
                      className="w-full h-full"
                      imgStyle={{
                        maxWidth: "100%",
                        width: "auto",
                        height: "100%",
                      }}
                    />
                  </div>
                </div>
              </div>

              {image7 ? (
                <div className="mx-auto w-full h-auto mt-20 md:mt-[10vw]">
                  <GatsbyImage
                    image={getImage(image7?.gatsbyImageData)}
                    alt={image7?.title}
                    className="w-full h-full"
                    imgStyle={{
                      maxWidth: "100%",
                      width: "100%",
                      height: "auto",
                    }}
                  />
                </div>
              ) : null}
            </div>

            <div className="col-center text-left md:text-center uppercase my-2xbody text-muted dark:text-[#0C0C0C] md:text-[1.2vw]">
              <h6 className="">CREDITS</h6>

              <div className="around w-fit flex-wrap md:flex-nowrap gap-[7.177%] md:text-[1.5vw] leading-normal whitespace-nowrap">
                {[creditNames, creditTitles].map((credit, idx) => {
                  return (
                    <div key={idx} className="col-center mt-[7.177%]">
                      <p>{creditTitles[idx]}</p>

                      <p className="font-CormorantGaramond">
                        {creditNames[idx]}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="center md:mb-2xbody">
          <div className="w-full absolute overflow-hidden">
            <div className="sticky top-1/2 text-center">
              <h2 className="uppercase no-fill-text font-CormorantGaramond text-[15.28vw] z-10 whitespace-nowrap">
                {projectTitle}
              </h2>
              <h2 className="uppercase no-fill-text font-CormorantGaramond text-[15.28vw] z-10 whitespace-nowrap">
                {projectTitle}
              </h2>
              <h2 className="uppercase font-CormorantGaramond text-[15.28vw] z-10 whitespace-nowrap">
                {projectTitle}
              </h2>
            </div>
          </div>

          <div className="max-w-[100vw] min-h-max overflow-x-auto no-scrollbar overflow-y-hidden relative">
            <div className="start flex-nowrap space-x-6 h-[85vh] md:min-h-screen center w-fit">
              {otherImages.map((image, idx) => {
                let rotationAngle =
                  Math.random() < 0.5
                    ? Math.random() * (-10 - 0) + 0
                    : Math.random() * (10 - 0) + 0;

                return (
                  <div
                    key={idx}
                    className="w-[80vw] md:w-[70vw] min-h-full center"
                  >
                    <div
                      className={`w-auto max-w-[62%] md:max-w-[48%] max-h-[80%] center overflow-hidden`}
                      style={{ transform: `rotate(${rotationAngle}deg)` }}
                    >
                      <GatsbyImage
                        image={getImage(image?.gatsbyImageData)}
                        alt={image?.title}
                        className="w-full h-full"
                        imgStyle={{
                          maxWidth: "100%",
                          width: "auto",
                          height: "100%",
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {nextProject ? (
          <Link to={`/${nextProject?.projectTitle}`}>
            <div className="center bg-[#0C0C0C] dark:bg-[#e8e8e8] h-[80vw] md:h-[66.46vw] md:max-h-[80vh] relative cursor-pointer">
              <div className="col-center text-center uppercase z-20 dark:text-[#FFFFFF]">
                <p className="experience">NEXT PROJECT</p>
                <h2 className="uppercase font-CormorantGaramond text-[10.69vw]">
                  {nextProject?.projectTitle}
                </h2>
              </div>

              <div className="absolute center w-full h-full">
                <div className="w-[25%] h-[50%] rotate-6 overflow-hidden -mt-16">
                  <div className="absolute min-w-full min-h-full bg-[#00000090] z-10" />
                  <GatsbyImage
                    image={getImage(nextProject?.image2.gatsbyImageData)}
                    alt={nextProject?.image2?.title}
                    className="w-full h-full"
                    imgStyle={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>

                <div className="w-[25%] h-[50%] -rotate-[4deg] overflow-hidden -mx-5 z-10">
                  <GatsbyImage
                    image={getImage(
                      nextProject?.mainProjectImage?.gatsbyImageData
                    )}
                    alt={nextProject?.mainProjectImage?.title}
                    className="w-full h-full"
                    imgStyle={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>

                <div className="w-[25%] h-[50%] -rotate-[8deg] overflow-hidden mt-24">
                  <div className="absolute min-w-full min-h-full bg-[#00000090] z-10" />
                  <GatsbyImage
                    image={getImage(
                      nextProject?.otherImages[0]?.gatsbyImageData
                    )}
                    alt={nextProject?.otherImages[0]?.title}
                    className="w-full h-full"
                    imgStyle={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>
              </div>
            </div>
          </Link>
        ) : null}
      </div>
    </Layout>
  );
}

Project.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Project;

export const pageQuery = graphql`
  query ProjectsQuery($projectTitle: String!) {
    contentfulProjects(projectTitle: { eq: $projectTitle }) {
      projectTitle
      id
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
      creditTitles
      creditNames
    }
  }
`;
