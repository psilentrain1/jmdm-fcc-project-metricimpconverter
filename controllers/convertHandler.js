function ConvertHandler() {
  
  this.getNum = function(input) {
    const string = input.split(/[a-zA-Z]+/)[0]
    const number = Number(string)
    if (string.matchAll('/').length ) return 'invalid number';
    if (string === "") return 1;
    if (isNaN(number)) return parseFloat(eval(string).toFixed(5));
    return parseFloat(number.toFixed(5));
  };
  
  this.getUnit = function(input) {
   const unit = input.slice(input.search(/[a-zA-Z]+/));
    
    const units = ['gal', 'lbs', 'kg', 'mi', 'km', 'l'];
    for (let i = 0; i < units.length; i++) {
      if (unit.toLowerCase().includes(units[i]) && units[i] !== 'l') {
        return units[i];
      } else if (unit.toLowerCase().includes(units[i]) && units[i] === 'l') {
        return 'L';
      } 
    }
    return 'invalid unit';
  };
  
  this.getReturnUnit = function(initUnit) {
    if (initUnit.toLowerCase() === 'gal') return 'L';
    if (initUnit.toLowerCase() === 'l') return 'gal';
    if (initUnit.toLowerCase() === 'lbs') return 'kg';
    if (initUnit.toLowerCase() === 'kg') return 'lbs';
    if (initUnit.toLowerCase() === 'mi') return 'km';
    if (initUnit.toLowerCase() === 'km') return 'mi';
  };

  this.spellOutUnit = function(unit) {
    if (unit.toLowerCase() === 'gal') return 'gallons';
    if (unit.toLowerCase() === 'l') return 'liters';
    if (unit.toLowerCase() === 'lbs') return 'pounds';
    if (unit.toLowerCase() === 'kg') return 'kilograms';
    if (unit.toLowerCase() === 'mi') return 'miles';
    if (unit.toLowerCase() === 'km') return 'kilometers';
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;

    if (initUnit.toLowerCase() === 'gal') return initNum * galToL;
    if (initUnit.toLowerCase() === 'l') return initNum / galToL;
    if (initUnit.toLowerCase() === 'lbs') return initNum * lbsToKg;
    if (initUnit.toLowerCase() === 'kg') return initNum / lbsToKg;
    if (initUnit.toLowerCase() === 'mi') return initNum * miToKm;
    if (initUnit.toLowerCase() === 'km') return initNum / miToKm;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
  };
  
}

module.exports = ConvertHandler;
