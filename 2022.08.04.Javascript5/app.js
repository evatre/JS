// 3)Write a program where multiple actions with an array will be done. For element filtering please use the loop (the loop type can be chosen as You want).
// ●    Create an array with the elements from input
// ●    Print out elements which are negative.
// ●    Print out elements which are odd (uneven).
// ●    Compute how many elements are odd (uneven).
// ●    Verify if there are multiple elements with the same value
// ●    Print out each second element.
// ●    Compute average value of the array.
// ●    Establish how many elements are smaller than average value.

let first = prompt("Please provide the first number:");
let second = prompt("Please provide the second number:");
let third = prompt("Please provide the third number:");
let fourth = prompt("Please provide the fourth number:");

const array = [first, second, third, fourth];
const negative = array.filter(function (x) {
  return x < 0;
});

const odd = array.filter(function (x) {
  return x % 2 === 1;
});

let howManyOdd = odd.length;

let eachSecond = 

if (isNaN(first && second && third && fourth)) {
  alert("Only numeric values are allowed.");
}

alert(`Here are the negative values you provided: ${negative}`);
alert(`Here are the odd values you provided: ${odd}`);
alert(`Here are how many odd values you provided: ${howManyOdd}`);
