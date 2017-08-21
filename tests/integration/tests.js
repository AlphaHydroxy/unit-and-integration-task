var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
 
 it('should have working number of buttons', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number1')).click();
    element(by.css('#number9')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('19')
 });

 it('should update the display with the result of arithmetical operation', function(){
  running_total = element(by.css('#running_total'));
  element(by.css('#number2')).click();
  element(by.css('#operator_add')).click();
  element(by.css('#number3')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('5');
 });

 it('should be able to chain multiple operations together', function(){
  running_total = element(by.css('#running_total'));
  element(by.css('#number2')).click();
  element(by.css('#operator_add')).click();
  element(by.css('#number3')).click();
  element(by.css('#operator_multiply')).click();
  element(by.css('#number4')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('20');
 });

 it('should be able to work with decimals', function(){
  running_total = element(by.css('#running_total'));
  element(by.css('#number7')).click();
  element(by.css('#operator_divide')).click();
  element(by.css('#number5')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('1.4');
 });

 it('should be able to work with large numbers', function(){
  running_total = element(by.css('#running_total'));
  element(by.css('#number7')).click();
  element(by.css('#number8')).click();
  element(by.css('#number9')).click();
  element(by.css('#operator_multiply')).click();
  element(by.css('#number5')).click();
  element(by.css('#number5')).click();
  element(by.css('#number4')).click();
  element(by.css('#number9')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('4378161');
 });

it('tell user they can\'t divide by 0 if they try to divide by 0', function(){
  running_total = element(by.css('#running_total'));
  element(by.css('#number5')).click();
  element(by.css('#operator_divide')).click();
  element(by.css('#number0')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('can\'t divide by 0');
})

});