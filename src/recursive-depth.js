const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
    calculateDepth(arr) {
        const clearArray = arr.filter(_ => Array.isArray(_));
        if(!clearArray.length){
            return 1;
        } else {
            return 1 + Math.max(...clearArray.map(array => this.calculateDepth(array)));
        }
    }
    
}

module.exports = {
    DepthCalculator
};

