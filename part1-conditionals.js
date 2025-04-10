//1. Grade Checker

let score = 82;
// Print A, B, C, D, or F based on score
if (score >= 90) {
  console.log("A");
} else if (score >= 80 && score < 90) {
  console.log("B");
} else if (score >= 70 && score < 80) {
  console.log("C");
} else if (score >= 60 && score < 70) {
  console.log("D");
} else {
  console.log("F");
}
console.log(score);

//2. Pizza Quantity Warning

let quantity = 12;
// Print warning if quantity > 10
if (quantity > 10) {
  console.log("warning");
} else console.log(quantity);

//3. Login Simulator

//let password = "letmein"; // or use prompt
// Print "Access granted" or "Access denied"
let password = prompt("Password:");
let rightPassword = "letmein";
if (password === rightPassword) {
  console.log("Access granted");
} else console.log("Access denied");
