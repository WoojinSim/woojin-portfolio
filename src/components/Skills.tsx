/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiReact,
  SiExpress,
  SiLua,
  SiNextdotjs,
  SiDjango,
  SiTailwindcss,
  SiKeycloak,
  SiReactquery,
  SiFramer,
  SiChartdotjs,
} from "react-icons/si";
import { GoTable } from "react-icons/go";
import { TbCircleLetterGFilled } from "react-icons/tb";
import { RiEmotionFill } from "react-icons/ri";
import ZustandIcon from "../assets/Images/zustand.svg";

import * as style from "./styles/Skills.styles";
import { scrollFadeInLeft, scrollFadeInRight } from "./styles/global.styles";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { motion } from "framer-motion";

// TODO: 잘 알고있는 언어 들을 단계별로 나누어 표시

const Skills: React.FC = () => {
  const addScrollAnimationRef = useScrollAnimation();
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);

  return (
    <section css={style.mainContainer}>
      <span css={[style.itemTitleLabel, scrollFadeInRight]} ref={addScrollAnimationRef}>
        역량
      </span>
      <div css={[style.skillDescription, scrollFadeInRight]} ref={addScrollAnimationRef}>
        <span className="large">
          구조화된 설계, 예측된 상태 흐름, 사용자 경험에 집중하여 개발합니다<b>.</b>
        </span>
        <span>
          단순 구현보다는 도구와 시스템의 작동 원리를 분석하고, 장기적인 유지보수성과 커스터마이징 가능성을 고려해
          구현하는 개발자인 저는,
        </span>
        <span>
          의사 결정이 느릴 수 있지만 선택한 방향은 긍정적인 결과를 가르킵니다<b>.</b>
        </span>
      </div>

      <div css={[style.skillContainer, scrollFadeInLeft]} ref={addScrollAnimationRef}>
        <div css={style.categorySelectContainer}>
          <motion.button
            whileTap={{ scale: 0.9 }}
            css={style.categorySelectButton}
            className={selectedCategory.includes("language") ? "active" : ""}
            onClick={() =>
              setSelectedCategory((prev) =>
                prev.includes("language") ? prev.filter((category) => category !== "language") : [...prev, "language"]
              )
            }
          >
            언어
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.9 }}
            css={style.categorySelectButton}
            className={selectedCategory.includes("framework") ? "active" : ""}
            onClick={() =>
              setSelectedCategory((prev) =>
                prev.includes("framework")
                  ? prev.filter((category) => category !== "framework")
                  : [...prev, "framework"]
              )
            }
          >
            프레임워크
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.9 }}
            css={style.categorySelectButton}
            className={selectedCategory.includes("library") ? "active" : ""}
            transition={{ duration: 0.3 }}
            onClick={() =>
              setSelectedCategory((prev) =>
                prev.includes("library") ? prev.filter((category) => category !== "library") : [...prev, "library"]
              )
            }
          >
            라이브러리
          </motion.button>
        </div>

        <div
          css={style.skillBadgeContainer}
          className={`${selectedCategory.length > 0 ? selectedCategory.join(" ") : "language framework library"}`}
        >
          <div className="language" data-skill="typescript" css={style.skillBadge}>
            <SiTypescript size={20} />
            <span>TypeScript</span>
          </div>
          <div className="language" data-skill="javascript" css={style.skillBadge}>
            <SiJavascript size={20} />
            <span>JavaScript</span>
          </div>
          <div className="language" data-skill="python" css={style.skillBadge}>
            <SiPython size={20} />
            <span>Python</span>
          </div>
          <div className="language" data-skill="lua" css={style.skillBadge}>
            <SiLua size={20} />
            <span>Lua</span>
          </div>

          <div className="framework" data-skill="react" css={style.skillBadge}>
            <SiReact size={20} />
            <span>React</span>
          </div>
          <div className="framework" data-skill="nextjs" css={style.skillBadge}>
            <SiNextdotjs size={20} />
            <span>Next.js</span>
          </div>
          <div className="framework" data-skill="django" css={style.skillBadge}>
            <SiDjango size={20} />
            <span>Django</span>
          </div>
          <div className="framework" data-skill="keycloak" css={style.skillBadge}>
            <SiKeycloak size={20} />
            <span>Keycloak</span>
          </div>

          <div className="library" data-skill="express" css={style.skillBadge}>
            <SiExpress size={20} />
            <span>Express</span>
          </div>
          <div className="library" data-skill="zustand" css={style.skillBadge}>
            <img src={ZustandIcon} alt="Zustand" width={20} height={20} />
            <span>Zustand</span>
          </div>
          <div className="library" data-skill="tailwindcss" css={style.skillBadge}>
            <SiTailwindcss size={20} />
            <span>Tailwind CSS</span>
          </div>
          <div className="library" data-skill="emotion" css={style.skillBadge}>
            <RiEmotionFill size={20} />
            <span>Emotion</span>
          </div>
          <div className="library" data-skill="tanstackquery" css={style.skillBadge}>
            <SiReactquery size={20} />
            <span>Tanstack Query</span>
          </div>
          <div className="library" data-skill="tanstacktable" css={style.skillBadge}>
            <GoTable size={20} />
            <span>Tanstack Table</span>
          </div>
          <div className="library" data-skill="gsap" css={style.skillBadge}>
            <TbCircleLetterGFilled size={20} />
            <span>GSAP</span>
          </div>
          <div className="library" data-skill="framer" css={style.skillBadge}>
            <SiFramer size={20} />
            <span>Framer Motion</span>
          </div>
          <div className="library" data-skill="chartjs" css={style.skillBadge}>
            <SiChartdotjs size={20} />
            <span>Chart.js</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
