function convertion() {
  let textField1 = document.getElementById("number1");
  let num1 = textField1.value;
  let unit1 = document.getElementById("unit1").value;
  let unit2 = document.getElementById("unit2").value;

  convertValues(num1, unit1, unit2);
}
function convertValues(num1, unit1, unit2) {
  let num2;
  if (unit1 != unit2) {
    if (unit1 == "meter") {
      if (unit2 == "centimeter") {
        num2 = num1 * 100;
        document.getElementById("formula").innerHTML =
          "multiply the length value by 100";
      } else if (unit2 == "kilometer") {
        num2 = num1 / 1000;
        document.getElementById("formula").innerHTML =
          "divide the value by 1000";
        console.log(num2);
      } else if (unit2 == "milimeter") {
        num2 = num1 * 1000;
        document.getElementById("formula").innerHTML =
          "multiply the length value by 1000";
        console.log(num2);
      }
    } else if (unit1 == "centimeter") {
      if (unit2 == "meter") {
        num2 = num1 / 100;
        document.getElementById("formula").innerHTML =
          "divide the length value by 100";
      } else if (unit2 == "kilometer") {
        num2 = num1 / 100000;
        document.getElementById("formula").innerHTML =
          "divide the length value by 100000";
      } else if (unit2 == "milimeter") {
        num2 = num1 * 10;
        document.getElementById("formula").innerHTML =
          "multiple the length value by 10";
      }
    } else if (unit1 == "kilometer") {
      if (unit2 == "meter") {
        num2 = num1 * 1000;
        document.getElementById("formula").innerHTML =
          "multiple the length value by 1000";
      } else if (unit2 == "centimeter") {
        num2 = num1 * 100000;
        document.getElementById("formula").innerHTML =
          "multiple the length value by 100000";
      } else if (unit2 == "milimeter") {
        console.log(Number(1e6));
        num2 = num1 * Number(1e6);

        document.getElementById("formula").innerHTML =
          "multiple the length value by 1000000 ";
      }
    } else if (unit1 == "milimeter") {
      if (unit2 == "meter") {
        num2 = num1 / 1000;
        document.getElementById("formula").innerHTML =
          "divide the length value by 1000";
      } else if (unit2 == "centimeter") {
        num2 = num1 / 10;
        document.getElementById("formula").innerHTML =
          "divide the length value by 10";
      } else if (unit2 == "kilometer") {
        console.log(Number(1e6));
        num2 = num1 / Number(1e6);

        document.getElementById("formula").innerHTML =
          "divide the length value by 1000000 ";
      }
    }
    document.getElementById("number2").defaultValue = num2;
  } else {
    window.alert("units aren't same");
    location.reload();
  }
}
