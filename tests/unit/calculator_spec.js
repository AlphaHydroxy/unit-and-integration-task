var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('should be able to multiply 3x5 and get 15', function(){
    calculator.previousTotal = 3;
    calculator.multiply(5);
    assert.strictEqual(calculator.runningTotal, 15);
  })

  it('should be able to divide 21/7 and get 3', function(){
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.strictEqual(calculator.runningTotal, 3);
  })

  it('should be able to add 1+4 and get 5', function(){
    calculator.previousTotal = 1;
    calculator.add(4);
    assert.strictEqual(calculator.runningTotal, 5);
  })

  it('should be able to subtract 7-4 and get 3', function(){
    calculator.previousTotal = 7;
    calculator.subtract(4);
    assert.strictEqual(calculator.runningTotal, 3);
  })

  it('should be able to concatenate multiple number button clicks', function(){
    calculator.numberClick(2);
    calculator.numberClick(8);
    calculator.numberClick(4);
    calculator.numberClick(4);
    assert.strictEqual(calculator.runningTotal, 2844);
  })

  it('should be able to chain multiple operations together', function(){
    calculator.previousTotal = 5;
    calculator.add(5);
    calculator.previousTotal = 10;
    calculator.add(5);
    assert.strictEqual(calculator.runningTotal, 15);
  })

  it('should be able to clear the running total without affecting the calculation', function(){
    calculator,previousTotal = 10;
    calculator.multiply(10);
    calculator.clearClick();
    assert.strictEqual(calculator.runningTotal, 0);
  })

  //set value for running total eg testing addition pass in number(calulator.js)

});
