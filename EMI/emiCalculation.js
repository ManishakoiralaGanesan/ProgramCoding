var array = [];

function myFunction(principal, rate, duration) {
  let emi = calculateMonthlyEmi(principal, rate, duration);
  let monthly_rate = monthlyInterestRate(rate);
  monthlyIntrest(principal, monthly_rate, emi, duration);
}
function monthlyInterestRate(rate) {
  //p * r(1 + r) ^ n / (1 + r) ^ n - 1
  let monthly_rate = rate / 12;
  monthly_rate /= 100;
  monthly_rate = monthly_rate;
  return monthly_rate;
}
function calculateMonthlyEmi(principal, rate, duration) {
  let monthlyRate = monthlyInterestRate(rate);
  console.log(monthlyRate);

  let pow = 1 + parseFloat(monthlyRate); // 1+r
  pow = Math.pow(pow, duration); // (1+r)^n
  console.log("pow", pow);

  let interstrate = principal * monthlyRate * pow; // formula p*r*(1+r)^n
  interstrate = interstrate;

  let minusOne = pow - 1;
  minusOne = minusOne;

  interstrate = interstrate / minusOne; // p*r*(1+r)^n/(1+r)^n -1
  interstrate = interstrate;

  let totCost = totalAmount(interstrate, duration);
  let totInterst = totalInterest(totCost, principal);
  printDetails(principal, interstrate, totInterst, totCost);
  return interstrate;
}

function totalInterest(totCost, principal) {
  return totCost - principal;
}
function totalAmount(interstrate, duration) {
  let totCost = interstrate * duration;
  totCost = totCost;
  console.log(totCost);
  return totCost;
}
function printDetails(principal, interstrate, totInterst, totCost) {
  document.getElementById("principal").innerHTML = "PRINCIPAL = " + principal;
  document.getElementById("loanEmi").innerHTML =
    "LOAN EMI = " + Math.floor(interstrate); //monthly
  document.getElementById("totInterst").innerHTML =
    "TOTAL INTEREST = " + Math.floor(totInterst); //totinterst 12months
  document.getElementById("totpay").innerHTML =
    "TOTAL  = " + Math.floor(totCost); //total payment 12month
}
function monthlyIntrest(principal, rate, emi, duration) {
  let openingBalance = principal;
  let closingBalance = openingBalance;
  let emiDetails;
  console.log(duration);
  for (let index = 0; index < duration; index++) {
    let simpleInterest = calSimpleInterest(closingBalance, rate);
    simpleInterest = Math.round(simpleInterest);
    emi = Math.floor(emi);
    let principalEmi = emi - simpleInterest;
    principalEmi = principalEmi;
    closingBalance -= principalEmi;
    console.log(
      openingBalance,
      principalEmi,
      simpleInterest,
      emi,
      closingBalance
    );
    emiDetails = {
      openingBalance,
      principalEmi,
      simpleInterest,
      emi,
      closingBalance,
    };
    array.push(emiDetails);
  }

  createEmiTable();
}
function calSimpleInterest(principal, rate) {
  let interest = principal * rate;
  return interest;
}
function createEmiTable() {
  console.log(array);
  let table = document.getElementById("emiTable");
  let th = document.getElementsByTagName("th").length;
  console.log(th, array.length);
  array.forEach((element) => {
    let row = table.insertRow();
    let cell1 = row.insertCell(0);
    cell1.innerHTML = element.openingBalance;
    let cell2 = row.insertCell(1);
    cell2.innerHTML = element.principalEmi;
    let cell3 = row.insertCell(2);
    cell3.innerHTML = element.simpleInterest;
    let cell4 = row.insertCell(3);
    cell4.innerHTML = element.emi;
    let cell5 = row.insertCell(4);
    cell5.innerHTML = element.closingBalance;
  });
}
