import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Global, css } from "@emotion/react";

const GlobalStyles = () => (
  <Global
    styles={css`
      html,
      body {
        margin: 0 !important;
        padding: 0;
        box-sizing: border-box;
        font-family: "NanumSquareNeo";
        background-color: #ffffff;
      },
    `}
  />
);

function App() {
  return (
    <>
      <GlobalStyles />
      <Router basename="/woojin-portfolio">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
