import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { PageTransitionStart } from "../animations/pageTransition";
import { innerHeight } from "../controller/utils";

export default function GalleryView({ projects, setPageChange }) {
  return (
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
  );
}
