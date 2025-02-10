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
            <strong>21사단 GOP 영상감시병</strong>으로 군복무 중 남방한계선 철책에 긴급상황이 발생했을 때 진행하는 상황조치 방식이{" "}
            <strong>비효율적</strong>이라 판단해 개발을 하게된 시스템입니다.
          </span>
          <span>
            기존에는 긴급상황 발생시, 발생한 원점에 대한 각종 정보, 영상감시병이 계산한 여러 분석 정보를 상급부대에 전파함과
            동시에 전방향 특이사항 유무 감시까지 진행해야 하기에 동시다발적인 상황에서 대처능력이 현저히 떨어졌습니다.
          </span>
          <span>
            이에따라 <strong>상황조치도우미</strong>는 ASP Classic 을 이용해 폐쇄망 내 서버와 통신을 하며 현재 발생한 긴급상황의
            대략적인 정보를 가져와 빠르게 분석 및 분류하여 상급부대에 <strong>자동으로 전파</strong>하고 영상감시병은 오로지
            전방향 특이사항 감시에만 집중할 수 있게 도와줍니다.
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
            구현하고 싶은 Feature들이 너무 많았지만 해당 시스템을 개발할 때에는 웹사이트 개발에 대한 경험이 없었을 뿐더러 외부
            라이브러리와 인터넷도 안되는 상황에서 내가 이루고자 하는 목표 지점까지 잘 해낼 수 있을지 많은 의문이 들었습니다.
          </span>
          <span>
            이때부터 폐쇄망 환경 내에서 최대한 사용할 수 있는 자원을 찾고 내가 <strong>만들고자 하는 것</strong>과{" "}
            <strong>만들 수 있는 것</strong>들에 대한 분류를 철저히 하여 참고자료등을 문서파일로 정리해 인쇄한 뒤 그것을 보고
            참고하거나 외워가며 개발을 진행했습니다.
          </span>
          <span>
            또한 실제로 동시에 <strong>여러 사용자</strong>가 사용하며 긴급한 상황 때 <strong>빠르고 문제 없이 동작</strong>될
            시스템을 만들어야 했기 때문에 에러 핸들링이 무엇보다 중요하다고 생각하여 상당한 시간을 이 부분을 개선하는데
            투자하였습니다.
          </span>
          <span>
            이러한 과정을 거치다보니 빠른 속도, 사용환경을 예상한 UI/UX 구성, 코드의 재활용, 에러 핸들링만을 위한 객체 분리 등
            양질의 코드를 작성하는 방법에 대하여 많은 부분을 배웠다고 생각합니다.
          </span>
          <span className="title">결과</span>
          <span>
            해당 시스템 개발 이후 중대장에게 직접 보고 및 정식 사용 승인 요청을 했으며 이 보고 내용은 군단까지 보고되어 사용이
            승인됐습니다.
          </span>
          <span>
            이후 이 상황조치도우미 시스템을 사용하고 상황조치 효율이 극적으로 향상되어 대대 <strong>표창 수여</strong>와 함께 현재
            이 시점까지도 메이저한 이슈 없이 사용 중 입니다.
          </span>
        </div>
      </div>
    </div>
  );
};

export default AlarmInfo;
