/** @jsxImportSource @emotion/react */
import React from "react";
import * as style from "./styles/Career.styles";
import { scrollFadeInLeft, scrollFadeInRight } from "./styles/global.styles";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

import careerImageFlowww from "../assets/Images/Flowww.png";
import careerImageGongki from "../assets/Images/Gongki.png";

interface CareerProjectCardProps {
  title: string;
  subTitle: string;
  description?: string | React.ReactNode;
  descriptionList?: (string | React.ReactNode)[];
}
const CareerProjectCard = ({ title, subTitle, description, descriptionList }: CareerProjectCardProps) => {
  return (
    <div css={style.careerItemProjectContainer}>
      <div css={style.careerItemProjectTitleWrapper}>
        <span css={style.careerItemProjectTitle}>{title}</span>
        <span css={style.careerItemProjectTitle} className="subTitle">
          {subTitle}
        </span>
      </div>
      {description && (
        <>
          {typeof description === "string" ? (
            <span css={style.careerItemProjectDescription}>{description}</span>
          ) : (
            description
          )}
        </>
      )}
      {descriptionList && (
        <ul css={style.careerItemProjectDescriptionList}>
          {descriptionList.map((line, index) => (typeof line === "string" ? <li key={index}>{line}</li> : line))}
        </ul>
      )}
    </div>
  );
};

const Career: React.FC = () => {
  const addScrollAnimationRef = useScrollAnimation();

  return (
    <section css={style.mainContainer}>
      <span css={[style.itemTitleLabel, scrollFadeInRight]} ref={addScrollAnimationRef}>
        경력
      </span>

      {/* 플로우 */}
      <div css={style.careerContainer}>
        <div css={style.careerItemContainer}>
          {/* 회사 아이콘 이미지 컨테이너 */}
          <div css={style.careerItemImageWrapper}>
            <img css={style.careerImage} src={careerImageFlowww} alt="career_image_flowww" />
          </div>

          {/* 회사 설명 라벨 컨테이너 */}
          <div css={style.careerItemLabelContainer}>
            {/* 회사 이름 및 재직 기간 */}
            <div css={style.careerItemTitleWrapper}>
              <span css={style.careerItemTitleLabel} className="title">
                Flowww Creatives
              </span>
              <span css={style.careerItemTitleLabel} className="subTitle">
                2025.03 ~ 2025.07
              </span>
            </div>

            {/* 회사 설명 라벨 */}
            <span css={style.careerItemDescriptionLabel}>Future Lab Of Wise Wondering Waves - Web Turnkey Agency</span>

            {/* 사내 포지션 */}
            <div css={style.careerItemPositionContainer}>
              <span>Frontend</span>
            </div>

            {/* 진행한 사내 프로젝트 */}
            <div css={style.careerItemProjectWrapper}>
              <CareerProjectCard
                title="BirdSwing (버드스윙)"
                subTitle="2025.1Q ~ 2025.2Q"
                description="국내 유명 골프 클럽 Trinity Club의 백오피스 웹사이트인 BirdSwing의 프론트앤드 개발"
                descriptionList={[
                  "GPS 기반 그린내 홀 위치 시각화 및 추적 관리 페이지 담당",
                  "TanstackTable 기반 이용자 정보 조회 페이지 및 정보 유효성 검사 로직 담당",
                ]}
              />
              <CareerProjectCard
                title="Orbrium (오브리움)"
                subTitle="2025.1Q ~ 2025.2Q"
                description="Broadcom : VMware사의 클라우드 포털 프로젝트인 Orbrium의 프론트앤드 개발"
                descriptionList={[
                  "고수준의 동적 폼 생성 기능인 Dyamic Form 담당",
                  "VM 내 가용 가능한 리소스의 시각화 및 관리 페이지 담당",
                  <li>
                    Orbrium 시스템{" "}
                    <a
                      href="https://www.ddaily.co.kr/page/view/2025052913363131570"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      관련 기사
                    </a>
                  </li>,
                ]}
              />
              <CareerProjectCard
                title="Auto Estimate System (자동견적)"
                subTitle="2025.2Q ~ 2025.3Q"
                description="Etevers사의 자동견적 프로젝트인 Auto Estimate의 프론트앤드 개발"
                descriptionList={[
                  "사용자 정보 입력 폼, 프로젝트 생성 폼 등 각종 정보 입력 폼 담당",
                  "데이터 변경 내역 심층 비교 분석 알고리즘 개발 및 변경내역 비교 시각화 페이지 담당",
                  "Keycloak 기반 로그인 관련 페이지 담당",
                ]}
              />
              <CareerProjectCard
                title="Flowww Creatives 랜딩페이지"
                subTitle="2025.3Q ~ 2025.3Q"
                description="회사의 랜딩페이지 프론트앤드 개발"
                descriptionList={["사내 디자이너와 협업하여 반응형 랜딩페이지 전체 구현 담당"]}
              />
            </div>
          </div>
        </div>
      </div>

      {/* 코스타 */}
      <div css={style.careerContainer}>
        <div css={style.careerItemContainer}>
          {/* 회사 아이콘 이미지 컨테이너 */}
          <div css={style.careerItemImageWrapper}>
            <img css={style.careerImage} src={careerImageGongki} alt="career_image_gongki" />
          </div>

          {/* 회사 설명 라벨 컨테이너 */}
          <div css={style.careerItemLabelContainer}>
            {/* 회사 이름 및 재직 기간 */}
            <div css={style.careerItemTitleWrapper}>
              <span css={style.careerItemTitleLabel} className="title">
                CO-STAR
              </span>
              <span css={style.careerItemTitleLabel} className="subTitle">
                2025.08 ~ 재직중
              </span>
            </div>

            {/* 회사 설명 라벨 */}
            <span css={style.careerItemDescriptionLabel}>공연/전시 예술 협업 플랫폼 - 공기</span>

            {/* 사내 포지션 */}
            <div css={style.careerItemPositionContainer}>
              <span>Frontend</span>
            </div>

            {/* 진행한 사내 프로젝트 */}
            <div css={style.careerItemProjectWrapper}>
              <CareerProjectCard
                title="공기"
                subTitle="2025.3Q ~ "
                description="공연, 전시 예술 협업 플랫폼 공기의 프론트앤드 개발"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
