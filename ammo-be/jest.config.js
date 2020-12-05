module.exports = {
    roots: ['<rootDir>/src'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
    testPathIgnorePatterns: ['/lib/', '/node_modules/', 'mocks'],
    moduleFileExtensions: ['js', 'ts'],
    collectCoverage: true, // Generate the coverage/ directory. May slow down the tests runs
    collectCoverageFrom: ['src/**'],
    coveragePathIgnorePatterns: ['.mock', '.snap'],
    moduleDirectories: ['node_modules', 'src'],
    testEnvironment: 'node',
};
