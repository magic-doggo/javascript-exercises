const convertToCelsius = function(fToC) {
  celsius = (fToC- 32) * 5/9;
  roundedCelsius = Math.round(celsius * 10) / 10
  return roundedCelsius;
};
//suggested solution:
//const convertToCelsius = function (fahrenheit) {
//   return Math.round((fahrenheit - 32) * (5 / 9) * 10) / 10;
// };


const convertToFahrenheit = function(cToF) {
  fahrenheit = (cToF * 9) / 5 + 32;
  roundedFahrenheit = Math.round(fahrenheit * 10) / 10
  return roundedFahrenheit;
};
//x °C ≘ (x × 9 / 5 + 32) °F
//x °F ≘ (x − 32) × 5 / 9 °C


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
