/** @jsxImportSource @emotion/react */
import React from "react";
import { mainContainer, commonLabel } from "./styles/Footer.styles";

const Footer: React.FC = () => {
  return (
    <div css={mainContainer}>
      <span css={commonLabel}>© 2024. Woojin Sim. All rights reserved.</span>
      <span css={commonLabel}>이 웹사이트는 React, Emotion을 사용해 만들어졌습니다.</span>
      <a href="https://hits.seeyoufarm.com">
        <img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fwoojinsim.github.io%2Fwoojin-portfolio%2F&count_bg=%23454545&title_bg=%23454545&icon=&icon_color=%23E7E7E7&title=Visitors&edge_flat=false" />
      </a>
    </div>
  );
};

export default Footer;
