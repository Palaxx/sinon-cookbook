module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:node/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],

  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  ignorePatterns: ["dist/*"],
  overrides: [
    {
      files: ["*.js", "*.jsx", "*.ts", "*.tsx"],
      rules: {
        "@typescript-eslint/camelcase": "off",
        "node/no-unpublished-require": "off",
        "node/no-missing-require": [
          "error",
          {
            tryExtensions: [".js", ".json", ".node", ".ts"],
          },
        ],
        "node/no-missing-import": [
          "warn",
          {
            tryExtensions: [".js", ".json", ".node", ".ts"],
          },
        ],
        "import/no-unresolved": [
          "warn"
        ],
      },
    },
    {
      files: ["*.js", "*.jsx"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/ban-ts-comment": "warn",
        "@typescript-eslint/no-empty-function": "off",
      },
    },
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "import/extensions": "off",
        "no-useless-constructor": "off",
        "no-restricted-syntax": "off",
        "node/no-unsupported-features/es-syntax": "off",
        "@typescript-eslint/no-unused-vars": "warn",
        "@typescript-eslint/no-explicit-any": "warn",
        "no-console": "error"
      },
    },
  ],
};
