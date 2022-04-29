const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let max = 0;
  let arr = Array.from(n.toString());
  if (arr.length < 2) {
    return n;
  }
  for (let i = 0; i < arr.length + 1; i++) {
    arr = Array.from(n.toString());
    arr.splice(i, 1);
    let newNum = Number(arr.join(''));
    if (newNum > max) {
      max = newNum
    }
  }
  return max;
}

module.exports = {
  deleteDigit
};
