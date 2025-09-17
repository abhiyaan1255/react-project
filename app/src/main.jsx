import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import styled, { createGlobalStyle } from "styled-components";
const Globel=createGlobalStyle`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
body{
  background-color: #323334;
  height: 100vh;
  color:white;
}
`
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Globel></Globel>
    <App />
  </React.StrictMode>
);
