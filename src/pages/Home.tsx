/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from "react";

import TypingText from "../components/TypingText";
import WhatIDid from "../components/WhatIDid";

import {
  wrap,
  headContainer,
  headLabelContainer,
  boldText,
  pointedColor,
  mainContainer,
  itemTitleLabel,
} from "./styles/Home.styles";

const Home: React.FC = () => {
  const [isTypingComplete, setIsTypingComplete] = useState<boolean>(false);

  const handleIsTypingComplete = (value: boolean) => {
    setIsTypingComplete(value);
  };

  return (
    <div css={wrap}>
      <div css={headContainer}>
        <div css={headLabelContainer}>
          <div>
            <span>안녕하세요, </span>
            <TypingText setIsTypingComplete={handleIsTypingComplete} />
            <span>개발자</span>
          </div>
          <span css={boldText.extra}>심우진</span>
          <span>입니다</span>
          <span css={isTypingComplete && pointedColor}>.</span>
        </div>
      </div>
      <div css={mainContainer}>
        <span css={itemTitleLabel}>지금까지 해온 것</span>
        <WhatIDid />
      </div>
    </div>
  );
};

export default Home;
