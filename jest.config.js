const { defaults } = require('jest-config');
module.exports = {
  roots: ['<rootDir>'],
  // modulePaths: ['<rootDir>/src'],
  "moduleDirectories": [
    "node_modules",
    "<rootDir>/src",
    "<rootDir>/test",
     "src",
    "test"
  ],
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
  // bail: true,
  // moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  // roots: ['src'],
  // testMatch: ['<rootDir>/src/**/?(*.)test.{ts,tsx}'],
  // transform: {
  //   '^.+\\.tsx?$': 'ts-jest',
  // },
  // verbose: true,
}