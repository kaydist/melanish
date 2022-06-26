import "./src/styles/tailwind/tailwind.css";
import "./src/styles/scss/index.scss";
import React from "react";
import AppState from "./src/controller/context";
export const wrapRootElement = ({ element }) => <AppState>{element}</AppState>;
