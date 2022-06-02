import React from "react";
import Layout from "../layouts/layout";

function List() {
  const projects = [
    { name: "Editorial", link: "/list/#" },
    {
      name: "Pale Lady",
      link: "/list/#",
    },
    {
      name: "Melanish",
      link: "/list/#",
    },
  ];

  return (
    <Layout>
      <div className="content-min-h">
      <div className="">
        {projects.map((project, idx) => {
          return (
            <a href={`${project?.link}`} rel="noreferrer">
              <div
                id={project?.name}
                key={idx}
                className="py-8 md:py-[2.5vw] border-b uppercase relative project"
              >
                <div className="font-CormorantGaramond text-xl md:text-[2vw] px-body">
                  <p className="">{project?.name}</p>
                </div>
              </div>
            </a>
          );
        })}
      </div>
      </div>
    </Layout>
  );
}

export default List;
