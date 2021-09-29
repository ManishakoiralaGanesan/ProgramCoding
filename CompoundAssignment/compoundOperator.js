function compoundOperator() {
  var a = 45;
  var b = 20;
  var c = 43;
  document.getElementById("addCompound").innerHTML =
    "Add (a += b)  " + (a += b).toString();
  document.getElementById("differenceCompound").innerHTML =
    "Difference (b -= 5)   " + (b -= 5).toString();
  document.getElementById("multipleCompound").innerHTML =
    "Multiple (b*=2)" + (b *= 2).toString();
  document.getElementById("divisionCompound").innerHTML =
    "division (a/=5)" + (a /= 5).toString();
  document.getElementById("reminderCompound").innerHTML =
    "Reminder (c %=3)" + (c %= 3).toString();
}
