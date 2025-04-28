function ConvertHandler() {
  this.getNum = function (input) {
    const string = input.split(/[a-zA-Z]+/)[0];
    const number = Number(string);
    if (string.match(/\//g) && string.match(/\//g).length > 1) return "invalid number";
    if (string === "") return 1;
    if (isNaN(number)) return parseFloat(eval(string).toFixed(5));
    return parseFloat(number.toFixed(5));
  };

  this.getUnit = function (input) {
    const unit = input.slice(input.search(/[a-zA-Z]+/));

    const units = ["gal", "lbs", "kg", "mi", "km", "l"];
    for (let i = 0; i < units.length; i++) {
      if (unit.toLowerCase() === units[i] && units[i] !== "l") {
        return units[i];
      } else if (unit.toLowerCase().includes(units[i]) && units[i] === "l" && unit.toLowerCase().match(/l$/g)) {
        return "L";
      }
    }
    return "invalid unit";
  };

  this.getReturnUnit = function (initUnit) {
    if (initUnit.toLowerCase() === "gal") return "L";
    if (initUnit.toLowerCase() === "l") return "gal";
    if (initUnit.toLowerCase() === "lbs") return "kg";
    if (initUnit.toLowerCase() === "kg") return "lbs";
    if (initUnit.toLowerCase() === "mi") return "km";
    if (initUnit.toLowerCase() === "km") return "mi";
    return "invalid unit";
  };

  this.spellOutUnit = function (unit) {
    if (unit.toLowerCase() === "gal") return "gallons";
    if (unit.toLowerCase() === "l") return "liters";
    if (unit.toLowerCase() === "lbs") return "pounds";
    if (unit.toLowerCase() === "kg") return "kilograms";
    if (unit.toLowerCase() === "mi") return "miles";
    if (unit.toLowerCase() === "km") return "kilometers";
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;

    if (initUnit.toLowerCase() === "gal") return parseFloat((initNum * galToL).toFixed(5));
    if (initUnit.toLowerCase() === "l") return parseFloat((initNum / galToL).toFixed(5));
    if (initUnit.toLowerCase() === "lbs") return parseFloat((initNum * lbsToKg).toFixed(5));
    if (initUnit.toLowerCase() === "kg") return parseFloat((initNum / lbsToKg).toFixed(5));
    if (initUnit.toLowerCase() === "mi") return parseFloat((initNum * miToKm).toFixed(5));
    if (initUnit.toLowerCase() === "km") return parseFloat((initNum / miToKm).toFixed(5));
    return "invalid number";
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    if (initNum === "invalid number" && initUnit === "invalid unit") return "invalid number and unit";
    if (initNum === "invalid number") return "invalid number";
    if (initUnit === "invalid unit") return "invalid unit";
    return `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
  };
}

module.exports = ConvertHandler;
