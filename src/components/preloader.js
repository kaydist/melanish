import React, { useEffect, useLayoutEffect, useContext } from "react";
import gsap from "gsap";
import { AppContext } from "../controller/context";
import { textHorizontalAnimationIn } from "../animations/project";

function Preloader() {
  const { setPreloaded } = useContext(AppContext);

  useLayoutEffect(() => {
    var perfData = window.performance.timing;
    var EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart);
    var time = parseInt((EstimatedTime / 1000) % 60) * 100;

    var start = 0;
    var end = 100;
    var durataion = time;
    animateValue(start, end, durataion);

    function animateValue(start, end, duration) {
      var PercentageID = document.getElementById("progress");
      var circularProgress = document.querySelector(".transition-elem");
      var range = end - start;
      var current = start;
      var increment = end > start ? 1 : -1;
      var stepTime = Math.abs(Math.floor(duration / range));
      var obj = PercentageID;
      var timer = setInterval(function () {
        current += increment;

        gsap.set(circularProgress, {
          transformOrigin: "center center",
        });
        const tl = gsap
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
            .to(".progress-container", { opacity: 0, duration: 0.5 })
            .to(
              circularProgress,
              {
                scale: `${current}` * 0.5,
                ease: "expo.in",
                duration: 1.5,
              },
              "<"
            )
            .to(circularProgress, {
              scale: 110,
              ease: "expo.out",
              duration: 1.5,
              onComplete: () => {
                let gatsbyBody = document.getElementById("___gatsby");
                gatsbyBody.removeChild(document.querySelector(".preloader"));
                setPreloaded(true);
                console.log("preloaded");
              },
            });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="h-screen w-screen fixed z-[51] dark:bg-white bg-[#030303] center preloader">
      <div className="overflow-hidden text-white text-5xl md:text-[3vw] font-black dark:text-[#030303] text-center progress-container">
        <p className="">
          <span id="progress" className="inline-block">
            00
          </span>{" "}
          %
        </p>
      </div>

      <div className="transition-elem bg-white mix-blend-difference" />

      <div className="absolute right-0 bottom-[5vh] text-[15vw] font-bold w-fit text-right leading-[13vw] dark:text-[#030303] text-white">
        <span className="">
          MELANISH
          <sup className="text-[30%] absolute top-[30%] -right-[10%]">o</sup>
        </span>
      </div>
    </div>
  );
}

export default Preloader;
