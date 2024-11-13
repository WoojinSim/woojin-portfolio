/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from "react";
import { css } from "@emotion/react";

import TypingText from "../components/TypingText";

import styles from "./styles/Home.module.css";
import { wrap } from "./styles/Home.styles";

const Home: React.FC = () => {
  return (
    <div css={wrap}>
      <div className={styles.headContainer}>
        <div className={styles.headLabelContainer}>
          <div>
            <span>안녕하세요, </span>
            <TypingText />
            <span> 개발자</span>
          </div>
          <span className={styles.name}>심우진</span>
          <span>입니다</span>
          <span className={styles.dot}>.</span>
        </div>
      </div>
      <div className={styles.introduceContainer}>
        <h1>지금까지 해본 것</h1>
        <span></span>
      </div>
    </div>
  );
};

export default Home;
