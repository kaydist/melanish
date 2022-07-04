import React from "react";
import { Link } from "gatsby";

export default function ListView({ projects }) {
  return (
    <div className="content-min-h mt-20 md:mt-0">
      <div className="">
        {projects.map((project) => {
          const { id, projectTitle, mainProjectImage } = project.node || {};

          return (
            <Link href={`/${projectTitle}`}>
              <div
                id={id}
                key={id}
                className="py-8 md:py-[2.5vw] border-b uppercase relative project"
                data-cursor-img={`${mainProjectImage.url}`}
              >
                <div className="font-CormorantGaramond text-xl md:text-[2vw] px-body">
                  <p className="">{projectTitle}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
