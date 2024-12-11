import { css } from "@emotion/react";

export const modalWrap = css({
  position: "fixed",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  padding: "50px 500px",
  boxSizing: "border-box",
});

export const modalContainer = css({
  position: "relative",
  backgroundColor: "white",
  padding: "40px",
  borderRadius: "10px",
  boxSizing: "border-box",
  width: "100%",
  height: "100%",
});

export const modalCloseButton = css({
  position: "absolute",
  top: "10px",
  right: "10px",
});
