/** @jsxImportSource @emotion/react */
import React from "react";
import { FaGithub } from "react-icons/fa";

import * as style from "../styles/Modal.styles";

interface ModalInfoProps {
  handleModalClose: () => void;
}

const MedicineAlarmInfo: React.FC<ModalInfoProps> = ({ handleModalClose }) => {
  return (
    <div css={style.modalWrap} onClick={handleModalClose}>
      <div css={style.modalContainer} onClick={(e) => e.stopPropagation()}>
        <button onClick={handleModalClose} css={style.modalCloseButton} />
        <span css={style.modalTitleLabel}>
          약藥속
          <a
            href="https://github.com/WoojinSim/medicine-alarm"
            target="_blank"
            rel="noopener noreferrer"
            css={style.modalGithubBtn}
          >
            <FaGithub size={24} />
          </a>
        </span>
        <div css={style.modalSubtitleContainer}>
          <span>2024.04</span>
          <span>3인 프로젝트</span>
        </div>
        <div css={style.modalDescriptionContainer}>
          <div css={style.modalDescriptionSection}>
            <span className="title">개요</span>
            <p>
              대학교 졸업 과제로 진행된 복약 지도 및 건강 관리 애플리케이션입니다. 노년층을 주요 대상으로 하여
              규칙적이고 정확한 복약 관리를 돕고, 약품 정보 검색 및 요약 기능을 제공합니다.
            </p>
            <p>
              사용자는 직접 복용하는 약품을 검색해 등록하고, 복약 시간을 설정하여 체계적으로 관리할 수 있습니다. 또한,
              사진이나 이름으로 약품을 검색하고, 해당 약품의 효능·부작용 등을 GPT를 활용하여 요약해 한눈에 확인할 수
              있습니다.
            </p>
            <p>
              추가적으로, 근처 약국의 상세 정보를 제공하며, 노인 질환에 대한 자가 진단 및 건강 정보를 확인할 수 있는
              기능도 포함되어 있습니다.
            </p>
          </div>
          <div css={style.modalDescriptionSection}>
            <span className="title">기술 스택</span>
            <p>React Native, Typescript, Expo, Spring, PyTorch, Gradle, Java, Python, MySQL</p>
            <ul>
              <li>
                <strong>React Native, TypeScript</strong> - 다양한 환경에서 원활하게 기능을 사용할 수 있도록 모바일
                애플리케이션 개발에 활용
              </li>
              <li>
                <strong>Expo</strong> - React Native 기반 앱을 빠르고 효율적으로 개발하기 위해 사용
              </li>
              <li>
                <strong>Spring, Java</strong> - 약품 데이터 및 사용자 데이터를 처리하는 백엔드 서버 구축
              </li>
              <li>
                <strong>PyTorch, Python</strong> - 약품 사진을 기반으로 이미지를 분류하는 기능 개발
              </li>
              <li>
                <strong>Gradle</strong> - 백엔드 REST API 서버 관리를 위해 사용
              </li>
              <li>
                <strong>MySQL</strong> - 약품 및 사용자 데이터를 저장하고 관리하는 데이터베이스
              </li>
            </ul>
          </div>
          <div css={style.modalDescriptionSection}>
            <span className="title">과정</span>

            <span className="subtitle">피드백 수렴 및 반영</span>
            <ul className="nodot">
              <li>
                초기 설계와 명세서를 상세히 작성했음에도 불구하고, 개발 도중에 예기치 않은 피드백을 수렴하고 반영하는 데
                어려움이 있었습니다. 특히, 피드백의 우선순위를 정하는 데 큰 어려움이 있었습니다.
              </li>
              <li>
                피드백을 반영하기 전에 팀원들과 함께 각 피드백의 중요도를 논의하고, 가장 중요한 부분부터 우선순위를 정해
                반영했습니다. 이후, 변경된 부분에 대해 구체적인 구현 계획을 다시 세워 개발을 진행했습니다.
              </li>
            </ul>

            <span className="subtitle">협업 및 프로젝트 관리</span>
            <ul className="nodot">
              <li>
                팀 내에서 각자 구현을 하기로 한 부분을 정하고 시작했지만 기능 구현에 집중하다 보니 팀원 간 개발 상황을
                실시간으로 동기화하는 데 문제가 발생했고, 이로 인해 중복 작업이나 일부 기능 간 충돌이 생겼습니다.
              </li>
              <li>
                이를 해결하기 위해 팀원들과 매일 진행 상황을 공유하고, 기능 개발에 대한 책임자를 정해 개발 흐름을
                체계적으로 관리했습니다.
              </li>
              <li>
                또한, 각 기능을 개발할 때마다 API 문서와 인터페이스를 명확히 정의 및 최신화하여 중복 작업을 방지하고
                충돌을 최소화했습니다.
              </li>
            </ul>
          </div>

          <div css={style.modalDescriptionSection}>
            <span className="title">결과</span>
            <p>
              이번 프로젝트를 통해 피드백을 효과적으로 수용하고 반영하는 능력의 중요성을 깨달았습니다. 또한, 팀원 간의
              소통과 작업 상황의 동기화가 프로젝트의 성공적인 진행에 필수적임을 배웠습니다.
            </p>
            <p>
              앞으로는 유연한 계획 수립과 긴밀한 협업을 통해 개발 효율성을 높이고, 예기치 못한 상황에도 원활하게 대응할
              수 있는 프로젝트 관리 역량을 키워나가겠습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicineAlarmInfo;
