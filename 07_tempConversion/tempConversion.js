const convertToCelsius = function(fToC) {
  celsius = (fToC- 32) * 5/9
  return celsius;
};



const convertToFahrenheit = function(cToF) {
  fahrenheit = (cToF * 9) / 5 + 32;
  return fahrenheit;
};
//x °C ≘ (x × 9 / 5 + 32) °F
//x °F ≘ (x − 32) × 5 / 9 °C


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
