const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  const addition = genString(customToString(options.addition), options.additionRepeatTimes || 1, options.additionSeparator || '|');
  return genString(customToString(str) + addition, options.repeatTimes || 1, options.separator || '+');
}

function genString(str, count, separator){
  return (str + separator).repeat(count).slice(0, 0 - separator.length);
}

function customToString(str){
  switch(typeof str){
    case 'undefined': 
      return '';
    case 'boolean':
      return str.toString();
    default: 
      return `${ str }`;
  }
}

module.exports = {
  repeater
};
