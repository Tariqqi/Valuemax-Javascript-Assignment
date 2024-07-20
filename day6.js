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
    bigGuy("/", () => (numbertwo === 0 ? "Cannot divide by zero" : numberone / numbertwo));
});
