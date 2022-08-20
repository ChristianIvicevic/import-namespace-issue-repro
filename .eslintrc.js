module.exports = {
  root: true,
  overrides: [
    {
      files: ["*.js", "*.cjs", "*.mjs", "*.jsx"],
      parserOptions: {
        ecmaVersion: 2018,
      },
    },
    {
      files: ["*.ts"],
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
      ],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 12,
        project: "./tsconfig.json",
        sourceType: "module",
      },
      plugins: ["@typescript-eslint/eslint-plugin", "eslint-plugin-import"],
      rules: {
        "import/namespace": "error",
      },
      settings: {
        "import/parsers": {
          [require.resolve("@typescript-eslint/parser")]: [
            ".ts",
            ".tsx",
            ".d.ts",
          ],
        },
        "import/resolver": {
          [require.resolve("eslint-import-resolver-node")]: {
            extensions: [".js", ".cjs", ".mjs", ".jsx", ".ts", ".tsx"],
          },
          [require.resolve("eslint-import-resolver-typescript")]: {
            alwaysTryTypes: true,
          },
        },
      },
    },
  ],
};
