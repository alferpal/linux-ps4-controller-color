const { name } = require('./package')

module.exports = {
  bail: true,
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.js',
  ],
  coverageDirectory: 'coverage-jest',
  coveragePathIgnorePatterns: ['fixtures'],
  coverageReporters: [
    'clover',
    'html',
    'json',
    'lcov',
    'text',
    'text-summary',
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  displayName: name,
  name,
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.test.js'],
  verbose: true,
}
