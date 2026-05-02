import React, { useEffect, useMemo } from "react";
import { PageTransitionStart } from "../animations/pageTransition";

const cursorImageUrl = (url) => {
  if (!url) return "";
  const sep = url.includes("?") ? "&" : "?";
  return `${url}${sep}w=600&fm=webp&q=80`;
};

export default function ListView({ projects, setPageChange }) {
  const cursorUrls = useMemo(
    () =>
      projects
        .map((p) => p?.node?.mainProjectImage?.url)
        .filter(Boolean)
        .map(cursorImageUrl),
    [projects]
  );

  useEffect(() => {
    cursorUrls.forEach((url) => {
      const img = new Image();
      img.decoding = "async";
      img.src = url;
    });
  }, [cursorUrls]);

  return (
    <div className="content-min-h mt-20 lg:mt-0 w-full">
      <div className="">
        {projects.map((project) => {
          const { id, projectTitle, mainProjectImage } = project.node || {};
          const cursorUrl = cursorImageUrl(mainProjectImage?.url);

          return (
            <div
              id={id}
              key={id}
              className="py-8 lg:py-[2.5vw] border-b uppercase relative project"
              data-cursor-img={cursorUrl}
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
