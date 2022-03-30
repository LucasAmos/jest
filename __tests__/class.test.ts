import ClassMock from '../src/class';
const functionTwoSpy = jest
  .spyOn(ClassMock, 'functionTwo')
  .mockImplementation(() => 'functionTwo mocked implementation');

test('classMock one ', () => {
  expect(ClassMock.functionOne()).toEqual(
    'functionOne original implementation'
  );
});
test('classMock two ', () => {
  expect(ClassMock.functionTwo()).toEqual('functionTwo mocked implementation');
  expect(functionTwoSpy).toHaveBeenCalled();
});
