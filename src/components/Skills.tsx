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
import * as style from "./styles/Skills.styles";
import { scrollFadeInLeft, scrollFadeInRight } from "./styles/global.styles";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

// TODO: 잘 알고있는 언어 들을 단계별로 나누어 표시

const Skills: React.FC = () => {
  const addScrollAnimationRef = useScrollAnimation();

  return (
    <div css={style.mainContainer}>
      <span css={[style.itemTitleLabel, scrollFadeInRight]} ref={addScrollAnimationRef}>
        할 수 있는 것
      </span>
      <div css={[style.categoryContainer, scrollFadeInLeft]} ref={addScrollAnimationRef}>
        <span css={style.categoryTitle}>언어</span>
        <div css={style.categorySubContainer}>
          <span css={style.categorySubTitle}>주로 사용</span>
          <ul css={style.skillsList}>
            <li data-skill="typescript">
              <SiTypescript css={style.skillIcon} />
              TypeScript
            </li>
            <li data-skill="javascript">
              <SiJavascript css={style.skillIcon} />
              JavaScript
            </li>
            <li data-skill="python">
              <SiPython css={style.skillIcon} />
              Python
            </li>
          </ul>
        </div>
        <div css={style.categorySubContainer}>
          <span css={style.categorySubTitle}>사용 경험</span>
          <ul css={style.skillsList}>
            <li data-skill="java">
              <FaJava css={style.skillIcon} />
              Java
            </li>
            <li data-skill="cplusplus">
              <SiCplusplus css={style.skillIcon} />
              C++
            </li>
            <li data-skill="csharp">
              <SiCsharp css={style.skillIcon} />
              C#
            </li>
            <li data-skill="asp">🖥️ ASP Classic</li>
            <li data-skill="r">
              <SiR css={style.skillIcon} />R
            </li>
            <li data-skill="lua">
              <SiLua css={style.skillIcon} />
              Lua Script
            </li>
          </ul>
        </div>
      </div>

      <div css={[style.categoryContainer, scrollFadeInLeft]} ref={addScrollAnimationRef}>
        <span css={style.categoryTitle}>라이브러리</span>

        <div css={style.categorySubContainer}>
          <span css={style.categorySubTitle}>주로 사용</span>
          <ul css={style.skillsList}>
            <li data-skill="react">
              <SiReact css={style.skillIcon} />
              React
            </li>
            <li data-skill="reactnative">
              <SiReact css={style.skillIcon} />
              React Native
            </li>
            <li data-skill="emotion">
              <span css={style.skillIcon}>🎨</span>
              Emotion
            </li>
            <li data-skill="tailwind">
              <SiTailwindcss css={style.skillIcon} />
              Tailwind
            </li>
            <li data-skill="express">
              <SiExpress css={style.skillIcon} />
              Express
            </li>
          </ul>
        </div>
        <div css={style.categorySubContainer}>
          <span css={style.categorySubTitle}>사용 경험</span>
          <ul css={style.skillsList}>
            <li data-skill="redux">
              <SiRedux css={style.skillIcon} />
              Redux
            </li>
            <li data-skill="next">
              <SiNextdotjs css={style.skillIcon} />
              NEXT
            </li>
            <li data-skill="django">
              <SiDjango css={style.skillIcon} />
              DJango
            </li>
            <li data-skill="dotnet">
              <SiDotnet css={style.skillIcon} />
              .NET
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
