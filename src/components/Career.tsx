/** @jsxImportSource @emotion/react */
import React from "react";
import * as style from "./styles/Career.styles";
import { scrollFadeInLeft, scrollFadeInRight } from "./styles/global.styles";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

import careerImageFlowww from "../assets/Images/Flowww.png";

const Career: React.FC = () => {
  const addScrollAnimationRef = useScrollAnimation();

  return (
    <div css={style.mainContainer}>
      <span css={[style.itemTitleLabel, scrollFadeInRight]} ref={addScrollAnimationRef}>
        경력
      </span>
      <div css={[style.careerContainer, scrollFadeInLeft]} ref={addScrollAnimationRef}>
        <div css={style.careerItemContainer}>
          {/* 회사 아이콘 이미지 컨테이너 */}
          <div css={style.careerItemImageWrapper}>
            <img css={style.careerImage} src={careerImageFlowww} alt="career_image_flowww" />
          </div>

          {/* 회사 설명 라벨 컨테이너 */}
          <div css={style.careerItemLabelContainer}>
            {/* 회사 이름 및 재직 기간 */}
            <div css={style.careerItemTitleWrapper}>
              <span css={style.careerItemTitleLabel} className="title">
                Flowww Creatives
              </span>
              <span css={style.careerItemTitleLabel} className="subTitle">
                2025.03 ~ (재직중)
              </span>
            </div>

            {/* 회사 설명 라벨 */}
            <span css={style.careerItemDescriptionLabel}>Future Lab Of Wise Wondering Waves - Web Turnkey Agency</span>

            {/* 사내 포지션 */}
            <div css={style.careerItemPositionContainer}>
              <span>Frontend</span>
            </div>

            {/* 진행한 사내 프로젝트 */}
            <div css={style.careerItemProjectWrapper}>
              <div css={style.careerItemProjectContainer}>
                <div css={style.careerItemProjectTitleWrapper}>
                  <span css={style.careerItemProjectTitle}>Trinity Club 백오피스 개발</span>
                  <span css={style.careerItemProjectTitle} className="subTitle">
                    2025.1Q ~ 2025.2Q
                  </span>
                </div>
                <span css={style.careerItemProjectDescription}>웹사이트의 프론트엔드 개발 진행</span>
              </div>
              <div css={style.careerItemProjectContainer}>
                <div css={style.careerItemProjectTitleWrapper}>
                  <span css={style.careerItemProjectTitle}>Orbrium 개발</span>
                  <span css={style.careerItemProjectTitle} className="subTitle">
                    2025.1Q ~ 2025.2Q
                  </span>
                </div>
                <span css={style.careerItemProjectDescription}>웹사이트의 프론트엔드 개발 진행</span>
                <ul css={style.careerItemProjectDescriptionList}>
                  <li>동적 폼 내 사용자 지정 값, 이벤트 추적, 외부 값 연동 기능 개발</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
