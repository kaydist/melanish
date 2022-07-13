import React, { useEffect, useLayoutEffect } from "react";
import { pageTransitionEnd } from "../animations/pageTransition";
import {
  textVerticalAnimationIn,
  textHorizontalAnimationIn,
} from "../animations/project";
import Layout from "../layouts/layout";
import profileImage from "../images/1.jpg";

export default function ContactPage() {
  useLayoutEffect(() => {
    const onCompleteFun = () => {
      textVerticalAnimationIn();
      textHorizontalAnimationIn();
    };

    pageTransitionEnd(onCompleteFun);
  }, []);

  return (
    <Layout>
      <div className="w-full ">
        <div className="w-full py-40 lg:py-[10vh] content-min-h">
          <div className="px-body lg:px-0 text-left lg:text-center text-[5.5rem] lg:text-[15vw] font-bold w-full leading-[5rem] lg:leading-[13vw] block">
            <span className="animated-text horizontal-anim">ABOUT</span>
            <span className="animated-text horizontal-anim">ME</span>
          </div>

          <div className="flex flex-col-reverse lg:grid grid-cols-2 pt-[5vw] px-body">
            <div className="pr-body col-center">
              <p className="text-lg lg:text-[1vw] animated-text vertical-anim">
                Reprehenderit magna proident cupidatat occaecat. Ea sunt velit
                ut sit officia consequat. Aliquip ea nulla amet incididunt
                pariatur laborum est quis id mollit consectetur est Lorem. Elit
                ad duis magna adipisicing labore ad nostrud.
              </p>
              <br />
              <p className="text-lg lg:text-[1vw] animated-text vertical-anim">
                Reprehenderit magna proident cupidatat occaecat. Ea sunt velit
                ut sit officia consequat. Aliquip ea nulla amet incididunt
                pariatur laborum est quis id mollit consectetur est Lorem. Elit
                ad duis magna adipisicing labore ad nostrud.
              </p>
            </div>

            <div className="center">
              <img
                src={profileImage}
                alt="profile"
                className="w-auto h-full object-contain max-h-[400px]"
              />
            </div>
          </div>
        </div>

        <div className="min-h-screen w-full">
          <div className="w-full content-min-h center overflow-hidden">
            <div className="flex flex-col-reverse lg:flex-row lg:between w-full">
              <div className="pl-body space-y-5 text-lg lg:text-[1vw] lg:space-y-[2vw] mt-14">
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

              <div className="px-body lg:px-0 text-[5.5rem] lg:text-[15vw] font-bold w-fit text-left leading-[5rem] lg:leading-[13vw]">
                <span className="animated-text horizontal-anim">WORK</span>{" "}
                <br />
                <span className="animated-text horizontal-anim">WITH</span>
                <span className="animated-text horizontal-anim">ME</span>
              </div>
            </div>
          </div>

          <div className="text-lg lg:text-[1vw] start space-x-5 pl-body py-5 lg:py-[2vw] w-full">
            <div>
              <button>Credits</button>
            </div>

            <div>
              <a>Request Content Removal</a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
