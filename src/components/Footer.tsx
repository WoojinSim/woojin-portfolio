/** @jsxImportSource @emotion/react */
import React from "react";
import { mainContainer, commonLabel } from "./styles/Footer.styles";

const Skills: React.FC = () => {
  return (
    <div css={mainContainer}>
      <span css={commonLabel}>© 2024. Woojin Sim. All rights reserved.</span>
      <a href="https://hits.seeyoufarm.com">
        <img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fwoojinsim.github.io%2Fwoojin-portfolio%2F&count_bg=%23454545&title_bg=%23454545&icon=&icon_color=%23E7E7E7&title=Visitors&edge_flat=false" />
      </a>
    </div>
  );
};

export default Skills;
