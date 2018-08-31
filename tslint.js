module.exports = {
    env: {
        browser: false,
        mocha: true,
        node: true
    },
    extends: [
        'tslint:latest',
        'tslint-config-prettier'
    ],
    globals: {
        React: true
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        }
    },
    rules: {
        'array-type': [
            true,
            'array'
        ],
        'arrow-return-shorthand': [
            true,
            'multiline'
        ],
        curly: [
            true,
            'ignore-same-line'
        ],
        'comment-format': false,
        'interface-name': false,
        'jsx-alignment': false,
        'jsx-boolean-value': false,
        'jsx-no-multiline-js': false,
        'jsx-wrap-multiline': false,
        forin: false,
        'max-classes-per-file': false,
        'no-conditional-assignment': true,
        'no-console': false,
        'no-duplicate-variable': true,
        'no-empty': false,
        'no-empty-interface': false,
        'no-implicit-dependencies': false,
        'no-invalid-template-strings': true,
        'no-namespace': false,
        'no-shadowed-variable': false,
        'no-string-literal': true,
        'no-submodule-imports': false,
        'no-unused-expression': false,
        'no-var-keyword': true,
        'no-var-requires': false,
        'object-literal-shorthand': true,
        'object-literal-sort-keys': false,
        'only-arrow-functions': [
            true,
            'allow-declarations',
            'allow-named-functions'
        ],
        'ordered-imports': false,
        'prefer-template': true,
        'prefer-for-of': false,
        prettier: [
            true,
            {
                arrowParens: 'always',
                bracketSpacing: true,
                jsxBracketSameLine: true,
                parser: 'typescript',
                printWidth: 80,
                semi: false,
                singleQuote: true,
                tabWidth: 4,
                trailingComma: 'all',
                useTabs: false
            }
        ],
        'triple-equals': true,
        'variable-name': false
    },
    rulesDirectory: [
        'tslint-plugin-prettier'
    ]
};