/** @jsxImportSource @emotion/react */
import React from "react";

import { modalWrap, modalContainer, modalCloseButton } from "../styles/Modal.styles";

interface ModalInfoProps {
  handleModalClose: () => void;
}

const MedicineAlarmInfo: React.FC<ModalInfoProps> = ({ handleModalClose }) => {
  return (
    <div css={modalWrap}>
      <div css={modalContainer}>
        <button onClick={handleModalClose} css={modalCloseButton}>
          닫기
        </button>
        <span>테스트</span>
      </div>
    </div>
  );
};

export default MedicineAlarmInfo;
