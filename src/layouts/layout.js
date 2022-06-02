import React, { useEffect } from "react";
import Menu from "../components/menu";
import Nav from "../components/nav";
import { getAllOptions } from "../controller/config";

function Layout({ children }) {
  useEffect(() => {
    var AllOptions = getAllOptions();
    console.log(AllOptions);
  }, []);

  return (
    <div className="min-h-screen">
      <Nav />

      <Menu />
      <div className="pt-body min-h-screen">{children}</div>
    </div>
  );
}

export default Layout;
