const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  const discardNext = '--discard-next'
  const discardPrev = '--discard-prev'
  const doubleNext = '--double-next'
  const doublePrev = '--double-prev'

  let transArr = [];
  if (Array.isArray(arr)) {
    
    for (let i = 0; i < arr.length; i++) {
      if (arr[i - 1] === undefined && arr[i] === discardPrev || arr[i - 1] === undefined && arr[i] === doublePrev || arr[i + 1] === undefined && arr[i] === discardNext || arr[i + 1] === undefined && arr[i] === doubleNext) {
        transArr.push()
      }

      else if(arr[i] === doublePrev && arr[i - 2] === discardNext || arr[i] === discardPrev && arr[i - 2] === discardNext){
        transArr.push()
      }

      else if (arr[i] === discardNext) {
        i++
      }
      else if (arr[i] === discardPrev) {
        transArr.pop();
      }
      else if (arr[i] === doubleNext) {
        transArr.push(arr[i + 1])
      }
      else if (arr[i] === doublePrev) {
        transArr.push(arr[i - 1]);
      }
      else {
        transArr.push(arr[i]);
      }
      
    }
  }else {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }
  return transArr;
}

module.exports = {
  transform
};
