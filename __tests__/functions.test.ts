import { functionOne, functionTwo } from '../src/functions';

jest.mock('../src/functions', () => {
  const originalModule = jest.requireActual('../src/functions');

  return {
    __esModule: true,
    ...originalModule,
    functionTwo: jest.fn(() => 'functionTwo mocked implementation'),
  };
});

test('function one', () => {
  expect(functionOne()).toEqual('functionOne original implementation');
});

test('function two', () => {
  expect(functionTwo()).toEqual('functionTwo mocked implementation');
});
