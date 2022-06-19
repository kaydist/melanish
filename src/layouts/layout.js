import React from "react";
import Menu from "../components/menu";
import Nav from "../components/nav";

function Layout({ children }) {
  return (
    <div className="min-h-screen" theme="light">
      <Nav />

      <Menu />
      <div className="pt-body min-h-screen">{children}</div>
    </div>
  );
}

export default Layout;
