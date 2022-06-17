const capital = require('../js/capital');

test('capitalize string', () => {
  expect(capital("yes")).toBe("Yes");
});