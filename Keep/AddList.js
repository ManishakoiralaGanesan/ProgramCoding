var array;
var removeArray = new Array();
var count = 0;

function addList() {
  let value = document.getElementById("name").value;
  array = [];
  if (array == undefined) {
    array = [];
  }

  array.push(value);
  storeList(array);
}
function storeList(array) {
  let existing = JSON.parse(localStorage.getItem("toDoLists"));

  if (existing != null) {
    existing.push(...array);
  } else {
    existing = array;
  }
  setLocalStorage(existing);
}
function setLocalStorage(list) {
  localStorage.setItem("toDoLists", JSON.stringify(list));
  toDoListToHtml(list);
}
function createTodoList() {
  let toDo = JSON.parse(localStorage.getItem("toDoLists"));

  if (toDo == null) {
    array = [];
  }
  toDoListToHtml(toDo);
}
function toDoListToHtml(items) {
  document.getElementById("toDo").innerHTML = "";
  if (items != null) {
    for (let index = items.length - 1; index >= 0; index--) {
      let checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.name = "toDos";
      checkbox.value = items[index];
      checkbox.setAttribute("id", "toDos" + index);
      //checkbox.setAttribute("class", "toDoSelct")
      let newDiv = document.createElement("div");
      newDiv.id = index;
      newDiv.appendChild(checkbox);
      newDiv.appendChild(document.createTextNode(items[index]));

      document.getElementById("toDo").appendChild(newDiv);
    }
    console.log(document.getElementById("toDo"));
  }
  checkBoxEvenListner();
}
function checkBoxEvenListner() {
  let a = document.getElementById("toDo").childElementCount;
  for (let index = 0; index < a; index++) {
    let check = document.querySelector("#toDos" + index);
    check.addEventListener("change", isCheckOrNOt, false);
  }
}
function isCheckOrNOt(event) {
  if (this.checked) {
    count += 1;
    //let list = removeItem(this.value)
    // console.log(list);
    removeArray.push(this.value);
    console.log("Checkbox is checked..", this.value, count);

    //setLocalStorage(list)
  } else {
    count -= 1;
    let indexOfValue = removeArray.indexOf(this.value);
    removeArray.splice(indexOfValue, 1);
    console.log("Checkbox is not checked..", count, removeArray);
  }
  if (count == 0) {
    document.getElementById("top").style.display = "none";
  } else {
    document.getElementById("count").innerHTML =
      count + "  " + "items Selected";
    document.getElementById("count").style.display = "inline-block";
    document.getElementById("top").style.display = "block";
  }
}
function removeItem() {
  let a = document.querySelectorAll(".toDoSelct");
  let toDo = JSON.parse(localStorage.getItem("toDoLists"));
  for (let index = 0; index < removeArray.length; index++) {
    const element = removeArray[index];
    console.log(element);
    let indexOfValue = toDo.indexOf(element);
    toDo.splice(indexOfValue, 1);
    console.log(toDo);
  }
  setLocalStorage(toDo);
  document.getElementById("top").style.display = "none";
}
