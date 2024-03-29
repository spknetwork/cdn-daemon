/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  "moduleFileExtensions": ["js", "json", "ts"],
  "testRegex": ".(spec|test).ts$",
  "testEnvironment": "node",
  "extensionsToTreatAsEsm": [".ts"],
  "globals": {
    "ts-jest": {
      "useESM": true
    }
  },
  "moduleNameMapper": {
    "^(\\.{1,2}/.*)\\.js$": "$1"
  },
  "transform": {
    "^.+\\.(t|j)s$": [
      "@swc/jest",
      {
        "root": "../.."
      }
    ]
  }
};