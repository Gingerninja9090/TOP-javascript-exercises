const convertToCelsius = function(inputTempFah) {
    outputTempCel = Math.round(((inputTempFah - 32) * (5 / 9)) * 10) / 10;
    return outputTempCel
};

const convertToFahrenheit = function(inputTempCel) {
    outputTempFah = Math.round(((inputTempCel / (5 / 9)) + 32) * 10) /10;
    return outputTempFah
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
