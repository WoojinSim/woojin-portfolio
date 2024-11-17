/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from "react";

import { mainContainer, itemTitleLabel, titleLabel, contentLabel } from "./styles/AboutMe.styles";

const AboutMe: React.FC = () => {
  return (
    <div css={mainContainer}>
      <span css={itemTitleLabel}>저는,</span>
      <span css={titleLabel}>만드는 것이 그저 즐거운 사람입니다.</span>
      <span css={contentLabel}>
        아주 사소한것들 이라도, 필요 없어 보이는 것들이라도 결과를 만들어내는 것이 막연히 좋았던 저는
      </span>
      <span css={contentLabel}>
        오늘날, 코딩이라는 수단으로 아이디어를 실현하고, 만들어진 결과물들이 불러오는 변화들이 너무나도 소중해졌습니다.
      </span>
      <span css={contentLabel}>
        저는, 더욱더 완성도 높은 결과물 빗어내기 위해 노력하고 있는 <strong>심우진</strong>입니다.
      </span>
    </div>
  );
};

export default AboutMe;
