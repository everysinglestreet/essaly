// eslint-disable-next-line @typescript-eslint/no-var-requires
const { pathsToModuleNameMapper } = require('ts-jest');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { compilerOptions } = require('./tsconfig');

module.exports = {
  collectCoverageFrom: ['src/**/*.ts'],
  moduleNameMapper: { ...pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }) },
  testEnvironment: 'node',
  transform: { '^.+\\.tsx?$': 'ts-jest' },
  verbose: true,
};
