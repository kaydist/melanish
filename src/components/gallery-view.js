import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function GalleryView({ projects }) {
  return (
    <div
      className="max-w-full start overflow-x-auto overflow-y-hidden no-scrollbar content-min-h"
      id="portfolio-gallery-view-container"
    >
      {projects.map((project) => {
        const { id, projectTitle, mainProjectImage } = project.node || {};

        return (
          <Link to={`/${projectTitle}`} key={id}>
            <div className="min-w-[100vw]  max-h-[60vh] center relative">
              <div className="max-w-[60%] overflow-hidden">
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
          </Link>
        );
      })}
    </div>
  );
}
