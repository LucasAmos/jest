import ClassMock from '../src/class';
const queryTwoSpy = jest
  .spyOn(ClassMock, 'queryTwo')
  .mockImplementation(() => 'queryTwo mocked data');

test('classMock one', () => {
  expect(ClassMock.queryOne()).toEqual('queryOne original data');
});
test('classMock two', () => {
  expect(ClassMock.queryTwo()).toEqual('queryTwo mocked data');
  expect(queryTwoSpy).toHaveBeenCalled();
});
