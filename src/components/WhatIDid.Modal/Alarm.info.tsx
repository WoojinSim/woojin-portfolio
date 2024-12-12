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

interface AlarmInfoProps {
  handleModalClose: () => void;
}

const AlarmInfo: React.FC<AlarmInfoProps> = ({ handleModalClose }) => {
  return (
    <div css={modalWrap} onClick={handleModalClose}>
      <div css={modalContainer} onClick={(e) => e.stopPropagation()}>
        <button onClick={handleModalClose} css={modalCloseButton} />
        <span css={modalTitleLabel}>상황조치도우미</span>
        <div css={modalSubtitleContainer}>
          <span>2022.06</span>
          <span>1인 프로젝트</span>
        </div>
        <div css={modalDescriptionContainer}>
          <span className="title">개요</span>
          <span>
            <strong>GOP 영상감시병</strong>으로 군복무 중 남방한계선 철책 에 긴급상황이 발생했을 때 진행하는 상황조치 방식이{" "}
            <strong>비효율적</strong>이라 판단해 개발을 하게된 시스템
          </span>
          <span>
            기존에는 긴급상황 발생시, 발생한 원점에 대한 각종 정보, 영상감시병이 계산한 여러 분석 정보를 상급부대에 전파함과
            동시에 전방향 특이사항 유무 감시까지 진행해야 하기에 동시다발적인 상황에서 대처능력이 현저히 떨어짐
          </span>
          <span>
            이에따라 <strong>상황조치도우미</strong>는 ASP Classic 을 이용해 폐쇄망 내 서버와 통신을 하며 현재 발생한 긴급상황의
            대략적인 정보를 가져와 빠르게 분석 및 분류하여 상급부대에 자동으로 전파하고 영상감시병은 오로지 전방향 특이사항
            감시에만 집중할 수 있게 도와줌
          </span>
          <span>
            해당 시스템 개발 이후 중대장에게 직접 보고 및 정식 사용 승인 요청을 했으며 이 보고 내용은 군단까지 보고되어 사용이
            승인됨
          </span>
          <span>
            이후 이 상황조치도우미 시스템을 사용하고 상황조치 효율이 극적으로 향상되어 대대 <strong>표창 수여</strong>와 함께 현재
            이 시점까지도 사용 중
          </span>
          <span className="title">기술 스택</span>
          <span>ASP Classic, SQL, HTML, CSS, JavaScript</span>
          <span>
            <strong>ASP Classic</strong> - 기존 감시시스템의 SQL 서버와 통신하기 위해서 사용
          </span>
          <span>
            <strong>SQL</strong> - SQL 서버와 쿼리를 주고 받기위해 사용
          </span>
          <span>
            <strong>HTML</strong> - 화면 레이아웃을 구성하기 위해 사용
          </span>
          <span>
            <strong>CSS</strong> - 화면 레이아웃을 구성하기 위해 사용
          </span>
          <span>
            <strong>JavaScript</strong> - 화면 레이아웃을 구성하기 위해 사용
          </span>
          <span className="title">어려웠던 점</span>
          <span>
            근무 중 사용하는 컴퓨터가 <strong>폐쇄망</strong>이라 외부 라이브러리와 인터넷 사용에 제약이 있었음
          </span>
          <span>
            구현하고 싶은 Feature가 너무 많았지만 해당 시스템을 개발할 때에는 웹사이트 개발에 대한 경험이 없었을 뿐더러 외부
            라이브러리와 인터넷도 안되는 상황에서 내가 이루고자 하는 목표 지점까지 잘 해낼 수 있을지 많은 의문이 듦
          </span>
          <span>
            이때부터 내가 만들고자 하는 것과 만들 수 있는 것들에 대한 분류를 철저히 하고 참고자료등을 문서파일로 정리해 인쇄한 뒤
            그걸 보고 공부해가며 개발을 진행함
          </span>
        </div>
      </div>
    </div>
  );
};

export default AlarmInfo;
