module.exports = {
    roots: ['<rootDir>/src'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
    testPathIgnorePatterns: ['/lib/', '/node_modules/', 'mocks'],
    moduleFileExtensions: ['js', 'ts'],
    collectCoverage: true,
    collectCoverageFrom: ['src/**'],
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 80,
            lines: 90,
            statements: 90,
        },
    },
    coveragePathIgnorePatterns: ['.mock', '.snap'],
    moduleDirectories: ['node_modules', 'src'],
    testEnvironment: 'node',
};
