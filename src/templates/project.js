import React, { useContext, useLayoutEffect, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import Layout from "../layouts/layout";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { AppContext } from "../controller/context";
import {
  otherSectionAnimation,
  imageAnimation,
  highlightTextAnimation,
  smoothScrollEffect,
} from "../animations/project";
import { textVerticalAnimationIn } from "../animations/text-animations";
import NextProject from "../components/next-project-footer";
import { preloadImages } from "../controller/utils";
import { pageTransitionEnd } from "../animations/pageTransition";

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

  const { theme, preloaded } = useContext(AppContext);

  useLayoutEffect(() => {
    otherSectionAnimation();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);

    smoothScrollEffect();
    highlightTextAnimation();

    const onCompleteFun = () => {
      textVerticalAnimationIn();
      imageAnimation();
    };

    preloadImages().then(() => {
      pageTransitionEnd(onCompleteFun);
    });
  }, []);

  useMemo(() => {
    if (preloaded) {
      textVerticalAnimationIn();
      imageAnimation();
    }
  }, [preloaded]);

  return (
    <Layout className="scroller">
      <div className="">
        <div className="w-full h-full pt-40 lg:pt-[15vh]">
          <div className="hero lg:px-body w-full col-center relative">
            <div className="absolute top-0 z-10">
              <h2 className="uppercase font-CormorantGaramond text-7xl lg:text-[15.28vw] leading-[0.85] text-center animated-text vertical-anim">
                {projectTitle}
              </h2>
            </div>

            <div className="mt-[15%] w-full h-[30rem] lg:h-[58.61vw] center relative">
              <div className="image-wrapper w-full h-full overflow-hidden">
                <i className="image-wrapper-mask z-10" />

                <GatsbyImage
                  image={getImage(mainProjectImage?.gatsbyImageData)}
                  alt={mainProjectImage?.title}
                  className="image-content object-contain h-full w-full scale-[1.2]"
                  data-cursor-text={`${mainProjectImage?.title}`}
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

          <div className="my-6 lg:my-[8.625rem] px-body">
            <p className="explainer animated-text vertical-anim">
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
              <section className="lg:px-body image-wrapper w-full h-fit">
                <i className="image-wrapper-mask z-10" />

                <div className="image-content mx-auto lg:mx-0 w-full lg:w-auto lg:max-w-[80%] h-auto lg:h-[49.1vw]">
                  <GatsbyImage
                    image={getImage(image2?.gatsbyImageData)}
                    alt={image2?.title}
                    className="w-full h-full"
                    imgStyle={{
                      maxWidth: "100%",
                      width: "auto",
                      height: "100%",
                    }}
                    data-cursor-text={`${image2?.title}`}
                  />
                </div>
              </section>

              {image3 ? (
                <section className="lg:px-body image-wrapper w-full h-fit end mt-20 lg:mt-body lg:-mb-32">
                  <i className="image-wrapper-mask z-10" />

                  <div className="image-content w-full h-auto lg:w-[46.14%] lg:h-[58.47vw]">
                    <GatsbyImage
                      image={getImage(image3?.gatsbyImageData)}
                      alt={image3?.title}
                      className="w-full h-full"
                      imgStyle={{
                        maxWidth: "100%",
                        width: "auto",
                        height: "100%",
                      }}
                      data-cursor-text={`${image3?.title}`}
                    />
                  </div>
                </section>
              ) : null}

              <section className="">
                {image4 || image5 ? (
                  <div className="max-w-max">
                    <div className="image-wrapper w-full lg:w-[46.14vw] h-auto lg:h-[58.47vw] mt-20 lg:mt-0">
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
                            data-cursor-text={`${image4?.title}`}
                          />
                        </>
                      ) : null}
                    </div>

                    {image5 ? (
                      <div
                        className={`image-wrapper w-[100%] lg:w-[26.14vw] h-auto lg:max-h-[26vw] overflow-hidden relative lg:left-[50%] ${
                          image6 ? `my-20 lg:-my-[25%]` : `mt-20 lg:-mt-[25%]`
                        }`}
                      >
                        <i className="image-wrapper-mask z-10" />

                        <div className="image-content">
                          <GatsbyImage
                            image={getImage(image5?.gatsbyImageData)}
                            alt={image5?.title}
                            className="w-full h-full "
                            imgStyle={{
                              maxWidth: "100%",
                              width: "auto",
                              height: "100%",
                            }}
                            data-cursor-text={`${image5?.title}`}
                          />
                        </div>
                      </div>
                    ) : null}
                  </div>
                ) : null}
              </section>

              {image6 ? (
                <div className="end mr-[10%] mt-20 lg:mt-[10vw]">
                  <div className="image-wrapper w-full lg:w-[46.14%] h-fit">
                    <i className="image-wrapper-mask z-10" />

                    <GatsbyImage
                      image={getImage(image6?.gatsbyImageData)}
                      alt={image6?.title}
                      className="full h-auto image-content"
                      imgStyle={{
                        maxWidth: "100%",
                        width: "auto",
                        height: "100%",
                      }}
                      data-cursor-text={`${image6?.title}`}
                    />
                  </div>
                </div>
              ) : null}

              <section className="grid grid-rows-2 lg:grid-rows-none lg:grid-cols-2 mt-20 lg:mt-[10vw] h-max gap-20 lg:gap-[5vw]">
                <div className="image-wrapper center">
                  <i className="image-wrapper-mask z-10" />

                  <div className="w-full h-auto max-h-full image-content">
                    <GatsbyImage
                      image={getImage(image5?.gatsbyImageData)}
                      alt={image5?.title}
                      className="w-full h-full"
                      imgStyle={{
                        maxHeight: "100%",
                        width: "auto",
                        height: "100%",
                      }}
                      data-cursor-text={`${image5?.title}`}
                    />
                  </div>
                </div>

                <div className="center image-wrapper">
                  <i className="image-wrapper-mask z-10" />

                  <div className="w-full h-auto max-h-full image-content">
                    <GatsbyImage
                      image={getImage(image3?.gatsbyImageData)}
                      alt={image3?.title}
                      className="w-full h-full"
                      imgStyle={{
                        maxWidth: "100%",
                        width: "auto",
                        height: "100%",
                      }}
                      data-cursor-text={`${image3?.title}`}
                    />
                  </div>
                </div>
              </section>

              {image7 ? (
                <section className="mx-auto w-full h-auto mt-20 lg:mt-[10vw] image-wrapper">
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
                    data-cursor-text={`${image7?.title}`}
                  />
                </section>
              ) : null}
            </div>

            <div className="col-center text-left lg:text-center uppercase my-2xbody text-muted-class lg:text-[1.2vw]">
              <h6 className="">CREDITS</h6>

              <div className="around w-fit flex-wrap lg:flex-nowrap gap-[7.177%] lg:text-[1.5vw] leading-normal whitespace-nowrap">
                {[creditNames, creditTitles].map((credit, idx) => {
                  return (
                    <div key={idx} className="col-center mt-[7.177%]">
                      <p className="animated-text vertical-anim">
                        {creditTitles[idx]}
                      </p>

                      <p className="font-CormorantGaramond animated-text vertical-anim">
                        {creditNames[idx]}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="center lg:mb-2xbody" id="project-other-images">
          <div className="w-full absolute overflow-hidden hidden lg:block">
            <div className="highlight sticky top-1/2 text-center uppercase no-fill-text font-CormorantGaramond text-7xl lg:text-[15.28vw] text-[15.28vw] whitespace-nowrap">
              <h2 className=" z-10 ">{projectTitle}</h2>
              <h2 className=" z-10 ">{projectTitle}</h2>
              <h2 className=" z-10 ">{projectTitle}</h2>
            </div>
          </div>

          <div className="max-w-[100vw] min-h-max no-scrollbar overflow-hidden relative">
            <div className="start flex-nowrap space-x-6Fixed other section  min-h-screen w-fit">
              {otherImages.map((image, idx) => {
                let rotationAngle =
                  Math.random() < 0.5
                    ? Math.random() * (-10 - 0) + 0
                    : Math.random() * (10 - 0) + 0;

                return (
                  <div
                    key={idx}
                    className="w-[80vw] lg:w-[70vw] min-h-full center panel"
                  >
                    <div
                      className={`w-auto max-w-[90%] lg:max-w-[48%] max-h-[80%] center overflow-hidden`}
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
                        data-cursor-text={`${image?.title}`}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {nextProject ? (
          <NextProject nextProject={nextProject} theme={theme} />
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
