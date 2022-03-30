import { functionOne, functionTwo } from '../src/module';

jest.mock('../src/module', () => {
  const originalModule = jest.requireActual('../src/module');

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
