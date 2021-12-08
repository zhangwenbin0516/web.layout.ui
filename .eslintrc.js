module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 13,
        "sourceType": "module"
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
    }
};
