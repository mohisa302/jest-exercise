stringLength = (inputString) => {
  if (inputString.length < 1 || inputString.length > 10)
    throw new Error('your data is wrong!');

  return inputString.length;
};

reverseString = (inputString) => inputString.split('').reverse().join('');

class calculator {
  constructor(numberOne = 0, numberTwo = 0) {
    this.numberOne = numberOne;
    this.numberTwo = numberTwo;
  }
  multiply() {
    return this.numberOne * this.numberTwo;
  }
  add() {
    return this.numberOne + this.numberTwo;
  }
  subtract() {
    return this.numberOne - this.numberTwo;
  }
  divide() {
    return this.numberOne / this.numberTwo;
  }
}

capitalize = (newString) => {
  newString =
    newString[0].toUpperCase() + newString.substring(1, newString.length);
  return newString;
};

module.exports = { stringLength, reverseString, calculator, capitalize };
