import { css } from "@emotion/react";

export const mainContainer = css({
  padding: "100px 20% 100px",
  backgroundColor: "#F1F2F6",
  display: "flex",
  flexDirection: "column",
  gap: "50px",
  "@media screen and (max-width: 768px)": {
    padding: "100px 5% 100px",
  },
});

export const itemTitleLabel = css({
  fontFamily: "NanumSquareNeoExtraBold",
  fontSize: "2.5rem",
  display: "block",
});

export const skillDescription = css({
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  "& b": {
    color: "#0984E3",
    fontFamily: "NanumSquareNeoExtraBold",
  },
  "& span": {
    fontSize: "17px",
    fontFamily: "NanumSquareNeo",
    lineHeight: "1.8",
    color: "#4a4a4a",
  },
  "& span.large": {
    fontSize: "1.625rem",
    fontFamily: "NanumSquareNeoBold",
    marginBottom: "20px",
    lineHeight: "1.4",
    color: "#2d2d2d",
  },
});

export const skillContainer = css({
  display: "flex",
  width: "100%",
  padding: "16px 16px 24px 16px",
  borderRadius: "10px",
  backgroundColor: "white",
  flexDirection: "column",
  alignItems: "center",
  alignContent: "center",
  boxSizing: "border-box",
  justifyContent: "flex-start",
  gap: "2rem",
  "@media screen and (max-width: 768px)": {
    gap: "1.4rem",
  },
});

export const categorySelectContainer = css({
  display: "flex",
  justifyContent: "center",
  gap: "1rem",
  "@media screen and (max-width: 768px)": {
    gap: "0.5rem",
  },
});

export const categorySelectButton = css({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "4px 16px",
  cursor: "pointer",
  borderRadius: "8px",
  border: "0px",
  color: "#0984E3",
  backgroundColor: "transparent",
  fontSize: "1.3rem",
  transition: "color 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease",
  lineClamp: 1,
  whiteSpace: "nowrap",
  "@media screen and (max-width: 768px)": {
    fontSize: "1rem",
  },
  "&:hover": {
    color: "#FFF",
    backgroundColor: "#0984E3",
    boxShadow: "0px 0px 10px 0px #0984E35F",
  },
  "&.active": {
    color: "#FFF",
    backgroundColor: "#0984E3",
    boxShadow: "0px 0px 10px 0px #0984E35F",
  },
});

export const skillBadgeContainer = css({
  flexGrow: 1,
  maxWidth: "800px",
  display: "flex",
  flexWrap: "wrap",
  gap: "0.5rem",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  "&.language > .language": {
    opacity: 1,
    filter: "blur(0px)",
  },
  "&.framework > .framework": {
    opacity: 1,
    filter: "blur(0px)",
  },
  "&.library > .library": {
    opacity: 1,
    filter: "blur(0px)",
  },
});

export const skillBadge = css({
  display: "flex",
  alignItems: "center",
  gap: "0.4rem",
  height: "auto",
  backgroundColor: "#F1F2F6",
  padding: "6px 10px 6px 8px",
  borderRadius: "25px",
  fontSize: "0.8rem",
  filter: "blur(2px)",
  opacity: 0.3,
  transition: "all 0.3s ease",
  fontWeight: "normal",
  cursor: "default",
  boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.3)",

  "&[data-skill='typescript']": {
    backgroundColor: "#3178C6",
    color: "white",
  },
  "&[data-skill='javascript']": {
    backgroundColor: "#F7DF1E",
    color: "black",
  },
  "&[data-skill='python']": {
    backgroundColor: "#3776AB",
    color: "white",
  },
  "&[data-skill='lua']": {
    backgroundColor: "#2C2D72",
    color: "white",
  },
  "&[data-skill='react']": {
    backgroundColor: "#61DAFB",
    color: "black",
  },
  "&[data-skill='django']": {
    backgroundColor: "#092E20",
    color: "white",
  },
  "&[data-skill='nextjs']": {
    backgroundColor: "#000000",
    color: "white",
  },
  "&[data-skill='keycloak']": {
    backgroundColor: "#4d4d4d",
    color: "white",
  },
  "&[data-skill='express']": {
    backgroundColor: "#000000",
    color: "white",
  },
  "&[data-skill='zustand']": {
    backgroundColor: "#1b3707",
    color: "white",
  },
  "&[data-skill='tailwindcss']": {
    backgroundColor: "#06B6D4",
    color: "white",
  },
  "&[data-skill='emotion']": {
    backgroundColor: "#d26ac1",
    color: "white",
  },
  "&[data-skill='tanstackquery']": {
    backgroundColor: "#FF4500",
    color: "white",
  },
  "&[data-skill='tanstacktable']": {
    backgroundColor: "#FF4500",
    color: "white",
  },
  "&[data-skill='gsap']": {
    backgroundColor: "#0ae448",
    color: "black",
  },
  "&[data-skill='framer']": {
    backgroundColor: "#fdf016",
    color: "black",
  },
  "&[data-skill='chartjs']": {
    backgroundColor: "#fe777b",
    color: "white",
  },
});
