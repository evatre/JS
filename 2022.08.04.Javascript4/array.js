// Ask user to enter the elements to the array and sort it (allow numbers only)

let first = prompt("Please provide the first number:");
let second = prompt("Please provide the second number:");
let third = prompt("Please provide the third number:");
let fourth = prompt("Please provide the fourth number:");

const forSorting = [first, second, third, fourth];

if (isNaN(first && second && third && fourth)) {
  alert("Only numberic values are allowed.");
} else {
  alert(`Here you have them sorted: ${forSorting.sort()}`);
}
