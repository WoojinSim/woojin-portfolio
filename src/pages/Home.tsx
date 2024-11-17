/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from "react";

import TypingText from "../components/TypingText";
import WhatIDid from "../components/WhatIDid";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import { wrap, headContainer, headLabelContainer, boldText, pointedColor } from "./styles/Home.styles";

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
      <AboutMe />
      <Skills />
      <WhatIDid />
    </div>
  );
};

export default Home;
