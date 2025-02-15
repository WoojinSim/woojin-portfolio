/** @jsxImportSource @emotion/react */
import React from "react";
import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiReact,
  SiExpress,
  SiCplusplus,
  SiCsharp,
  SiR,
  SiDotnet,
  SiLua,
  SiNextdotjs,
  SiRedux,
  SiDjango,
  SiTailwindcss,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import {
  mainContainer,
  itemTitleLabel,
  categoryContainer,
  categoryTitle,
  categorySubTitle,
  skillsList,
  categorySubContainer,
  skillIcon,
} from "./styles/Skills.styles";

// TODO: 잘 알고있는 언어 들을 단계별로 나누어 표시

const Skills: React.FC = () => {
  return (
    <div css={mainContainer}>
      <span css={itemTitleLabel}>할 수 있는 것</span>
      <div css={categoryContainer}>
        <span css={categoryTitle}>언어</span>
        <div css={categorySubContainer}>
          <span css={categorySubTitle}>주로 사용</span>
          <ul css={skillsList}>
            <li data-skill="typescript">
              <SiTypescript css={skillIcon} />
              TypeScript
            </li>
            <li data-skill="javascript">
              <SiJavascript css={skillIcon} />
              JavaScript
            </li>
            <li data-skill="python">
              <SiPython css={skillIcon} />
              Python
            </li>
          </ul>
        </div>
        <div css={categorySubContainer}>
          <span css={categorySubTitle}>사용 경험</span>
          <ul css={skillsList}>
            <li data-skill="java">
              <FaJava css={skillIcon} />
              Java
            </li>
            <li data-skill="cplusplus">
              <SiCplusplus css={skillIcon} />
              C++
            </li>
            <li data-skill="csharp">
              <SiCsharp css={skillIcon} />
              C#
            </li>
            <li data-skill="asp">🖥️ ASP Classic</li>
            <li data-skill="r">
              <SiR css={skillIcon} />R
            </li>
            <li data-skill="lua">
              <SiLua css={skillIcon} />
              Lua Script
            </li>
          </ul>
        </div>
      </div>

      <div css={categoryContainer}>
        <span css={categoryTitle}>라이브러리</span>

        <div css={categorySubContainer}>
          <span css={categorySubTitle}>주로 사용</span>
          <ul css={skillsList}>
            <li data-skill="react">
              <SiReact css={skillIcon} />
              React
            </li>
            <li data-skill="reactnative">
              <SiReact css={skillIcon} />
              React Native
            </li>
            <li data-skill="emotion">
              <span css={skillIcon}>🎨</span>
              Emotion
            </li>
            <li data-skill="express">
              <SiExpress css={skillIcon} />
              Express
            </li>
          </ul>
        </div>
        <div css={categorySubContainer}>
          <span css={categorySubTitle}>사용 경험</span>
          <ul css={skillsList}>
            <li data-skill="tailwind">
              <SiTailwindcss css={skillIcon} />
              Tailwind
            </li>
            <li data-skill="redux">
              <SiRedux css={skillIcon} />
              Redux
            </li>
            <li data-skill="next">
              <SiNextdotjs css={skillIcon} />
              NEXT
            </li>
            <li data-skill="django">
              <SiDjango css={skillIcon} />
              DJango
            </li>
            <li data-skill="dotnet">
              <SiDotnet css={skillIcon} />
              .NET
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
