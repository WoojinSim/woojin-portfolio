/** @jsxImportSource @emotion/react */
import React from "react";

import { modalWrap, modalContainer, modalCloseButton } from "../styles/Modal.styles";

interface AlarmInfoProps {
  handleModalClose: () => void;
}

const AlarmInfo: React.FC<AlarmInfoProps> = ({ handleModalClose }) => {
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

export default AlarmInfo;
