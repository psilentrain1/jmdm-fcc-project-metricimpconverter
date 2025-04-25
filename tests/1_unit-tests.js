const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
  test('convertHandler should correctly read a whole number input', function(){
    assert.equal(convertHandler.getNum('25gal'), '25', '25gal should equal 25');
    assert.equal(convertHandler.getNum('15L'), '15', '15L should equal 15');
    assert.equal(convertHandler.getNum('328mi'), '328', '328mi should equal 328');
    assert.equal(convertHandler.getNum('5432km'), '5432', '5432km should equal 5432');
    assert.equal(convertHandler.getNum('175lbs'), '175', '175lbs should equal 175');
    assert.equal(convertHandler.getNum('123kg'), '123', '123kg should equal 123');
  });
  test('convertHandler should correctly read a decimal number input', function(){
    assert.equal(convertHandler.getNum('25.5gal'), '25.5', '25.5gal should equal 25.5');
    assert.equal(convertHandler.getNum('15.3L'), '15.3', '15.3L should equal 15.3');
    assert.equal(convertHandler.getNum('328.8mi'), '328.8', '328.5mi should equal 328.8');
    assert.equal(convertHandler.getNum('5432.1km'), '5432.1', '5432.1km should equal 5432.1');
    assert.equal(convertHandler.getNum('175.4lbs'), '175.4', '175.4lbs should equal 175.4');
    assert.equal(convertHandler.getNum('123.4kg'), '123.4', '123.4kg should equal 123.4');
  });
  test('convertHandler should correctly read a fractional input', function(){});
  test('convertHandler should correctly read a fractional input with a decimal', function(){});
  test('convertHandler should correctly return an error on a double-fraction (i.e. 3/2/3)', function(){});
  test('convertHandler should correctly default to a numerical input of 1 when no numerical input is provided', function(){});
  test('convertHandler should correctly read each valid input unit', function(){
    assert.equal(convertHandler.getUnit('25gal'), 'gal', '25gal should equal gal');
    assert.equal(convertHandler.getUnit('15L'), 'L', '15L should equal L');
    assert.equal(convertHandler.getUnit('328mi'), 'mi', '328mi should equal mi');
    assert.equal(convertHandler.getUnit('5432km'), 'km', '5432km should equal km');
    assert.equal(convertHandler.getUnit('175lbs'), 'lbs', '175lbs should equal lbs');
    assert.equal(convertHandler.getUnit('123kg'), 'kg', '123kg should equal kg');
  });
  test('convertHandler should correctly return an error for an invalid input unit', function(){
    assert.equal(convertHandler.getUnit('25gaw'), 'invalid unit', '25gaw should equal invalid unit');
    assert.equal(convertHandler.getUnit('15T'), 'invalid unit', '15T should equal invalid unit');
  });
  test('convertHandler should return the correct return unit for each valid input unit', function(){
    assert.equal(convertHandler.getReturnUnit('gal'), 'L', 'convert gal to L');
    assert.equal(convertHandler.getReturnUnit('L'), 'gal', 'convert L to gal');
    assert.equal(convertHandler.getReturnUnit('mi'), 'km', 'convert mi to km');
    assert.equal(convertHandler.getReturnUnit('km'), 'mi', 'convert km to mi');
    assert.equal(convertHandler.getReturnUnit('lbs'), 'kg', 'convert lbs to kg');
    assert.equal(convertHandler.getReturnUnit('kg'), 'lbs', 'convert kg to lbs');
  });
  test('convertHandler should correctly return the spelled-out string unit for each valid input unit', function(){
    assert.equal(convertHandler.spellOutUnit('gal'), 'gallons', 'spell out gal to gallons');
    assert.equal(convertHandler.spellOutUnit('L'), 'liters', 'spell out L to liters');
    assert.equal(convertHandler.spellOutUnit('mi'), 'miles', 'spell out mi to miles');
    assert.equal(convertHandler.spellOutUnit('km'), 'kilometers', 'spell out km to kilometers');
    assert.equal(convertHandler.spellOutUnit('lbs'), 'pounds', 'spell out lbs to pounds');
    assert.equal(convertHandler.spellOutUnit('kg'), 'kilograms', 'spell out kg to kilograms');
  });
  test('convertHandler should correctly convert gal to L', function(){
  });
  test('convertHandler should correctly convert L to gal', function(){
  });
  test('convertHandler should correctly convert mi to km', function(){
  });
  test('convertHandler should correctly convert km to mi', function(){
  });
  test('convertHandler should correctly convert lbs to kg', function(){
  });
  test('convertHandler should correctly convert kg to lbs', function(){
  });
});