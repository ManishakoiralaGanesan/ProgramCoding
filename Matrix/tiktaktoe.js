var value;
var score1 = 0;
var score2 = 0;
var level = 1;
function myfunction(num) {
  let isChecked;
  let color;
  if (document.getElementById("player1").checked) {
    value = "X";
    color = "blue";
    isChecked = 0;
  }
  if (document.getElementById("player2").checked) {
    value = "O";
    color = "brown";
    isChecked = 1;
  }

  document.getElementById("box" + num).value = value;
  document.getElementById("box" + num).style.color = color;
  document.getElementById("box" + num).disabled = true;
  document.getElementById("level").innerHTML = level;

  playerChange(isChecked);
  gameResult();
  document.getElementById("score1").innerHTML = score1.toString();
  document.getElementById("score2").innerHTML = score2.toString();
}
function gameResult() {
  let checked = checkFunction();
  console.log(checked);
  if (checked.status == true) {
    diableBoxes();
    if (checked.value == "X") {
      document.getElementById("result").innerHTML = "Player1 Win";
      score1 += 1;
    } else if (checked.value == "O") {
      document.getElementById("result").innerHTML = "Player2 Win";
      score2 += 1;
    } else if (checked.value == "tieUp") {
      document.getElementById("result").innerHTML = "Tie Up";
      score1 += 1;
      score2 += 1;
    }
    level += 1;
  }
}
function playerChange(isChecked) {
  if (isChecked == 1) {
    document.getElementById("player1").checked = true;
    document.getElementById("text").innerHTML = "Player1 Turn";
  } else if (isChecked == 0) {
    document.getElementById("player2").checked = true;
    document.getElementById("text").innerHTML = "Player2 Turn";
  }
}
function reset() {
  document.getElementById("box1").value = "";
  document.getElementById("box2").value = "";
  document.getElementById("box3").value = ""; // 1,2,3 4,5,6  7,8,9 //1,4,7 2,5,8 3,6,9
  document.getElementById("box4").value = " ";
  document.getElementById("box5").value = "";
  document.getElementById("box6").value = "";
  document.getElementById("box7").value = "";
  document.getElementById("box8").value = "";
  document.getElementById("box9").value = "";
  enableBoxes();
}
function diableBoxes() {
  document.getElementById("box1").disabled = true;
  document.getElementById("box2").disabled = true;
  document.getElementById("box3").disabled = true; // 1,2,3 4,5,6  7,8,9 //1,4,7 2,5,8 3,6,9
  document.getElementById("box4").disabled = true;
  document.getElementById("box5").disabled = true;
  document.getElementById("box6").disabled = true;
  document.getElementById("box7").disabled = true;
  document.getElementById("box8").disabled = true;
  document.getElementById("box9").disabled = true;
}
function enableBoxes() {
  document.getElementById("box1").disabled = false;
  document.getElementById("box2").disabled = false;
  document.getElementById("box3").disabled = false; // 1,2,3 4,5,6  7,8,9 //1,4,7 2,5,8 3,6,9
  document.getElementById("box4").disabled = false;
  document.getElementById("box5").disabled = false;
  document.getElementById("box6").disabled = false;
  document.getElementById("box7").disabled = false;
  document.getElementById("box8").disabled = false;
  document.getElementById("box9").disabled = false;
}
function checkFunction() {
  let box1 = document.getElementById("box1").value;
  let box2 = document.getElementById("box2").value;
  let box3 = document.getElementById("box3").value; // 1,2,3 4,5,6  7,8,9 //1,4,7 2,5,8 3,6,9
  let box4 = document.getElementById("box4").value;
  let box5 = document.getElementById("box5").value;
  let box6 = document.getElementById("box6").value;
  let box7 = document.getElementById("box7").value;
  let box8 = document.getElementById("box8").value;
  let box9 = document.getElementById("box9").value;
  //array = [[box1, box2, box3], [box4, box5, box6], [box7, box8, box9]]
  if (box1 != "" && box2 != "" && box3 != "") {
    if (box1 == box2 && box2 == box3 && box1 == box3) {
      console.log({ status: true, value: box1 });
      return { status: true, value: box1 };
    }
  }
  if (box4 != "" && box5 != "" && box6 != "") {
    if (box4 == box5 && box5 == box6 && box4 == box6) {
      console.log("true 2");

      return { status: true, value: box4 };
    }
  }
  if (box7 != "" && box8 != "" && box9 != "") {
    if (box7 == box8 && box7 == box9 && box8 == box9) {
      console.log("true 3");
      return { status: true, value: box7 };
    }
  }
  if (box1 != "" && box4 != "" && box7 != "") {
    if (box1 == box4 && box7 == box4 && box1 == box7) {
      console.log("true 4");

      return { status: true, value: box1 };
    }
  }
  if (box2 != "" && box5 != "" && box8 != "") {
    if (box2 == box5 && box8 == box5 && box2 == box8) {
      console.log("true 5");
      return { status: true, value: box2 };
    }
  }
  if (box3 != "" && box6 != "" && box9 != "") {
    if (box3 == box6 && box9 == box6 && box3 == box9) {
      console.log("true 6");
      return { status: true, value: box3 };
    }
  }
  if (box1 != "" && box5 != "" && box9 != "") {
    if (box1 == box5 && box5 == box9 && box1 == box9) {
      console.log("true 8");
      return { status: true, value: box1 };
    }
  }
  if (box3 != "" && box5 != "" && box7 != "") {
    if (box3 == box5 && box7 == box5 && box3 == box7) {
      console.log("true 9");
      return { status: true, value: box3 };
    }
  }

  if (
    box1 != "" &&
    box2 != "" &&
    box3 != "" &&
    box4 != "" &&
    box5 != "" &&
    box6 != "" &&
    box7 != "" &&
    box8 != "" &&
    box9 != ""
  ) {
    return { status: true, value: "tieUp" };
  }
}
