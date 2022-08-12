import React, { useLayoutEffect, useContext, useState } from "react";
import gsap from "gsap";
import { AppContext } from "../controller/context";
import { textSplit } from "../animations/text-animations";

function Preloader() {
  const { setPreloaded } = useContext(AppContext);
  const [preloadedState, setPreloadedState] = useState(false);

  useLayoutEffect(() => {
    var circularProgress = document.querySelector(".circular-progress");
    var title = document.getElementById("company-name");
    var perfData = window.performance.timing;
    var EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart);
    var time = parseInt((EstimatedTime / 1000) % 60) * 100;
    gsap.set(circularProgress, {
      transformOrigin: "center center",
    });
    gsap.set(title, {
      opacity: 0,
      display: "none",
    });

    var start = 0;
    var end = 100;
    var durataion = time;
    animateValue(start, end, durataion);

    function animateValue(start, end, duration) {
      var PercentageID = document.getElementById("progress");
      var range = end - start;
      var current = start;
      var increment = end > start ? 1 : -1;
      var stepTime = Math.abs(Math.floor(duration / range));
      var obj = PercentageID;
      var timer = setInterval(function () {
        current += increment;

        gsap
          .timeline({})
          .fromTo(
            obj,
            { y: 0 },
            {
              y: "100%",
              ease: "expo.out",
              onComplete: () => {
                obj.textContent = current;
              },
            }
          )
          .to(
            circularProgress,
            {
              scale: `${current} ` * 0.075,
              ease: "expo.out",
            },
            "<"
          )
          .fromTo(obj, { y: "-100%" }, { y: 0, ease: "expo.out" });

        if (current === end) {
          clearInterval(timer);

          gsap
            .timeline({})
            .to(".progress-container", {
              opacity: 0,
              display: "none",
              duration: 0.5,
            })
            .to(
              circularProgress,
              {
                scale: `${current}` * 0.5,
                ease: "expo.in",
                duration: 1.5,
              },
              "<"
            )
            .to(
              circularProgress,
              {
                scale: 110,
                ease: "expo.out",
                duration: 1.5,
              },
              "<"
            )
            .to(title, {
              opacity: 1,
              display: "block",
              duration: 0.75,
              onComplete: () => {
                textSplit();

                const allVerticalParagragh = document.querySelectorAll(
                  ".animated-text.vertical-anim"
                );
                const allHorizontalParagragh = document.querySelectorAll(
                  ".animated-text.horizontal-anim"
                );

                allVerticalParagragh.forEach((paragraph) => {
                  let text = paragraph.querySelectorAll(".paragraph-word");

                  text.forEach((text) => {
                    gsap.set(text, { y: "500%" });
                  });
                });

                allHorizontalParagragh.forEach((paragraph) => {
                  let text = paragraph.querySelectorAll(".paragraph-word");

                  text.forEach((text) => {
                    gsap.set(text, { x: "500%" });
                  });
                });

                setPreloaded(true);
                setPreloadedState(true);
              },
            });
        }
      }, 100);
    }
  }, []);

  return (
    <div
      className={`h-[100vh] w-[100vw] dark:bg-white bg-[#030303] fixed z-[9999] ${
        preloadedState === false ? `center` : `hidden`
      } `}
    >
      <div className="overflow-hidden col-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <p className="progress-container text-white dark:text-[#030303] font-black text-5xl lg:text-[5vw]">
          <span id="progress" className="inline-block">
            00
          </span>{" "}
          %
        </p>

        <div className="hidden" id="company-name">
          <div className=" text-5xl lg:text-[5vw] font-bold dark:text-[#030303] relative mb-4 lg:mb-[1vw]">
            MELANISH
            <sup className="text-[30%] absolute top-[30%] -right-[10%]">o</sup>
          </div>
        </div>
      </div>

      <div className="circular-progress w-[2.5vh] h-[2.5vh] lg:w-[2.5vw] lg:h-[2.5vw] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[48] rounded-full bg-white mix-blend-difference" />
    </div>
  );
}

export default Preloader;
