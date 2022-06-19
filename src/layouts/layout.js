import React from "react";
import AppState from "../controller/context";
import Menu from "../components/menu";
import Nav from "../components/nav";

function Layout({ children }) {
  return (
    <AppState>
      <div className="min-h-screen">
        <Nav />

        <Menu />
        <div className="pt-body min-h-screen">{children}</div>
      </div>
    </AppState>
  );
}

export default Layout;
