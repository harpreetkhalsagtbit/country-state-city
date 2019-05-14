module.exports = {
    "roots": [
      "<rootDir>/"
    ],
    moduleFileExtensions: [
      'js',
      'ts',
      'tsx',
      'json',
      'node',
    ],
    testMatch: [
      '**/*.test.ts'
    ],
    testPathIgnorePatterns: [
      '/node_modules/',
    ],
    collectCoverage: true,
    "transform": {
      "^.+\\.tsx?$": "ts-jest"
    },
  }