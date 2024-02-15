import "./toggle-theme.css";

import { gray, grayDark } from "@radix-ui/colors";
import classNames from "classnames";
import { useEffect, useState } from "react";

import { Icon } from "../Icon/Icon";

type Theme = "light" | "dark";

export const ToggleTheme = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [activeTheme, setActiveTheme] = useState<Theme>(
    document.body.classList.contains("dark") ? "dark" : "light"
  );

  useEffect(() => {
    if (!activeTheme) return;

    // Update class on body
    document.body.classList.remove("light", "dark");
    document.body.classList.add(activeTheme);

    // Update localStorage
    window.localStorage.setItem("theme", activeTheme);

    // Update meta theme
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme !== null)
      metaTheme.setAttribute(
        "content",
        activeTheme === "dark" ? grayDark.gray1 : gray.gray1
      );
  }, [activeTheme]);

  return (
    <>
      <button
        type="button"
        data-theme-toggle
        aria-label="Toggle theme"
        onClick={() => {
          setActiveTheme(activeTheme === "light" ? "dark" : "light");
        }}
        onMouseOver={() => {
          setIsHovering(true);
        }}
        onMouseOut={() => {
          setIsHovering(false);
        }}
        className={classNames("toggleButton", { dark: activeTheme === "dark" })}
      >
        <Icon
          icon="sun"
          size="20"
          variant={isHovering ? "filled" : "line"}
          className={classNames("sun", {
            active: activeTheme === "light",
          })}
        />
        <Icon
          icon="moon"
          size="20"
          variant={isHovering ? "filled" : "line"}
          className={classNames("moon", {
            active: activeTheme === "dark",
          })}
        />
      </button>
    </>
  );
};
