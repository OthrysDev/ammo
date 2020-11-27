module.exports = {
    env: {
        browser: true,
        es6: true,
        jest: true,
    },
    extends: [
        'airbnb-base',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 11,
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint'],
    rules: {
        // indent: ['error', 4],
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
        'no-console': 0,
        '@typescript-eslint/explicit-function-return-type': ['error'],
        'import/extensions': [1, 'never'],
        'comma-dangle': 0,
        '@typescript-eslint/ban-ts-comment': 0,
        'no-underscore-dangle': 0,
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto',
            },
        ],
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.d.ts', '.ts', '.tsx'],
                moduleDirectory: ['node_modules', 'src'],
            },
        },
    },
};
