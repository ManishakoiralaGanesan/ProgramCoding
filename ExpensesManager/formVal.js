var array = [];

function addValue() {
  const form = document.getElementById("form1");
  const transactionId = form["transaction_id"].value;
  const description = form["Description"].value;
  const amount = form["amount"].value;
  const type = form["type"].value;
  const obj = {
    transactionId,
    description,
    amount,
    type,
  };
  array.push(obj);
  console.log(array.length);
  myFunction(obj);
}
function myFunction(obj) {
  let table = document.getElementById("table");
  let cols = document.getElementsByTagName("th").length;
  let row = table.insertRow();
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  cell1.innerHTML = obj.transactionId;
  cell2.innerHTML = obj.description;
  cell3.innerHTML = obj.amount;
  cell4.innerHTML = obj.type;
}
