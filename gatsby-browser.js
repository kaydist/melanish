import "./src/styles/tailwind/tailwind.css";
import "./src/styles/scss/index.scss";
import React from "react";
import AppState from "./src/controller/context";
import Cursor from "./src/components/cursor";

export const wrapRootElement = ({ element }) => (
  <>
    <AppState>{element}</AppState>

    <Cursor />
  </>
);
