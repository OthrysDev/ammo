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
        indent: ['error', 4],
        'no-console': 0,
        '@typescript-eslint/explicit-function-return-type': ['error'],
        'import/extensions': ['error', 'never', { json: 'always' }],
        'comma-dangle': 0,
        'object-curly-newline': 0,
        'import/no-mutable-exports': 0,
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
                extensions: ['.js', '.jsx', '.d.ts', '.ts', '.tsx', '.json'],
                moduleDirectory: ['.', 'node_modules', 'src'],
            },
        },
    },
};
