import "./src/styles/tailwind/tailwind.css";

import React from "react";
import AppState from "./src/controller/context";
export const wrapRootElement = ({ element }) => (
  <AppState>{element}</AppState>
);
