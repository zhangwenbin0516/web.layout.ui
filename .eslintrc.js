module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 13,
        "sourceType": "module",
        "project": "./tsconfig.json"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        // js语法与逻辑错误检查配置
        "for-direction": 2,                         // 强制 “for” 循环中更新子句的计数器朝着正确的方向移动
        "getter-return": [2, {allowImplicit: true}],                         // 强制 getter 函数中出现 return 语句
        "no-async-promise-executor": 2,             // 禁止使用异步函数作为 Promise executor
        "no-await-in-loop": 2,                      // 禁止在循环中出现 await
        "no-compare-neg-zero": 2,                   // 禁止与 -0 进行比较
        "no-cond-assign": ["error", "always"],                        // 禁止条件表达式中出现赋值操作符
        "no-console": [2, { "allow": ["warn", "error"] }],
        "no-constant-condition": 2,
        "no-control-regex": 2,
        "no-debugger": 2,
        "no-dupe-args": 2,
        "no-dupe-keys": 2,
        "no-duplicate-case": 2,
        "no-empty": 2,
        "no-empty-character-class": 2,
        "no-ex-assign": 2,
        "no-extra-boolean-cast": 2,
        "no-extra-parens": 2,
        "no-extra-semi": 2,
        "no-func-assign": 2,
        "no-inner-declarations": 2,
        "no-invalid-regexp": [2, {allowConstructorFlags: ["u", "y"]}],
        "no-irregular-whitespace": [2, { skipStrings: true, skipComments: true, skipRegExps: true, skipTemplates: true }],
        "no-misleading-character-class": 2,
        "no-obj-calls": 2,
        "no-prototype-builtins": 2,
        "no-regex-spaces": 2,
        "no-sparse-arrays": 2,
        "no-template-curly-in-string": 2,
        "no-unexpected-multiline": 2,
        "no-unreachable": 2,
        "no-unsafe-finally": 2,
        "no-unsafe-negation": 2,
        "require-atomic-updates": 2,
        "use-isnan": 2,
        "valid-typeof": 2,
        // js语法格式规范配置
        "accessor-pairs": 2,            // 强制 getter 和 setter 在对象中成对出现
        "array-callback-return": 2,     // 强制数组方法的回调函数中有 return 语句
        "class-methods-use-this": 2,
        "complexity": [2, 8],
        "consistent-return": [2],
        "curly": [2, "multi", "consistent"],
        "default-case": ["error"],      // swtich语句规范，如果没有default则使用： // no default
        "dot-notation": [2, {allowKeywords: false}],
        "eqeqeq": ["error", "always", { "null": "ignore" }],
        "no-alert": [2],
        "no-caller": 2,
        "no-case-declarations": 2,
        "no-div-regex": 2,
        "no-else-return": [2],
        "no-empty-function": [2, {allow: ["constructors"]}],        // 禁止出现空函数
        "no-empty-pattern": [2],
        "no-eq-null": 2,
        "no-eval": ["error", {"allowIndirect": true}],      // 允许间接使用eval
        "no-extend-native": [2, {exceptions: ["Object"]}],
        "no-extra-bind": [2],
        "no-extra-label": [2],
        "no-fallthrough": [2],
        "no-floating-decimal": 2,
        "no-global-assign": 2,
        "no-implicit-coercion": 2,
        "no-labels": 2,
        "no-lone-blocks": 2,
        "no-loop-func": 2,
        "no-multi-spaces": [2, {ignoreEOLComments: true, exceptions: {Property: true}}],
        "no-new": 2,
        "no-octal": 2,
        "no-redeclare": [2],
        "no-self-assign": [2],
        "no-unused-labels": [2],
        "no-useless-catch": [2],
        "no-useless-escape": [2],
        "no-useless-return": [2],
        "no-with": [2],
        // 变量声明配置
        "no-delete-var": [2],
        "no-shadow": [2],
        "no-shadow-restricted-names": [2],
        "no-undef": [2],
        "no-undef-init": [2],
        "no-unused-vars": [2, {vars: "all", args: "after-used"}],
        "no-use-before-define": 2,
        // 前端统一风格配置
        "array-bracket-newline": [2],
        "array-bracket-spacing": ["error", "never"],
        "block-spacing": ["error"],
        "brace-style": ["error", "1tbs", {allowSingleLine: true}],
        "camelcase": [2],
        "comma-dangle": 2,
        "comma-spacing": 2,
        "comma-style": 2,
        "computed-property-spacing": 2,
        "eol-last": 2,
        "func-call-spacing": 2,
        "function-paren-newline": ["error", "multiline"],
        "implicit-arrow-linebreak": 2,
        "indent": ["error", 2],
        "jsx-quotes": [2],
        "key-spacing": 2,
        "keyword-spacing": [2],
        "lines-around-comment": [
            "error", 
            {
                beforeBlockComment: true, 
                afterBlockComment: false, 
                beforeLineComment: true, 
                afterLineComment: false,
                allowBlockStart: true,
                allowBlockEnd: false,
                allowObjectStart: true,
                allowObjectEnd: false,
                allowArrayStart: true,
                allowArrayEnd: false,
                allowClassStart: true,
                allowClassEnd: false
            }
        ],
        "lines-between-class-members": [2],
        "multiline-comment-style": [2],
        "multiline-ternary": 2,
        "new-parens": 2,
        "newline-per-chained-call": 2,
        "no-lonely-if": 2,
        "no-mixed-spaces-and-tabs": 2,
        "no-multiple-empty-lines": 2,
        "no-nested-ternary": 2,
        "no-trailing-spaces": 2,
        "no-unneeded-ternary": 2,
        "no-whitespace-before-property": 2,
        "nonblock-statement-body-position": 2,
        "object-curly-newline": 2,
        "object-curly-spacing": 2,
        "object-property-newline": 2,
        "one-var": [2],
        "operator-assignment": 2,
        "operator-linebreak": 2,
        "quotes": [2, "double", {allowTemplateLiterals: true}],
        "semi": 2,
        "semi-style": 2,
        "space-before-blocks": 2,
        "space-in-parens": 2,
        "space-unary-ops": 2,
        "spaced-comment": 2,
        "switch-colon-spacing": 2,
        // es6语法格式配置
        "arrow-spacing": 2,
        "constructor-super": [2],
        "generator-star-spacing": ["error", {before: true, after: false}],
        "no-class-assign": 2,
        "no-confusing-arrow": 2,
        "no-const-assign": 2,
        "no-dupe-class-members": 2,
        "no-duplicate-imports": 2,
        "no-new-symbol": 2,
        "no-this-before-super": 2,
        "no-useless-computed-key": 2,
        "no-useless-rename": 2,
        "object-shorthand": 2,
        "prefer-const": 2,
        "require-yield": [2],
        "symbol-description": 2,
        // react 格式
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "react/react-in-jsx-scope": 0,
        // ts 配置
        "@typescript-eslint/no-explicit-any": "off"
    }
};
