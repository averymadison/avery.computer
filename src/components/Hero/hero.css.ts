import { style } from "@vanilla-extract/css";
import { theme } from "src/styles/theme.css";

export const sketch = style({
  "@media": {
    "(prefers-reduced-motion: no-preference)": {
      strokeDasharray: "1",
      strokeDashoffset: "1",
      animationName: "stroke",
      animationTimingFunction: "linear",
      animationDuration: "1s",
      animationFillMode: "both",
    },
  },
});

export const design1 = style({
  "@media": {
    "(prefers-reduced-motion: no-preference)": {
      animationDelay: "1s",
      animationDuration: "1s",
      animationTimingFunction: "cubic-bezier(.75,0,.75,.75)",
    },
  },
});

export const design2 = style({
  animationDelay: "2s",
});

export const web1 = style({
  animationDelay: "2s",
});

export const web2 = style({
  animationDelay: "3s",
});

export const stem = style({
  animationDelay: "3s",
});

export const petals = style({
  animationDelay: "4s",
});

export const petalsFill = style({
  fill: theme.appBg.default,
  "@media": {
    "(prefers-reduced-motion: no-preference)": {
      animation: "appear 0.2s both 4.5s",
    },
  },
});

export const middle = style({
  animationDuration: "0.5s",
  animationDelay: "5s",
});
