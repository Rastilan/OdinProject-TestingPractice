const anal = require('../js/analyzeArray');

test('Analyze Array average ', () => {
  expect(anal.avg([1,8,3,4,2,6])).toBe(4);
});

test('Analyze Array smallest ', () => {
  expect(anal.min([1,8,3,4,2,6])).toBe(1);
});

test('Analyze Array biggest ', () => {
  expect(anal.max([1,8,3,4,2,6])).toBe(8);
});

test('Analyze Array length ', () => {
  expect(anal.length([1,8,3,4,2,6])).toBe(6);
});