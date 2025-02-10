/** @jsxImportSource @emotion/react */
import React from "react";
import { FaGithub } from "react-icons/fa";

import {
  modalWrap,
  modalContainer,
  modalCloseButton,
  modalTitleLabel,
  modalSubtitleContainer,
  modalDescriptionContainer,
  modalGithubBtn,
} from "../styles/Modal.styles";

interface ModalInfoProps {
  handleModalClose: () => void;
}

const MedicineAlarmInfo: React.FC<ModalInfoProps> = ({ handleModalClose }) => {
  return (
    <div css={modalWrap} onClick={handleModalClose}>
      <div css={modalContainer} onClick={(e) => e.stopPropagation()}>
        <button onClick={handleModalClose} css={modalCloseButton} />
        <span css={modalTitleLabel}>
          약藥속
          <a href="https://github.com/WoojinSim/medicine-alarm" target="_blank" rel="noopener noreferrer" css={modalGithubBtn}>
            <FaGithub size={24} />
          </a>
        </span>
        <div css={modalSubtitleContainer}>
          <span>2024.04</span>
          <span>3인 프로젝트</span>
        </div>
        <div css={modalDescriptionContainer}>
          <span className="title">개요</span>
          <span>대학교의 졸업과제로 진행된 다양한 약품을 복용하는 노년층을 위한 복약지도 및 건강관리 어플리케이션 입니다.</span>
          <span>
            사용자가 복용하는 약품의 규칙적이고 정확한 복용시간을 등록해 관리해주며 약품에 대한 사진, 이름 검색을 지원해 약품에
            대한 작용/부작용 등을 GPT로 요약해 한눈에 볼 수 있는 기능을 제공합니다.
          </span>
          <span>근처 약국에 대한 상세 정보와 각종 노인질환에 대한 자가진단 및 정보 또한 제공합니다.</span>
          <span className="title">기술 스택</span>
          <span>React Native, Expo, Spring, PyTorch, Gradle, Typescript, Java, Python, MySQL</span>
          <span>
            <strong>React Native, TypeScript</strong> - 다양한 환경에서 기능을 사용할 수 있게 하기위해 사용
          </span>
          <span>
            <strong>Expo</strong> - React Native 기반 앱을 개발하기 위해 사용
          </span>
          <span>
            <strong>Spring, Java</strong> - 다양한 데이터를 처리하는 백엔드 서버를 구성하기 위해 사용
          </span>
          <span>
            <strong>PyTorch, Python</strong> - 알약 이미지 분류를 위해 사용
          </span>
          <span>
            <strong>Gradle</strong> - 백앤드의 REST API 서버를 구성하기 위해 사용
          </span>
          <span>
            <strong>MySQL</strong> - 데이터베이스 관리를 위해 사용
          </span>
          <span className="title">어려웠던 점</span>
          <span>
            이번 프로젝트는 제가 처음으로 진행하는 <strong>대규모 어플리케이션 개발</strong>이었습니다. 설계와 명세서를 상세히
            작성했음에도 예상치 못한 <strong>피드백을 반영하는 과정</strong>에서 어려움을 겪었으며, 이를 진행 중인 개발에
            <strong>효과적으로 적용</strong>하는 데 시간이 걸렸습니다. 특히, 피드백을 어떻게 수렴하고 어떤 우선순위로 반영할지
            판단하는 것이 쉽지 않았습니다.
          </span>
          <span>
            또한, 계획된 일정이 있었음에도 그에 맞춰 개발을 진행하는 데 어려움이 있었습니다. 각 기능 구현에 집중하다 보니 팀원 간
            개발 상황을 <strong>실시간으로 동기화</strong>하는 데 문제가 발생했고, 이로 인해 중복 작업이나 일부 기능 간 충돌이
            생기는 경우도 있었습니다. 특히, 기능 구현 중심의 접근 방식은 프로젝트의 전반적인{" "}
            <strong>통합성과 사용자 경험을 저하</strong>시켜, 중간에 방향성을 조정해야만 했습니다.
          </span>

          <span className="title">결과</span>
          <span>
            이번 프로젝트를 통해 피드백을 <strong>효과적으로 수용하고 반영하는 능력</strong>의 중요성을 깨달았습니다. 또한, 팀원
            간 <strong>소통과 작업 상황의 동기화</strong>가 프로젝트 성공에 있어 <strong>필수적</strong>이라는 점을 배웠습니다.
            앞으로는 유연한 계획 수립과 긴밀한 협업을 통해 개발 효율성을 높이고, 예기치 못한 상황에도 적응할 수 있는 프로젝트 관리
            역량을 키우고자 합니다.
          </span>
        </div>
      </div>
    </div>
  );
};

export default MedicineAlarmInfo;
