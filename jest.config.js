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
      '**/*.test.ts',
      '**/*.test.js'
    ],
    testPathIgnorePatterns: [
      '/node_modules/',
      'dist'
    ],
    collectCoverage: true,
    "transform": {
      "^.+\\.tsx?$": "ts-jest"
    },
  }