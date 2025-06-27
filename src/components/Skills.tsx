/** @jsxImportSource @emotion/react */
import React, { useRef } from "react";
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
import { motion } from "framer-motion";

// TODO: 잘 알고있는 언어 들을 단계별로 나누어 표시

const Skills: React.FC = () => {
  const addScrollAnimationRef = useScrollAnimation();

  return (  
    <section css={style.mainContainer}>
      <span css={[style.itemTitleLabel, scrollFadeInRight]} ref={addScrollAnimationRef}>
        할 수 있는 것
      </span>
      <div css={[style.skillContainer, scrollFadeInLeft]} ref={addScrollAnimationRef}>
        <div css={style.categorySelectContainer}>
          <motion.button>
            <span>프론트엔드</span>
          </motion.button>
        </div>

        <div css={style.skillBadgeContainer}>
          <span>React</span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
