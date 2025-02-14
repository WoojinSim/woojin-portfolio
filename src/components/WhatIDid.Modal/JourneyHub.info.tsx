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
  modalDescriptionSection,
} from "../styles/Modal.styles";

interface ModalInfoProps {
  handleModalClose: () => void;
}

const JourneyHubInfo: React.FC<ModalInfoProps> = ({ handleModalClose }) => {
  return (
    <div css={modalWrap} onClick={handleModalClose}>
      <div css={modalContainer} onClick={(e) => e.stopPropagation()}>
        <button onClick={handleModalClose} css={modalCloseButton} />
        <span css={modalTitleLabel}>
          Journey Hub
          <a
            href="https://github.com/WoojinSim/travel-guider"
            target="_blank"
            rel="noopener noreferrer"
            css={modalGithubBtn}
          >
            <FaGithub size={24} />
          </a>
        </span>
        <div css={modalSubtitleContainer}>
          <span>2023.09</span>
          <span>1인 프로젝트</span>
        </div>
        <div css={modalDescriptionContainer}>
          <div css={modalDescriptionSection}>
            <span className="title">개요</span>
            <p>
              대학교 재학 중 과제로 진행된 프로젝트로, 여행 준비 과정에서 발생하는 비효율적인 정보 수집을 개선하기 위해
              개발된 웹앱입니다.
            </p>
            <p>
              사용자는 여행을 떠나기 전 비행기 예약, 여행지 정보 조사, 환율 및 날씨 확인 등의 과정을 거쳐야 하는데,
              이러한 정보를 여러 사이트에서 따로 검색해야 하는 불편함이 있었습니다.
            </p>
            <p>
              이를 해결하기 위해, GPT를 활용하여 여행과 관련된 다양한 정보를 압축 및 요약하고, 한 플랫폼에서 통합적으로
              확인할 수 있는 시스템을 개발하였습니다.
            </p>
          </div>
          <div css={modalDescriptionSection}>
            <span className="title">기술 스택</span>
            <p>React, Express, TypeScript, Spring, Java</p>
            <ul>
              <li>
                <strong>React</strong> - 다양한 환경에서 웹앱을 활용할 수 있도록 클라이언트를 구성하는 데 사용
              </li>
              <li>
                <strong>Express</strong> - 날씨, 환율 등 간단한 정보를 제공하는 백엔드 서버 구축에 사용
              </li>
              <li>
                <strong>TypeScript</strong> - 안정적인 웹앱 개발을 위해 React 기반 프론트엔드 구성에 사용
              </li>
              <li>
                <strong>Spring</strong> - GPT를 활용한 국가별 정보 요약 및 분석을 위한 주요 백엔드 서버 구축에 사용
              </li>
              <li>
                <strong>Java</strong> - Spring 서버를 구성하는 데 사용
              </li>
            </ul>
          </div>
          <div css={modalDescriptionSection}>
            <span className="title">과정</span>

            <span className="subtitle">체계적인 소프트웨어 개발 방법론 부족</span>
            <ul className="nodot">
              <li>프로젝트 초기, 명확한 설계 없이 개발이 진행되었습니다.</li>
              <li>
                당찬 포부와 아이디어는 많았지만, 이를 구현하기 위한 구체적인 계획과 구조가 미흡하여 개발 과정에서 많은
                시행착오를 겪었습니다.
              </li>
              <li>
                기능을 구현할 때마다 백엔드-프론트엔드 통신 방식, 데이터 구조, 라이브러리 선정 등에 대한 논의가
                반복되었고, 이로 인해 개발 속도가 현저히 느려졌습니다.
              </li>
            </ul>

            <span className="subtitle">비효율적인 협업 방식</span>
            <ul className="nodot">
              <li>
                초기에는 각자 개발을 진행하다 보니 코드 스타일과 개발 방향이 다소 불규칙해지는 문제가 발생했습니다.
              </li>
              <li>
                백엔드와 프론트엔드 간의 데이터 인터페이스가 체계적으로 정리되지 않아 통신 방식이 명확하지 않았습니다.
              </li>
              <li>
                이에 따라 API 명세서, 데이터베이스 스키마, 개발 일정 등을 명확하게 정리하는 과정이 필요하다는 점을
                깨달았습니다.
              </li>
            </ul>

            <span className="subtitle">개발 프로세스 재정비</span>
            <ul className="nodot">
              <li>
                문제 해결을 위해 일시적으로 개발을 중단하고, 팀원들과 함께 개발할 기능 정리, 필요한 기술 및 라이브러리
                선정, 데이터 통신 방식 정의 등의 논의를 진행하였습니다.
              </li>
              <li>
                백엔드-프론트엔드 간 통신 규약을 확립하고, 데이터베이스 설계를 정리하여 개발 프로세스를 체계적으로
                구성하였습니다.
              </li>
              <li>이를 통해 개발 진행 속도를 높이고, 불필요한 시행착오를 줄일 수 있었습니다.</li>
            </ul>
          </div>

          <div css={modalDescriptionSection}>
            <span className="title">결과</span>

            <span className="subtitle">명확한 개발 방향과 역할 분담</span>
            <ul className="nodot">
              <li>
                개발할 기능을 체계적으로 정리한 덕분에 팀원들과 협력하여 빠르고 효율적으로 개발을 진행할 수 있었습니다.
              </li>
              <li>
                현실적으로 시간이 부족한 기능과 개발이 불가능한 기능을 사전에 분류하여, 개발 리소스를 적절히 배분할 수
                있었습니다.
              </li>
            </ul>

            <span className="subtitle">팀워크 및 협업 능력 향상</span>
            <ul className="nodot">
              <li>
                프로젝트 진행 과정에서 팀원 간의 의견 조율, 코드 리뷰, 공동 개발 방식을 적극적으로 활용하였습니다.
              </li>
              <li>
                이를 통해 실제 협업 환경에서 중요한 커뮤니케이션 방식과 협업 방법론을 배울 수 있는 계기가 되었습니다.
              </li>
            </ul>

            <span className="subtitle">실전 경험을 통한 개발 역량 강화</span>
            <ul className="nodot">
              <li>
                개발을 진행하며 예상보다 많은 시간이 소요되었고, 단순한 기능 구현뿐만 아니라 전체적인 프로젝트 관리의
                중요성을 깨닫게 되었습니다.
              </li>
              <li>
                기획-설계-개발-테스트까지의 전체 프로세스를 경험하며, 체계적인 개발 프로세스를 적용하는 방법을 배울 수
                있었습니다.
              </li>
            </ul>

            <p>
              이번 프로젝트를 통해 소프트웨어 개발에서 체계적인 설계가 얼마나 중요한지, 협업에서 명확한 소통이 얼마나
              중요한지를 깊이 체감할 수 있었으며, 이후 프로젝트에서도 이러한 경험을 적극적으로 활용할 수 있을 것이라
              생각합니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JourneyHubInfo;
