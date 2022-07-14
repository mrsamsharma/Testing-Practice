const reverseString = require('./Task2')

test('Should return olleH', () => {
  expect(reverseString('Hello')).toBe('olleH');
})