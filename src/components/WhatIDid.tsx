/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from "react";

import {
  mainContainer,
  mainTitleLabel,
  mainGridContainer,
  itemContainer,
  itemTitleLabel,
  itemSubtitleLabel,
  itemSubtitleContainer,
  itemDescriptionTitleLabel,
  itemDescriptionContainer,
  itemDescriptionList,
  itemUsedLanguageContainer,
} from "./styles/WhatIDid.styles";

const WhatIDid: React.FC = () => {
  return (
    <div css={mainContainer}>
      <span css={mainTitleLabel}>지금까지 해온 것</span>
      <div css={mainGridContainer}>
        <div css={itemContainer}>
          <span css={itemTitleLabel}>상황조치도우미</span>
          <div css={itemSubtitleContainer}>
            <span css={itemSubtitleLabel}>2022.06</span>
            <span css={itemSubtitleLabel}>1인 프로젝트</span>
          </div>
          <div css={itemDescriptionContainer}>
            <span css={itemDescriptionTitleLabel}>대한민국 최전방의 긴급상황 추적관리 시스템</span>
            <ul css={itemDescriptionList}>
              <li>GOP에서 영상감시병으로 군복무 중 상황발생시 빠른 전파와 추적관리를 위해 개발</li>
              <li>개발환경이 열악해 개발관련 정보를 종이에 인쇄하여 참고하는 방식으로 개발</li>
              <li>기존의 시스템과 잘 맞물려 작동시키기 위해 서버 상태를 추적하며 기능 구현</li>
              <li>상황 처리 속도와 효율이 큰 폭으로 향상돼 표창장 수상과 함께 현재까지도 사용중 </li>
              <li>TODO: 내용추가</li>
            </ul>
            <div css={itemUsedLanguageContainer}>HTML, CSS, JavaScript, Classic ASP</div>
          </div>
        </div>
        <div css={itemContainer}>
          <span css={itemTitleLabel}>Journey Hub</span>
          <div css={itemSubtitleContainer}>
            <span css={itemSubtitleLabel}>2023.09</span>
            <span css={itemSubtitleLabel}>3인 프로젝트</span>
          </div>
          <div css={itemDescriptionContainer}>
            <span css={itemDescriptionTitleLabel}>여행정보 제공 웹앱</span>
            <ul css={itemDescriptionList}>
              <li>설래는 여행을 앞두고 여행정보를 찾는 과정에서 지쳐버리는 사람들을 위해 개발</li>
              <li>GPT와 DeepL 번역기를 활용한 여행지 소식의 번역 및 요약기능 구현</li>
              <li>여행지에 대한 다양한 정보(환율,날씨,경보 등)를 제공하는 기능 구현</li>
              <li>TODO: 내용추가</li>
            </ul>
            <div css={itemUsedLanguageContainer}>React, CSS, TypeScript, Express</div>
          </div>
        </div>
        <div css={itemContainer}>
          <span css={itemTitleLabel}>약藥속</span>
          <div css={itemSubtitleContainer}>
            <span css={itemSubtitleLabel}>2024.04</span>
            <span css={itemSubtitleLabel}>3인 프로젝트</span>
          </div>
          <div css={itemDescriptionContainer}>
            <span css={itemDescriptionTitleLabel}>공공데이터 기반 복약지도 어플리케이션</span>
            <ul css={itemDescriptionList}>
              <li>처방받은 약 또는 복용할 약에 대한 관리가 어려운 사람들을 위해 개발</li>
              <li>복용할 의약품에 대한 작용과 부작용을 GPT를 통해 빠르게 제공받는 기능 구현</li>
              <li>여행지에 대한 다양한 정보(환율,날씨,경보 등)를 제공하는 기능 구현</li>
              <li>TODO: 내용추가</li>
            </ul>
            <div css={itemUsedLanguageContainer}>React Native, TypeScript, Expo, Spring, MySQL, AWS</div>
          </div>
        </div>
        <div css={itemContainer}>
          <span css={itemTitleLabel}>나의 포트폴리오</span>
          <div css={itemSubtitleContainer}>
            <span css={itemSubtitleLabel}>2024.11</span>
            <span css={itemSubtitleLabel}>3인 프로젝트</span>
          </div>
          <div css={itemDescriptionContainer}>
            <span css={itemDescriptionTitleLabel}>내가 무엇을 하고 싶었는지 기록하는 장소</span>
            <ul css={itemDescriptionList}>
              <li>내가 무엇을 지금까지 하고싶어 했는지를 알리기 위해 개발</li>
              <li>사용하고 있는 모든 라이브러리의 사용법을 최대한 찾아보고 적용해볼려고 함</li>
              <li>앞으로도 계속하여 개발을 진행하며 성장해가는 모습을 기록할 예정</li>
              <li>TODO: 내용추가</li>
            </ul>
            <div css={itemUsedLanguageContainer}>React, Emotion CSS, TypeScript</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDid;
