let first = prompt("Please provide a value:");
let second = prompt("Please provide another value:");
let operation = prompt(
  "Please choose what do you want to do with these values next.\nWrite '+' to sum up both values.\nWrite '-' to subtract both values.\nWrite '*' to multiply both values.\nWrite '/' to divide both values."
);

if (isNaN(first || second) && operation === "+") {
  let con = first + second;
  alert(`The sum of both values is ${con}`);
} else if (isNaN(first || second) && operation !== "+") {
  alert(
    "Please add a number if you want to subtract, divide or multiply the values."
  );
}

if (!isNaN(first || second) && operation === "+") {
  let sum = parseInt(first) + parseInt(second);
  alert("The sum of both numbers is " + sum);
} else if (!isNaN(first || second) && operation === "-") {
  let subtraction = parseInt(first) - parseInt(second);
  alert(
    "The result of subtracting the second number from the first is " +
      subtraction
  );
} else if (!isNaN(first || second) && operation === "*") {
  let multiplication = parseInt(first) * parseInt(second);
  alert("The result of multiplying both numbers is " + multiplication);
} else if (!isNaN(first || second) && operation === "/") {
  let division = parseInt(first) / parseInt(second);
  alert("The result of dividing both numbers is " + division);
}

if (operation == !("+" && "-" && "*" && "/")) {
  alert("Please enter a valid operator.");
}
