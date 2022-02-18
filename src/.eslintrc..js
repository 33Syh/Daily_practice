module.exports = {
  "root": true,
  "env": {
    "node": true
  },
  "extends": [
    "plugin:vue/essential",
    "eslint:recommended"
  ],
  "parserOptions": {
    "parser": "babel-eslint"
  },
  /**
   * "off"或者0    //关闭规则关闭
   * "warn"或者1    //在打开的规则作为警告（不影响退出代码）
   * "error"或者2    //把规则作为一个错误（退出代码触发时为1）
   */
  "rules": {
    "@typescript-eslint/no-this-alias": ["off"],
    "no-console": process.env.NODE_ENV === "production" ? "off" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "off" : "off",
    "@typescript-eslint/no-this-alias": [
      "error",
      {
        "allowDestructuring": true, // Allow `const { props, state } = this`; false by default
        "allowedNames": ["vm"] // Allow `const vm= this`; `[]` by default
      }
    ]
  },
}