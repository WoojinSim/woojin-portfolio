import { css } from "@emotion/react";

export const scrollFadeInUp = css({
  opacity: 0,
  transform: "translateY(100px)",
  transition: "opacity 0.6s ease-out, transform 0.8s ease-out",
  "&.visible": {
    opacity: 1,
    transform: "translateY(0)",
  },
});

export const scrollFadeInRight = css({
  opacity: 0,
  transform: "translateX(100px)",
  transition: "opacity 0.6s ease-out, transform 0.8s ease-out",
  "&.visible": {
    opacity: 1,
    transform: "translateX(0)",
  },
});

export const scrollFadeInLeft = css({
  opacity: 0,
  transform: "translateX(-100px)",
  transition: "opacity 0.6s ease-out, transform 0.8s ease-out",
  "&.visible": {
    opacity: 1,
    transform: "translateX(0)",
  },
});
