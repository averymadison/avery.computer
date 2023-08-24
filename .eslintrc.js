module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["standard-with-typescript", "plugin:astro/recommended", "prettier"],
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
  },
};
