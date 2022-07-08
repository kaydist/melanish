import React from "react";
import { navigate } from "gatsby";
import { PageTransitionStart } from "../animations/pageTransition";

export default function ListView({ projects, setPageChange }) {
  return (
    <div className="content-min-h mt-20 md:mt-0">
      <div className="">
        {projects.map((project) => {
          const { id, projectTitle, mainProjectImage } = project.node || {};

          return (
            <div
              id={id}
              key={id}
              className="py-8 md:py-[2.5vw] border-b uppercase relative project"
              data-cursor-img={`${mainProjectImage.url}`}
              onClick={() => {
                PageTransitionStart(`${projectTitle}`);
                setPageChange(true);
              }}
            >
              <div className="font-CormorantGaramond text-xl md:text-[2vw] px-body">
                <p className="">{projectTitle}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
