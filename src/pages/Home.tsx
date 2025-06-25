/** @jsxImportSource @emotion/react */
import React, { useState } from "react";

import TypingText from "../components/TypingText";
import WhatIDid from "../components/WhatIDid";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Footer from "../components/Footer";
import Career from "../components/Career";
import {
  wrap,
  headContainer,
  headLabelContainer,
  boldText,
  pointedColor,
  contentContainer,
  headLabelInnerContainer,
} from "./styles/Home.styles";

const Home: React.FC = () => {
  const [isTypingComplete, setIsTypingComplete] = useState<boolean>(false);

  const handleIsTypingComplete = (value: boolean) => {
    setIsTypingComplete(value);
  };

  return (
    <div css={wrap}>
      {/* 헤더 컨테이너 */}
      <div css={headContainer}>
        <div css={headLabelContainer}>
          <div css={headLabelInnerContainer}>
            <span>안녕하세요,</span>
            <TypingText
              texts={["고민하는", "해결해 내는", "잠 못 드는", "긍정적인", "되짚어보는", "도전하는"]}
              rotationInterval={3000}
            />
            <span>개발자</span>
          </div>
          <span css={boldText.extra}>심우진</span>
          <span>입니다</span>
          <span css={isTypingComplete && pointedColor}>.</span>
        </div>
      </div>

      {/* 컨텐츠 컨테이너 */}
      <div css={contentContainer}>
        <AboutMe />
        <Skills />
        <Career />
        <WhatIDid />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
