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
  itemDetailButton,
  itemDescriptionSubTitleLabel,
} from "./styles/WhatIDid.styles";

import AlarmInfo from "./WhatIDid.Modal/Alarm.info";
import JourneyHubInfo from "./WhatIDid.Modal/JourneyHub.info";
import MedicineAlarmInfo from "./WhatIDid.Modal/MedicineAlarm.info";
import PortfolioInfo from "./WhatIDid.Modal/Portfolio.info";

type WhatIDidWork = "Alarm" | "JourneyHub" | "MedicineAlarm" | "Portfolio";

// TODO: 프로젝트 제목 강조, 카드 순서 역순, 상세페이지 추가, 목적 하이라이팅

const WhatIDid: React.FC = () => {
  const [activeModal, setActiveModal] = useState<WhatIDidWork | null>(null);

  const handleModalOpen = (modal: WhatIDidWork) => {
    setActiveModal(modal);
  };

  const handleModalClose = () => {
    setActiveModal(null);
  };

  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [activeModal]);

  return (
    <div css={mainContainer}>
      <span css={mainTitleLabel}>지금까지 해온 것</span>
      <div css={mainGridContainer}>
        <div css={itemContainer} onClick={() => handleModalOpen("Alarm")}>
          <span className="itemDetailButton" css={itemDetailButton}>
            클릭하여 자세히 보기
          </span>
          <span css={itemTitleLabel}>상황조치도우미</span>
          <div css={itemSubtitleContainer}>
            <span css={itemSubtitleLabel}>2022.06</span>
            <span css={itemSubtitleLabel}>1인 프로젝트</span>
          </div>
          <div css={itemDescriptionContainer}>
            <span css={itemDescriptionTitleLabel}>대한민국 최전방의 긴급상황 추적관리 시스템</span>
            <span css={itemDescriptionSubTitleLabel}>
              상황발생시 각종 정보를 상급부대 내에 빠르게 전파하고 추적관리하는 기능 제공
            </span>
            <ul css={itemDescriptionList}>
              <li>GOP에서 영상감시병으로 군복무 중 상황발생시 빠른 전파와 추적관리를 위해 개발</li>
              <li>폐쇄망 내부에서 Windows의 기본 환경과 ASP Classic을 활용하여 개발</li>
              <li>기존의 시스템과 잘 맞물려 작동시키기 위해 서버 상태를 추적하며 기능 구현</li>
              <li>상황 처리 속도와 효율이 큰 폭으로 향상돼 표창장 수여와 함께 현재까지도 사용중 </li>
            </ul>
            <div css={itemUsedLanguageContainer}>HTML, CSS, JavaScript, Classic ASP</div>
          </div>
        </div>
        <div css={itemContainer} onClick={() => handleModalOpen("JourneyHub")}>
          <span className="itemDetailButton" css={itemDetailButton}>
            클릭하여 자세히 보기
          </span>
          <span css={itemTitleLabel}>
            <a
              href="https://github.com/WoojinSim/travel-guider"
              target="_blank"
              rel="noopener noreferrer"
              title="클릭시 깃허브로 이동"
            >
              Journey Hub
            </a>
          </span>
          <div css={itemSubtitleContainer}>
            <span css={itemSubtitleLabel}>2023.09</span>
            <span css={itemSubtitleLabel}>3인 프로젝트</span>
          </div>
          <div css={itemDescriptionContainer}>
            <span css={itemDescriptionTitleLabel}>설래임이 지속되는 여행 정보 제공 웹앱</span>
            <span css={itemDescriptionSubTitleLabel}>각종 국가의 뉴스, 소식, 각종 여행정보 등을 제공</span>
            <ul css={itemDescriptionList}>
              <li>설래는 여행을 앞두고 여행정보를 찾는 과정에서 지쳐버리는 사람들을 위해 개발</li>
              <li>여러개의 API와 통신을 하며 동작하여 개별 상태관리를 통해 빠른 응답 속도 구현</li>
              <li>GPT와 DeepL 번역기를 활용한 여행지 소식의 번역 및 요약기능 구현</li>
              <li>여행지에 대한 다양한 정보(환율,날씨,여행경보 등)를 제공하는 기능 구현</li>
            </ul>
            <div css={itemUsedLanguageContainer}>React, CSS, TypeScript, Express</div>
          </div>
        </div>
        <div css={itemContainer} onClick={() => handleModalOpen("MedicineAlarm")}>
          <span className="itemDetailButton" css={itemDetailButton}>
            클릭하여 자세히 보기
          </span>
          <span css={itemTitleLabel}>
            <a
              href="https://github.com/WoojinSim/medicine-alarm"
              target="_blank"
              rel="noopener noreferrer"
              title="클릭시 깃허브로 이동"
            >
              약藥속
            </a>
          </span>
          <div css={itemSubtitleContainer}>
            <span css={itemSubtitleLabel}>2024.04</span>
            <span css={itemSubtitleLabel}>3인 프로젝트</span>
          </div>
          <div css={itemDescriptionContainer}>
            <span css={itemDescriptionTitleLabel}>건강한 삶을 위한 공공데이터 기반 복약지도 어플리케이션</span>
            <span css={itemDescriptionSubTitleLabel}>노인을 위한 각종 약품 및 건강 관리 기능을 제공</span>
            <ul css={itemDescriptionList}>
              <li>처방받은 약 또는 복용할 약에 대한 관리가 어려운 사람들을 위해 개발</li>
              <li>고령층 사용자를 위한 UI/UX 설계에 중점을 두어 개발</li>
              <li>복용할 의약품에 대한 작용과 부작용을 GPT를 통해 빠르게 제공받는 기능 구현</li>
              <li>교내 경진대회에서 은상 수상</li>
            </ul>
            <div css={itemUsedLanguageContainer}>React Native, TypeScript, Expo, Spring, MySQL, AWS</div>
          </div>
        </div>
        <div css={itemContainer} onClick={() => handleModalOpen("Portfolio")}>
          <span css={itemTitleLabel}>
            <a
              href="https://github.com/WoojinSim/woojin-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              title="클릭시 깃허브로 이동"
            >
              나의 포트폴리오
            </a>
          </span>
          <div css={itemSubtitleContainer}>
            <span className="itemDetailButton" css={itemDetailButton}>
              클릭하여 자세히 보기
            </span>
            <span css={itemSubtitleLabel}>2024.11</span>
            <span css={itemSubtitleLabel}>1인 프로젝트</span>
          </div>
          <div css={itemDescriptionContainer}>
            <span css={itemDescriptionTitleLabel}>내가 무엇을 하고 싶었는지 기록하는 장소</span>
            <ul css={itemDescriptionList}>
              <li>내가 무엇을 지금까지 하고싶어 했는지를 알리기 위해 개발</li>
              <li>사용하고 있는 모든 라이브러리의 사용법을 최대한 찾아보고 적용해볼려고 함</li>
              <li>앞으로도 계속하여 개발을 진행하며 성장해가는 모습을 기록할 예정</li>
            </ul>
            <div css={itemUsedLanguageContainer}>React, Emotion CSS, TypeScript</div>
          </div>
        </div>
      </div>
      {activeModal === "Alarm" && <AlarmInfo handleModalClose={handleModalClose} />}
      {activeModal === "JourneyHub" && <JourneyHubInfo handleModalClose={handleModalClose} />}
      {activeModal === "MedicineAlarm" && <MedicineAlarmInfo handleModalClose={handleModalClose} />}
      {activeModal === "Portfolio" && <PortfolioInfo handleModalClose={handleModalClose} />}
    </div>
  );
};

export default WhatIDid;
