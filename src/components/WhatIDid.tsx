/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from "react";

import { mainContainer, itemContainer, itemTitleLabel, itemSubtitleLabel } from "./styles/WhatIDid.styles";

const WhatIDid: React.FC = () => {
  return (
    <div css={mainContainer}>
      <div css={itemContainer}>
        <span css={itemTitleLabel}>상황조치도우미</span>
        <span css={itemSubtitleLabel}>2022.04 ~ 2023.02</span>
      </div>
      <div css={itemContainer}>
        <span css={itemTitleLabel}>Travel Guider</span>
        <span css={itemSubtitleLabel}>2023.09 ~ 2023.12</span>
      </div>
      <div css={itemContainer}>
        <span css={itemTitleLabel}>약속</span>
        <span css={itemSubtitleLabel}>2024.04 ~ 2024.10</span>
      </div>
      <div css={itemContainer}>
        <span css={itemTitleLabel}>나의 포트폴리오</span>
        <span css={itemSubtitleLabel}>2024.11 ~</span>
      </div>
    </div>
  );
};

export default WhatIDid;
