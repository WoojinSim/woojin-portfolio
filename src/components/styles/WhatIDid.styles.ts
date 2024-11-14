import { css } from "@emotion/react";

export const mainContainer = css({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gap: "20px",
});

export const itemContainer = css({
  borderRadius: "10px",
  boxShadow: "0 0 5px rgba(0,0,0,0.2)",
  boxSizing: "border-box",
  padding: "20px",
});

export const itemTitleLabel = css({
  display: "block",
  fontFamily: "NanumSquareNeoBold",
  fontSize: "22px",
});

export const itemSubtitleLabel = css({
  display: "block",
  fontFamily: "NanumSquareNeoLight",
  fontSize: "14px",
});
