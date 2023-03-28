//Celsius to Fahrenheit. X is Celsius
//(9x/5)+32

//one line
// qeustion
const tempInCelsius = Number(prompt("What is the temperature in degrees Celsius?"));
// some math
const tempInFahrenheit = (tempInCelsius * (9/5)) + 32;
// result
console.log(`${tempInCelsius} degrees Celsius is equal to ${tempInFahrenheit} degrees Fahrenheit`);
