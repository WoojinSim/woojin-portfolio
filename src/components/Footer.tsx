/** @jsxImportSource @emotion/react */
import React from "react";
import * as style from "./styles/Footer.styles";

const Footer: React.FC = () => {
  return (
    <div css={style.mainContainer}>
      <span css={style.commonLabel}>© 2024. Woojin Sim. All rights reserved.</span>
      <span css={style.commonLabel}>이 웹사이트는 React, Emotion을 사용해 만들어졌습니다.</span>
    </div>
  );
};

export default Footer;
