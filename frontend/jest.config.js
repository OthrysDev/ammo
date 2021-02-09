export default {
    roots: ['<rootDir>/src'],
    testMatch: [
        '**/__tests__/**/*.+(ts|tsx|js)',
        '**/?(*.)+(spec|test).+(ts|tsx|js)',
    ],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    collectCoverage: true, // Generate the coverage/ directory. May slow down the tests runs
    collectCoverageFrom: ['src/**'],
    coveragePathIgnorePatterns: ['.mock', '.snap'],
};
