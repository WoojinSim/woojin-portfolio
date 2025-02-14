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
          <div css={modalDescriptionSection}>
            <span className="title">개요</span>
            <p>
              <strong>21사단 GOP 영상감시병</strong>으로 군복무 중 남방한계선 철책에 긴급상황이 발생했을 때 진행하는
              상황조치 방식이 <strong>비효율적</strong>이라 판단해 개발을 하게된 시스템입니다.
            </p>
            <p>
              기존에는 긴급상황 발생시, 발생한 원점에 대한 각종 정보, 영상감시병이 계산한 여러 분석 정보를 상급부대에
              전파함과 동시에 전방향 특이사항 유무 감시까지 진행해야 하기에 동시다발적인 상황에서 대처능력이 현저히
              떨어졌습니다.
            </p>
            <p>
              이에따라 <strong>상황조치도우미</strong>는 ASP Classic 을 이용해 폐쇄망 내 서버와 통신을 하며 현재 발생한
              긴급상황의 대략적인 정보를 가져와 빠르게 분석 및 분류하여 상급부대에 <strong>자동으로 전파</strong>하고
              영상감시병은 오로지 전방향 특이사항 감시에만 집중할 수 있게 도와줍니다.
            </p>
          </div>
          <div css={modalDescriptionSection}>
            <span className="title">기술 스택</span>
            <p>ASP Classic, SQL, HTML, CSS, JavaScript</p>
            <ul>
              <li>
                <strong>ASP Classic</strong> - 기존 감시 시스템의 SQL 서버와 통신하기 위해 사용
              </li>
              <li>
                <strong>SQL</strong> - 데이터 조회 및 저장을 위한 쿼리 처리
              </li>
              <li>
                <strong>HTML</strong> - 화면 레이아웃 구성
              </li>
              <li>
                <strong>CSS</strong> - UI 디자인 및 스타일 적용
              </li>
              <li>
                <strong>JavaScript</strong> - 수치 계산 및 분석, 화면 동작, 인터랙티브 요소 구현
              </li>
            </ul>
          </div>
          <div css={modalDescriptionSection}>
            <span className="title">과정</span>

            <span className="subtitle">폐쇄망 환경의 한계</span>
            <ul className="nodot">
              <li>
                근무 중 사용하는 컴퓨터가 <strong>폐쇄망 환경</strong>이어서 외부 라이브러리 및 인터넷 사용이
                불가능했습니다.
              </li>
              <li>
                따라서, 활용할 수 있는 내부 자원을 최대한 파악하고, 필요한 자료를 문서화하여 출력 및 암기하며 개발을
                진행했습니다.
              </li>
            </ul>

            <span className="subtitle">개발 경험 부족</span>
            <ul className="nodot">
              <li>
                실전에서 처음으로 완전한 웹 어플리케이션을 개발해야 헸던 상황이 었고, 특히 폐쇄망 환경에서는 기존에
                익숙했던 방식으로는 구현이 어려웠습니다.
              </li>
              <li>
                구현하고 싶은 기능이 많았지만, 제한된 환경 내에서 가능한 것과 불가능한 것을 구분해야 했고, 그 과정에서
                실용적인 개발과 이론적인 학습의 차이를 몸소 경험할 수 있었습니다.
              </li>
              <li>
                이를 해결하기 위해 기존 시스템을 분석하고, 관련 자료를 철저히 조사하여 현실적으로 적용 가능한 최적의
                솔루션을 도출하는 데 집중했습니다.
              </li>
            </ul>

            <span className="subtitle">동시다발적인 사용 환경 및 에러 핸들링</span>
            <ul className="nodot">
              <li>시스템은 여러 사용자가 동시에 접근해야 하며, 긴급한 상황에서 빠르고 정확하게 동작해야 했습니다.</li>
              <li>
                이에 따라, 에러 핸들링을 최우선 과제로 설정하고, 예상 가능한 모든 예외 상황을 처리하는 데 상당한 시간을
                투자했습니다.
              </li>
              <li>
                또한, 빠른 속도와 직관적인 UI/UX 설계를 고려하여 코드의 재사용성을 높이고, 에러 처리를 위한 객체를
                별도로 분리하는 방식을 적용하였습니다.
              </li>
            </ul>
          </div>
          <div css={modalDescriptionSection}>
            <span className="title">결과</span>
            <p>
              시스템 개발 후 중대장에게 직접 보고 및 정식 사용 승인을 요청, 이후 군단까지 보고되어 공식 사용 승인을
              받았습니다.
            </p>
            <p>
              실제 운영 결과, 긴급상황 조치 효율이 극적으로 향상되었으며, 시스템의 안정성이 입증되었습니다. 이러한
              성과를 인정받아 대대 표창을 수여받았으며, 현재까지도 주요 이슈 없이 안정적으로 운영 중입니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlarmInfo;
