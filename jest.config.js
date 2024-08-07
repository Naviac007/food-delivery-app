import { transform } from "typescript";

export default {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": "ts-jest"
  }
};