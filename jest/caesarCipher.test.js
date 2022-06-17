const caesar = require('../js/caesarCipher');

test('shift string', () => {
  expect(caesar("abcd", 1)).toBe("bcde");
});