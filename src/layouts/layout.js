import React, { useLayoutEffect } from "react";
import Nav from "../components/nav";
import { textSplit } from "../animations/project";

function Layout({ children }) {
  useLayoutEffect(() => {
    textSplit();
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden" theme="light">
      <Nav />

      <div className="md:pt-body min-h-screen">{children}</div>
    </div>
  );
}

export default Layout;
