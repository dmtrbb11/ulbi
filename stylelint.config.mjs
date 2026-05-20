/** @type {import('stylelint').Config} */
export default {
  extends: ["stylelint-config-standard-scss"],
  customSyntax: "postcss-scss",
  rules: {
    "selector-class-pattern": null,
  },
};
