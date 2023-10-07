function userPreference() {
  if (localStorage?.getItem("theme")) {
    return localStorage.getItem("theme");
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

const setTheme = () => {
  document.body.classList.remove("light", "dark");
  document.body.classList.add(userPreference());
  window.localStorage.setItem("theme", userPreference());
};

let hasSetTheme = false;

const handleFirstLoad = () => {
  if (!hasSetTheme) {
    setTheme();
    hasSetTheme = true;
  }
};

// Run on the very first page load
window.addEventListener("load", handleFirstLoad);

// Update body class after swap
document.addEventListener("astro:after-swap", setTheme);
