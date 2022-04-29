const { NotImplementedError } = require('../extensions/index.js');

const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 class VigenereCipheringMachine {
  
  constructor(type) {
    this.type = type;
  }

  prepareCipherKey(key, minLength){
    let tmp = `${key}`;
    while(tmp.length < minLength){
      tmp += key;
    }
    return tmp;
  }

  isArgsHeathy(str, key){
    return [str, key].every(arg => arg !== undefined);
  }

  encrypt(str, key) {
    return this.doWork(str, key, (char, key) => alphabet[(alphabet.indexOf(char) + alphabet.indexOf(key)) % alphabet.length]);
  }

  decrypt(str, key) {
    return this.doWork(str, key, (char, key) => alphabet[(alphabet.indexOf(char) + alphabet.length - alphabet.indexOf(key)) % alphabet.length]);
  }

  doWork(str, key, fn){
    if(!this.isArgsHeathy(str, key)){
      throw new Error('Incorrect arguments!');
    }

    const originString = str.toUpperCase();
    const cipherKey =  (str.length > key.length ? this.prepareCipherKey(key, str.length) : key).toUpperCase();
    let charIndexCounterFuckingRSSAreYouSureThatYouInYourMind = 0;

    const listOfSymbols = originString.split('').map((char) => {
        if(/[A-Z]/i.test(char)){
            const encryptedSymbol = fn(char, cipherKey[charIndexCounterFuckingRSSAreYouSureThatYouInYourMind]);            
            charIndexCounterFuckingRSSAreYouSureThatYouInYourMind++;
            return encryptedSymbol;
        } else {
            return char;
        }
    });

    if (this.type === false){
      listOfSymbols.reverse(); 
    }
    
    return listOfSymbols.join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
