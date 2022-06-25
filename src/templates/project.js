import { Link } from "gatsby";
import React, { useContext, useLayoutEffect, useEffect } from "react";
import PropTypes from "prop-types";
import Layout from "../layouts/layout";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { AppContext } from "../controller/context";
import {
  otherSectionAnimation,
  imageAnimation,
  textAnimation,
  highlightTextAnimation,
  nextProjectHoverAnimation,
} from "../animations/project";
import NextProject from "../components/next-project-footer";

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

  const [theme] = useContext(AppContext);

  useEffect(() => {
    imageAnimation();
    textAnimation();
    highlightTextAnimation();
  }, []);

  useLayoutEffect(() => {
    otherSectionAnimation();
  }, []);

  return (
    <Layout>
      <div className="">
        <div className="w-full h-full pt-40 md:pt-[15vh]">
          <div className="hero md:px-body w-full col-center relative">
            <div className="absolute top-0 z-10">
              <h2 className="uppercase font-CormorantGaramond text-[15.28vw] leading-[0.85] text-center animated-text">
                {projectTitle}
              </h2>
            </div>

            <div className="mt-[15%] w-full h-[30rem] md:h-[58.61vw] center relative">
              <div className="image-wrapper w-full h-full overflow-hidden">
                <i className="image-wrapper-mask z-10" />

                <GatsbyImage
                  image={getImage(mainProjectImage?.gatsbyImageData)}
                  alt={mainProjectImage?.title}
                  className="image-content object-contain h-full w-full scale-[1.2]"
                />
              </div>

              <div className="text-sm absolute top-[5vw] -rotate-90 -left-[5vw] text-right tracking-widest">
                OCT. 2022
              </div>

              <div className="text-sm absolute bottom-[5vw] rotate-90 -right-[5vw] text-right">
                Signature
              </div>
            </div>
          </div>

          <div className="my-6 md:my-[8.625rem] px-body">
            <p className="explainer animated-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam
              velit vel sed sit ullamcorper eget. Sapien ligula consectetur
              cursus sagittis vulputate aliquam tellus. Felis vitae, enim auctor
              urna quam facilisis. Aenean nec consequat in odio non ut.
            </p>
          </div>

          <div className="relative">
            <div className="w-full absolute top-[40vw] overflow-hidden">
              <div
                className={`absolute min-w-full min-h-full z-[1] ${
                  theme === "light" ? `light-mask` : `dark-mask`
                }`}
              />
              <div className="text-center opacity-20">
                <h2 className="capitalize font-CormorantGaramond text-[15.28vw] whitespace-nowrap">
                  {projectTitle}
                </h2>
              </div>
            </div>

            <div className="z-20 relative">
              <section className="px-body image-wrapper w-full h-fit">
                <i className="image-wrapper-mask z-10" />

                <div className="image-content mx-auto md:mx-0 w-full md:w-auto md:max-w-[80%] h-[25rem] md:h-[49.1vw]">
                  <GatsbyImage
                    image={getImage(image2?.gatsbyImageData)}
                    alt={image2?.title}
                    className="w-full h-full"
                    imgStyle={{
                      maxWidth: "100%",
                      width: "auto",
                      height: "100%",
                    }}
                  />
                </div>
              </section>

              {image3 ? (
                <section className="px-body image-wrapper w-full h-fit end mt-20 md:mt-body md:-mb-32">
                  <i className="image-wrapper-mask z-10" />

                  <div className="image-content w-[70.14%] md:w-[46.14%] h-[25rem] md:h-[58.47vw]">
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
                </section>
              ) : null}

              <section className="">
                {image4 || image5 ? (
                  <div className="max-w-max">
                    <div className="image-wrapper w-[66.14%] md:w-[46.14vw] h-[25rem] md:h-[58.47vw] mt-20 md:mt-0">
                      {image4 ? (
                        <>
                          <i className="image-wrapper-mask z-10" />

                          <GatsbyImage
                            image={getImage(image4?.gatsbyImageData)}
                            alt={image4?.title}
                            className="w-full h-full image-content"
                            imgStyle={{
                              maxWidth: "100%",
                              width: "auto",
                              height: "100%",
                            }}
                          />
                        </>
                      ) : null}
                    </div>

                    {image5 ? (
                      <div
                        className={`image-wrapper w-[100%] md:w-[26.14vw] h-auto max-h-[18rem] md:max-h-[26vw] overflow-hidden relative md:left-[50%] ${
                          image6 ? `my-20 md:-my-[25%]` : `mt-20 md:-mt-[25%]`
                        }`}
                      >
                        <i className="image-wrapper-mask z-10" />

                        <GatsbyImage
                          image={getImage(image5?.gatsbyImageData)}
                          alt={image5?.title}
                          className="w-full h-full image-content"
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
              </section>

              {image6 ? (
                <div className="image-wrapper end mr-[10%] mt-20 md:mt-[10vw]">
                  <i className="image-wrapper-mask z-10" />

                  <div className="image-content w-[66.16%] md:w-[46.14%] h-auto">
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

              <section className="image-wrapper grid grid-rows-2 md:grid-rows-none md:grid-cols-2 mt-20 md:mt-[10vw] h-max gap-20 md:gap-[5vw]">
                <i className="image-wrapper-mask z-10" />

                <div className="center image-content">
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

                <div className="center image-content">
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
              </section>

              {image7 ? (
                <section className="mx-auto w-full h-auto mt-20 md:mt-[10vw] image-wrapper">
                  <i className="image-wrapper-mask z-10" />

                  <GatsbyImage
                    image={getImage(image7?.gatsbyImageData)}
                    alt={image7?.title}
                    className="w-full h-full image-content"
                    imgStyle={{
                      maxWidth: "100%",
                      width: "100%",
                      height: "auto",
                    }}
                  />
                </section>
              ) : null}
            </div>

            <div className="col-center text-left md:text-center uppercase my-2xbody dark:text-muted text-[#0C0C0C] md:text-[1.2vw]">
              <h6 className="">CREDITS</h6>

              <div className="around w-fit flex-wrap md:flex-nowrap gap-[7.177%] md:text-[1.5vw] leading-normal whitespace-nowrap">
                {[creditNames, creditTitles].map((credit, idx) => {
                  return (
                    <div key={idx} className="col-center mt-[7.177%]">
                      <p className="animated-text">{creditTitles[idx]}</p>

                      <p className="font-CormorantGaramond animated-text">
                        {creditNames[idx]}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="center md:mb-2xbody" id="project-other-images">
          <div className="w-full absolute overflow-hidden">
            <div className="highlight sticky top-1/2 text-center">
              <h2 className="uppercase no-fill-text font-CormorantGaramond text-[15.28vw] z-10 whitespace-nowrap">
                {projectTitle}
              </h2>
              <h2 className="uppercase no-fill-text font-CormorantGaramond text-[15.28vw] z-10 whitespace-nowrap">
                {projectTitle}
              </h2>
              <h2 className="uppercase no-fill-text font-CormorantGaramond text-[15.28vw] z-10 whitespace-nowrap">
                {projectTitle}
              </h2>
            </div>
          </div>

          <div className="max-w-[100vw] min-h-max no-scrollbar overflow-hidden relative">
            <div className="start flex-nowrap space-x-6 h-[85vh] md:min-h-screen center w-fit">
              {otherImages.map((image, idx) => {
                let rotationAngle =
                  Math.random() < 0.5
                    ? Math.random() * (-10 - 0) + 0
                    : Math.random() * (10 - 0) + 0;

                return (
                  <div
                    key={idx}
                    className="w-[80vw] md:w-[70vw] min-h-full center panel"
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
          // <Link to={`/${nextProject?.projectTitle}`}>
          <NextProject nextProject={nextProject} />
        ) : // </Link>
        null}
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
