import React from "react";
import { navigate } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function GalleryView({ projects, setPageChange }) {
  return (
    <div
      className="max-w-full start overflow-x-auto overflow-y-hidden no-scrollbar content-min-h snap-x snap-mandatory"
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
                navigate(`/${projectTitle}`);
              }}
            >
              <div className="max-w-[60%] image-container overflow-hidden">
                <GatsbyImage
                  image={getImage(mainProjectImage)}
                  alt={mainProjectImage?.title}
                  className="object-contain"
                />
              </div>

              <h2 className="uppercase font-CormorantGaramond text-[10.69vw] bottom-[25%] md:bottom-[0] absolute z-10">
                {projectTitle}
              </h2>
            </div>
          </div>
        );
      })}
    </div>
  );
}
