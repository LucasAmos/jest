/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  moduleNameMapper: {
    '\\.(css)$': 'identity-obj-proxy',
  },
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/__tests__/?(*.)+(spec|test).ts'],
  transform: {
    '\\.(js|ts|jsx|tsx)$': 'ts-jest',
  },
};
