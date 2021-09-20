function arithmaticOperations() {
  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);
  let addition = add(num1, num2);
  document.getElementById("add").innerHTML = "Addition :" + addition.toString();
  let difference = different(num1, num2);
  document.getElementById("differ").innerHTML =
    "Difference :" + difference.toString();
  let multiplication = multiple(num1, num2);
  document.getElementById("multiple").innerHTML =
    "Multiplication " + multiplication.toString();
  let quotientVal = quotient(num1, num2);
  document.getElementById("quotient").innerHTML =
    "Quotient :" + quotientVal.toString();
  let remainderVal = reminder(num1, num2);
  document.getElementById("reminder").innerHTML =
    "Reminder" + remainderVal.toString();
}
function add(num1, num2) {
  return num1 + num2;
}
function different(num1, num2) {
  let difference;
  if (num1 > num2) {
    difference = num1 - num2;
  } else {
    difference = num2 - num1;
  }
  return difference;
}
function multiple(num1, num2) {
  return num1 * num2;
}
function quotient(num1, num2) {
  return (num1 / num2) | 0;
}
function reminder(num1, num2) {
  return num1 % num2;
}
