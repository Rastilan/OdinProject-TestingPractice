function add(num1, num2) {
      return num1 + num2;
  
  }
function sub(num1, num2) {
  return num1 - num2;
}
function div(num1, num2) {
  return num1 / num2;
}
function multi(num1, num2) {
  return num1 * num2;
}

  const calculator = {
    add,
    sub,
    div,
    multi,
  };
  module.exports = calculator;
