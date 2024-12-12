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

const MedicineAlarmInfo: React.FC<ModalInfoProps> = ({ handleModalClose }) => {
  return (
    <div css={modalWrap}>
      <div css={modalContainer}>
        <button onClick={handleModalClose} css={modalCloseButton} />
        <span css={modalTitleLabel}>약藥속</span>
        <div css={modalSubtitleContainer}>
          <span>2024.04</span>
          <span>3인 프로젝트</span>
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

export default MedicineAlarmInfo;
