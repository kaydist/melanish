import React, { useEffect } from "react";
import { PageTransitionStart } from "../animations/pageTransition";
import { preloadImages } from "../controller/utils";

export default function ListView({ projects, setPageChange }) {
  useEffect(() => {
    preloadImages();
  }, []);
  return (
    <div className="content-min-h mt-20 lg:mt-0 w-full">
      <div className="">
        {projects.map((project) => {
          const { id, projectTitle, mainProjectImage } = project.node || {};

          return (
            <div
              id={id}
              key={id}
              className="py-8 lg:py-[2.5vw] border-b uppercase relative project"
              data-cursor-img={`${mainProjectImage.url}`}
              onClick={() => {
                setPageChange(true);
                PageTransitionStart(`portfolio/${projectTitle}`);
              }}
            >
              <div className="font-CormorantGaramond text-xl lg:text-[2vw] px-body">
                <p className="">{projectTitle}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
