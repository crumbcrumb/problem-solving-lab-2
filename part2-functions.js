//1. Dog Age Converter

function dogToHumanYears(dogAge) {
  let humanYears = dogAge * 7;
  return humanYears;
}
console.log(dogToHumanYears(1));
console.log(dogToHumanYears(4));
console.log(dogToHumanYears(7));

//2. Tip Calculator

function calculateTip(total, percentage) {
  let tip = total * percentage + total;
  return tip;
}
console.log(calculateTip(1000, 0.17));
console.log(calculateTip(289, 0.2));
console.log(calculateTip(75, 0.15));

//3. Even or Odd

function checkEvenOdd(num) {
  if (num % 2 === 0) return "even";
  else return "odd";
}
console.log(checkEvenOdd(6));
console.log(checkEvenOdd(197));
console.log(checkEvenOdd(80));
