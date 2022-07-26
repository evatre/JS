let input1 = prompt("Please provide a number:");
let input2 = prompt("Please provide another number:");

let sum = parseInt(input1) + parseInt(input2);
alert("The sum of both numbers is " + sum);

let subtraction = parseInt(input1) - parseInt(input2);
alert(
  "The result of subtracting the second number from the first is " + subtraction
);

let multiplication = parseInt(input1) * parseInt(input2);
alert("The result of multiplying both numbers is " + multiplication);

let division = parseInt(input1) / parseInt(input2);
alert("The result of dividing both numbers is " + division);

// Below i made also a version for all the number alerts in one window.
// let sum = parseInt(input1) + parseInt(input2);
// let subtraction = parseInt(input1) - parseInt(input2);
// let multiplication = parseInt(input1) * parseInt(input2);
// let division = parseInt(input1) / parseInt(input2);

// alert(`The sum of both numbers is ${sum}\n
// The result of subtracting the second number from the first is ${subtraction}\n
// The result of multiplying both numbers is ${multiplication}\n
// The result of dividing both numbers is ${division}`);

let firstName = prompt("What is your name?");
let surname = prompt("What is your last name?");

alert("Welcome, " + firstName + " " + surname + "!");
