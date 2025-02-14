/** @jsxImportSource @emotion/react */
import React from "react";

import {
  modalWrap,
  modalContainer,
  modalCloseButton,
  modalTitleLabel,
  modalSubtitleContainer,
  modalDescriptionContainer,
  modalDescriptionSection,
} from "../styles/Modal.styles";

interface ModalInfoProps {
  handleModalClose: () => void;
}

const PortfolioInfo: React.FC<ModalInfoProps> = ({ handleModalClose }) => {
  return (
    <div css={modalWrap} onClick={handleModalClose}>
      <div css={modalContainer} onClick={(e) => e.stopPropagation()}>
        <button onClick={handleModalClose} css={modalCloseButton} />
        <span css={modalTitleLabel}>나의 포트폴리오</span>
        <div css={modalSubtitleContainer}>
          <span>2024.11</span>
          <span>1인 프로젝트</span>
        </div>
        <div css={modalDescriptionContainer}>
          <div css={modalDescriptionSection}>
            <span className="title">개요</span>
            <p>저, 심우진을 소개하기 위한 포트폴리오 웹사이트입니다.</p>
            <p>현재 개발이 진행중이며 앞으로도 저의 커리어가 쌓일 때 마다 내용이 추가되거나 새로이 바뀔 예정입니다.</p>
          </div>
          <div css={modalDescriptionSection}>
            <span className="title">기술 스택</span>
            <p>React, Emotion, TypeScript</p>
            <ul>
              <li>
                <strong>React, TypeScript</strong> - 다양한 환경에서 최대한 비슷한 경험을 할 수 있게 하기위해 사용
              </li>
              <li>
                <strong>Emotion</strong> - CSS 라이브러리의 효율적인 사용을 위해 사용
              </li>
            </ul>
          </div>
          <div css={modalDescriptionSection}>
            <span className="title">과정</span>
            <p>진행중인 과정입니다.</p>
          </div>
          <div css={modalDescriptionSection}>
            <span className="title">결과</span>
            <p>저의 커리어는 아직 결과가 없습니다.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioInfo;
