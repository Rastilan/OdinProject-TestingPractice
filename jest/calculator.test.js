const calculator = require('../js/calculator');



test('add', () => {
  expect(calculator.add(1, 2)).toBe(3);
});
test('sub', () => {
  expect(calculator.sub(3, 2)).toBe(1);
});
test('div', () => {
  expect(calculator.div(4, 2)).toBe(2);
});
test('multi', () => {
  expect(calculator.multi(2, 2)).toBe(4);
});