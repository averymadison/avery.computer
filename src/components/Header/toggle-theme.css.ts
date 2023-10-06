import { style } from "@vanilla-extract/css";

import { theme } from "../../styles/theme.css";
import { tokens } from "../../styles/tokens.css";

export const animationContainer = style({
  position: "fixed",
  inset: "0",
  overflow: "hidden",
  zIndex: "-1",
  pointerEvents: "none",
});

export const button = style({
  background: "transparent",
  cursor: "pointer",
  border: "none",
  width: "100%",
  height: "100%",
  borderRadius: tokens.radius[100],
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  overflow: "hidden",
  color: theme.text.default,
  transition: "transform 0.2s ease-in-out",
  ":disabled": {
    cursor: "default",
  },
  ":hover": {
    background: theme.elementBg.hover,
  },
});

export const animatedCircle = style({
  position: "absolute",
  left: "0",
  top: "0",
  width: "40px",
  height: "40px",
  background: theme.appBg.default,
  borderRadius: "100%",
  transformOrigin: "50% 50%",
  selectors: {
    "body[data-animating] &": {
      animation: "grow 1s ease-in",
    },
  },
});

const icon = style({
  transformOrigin: "50% 200%",
  transition: "transform 0.4s ease-out , opacity 0.2s ease-in-out",
  position: "absolute",
  width: "24px",
  height: "24px",
  color: theme.text.subtle,
});

export const moon = style([
  icon,
  {
    selectors: {
      "[data-theme='light'] &": {
        transform: "rotate(60deg)",
      },
    },
  },
]);

export const sun = style([
  icon,
  {
    selectors: {
      "[data-theme='dark'] &": {
        transform: "rotate(-60deg)",
      },
    },
  },
]);
