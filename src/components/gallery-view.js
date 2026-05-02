import React, { useEffect, useState } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { PageTransitionStart } from "../animations/pageTransition";
import { innerHeight } from "../controller/utils";

export default function GalleryView({ projects, setPageChange }) {
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    const el = document.getElementById("portfolio-gallery-view-container");
    if (!el) return;
    const onScroll = () => {
      if (el.scrollLeft > 40) setShowHint(false);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div
        className={`max-w-full start overflow-x-auto overflow-y-hidden no-scrollbar snap-mandatory snap-x content-min-h min-h-[${innerHeight()}px]`}
        id="portfolio-gallery-view-container"
      >
        {projects.map((project) => {
          const { id, projectTitle, mainProjectImage } = project.node || {};

          return (
            <div
              className="min-w-[100vw]  max-h-[60vh] center relative snap-center"
              key={id}
            >
              <div
                className="w-fit center project-details"
                onClick={() => {
                  setPageChange(true);
                  PageTransitionStart(`portfolio/${projectTitle}`);
                }}
              >
                <div className="max-w-[60%] image-container overflow-hidden">
                  <GatsbyImage
                    image={getImage(mainProjectImage)}
                    alt={mainProjectImage?.title}
                    className="object-contain"
                  />
                </div>

                <h2 className="uppercase font-CormorantGaramond text-[10.69vw] bottom-[25%] lg:bottom-[0] absolute z-10 text-white mix-blend-difference">
                  {projectTitle}
                </h2>
              </div>
            </div>
          );
        })}
      </div>

      <div
        aria-hidden="true"
        className={`pointer-events-none fixed right-8 top-1/2 -translate-y-1/2 z-50 mix-blend-difference text-white transition-opacity duration-700 ease-out ${
          showHint ? "opacity-100" : "opacity-0"
        }`}
      >
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-drift-right"
        >
          <path d="M9 6l6 6-6 6" />
        </svg>
      </div>
    </>
  );
}
