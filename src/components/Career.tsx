/** @jsxImportSource @emotion/react */
import React from "react";
import {
  mainContainer,
  itemTitleLabel,
  careerContainer,
  careerItemContainer,
  careerItemImageWrapper,
  careerImage,
  careerItemLabelContainer,
  careerItemTitleWrapper,
  careerItemTitleLabel,
  careerItemDescriptionLabel,
  careerItemPositionContainer,
  careerItemProjectContainer,
  careerItemProjectTitle,
  careerItemProjectTitleWrapper,
  careerItemProjectDescription,
  careerItemProjectWrapper,
} from "./styles/Career.styles";
import { scrollFadeInLeft, scrollFadeInRight } from "./styles/global.styles";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

import careerImageFlowww from "../assets/Images/Flowww.png";

const Career: React.FC = () => {
  const addScrollAnimationRef = useScrollAnimation();

  return (
    <div css={mainContainer}>
      <span css={[itemTitleLabel, scrollFadeInRight]} ref={addScrollAnimationRef}>
        경력
      </span>
      <div css={[careerContainer, scrollFadeInLeft]} ref={addScrollAnimationRef}>
        <div css={careerItemContainer}>
          {/* 회사 아이콘 이미지 컨테이너 */}
          <div css={careerItemImageWrapper}>
            <img css={careerImage} src={careerImageFlowww} alt="career_image_flowww" />
          </div>

          {/* 회사 설명 라벨 컨테이너 */}
          <div css={careerItemLabelContainer}>
            {/* 회사 이름 및 재직 기간 */}
            <div css={careerItemTitleWrapper}>
              <span css={careerItemTitleLabel} className="title">
                Flowww Creatives
              </span>
              <span css={careerItemTitleLabel} className="subTitle">
                2025.03 ~ (재직중)
              </span>
            </div>

            {/* 회사 설명 라벨 */}
            <span css={careerItemDescriptionLabel}>Future Lab Of Wise Wondering Waves - Web Turnkey Agency</span>

            {/* 사내 포지션 */}
            <div css={careerItemPositionContainer}>
              <span>Frontend</span>
            </div>

            {/* 진행한 사내 프로젝트 */}
            <div css={careerItemProjectWrapper}>
              <div css={careerItemProjectContainer}>
                <div css={careerItemProjectTitleWrapper}>
                  <span css={careerItemProjectTitle}>Trinity Club 백오피스 웹사이트 개발</span>
                  <span css={careerItemProjectTitle} className="subTitle">
                    2025.1Q ~ (진행중)
                  </span>
                </div>
                <span css={careerItemProjectDescription}>React 기반 백오피스 웹사이트의 프론트엔드 개발을 진행</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
