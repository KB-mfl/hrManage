module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ["airbnb", "plugin:prettier/recommended"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "no-param-reassign": "warn",
    "no-unused-vars": "warn",
    "max-len": "warn",
    "no-return-assign": "warn",
    "no-empty": "warn",
    "no-console": "off",
    "no-shadow": "off",
    "react/jsx-filename-extension": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/no-unused-state": "warn",
    "react/no-array-index-key": "warn",
    "react/self-closing-comp": "off",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "import/no-named-as-default":"off",
    "import/no-named-as-default-member": "off",
    "import/no-unresolved": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "no-else-return": "off",
    "no-param-reassign": "off",
    "react/destructuring-assignment":'off',//结构赋值关闭
  },
};