function add() {
  let first = document.getElementById("first").value;
  let second = document.getElementById("second").value;
  document.getElementById("result").innerText = Number(first) + Number(second);
}

function minus() {
  let first = document.getElementById("first").value;
  let second = document.getElementById("second").value;
  document.getElementById("result").innerText = Number(first) - Number(second);
}

function divide() {
  let first = document.getElementById("first").value;
  let second = document.getElementById("second").value;
  document.getElementById("result").innerText = Number(first) / Number(second);
}

function multiply() {
  let first = document.getElementById("first").value;
  let second = document.getElementById("second").value;
  document.getElementById("result").innerText = Number(first) * Number(second);
}
