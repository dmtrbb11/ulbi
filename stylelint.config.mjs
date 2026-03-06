/** @type {import('stylelint').Config} */
export default {
  extends: ["stylelint-config-standard-scss"],
  customSyntax: "postcss-scss",
  rules: {
    "declaration-property-unit-allowed-list": {
      "/^border/": ["px"],
      "/^(padding|gap)/": ["rem"],
    },
    "unit-allowed-list": ["%", "deg", "px", "rem", "ms"],
  },
};
