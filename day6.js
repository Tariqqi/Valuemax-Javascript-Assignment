// Calculator
let btnAdd = document.querySelector(".addbtn");
let btnSubtract = document.querySelector(".subbtn");
let btnMultiply = document.querySelector(".mulbtn");
let btnDivide = document.querySelector(".divbtn");

let numberone;
let numbertwo;

function bigGuy(symbol, operation) {
  numberone = Number(document.querySelector("#myinput1").value);
  numbertwo = Number(document.querySelector("#myinput2").value);
  document.getElementById("symbol").innerHTML = symbol;
  document.getElementById("answer").innerHTML = `= ${operation()}`;
}

btnAdd.addEventListener("click", () => {
  bigGuy("+", () => numberone + numbertwo);
});

btnSubtract.addEventListener("click", () => {
  bigGuy("-", () => numberone - numbertwo);
});

btnMultiply.addEventListener("click", () => {
  bigGuy("*", () => numberone * numbertwo);
});

btnDivide.addEventListener("click", () => {
  bigGuy("/", () =>
    numbertwo === 0 ? "Cannot divide by zero" : numberone / numbertwo
  );
});

// Investment Calculator
document.querySelector(".calculateInvestment").addEventListener("click", () => {
  let investmentAmount = Number(
    document.querySelector("#investmentAmount").value
  );
  let duration = Number(document.querySelector("#investmentDuration").value);
  let interestRate = 0.25;

  let totalInterest = investmentAmount * interestRate  * duration;
  let totalInvest = investmentAmount + totalInterest;

  document.querySelector("#investmentResult").innerHTML =
    `At the end of ${duration} months, you will withdraw ` +
    `₦${totalInvest} if you invest  ₦${investmentAmount} with us.`;
});

// Loan Calculator
document.querySelector(".calculateLoan").addEventListener("click", () => {
  let loanAmount = Number(document.querySelector("#loanAmount").value);
  let duration = Number(document.querySelector("#loanDuration").value);
  let interestRate = 0.25;

  let totalInterest = loanAmount * interestRate;
  let totalPayable = loanAmount + totalInterest;
  let monthlyRepay = totalPayable / duration;

  document.querySelector("#loanResult").innerHTML =
    `₦${totalPayable} is the total amount to return for ${duration} months and ` +
    `₦${monthlyRepay} is the amount to pay monthly.`;
});
