import { style } from "@vanilla-extract/css";

import { theme } from "../../styles/theme.css";

export const footer = style({
  background: theme.appBg.subtle,
  borderTop: `1px solid ${theme.border.subtle}`,
  width: "100%",
  padding: "2rem 0",
  selectors: {
    "body[data-animating] &": {
      transition: "background 1s ease-in-out",
    },
  },
});

export const link = style({
  display: "inline-flex",
  alignItems: "center",
  ":hover": {
    textDecoration: "underline",
  },
});

export const linkIcon = style({
  color: theme.text.inlineIcon,
  marginRight: "0.5rem",
});

export const dialogue = style({
  alignSelf: "flex-end",
});

export const lastTended = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  color: theme.text.subtle,
});

export const lastTendedIcon = style({
  color: theme.text.inlineIcon,
  marginRight: "0.75rem",
});
