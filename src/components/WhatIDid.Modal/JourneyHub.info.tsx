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

const JourneyHubInfo: React.FC<ModalInfoProps> = ({ handleModalClose }) => {
  return (
    <div css={modalWrap} onClick={handleModalClose}>
      <div css={modalContainer} onClick={(e) => e.stopPropagation()}>
        <button onClick={handleModalClose} css={modalCloseButton} />
        <span css={modalTitleLabel}>
          Journey Hub
          <a href="https://github.com/WoojinSim/travel-guider" target="_blank" rel="noopener noreferrer" css={modalGithubBtn}>
            <FaGithub size={24} />
          </a>
        </span>
        <div css={modalSubtitleContainer}>
          <span>2023.09</span>
          <span>1인 프로젝트</span>
        </div>
        <div css={modalDescriptionContainer}>
          <span className="title">개요</span>
          <span>
            대학교 재학 중 과제로 진행된 프로젝트로 여행을 가기 전 비행기 예약, 여행지에 관련된 자료들의 조사를 보다 더 쉽고
            간단하게 하기위한 웹앱입니다.
          </span>
          <span>
            여행지 및 관광지에 대한 여러 정보와 상태, 여행 국가의 현황(각종 뉴스기사), 날씨, 환율 등 다양한 여행과 관련된 정보를
            GPT를 통해 압축 및 요약해 한 플랫폼에서 확인해볼 수 있습니다.
          </span>
          <span className="title">기술 스택</span>
          <span>React, Express, Spring, Java, TypeScript</span>
          <span>
            <strong>React</strong> - 다양한 환경에서 기능을 사용할 수 있게 하기위해 사용
          </span>
          <span>
            <strong>Express</strong> - 날씨, 환율 등 간단한 정보를 위한 백엔드 서버를 구성하기 위해 사용
          </span>
          <span>
            <strong>Spring</strong> - 다양한 국가의 현황 정보 GPT 압축 요약을 위한 백엔드 서버를 구성하기 위해 사용
          </span>
          <span>
            <strong>Java</strong> - Spring 서버를 구성하기위해 사용
          </span>
          <span>
            <strong>TypeScript</strong> - React 기반 웹앱을 구성하기 위해 사용
          </span>
          <span className="title">어려웠던 점</span>
          <span>
            소프트웨어 개발 방법론에 대한 지식이 부족한 시점에서 개발이 시작되어 당찬 포부와 아이디어를 가졌지만 그를 받쳐주는
            체계적인 계획과 설계 없이 개발이 진행된 프로젝트였습니다.
          </span>
          <span>
            기능을 구현할 때, 어떤 라이브러리를 사용하고 어떤식으로 백엔드와 통신하며 어떤 형태로 데이터를 주고 받을지 등에 대한
            고민이 해당 기능을 개발할 때 마다 반복됐으며 체계화되지 못한 개발 방식은 크나큰 악영향을 끼쳤습니다.
          </span>
          <span>
            이러한 문제점을 해결하기 위해 개발을 잠시 중단하고 팀원들과 함께 개발을 진행할 기능들과 기능들을 구현하기 위해 사용될
            라이브러리, 기술 등을 논의했으며 백엔드에서 사용될 DB의 명세서와 통신을 위한 인터페이스 등 여러가지 요소들을 명확하게
            정의하고 계획하는 시간을 가졌습니다.
          </span>
          <span className="title">결과</span>
          <span>
            명확하고 체계적인 길라잡이가 생겨 팀원과 함께 개발을 할 수 있는 부분과 현실적으로 시간이 너무 많이 걸리는 부분,
            불가능한 부분등을 명확히 분류해 개발을 진행할 수 있었습니다.
          </span>
          <span>
            또한, 프로젝트를 진행하며 진행된 다양한 의견교류와 계획 수립의 단계에서 팀원들과의 협업또한 다양한 방식으로
            진행되었으며 이러한 경험을 통해 팀원들과의 협업 능력을 향상시킬 수 있었습니다.
          </span>
          <span>
            경험이 없는 상태에서 다양한 애로사항들을 맞닥뜨리며 진행된 개발은 예상보다 더 많은 시간이 걸리는 것을 알게 되었으며
            팀원과와 소통과 체계적인 계획은 프로젝트를 진행함에 있어서 굉장히 중요하다는 것을 깨달을 수 있는 좋은 경험이였습니다.
          </span>
        </div>
      </div>
    </div>
  );
};

export default JourneyHubInfo;
