import "./src/styles/tailwind/tailwind.css";
import "./src/styles/scss/index.scss";
import React from "react";
import AppState from "./src/controller/context";
import Cursor from "./src/components/cursor";
import Preloader from "./src/components/preloader";



export const wrapRootElement = ({ element }) => (
  <>
    <AppState>
      {element}

      <Preloader />
    </AppState>

    <Cursor />
  </>
);
