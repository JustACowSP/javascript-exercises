const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  let total = 0;

  array.forEach((element) => {
    total += element;
  });

  return total;
};

const multiply = function (array) {
  let total = 1;

  array.forEach((element) => {
    total *= element;
  });

  return total;
};

const power = function (base, exponent) {
  return base ** exponent;
};

const factorial = function (n) {
  let total = 1;

  for (let i = 1; i <= n; i += 1) {
    total *= i;
  }

  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
