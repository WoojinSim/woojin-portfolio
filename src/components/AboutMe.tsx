/** @jsxImportSource @emotion/react */
import React, { useEffect, useRef } from "react";
import { FaGithub } from "react-icons/fa";
import {
  mainContainer,
  itemTitleLabel,
  titleLabel,
  contentLabel,
  urlContainer,
  urlBtn,
  profileContainer,
  profileImageWrapper,
  profileImage,
  profileItemWrapper,
  profileItem,
  profileItemLabel,
  profileItemContent,
} from "./styles/AboutMe.styles";
import { scrollFadeInRight, scrollFadeInLeft } from "./styles/global.styles";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import profileImageAsset from "../assets/Images/profile_image.jpg";

const AboutMe: React.FC = () => {
  const addScrollAnimationRef = useScrollAnimation();

  return (
    <div css={mainContainer}>
      {/* 프로필 이미지, 개인정보 컨테이너 */}
      <div css={[profileContainer, scrollFadeInRight]} ref={addScrollAnimationRef}>
        <div css={profileImageWrapper}>
          <img css={profileImage} src={profileImageAsset} alt="profile_image" />
        </div>
        <ul css={profileItemWrapper}>
          <li css={profileItem}>
            <span css={profileItemLabel}>이름</span>
            <span css={profileItemContent}>심우진</span>
          </li>
          <li css={profileItem}>
            <span css={profileItemLabel}>생년월일</span>
            <span css={profileItemContent}>2000.10.31</span>
          </li>
          <li css={profileItem}>
            <span css={profileItemLabel}>학력</span>
            <span css={profileItemContent}>국립공주대학교</span>
            <span css={profileItemContent}>소프트웨어공학과 학사</span>
          </li>

          <li css={profileItem}>
            <span css={profileItemLabel}>이메일</span>
            <span css={profileItemContent}>woojinssim@gmail.com</span>
          </li>
          <li css={profileItem}>
            <span css={profileItemLabel}>위치</span>
            <span css={profileItemContent}>서울시 성동구</span>
          </li>
          <li css={profileItem}>
            <span css={profileItemLabel}>연락처</span>
            <span css={profileItemContent}>010-2979-0644</span>
          </li>
        </ul>
      </div>

      {/* 자기소개 컨테이너 */}
      <div css={[scrollFadeInLeft]} ref={addScrollAnimationRef}>
        <span css={itemTitleLabel}>저는,</span>
        <span css={titleLabel}>만드는 것이 그저 즐거운 사람입니다.</span>
        <span css={contentLabel}>
          아주 사소한 것들이라도, 필요 없어 보이는 것들이라도 결과를 만들어내는 것이 막연히 좋았던 저는
        </span>
        <span css={contentLabel}>
          오늘날, 코딩이라는 수단으로 아이디어를 실현하고, 만들어진 결과물들이 불러오는 변화들이 너무나도
          소중해졌습니다.
        </span>
        <span css={contentLabel}>
          저는, 더욱더 완성도 높은 결과물 빚어내기 위해 노력하고 있는 <strong>심우진</strong>입니다.
        </span>

        {/* 깃허브 컨테이너 */}
        <div css={urlContainer}>
          <a href="https://github.com/WoojinSim" target="_blank" rel="noopener noreferrer" css={urlBtn}>
            <FaGithub size={24} /> <span>GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
