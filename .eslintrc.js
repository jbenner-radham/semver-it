module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/essential',
        'eslint:recommended'
    ],
    rules: {
        'block-spacing': ['error', 'always'],
        'comma-dangle': ['error', 'never'],
        'comma-spacing': ['error', { after: true, before: false }],
        eqeqeq: ['error', 'smart'],
        indent: ['error', 4],
        'key-spacing': ['error', { afterColon: true, beforeColon: false, mode: 'strict' }],
        'linebreak-style': ['error', 'unix'],
        // 'max-len': ['error', { code: 120,comments: 120 }],
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-var': ['error'],
        'object-curly-spacing': ['error', 'always'],
        'quote-props': ['error', 'as-needed'],
        quotes: ['error', 'single', { allowTemplateLiterals: true }],
        semi: ['error', 'always'],
        'space-before-function-paren': ['error', { anonymous: 'always', asyncArrow: 'always', named: 'never' }]
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
};
