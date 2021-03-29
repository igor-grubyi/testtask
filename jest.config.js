module.exports = {
  roots: ["<rootDir>/src"],

  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },

  setupFilesAfterEnv: [
    "@testing-library/jest-dom/extend-expect"
  ],

  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",

  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],

  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/src/__tests__/__mocks__/fileMock.js",
    "\\.(css|less|scss)$": "<rootDir>/src/__tests__/__mocks__/styleMock.js"
  }
};