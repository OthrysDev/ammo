module.exports = {
    roots: ['<rootDir>/src'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
    testPathIgnorePatterns: ['/lib/', '/node_modules/', 'mocks'],
    moduleFileExtensions: ['js', 'ts', 'json'],
    collectCoverage: true,
    collectCoverageFrom: ['src/**'],
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100,
        },
    },
    coveragePathIgnorePatterns: ['.mock', '.snap', '.json'],
    moduleDirectories: ['node_modules', 'src', 'config'],
    testEnvironment: 'node',
    moduleNameMapper: {
        '^config/(.*)$': '<rootDir>/config/$1',
        '^package.json$': '<rootDir>/package.json',
        '\\.(css|scss)$': 'identity-obj-proxy',
    },
};
