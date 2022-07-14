const Task1 = require('./Task1')

test('Prints the length of the string', () => {
  expect(Task1('Sam')).toBe(3);
});

test('Throw an error for empty string', () => {
  expect(Task1('')).toBe('Please enter a string that is greater than 1 and less than 10 in length');
});

test('Throw an error for string greater than 10 in length', () => {
  expect(Task1('Samisacoderbutstilllearning')).toBe('Please enter a string that is greater than 1 and less than 10 in length');
});