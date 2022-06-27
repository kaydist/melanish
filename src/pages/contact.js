import React, { useLayoutEffect } from "react";
import {
  textVerticalAnimation,
  textHorizontalAnimationIn,
} from "../animations/project";
import Layout from "../layouts/layout";

export default function ContactPage() {
  useLayoutEffect(() => {
    textVerticalAnimation();
    textHorizontalAnimationIn();
  }, []);

  return (
    <Layout>
      <div className="w-full content-min-h max-h-screen col-between">
        <div className="w-full center min-h-[inherit]">
          <div className="flex flex-col-reverse md:flex-row md:between w-full h-fit">
            <div className="pl-body space-y-5 md:space-y-[2vw] mt-14">
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

            <div className="px-body md:px-0 text-[5.5rem] md:text-[15vw] font-bold w-fit text-left leading-[5rem] md:leading-[13vw] block">
              <span className="animated-text horizontal-anim">WORK</span> <br />
              <span className="animated-text horizontal-anim">WITH</span>
              <span className="animated-text horizontal-anim">US</span>
            </div>
          </div>
        </div>

        <div className="text-center text-sm md:text-[1vw] center w-full">
          Developed By: Kay
        </div>
      </div>
    </Layout>
  );
}
