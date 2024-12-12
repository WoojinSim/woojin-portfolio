/** @jsxImportSource @emotion/react */
import React from "react";

import {
  modalWrap,
  modalContainer,
  modalCloseButton,
  modalTitleLabel,
  modalSubtitleContainer,
  modalDescriptionContainer,
} from "../styles/Modal.styles";

interface ModalInfoProps {
  handleModalClose: () => void;
}

const PortfolioInfo: React.FC<ModalInfoProps> = ({ handleModalClose }) => {
  return (
    <div css={modalWrap}>
      <div css={modalContainer}>
        <button onClick={handleModalClose} css={modalCloseButton} />
        <span css={modalTitleLabel}>나의 포트폴리오</span>
        <div css={modalSubtitleContainer}>
          <span>2024.11</span>
          <span>1인 프로젝트</span>
        </div>
        <div css={modalDescriptionContainer}>
          <span className="title">개요</span>
          <span>내용</span>
          <span className="title">기술 스택</span>
          <span>내용</span>
          <span className="title">어려웠던 점</span>
          <span>내용</span>
        </div>
      </div>
    </div>
  );
};

export default PortfolioInfo;
