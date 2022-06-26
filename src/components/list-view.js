import React from "react";
import { Link } from "gatsby";

export default function ListView({ projects }) {
  return (
    <div className="content-min-h">
      <div className="">
        {projects.map((project) => {
          const { id, projectTitle } = project.node || {};

          return (
            <Link href={`/${projectTitle}`}>
              <div
                id={id}
                key={id}
                className="py-8 md:py-[2.5vw] border-b uppercase relative project"
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
