//Problem 1: Favorite Foods
// 1. Create an array with 5 of your favorite foods.
// 2. Log the first and last food in the array.
// 3. Add one more food using .push() and log the new array.

let favFoods = ["Pizza", "Pasta", "Burger", "Salad", "Ramen"];
console.log(favFoods[0]);
console.log(favFoods[favFoods.length - 1]);
favFoods.push("Cookies");
console.log(favFoods);

// ✅ Problem 2: Guest List
// 1. Create an array with a list of guests.
// 2. Remove the first guest using .shift()
// 3. Add a new guest at the end using .push()
// 4. Log how many guests are coming (.length)

let guests = ["John", "Ashley", "Brad", "Jennifer", "Alex"];
guests.shift();
guests.push("Jordan");
console.log(guests.length);

// ✅ Problem 3: Weekend Tasks
// 1. Create an array:
// 2. Write a function called printTasks() that loops through the array and logs each task.
// 3. Bonus: Log them numbered (e.g. 1. laundry, 2. groceries)

let tasks = ["laundry", "groceries", "coding", "naps"];

tasks.forEach(printTasks);

function printTasks(tasks, index) {
  console.log(`${index + 1}. ${tasks}`);
}

// ✅ Problem 4: Reverse It (Manual Reverse)
// 1. Create this array:
// 2. Manually reverse it by looping (don’t use .reverse()!)
// 3. Log the result

let numbers = [1, 2, 3, 4, 5];
for (let i = numbers.length - 1; i >= 0; i--) {
    console.log(numbers[i])
}



// Bonus: Random Picker
// Create a function called randomLunch() that:
// • Takes an array of lunch options
// • Returns one at random

let lunches = ["burrito", "pizza", "sandwich", "ramen"];

function randomLunch() {
  let randItem = Math.floor(Math.random() * lunches.length);
  return lunches[randItem];
}

console.log(randomLunch(lunches));
