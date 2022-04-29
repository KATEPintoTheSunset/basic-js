const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
      let newNode = `( ${ value } )`;
      if(!arguments.length){
          newNode = '( )';
      }
      this.chain.push(newNode);
      return this;
  },
  removeLink(position) {
      if(!position || typeof position !== 'number' || position > this.chain.length || position < 0){
          this.chain = [];
          throw new Error(`You can't remove incorrect link!`);
      }
      this.chain.splice(position - 1, 1);
      return this;
  },
  reverseChain() {
    this.chain.reverse()
    return this;
  },
  finishChain() {
    const doneCHain = this.chain.join('~~');
    this.chain = [];
    return doneCHain;
  }
};

module.exports = {
  chainMaker
};
