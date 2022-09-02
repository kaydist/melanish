import React, { useState, useLayoutEffect, useMemo, useContext } from "react";
import { pageTransitionEnd } from "../animations/pageTransition";
import {
  textVerticalAnimationIn,
  textVerticalAnimationOut,
  textHorizontalAnimationIn,
} from "../animations/text-animations";
import { imageAnimation } from "../animations/project";
import Layout from "../layouts/layout";
import profileImage from "../images/1.jpg";
import Credits from "../components/credits";
import gsap from "gsap";
import {
  TransitionAnimationIn,
  TransitionAnimationOut,
} from "../animations/pageTransition";
import { AppContext } from "../controller/context";

export default function AboutPage() {
  const { preloaded } = useContext(AppContext);

  useLayoutEffect(() => {
    const onCompleteFun = () => {
      textVerticalAnimationIn();
      textHorizontalAnimationIn();
      imageAnimation();
    };

    pageTransitionEnd(onCompleteFun);
  }, []);

  useMemo(() => {
    if (preloaded) {
      textHorizontalAnimationIn();
      textVerticalAnimationIn();
      imageAnimation();
    }
  }, [preloaded]);

  const [creditsOpen, setCreditsOpen] = useState(false);

  const toggleCredits = () => {
    setCreditsOpen(!creditsOpen);
    document.querySelectorAll("nav button").forEach((btn) => {
      btn.classList.toggle("hidden");
    });

    if (creditsOpen === false) {
      TransitionAnimationIn();
      document.querySelector(".credits").classList.remove("hidden");
      textVerticalAnimationIn();
    } else {
      let onComplete = () => {
        document.querySelector(".credits").classList.add("hidden");
      };
      let verticalTextElem = document.querySelectorAll(
        ".credits .animated-text.vertical-anim"
      );
      gsap
        .timeline({})
        .add(textVerticalAnimationOut(verticalTextElem))
        .add(TransitionAnimationOut(onComplete), "<");
    }
  };

  return (
    <Layout>
      <div className="w-full ">
        <div className="w-full pt-40 md:pt-[10vh] content-min-h">
          <div className="px-body md:px-0 text-left md:text-center text-[5.5rem] md:text-[15vw] font-bold w-full leading-[5rem] md:leading-[13vw] block">
            <span className="animated-text horizontal-anim">ABOUT</span>
            <span className="animated-text horizontal-anim">ME</span>
          </div>

          <div className="flex flex-col-reverse md:grid grid-cols-2 pt-[5vw] px-body">
            <div className="pr-body col-start text-md md:text-[1.2vw] md:leading-normal">
              <p className="animated-text vertical-anim">
                I am highly enthusiastic about building and improving solutions
                to every individual and building products to improve everyone's
                living experience. This makes me always eager to learn and adapt
                to new technologies as required to achieve goals.
              </p>
              <br />
              <p className="animated-text vertical-anim">
                Mood right now is all about the money, being a boy.
              </p>
              <br />
              <p className="animated-text vertical-anim">PS: FUCK ASUU</p>
            </div>

            <div className="center image-wrapper">
              <i className="image-wrapper-mask z-10" />
              <img
                src={profileImage}
                alt="profile"
                className="w-auto max-w-full h-full object-contain max-h-[500px] image-content"
              />
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="w-full content-min-h center overflow-hidden">
            <div className="flex flex-col-reverse md:flex-row md:between w-full">
              <div className="pl-body space-y-5 text-md md:text-[1.2vw] md:space-y-[2vw] mt-14">
                <div>
                  <div className="block animated-text vertical-anim">
                    LAGOS, NIGERIA
                  </div>

                  <a className="block animated-text vertical-anim">
                    +2348 123 3578
                  </a>

                  <a className="block animated-text vertical-anim">
                    JOHN@ABURODOE.COM
                  </a>
                </div>

                <div>
                  <a className="block animated-text vertical-anim">Instagram</a>

                  <a className="block animated-text vertical-anim">Behance</a>

                  <a className="block animated-text vertical-anim">Facebook</a>
                </div>
              </div>

              <div className="px-body md:px-0 text-[5.5rem] md:text-[15vw] font-bold w-fit text-left leading-[5rem] md:leading-[13vw]">
                <span className="animated-text horizontal-anim">WORK</span>{" "}
                <br />
                <span className="animated-text horizontal-anim">WITH</span>
                <span className="animated-text horizontal-anim">ME</span>
              </div>
            </div>
          </div>

          <div className="text-md md:text-[1.2vw] start space-x-5 pl-body py-5 md:py-[2vw] w-full">
            <div>
              <button
                className="menu-link relative underline decoration-dotted underline-offset-2"
                onClick={toggleCredits}
              >
                Credits
              </button>
            </div>

            <div>
              <a className="menu-link relative underline decoration-dotted underline-offset-2">
                Request Content Removal
              </a>
            </div>
          </div>
        </div>
      </div>

      <Credits creditsOpen={creditsOpen} toggleCredits={toggleCredits} />
    </Layout>
  );
}
