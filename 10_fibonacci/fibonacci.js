const fibonacci = function fibonacci(k) {
  if (k <= 0) {
    return 'OOPS';
  }
  if (k === 1 || k === 2 || k === '1' || k === '2') {
    return 1;
  }

  return fibonacci(k - 1) + fibonacci(k - 2);
};

// Do not edit below this line
module.exports = fibonacci;
