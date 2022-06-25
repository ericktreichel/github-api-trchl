import React from "react";
import ReactDOM from "react-dom/client";
import Providers from "./provider";
// import * as S from "./styled";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Providers />
  </React.StrictMode>
);
