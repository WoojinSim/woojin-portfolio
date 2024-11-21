/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from "react";
import { SiTypescript, SiJavascript, SiPython, SiReact, SiExpress, SiDocker, SiKubernetes } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { mainContainer, itemTitleLabel, categoryContainer, categoryLabel, skillsList } from "./styles/Skills.styles";

const Skills: React.FC = () => {
  return (
    <div css={mainContainer}>
      <span css={itemTitleLabel}>할 수 있는 것</span>

      <div css={categoryContainer}>
        <span css={categoryLabel}>언어</span>
        <ul css={skillsList}>
          <li>
            <SiTypescript />
            TypeScript
          </li>
          <li>
            <SiJavascript />
            JavaScript
          </li>
          <li>
            <SiPython />
            Python
          </li>
          <li>
            <FaJava />
            Java
          </li>
        </ul>
      </div>

      <div css={categoryContainer}>
        <span css={categoryLabel}>라이브러리</span>
        <ul css={skillsList}>
          <li>
            <SiReact />
            React
          </li>
          <li>
            <SiReact />
            React Native
          </li>
          <li>🎨 Emotion</li>
          <li>
            <SiExpress />
            Express
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
