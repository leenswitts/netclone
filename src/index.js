import React from "react";
import { render } from "react-dom";
import "normalize.css";
import App from "./App";
import { GlobalStlyes } from "./globalStyles";

render(
  <>
    <GlobalStlyes />
    <App />
  </>,
  document.getElementById("root")
);
