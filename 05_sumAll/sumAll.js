const sumAll = function (a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'ERROR';
  } if (a < 0 || b < 0) {
    return 'ERROR';
  }

  let begin;
  let end;

  if (a > b) {
    [begin, end] = [b, a];
  } else {
    [begin, end] = [a, b];
  }

  let sum = 0;

  for (let n = begin; n <= end; n += 1) {
    sum += n;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
